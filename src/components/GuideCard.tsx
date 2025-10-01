import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, MapPin, Globe } from 'lucide-react';
import { BookingDialog } from './BookingDialog';

interface GuideCardProps {
  guide: {
    id: number;
    name: string;
    experience: string;
    specialization: string;
    languages: string[];
    contact: string;
    rating: number;
    price: number;
    location: string;
    image: string;
    description: string;
  };
  onBookGuide: (guideId: number) => void;
}

const GuideCard = ({ guide, onBookGuide }: GuideCardProps) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <div className="card-gradient rounded-xl shadow-soft hover:shadow-medium transition-smooth border border-border overflow-hidden group">
      {/* Header with Image and Rating */}
      <div className="relative p-6 pb-4">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img 
              src={guide.image} 
              alt={guide.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-smooth"
            />
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs font-bold">
              {guide.experience}
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground">{guide.name}</h3>
            <p className="text-primary font-semibold">{guide.specialization}</p>
            <div className="flex items-center mt-1">
              <MapPin className="w-4 h-4 text-muted-foreground mr-1" />
              <span className="text-sm text-muted-foreground">{guide.location}</span>
            </div>
            <div className="flex items-center mt-2">
              <Star className="w-4 h-4 text-accent fill-accent mr-1" />
              <span className="text-sm font-semibold">{guide.rating}</span>
              <span className="text-sm text-muted-foreground ml-1">rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 space-y-4">
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {guide.description}
        </p>

        {/* Languages */}
        <div>
          <div className="flex items-center mb-2">
            <Globe className="w-4 h-4 text-muted-foreground mr-2" />
            <span className="text-sm font-medium">Languages</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {guide.languages.map((language, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {language}
              </Badge>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex items-center text-sm text-muted-foreground">
          <Phone className="w-4 h-4 mr-2" />
          <span>{guide.contact}</span>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="text-xl font-bold text-primary">₹{guide.price.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">per day</div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link to={`/guide/${guide.id}`}>
                Get Info
              </Link>
            </Button>
            <Button 
              variant="booking" 
              size="sm"
              onClick={() => setBookingOpen(true)}
            >
              Book Guide
            </Button>
          </div>
        </div>
      </div>
      
      {/* Booking Dialog */}
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        type="booking"
        serviceType="guide"
        serviceId={guide.id.toString()}
        serviceName={guide.name}
        additionalInfo={`Guide Specialization: ${guide.specialization}\nExperience: ${guide.experience}\nLanguages: ${guide.languages.join(', ')}\nLocation: ${guide.location}\nRate: ₹${guide.price}/day`}
      />
    </div>
  );
};

export default GuideCard;