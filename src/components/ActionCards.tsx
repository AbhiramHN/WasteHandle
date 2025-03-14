import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, PackageOpen } from "lucide-react";
import { Link } from "react-router-dom";

const ActionCards = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-wasteTrade-blue-50 to-wasteTrade-green-50">
      {/* Corner Glow Elements */}
      <div className="absolute top-[-30px] left-[-30px] w-24 h-24 bg-wasteTrade-blue-200 rounded-full blur-2xl opacity-40"></div>
      <div className="absolute bottom-[-30px] right-[-30px] w-24 h-24 bg-wasteTrade-green-200 rounded-full blur-2xl opacity-40"></div>

      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold tracking-wide text-wasteTrade-blue-700 mb-12">
          Ready to <span className="text-wasteTrade-green-500">Get Started?</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-16">
          {/* Buy Material Card */}
          <Card className="relative w-[500px] bg-white shadow-lg rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105">
            <CardHeader className="bg-wasteTrade-blue-50 pb-8">
              <div className="w-14 h-14 bg-wasteTrade-blue-100 rounded-full flex items-center justify-center mb-4 shadow">
                <ShoppingBag className="h-7 w-7 text-wasteTrade-blue-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-wasteTrade-blue-700">
                Buy Material
              </CardTitle>
              <CardDescription className="text-wasteTrade-blue-600">
                Find recyclable materials from sellers across the platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="py-6">
              <ul className="space-y-3 text-wasteTrade-neutral-700">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-wasteTrade-blue-400 rounded-full mr-3"></span>
                  Browse thousands of listings
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-wasteTrade-blue-400 rounded-full mr-3"></span>
                  Connect with verified sellers
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-wasteTrade-blue-400 rounded-full mr-3"></span>
                  Secure payment options
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pb-6">
              <Link to="/buy" className="w-full">
                <Button className=" rounded-full bg-gradient-to-r from-wasteTrade-blue-500 to-wasteTrade-blue-600 hover:from-wasteTrade-blue-600 hover:to-wasteTrade-blue-700 shadow-lg hover:shadow-blue-500/40 text-white py-3 text-lg font-medium transition-all transform hover:scale-105">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  BUY MATERIAL
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Sell Material Card */}
          <Card className="relative w-[500px] bg-white shadow-lg rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-green-500/40 hover:scale-105">
            <CardHeader className="bg-wasteTrade-green-50 pb-8">
              <div className="w-14 h-14 bg-wasteTrade-green-100 rounded-full flex items-center justify-center mb-4 shadow">
                <PackageOpen className="h-7 w-7 text-wasteTrade-green-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-wasteTrade-green-700">
                Sell Material
              </CardTitle>
              <CardDescription className="text-wasteTrade-green-600">
                List your recyclable materials and connect with buyers.
              </CardDescription>
            </CardHeader>
            <CardContent className="py-6">
              <ul className="space-y-3 text-wasteTrade-neutral-700">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-wasteTrade-green-400 rounded-full mr-3"></span>
                  Create listings in minutes
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-wasteTrade-green-400 rounded-full mr-3"></span>
                  Receive offers from interested buyers
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-wasteTrade-green-400 rounded-full mr-3"></span>
                  Manage all your listings in one place
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pb-6">
            <Link to="/sell" className="w-full">
              <Button className=" rounded-full bg-gradient-to-r from-wasteTrade-green-500 to-wasteTrade-green-600 hover:from-wasteTrade-green-600 hover:to-wasteTrade-green-700 shadow-lg hover:shadow-green-500/40 text-white py-3 text-lg font-medium transition-all transform hover:scale-105">
                  <PackageOpen className="mr-2 h-5 w-5" />
                  SELL MATERIAL
              </Button>            
            </Link>

            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ActionCards;
