import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, MapPin, Users } from 'lucide-react';

interface HotelCardProps {
  hotel: {
    id: number;
    name: string;
    image: string;
    checkIn: string;
    checkOut: string;
    features: string[];
    location: string;
    rating: number;
    rooms: Array<{
      type: string;
      beds: string;
      price: number;
      available: boolean;
    }>;
  };
  onViewDetails: (hotelId: number) => void;
}

const HotelCard = ({ hotel, onViewDetails }: HotelCardProps) => {
  const minPrice = Math.min(...hotel.rooms.map(room => room.price));

  return (
    <div className="card-gradient rounded-xl shadow-soft hover:shadow-medium transition-smooth border border-border overflow-hidden group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={hotel.image} 
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur rounded-lg px-2 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-sm font-semibold">{hotel.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
            {hotel.name}
          </h3>
          <div className="flex items-center text-muted-foreground mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{hotel.location}</span>
          </div>
        </div>

        {/* Check-in/Check-out */}
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>Check-in: {hotel.checkIn}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>Check-out: {hotel.checkOut}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {hotel.features.slice(0, 4).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
          {hotel.features.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{hotel.features.length - 4} more
            </Badge>
          )}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="text-2xl font-bold text-primary">₹{minPrice.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">per night</div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              Inquiry
            </Button>
            <Button variant="booking" size="sm" asChild>
              <Link to={`/hotel/${hotel.id}`}>
                View Details
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;