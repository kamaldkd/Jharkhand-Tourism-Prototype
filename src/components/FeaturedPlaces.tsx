import PlaceCard from "./PlaceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";
import baidyanathImage from "@/assets/baidyanath-temple.jpg";
import betlaImage from "@/assets/betla-national-park.jpg";
import cuisineImage from "@/assets/jharkhand-cuisine.jpg";

const FeaturedPlaces = () => {
  const featuredPlaces = [
    {
      id: "1",
      name: "Baidyanath Temple Deoghar",
      location: "Deoghar, Jharkhand",
      image: baidyanathImage,
      rating: 4.8,
      reviewCount: 2547,
      price: 1500,
      originalPrice: 2000,
      category: "Spiritual",
      features: ["Temple Tour", "Spiritual Guide", "Aarti Experience", "Prasadam"],
      isPromoted: true,
    },
    {
      id: "2",
      name: "Betla National Park Safari",
      location: "Latehar, Jharkhand",
      image: betlaImage,
      rating: 4.7,
      reviewCount: 892,
      price: 2500,
      category: "Wildlife",
      features: ["Jeep Safari", "Wildlife Guide", "Photography", "Tiger Spotting"],
    },
    {
      id: "3",
      name: "Tribal Cuisine Experience",
      location: "Ranchi, Jharkhand",
      image: cuisineImage,
      rating: 4.6,
      reviewCount: 1456,
      price: 800,
      category: "Culinary",
      features: ["Tribal Food", "Cooking Demo", "Cultural Show", "Traditional Drinks"],
    },
  ];

  const categories = [
    { name: "All", count: 50, active: true },
    { name: "Spiritual", count: 15, active: false },
    { name: "Wildlife", count: 8, active: false },
    { name: "Culinary", count: 12, active: false },
    { name: "Hills", count: 10, active: false },
    { name: "Waterfalls", count: 5, active: false },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="bg-gradient-hero bg-clip-text text-transparent">Jharkhand</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the land of forests, waterfalls, and rich tribal heritage. From ancient temples 
            to wildlife sanctuaries, experience the natural beauty and cultural richness of Jharkhand.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className="relative"
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </Button>
            ))}
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPlaces.map((place) => (
            <div key={place.id} className="animate-fade-in">
              <PlaceCard {...place} />
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            View All Jharkhand Places
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaces;