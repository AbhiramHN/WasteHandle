
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-wasteTrade-green-50 to-wasteTrade-neutral-50 py-12 md:py-20">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat"></div>
      
      {/* Green floating elements */}
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-wasteTrade-green-400/20 blur-3xl"></div>
      <div className="absolute top-1/2 -right-20 h-60 w-60 rounded-full bg-wasteTrade-blue-400/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-flex items-center rounded-full bg-wasteTrade-green-100 px-3 py-1 text-sm font-medium text-wasteTrade-green-800">
              <Leaf size={16} className="mr-1" />
              Sustainable Trading Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Trade Waste, Create <span className="text-wasteTrade-green-600">Value</span>
            </h1>
            
            <p className="text-lg md:text-xl text-wasteTrade-neutral-700 max-w-lg">
              Connect with businesses and individuals to buy and sell recyclable materials. 
              Transform waste into resources and contribute to a circular economy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full px-8 py-6 text-base font-medium" onClick={() => router.push("/get-started")}>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" onClick={() => router.push("/get-started")} className="rounded-full px-8 py-6 text-base font-medium shadow-md transition-transform duration-300 border-wasteTrade-blue-600 text-wasteTrade-blue-600 hover:bg-wasteTrade-blue-600 hover:text-white hover:scale-105">
                Explore Materials
                
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4 text-wasteTrade-neutral-700">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full bg-wasteTrade-neutral-200 border-2 border-white flex items-center justify-center text-sm font-medium">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm">
                <span className="font-semibold">2,500+</span> active traders have joined our platform
              </p>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative h-[500px] w-full">
              <div className="absolute top-0 left-0 h-full w-full rounded-2xl overflow-hidden glass-card animate-fade-in shadow-xl p-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Recyclable materials" 
                  className="h-full w-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wasteTrade-green-900/40 to-transparent rounded-xl"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-bold">Turn your waste into someone else's treasure</h3>
                  <p className="text-white/90 mt-2">Join our community of eco-conscious traders</p>
                </div>
              </div>
              <div className="absolute -bottom-14 -right-4 h-28 w-60 rounded-lg glass-card animate-fade-in shadow-lg p-3 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-wasteTrade-green-100 flex items-center justify-center text-wasteTrade-green-600">
                  <Leaf size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium">Environmental Impact</p>
                  <p className="text-xs text-wasteTrade-neutral-600">500 tons diverted from landfills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
