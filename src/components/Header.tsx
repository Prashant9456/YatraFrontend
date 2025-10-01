import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Search, Users, User } from 'lucide-react';
import { authService } from '@/lib/auth';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(authService.getUser());

  useEffect(() => {
    const handleAuthChange = () => {
      setUser(authService.getUser());
    };
    
    window.addEventListener('auth-change', handleAuthChange);
    return () => window.removeEventListener('auth-change', handleAuthChange);
  }, []);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">YT</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            YatraTravel
          </h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search hotels, guides, destinations..." 
              className="pl-10 shadow-soft focus:shadow-medium transition-smooth"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon">
            <Users className="w-5 h-5" />
          </Button>
          
          {user ? (
            <Avatar 
              className="cursor-pointer hover:ring-2 hover:ring-primary transition-all" 
              onClick={() => navigate('/profile')}
            >
              <AvatarFallback className="bg-primary text-primary-foreground">
                {getInitials(user.name)}
              </AvatarFallback>
            </Avatar>
          ) : (
            <Button variant="outline" size="sm" onClick={() => navigate('/login')}>
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;