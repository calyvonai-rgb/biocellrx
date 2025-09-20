import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

// Input sanitization utility
const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

// Validation utilities
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
};

const validatePhone = (phone: string): boolean => {
  // Remove all non-digits to check length
  const digitsOnly = phone.replace(/\D/g, '');
  // Allow formats like: (555) 123-4567, 555-123-4567, 555.123.4567, +1 555 123 4567
  const phoneRegex = /^[\+]?[1]?[\s\-\.]?[\(]?[0-9]{3}[\)]?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4}$/;
  return phoneRegex.test(phone) && digitsOnly.length >= 10 && digitsOnly.length <= 15;
};

const validateTextInput = (input: string, maxLength: number): boolean => {
  return input.length <= maxLength;
};

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin"
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  primaryHealthConcern?: string;
  additionalInfo?: string;
  agreeToComms: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    // Enhanced input validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      throw new Error("Missing required fields");
    }

    // Validate field lengths
    if (!validateTextInput(formData.firstName, 50) || 
        !validateTextInput(formData.lastName, 50) ||
        !validateTextInput(formData.email, 254) ||
        !validateTextInput(formData.phone, 20)) {
      throw new Error("Input field length exceeds maximum allowed");
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      throw new Error("Invalid email format");
    }

    // Validate phone format
    if (!validatePhone(formData.phone)) {
      throw new Error("Invalid phone number format");
    }

    // Validate optional fields if provided
    if (formData.primaryHealthConcern && !validateTextInput(formData.primaryHealthConcern, 200)) {
      throw new Error("Primary health concern exceeds maximum length");
    }

    if (formData.additionalInfo && !validateTextInput(formData.additionalInfo, 1000)) {
      throw new Error("Additional information exceeds maximum length");
    }
    
    console.log("Received valid contact form submission");

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store the submission in the database
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        primary_health_concern: formData.primaryHealthConcern,
        additional_info: formData.additionalInfo,
        agree_to_comms: formData.agreeToComms,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log("Stored submission in database:", submission);

    // Send notification email to info@biocellrx.com with sanitized content
    const emailHtml = `
      <h2>New Contact Form Submission - BioCellRX</h2>
      <p><strong>Submission ID:</strong> ${escapeHtml(submission.id)}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(new Date(submission.created_at).toLocaleString())}</p>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${escapeHtml(formData.firstName)} ${escapeHtml(formData.lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(formData.phone)}</p>
      
      <h3>Health Information</h3>
      <p><strong>Primary Health Concern:</strong> ${escapeHtml(formData.primaryHealthConcern || 'Not specified')}</p>
      
      <h3>Additional Information</h3>
      <p>${escapeHtml(formData.additionalInfo || 'None provided')}</p>
      
      <h3>Communication Preferences</h3>
      <p><strong>Agrees to communications:</strong> ${formData.agreeToComms ? 'Yes' : 'No'}</p>
      
      <hr>
      <p><small>This notification was sent automatically from the BioCellRX website contact form.</small></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "BioCellRX Website <onboarding@resend.dev>",
      to: ["info@biocellrx.com"],
      subject: `New Contact Form Submission - ${escapeHtml(formData.firstName)} ${escapeHtml(formData.lastName)}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({
        success: true,
        submissionId: submission.id,
        emailId: emailResponse.id
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);