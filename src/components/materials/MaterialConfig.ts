
import { ReactNode } from 'react';

export interface MaterialTypeConfig {
  [key: string]: {
    title: string;
    description: string;
    icon: string;
    color: string;
  }
}

export const materialConfigs: MaterialTypeConfig = {
  paper: {
    title: "Paper & Cardboard",
    description: "Browse paper and cardboard materials including newspapers, cardboard boxes, office paper, magazines, and more.",
    icon: "📄",
    color: "text-wasteTrade-blue-500"
  },
  plastics: {
    title: "Plastics",
    description: "Find various types of plastic materials including PET bottles, HDPE containers, plastic films, and more.",
    icon: "♳",
    color: "text-wasteTrade-green-500"
  },
  metals: {
    title: "Metals",
    description: "Explore metal materials including aluminum cans, steel scrap, copper, brass, and other metal waste products.",
    icon: "🔧",
    color: "text-wasteTrade-neutral-600"
  },
  glass: {
    title: "Glass",
    description: "Browse glass materials including bottles, jars, broken glass, window glass, and other glass waste.",
    icon: "🍶",
    color: "text-wasteTrade-blue-300"
  },
  textiles: {
    title: "Textiles",
    description: "Find textile materials including used clothing, fabric scraps, industrial textiles, and other fabric waste.",
    icon: "👕",
    color: "text-wasteTrade-green-600"
  },
  electronics: {
    title: "Electronics",
    description: "Explore electronic waste including circuit boards, cables, batteries, devices, and other e-waste materials.",
    icon: "💻",
    color: "text-wasteTrade-blue-600"
  },
  wood: {
    title: "Wood",
    description: "Browse wood materials including pallets, construction waste, furniture, and other wood waste products.",
    icon: "🪵",
    color: "text-wasteTrade-neutral-800"
  },
  bulk: {
    title: "Bulk Items",
    description: "Find large volumes of industrial waste and by-products available for purchase in bulk quantities.",
    icon: "📦",
    color: "text-wasteTrade-green-700"
  }
};
