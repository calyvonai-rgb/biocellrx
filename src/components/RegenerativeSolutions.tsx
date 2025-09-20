import { Card, CardContent } from "@/components/ui/card";
import { 
  Bone,
  Heart,
  Shield,
  Brain
} from "lucide-react";

const RegenerativeSolutions = () => {
  const solutions = [
    {
      icon: Bone,
      title: "Orthopedic Regeneration",
      description: "Joint, cartilage, and musculoskeletal repair.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Anti-Aging & Longevity",
      description: "Cellular rejuvenation and vitality enhancement.",
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: Shield,
      title: "Immune & Inflammatory Conditions",
      description: "Supporting balance and recovery.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Brain,
      title: "Neurological Support",
      description: "Promoting brain and nerve health.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Cutting-Edge Regenerative Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${solution.color} rounded-full mb-4`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegenerativeSolutions;