import { useEffect, useRef } from "react";

const VitalityVideo = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            // Video plays when scrolled into view
            const iframe = videoRef.current;
            iframe.src = "https://player.vimeo.com/video/1117754950?badge=0&autopause=0&title=0&byline=0&portrait=0&controls=1&autoplay=1&muted=0";
          }
        });
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <div style={{padding:"75% 0 0 0", position:"relative"}} className="video-container">
        <iframe 
          ref={videoRef}
          src=""
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
          referrerPolicy="strict-origin-when-cross-origin" 
          style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}
          title="Bio cell RX"
          className="rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default VitalityVideo;
