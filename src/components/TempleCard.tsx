import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Sunrise } from 'lucide-react';
import { BookingDialog } from './BookingDialog';

interface TempleCardProps {
  temple: {
    id: number;
    name: string;
    location: string;
    timings: string;
    description: string;
    image: string;
    features: string[];
    bestTime: string;
  };
  onGetDetails: (templeId: number) => void;
}

const TempleCard = ({ temple, onGetDetails }: TempleCardProps) => {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  return (
    <div className="card-gradient rounded-xl shadow-soft hover:shadow-medium transition-smooth border border-border overflow-hidden group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={temple.image} 
          alt={temple.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{temple.name}</h3>
          <div className="flex items-center mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{temple.location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {temple.description}
        </p>

        {/* Timings and Best Time */}
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 text-primary mr-2" />
            <div>
              <span className="font-medium">Timings: </span>
              <span className="text-muted-foreground">{temple.timings}</span>
            </div>
          </div>
          
          <div className="flex items-center text-sm">
            <Sunrise className="w-4 h-4 text-accent mr-2" />
            <div>
              <span className="font-medium">Best Time: </span>
              <span className="text-muted-foreground">{temple.bestTime}</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {temple.features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex space-x-2 pt-4 border-t border-border">
          <Button variant="outline" className="flex-1" asChild>
            <Link to={`/temple/${temple.id}`}>
              Get Details
            </Link>
          </Button>
          <Button variant="booking" className="flex-1" onClick={() => setInquiryOpen(true)}>
            Inquire
          </Button>
        </div>
      </div>
      
      {/* Inquiry Dialog */}
      <BookingDialog
        open={inquiryOpen}
        onOpenChange={setInquiryOpen}
        type="inquiry"
        serviceType="temple"
        serviceId={temple.id.toString()}
        serviceName={temple.name}
        additionalInfo={`Location: ${temple.location}\nTimings: ${temple.timings}\nBest Time to Visit: ${temple.bestTime}\nFeatures: ${temple.features.join(', ')}`}
      />
    </div>
  );
};

export default TempleCard;