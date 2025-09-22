import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, Clock, Star, Zap } from "lucide-react";
import cuisineImage from "@/assets/jharkhand-cuisine.jpg";

const QuickBooking = () => {
  const popularPackages = [
    {
      id: "1",
      title: "Jharkhand Spiritual Circuit",
      duration: "4 Days",
      places: ["Deoghar", "Rajrappa", "Parasnath"],
      price: 8999,
      originalPrice: 11999,
      rating: 4.8,
      reviews: 1543,
      features: ["Hotels", "Transport", "Guide", "Temple Tours"],
      discount: "25% OFF",
      isHot: true,
    },
    {
      id: "2",
      title: "Jharkhand Wildlife & Hills",
      duration: "5 Days",
      places: ["Betla", "Netarhat", "Hazaribagh"],
      price: 12999,
      originalPrice: 16999,
      rating: 4.9,
      reviews: 987,
      features: ["Safari", "Hill Station", "Wildlife Guide", "Photography"],
      discount: "23% OFF",
      isHot: false,
    },
    {
      id: "3",
      title: "Tribal Culture Experience",
      duration: "3 Days",
      places: ["Ranchi", "Khunti", "Gumla"],
      image: cuisineImage,
      price: 6999,
      originalPrice: 8999,
      rating: 4.7,
      reviews: 2156,
      features: ["Tribal Villages", "Cultural Shows", "Local Cuisine", "Handicrafts"],
      discount: "22% OFF",
      isHot: true,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Quick Booking Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4">
                Plan Your <span className="bg-gradient-ocean bg-clip-text text-transparent">Jharkhand Trip</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover Jharkhand's beauty in just a few clicks. Choose from our curated packages 
                or create your custom itinerary to explore the state's natural and cultural wonders.
              </p>
            </div>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Plan Your Jharkhand Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Destination" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Travelers" className="pl-10" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Check-in" type="date" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Check-out" type="date" className="pl-10" />
                  </div>
                </div>
                <Button className="w-full bg-gradient-hero hover:opacity-90" size="lg">
                  Find Packages
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Popular Packages */}
          <div>
            <h3 className="text-2xl font-bold mb-6">🔥 Hot Deals This Week</h3>
            <div className="space-y-4">
              {popularPackages.map((pkg) => (
                <Card key={pkg.id} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {pkg.title}
                          </h4>
                          {pkg.isHot && (
                            <Badge className="bg-gradient-sunset text-white border-0 text-xs">
                              HOT
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {pkg.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            {pkg.rating} ({pkg.reviews})
                          </div>
                        </div>
                      </div>
                      <Badge variant="destructive" className="bg-gradient-sunset border-0">
                        {pkg.discount}
                      </Badge>
                    </div>

                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {pkg.places.map((place, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {place}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {pkg.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{pkg.originalPrice}
                        </span>
                        <span className="text-2xl font-bold text-primary">
                          ₹{pkg.price}
                        </span>
                        <span className="text-sm text-muted-foreground">/person</span>
                      </div>
                      <Button size="sm" className="bg-gradient-hero hover:opacity-90">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickBooking;