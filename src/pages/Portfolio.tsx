
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Eye, ExternalLink, Star, TrendingUp, Users, Zap } from 'lucide-react';

const Portfolio = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'TechFlow SaaS Platform',
      description: 'Complete SaaS solution with user management, analytics dashboard, and payment integration.',
      services: ['UI/UX', 'Full-Stack Dev', 'DevOps'],
      image: '/placeholder.svg',
      client: 'TechFlow Inc',
      results: '300% user growth',
      category: 'website'
    },
    {
      id: 2,
      title: 'FitTrack Mobile App',
      description: 'Cross-platform fitness tracking app with social features and AI-powered recommendations.',
      services: ['Mobile Dev', 'UI/UX', 'AI Integration'],
      image: '/placeholder.svg',
      client: 'FitTrack Startup',
      results: '50K+ downloads',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'EcoCommerce Marketplace',
      description: 'Sustainable marketplace connecting eco-friendly brands with conscious consumers.',
      services: ['E-commerce', 'UI/UX', 'SEO'],
      image: '/placeholder.svg',
      client: 'EcoCommerce Ltd',
      results: '$2M+ GMV',
      category: 'website'
    },
    {
      id: 4,
      title: 'DataViz Analytics Tool',
      description: 'Advanced data visualization platform for enterprise clients with real-time insights.',
      services: ['Custom Software', 'Data Engineering', 'UI/UX'],
      image: '/placeholder.svg',
      client: 'DataViz Corp',
      results: '40% faster insights',
      category: 'software'
    },
    {
      id: 5,
      title: 'BrandBoost Marketing Campaign',
      description: 'Complete digital marketing overhaul resulting in unprecedented brand growth.',
      services: ['SEO', 'Social Media', 'Content'],
      image: '/placeholder.svg',
      client: 'BrandBoost Agency',
      results: '400% organic traffic',
      category: 'marketing'
    },
    {
      id: 6,
      title: 'FinanceFlow Mobile Banking',
      description: 'Secure mobile banking app with biometric authentication and instant transfers.',
      services: ['Mobile Dev', 'Security', 'UI/UX'],
      image: '/placeholder.svg',
      client: 'FinanceFlow Bank',
      results: '99.9% uptime',
      category: 'mobile'
    }
  ];

  const caseStudies = [
    {
      title: 'TechFlow SaaS Platform',
      client: 'TechFlow Inc',
      challenge: 'Needed a scalable SaaS platform to manage 10,000+ users with complex role-based permissions.',
      solution: 'Built a modern React/Node.js platform with microservices architecture and real-time analytics.',
      results: {
        userGrowth: '300%',
        performance: '50% faster load times',
        satisfaction: '4.9/5 user rating'
      },
      image: '/placeholder.svg'
    },
    {
      title: 'EcoCommerce Marketplace',
      client: 'EcoCommerce Ltd',
      challenge: 'Create a marketplace that connects sustainable brands with eco-conscious consumers globally.',
      solution: 'Developed a multi-vendor platform with AI-powered product recommendations and sustainability scoring.',
      results: {
        gmv: '$2M+ in first year',
        vendors: '500+ active sellers',
        retention: '85% customer retention'
      },
      image: '/placeholder.svg'
    }
  ];

  const clientLogos = [
    'TechFlow Inc', 'FitTrack Startup', 'EcoCommerce Ltd', 'DataViz Corp', 
    'BrandBoost Agency', 'FinanceFlow Bank', 'GrowthHack Co', 'InnovateLab'
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      position: 'CEO, TechFlow Inc',
      content: 'Cutbound delivered beyond our expectations. The quality of work and attention to detail was exceptional.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      position: 'CTO, FitTrack',
      content: 'Working with Cutbound felt like having an extension of our team. They understood our vision perfectly.',
      rating: 5
    },
    {
      name: 'Lisa Park',
      position: 'Founder, EcoCommerce',
      content: 'The marketplace they built helped us achieve $2M+ GMV in our first year. Incredible results.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Work That <span className="gradient-text">Delivers.</span>
              <br />Not Just Impresses.
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore how Cutbound helps startups scale through design, tech, and marketing — 
              all built by India's top 1% freelance talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="premium-button px-8 py-4">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="premium-button-outline text-white border-white hover:bg-white hover:text-black px-8 py-4">
                Let's Build Together
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Real solutions for real businesses. See how we've helped startups and enterprises achieve their goals.
            </p>
          </div>

          {/* Filter Tabs */}
          <Tabs defaultValue="all" className="mb-16">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 mb-12 bg-gray-800 border-gray-700">
              <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300">All</TabsTrigger>
              <TabsTrigger value="website" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300">Website</TabsTrigger>
              <TabsTrigger value="mobile" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300">Mobile</TabsTrigger>
              <TabsTrigger value="software" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300">Software</TabsTrigger>
              <TabsTrigger value="marketing" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300">Marketing</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                  <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 bg-gray-800 border-gray-700 hover:border-blue-500/50">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" size="sm" className="bg-white text-black hover:bg-gray-200">
                          <Eye className="mr-2 h-4 w-4" />
                          View Case Study
                        </Button>
                      </div>
                    </div>
                    <CardHeader className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.services.map((service) => (
                          <Badge key={service} variant="secondary" className="text-xs bg-blue-600/20 text-blue-300 border-blue-500/30">
                            {service}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">{project.client}</span>
                        <span className="text-green-400 font-semibold">{project.results}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Individual category content would filter the projects */}
            <TabsContent value="website">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.filter(p => p.category === 'website').map((project) => (
                  <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 bg-gray-800 border-gray-700 hover:border-blue-500/50">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" size="sm" className="bg-white text-black hover:bg-gray-200">
                          <Eye className="mr-2 h-4 w-4" />
                          View Case Study
                        </Button>
                      </div>
                    </div>
                    <CardHeader className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.services.map((service) => (
                          <Badge key={service} variant="secondary" className="text-xs bg-blue-600/20 text-blue-300 border-blue-500/30">
                            {service}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">{project.client}</span>
                        <span className="text-green-400 font-semibold">{project.results}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Study Preview Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-lg text-gray-300">Deep dives into how we solve complex challenges</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden bg-gray-800 border-gray-700">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-blue-400 font-semibold mb-6">{study.client}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-3">Results</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {Object.entries(study.results).map(([key, value]) => (
                            <div key={key} className="flex items-center">
                              <TrendingUp className="h-4 w-4 text-green-400 mr-3" />
                              <span className="text-sm font-semibold text-green-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Button className="mt-8 w-full premium-button">
                      Read Full Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos & Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Trusted by Startups Across the Globe</h2>
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-20">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                <span className="text-gray-300 font-semibold text-sm text-center">{logo}</span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need a partner who delivers on time and on target?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful startups who trust Cutbound with their most important projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
              <Zap className="mr-2 h-5 w-5" />
              Let's Talk
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              View Our Process
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
