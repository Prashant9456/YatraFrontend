import { useParams, Link } from 'react-router-dom';
import { hotels } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MapPin, Clock, Star, Wifi, Car, Utensils, Waves, Phone, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HotelDetails() {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === Number(id));

  if (!hotel) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Hotel not found</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Return to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const galleryImages = [
    hotel.image,
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop"
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
                      alt={`${hotel.name} - Image ${index + 1}`}
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
            {/* Hotel Info */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{hotel.name}</h1>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{hotel.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-accent fill-accent mr-1" />
                      <span className="font-semibold text-foreground">{hotel.rating}</span>
                      <span className="text-muted-foreground ml-1">Rating</span>
                    </div>
                  </div>
                  <Button variant="booking" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Now
                  </Button>
                </div>

                <p className="text-muted-foreground mb-4">{hotel.description}</p>

                {/* Check-in/out Times */}
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">Check-in: {hotel.checkIn}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">Check-out: {hotel.checkOut}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {hotel.features.map((feature, index) => (
                      <Badge key={index} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {hotel.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        <span className="text-sm text-muted-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rooms */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-foreground mb-4">Available Rooms</h2>
                <div className="space-y-4">
                  {hotel.rooms.map((room, index) => (
                    <div key={index} className="border border-border rounded-lg p-4 hover:shadow-elegant transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-foreground">{room.type}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{room.beds}</p>
                          <div className="flex items-center">
                            <span className="text-2xl font-bold text-primary">₹{room.price}</span>
                            <span className="text-muted-foreground ml-1">/night</span>
                          </div>
                        </div>
                        <div className="text-right">
                          {room.available ? (
                            <Badge variant="default" className="mb-2">Available</Badge>
                          ) : (
                            <Badge variant="destructive" className="mb-2">Sold Out</Badge>
                          )}
                          <div>
                            <Button 
                              variant={room.available ? "default" : "outline"} 
                              disabled={!room.available}
                              className="mt-2"
                            >
                              <Calendar className="w-4 h-4 mr-2" />
                              {room.available ? "Book Now" : "Notify Me"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Booking */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Quick Inquiry</h3>
                <div className="space-y-4">
                  <Button variant="booking" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call for Booking
                  </Button>
                  <Button variant="outline" className="w-full">
                    WhatsApp Inquiry
                  </Button>
                  <Button variant="outline" className="w-full">
                    Email Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Location</h3>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">{hotel.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attractions */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Nearby Attractions</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">City Palace</span>
                    <span className="text-sm text-primary">0.5 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Lake Pichola</span>
                    <span className="text-sm text-primary">1.2 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Jagdish Temple</span>
                    <span className="text-sm text-primary">0.8 km</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}