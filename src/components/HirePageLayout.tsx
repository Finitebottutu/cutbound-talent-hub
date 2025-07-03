
import { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DeveloperProfile from './DeveloperProfile';

interface Developer {
  name: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  experience: string;
  hourlyRate: string;
  projects: number;
  bio: string;
  skills: string[];
  imageUrl: string;
}

interface HirePageLayoutProps {
  pageTitle: string;
  pageDescription: string;
  developers: Developer[];
  category: string;
}

const HirePageLayout = ({ pageTitle, pageDescription, developers, category }: HirePageLayoutProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">{pageTitle}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {pageDescription}
          </p>
          
          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-6 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search developers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
              />
            </div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray-800/50 border border-gray-700 rounded-lg px-6 py-4 text-white pr-12 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
              >
                <option value="rating">Sort by Rating</option>
                <option value="experience">Sort by Experience</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">🎯 Pre-vetted talent</span>
            <span className="flex items-center gap-2">⚡ Fast hiring process</span>
            <span className="flex items-center gap-2">🛡️ Money-back guarantee</span>
            <span className="flex items-center gap-2">📞 24/7 support</span>
          </div>
        </div>
      </section>

      {/* Developers Grid */}
      <section className="py-20 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {developers.map((developer, index) => (
              <DeveloperProfile
                key={index}
                {...developer}
              />
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-16">
            <Button size="lg" className="premium-button px-8 py-4">
              Load More Developers
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to hire top {category} talent?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Get matched with pre-vetted developers in 24 hours or less
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="premium-button px-8 py-4">
              Post Your Project
            </Button>
            <Button size="lg" variant="outline" className="premium-button-outline border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HirePageLayout;
