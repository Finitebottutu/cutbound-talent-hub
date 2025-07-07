
import { Instagram, Linkedin } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="gradient-text">Cutbound</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          Top 1% Talent. Fully Done Projects. Zero Compromise.
        </p>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Coming Soon.
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          Something extraordinary is on the horizon. We're crafting an experience that will redefine boundaries and set new standards. Stay tuned for the reveal.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-8">
          <a 
            href="https://www.instagram.com/cutbound.official" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Instagram className="w-8 h-8 text-white group-hover:text-pink-400 transition-colors duration-300" />
          </a>
          
          <a 
            href="https://www.linkedin.com/company/cutbound/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
