import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

interface PlaceCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  category: string;
  features: string[];
  isPromoted?: boolean;
}

const PlaceCard = ({
  name,
  location,
  image,
  rating,
  reviewCount,
  price,
  originalPrice,
  category,
  features,
  isPromoted = false,
}: PlaceCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsImageLoaded(true)}
          />
          {!isImageLoaded && (
            <div className="w-full h-full bg-muted animate-pulse" />
          )}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Favorite Button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            className={`h-4 w-4 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-white'
            }`}
          />
        </Button>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isPromoted && (
            <Badge className="bg-gradient-sunset text-white border-0">
              Featured
            </Badge>
          )}
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {category}
          </Badge>
        </div>

        {/* Price */}
        <div className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-md rounded-lg px-3 py-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-1">
            {originalPrice && (
              <span className="text-sm line-through opacity-70">
                ₹{originalPrice}
              </span>
            )}
            <span className="font-semibold">₹{price}</span>
            <span className="text-sm opacity-80">/person</span>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Title & Location */}
        <div className="mb-3">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
          </div>
          <span className="text-muted-foreground text-sm">
            ({reviewCount} reviews)
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs px-2 py-1"
            >
              {feature}
            </Badge>
          ))}
          {features.length > 3 && (
            <Badge variant="outline" className="text-xs px-2 py-1">
              +{features.length - 3} more
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button className="flex-1" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Book Now
          </Button>
          <Button variant="outline" size="sm">
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlaceCard;