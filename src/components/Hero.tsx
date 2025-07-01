
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-text">Top tier talent</span>
            <br />
            <span className="text-white">ready for your next project</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Access vetted developers, designers and marketers to accelerate your growth — all on one seamless platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">
              Hire Talent Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6">
              Join as Freelancer
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">
              Trusted by enterprises all over the world
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['YourStory', 'Gruhas', 'Rishihood', 'Triomics', 'FrontRow', 'Mercor', 'MarkitUp', 'Reczee'].map((company) => (
                <div key={company} className="text-gray-400 font-medium text-lg">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
