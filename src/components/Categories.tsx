
const categories = [
  'Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing', 
  'Data Science', 'DevOps', 'AI/ML', 'Blockchain', 'Content Writing', 'SEO'
];

const Categories = () => {
  return (
    <section className="py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-6">
          Popular Categories
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto text-lg">
          Find specialists across 200+ fields, from emerging technologies to traditional expertise
        </p>
      </div>
      
      <div className="relative">
        <div className="flex space-x-8 scroll-animation">
          {[...categories, ...categories].map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 glass-effect rounded-2xl px-10 py-8 hover:bg-white/10 transition-all duration-500 cursor-pointer hover-scale premium-shadow"
            >
              <span className="text-white font-semibold text-lg whitespace-nowrap">
                {category}
              </span>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for seamless scroll effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Categories;
