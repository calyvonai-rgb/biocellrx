import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-medical-dark to-medical-dark/90 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Discover Your Healing Potential?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Take the first step towards optimal health with BioCellRx's personalized 
          regenerative medicine solutions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center text-white/80">
            <CheckCircle className="w-5 h-5 text-accent mr-2" />
            Personalized assessments
          </div>
          <div className="hidden sm:block text-white/40">•</div>
          <div className="flex items-center text-white/80">
            <CheckCircle className="w-5 h-5 text-accent mr-2" />
            Expert medical guidance
          </div>
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