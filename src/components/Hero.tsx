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
      <div className="relative z-10 w-full px-2 sm:px-6 pt-20 sm:pt-32 pb-12">
        <div className="w-full max-w-none sm:max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-6 text-white leading-tight px-2">
            Reclaim Your Passion. Rediscover Life with Our{" "}
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Stem Cell Therapy
            </span>
          </h1>

          {/* Subheadline with hot keywords */}
          <p className="text-xl sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-8 w-full sm:max-w-4xl mx-auto leading-relaxed px-2">
            BioCellRx empowers you to achieve a better quality of life through advanced, natural healing. Our cutting-edge stem cell therapies and premium wellness products work with your body, not against it, to restore optimal health. It's time to feel your best again.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center mb-12 sm:mb-12 px-2 w-full">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="medical" size="lg" className="group hover-scale text-lg sm:text-base px-8 py-5 sm:px-6 sm:py-3 w-full sm:w-auto">
                Get Free Stem Cell Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+18585197305" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-black hover-scale text-lg sm:text-base px-8 py-5 sm:px-6 sm:py-3 w-full sm:w-auto">
                Call (858) 519-7305
              </Button>
            </a>
          </div>

          {/* Stats - Hidden on Mobile */}
          <div className="hidden sm:grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full mb-2 sm:mb-3">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="text-white font-semibold text-sm sm:text-base">Clinically Advanced</div>
              <div className="text-white/70 text-sm sm:text-sm">Cellular Products</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full mb-2 sm:mb-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="text-white font-semibold text-sm sm:text-base">20+ Years</div>
              <div className="text-white/70 text-sm sm:text-sm">Research & Development</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full mb-2 sm:mb-3">
                <Network className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="text-white font-semibold text-sm sm:text-base">Network of</div>
              <div className="text-white/70 text-sm sm:text-sm">Expert Practitioners</div>
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