import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Award, Network } from "lucide-react";
import { Link } from "react-router-dom";
import labHeroBg from "@/assets/lab-hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen h-screen sm:min-h-screen sm:h-auto flex items-center justify-center overflow-hidden" role="banner" aria-label="BioCellRx Hero Section">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${labHeroBg})`,
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-medical-dark/90 to-medical-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 pt-32 sm:pt-32 pb-12">
        <div className="w-full max-w-none sm:max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight px-2 mt-24 sm:mt-0">
            Innovative Health Through{" "}
            <br />
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Regenerative Medicine
            </span>
          </h1>

          {/* Subheadline with hot keywords */}
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 w-full sm:max-w-4xl mx-auto leading-relaxed px-4 sm:px-2">
            Leading the future of Regenerative medicine with advanced Stem Cell therapies and premium wellness products. Transforming lives through Scientific innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4 sm:px-2 w-full max-w-2xl mx-auto">
            <Link to="/contact" className="w-full sm:w-auto flex-1 sm:flex-initial">
              <Button variant="medical" size="lg" className="group hover-scale text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-5 w-full sm:w-auto min-w-[200px]">
                Get Free Stem Cell Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+18585197305" className="w-full sm:w-auto flex-1 sm:flex-initial">
              <Button variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-black hover-scale text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-5 w-full sm:w-auto min-w-[180px]">
                Call (858) 519-7305
              </Button>
            </a>
          </div>

          {/* Stats - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-full mb-3 sm:mb-4">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
              </div>
              <div className="text-white font-semibold text-base sm:text-lg">Clinically Advanced</div>
              <div className="text-white/70 text-sm sm:text-base">Cellular Products</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-full mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
              </div>
              <div className="text-white font-semibold text-base sm:text-lg">20+ Years</div>
              <div className="text-white/70 text-sm sm:text-base">Research & Development</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-full mb-3 sm:mb-4">
                <Network className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
              </div>
              <div className="text-white font-semibold text-base sm:text-lg">Network of</div>
              <div className="text-white/70 text-sm sm:text-base">Expert Practitioners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-accent to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;