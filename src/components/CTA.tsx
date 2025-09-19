import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import labTherapyImage from "@/assets/lab-therapy-image.png";
import fitnessTherapyImage from "@/assets/fitness-therapy-image.png";
import cellsTherapyImage from "@/assets/cells-therapy-image.png";

const CTA = () => {
  const healingCards = [
    {
      image: labTherapyImage,
      title: "Cutting-edge stem cell therapies",
      description: "tailored to your specific health needs. Personalized treatments for optimal results."
    },
    {
      image: fitnessTherapyImage,
      title: "Safe and effective treatments with minimal downtime.",
      description: "Get back to living your life, pain-free."
    },
    {
      image: cellsTherapyImage,
      title: "Harnessing the power of your own cells",
      description: "for natural healing. Natural solutions for lasting relief and wellness."
    }
  ];

  return (
    <section className="py-20 bg-white text-medical-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Discover Your Healing Potential?
          </h2>
          <p className="text-xl text-medical-dark/80 mb-8 max-w-4xl mx-auto">
            Unlocking our Body's Innate Healing potential with Stem Cell therapy solutions. 
            Non invasive Cell therapy applications such as local treatment or systemic intravenous 
            potentially treats damaged soft tissue, reduces inflammation and promotes immunomodulation 
            for many unmet medical conditions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {healingCards.map((card, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-lg hover:shadow-2xl hover:shadow-accent/30 hover:scale-105 transition-all duration-500 group cursor-pointer overflow-hidden rounded-xl border-0"
            >
              <CardContent className="p-0">
                <div className="h-80 bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={`${card.title} illustration`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
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