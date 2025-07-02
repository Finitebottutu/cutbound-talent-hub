import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-card to-background border-t border-white/10 py-16 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust Cutbound for their talent needs.
          </p>
          <Button size="lg" className="premium-button text-lg px-8 py-6">
            Get Started Today
          </Button>
        </div>
        
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold gradient-text mb-2">Cutbound</h3>
              <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                Marketplace to hire top-tier freelancers for all your tech needs
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="premium-button-outline text-gray-300 hover:text-black">
                Contact Sales
              </Button>
              <Button variant="outline" className="premium-button-outline text-gray-300 hover:text-black">
                WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 slide-up" style={{ animationDelay: '0.4s' }}>
            <p>&copy; 2024 Cutbound. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
