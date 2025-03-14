
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const features = [
  "Free account creation",
  "Access to all material categories",
  "Messaging with potential trade partners",
  "Location-based material search",
  "Detailed material listings"
];

const CTASection = () => {
  return (
    <section className="py-16 bg-wasteTrade-green-600 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-wasteTrade-green-500/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-wasteTrade-green-700/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-wasteTrade-green-100 text-lg max-w-2xl mx-auto">
              Join thousands of businesses and individuals already using WasteTrade to buy and sell recyclable materials.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 space-y-6">
                <h3 className="text-2xl font-semibold">Create Your Free Account Today</h3>
                <p className="text-wasteTrade-green-100">
                  Get instant access to our marketplace and start trading recyclable materials right away.
                </p>
                
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-6 w-6 rounded-full bg-wasteTrade-green-500 flex items-center justify-center mr-3">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-xl font-medium mb-4">Sign Up For Free</h4>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <div>
                    <input 
                      type="password" 
                      placeholder="Password" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <Button className="w-full bg-white text-wasteTrade-green-700 hover:bg-white/90 rounded-lg py-6">
                    Create Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-center text-wasteTrade-green-100">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
