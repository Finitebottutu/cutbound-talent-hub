
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Code, Palette, TrendingUp, Database, Shield } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

const categories = [
  {
    icon: Code,
    title: 'Developers',
    description: 'Full-stack, Frontend, Backend, Mobile',
    count: '500+ experts'
  },
  {
    icon: Palette,
    title: 'Designers',
    description: 'UI/UX, Graphics, Web Design',
    count: '200+ experts'
  },
  {
    icon: TrendingUp,
    title: 'Marketers',
    description: 'Digital Marketing, SEO, Content',
    count: '150+ experts'
  },
  {
    icon: Database,
    title: 'Data Specialists',
    description: 'Data Science, Analytics, ML',
    count: '100+ experts'
  },
  {
    icon: Shield,
    title: 'DevOps & Security',
    description: 'Cloud, Security, Infrastructure',
    count: '80+ experts'
  },
  {
    icon: Users,
    title: 'Project Managers',
    description: 'Agile, Scrum, Product Management',
    count: '50+ experts'
  }
];

const HirePage = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Hire Top Talent</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Access India's top 1% freelancers across all tech domains. Pre-vetted, skilled, and ready to accelerate your projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button 
              size="lg" 
              className="premium-button text-lg px-10 py-7 rounded-full font-semibold"
              onClick={openForm}
            >
              Start Hiring Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="premium-button-outline text-lg px-10 py-7 rounded-full font-semibold text-white border-white hover:bg-white hover:text-black"
              onClick={openForm}
            >
              Browse Talent
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Talent Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find the perfect match for your project needs across diverse skill sets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="bg-white/10 p-4 rounded-lg w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold gradient-text mb-4">{category.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{category.description}</p>
                    <p className="text-sm text-gray-400 font-medium">{category.count}</p>
                    <Button 
                      className="w-full mt-6 premium-button-outline text-white border-white hover:bg-white hover:text-black"
                      onClick={openForm}
                    >
                      Browse {category.title}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get matched with pre-vetted talent in 24 hours or less. Start your project today.
          </p>
          <Button 
            size="lg" 
            className="premium-button text-lg px-10 py-7 rounded-full font-semibold"
            onClick={openForm}
          >
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HirePage;
