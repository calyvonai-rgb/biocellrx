import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "After 20 years of chronic joint pain, BioCellRx's stem cell therapy gave me my life back. I can now enjoy activities I thought were impossible.",
      name: "Sarah M.",
      condition: "Chronic Joint Pain",
      rating: 5
    },
    {
      quote: "As a physician, I'm impressed by BioCellRx's SCIENTIFIC approach and the consistent results I see in my patients who use their therapies.",
      name: "Dr. Michael R.",
      condition: "Sports Medicine Specialist",
      rating: 5
    },
    {
      quote: "The personalized treatment plan and premium CBD products have significantly reduced my inflammation and improved my quality of life.",
      name: "Jennifer L.",
      condition: "Arthritis Recovery",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-medical-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Patient Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how BioCellRx's advanced regenerative therapies have transformed 
            lives and restored hope
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white relative overflow-hidden">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-accent" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-accent font-medium">
                    {testimonial.condition}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;