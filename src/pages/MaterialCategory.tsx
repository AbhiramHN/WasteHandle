
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryHeader from '../components/materials/CategoryHeader';
import MaterialListings from '../components/materials/MaterialListings';
import { materialConfigs } from '../components/materials/MaterialConfig';
import { sampleListings } from '../components/materials/MaterialListingData';

const MaterialCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const config = categoryId && materialConfigs[categoryId] 
    ? materialConfigs[categoryId] 
    : {
        title: "Material Category",
        description: "Browse recyclable materials in this category",
        icon: "📦",
        color: "text-wasteTrade-green-600"
      };
  
  // Filter listings based on category
  const filteredListings = sampleListings.filter(listing => 
    listing.category.toLowerCase().includes(config.title.toLowerCase())
  );

  // If no matches found, show at least 3 random listings
  const displayListings = filteredListings.length > 0 
    ? filteredListings 
    : sampleListings.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <CategoryHeader config={config} />
        <MaterialListings listings={displayListings} />
      </div>
      <Footer />
    </div>
  );
};

export default MaterialCategory;
