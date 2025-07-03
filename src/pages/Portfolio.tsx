
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white via-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Work That <span className="text-blue-600">Delivers.</span>
              <br />Not Just Impresses.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore how Cutbound helps startups scale through design, tech, and marketing — 
              all built by India's top 1% freelance talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                Let's Build Together
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real solutions for real businesses. See how we've helped startups and enterprises achieve their goals.
            </p>
          </div>

          {/* Filter Tabs */}
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="website">Website</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="software">Software</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                  <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          View Case Study
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.services.map((service) => (
                          <Badge key={service} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{project.client}</span>
                        <span className="text-green-600 font-semibold">{project.results}</span>
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
                  <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    {/* Same card structure as above */}
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Study Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Deep dives into how we solve complex challenges</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-xl">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{study.client}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Challenge</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Solution</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {Object.entries(study.results).map(([key, value]) => (
                            <div key={key} className="flex items-center">
                              <TrendingUp className="h-4 w-4 text-green-600 mr-2" />
                              <span className="text-sm font-semibold text-green-600">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Startups Across the Globe</h2>
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-16">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600 font-semibold text-sm">{logo}</span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need a partner who delivers on time and on target?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful startups who trust Cutbound with their most important projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Zap className="mr-2 h-5 w-5" />
              Let's Talk
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
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
