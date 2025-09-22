import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, User, Heart, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              JharkhandTourism
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Destinations
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Experiences
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Food & Culture
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={() => setIsLoggedIn(true)}>
                  Sign In
                </Button>
                <Button variant="default" size="sm">
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Destinations
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Experiences
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Food & Culture
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Reviews
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                {isLoggedIn ? (
                  <>
                    <Button variant="ghost" size="sm" className="justify-start">
                      <Heart className="h-4 w-4 mr-2" />
                      Favorites
                    </Button>
                    <Button variant="ghost" size="sm" className="justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" onClick={() => setIsLoggedIn(true)}>
                      Sign In
                    </Button>
                    <Button variant="default" size="sm">
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;