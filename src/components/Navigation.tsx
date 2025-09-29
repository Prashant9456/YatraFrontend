import React from 'react';
import { Button } from '@/components/ui/button';
import { Hotel, UserCheck, Car, Building2, Star } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: 'hotels', label: 'Hotels', icon: Hotel },
    { id: 'guides', label: 'Guides', icon: UserCheck },
    { id: 'travel', label: 'Travel', icon: Car },
    { id: 'temples', label: 'Temples', icon: Building2 },
    { id: 'reviews', label: 'Reviews', icon: Star },
  ];

  return (
    <nav className="border-b border-border bg-background/50 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1 overflow-x-auto py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <Button
                key={tab.id}
                variant={isActive ? 'default' : 'ghost'}
                onClick={() => onTabChange(tab.id)}
                className={`flex-shrink-0 ${isActive ? 'shadow-medium' : ''}`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;