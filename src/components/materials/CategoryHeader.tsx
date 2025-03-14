
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Filter } from 'lucide-react';
import { MaterialTypeConfig } from './MaterialConfig';

interface CategoryHeaderProps {
  config: {
    title: string;
    description: string;
    icon: string;
    color: string;
  };
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ config }) => {
  return (
    <div className="bg-wasteTrade-green-50 py-12">
      <div className="container mx-auto px-4">
        <Link to="/materials" className="inline-flex items-center text-wasteTrade-green-600 hover:text-wasteTrade-green-700 mb-6">
          <ArrowLeft size={16} className="mr-1" />
          Back to All Materials
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{config.title}</h1>
        <p className="text-lg text-wasteTrade-neutral-700 max-w-3xl mb-8">
          {config.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="rounded-full">
            List {config.title}
          </Button>
          <Button variant="outline" className="rounded-full flex items-center">
            <Filter size={16} className="mr-2" />
            Filter Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
