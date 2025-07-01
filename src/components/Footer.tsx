
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust Cutbound for their talent needs.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">
            Get Started Today
          </Button>
        </div>
        
        <div className="border-t border-border pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold gradient-text mb-2">Cutbound</h3>
              <p className="text-gray-400">
                Marketplace to hire top-tier freelancers for all your tech needs
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                Contact Sales
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-gray-400">
            <p>&copy; 2024 Cutbound. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
