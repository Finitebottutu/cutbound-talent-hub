const stats = [
  { number: '24', label: 'Hours', description: 'To hire vetted talent for your next project with Cutbound' },
  { number: 'Top 1%', label: 'Talent', description: 'Handpicked after rigorous screening and evaluation' },
  { number: '80%', label: 'Faster', description: 'Project delivery than any platforms out there' }
];

const Stats = () => {
  return (
    <section className="py-20 px-6 lg:px-8 section-premium relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-8 slide-up">Our talent comes from the best</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center slide-up hover-lift" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <p className="text-gray-400 leading-relaxed max-w-xs mx-auto hover:text-gray-300 transition-colors duration-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
