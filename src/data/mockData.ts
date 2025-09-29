// Mock data for the travel platform

export const hotels = [
  {
    id: 1,
    name: "Royal Heritage Palace",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    features: ["Free Cancellation", "Free Parking", "Restaurant", "Near Temple", "Pool"],
    location: "Udaipur, Rajasthan",
    rating: 4.8,
    rooms: [
      { type: "Deluxe Room", beds: "1 King Bed", price: 3500, available: true },
      { type: "Family Suite", beds: "2 Double Beds", price: 5500, available: true },
      { type: "Royal Suite", beds: "1 King Bed + Sofa", price: 8500, available: false }
    ],
    amenities: ["Wi-Fi", "AC", "TV", "Mini Bar", "Room Service"],
    description: "Experience royal luxury in this heritage palace hotel with traditional Rajasthani architecture."
  },
  {
    id: 2,
    name: "Temple View Resort",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    checkIn: "3:00 PM", 
    checkOut: "11:00 AM",
    features: ["Free Cancellation", "Temple View", "Vegetarian Food", "Yoga Classes"],
    location: "Varanasi, Uttar Pradesh",
    rating: 4.6,
    rooms: [
      { type: "Garden View", beds: "1 Double Bed", price: 2500, available: true },
      { type: "Temple View", beds: "1 King Bed", price: 3500, available: true }
    ],
    amenities: ["Wi-Fi", "AC", "Prayer Room", "Meditation Hall"],
    description: "Peaceful resort overlooking ancient temples with spiritual ambiance."
  },
  {
    id: 3,
    name: "Goa Beach Villa",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM", 
    features: ["Beachfront", "Free Parking", "Restaurant", "Pool", "Spa"],
    location: "Goa",
    rating: 4.7,
    rooms: [
      { type: "Sea View Room", beds: "1 King Bed", price: 4500, available: true },
      { type: "Beach Villa", beds: "2 King Beds", price: 7500, available: true }
    ],
    amenities: ["Wi-Fi", "AC", "Beach Access", "Pool", "Restaurant"],
    description: "Luxury beachfront villa with stunning ocean views and modern amenities."
  }
];

export const guides = [
  {
    id: 1,
    name: "Rajesh Kumar",
    experience: "8 years",
    specialization: "Heritage & Temples",
    languages: ["Hindi", "English", "Rajasthani"],
    contact: "+91 98765 43210",
    rating: 4.9,
    price: 2500,
    location: "Rajasthan",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    description: "Expert in Rajasthani culture and heritage sites with deep knowledge of local traditions."
  },
  {
    id: 2,
    name: "Priya Sharma", 
    experience: "6 years",
    specialization: "Spiritual Tours",
    languages: ["Hindi", "English", "Sanskrit"],
    contact: "+91 87654 32109",
    rating: 4.8,
    price: 2000,
    location: "Varanasi",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    description: "Spiritual guide specializing in temple tours and religious ceremonies."
  },
  {
    id: 3,
    name: "Abdul Rahman",
    experience: "10 years", 
    specialization: "Adventure & Wildlife",
    languages: ["Hindi", "English", "Urdu"],
    contact: "+91 76543 21098",
    rating: 4.7,
    price: 3000,
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Adventure specialist with expertise in wildlife tours and backwater cruises."
  }
];

export const vehicles = [
  {
    id: 1,
    type: "Luxury Car",
    model: "Toyota Innova Crysta", 
    capacity: "7 Seater",
    pricePerKm: 25,
    features: ["AC", "GPS", "Professional Driver", "Fuel Included"],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
    description: "Comfortable luxury vehicle for family trips and long journeys."
  },
  {
    id: 2,
    type: "Auto Rickshaw",
    model: "Bajaj RE",
    capacity: "3 Seater", 
    pricePerKm: 12,
    features: ["Local Expert Driver", "City Tours", "Budget Friendly"],
    image: "https://images.unsplash.com/photo-1558618047-7c5c2d4de7b9?w=800&h=600&fit=crop",
    description: "Perfect for short city tours and exploring narrow streets."
  },
  {
    id: 3,
    type: "Tempo Traveller",
    model: "Force Traveller",
    capacity: "12 Seater",
    pricePerKm: 35,
    features: ["AC", "Spacious", "Group Travel", "Luggage Space"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
    description: "Ideal for group travel and family outings with ample space."
  }
];

export const temples = [
  {
    id: 1,
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    timings: "4:00 AM - 10:00 PM",
    description: "Most sacred shrine of Sikhism, known for its golden dome and spiritual significance.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
    features: ["Free Meal Service", "24/7 Open", "Historical Significance"],
    bestTime: "Early Morning or Evening"
  },
  {
    id: 2,
    name: "Kashi Vishwanath Temple", 
    location: "Varanasi, Uttar Pradesh",
    timings: "3:00 AM - 11:00 PM",
    description: "One of the most famous Hindu temples dedicated to Lord Shiva.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
    features: ["Ancient Architecture", "Ganga Aarti", "Spiritual Significance"],
    bestTime: "Early Morning for Aarti"
  },
  {
    id: 3,
    name: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu", 
    timings: "5:00 AM - 12:30 PM, 4:00 PM - 9:30 PM",
    description: "Historic Hindu temple with stunning Dravidian architecture.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
    features: ["Dravidian Architecture", "Colorful Sculptures", "Cultural Heritage"],
    bestTime: "Morning or Evening"
  }
];

export const reviews = [
  {
    id: 1,
    customerName: "Amit Patel",
    rating: 5,
    comment: "Excellent service! The hotel was amazing and the guide was very knowledgeable about local culture.",
    service: "Hotel + Guide",
    date: "2024-01-15",
    location: "Rajasthan"
  },
  {
    id: 2,
    customerName: "Sarah Johnson", 
    rating: 4,
    comment: "Beautiful temples and great spiritual experience. Highly recommend the temple tour package.",
    service: "Temple Tours",
    date: "2024-01-10",
    location: "Varanasi"
  },
  {
    id: 3,
    customerName: "Ravi Kumar",
    rating: 5,
    comment: "Perfect family vacation! The vehicle was comfortable and driver was very professional.",
    service: "Vehicle Booking",
    date: "2024-01-08", 
    location: "Kerala"
  },
  {
    id: 4,
    customerName: "Lisa Chen",
    rating: 4,
    comment: "Great value for money. The guide showed us hidden gems that we wouldn't have found otherwise.",
    service: "Guide Services",
    date: "2024-01-05",
    location: "Goa"
  }
];