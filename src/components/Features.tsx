import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Shield,
  Zap
} from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import videoThumbnail from "@/assets/video-thumbnail.jpg";
import whyChooseImage from "@/assets/biocellrx-logo-new.png";

const Features = () => {

  const features = [
    {
      icon: Users,
      title: "Expert Medical Professionals",
      description: "Our team of experienced medical professionals provides personalized assessments and custom recovery plans tailored to your unique health needs.",
      badge: "Personalized Care"
    },
    {
      icon: Shield,
      title: "Scientifically-Backed Solutions",
      description: "We provide only the safest and most effective regenerative products, grounded in extensive research and clinical studies with regulatory compliance.",
      badge: "FDA Compliant"
    },
    {
      icon: Zap,
      title: "Industry-Leading Innovation",
      description: "Access to the most clinically advanced cellular products including MSC Exosomal Lysate, CBSC cryo, and fresh MSC stem cells.",
      badge: "Advanced Technology"
    }
  ];

  return (
    <section id="about" className="py-20 bg-medical-light">
      <div className="container mx-auto px-6">
        {/* Video Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              See Our Process in Action
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-accent/20">
              <div style={{padding:"56.25% 0 0 0", position:"relative"}} className="rounded-xl overflow-hidden video-container">
                <iframe 
                  src="https://player.vimeo.com/video/1119586822?badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                  title="BIOCELL RX"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Why Choose BioCellRx Section */}
        <div className="relative">
          {/* Background Animations */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {/* Floating Circles */}
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-spin"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border border-accent/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-accent/20 rounded-full animate-spin"></div>
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Why Choose BioCellRx
              </h3>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Industry-leading cellular products backed by two decades of research and development in stem cell therapeutics
              </p>
            </div>

            {/* Logo and Cards Layout */}
            <div className="relative">
              {/* Large Logo Background */}
              <div className="flex justify-center mb-8">
                <img 
                  src={whyChooseImage} 
                  alt="BioCellRx Logo - Premium cellular therapeutic solutions"
                  className="w-full max-w-3xl h-auto"
                />
              </div>

              {/* Feature Cards Positioned Over Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full px-4">
                  {features.map((feature, index) => (
                    <Card 
                      key={index} 
                      className="group relative bg-white/95 backdrop-blur-sm border-accent/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
                    >
                      {/* Card Background Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Animated Border Effect */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300"></div>
                      
                      <CardContent className="relative p-6 text-center">
                        {/* Icon with Hover Animation */}
                        <div className="relative mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                            <feature.icon className="w-6 h-6 text-primary group-hover:scale-125 transition-transform duration-300" />
                          </div>
                          
                          {/* Ripple Effect */}
                          <div className="absolute inset-0 w-12 h-12 mx-auto rounded-full border-2 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
                        </div>
                        
                        {/* Badge with Animation */}
                        <Badge 
                          variant="secondary" 
                          className="mb-3 group-hover:scale-105 transition-transform duration-300 bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {feature.badge}
                        </Badge>
                        
                        {/* Title with Stagger Animation */}
                        <h4 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h4>
                        
                        {/* Description with Fade Effect */}
                        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;