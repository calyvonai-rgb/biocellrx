import { useRef, useEffect, useState } from "react";

const VitalityVideo = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVideoVisible) {
          setIsVideoVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [isVideoVisible]);

  useEffect(() => {
    // Listen for Vimeo player events
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://player.vimeo.com") return;
      
      const data = JSON.parse(event.data);
      
      if (data.event === 'ready') {
        setPlayerReady(true);
        setIsLoading(false);
        // Auto-play muted video when ready and visible
        if (isVideoVisible && iframeRef.current?.contentWindow) {
          setTimeout(() => {
            iframeRef.current?.contentWindow?.postMessage('{"method":"play"}', 'https://player.vimeo.com');
          }, 500);
        }
      }
      
      if (data.event === 'play') {
        setIsPlaying(true);
      }
      
      if (data.event === 'pause') {
        setIsPlaying(false);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isVideoVisible]);

  const handlePlayUnmute = () => {
    if (!playerReady || !iframeRef.current?.contentWindow) return;

    if (isMuted) {
      // Unmute and play
      setIsMuted(false);
      iframeRef.current.contentWindow.postMessage('{"method":"setVolume","value":0.8}', 'https://player.vimeo.com');
      iframeRef.current.contentWindow.postMessage('{"method":"play"}', 'https://player.vimeo.com');
    } else if (!isPlaying) {
      // Just play if already unmuted
      iframeRef.current.contentWindow.postMessage('{"method":"play"}', 'https://player.vimeo.com');
    }
  };

  return (
    <div className="w-full" ref={videoRef}>
      <div style={{padding:"75% 0 0 0", position:"relative"}} className="video-container">
        {isVideoVisible ? (
          <div className="relative w-full h-full">
            <iframe 
              ref={iframeRef}
              src="https://player.vimeo.com/video/1117754950?api=1&badge=0&autopause=0&player_id=vitality-video&title=0&byline=0&portrait=0&controls=0&autoplay=0&muted=1&playsinline=1&background=1"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}
              title="Bio cell RX"
              className="rounded-2xl shadow-xl video-fill"
            />
            
            {/* Loading overlay */}
            {isLoading && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-2xl">
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Play/Unmute button overlay - only show when muted or not playing */}
            {playerReady && (isMuted || !isPlaying) && (
              <button
                onClick={handlePlayUnmute}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 z-10 group"
                aria-label={isMuted ? "Unmute and play video" : "Play video"}
              >
                <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                  {isMuted ? (
                    <div className="flex items-center justify-center">
                      <svg className="w-8 h-8 text-black mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5z" />
                      </svg>
                    </div>
                  ) : (
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
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
