import { useRef, useEffect, useState } from "react";

const VitalityVideo = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  return (
    <div className="w-full" ref={videoRef}>
      <div style={{padding:"75% 0 0 0", position:"relative"}} className="video-container">
        {isVideoVisible ? (
          <div className="relative w-full h-full">
            <iframe 
              ref={iframeRef}
              src={`https://player.vimeo.com/video/1117754950?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&controls=1&autoplay=1&muted=${isMuted ? 1 : 0}&playsinline=1`}
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}
              title="Bio cell RX"
              className="rounded-2xl shadow-xl video-fill"
            />
            {isMuted && (
              <button
                onClick={() => setIsMuted(false)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Unmute video"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              </button>
            )}
          </div>
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
