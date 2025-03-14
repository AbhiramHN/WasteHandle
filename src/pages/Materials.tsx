
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Package2, Recycle, Truck, Coins, Boxes, Box, PanelTop, Wine, FileBox } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const categoryItems = [
  {
    id: 1,
    title: "Paper & Cardboard",
    icon: <FileBox className="h-8 w-8 text-wasteTrade-blue-500" />,
    description: "Newspapers, magazines, office paper, cardboard boxes",
    link: "/materials/paper"
  },
  {
    id: 2,
    title: "Plastics",
    icon: <Recycle className="h-8 w-8 text-wasteTrade-green-500" />,
    description: "PET bottles, HDPE containers, plastic films, etc.",
    link: "/materials/plastics"
  },
  {
    id: 3,
    title: "Metals",
    icon: <Coins className="h-8 w-8 text-wasteTrade-neutral-600" />,
    description: "Aluminum cans, steel scrap, copper, brass, etc.",
    link: "/materials/metals"
  },
  {
    id: 4,
    title: "Glass",
    icon: <Wine className="h-8 w-8 text-wasteTrade-blue-300" />,
    description: "Bottles, jars, broken glass, window glass",
    link: "/materials/glass"
  },
  {
    id: 5,
    title: "Textiles",
    icon: <Box className="h-8 w-8 text-wasteTrade-green-600" />,
    description: "Used clothing, fabric scraps, industrial textiles",
    link: "/materials/textiles"
  },
  {
    id: 6,
    title: "Electronics",
    icon: <PanelTop className="h-8 w-8 text-wasteTrade-blue-600" />,
    description: "Circuit boards, cables, batteries, devices",
    link: "/materials/electronics"
  },
  {
    id: 7,
    title: "Wood",
    icon: <Boxes className="h-8 w-8 text-wasteTrade-neutral-800" />,
    description: "Pallets, construction waste, furniture",
    link: "/materials/wood"
  },
  {
    id: 8,
    title: "Bulk Items",
    icon: <Package2 className="h-8 w-8 text-wasteTrade-green-700" />,
    description: "Large volumes of industrial waste and by-products",
    link: "/materials/bulk"
  }
];

const Materials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="py-16 bg-wasteTrade-green-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Materials Marketplace</h1>
            <p className="text-lg text-wasteTrade-neutral-700 mb-10 max-w-3xl">
              Browse our complete range of recyclable materials available for trade. Connect with sellers, find the materials you need, or list your own materials for sale.
            </p>
            <div className="flex gap-4">
              <Button className="rounded-full">
                List Materials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-full">
                Search Materials
              </Button>
            </div>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Browse by Material Category</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryItems.map((category) => (
                <Link 
                  key={category.id} 
                  to={category.link}
                  className="bg-white rounded-xl border border-wasteTrade-neutral-200 p-6 animate-hover hover:border-wasteTrade-green-300"
                >
                  <div className="mb-4 p-4 inline-block rounded-full bg-wasteTrade-neutral-100">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{category.title}</h3>
                  <p className="text-wasteTrade-neutral-600 mb-4">
                    {category.description}
                  </p>
                  <div className="text-wasteTrade-green-600 flex items-center text-sm font-medium">
                    Explore
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Materials;
