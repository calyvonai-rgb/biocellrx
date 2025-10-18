import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useRef, useCallback } from "react";
import { 
  Phone,
  ArrowRight,
  Mail,
  Clock,
  Facebook
} from "lucide-react";
import labHeroBg from "@/assets/lab-hero-bg.jpg";
import contactConsultationImage from "@/assets/contact-consultation-image.jpg";

const Contact = () => {
  const handleIframeRef = useCallback((node: HTMLIFrameElement | null) => {
    if (!node) return;

    console.log('Iframe mounted, applying visibility fixes');
    
    // Force visibility styles with dynamic height
    const forceVisible = () => {
      node.style.setProperty('display', 'block', 'important');
      node.style.setProperty('visibility', 'visible', 'important');
      node.style.setProperty('opacity', '1', 'important');
    };

    forceVisible();

    // Watch for any style changes
    const observer = new MutationObserver(() => {
      forceVisible();
    });

    observer.observe(node, {
      attributes: true,
      attributeFilter: ['style', 'class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Listen for height messages from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Verify origin for security
      if (event.origin !== 'https://api.leadconnectorhq.com') return;
      
      // Handle height resize messages
      if (event.data.type === 'resize' && event.data.height) {
        const iframe = document.getElementById('inline-Da3qqC7jNyKxwGeEQ9ex') as HTMLIFrameElement;
        if (iframe) {
          iframe.style.height = `${event.data.height}px`;
          console.log(`Iframe height adjusted to: ${event.data.height}px`);
        }
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

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
            <div className="bg-white rounded-2xl border border-border shadow-lg animate-fade-in [animation-delay:0.3s] overflow-hidden" style={{height: 'auto', minHeight: '400px', position: 'relative'}}>
              <iframe
                ref={handleIframeRef}
                src="https://api.leadconnectorhq.com/widget/form/Da3qqC7jNyKxwGeEQ9ex"
                className="w-full border-0"
                style={{
                  width:'100%', 
                  height:'1000px',
                  border:'none'
                }}
                scrolling="no"
                id="inline-Da3qqC7jNyKxwGeEQ9ex" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="BioCellRx WF"
                data-height="689"
                data-layout-iframe-id="inline-Da3qqC7jNyKxwGeEQ9ex"
                data-form-id="Da3qqC7jNyKxwGeEQ9ex"
                title="BioCellRx WF"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Committed to delivering safe, effective, and transformative treatments.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is standing by to help answer your questions on Regenerative options available.
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