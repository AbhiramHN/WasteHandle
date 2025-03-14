
import React from 'react';
import { Pencil, Search, HandshakeIcon, Truck, ArrowRight } from 'lucide-react';
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

const HowItWorks = () => {
  return (
    <section className="py-16 bg-wasteTrade-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How WasteTrade Works</h2>
          <p className="text-wasteTrade-neutral-600 max-w-2xl mx-auto">
            Our platform simplifies the process of trading recyclable materials, connecting 
            businesses and individuals in a user-friendly marketplace.
          </p>
        </div>

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

        <div className="mt-12 text-center">
          <Button className="rounded-full px-8 py-6 text-base font-medium">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
