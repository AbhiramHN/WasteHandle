
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  MapPin, 
  PackageCheck, 
  Badge, 
  ArrowRight,
  PackageOpen,
  CircleDollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

// Sample materials data to display
const sampleMaterials = [
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
  },
  {
    id: 5,
    title: "Glass Bottles (300kg)",
    category: "Glass",
    price: "$180.00",
    location: "Los Angeles, CA",
    quantity: "300 kg",
    condition: "Clean",
    seller: "Bottle Recyclers Inc.",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Electronic Components (100kg)",
    category: "Electronics",
    price: "$350.00",
    location: "Austin, TX",
    quantity: "100 kg",
    condition: "Used",
    seller: "Tech Recyclers",
    image: "/placeholder.svg"
  },
  {
    id: 7,
    title: "Textile Scraps (150kg)",
    category: "Textiles",
    price: "$95.00",
    location: "Chicago, IL",
    quantity: "150 kg",
    condition: "Mixed",
    seller: "Fabric Reuse Co.",
    image: "/placeholder.svg"
  },
  {
    id: 8,
    title: "Plastic Film Rolls (80kg)",
    category: "Plastics",
    price: "$110.00",
    location: "Denver, CO",
    quantity: "80 kg",
    condition: "Good",
    seller: "Film Recyclers Inc.",
    image: "/placeholder.svg"
  }
];

// Material categories
const categories = [
  "All Categories",
  "Paper & Cardboard",
  "Plastics",
  "Metals",
  "Glass",
  "Textiles",
  "Electronics",
  "Wood",
  "Bulk Items"
];

// Locations
const locations = [
  "All Locations",
  "West Coast",
  "East Coast",
  "Midwest",
  "South",
  "Northeast",
  "Northwest",
  "International"
];

