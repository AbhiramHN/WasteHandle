
import React from 'react';
import { ArrowRight, Package2, Recycle, Truck, Coins, Boxes, Box, PanelTop, Wine, FileBox } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const categoryItems = [
  {
    id: 1,
    title: "Paper & Cardboard",
    icon: <FileBox className="h-6 w-6 text-wasteTrade-blue-500" />,
    description: "Newspapers, magazines, office paper, cardboard boxes",
    link: "/materials/paper"
  },
  {
    id: 2,
    title: "Plastics",
    icon: <Recycle className="h-6 w-6 text-wasteTrade-green-500" />,
    description: "PET bottles, HDPE containers, plastic films, etc.",
    link: "/materials/plastics"
  },
  {
    id: 3,
    title: "Metals",
    icon: <Coins className="h-6 w-6 text-wasteTrade-neutral-600" />,
    description: "Aluminum cans, steel scrap, copper, brass, etc.",
    link: "/materials/metals"
  },
  {
    id: 4,
    title: "Glass",
    icon: <Wine className="h-6 w-6 text-wasteTrade-blue-300" />,
    description: "Bottles, jars, broken glass, window glass",
    link: "/materials/glass"
  },
  {
    id: 5,
    title: "Textiles",
    icon: <Box className="h-6 w-6 text-wasteTrade-green-600" />,
    description: "Used clothing, fabric scraps, industrial textiles",
    link: "/materials/textiles"
  },
  {
    id: 6,
    title: "Electronics",
    icon: <PanelTop className="h-6 w-6 text-wasteTrade-blue-600" />,
    description: "Circuit boards, cables, batteries, devices",
    link: "/materials/electronics"
  },
  {
    id: 7,
    title: "Wood",
    icon: <Boxes className="h-6 w-6 text-wasteTrade-neutral-800" />,
    description: "Pallets, construction waste, furniture",
    link: "/materials/wood"
  },
  {
    id: 8,
    title: "Bulk Items",
    icon: <Package2 className="h-6 w-6 text-wasteTrade-green-700" />,
    description: "Large volumes of industrial waste and by-products",
    link: "/materials/bulk"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-wasteTrade-neutral-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-wasteTrade-green-700 mb-3">Browse Material Categories</h2>
          <p className="text-wasteTrade-neutral-600 max-w-2xl mx-auto text-lg">
            Find the materials you need or list what you have to offer. Our platform connects buyers and sellers across various waste categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryItems.map((category) => (
            <Link 
              key={category.id} 
              to={category.link}
              className="bg-white rounded-xl border border-wasteTrade-neutral-200 p-6 animate-hover hover:border-wasteTrade-green-300 flex flex-col h-full"
            >
              <div className="mb-4">
                <div className="p-3 inline-block rounded-full bg-wasteTrade-neutral-100 ">
                  {category.icon}
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
              <p className="text-sm text-wasteTrade-neutral-600 mb-4 flex-grow">
                {category.description}
              </p>
              <div className="mt-auto">
                <div className="inline-flex items-center px-4 py-2 rounded-full hover:bg-green-100 transition duration-300 hover:text-green-800">
                  Explore
                  <Compass size={16} className="ml-1" /> {/* Compass icon instead of arrow */}
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
