
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-xl font-bold gradient-text">Cutbound</h1>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-foreground hover:text-white transition-colors">Services</a>
              <a href="#how-it-works" className="text-foreground hover:text-white transition-colors">How it Works</a>
              <a href="#testimonials" className="text-foreground hover:text-white transition-colors">Testimonials</a>
              <Link to="/referral" className="text-foreground hover:text-white transition-colors">Referral Program</Link>
              <a href="#faq" className="text-foreground hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-white">
              For Freelancers
            </Button>
            <Button className="bg-white text-black hover:bg-gray-200">
              Hire Talent
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 text-foreground hover:text-white">Services</a>
            <a href="#how-it-works" className="block px-3 py-2 text-foreground hover:text-white">How it Works</a>
            <a href="#testimonials" className="block px-3 py-2 text-foreground hover:text-white">Testimonials</a>
            <Link to="/referral" className="block px-3 py-2 text-foreground hover:text-white">Referral Program</Link>
            <a href="#faq" className="block px-3 py-2 text-foreground hover:text-white">FAQ</a>
            <div className="pt-4 pb-2 space-y-2">
              <Button variant="ghost" className="w-full text-foreground hover:text-white">
                For Freelancers
              </Button>
              <Button className="w-full bg-white text-black hover:bg-gray-200">
                Hire Talent
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
