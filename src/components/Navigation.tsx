import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 premium-nav">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="group">
              <h1 className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                Cutbound
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                How it Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link to="/referral" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                Referral Program
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a href="#faq" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="premium-button-outline text-gray-300 hover:text-black">
              For Freelancers
            </Button>
            <Button className="premium-button">
              Hire Talent
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-white transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass-effect border-b border-white/10 fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 text-foreground hover:text-white transition-all duration-300 hover:bg-white/5 rounded">Services</a>
            <a href="#how-it-works" className="block px-3 py-2 text-foreground hover:text-white transition-all duration-300 hover:bg-white/5 rounded">How it Works</a>
            <a href="#testimonials" className="block px-3 py-2 text-foreground hover:text-white transition-all duration-300 hover:bg-white/5 rounded">Testimonials</a>
            <Link to="/referral" className="block px-3 py-2 text-foreground hover:text-white transition-all duration-300 hover:bg-white/5 rounded">Referral Program</Link>
            <a href="#faq" className="block px-3 py-2 text-foreground hover:text-white transition-all duration-300 hover:bg-white/5 rounded">FAQ</a>
            <div className="pt-4 pb-2 space-y-2">
              <Button variant="ghost" className="w-full premium-button-outline text-foreground hover:text-black">
                For Freelancers
              </Button>
              <Button className="w-full premium-button">
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
