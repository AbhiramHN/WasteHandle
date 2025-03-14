
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Pencil, Search, HandshakeIcon, Truck, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    id: 1,
    title: "List Your Materials",
    description: "Create detailed listings of your recyclable materials including quantity, condition, and location.",
    icon: <Pencil className="h-8 w-8 text-white" />,
    color: "bg-wasteTrade-green-600"
  },
  {
    id: 2,
    title: "Find What You Need",
    description: "Browse listings or create requests for specific materials you're looking to acquire.",
    icon: <Search className="h-8 w-8 text-white" />,
    color: "bg-wasteTrade-blue-500"
  },
  {
    id: 3,
    title: "Connect & Agree",
    description: "Communicate with potential trading partners and agree on price, collection or delivery details.",
    icon: <HandshakeIcon className="h-8 w-8 text-white" />,
    color: "bg-wasteTrade-green-500"
  },
  {
    id: 4,
    title: "Complete the Trade",
    description: "Arrange logistics, complete the transaction, and leave feedback for your trading partner.",
    icon: <Truck className="h-8 w-8 text-white" />,
    color: "bg-wasteTrade-blue-600"
  }
];

const benefits = [
  "Reduce waste management costs",
  "Find new sources of materials",
  "Support the circular economy",
  "Lower your environmental footprint",
  "Connect with like-minded businesses",
  "Transparent pricing and quality"
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-wasteTrade-green-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">How WasteTrade Works</h1>
            <p className="text-lg text-wasteTrade-neutral-700 max-w-2xl mx-auto mb-10">
              Our platform simplifies the process of trading recyclable materials, connecting 
              businesses and individuals in a user-friendly marketplace.
            </p>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 h-1 w-full bg-wasteTrade-neutral-200 -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {steps.map((step) => (
                  <div key={step.id} className="flex flex-col items-center text-center">
                    <div className={`${step.color} h-16 w-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                      {step.icon}
                      <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white border-2 border-wasteTrade-neutral-200 flex items-center justify-center text-xs font-bold text-wasteTrade-neutral-700">
                        {step.id}
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-wasteTrade-neutral-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-wasteTrade-neutral-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">For Sellers</h2>
                <p className="text-wasteTrade-neutral-700 mb-6">
                  Turn your waste materials into a valuable resource. List your recyclable materials on WasteTrade and connect with businesses looking for exactly what you have.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-wasteTrade-green-500 mt-0.5 mr-2" />
                    <span>Create detailed listings with photos, specifications, and pricing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-wasteTrade-green-500 mt-0.5 mr-2" />
                    <span>Receive inquiries directly from interested buyers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-wasteTrade-green-500 mt-0.5 mr-2" />
                    <span>Negotiate terms and arrange logistics through our platform</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-wasteTrade-green-500 mt-0.5 mr-2" />
                    <span>Reduce waste disposal costs and potentially earn revenue</span>
                  </li>
                </ul>
                <Button className="rounded-full">
                  Start Selling
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">For Buyers</h2>
                <p className="text-wasteTrade-neutral-700 mb-6">
                  Find the materials you need at competitive prices. Browse our marketplace to discover recyclable materials from verified sellers across various categories.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-wasteTrade-blue-500 mt-0.5 mr-2" />
                    <span>Browse detailed listings with clear specifications and pricing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-wasteTrade-blue-500 mt-0.5 mr-2" />
                    <span>Filter by location to find materials near you</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-wasteTrade-blue-500 mt-0.5 mr-2" />
                    <span>Contact sellers directly to negotiate terms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-wasteTrade-blue-500 mt-0.5 mr-2" />
                    <span>Secure alternative material sources at competitive prices</span>
                  </li>
                </ul>
                <Button className="rounded-full bg-wasteTrade-blue-600 hover:bg-wasteTrade-blue-700">
                  Start Buying
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-wasteTrade-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join WasteTrade?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Create your free account today and start trading recyclable materials.
            </p>
            <Button className="rounded-full bg-white text-wasteTrade-green-600 hover:bg-white/90">
              Sign Up Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
