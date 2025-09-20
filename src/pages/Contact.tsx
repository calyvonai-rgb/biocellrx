import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Phone,
  ArrowRight,
  Mail,
  Clock,
  Facebook
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import labHeroBg from "@/assets/lab-hero-bg.jpg";
import contactConsultationImage from "@/assets/contact-consultation-image.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    primaryHealthConcern: "",
    additionalInfo: "",
    agreeToComms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreeToComms: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeToComms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to receive communications to proceed.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Submit form data to edge function
      const { data, error } = await supabase.functions.invoke('send-contact-notification', {
        body: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          primaryHealthConcern: formData.primaryHealthConcern,
          additionalInfo: formData.additionalInfo,
          agreeToComms: formData.agreeToComms,
        }
      });

      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Error",
          description: "There was a problem submitting your form. Please try again.",
          variant: "destructive",
        });
        return;
      }

      console.log('Form submitted successfully:', data);
      
      toast({
        title: "Form Submitted Successfully!",
        description: "We'll contact you soon to schedule your consultation.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        primaryHealthConcern: "",
        additionalInfo: "",
        agreeToComms: false
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "(858) 519-7305",
      description: "Call today to schedule an appointment or phone consultation",
      href: "tel:+18585197305"
    },
    {
      icon: Mail,
      title: "Email", 
      value: "info@biocellrx.com",
      description: "Send us your questions or new patient forms",
      href: "mailto:info@biocellrx.com"
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Monday - Friday: 8AM–8PM",
      description: "Saturday: 8AM–6PM, Sunday: Closed",
      href: null
    },
    {
      icon: Facebook,
      title: "Follow Us",
      value: "Facebook Page",
      description: "Stay updated with our latest treatments and wellness tips",
      href: "https://www.facebook.com/111531213660668"
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen sm:h-auto sm:py-32 flex items-center justify-center text-white overflow-hidden animate-fade-in"
        style={{
          backgroundImage: `url(${labHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
              Ready to Transform
              <span className="block bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent">
                Your Health?
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.2s] px-4">
              Schedule your personalized consultation today and discover how our advanced regenerative therapies can help you achieve optimal wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in [animation-delay:0.4s] px-4">
              <a href="tel:+18585197305">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-semibold hover-scale">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (858) 519-7305
                </Button>
              </a>
              <a href="#contact-form">
                <Button variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-black hover-scale">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section id="contact-form" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Contact us directly with any questions, comments, or scheduling inquiries. Our team is here to support your wellness journey.
            </p>
            
            <div className="mb-12">
              <img 
                src={contactConsultationImage} 
                alt="Professional medical consultation and patient care"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Contact Form Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left Side - Contact Information */}
            <div className="space-y-6 lg:space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex-shrink-0">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-base sm:text-lg font-medium text-accent hover:text-accent/80 transition-colors block mb-1 sm:mb-2"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base sm:text-lg font-medium text-accent mb-1 sm:mb-2">
                        {info.value}
                      </p>
                    )}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-lg animate-fade-in [animation-delay:0.3s]">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm sm:text-base text-foreground font-medium">
                      First Name <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your first name"
                      className="bg-white border-border focus:border-accent focus:ring-accent/20 text-sm sm:text-base h-10 sm:h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm sm:text-base text-foreground font-medium">
                      Last Name <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your last name"
                      className="bg-white border-border focus:border-accent focus:ring-accent/20 text-sm sm:text-base h-10 sm:h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base text-foreground font-medium">
                    Email Address <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="bg-white border-border focus:border-accent focus:ring-accent/20 text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm sm:text-base text-foreground font-medium">
                    Phone Number <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="(555) 123-4567"
                    className="bg-white border-border focus:border-accent focus:ring-accent/20 text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="primaryHealthConcern" className="text-sm sm:text-base text-foreground font-medium">
                    Primary Health Concern
                  </Label>
                  <Input
                    id="primaryHealthConcern"
                    name="primaryHealthConcern"
                    value={formData.primaryHealthConcern}
                    onChange={handleInputChange}
                    placeholder="What brings you to BioCellRx?"
                    className="bg-white border-border focus:border-accent focus:ring-accent/20 text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-sm sm:text-base text-foreground font-medium">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your health goals or any questions you have..."
                    className="bg-white border-border focus:border-accent focus:ring-accent/20 resize-none text-sm sm:text-base min-h-[100px]"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeToComms"
                    checked={formData.agreeToComms}
                    onCheckedChange={handleCheckboxChange}
                    required
                    className="border-border data-[state=checked]:bg-accent data-[state=checked]:border-accent mt-1 flex-shrink-0"
                  />
                  <Label htmlFor="agreeToComms" className="text-xs sm:text-sm leading-relaxed text-muted-foreground cursor-pointer">
                    I agree to receive communications from BioCellRx regarding my inquiry and understand that I can unsubscribe at any time. <span className="text-accent">*</span>
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-black font-semibold py-3 sm:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base"
                >
                  Send New Patient Form
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't wait to start feeling your best. Our team is standing by to help you discover the transformative power of regenerative medicine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18585197305">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (858) 519-7305
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;