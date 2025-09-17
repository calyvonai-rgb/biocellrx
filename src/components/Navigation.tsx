import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", href: "/", isRoute: true },
    { name: "Wellness and Biologics", href: "/services", isRoute: true },
    { name: "About", href: "/about", isRoute: true },
    { name: "Contact", href: "/contact", isRoute: true },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3" onClick={closeMenu}>
            <img 
              src="/uploads/logo.png" 
              alt="BioCellRx Logo" 
              className="h-10 sm:h-12 w-auto"
            />
            <span className="text-lg sm:text-2xl font-bold text-foreground">
              BioCellRx
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm xl:text-base transition-colors duration-300 whitespace-nowrap ${
                    location.pathname === item.href 
                      ? "text-accent font-medium" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm xl:text-base text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
          <Link to="/contact">
              <Button variant="cta" size={isMobile ? "default" : "lg"} className="whitespace-nowrap">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) =>
                  item.isRoute ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={closeMenu}
                      className={`text-base py-2 px-4 rounded-lg transition-colors duration-300 ${
                        location.pathname === item.href 
                          ? "text-accent font-medium bg-accent/10" 
                          : "text-foreground hover:text-accent hover:bg-accent/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="text-base py-2 px-4 rounded-lg text-foreground hover:text-accent hover:bg-accent/5 transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  )
                )}
                
                {/* Mobile CTA Button */}
                <div className="pt-2 border-t border-border">
                  <Link to="/contact" onClick={closeMenu}>
                    <Button variant="cta" size="default" className="w-full">
              Book Consultation
            </Button>
          </Link>
        </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;