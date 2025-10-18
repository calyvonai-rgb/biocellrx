import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Ready to Discover Your Healing Potential?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Take the first step towards optimal health with BioCellRx's personalized 
          regenerative medicine solutions
        </p>
        
        <div className="mb-8">
          <img 
            src="/uploads/healing-potential.png" 
            alt="Healing potential - regenerative medicine solutions"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
          />
        </div>
        
        <Link to="/contact">
          <Button variant="medical" size="lg" className="group">
            Book Your Consultation Today
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;