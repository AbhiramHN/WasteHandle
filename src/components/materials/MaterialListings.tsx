
import React from 'react';
import MaterialCard from './MaterialCard';
import { Button } from '@/components/ui/button';
import { MaterialListing } from './MaterialListingData';

interface MaterialListingsProps {
  listings: MaterialListing[];
}

const MaterialListings: React.FC<MaterialListingsProps> = ({ listings }) => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Available Listings</h2>
          <div className="text-wasteTrade-neutral-600">
            Showing {listings.length} results
          </div>
        </div>

        {listings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <MaterialCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-wasteTrade-neutral-600">No listings found for this category.</p>
            <Button className="mt-4">Create the First Listing</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MaterialListings;
