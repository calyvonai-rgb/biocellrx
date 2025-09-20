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
          <img 
            src={healingPotentialCards} 
            alt="Healing potential with stem cell therapy solutions"
            className="w-full max-w-4xl h-auto object-contain"
          />
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