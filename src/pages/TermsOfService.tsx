import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, AlertTriangle, Scale, UserCheck } from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the BioCellRx website (biocellrx.com) and our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.",
        "If you do not agree with any part of these terms, you must not use our website or services.",
        "We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms."
      ]
    },
    {
      icon: UserCheck,
      title: "Use of Services",
      content: [
        "Eligibility: You must be at least 18 years old and have the legal capacity to enter into agreements to use our services.",
        "Medical Services: Our regenerative medicine services are provided by licensed healthcare professionals and are subject to medical regulations and professional standards.",
        "Consultation Required: All treatments and therapeutic recommendations require proper medical consultation and evaluation.",
        "Compliance: You agree to provide accurate information and comply with all medical recommendations and instructions."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Medical Disclaimer",
      content: [
        "Not Medical Advice: Information on our website is for educational purposes only and does not constitute medical advice, diagnosis, or treatment recommendations.",
        "Professional Consultation: Always consult with qualified healthcare professionals before making medical decisions or starting any treatment.",
        "Individual Results: Treatment outcomes may vary between individuals. Past results do not guarantee future outcomes.",
        "Quality Compliance: Our products and services comply with applicable quality regulations for regenerative medicine and cellular therapies.",
        "Risk Acknowledgment: You understand that all medical treatments carry inherent risks, and you assume responsibility for your treatment decisions."
      ]
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      content: [
        "Service Limitations: BioCellRx provides services to the best of our ability but makes no warranties about treatment outcomes or results.",
        "No Guarantees: We do not guarantee specific health improvements or cure of any medical condition.",
        "Liability Cap: Our liability is limited to the amount paid for services, except where prohibited by law.",
        "Third-Party Services: We are not liable for actions or services provided by third-party healthcare providers or laboratories.",
        "Force Majeure: We are not liable for delays or failures due to circumstances beyond our reasonable control."
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-20 bg-gradient-to-r from-accent/10 to-accent/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                These Terms of Service govern your use of the BioCellRx website and services. 
                Please read these terms carefully before using our services.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Effective Date:</strong> January 1, 2025 | <strong>Last Updated:</strong> January 1, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link to="/">
                  <Button variant="outline" className="mb-6">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>

              {/* Introduction */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Welcome to BioCellRx. These Terms of Service ("Terms") govern your access to and use of our website 
                    located at{" "}
                    <a href="https://biocellrx.com" className="text-accent hover:text-accent/80 underline">
                      biocellrx.com
                    </a>{" "}
                    and our regenerative medicine services (collectively, the "Services").
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    BioCellRx is a leader in regenerative medicine, providing advanced cellular therapies, 
                    stem cell treatments, and medical-grade wellness products. Our services are designed to 
                    support your body's natural healing processes through scientifically-backed treatments.
                  </p>
                </CardContent>
              </Card>

              {/* Main Sections */}
              {sections.map((section, index) => (
                <Card key={index} className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-bold text-foreground">
                      <section.icon className="w-6 h-6 text-accent mr-3" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.content.map((item, idx) => (
                      <p key={idx} className="text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}

              {/* Intellectual Property */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Intellectual Property Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    All content on our website, including text, graphics, logos, images, videos, and software, 
                    is the property of BioCellRx and is protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="list-disc">You may not reproduce, distribute, or create derivative works without our written permission</li>
                    <li className="list-disc">BioCellRx trademarks and service marks may not be used without our express consent</li>
                    <li className="list-disc">You may view and print content for personal, non-commercial use only</li>
                    <li className="list-disc">All research data and methodologies remain proprietary to BioCellRx</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Privacy and Data */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Privacy and Data Protection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Your privacy is important to us. Our collection, use, and protection of your personal information 
                    is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="list-disc">Medical information is protected under HIPAA and applicable privacy laws</li>
                    <li className="list-disc">We implement appropriate security measures to protect your data</li>
                    <li className="list-disc">You have certain rights regarding your personal information</li>
                    <li className="list-disc">We do not sell or rent your personal information to third parties</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Prohibited Uses */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Prohibited Uses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    You agree not to use our website or services for any of the following purposes:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="list-disc">Any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li className="list-disc">To violate any international, federal, provincial, or state regulations or laws</li>
                    <li className="list-disc">To transmit or procure the sending of any advertising or promotional material</li>
                    <li className="list-disc">To impersonate or attempt to impersonate BioCellRx or our employees</li>
                    <li className="list-disc">To harvest or collect email addresses or other contact information</li>
                    <li className="list-disc">To interfere with or circumvent security features of the website</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Governing Law and Jurisdiction</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms of Service and your use of our website are governed by and construed in accordance 
                    with the laws of the United States and applicable state regulations governing healthcare services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Any disputes arising from these terms or your use of our services will be subject to the 
                    exclusive jurisdiction of the courts in the appropriate jurisdiction where BioCellRx operates.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>BioCellRx</strong></p>
                    <p>Email: <a href="mailto:info@biocellrx.com" className="text-accent hover:text-accent/80">info@biocellrx.com</a></p>
                    <p>Phone: <a href="tel:+18585197305" className="text-accent hover:text-accent/80">(858) 519-7305</a></p>
                    <p>Website: <a href="https://biocellrx.com" className="text-accent hover:text-accent/80">biocellrx.com</a></p>
                  </div>
                </CardContent>
              </Card>

              {/* Severability */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Severability and Amendments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be 
                    limited or eliminated to the minimum extent necessary so that the remaining Terms will otherwise 
                    remain in full force and effect.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We may revise these Terms of Service at any time without notice. By using our website and services, 
                    you are agreeing to be bound by the current version of these Terms of Service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;