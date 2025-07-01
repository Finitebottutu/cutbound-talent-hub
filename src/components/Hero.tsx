
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center fade-in">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white font-medium">India's Premier Talent Marketplace</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Hire India's Top 1%
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
              Freelancers
            </span>
            <br />
            <span className="text-white text-3xl md:text-4xl lg:text-5xl font-normal">
              — or Let Us Build It For You
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Access vetted developers, designers and marketers to accelerate your growth — all on one seamless platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-10 py-7 rounded-full font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105">
              Hire Talent Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-black text-lg px-10 py-7 rounded-full font-semibold backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Join as Freelancer
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-8 uppercase tracking-widest font-medium">
              Trusted by enterprises all over the world
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
              {['YourStory', 'Gruhas', 'Rishihood', 'Triomics', 'FrontRow', 'Mercor', 'MarkitUp', 'Reczee'].map((company) => (
                <div key={company} className="text-gray-300 font-medium text-xl hover:text-white transition-colors duration-300 cursor-pointer">
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
