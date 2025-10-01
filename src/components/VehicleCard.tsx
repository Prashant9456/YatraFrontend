import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Fuel, Navigation, Shield } from 'lucide-react';
import { BookingDialog } from './BookingDialog';

interface VehicleCardProps {
  vehicle: {
    id: number;
    type: string;
    model: string;
    capacity: string;
    pricePerKm: number;
    features: string[];
    image: string;
    description: string;
  };
  onBookVehicle: (vehicleId: number) => void;
}

const VehicleCard = ({ vehicle, onBookVehicle }: VehicleCardProps) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const getVehicleIcon = (feature: string) => {
    switch (feature.toLowerCase()) {
      case 'ac':
        return <Shield className="w-4 h-4" />;
      case 'gps':
        return <Navigation className="w-4 h-4" />;
      case 'fuel included':
        return <Fuel className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="card-gradient rounded-xl shadow-soft hover:shadow-medium transition-smooth border border-border overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.model}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-lg px-3 py-1 text-sm font-semibold">
          {vehicle.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">{vehicle.model}</h3>
          <div className="flex items-center text-muted-foreground mt-1">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">{vehicle.capacity}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {vehicle.description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          <div className="text-sm font-medium">Features:</div>
          <div className="grid grid-cols-2 gap-2">
            {vehicle.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                {getVehicleIcon(feature)}
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="text-xl font-bold text-primary">₹{vehicle.pricePerKm}</div>
            <div className="text-sm text-muted-foreground">per km</div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link to={`/vehicle/${vehicle.id}`}>
                Details
              </Link>
            </Button>
            <Button 
              variant="booking" 
              size="sm"
              onClick={() => setBookingOpen(true)}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Booking Dialog */}
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        type="booking"
        serviceType="vehicle"
        serviceId={vehicle.id.toString()}
        serviceName={vehicle.model}
        additionalInfo={`Vehicle Type: ${vehicle.type}\nModel: ${vehicle.model}\nCapacity: ${vehicle.capacity}\nFeatures: ${vehicle.features.join(', ')}\nRate: ₹${vehicle.pricePerKm}/km`}
      />
    </div>
  );
};

export default VehicleCard;