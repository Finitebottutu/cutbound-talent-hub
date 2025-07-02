
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden hero-premium">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center fade-in">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              {category} Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 tracking-tight">
              <span className="gradient-text slide-up">
                {heroTitle}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light slide-up" style={{ animationDelay: '0.2s' }}>
              {heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 slide-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="premium-button text-lg px-10 py-7 rounded-full font-semibold">
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="premium-button-outline text-lg px-10 py-7 rounded-full font-semibold">
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
      <section className="py-20 px-6 lg:px-8 section-premium">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Why Choose Our {category} Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through our proven expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOverview.map((benefit, index) => (
              <Card key={index} className="premium-card card-hover slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                  <p className="text-gray-300 leading-relaxed text-lg">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your project's success from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="premium-card card-hover slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold gradient-text">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 px-6 lg:px-8 section-premium">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses achieve their goals with our expert {category.toLowerCase()} services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="premium-card card-hover slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold gradient-text mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-white/10 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.results && (
                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Results:</h4>
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
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to meet your specific needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`premium-card card-hover slide-up ${plan.popular ? 'ring-2 ring-white/30' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  {plan.popular && (
                    <Badge className="mb-4 bg-white text-black">Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold gradient-text mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'premium-button' : 'premium-button-outline'}`}
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
      <section className="py-20 px-6 lg:px-8 section-premium">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Expert Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              <Card key={index} className="premium-card card-hover slide-up text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <item.icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from satisfied clients who've experienced our exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="premium-card card-hover slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-600"} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-white/10 pt-6">
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
      <section className="py-20 px-6 lg:px-8 section-premium">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our {category.toLowerCase()} services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="premium-card card-hover slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold gradient-text mb-4">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-4xl mx-auto text-center slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life with our expert {category.toLowerCase()} services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="premium-button text-lg px-10 py-7 rounded-full font-semibold">
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="premium-button-outline text-lg px-10 py-7 rounded-full font-semibold">
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
