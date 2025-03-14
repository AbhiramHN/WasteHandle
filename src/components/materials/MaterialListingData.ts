
export interface MaterialListing {
  id: number;
  title: string;
  category: string;
  price: string;
  location: string;
  quantity: string;
  condition: string;
  seller: string;
  image: string;
}

// Sample listings data
export const sampleListings: MaterialListing[] = [
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
  }
];
