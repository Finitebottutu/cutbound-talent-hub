
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden hero-premium">
      {/* Subtle floating background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/2 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/1 rounded-full blur-3xl floating-element" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center fade-in">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 premium-card rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white font-medium">
              India's Premier Talent Marketplace
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">
            <span className="gradient-text slide-up">
              Hire India's Top 1%
            </span>
            <br />
            <span className="gradient-text slide-up" style={{ animationDelay: '0.2s' }}>
              Freelancers
            </span>
            <br />
            <span className="text-white/90 text-3xl md:text-4xl lg:text-5xl font-normal slide-up" style={{ animationDelay: '0.4s' }}>
              — or Let Us Build It For You
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light slide-up" style={{ animationDelay: '0.6s' }}>
            Access vetted developers, designers and marketers to accelerate your growth — all on one seamless platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 slide-up" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="premium-button text-lg px-10 py-7 rounded-full font-semibold">
              Hire Talent Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="premium-button-outline text-lg px-10 py-7 rounded-full font-semibold">
              Join as Freelancer
            </Button>
          </div>
          
          <div className="text-center slide-up" style={{ animationDelay: '1s' }}>
            <p className="text-gray-500 text-sm mb-8 uppercase tracking-widest font-medium">
              Trusted by enterprises all over the world
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {['YourStory', 'Gruhas', 'Rishihood', 'Triomics', 'FrontRow', 'Mercor', 'MarkitUp', 'Reczee'].map((company, index) => (
                <div 
                  key={company} 
                  className="text-gray-400 font-medium text-xl hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 slide-up"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
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
