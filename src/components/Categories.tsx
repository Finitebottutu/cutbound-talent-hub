
const categories = [
  'Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing', 
  'Data Science', 'DevOps', 'AI/ML', 'Blockchain', 'Content Writing', 'SEO'
];

const Categories = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-4">
          Popular Categories
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          Find specialists across 200+ fields, from emerging technologies to traditional expertise
        </p>
      </div>
      
      <div className="relative">
        <div className="flex space-x-6 scroll-animation">
          {[...categories, ...categories].map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-card border border-border rounded-xl px-8 py-6 hover:bg-accent transition-colors cursor-pointer hover-scale"
            >
              <span className="text-white font-medium text-lg whitespace-nowrap">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
