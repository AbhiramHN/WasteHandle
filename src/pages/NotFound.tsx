
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-wasteTrade-neutral-50 py-16">
        <div className="text-center px-4 max-w-md">
          <div className="bg-wasteTrade-green-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl font-bold text-wasteTrade-green-600">404</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-wasteTrade-neutral-600 mb-8">
            The page you are looking for doesn't exist or has been moved. Please check the URL or navigate back to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full" asChild>
              <a href="/">
                <HomeIcon className="mr-2 h-4 w-4" />
                Return to Home
              </a>
            </Button>
            <Button variant="outline" className="rounded-full" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
