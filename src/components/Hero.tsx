import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import jharkhandHero from "@/assets/jharkhand-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={jharkhandHero}
          alt="Beautiful landscapes of Jharkhand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Beautiful
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Jharkhand
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up">
            Explore the land of forests and waterfalls, rich tribal culture, and spiritual heritage.
            From Netarhat hills to Baidyanath temple, discover Jharkhand's hidden gems.
          </p>

          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                <Input
                  placeholder="Where to?"
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                <Input
                  placeholder="Check-in"
                  type="date"
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                <Input
                  placeholder="Check-out"
                  type="date"
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                <Input
                  placeholder="Guests"
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
              </div>
            </div>
            <Button 
              size="lg" 
              className="w-full mt-4 bg-gradient-hero hover:opacity-90 transition-opacity"
            >
              <Search className="mr-2 h-5 w-5" />
              Search Jharkhand Places
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Explore Jharkhand
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-foreground">
              Cultural Tours
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex gap-8 text-white animate-float">
        <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="text-2xl font-bold">50+</div>
          <div className="text-sm opacity-80">Tourist Places</div>
        </div>
        <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="text-2xl font-bold">10K+</div>
          <div className="text-sm opacity-80">Visitors Yearly</div>
        </div>
        <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="text-2xl font-bold">4.8★</div>
          <div className="text-sm opacity-80">Average Rating</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;