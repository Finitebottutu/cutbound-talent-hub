
import { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden hero-premium">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            {pageTitle}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {pageDescription}
          </p>
          
          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search developers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              />
            </div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white pr-10 focus:outline-none focus:border-white/40"
              >
                <option value="rating">Sort by Rating</option>
                <option value="experience">Sort by Experience</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>🎯 Pre-vetted talent</span>
            <span>⚡ Fast hiring process</span>
            <span>🛡️ Money-back guarantee</span>
            <span>📞 24/7 support</span>
          </div>
        </div>
      </section>

      {/* Developers Grid */}
      <section className="py-20 px-6 lg:px-8">
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
          <div className="text-center mt-12">
            <Button size="lg" className="premium-button">
              Load More Developers
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 section-premium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to hire top {category} talent?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get matched with pre-vetted developers in 24 hours or less
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="premium-button">
              Post Your Project
            </Button>
            <Button size="lg" variant="outline" className="premium-button-outline">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HirePageLayout;
