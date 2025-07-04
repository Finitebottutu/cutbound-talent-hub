
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, CheckCircle, ArrowRight, Users, Award, Clock, Shield } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface ServicePageLayoutProps {
  pageTitle: string;
  pageDescription: string;
  heroTitle: string;
  heroDescription: string;
  serviceOverview: string[];
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  portfolio: Array<{
    title: string;
    description: string;
    technologies: string[];
    results?: string;
  }>;
  pricing: Array<{
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    rating: number;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  category: string;
}

const ServicePageLayout = ({
  pageTitle,
  pageDescription,
  heroTitle,
  heroDescription,
  serviceOverview,
  process,
  portfolio,
  pricing,
  testimonials,
  faqs,
  category
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-32 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        {/* Subtle floating background elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/2 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/1 rounded-full blur-3xl floating-element" style={{ animationDelay: '3s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center fade-in">
            <Badge className="mb-12 bg-white/10 text-white border-white/20 px-6 py-3">
              {category} Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-12 tracking-tight">
              <span className="gradient-text slide-up">
                {heroTitle}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-20 max-w-4xl mx-auto leading-relaxed font-light slide-up" style={{ animationDelay: '0.2s' }}>
              {heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24 slide-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="premium-button text-lg px-10 py-7 rounded-full font-semibold">
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="premium-button-outline text-lg px-10 py-7 rounded-full font-semibold text-white border-white hover:bg-white hover:text-black">
                View Portfolio
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-gray-400 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">5 Years</div>
                <div className="text-gray-400 text-sm">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Why Choose Our {category} Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We deliver exceptional results through our proven expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOverview.map((benefit, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-all duration-300 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <CheckCircle className="w-12 h-12 text-green-400 mb-6" />
                  <p className="text-gray-300 leading-relaxed text-lg">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We follow a systematic approach to ensure your project's success from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-all duration-300 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold gradient-text">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              See how we've helped businesses achieve their goals with our expert {category.toLowerCase()} services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-all duration-300 slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold gradient-text mb-6">{project.title}</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.results && (
                    <div className="border-t border-gray-700 pt-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                      <p className="text-green-400 font-medium">{project.results}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24 px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Flexible pricing options designed to meet your specific needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-all duration-300 slide-up ${plan.popular ? 'ring-2 ring-blue-500/50' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  {plan.popular && (
                    <Badge className="mb-6 bg-blue-600 text-white">Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold gradient-text mb-6">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-8">{plan.price}</div>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'premium-button' : 'premium-button-outline text-white border-white hover:bg-white hover:text-black'}`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Expert Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our certified professionals bring years of experience and cutting-edge expertise to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Dedicated Team', description: 'Experienced professionals committed to your success' },
              { icon: Award, title: 'Certified Experts', description: 'Industry-recognized certifications and qualifications' },
              { icon: Clock, title: 'On-Time Delivery', description: 'Proven track record of meeting project deadlines' },
              { icon: Shield, title: 'Quality Assurance', description: 'Rigorous testing and quality control processes' },
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-all duration-300 slide-up text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <item.icon className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from satisfied clients who've experienced our exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-all duration-300 slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-600"} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="font-semibold gradient-text text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get answers to common questions about our {category.toLowerCase()} services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-all duration-300 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold gradient-text mb-6">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/1 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center slide-up relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and bring your vision to life with our expert {category.toLowerCase()} services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="premium-button text-lg px-10 py-7 rounded-full font-semibold">
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="premium-button-outline border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-10 py-7 rounded-full font-semibold">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
