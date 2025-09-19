import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  const healingCards = [
    {
      image: "/uploads/image.png", // Lab equipment image
      title: "Cutting-edge stem cell therapies",
      description: "tailored to your specific health needs. Personalized treatments for optimal results."
    },
    {
      image: "/uploads/image.png", // Athletic/fitness image  
      title: "Safe and effective treatments with minimal downtime.",
      description: "Get back to living your life, pain-free."
    },
    {
      image: "/uploads/image.png", // Cellular/microscope image
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
          {healingCards.map((card, index) => (
            <Card 
              key={index} 
              className="bg-white border-accent/30 backdrop-blur-sm hover:shadow-xl hover:shadow-accent/20 hover:scale-105 transition-all duration-500 group cursor-pointer overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="h-48 bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={`${card.title} illustration`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center bg-white">
                  <h3 className="text-xl font-semibold text-medical-dark mb-4 group-hover:text-accent transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-medical-dark/80 leading-relaxed">
                    {card.description}
                  </p>
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