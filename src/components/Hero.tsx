
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Premium animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/10 to-purple/5 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue/5 to-white/8 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl float" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center fade-in">
          {/* Premium animated badge */}
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8 glow hover-scale">
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            <span className="text-white font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              India's Premier Talent Marketplace
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent slide-up">
              Hire India's Top 1%
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent slide-up" style={{ animationDelay: '0.2s' }}>
              Freelancers
            </span>
            <br />
            <span className="text-white text-3xl md:text-4xl lg:text-5xl font-normal slide-up" style={{ animationDelay: '0.4s' }}>
              — or Let Us Build It For You
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light slide-up" style={{ animationDelay: '0.6s' }}>
            Access vetted developers, designers and marketers to accelerate your growth — all on one seamless platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 slide-up" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="premium-button text-lg px-10 py-7 rounded-full font-semibold hover:shadow-white/25">
              Hire Talent Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="premium-button-outline text-lg px-10 py-7 rounded-full font-semibold">
              Join as Freelancer
            </Button>
          </div>
          
          <div className="text-center slide-up" style={{ animationDelay: '1s' }}>
            <p className="text-gray-400 text-sm mb-8 uppercase tracking-widest font-medium">
              Trusted by enterprises all over the world
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
              {['YourStory', 'Gruhas', 'Rishihood', 'Triomics', 'FrontRow', 'Mercor', 'MarkitUp', 'Reczee'].map((company, index) => (
                <div 
                  key={company} 
                  className="text-gray-300 font-medium text-xl hover:text-white transition-all duration-500 cursor-pointer hover:scale-110 slide-up"
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
