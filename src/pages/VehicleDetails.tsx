import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicles } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Car, Users, Fuel, Navigation, Phone, Calendar, Shield, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookingDialog } from '@/components/BookingDialog';

export default function VehicleDetails() {
  const { id } = useParams();
  const vehicle = vehicles.find(v => v.id === Number(id));
  const [bookingOpen, setBookingOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Vehicle not found</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Return to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const galleryImages = [
    vehicle.image,
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618047-7c5c2d4de7b9?w=800&h=600&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="mb-8">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${vehicle.model} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-subtle opacity-20" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vehicle Info */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{vehicle.type}</Badge>
                    </div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{vehicle.model}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent fill-accent mr-1" />
                        <span className="font-semibold text-foreground">4.8</span>
                        <span className="text-muted-foreground ml-1">Rating</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-primary">₹{vehicle.pricePerKm}</span>
                      <span className="text-muted-foreground ml-1">/km</span>
                    </div>
                  </div>
                  <Button variant="booking" size="lg" onClick={() => setBookingOpen(true)}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </div>

                <p className="text-muted-foreground mb-6">{vehicle.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Features Included</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Plans */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-foreground mb-4">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-border rounded-lg p-4 hover:shadow-elegant transition-all duration-300">
                    <h3 className="font-semibold text-foreground mb-2">Half Day (4 hours)</h3>
                    <div className="flex items-center mb-2">
                      <span className="text-xl font-bold text-primary">₹{vehicle.pricePerKm * 40}</span>
                      <span className="text-muted-foreground ml-1">approx</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Up to 40 km included</p>
                    <Button variant="outline" className="w-full" onClick={() => setBookingOpen(true)}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Select Dates
                    </Button>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4 hover:shadow-elegant transition-all duration-300">
                    <h3 className="font-semibold text-foreground mb-2">Full Day (8 hours)</h3>
                    <div className="flex items-center mb-2">
                      <span className="text-xl font-bold text-primary">₹{vehicle.pricePerKm * 80}</span>
                      <span className="text-muted-foreground ml-1">approx</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Up to 80 km included</p>
                    <Button variant="outline" className="w-full" onClick={() => setBookingOpen(true)}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Select Dates
                    </Button>
                  </div>

                  <div className="border border-border rounded-lg p-4 hover:shadow-elegant transition-all duration-300 md:col-span-2">
                    <h3 className="font-semibold text-foreground mb-2">Multi-Day Tour</h3>
                    <div className="flex items-center mb-2">
                      <span className="text-xl font-bold text-primary">₹{vehicle.pricePerKm * 200}</span>
                      <span className="text-muted-foreground ml-1">per day</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Up to 200 km per day included</p>
                    <Button variant="outline" className="w-full md:w-auto" onClick={() => setInquiryOpen(true)}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Custom Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Safety Features */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Safety & Security
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Licensed Driver</h3>
                    <p className="text-sm text-muted-foreground">Professional and experienced drivers with valid licenses.</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Vehicle Insurance</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive insurance coverage for passengers.</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">GPS Tracking</h3>
                    <p className="text-sm text-muted-foreground">Real-time tracking for safety and navigation.</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
                    <p className="text-sm text-muted-foreground">Round-the-clock customer support during trips.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-xl font-bold text-foreground mb-4">Customer Reviews</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-accent fill-accent mr-1" />
                      <span className="font-semibold text-foreground">5.0</span>
                      <span className="text-muted-foreground ml-2">- Ravi Kumar</span>
                    </div>
                    <p className="text-sm text-muted-foreground">"Excellent service! Clean vehicle and professional driver. Highly recommend for family trips."</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-accent fill-accent mr-1" />
                      <span className="font-semibold text-foreground">4.8</span>
                      <span className="text-muted-foreground ml-2">- Priya Sharma</span>
                    </div>
                    <p className="text-sm text-muted-foreground">"Comfortable ride with great amenities. The driver was very helpful and knew all the best routes."</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Booking */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Book This Vehicle</h3>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">₹{vehicle.pricePerKm}</div>
                    <div className="text-sm text-muted-foreground">per kilometer</div>
                  </div>
                  <Button variant="booking" className="w-full" onClick={() => setBookingOpen(true)}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => setInquiryOpen(true)}>
                    <Phone className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Specs */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Vehicle Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Type</span>
                    <span className="text-sm text-foreground">{vehicle.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Model</span>
                    <span className="text-sm text-foreground">{vehicle.model}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Capacity</span>
                    <span className="text-sm text-foreground">{vehicle.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Fuel Type</span>
                    <span className="text-sm text-foreground">Petrol/Diesel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Year</span>
                    <span className="text-sm text-foreground">2023</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Routes */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Popular Routes</h3>
                <div className="space-y-3">
                  <div className="border border-border rounded-lg p-3">
                    <h4 className="font-medium text-foreground">City Sightseeing</h4>
                    <p className="text-sm text-muted-foreground">30 km • ₹{vehicle.pricePerKm * 30}</p>
                  </div>
                  <div className="border border-border rounded-lg p-3">
                    <h4 className="font-medium text-foreground">Airport Transfer</h4>
                    <p className="text-sm text-muted-foreground">25 km • ₹{vehicle.pricePerKm * 25}</p>
                  </div>
                  <div className="border border-border rounded-lg p-3">
                    <h4 className="font-medium text-foreground">Temple Tour</h4>
                    <p className="text-sm text-muted-foreground">50 km • ₹{vehicle.pricePerKm * 50}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">24/7 Road Assistance</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Booking & Inquiry Dialogs */}
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        type="booking"
        serviceType="vehicle"
        serviceId={id || ''}
        serviceName={vehicle.model}
        additionalInfo={`Vehicle Type: ${vehicle.type}\nModel: ${vehicle.model}\nCapacity: ${vehicle.capacity}\nFeatures: ${vehicle.features.join(', ')}\nRate: ₹${vehicle.pricePerKm}/km`}
      />
      <BookingDialog
        open={inquiryOpen}
        onOpenChange={setInquiryOpen}
        type="inquiry"
        serviceType="vehicle"
        serviceId={id || ''}
        serviceName={vehicle.model}
        additionalInfo={`Vehicle Type: ${vehicle.type}\nModel: ${vehicle.model}\nCapacity: ${vehicle.capacity}\nFeatures: ${vehicle.features.join(', ')}\nRate: ₹${vehicle.pricePerKm}/km`}
      />
    </div>
  );
}