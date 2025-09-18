import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("biocellrx-cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("biocellrx-cookie-consent", "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("biocellrx-cookie-consent", "declined");
    setShowConsent(false);
  };

  const handleClose = () => {
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-4 animate-fade-in">
      <Card className="max-w-lg sm:max-w-4xl mx-auto p-3 sm:p-6 bg-white border border-accent/20 shadow-lg backdrop-blur-sm">
        <div className="flex items-start gap-2 sm:gap-4">
          <div className="hidden sm:block flex-shrink-0 mt-1">
            <Cookie className="w-6 h-6 text-accent" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2">
              We Use Cookies
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3">
              We use cookies to improve your experience and analyze site usage. 
              <Link to="/privacy-policy" className="text-accent hover:text-accent/80 underline ml-1">
                Learn more
              </Link>
            </p>
            
            <div className="flex flex-row gap-2 sm:gap-3">
              <Button 
                onClick={handleAccept}
                variant="medical"
                size="sm"
                className="flex-1 text-xs sm:text-sm py-2 h-8 sm:h-9"
              >
                Accept
              </Button>
              <Button 
                onClick={handleDecline}
                variant="outline"
                size="sm"
                className="flex-1 border-accent text-accent hover:bg-accent hover:text-black text-xs sm:text-sm py-2 h-8 sm:h-9"
              >
                Decline
              </Button>
            </div>
          </div>
          
          <Button
            onClick={handleClose}
            variant="ghost"
            size="sm"
            className="flex-shrink-0 h-6 w-6 sm:h-8 sm:w-8 p-0"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;