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
        
        try {
          // Try to play with sound first
          video.muted = false;
          await video.play();
          setIsMuted(false);
          setShowUnmuteButton(false);
        } catch (error) {
          try {
            // Fallback to muted autoplay
            video.muted = true;
            await video.play();
            setIsMuted(true);
            setShowUnmuteButton(true);
          } catch (mutedError) {
            console.log('Autoplay failed even with muted video:', mutedError);
          }
        }
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
        
        {/* Why Choose BioCellRx Image */}
        <div className="max-w-6xl mx-auto">
          <img 
            src={whyChooseImage} 
            alt="Why Choose BioCellRx - Industry-leading cellular products backed by two decades of research and development in stem cell therapeutics"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;