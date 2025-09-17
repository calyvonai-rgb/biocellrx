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
                  <>
                    <video 
                      ref={videoElementRef}
                      src="/uploads/biocell how.mp4"
                      loop
                      controls
                      playsInline
                      preload="metadata"
                      webkit-playsinline="true"
                      style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", objectFit: "cover"}} 
                      className="video-fill rounded-xl"
                    >
                      Your browser does not support the video tag.
                    </video>
                    {showUnmuteButton && (
                      <button
                        onClick={toggleMute}
                        className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                    )}
                  </>
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
                  className="w-full max-w-2xl h-auto opacity-20"
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