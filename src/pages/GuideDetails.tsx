import { useParams, Link } from 'react-router-dom';
import { guides } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MapPin, Star, Phone, MessageCircle, Calendar, Clock, Languages, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GuideDetails() {
  const { id } = useParams();
  const guide = guides.find(g => g.id === Number(id));

  if (!guide) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Guide not found</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Return to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Guide Profile */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={guide.image} alt={guide.name} />
                    <AvatarFallback>{guide.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-foreground mb-2">{guide.name}</h1>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{guide.location}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <Star className="w-4 h-4 text-accent fill-accent mr-1" />
                          <span className="font-semibold text-foreground">{guide.rating}</span>
                          <span className="text-muted-foreground ml-1">Rating</span>
                        </div>
                      </div>
                      <div className="text-right mt-4 md:mt-0">
                        <div className="text-2xl font-bold text-primary">₹{guide.price}</div>
                        <div className="text-sm text-muted-foreground">per day</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{guide.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        <span className="text-sm">Experience: {guide.experience}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-primary" />
                        <span className="text-sm">Specialization: {guide.specialization}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Languages className="w-5 h-5 mr-2 text-primary" />
                  Languages Spoken
                </h2>
                <div className="flex flex-wrap gap-2">
                  {guide.languages.map((language, index) => (
                    <Badge key={index} variant="secondary">{language}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-xl font-bold text-foreground mb-4">Services Offered</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Heritage Tours</h3>
                    <p className="text-sm text-muted-foreground">Explore historical sites and cultural landmarks with expert commentary.</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Temple Visits</h3>
                    <p className="text-sm text-muted-foreground">Spiritual guidance and cultural insights at sacred temples.</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Local Cuisine</h3>
                    <p className="text-sm text-muted-foreground">Discover authentic local dishes and hidden food gems.</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Photography Tours</h3>
                    <p className="text-sm text-muted-foreground">Capture the best angles and moments with local insights.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-xl font-bold text-foreground mb-4">Recent Reviews</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-accent fill-accent mr-1" />
                      <span className="font-semibold text-foreground">5.0</span>
                      <span className="text-muted-foreground ml-2">- Sarah Johnson</span>
                    </div>
                    <p className="text-sm text-muted-foreground">"Excellent guide! Very knowledgeable about local history and culture. Made our trip unforgettable."</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-accent fill-accent mr-1" />
                      <span className="font-semibold text-foreground">4.8</span>
                      <span className="text-muted-foreground ml-2">- Amit Patel</span>
                    </div>
                    <p className="text-sm text-muted-foreground">"Professional and friendly. Showed us places we never would have found on our own."</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact & Booking */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Book This Guide</h3>
                <div className="space-y-4">
                  <Button variant="booking" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call {guide.contact}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Today</span>
                    <Badge variant="default">Available</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Tomorrow</span>
                    <Badge variant="default">Available</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">This Weekend</span>
                    <Badge variant="secondary">Partially Booked</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tour Packages */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Popular Packages</h3>
                <div className="space-y-3">
                  <div className="border border-border rounded-lg p-3">
                    <h4 className="font-medium text-foreground">Half Day City Tour</h4>
                    <p className="text-sm text-muted-foreground">4 hours • ₹1,500</p>
                  </div>
                  <div className="border border-border rounded-lg p-3">
                    <h4 className="font-medium text-foreground">Full Day Heritage Tour</h4>
                    <p className="text-sm text-muted-foreground">8 hours • ₹2,500</p>
                  </div>
                  <div className="border border-border rounded-lg p-3">
                    <h4 className="font-medium text-foreground">Temple & Culture Tour</h4>
                    <p className="text-sm text-muted-foreground">6 hours • ₹2,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-foreground mb-4">Certifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Award className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">Licensed Tour Guide</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">First Aid Certified</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">Cultural Heritage Expert</span>
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