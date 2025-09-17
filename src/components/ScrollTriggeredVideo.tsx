import { useEffect, useRef, useState } from "react";

interface ScrollTriggeredVideoProps {
  src: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
  poster?: string;
}

const ScrollTriggeredVideo = ({ 
  src, 
  autoplay = true, 
  muted = true, 
  loop = true, 
  className = "",
  poster 
}: ScrollTriggeredVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current && autoplay) {
              videoRef.current.play().catch(console.log);
            }
          } else {
            setIsVisible(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [autoplay]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted={muted}
      loop={loop}
      playsInline
      className={className}
      poster={poster}
      preload="metadata"
    />
  );
};

export default ScrollTriggeredVideo;