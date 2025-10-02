import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Shield,
  Zap
} from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import whyChooseImage from "@/assets/white-biocellrx-logo.png";
import { useEffect, useRef, useState } from "react";

const Features = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    console.log("Features video component mounted");
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Features IntersectionObserver triggered:", entry.isIntersecting);
        if (entry.isIntersecting) {
          console.log("Features video should load now");
          setIsVideoVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      console.log("Features videoRef exists, observing");
      observer.observe(videoRef.current);
    } else {
      console.log("Features videoRef is null!");
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log("Features isVideoVisible changed to:", isVideoVisible);
  }, [isVideoVisible]);

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
        {/* Video Section - Ready for new video */}
        <div className="mb-20" ref={videoRef}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              See Our Process in Action
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-accent/20">
              <div style={{padding:"75% 0 0 0", position:"relative"}} className="video-container">
                {isVideoVisible ? (
                  <iframe 
                    ref={iframeRef}
                    src="https://player.vimeo.com/video/1119586822?autoplay=1&muted=1&controls=1&loop=0&autopause=0"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}
                    title="BioCellRx Process"
                    className="rounded-2xl shadow-xl video-fill"
                  />
                ) : (
                  <div 
                    className="absolute inset-0 bg-gray-100 flex items-center justify-center video-fill"
                    style={{
                      backgroundImage: `url('https://i.vimeocdn.com/video/1119586822-1234567890_1280x720.jpg')`, 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Why Choose BioCellRx Section */}
        <div className="relative">
          <div className="max-w-7xl mx-auto relative">
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground px-4">
                Why Choose BioCellRx
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
                Industry-leading cellular products backed by two decades of research and development in stem cell therapeutics
              </p>
            </div>

            {/* Logo with Cards Overlay */}
            <div className="relative flex justify-center items-center min-h-[600px] md:min-h-[700px]">
              {/* White Logo Background */}
              <div className="relative w-full max-w-5xl">
                <img 
                  src={whyChooseImage} 
                  alt="BioCellRx Logo - Premium cellular therapeutic solutions"
                  className="w-full h-auto opacity-90 md:opacity-90 opacity-100"
                />
                
                {/* Feature Cards Positioned Over Logo */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl w-full">
                    {features.map((feature, index) => (
                      <Card 
                        key={index} 
                        className="group relative bg-white/60 md:bg-white/70 backdrop-blur-sm border-accent/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden mx-auto w-full max-w-sm md:max-w-none hover:bg-white/80"
                      >
                        {/* Card Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Animated Border Effect */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300"></div>
                        
                        <CardContent className="relative p-4 md:p-6 text-center">
                          {/* Icon with Hover Animation */}
                          <div className="relative mb-3 md:mb-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                              <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-125 transition-transform duration-300" />
                            </div>
                            
                            {/* Ripple Effect */}
                            <div className="absolute inset-0 w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full border-2 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
                          </div>
                          
                          {/* Badge with Animation */}
                          <Badge 
                            variant="secondary" 
                            className="mb-2 md:mb-3 group-hover:scale-105 transition-transform duration-300 bg-primary/10 text-primary border-primary/20 text-xs"
                          >
                            {feature.badge}
                          </Badge>
                          
                          {/* Title with Stagger Animation */}
                          <h4 className="text-sm md:text-lg font-bold mb-2 md:mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                            {feature.title}
                          </h4>
                          
                          {/* Description with Fade Effect */}
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
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
      </div>
    </section>
  );
};

export default Features;