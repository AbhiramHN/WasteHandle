
import React from 'react';
import { CircleDollarSign, Recycle, Award, Truck, FileBarChart, Leaf, ShieldCheck, Users } from 'lucide-react';

const benefitItems = [
  {
    id: 1,
    title: "Cost Effective",
    description: "Reduce waste disposal costs and potentially earn from materials you would otherwise discard.",
    icon: <CircleDollarSign className="h-8 w-8 text-wasteTrade-green-500" />
  },
  {
    id: 2,
    title: "Environmentally Friendly",
    description: "Contribute to a circular economy by keeping materials in use and out of landfills.",
    icon: <Leaf className="h-8 w-8 text-wasteTrade-green-600" />
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "Our rating system helps ensure the quality of materials and reliability of traders.",
    icon: <Award className="h-8 w-8 text-wasteTrade-blue-500" />
  },
  {
    id: 4,
    title: "Local Trading",
    description: "Find materials nearby to reduce transportation costs and environmental impact.",
    icon: <Truck className="h-8 w-8 text-wasteTrade-blue-600" />
  },
  {
    id: 5,
    title: "Transparent Pricing",
    description: "Clear pricing information helps you make informed decisions about buying and selling.",
    icon: <FileBarChart className="h-8 w-8 text-wasteTrade-green-500" />
  },
  {
    id: 6,
    title: "Secure Transactions",
    description: "Our platform includes features to help ensure secure and reliable trading.",
    icon: <ShieldCheck className="h-8 w-8 text-wasteTrade-blue-500" />
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-wasteTrade-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits of Using WasteTrade</h2>
          <p className="text-wasteTrade-neutral-600 max-w-2xl mx-auto">
            Our platform offers numerous advantages for businesses and individuals looking to buy and sell recyclable materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitItems.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white rounded-xl p-6 shadow-sm border border-wasteTrade-neutral-100 flex flex-col items-start animate-hover"
            >
              <div className="mb-4 p-3 rounded-full bg-wasteTrade-neutral-50">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
              <p className="text-wasteTrade-neutral-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-wasteTrade-green-50 rounded-2xl p-8 border border-wasteTrade-green-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="col-span-2 space-y-4">
              <h3 className="text-2xl font-bold">Sustainable Future Through Smart Trading</h3>
              <p className="text-wasteTrade-neutral-700">
                By facilitating the exchange of recyclable materials, WasteTrade helps reduce waste, conserve resources, and create value. 
                Join our community of eco-conscious businesses and individuals making a difference.
              </p>
              <div className="flex items-center space-x-4 pt-2">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-wasteTrade-green-600" />
                  <span className="font-medium">2,500+ Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Recycle className="h-5 w-5 text-wasteTrade-green-600" />
                  <span className="font-medium">10,000+ Trades</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/placeholder.svg" alt="Sustainable trading" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