const BuyMaterial = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [showFilters, setShowFilters] = useState(false);

  // Filter materials based on search and filters
  const filteredMaterials = sampleMaterials.filter(material => {
    const matchesSearch = searchTerm === '' || 
      material.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || 
      material.category === selectedCategory;
    
    const matchesLocation = selectedLocation === 'All Locations' || 
      material.location.includes(selectedLocation);
    
    const price = parseFloat(material.price.replace('$', ''));
    const minPrice = priceRange.min === '' ? 0 : parseFloat(priceRange.min);
    const maxPrice = priceRange.max === '' ? Infinity : parseFloat(priceRange.max);
    const matchesPrice = price >= minPrice && price <= maxPrice;
    
    return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-wasteTrade-green-50 to-wasteTrade-green-200 py-12">
        <div className="container mx-auto px-4 py-12  rounded-lg">
  <h1 className="text-4xl md:text-5xl font-bold text-wasteTrade-neutral-900 text-center mb-6">Buy Recyclable Materials</h1>
  <p className="text-lg text-wasteTrade-neutral-800 max-w-3xl mx-auto text-center mb-8">
    Browse thousands of material listings from verified sellers across the WasteTrade platform. Find the exact materials you need for your recycling or manufacturing needs.
  </p>
  
  {/* Search Bar */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
    <div className="relative w-full max-w-lg">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wasteTrade-neutral-600" />
      <Input 
        type="text" 
        placeholder="Search materials..." 
        className="pl-10 w-full py-3 border border-wasteTrade-neutral-400 rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    <div className="flex gap-4">
      <Button 
        variant="outline" 
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-wasteTrade-green-500 text-wasteTrade-green-700 hover:bg-wasteTrade-green-100 hover:text-green-800"
        onClick={() => setShowFilters(!showFilters)}
      >
        <Filter size={16} /> Filters
      </Button>
      <Button className="px-6 py-3 rounded-lg bg-wasteTrade-green-600 text-white hover:bg-wasteTrade-green-700">
        Search
      </Button>
    </div>
  </div>
  
  {/* Filters Section - Collapsible */}
  {showFilters && (
    <div className="p-6 mb-6 animate-fade-in bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold flex items-center mb-4 text-wasteTrade-neutral-900">
        <SlidersHorizontal size={18} className="mr-2" /> Filter Results
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Category Filter */}
        <div>
          <Label htmlFor="category">Material Category</Label>
          <select 
            id="category"
            className="w-full h-12 border border-wasteTrade-neutral-400 bg-background px-3 py-2 text-base rounded-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        {/* Location Filter */}
        <div>
          <Label htmlFor="location">Location</Label>
          <select 
            id="location"
            className="w-full h-12 border border-wasteTrade-neutral-400 bg-background px-3 py-2 text-base rounded-lg"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>
        
        {/* Price Range Filter */}
        <div>
          <Label>Price Range</Label>
          <div className="flex items-center gap-2">
            <Input 
              type="number" 
              placeholder="Min" 
              className="w-1/2 h-12 border border-wasteTrade-neutral-400 rounded-lg px-3"
              value={priceRange.min}
              onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
            />
            <span>-</span>
            <Input 
              type="number" 
              placeholder="Max" 
              className="w-1/2 h-12 border border-wasteTrade-neutral-400 rounded-lg px-3"
              value={priceRange.max}
              onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end mt-6">
        <Button 
          variant="outline" 
          className="mr-2 px-6 py-3 rounded-lg border border-wasteTrade-green-500 text-wasteTrade-green-700 hover:bg-wasteTrade-green-100 hover:text-green-800"
          onClick={() => {
            setSearchTerm('');
            setSelectedCategory('All Categories');
            setSelectedLocation('All Locations');
            setPriceRange({ min: '', max: '' });
          }}
        >
          Reset
        </Button>
        <Button className="px-6 py-3 rounded-lg bg-wasteTrade-green-600 text-white hover:bg-wasteTrade-green-700 ">
          Apply Filters
        </Button>
      </div>
    </div>
  )}
</div>

        </div>
        
        {/* Materials Listings */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Available Materials</h2>
              <div className="text-wasteTrade-neutral-600">
                Showing {filteredMaterials.length} results
              </div>
            </div>

            {filteredMaterials.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMaterials.map((material) => (
                  <div key={material.id} className="bg-white rounded-xl border border-wasteTrade-neutral-200 overflow-hidden animate-hover">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={material.image} 
                        alt={material.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 text-xs font-medium px-2 py-1 rounded-full text-wasteTrade-green-700">
                        {material.category}
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{material.title}</h3>
                        <span className="text-wasteTrade-green-600 font-bold">{material.price}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-wasteTrade-neutral-600 mb-3">
                        <MapPin size={14} className="mr-1" />
                        {material.location}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center text-sm">
                          <PackageCheck size={14} className="mr-1 text-wasteTrade-blue-500" />
                          <span>{material.quantity}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Badge size={14} className="mr-1 text-wasteTrade-blue-500" />
                          <span>{material.condition}</span>
                        </div>
                      </div>
                      
                      <div className="border-t pt-3 flex justify-between items-center">
                        <span className="text-sm text-wasteTrade-neutral-600">{material.seller}</span>
                        <Button size="sm" variant="outline" className="text-xs h-8">Contact</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-wasteTrade-neutral-50 rounded-lg">
                <PackageOpen className="mx-auto h-12 w-12 text-wasteTrade-neutral-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No materials found</h3>
                <p className="text-wasteTrade-neutral-600 mb-6">
                  Try adjusting your search filters or browse all categories
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All Categories');
                    setSelectedLocation('All Locations');
                    setPriceRange({ min: '', max: '' });
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
            
            {/* Pagination */}
            {filteredMaterials.length > 0 && (
              <div className="mt-10">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 bg-wasteTrade-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
              <p className="text-lg text-wasteTrade-neutral-700 mb-8">
                Post a specific material request and let our sellers come to you. Our network includes thousands of suppliers with various materials.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="rounded-full">
                  Post Material Request
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="rounded-full flex items-center">
                  <CircleDollarSign className="mr-2 h-4 w-4" />
                  Sell Your Materials
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyMaterial;
