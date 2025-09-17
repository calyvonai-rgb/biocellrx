import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Logo and Description */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Bigger Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/uploads/logo.png" 
                alt="BioCellRx Logo" 
                className="h-28 w-auto md:h-24"
              />
            </div>
            {/* Text Content wrapped around logo */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">BioCellRx</h3>
              <p className="text-white/70 leading-relaxed">
                Leading the future of regenerative medicine with advanced stem cell 
                therapies and premium wellness products. Transforming lives through 
                scientific innovation.
              </p>
            </div>
          </div>

          {/* Right Column - Links and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-white/70 hover:text-accent transition-colors">Home</a></li>
                <li><a href="/services" className="text-white/70 hover:text-accent transition-colors">Services</a></li>
                <li><a href="/about" className="text-white/70 hover:text-accent transition-colors">About</a></li>
                <li><a href="/contact" className="text-white/70 hover:text-accent transition-colors">Contact</a></li>
                <li><a href="/resources" className="text-white/70 hover:text-accent transition-colors">Knowledge Center</a></li>
              </ul>
            </div>

            {/* Contact Info and Social */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-white/70 mb-6">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+18585197305" className="hover:text-accent transition-colors">
                    (858) 519-7305
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:info@biocellrx.com" className="hover:text-accent transition-colors">
                    info@biocellrx.com
                  </a>
                </li>
              </ul>
              
              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-3">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/111531213660668"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1877F2] hover:text-[#1877F2]/80 transition-colors"
                    title="Follow us on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/biocellrx?igshid=YmMyMTA2M2Y%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E4405F] hover:text-[#E4405F]/80 transition-colors"
                    title="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/eloisa-sultan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors"
                    title="Connect with us on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="text-center">
            <p className="text-white/60 mb-4">
              © 2025 BioCellRx. All rights reserved. | Advanced regenerative medicine solutions.
            </p>
            <div className="flex justify-center items-center gap-4 text-sm">
              <a 
                href="/privacy-policy" 
                className="text-white/60 hover:text-accent transition-colors underline"
              >
                Privacy Policy
              </a>
              <span className="text-white/40">|</span>
              <a 
                href="/terms-of-service" 
                className="text-white/60 hover:text-accent transition-colors underline"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;