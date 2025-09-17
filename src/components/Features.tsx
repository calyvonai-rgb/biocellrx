import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Shield,
  Zap
} from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import videoThumbnail from "@/assets/video-thumbnail.jpg";
import whyChooseImage from "@/assets/why-choose-biocellrx.png";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const Features = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showUnmuteButton, setShowUnmuteButton] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVideoVisible) {
          setIsVideoVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [isVideoVisible]);

  // Handle autoplay with sound fallback
  useEffect(() => {
    const handleAutoplay = async () => {
      if (isVideoVisible && videoElementRef.current) {
        const video = videoElementRef.current;
        
        // Add a small delay to ensure video is loaded
        setTimeout(async () => {
          try {
            // Try to play with sound first
            video.muted = false;
            video.currentTime = 0; // Reset to beginning
            await video.play();
            setIsMuted(false);
            setShowUnmuteButton(false);
          } catch (error) {
            try {
              // Fallback to muted autoplay
              video.muted = true;
              video.currentTime = 0; // Reset to beginning
              await video.play();
              setIsMuted(true);
              setShowUnmuteButton(true);
            } catch (mutedError) {
              console.log('Autoplay failed even with muted video:', mutedError);
            }
          }
        }, 100);
      }
    };

    if (isVideoVisible) {
      handleAutoplay();
    }
  }, [isVideoVisible]);

  const toggleMute = () => {
    if (videoElementRef.current) {
      const video = videoElementRef.current;
      video.muted = !video.muted;
      setIsMuted(video.muted);
      setShowUnmuteButton(video.muted);
    }
  };

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

          <div className="max-w-4xl mx-auto" ref={videoRef}>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-accent/20">
              <div style={{padding:"56.25% 0 0 0", position:"relative"}} className="rounded-xl overflow-hidden video-container">
                {isVideoVisible ? (
                  <iframe 
                    src="https://player.vimeo.com/video/1117754950?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&controls=1&autoplay=1&muted=1"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}
                    title="BioCellRx Process"
                    className="rounded-xl"
                  />
                ) : (
                  <div 
                    className="absolute inset-0 bg-gray-100 flex items-center justify-center video-fill"
                    style={{backgroundImage: `url(${videoThumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
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
        
        {/* Features Grid with Enhanced Animations */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative bg-white border-accent/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300"></div>
              
              <CardContent className="relative p-8 text-center">
                {/* Icon with Hover Animation */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="w-8 h-8 text-primary group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
                </div>
                
                {/* Badge with Animation */}
                <Badge 
                  variant="secondary" 
                  className="mb-4 group-hover:scale-105 transition-transform duration-300 bg-primary/10 text-primary border-primary/20"
                >
                  {feature.badge}
                </Badge>
                
                {/* Title with Stagger Animation */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description with Fade Effect */}
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Why Choose BioCellRx Section with All Animations */}
        <div className="relative">
          {/* All Background Animations */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {/* Floating Circles */}
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-spin"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border border-accent/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-accent/20 rounded-full animate-spin"></div>
            
            {/* Animated Lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-1/3 right-10 w-12 h-12 border border-primary/25 rotate-45 animate-spin"></div>
            <div className="absolute bottom-1/2 left-20 w-8 h-8 bg-accent/20 rotate-12 animate-pulse"></div>

            {/* Moving Stem Cells */}
            <div className="absolute top-10 left-8 w-6 h-6 bg-primary/20 rounded-full animate-bounce" 
                 style={{ animationDelay: '0s', animationDuration: '3s' }}>
              <div className="absolute inset-1 bg-primary/30 rounded-full"></div>
              <div className="absolute top-1 left-1 w-2 h-2 bg-primary/50 rounded-full"></div>
            </div>
            
            <div className="absolute top-20 right-12 w-8 h-8 bg-accent/20 rounded-full animate-[float_4s_ease-in-out_infinite]" 
                 style={{ animationDelay: '1s' }}>
              <div className="absolute inset-1 bg-accent/30 rounded-full"></div>
              <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-accent/50 rounded-full"></div>
              <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-accent/40 rounded-full"></div>
            </div>
            
            <div className="absolute top-40 left-16 w-5 h-5 bg-primary/25 rounded-full animate-[drift_5s_linear_infinite]" 
                 style={{ animationDelay: '2s' }}>
              <div className="absolute inset-0.5 bg-primary/35 rounded-full"></div>
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
            </div>
            
            <div className="absolute top-60 right-20 w-7 h-7 bg-accent/15 rounded-full animate-[float_3.5s_ease-in-out_infinite]" 
                 style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-1 bg-accent/25 rounded-full"></div>
              <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-accent/45 rounded-full"></div>
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-accent/35 rounded-full"></div>
            </div>
            
            <div className="absolute bottom-32 left-12 w-6 h-6 bg-primary/18 rounded-full animate-[drift_4.5s_linear_infinite]" 
                 style={{ animationDelay: '1.5s' }}>
              <div className="absolute inset-1 bg-primary/28 rounded-full"></div>
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-primary/50 rounded-full"></div>
            </div>
            
            <div className="absolute bottom-16 right-16 w-4 h-4 bg-accent/22 rounded-full animate-[float_3s_ease-in-out_infinite]" 
                 style={{ animationDelay: '2.5s' }}>
              <div className="absolute inset-0.5 bg-accent/32 rounded-full"></div>
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-accent/55 rounded-full"></div>
            </div>

            <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-primary/20 rounded-full animate-[drift_3.8s_linear_infinite]" 
                 style={{ animationDelay: '1.2s' }}>
              <div className="absolute inset-0.5 bg-primary/30 rounded-full"></div>
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-primary/50 rounded-full"></div>
            </div>
            
            <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-accent/18 rounded-full animate-[float_4.2s_ease-in-out_infinite]" 
                 style={{ animationDelay: '0.8s' }}>
              <div className="absolute inset-1 bg-accent/28 rounded-full"></div>
              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-accent/45 rounded-full"></div>
            </div>
          </div>

          {/* Why Choose BioCellRx Image */}
          <div className="max-w-6xl mx-auto relative group">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <img 
              src={whyChooseImage} 
              alt="Why Choose BioCellRx - Industry-leading cellular products backed by two decades of research and development in stem cell therapeutics"
              className="relative w-full h-auto rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;