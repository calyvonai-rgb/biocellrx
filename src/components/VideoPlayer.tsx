import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Volume2, VolumeX, X } from "lucide-react";

// Helper function to get embed URLs
const getEmbedUrl = (url: string) => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoId = url.includes('youtu.be') 
      ? url.split('/').pop()?.split('?')[0]
      : url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  if (url.includes('vimeo.com')) {
    const videoId = url.split('/').pop();
    return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
  }
  if (url.includes('instagram.com')) {
    // For Instagram, we'll use the direct embed URL
    const postId = url.match(/\/reel\/([^/\?]+)/)?.[1] || url.match(/\/p\/([^/\?]+)/)?.[1];
    if (postId) {
      return `https://www.instagram.com/p/${postId}/embed`;
    }
  }
  return url;
};

// Video embed component for different platforms
const VideoEmbed = ({ url, title }: { url: string; title: string }) => {
  return (
    <iframe
      src={getEmbedUrl(url)}
      title={title}
      width="100%"
      height="100%"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0"
    />
  );
};

interface VideoPlayerProps {
  thumbnail: string;
  title: string;
  description: string;
  videoUrl?: string;
  duration?: string;
  views?: string;
  autoplay?: boolean;
}

const VideoPlayer = ({ 
  thumbnail, 
  title, 
  description, 
  videoUrl = "https://vimeo.com/76979871", // Default demo video
  duration = "4:32",
  views = "3.2M views",
  autoplay = false
}: VideoPlayerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the modal when clicking volume
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Video Thumbnail with Live Video Background */}
      <div 
        className="relative aspect-video rounded-2xl overflow-hidden border border-accent/20 cursor-pointer group shadow-medical hover:shadow-gold transition-all duration-300 video-container"
        onClick={() => setIsOpen(true)}
      >
        {/* Live Video Background */}
        {autoplay && (
          <div className="absolute inset-0">
            <iframe
              src={`${getEmbedUrl(videoUrl)}&muted=${isMuted ? 1 : 0}`}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen"
              className="absolute inset-0 w-full h-full object-cover video-fill"
            />
          </div>
        )}
        
        {/* Static thumbnail when not autoplaying */}
        {!autoplay && (
          <img 
            src={thumbnail} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover video-fill"
          />
        )}
        
        {/* Subtle Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
        
        {/* Volume Control */}
        <div className="absolute top-4 left-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="bg-black/50 text-white hover:bg-black/70 border-0 w-10 h-10"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>
        </div>
        
        {/* Video Info Overlay */}
        <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold mb-1 drop-shadow-lg">{title}</p>
              <p className="text-white/90 text-sm drop-shadow-lg">{views} • {description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-0">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Video Player */}
          <div className="relative aspect-video">
            <VideoEmbed url={videoUrl} title={title} />
          </div>

          {/* Video Info Below Player */}
          <div className="p-6 bg-white">
            <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4">{views} • {description}</p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button variant="medical">
                  Book Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoPlayer;