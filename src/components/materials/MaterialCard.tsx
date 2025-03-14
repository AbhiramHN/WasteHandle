
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, PackageCheck, Badge } from 'lucide-react';
import { MaterialListing } from './MaterialListingData';

interface MaterialCardProps {
  listing: MaterialListing;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ listing }) => {
  return (
    <div className="bg-white rounded-xl border border-wasteTrade-neutral-200 overflow-hidden animate-hover">
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
  );
};

export default MaterialCard;
