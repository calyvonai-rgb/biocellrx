import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import healingPotentialCards from "@/assets/healing-potential-cards.png";

const CTA = () => {

  return (
    <section className="py-20 bg-white text-medical-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Discover Your Healing Potential?
          </h2>
        </div>
        
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <img 
              src={healingPotentialCards} 
              alt="Healing potential with stem cell therapy solutions"
              className="w-full h-auto object-contain"
            />
            {/* Interactive overlay areas for each card */}
            <div className="absolute inset-0 flex">
              {/* Left card hover area */}
              <div className="flex-1 cursor-pointer hover:bg-white/10 transition-all duration-300 hover:scale-105 rounded-lg"></div>
              {/* Center card hover area */}
              <div className="flex-1 cursor-pointer hover:bg-white/10 transition-all duration-300 hover:scale-105 rounded-lg mx-2"></div>
              {/* Right card hover area */}
              <div className="flex-1 cursor-pointer hover:bg-white/10 transition-all duration-300 hover:scale-105 rounded-lg"></div>
            </div>
          </div>
        </div>
        
        
        <div className="text-center">
          <Link to="/contact">
            <Button variant="medical" size="lg" className="group">
              Book Your Consultation Today
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;