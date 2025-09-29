import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
import heroImage from '@/assets/hero-travel.jpg';

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
            Discover India's
            <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Sacred Journey
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto animate-fade-in">
            From ancient temples to luxury stays, find your perfect spiritual and cultural experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-fade-in">
            <Button variant="hero" size="lg" className="group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10">
              Explore Destinations
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-lg font-semibold">500+ Destinations</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-lg font-semibold">Expert Guides</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-lg font-semibold">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;