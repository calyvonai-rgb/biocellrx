import { useRef, useEffect, useState } from "react";

const VitalityVideo = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full" ref={videoRef}>
      <div style={{padding:"75% 0 0 0", position:"relative"}} className="video-container">
        {isVideoVisible ? (
          <iframe 
            ref={iframeRef}
            src="https://player.vimeo.com/video/1117754950?autoplay=1&muted=1&controls=1&loop=0&autopause=0"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
            referrerPolicy="strict-origin-when-cross-origin" 
            style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}
            title="Bio cell RX"
            className="rounded-2xl shadow-xl video-fill"
          />
        ) : (
          <div 
            className="absolute inset-0 bg-gray-100 flex items-center justify-center video-fill"
            style={{
              backgroundImage: `url('https://i.vimeocdn.com/video/1117754950-1234567890_1280x720.jpg')`, 
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
  );
};

export default VitalityVideo;
