import React, { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import HotelCard from '@/components/HotelCard';
import GuideCard from '@/components/GuideCard';
import VehicleCard from '@/components/VehicleCard';
import TempleCard from '@/components/TempleCard';
import Footer from '@/components/Footer';
import { hotels, guides, vehicles, temples, reviews } from '@/data/mockData';
import { Star } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('hotels');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleViewHotelDetails = (hotelId: number) => {
    console.log('View hotel details:', hotelId);
    // TODO: Navigate to hotel detail page
  };

  const handleBookGuide = (guideId: number) => {
    console.log('Book guide:', guideId);
    // TODO: Open booking modal or navigate to booking page
  };

  const handleBookVehicle = (vehicleId: number) => {
    console.log('Book vehicle:', vehicleId);
    // TODO: Open booking modal or navigate to booking page
  };

  const handleGetTempleDetails = (templeId: number) => {
    console.log('Get temple details:', templeId);
    // TODO: Navigate to temple detail page
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'hotels':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <HotelCard 
                key={hotel.id} 
                hotel={hotel} 
                onViewDetails={handleViewHotelDetails}
              />
            ))}
          </div>
        );
      
      case 'guides':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <GuideCard 
                key={guide.id} 
                guide={guide} 
                onBookGuide={handleBookGuide}
              />
            ))}
          </div>
        );
      
      case 'travel':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <VehicleCard 
                key={vehicle.id} 
                vehicle={vehicle} 
                onBookVehicle={handleBookVehicle}
              />
            ))}
          </div>
        );
      
      case 'temples':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {temples.map((temple) => (
              <TempleCard 
                key={temple.id} 
                temple={temple} 
                onGetDetails={handleGetTempleDetails}
              />
            ))}
          </div>
        );
      
      case 'reviews':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="card-gradient rounded-xl shadow-soft border border-border p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground">{review.customerName}</h4>
                    <p className="text-sm text-muted-foreground">{review.service} • {review.location}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  "{review.comment}"
                </p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      {/* Show hero only on hotels tab */}
      {activeTab === 'hotels' && <Hero />}
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {activeTab === 'hotels' && 'Featured Hotels'}
            {activeTab === 'guides' && 'Expert Guides'}
            {activeTab === 'travel' && 'Travel Options'}
            {activeTab === 'temples' && 'Sacred Temples'}
            {activeTab === 'reviews' && 'Customer Reviews'}
          </h2>
          <p className="text-muted-foreground">
            {activeTab === 'hotels' && 'Discover comfortable stays for your spiritual journey'}
            {activeTab === 'guides' && 'Connect with knowledgeable local guides'}
            {activeTab === 'travel' && 'Choose your perfect travel companion'}
            {activeTab === 'temples' && 'Explore divine temples and their sacred stories'}
            {activeTab === 'reviews' && 'See what our travelers say about their experiences'}
          </p>
        </div>
        
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
