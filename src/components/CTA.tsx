import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FlaskConical, Dumbbell, Microscope } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  const healingCards = [
    {
      icon: FlaskConical,
      title: "Cutting-edge stem cell therapies",
      description: "tailored to your specific health needs. Personalized treatments for optimal results."
    },
    {
      icon: Dumbbell,
      title: "Safe and effective treatments with minimal downtime.",
      description: "Get back to living your life, pain-free."
    },
    {
      icon: Microscope,
      title: "Harnessing the power of your own cells",
      description: "for natural healing. Natural solutions for lasting relief and wellness."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-medical-dark to-medical-dark/90 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Discover Your Healing Potential?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            Unlocking our Body's Innate Healing potential with Stem Cell therapy solutions. 
            Non invasive Cell therapy applications such as local treatment or systemic intravenous 
            potentially treats damaged soft tissue, reduces inflammation and promotes immunomodulation 
            for many unmet medical conditions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {healingCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card key={index} className="bg-white/10 border-accent/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
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