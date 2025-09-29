import { useParams, Link } from 'react-router-dom';
import { temples } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MapPin, Clock, Phone, Camera, Calendar, Sun, Moon, Heart, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TempleDetails() {
  const { id } = useParams();
  const temple = temples.find(t => t.id === Number(id));

  if (!temple) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Temple not found</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Return to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const galleryImages = [
    temple.image,
    "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop"
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
                      alt={`${temple.name} - Image ${index + 1}`}
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
            {/* Temple Info */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{temple.name}</h1>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{temple.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-primary" />
                      <span className="text-sm text-muted-foreground">{temple.timings}</span>
                    </div>
                  </div>
                  <Button variant="booking" size="lg">
                    <Info className="w-4 h-4 mr-2" />
                    Inquire Now
                  </Button>
                </div>

                <p className="text-muted-foreground mb-6">{temple.description}</p>

                {/* Best Time to Visit */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center">
                    <Sun className="w-4 h-4 mr-2 text-primary" />
                    Best Time to Visit
                  </h3>
                  <p className="text-muted-foreground">{temple.bestTime}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Special Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {temple.features.map((feature, index) => (
                      <Badge key={index} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Temple History */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-foreground mb-4">History & Significance</h2>
                <div className="prose text-muted-foreground">
                  <p className="mb-4">
                    This ancient temple stands as a testament to centuries of devotion and architectural excellence. 
                    Built during the medieval period, it has been a center of spiritual learning and cultural preservation.
                  </p>
                  <p className="mb-4">
                    The temple's unique architecture reflects the artistic traditions of the region, with intricate 
                    carvings and symbolic elements that tell stories of divine legends and local folklore.
                  </p>
                  <p>
                    Throughout the years, it has attracted pilgrims from across the country, making it not just a 
                    place of worship but also a cultural hub that preserves ancient traditions and practices.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Rituals & Ceremonies */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-xl font-bold text-foreground mb-4">Daily Rituals & Ceremonies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Sun className="w-5 h-5 text-accent mr-2" />
                      <h3 className="font-semibold text-foreground">Morning Aarti</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">5:30 AM - 6:00 AM</p>
                    <p className="text-sm text-muted-foreground">Start your day with divine blessings and peaceful chants.</p>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Sun className="w-5 h-5 text-accent mr-2" />
                      <h3 className="font-semibold text-foreground">Afternoon Prayer</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">12:00 PM - 12:30 PM</p>
                    <p className="text-sm text-muted-foreground">Midday prayers and offerings for prosperity.</p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Moon className="w-5 h-5 text-accent mr-2" />
                      <h3 className="font-semibold text-foreground">Evening Aarti</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">7:00 PM - 7:30 PM</p>
                    <p className="text-sm text-muted-foreground">Most popular ceremony with community participation.</p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Moon className="w-5 h-5 text-accent mr-2" />
                      <h3 className="font-semibold text-foreground">Night Prayer</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">9:00 PM - 9:15 PM</p>
                    <p className="text-sm text-muted-foreground">Peaceful closing prayers for the day.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photography Guidelines */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Camera className="w-5 h-5 mr-2 text-primary" />
                  Photography Guidelines
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2" />
                    <div>
                      <h4 className="font-medium text-foreground">Allowed Areas</h4>
                      <p className="text-sm text-muted-foreground">Outer courtyard, entrance gates, and designated viewing areas</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2" />
                    <div>
                      <h4 className="font-medium text-foreground">Restricted Areas</h4>
                      <p className="text-sm text-muted-foreground">Inside the main sanctum and during active prayer sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2" />
                    <div>
                      <h4 className="font-medium text-foreground">Best Times</h4>
                      <p className="text-sm text-muted-foreground">Early morning (6-8 AM) and evening (5-7 PM) for golden light</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visitor Reviews */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-xl font-bold text-foreground mb-4">Visitor Reviews</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="flex items-center mb-2">
                      <Heart className="w-4 h-4 text-accent fill-accent mr-1" />
                      <span className="font-semibold text-foreground">Spiritual Experience</span>
                      <span className="text-muted-foreground ml-2">- Sarah Johnson</span>
                    </div>
                    <p className="text-sm text-muted-foreground">"A truly peaceful and divine experience. The morning aarti was absolutely mesmerizing."</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="flex items-center mb-2">
                      <Heart className="w-4 h-4 text-accent fill-accent mr-1" />
                      <span className="font-semibold text-foreground">Architecture Marvel</span>
                      <span className="text-muted-foreground ml-2">- Rajesh Patel</span>
                    </div>
                    <p className="text-sm text-muted-foreground">"The intricate carvings and historical significance make this temple a must-visit destination."</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Visit Information */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Visit Information</h3>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="font-bold text-foreground">Open Daily</div>
                    <div className="text-sm text-muted-foreground">{temple.timings}</div>
                  </div>
                  <Button variant="booking" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Plan Your Visit
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Temple
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Entry Information */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Entry Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Entry Fee</span>
                    <span className="text-sm text-foreground">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Photography</span>
                    <span className="text-sm text-foreground">Limited Areas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Dress Code</span>
                    <span className="text-sm text-foreground">Traditional</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Shoes</span>
                    <span className="text-sm text-foreground">Remove at Entrance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Facilities */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Nearby Facilities</h3>
                <div className="space-y-3">
                  <div className="border border-border rounded-lg p-3">
                    <h4 className="font-medium text-foreground">Parking</h4>
                    <p className="text-sm text-muted-foreground">500m away • Free</p>
                  </div>
                  <div className="border border-border rounded-lg p-3">
                    <h4 className="font-medium text-foreground">Food Court</h4>
                    <p className="text-sm text-muted-foreground">200m away • Vegetarian</p>
                  </div>
                  <div className="border border-border rounded-lg p-3">
                    <h4 className="font-medium text-foreground">Restrooms</h4>
                    <p className="text-sm text-muted-foreground">Inside temple complex</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Events */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Upcoming Events</h3>
                <div className="space-y-3">
                  <div className="border border-border rounded-lg p-3">
                    <h4 className="font-medium text-foreground">Annual Festival</h4>
                    <p className="text-sm text-muted-foreground">Next Month • Special Ceremonies</p>
                  </div>
                  <div className="border border-border rounded-lg p-3">
                    <h4 className="font-medium text-foreground">Full Moon Prayer</h4>
                    <p className="text-sm text-muted-foreground">This Month • Extended Hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Donation Info */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Support the Temple</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Help maintain this sacred place and support community services.
                </p>
                <Button variant="outline" className="w-full">
                  <Heart className="w-4 h-4 mr-2" />
                  Make a Donation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}