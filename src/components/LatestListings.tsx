
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, PackageCheck, Badge, CircleDollarSign } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: "Clean Cardboard Boxes (50+ units)",
    category: "Paper & Cardboard",
    price: "$75.00",
    location: "Portland, OR",
    quantity: "50 units",
    condition: "Excellent",
    seller: "EcoPackaging Ltd.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "PET Plastic Bottles (200kg)",
    category: "Plastics",
    price: "$120.00",
    location: "Seattle, WA",
    quantity: "200 kg",
    condition: "Good",
    seller: "RecycleMore Inc.",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Aluminum Scrap (500kg)",
    category: "Metals",
    price: "$450.00",
    location: "Vancouver, BC",
    quantity: "500 kg",
    condition: "Mixed",
    seller: "MetalWorks Co.",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Used Wood Pallets (25 units)",
    category: "Wood",
    price: "$150.00",
    location: "San Francisco, CA",
    quantity: "25 units",
    condition: "Used",
    seller: "Green Logistics",
    image: "/placeholder.svg"
  }
];

const LatestListings = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Material Listings</h2>
            <p className="text-wasteTrade-neutral-600">
              Browse recent additions to our marketplace
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Listings
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-xl border border-wasteTrade-neutral-200 overflow-hidden animate-hover">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 text-xs font-medium px-2 py-1 rounded-full text-wasteTrade-green-700">
                  {listing.category}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{listing.title}</h3>
                  <span className="text-wasteTrade-green-600 font-bold">{listing.price}</span>
                </div>
                
                <div className="flex items-center text-sm text-wasteTrade-neutral-600 mb-3">
                  <MapPin size={14} className="mr-1" />
                  {listing.location}
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center text-sm">
                    <PackageCheck size={14} className="mr-1 text-wasteTrade-blue-500" />
                    <span>{listing.quantity}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Badge size={14} className="mr-1 text-wasteTrade-blue-500" />
                    <span>{listing.condition}</span>
                  </div>
                </div>
                
                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="text-sm text-wasteTrade-neutral-600">{listing.seller}</span>
                  <Button size="sm" variant="outline" className="text-xs h-8">Contact</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestListings;
