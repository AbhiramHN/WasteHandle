
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Leaf, Users, Globe, BarChart3, Mail, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-wasteTrade-green-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">About WasteTrade</h1>
              <p className="text-lg text-wasteTrade-neutral-700 mb-8">
                WasteTrade is a marketplace platform that connects businesses and individuals looking to buy and sell recyclable materials. Our mission is to create a circular economy by giving value to waste and keeping materials in use for longer.
              </p>
              <Button className="rounded-full">
                Join Our Mission
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-wasteTrade-neutral-700 mb-4">
                  We envision a world where waste is seen as a valuable resource rather than a problem to be disposed of. By facilitating the trade of recyclable materials, we're working to create a more sustainable future for our planet.
                </p>
                <p className="text-wasteTrade-neutral-700">
                  Our platform makes it easy for businesses and individuals to connect, trade materials, and contribute to a circular economy. We're committed to reducing waste, conserving resources, and creating value for all our users.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img src="/placeholder.svg" alt="WasteTrade Vision" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-wasteTrade-neutral-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-wasteTrade-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-wasteTrade-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-wasteTrade-neutral-600">Tons of waste diverted from landfills</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-wasteTrade-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-wasteTrade-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">2,500+</h3>
                <p className="text-wasteTrade-neutral-600">Active users on our platform</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-wasteTrade-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-wasteTrade-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-wasteTrade-neutral-600">Cities where materials are traded</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-wasteTrade-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-wasteTrade-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">$1M+</h3>
                <p className="text-wasteTrade-neutral-600">Value of materials traded</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((person) => (
                <div key={person} className="text-center">
                  <div className="w-32 h-32 rounded-full bg-wasteTrade-neutral-200 mx-auto mb-4 overflow-hidden">
                    <img src="/placeholder.svg" alt={`Team member ${person}`} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Team Member {person}</h3>
                  <p className="text-wasteTrade-green-600 mb-2">Position Title</p>
                  <p className="text-wasteTrade-neutral-600 max-w-xs mx-auto">
                    Brief description about the team member and their role in WasteTrade.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-wasteTrade-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-xl mb-8">
                Have questions about WasteTrade? We'd love to hear from you!
              </p>
              <Button className="rounded-full bg-white text-wasteTrade-green-600 hover:bg-white/90">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
