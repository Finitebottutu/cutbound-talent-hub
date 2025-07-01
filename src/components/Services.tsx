
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, UserCheck, Building } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Hire Freelancers',
    description: 'Hire remote and flexible talent on-demand',
    features: [
      'Curated talent pool: Thoroughly vetted professionals from 200+ specialized fields',
      'Tailored matching: Skip endless profile browsing - we connect you with 3 ideal candidates',
      'Rapid onboarding: Start collaborating within 24 hours, 5x faster than industry standard',
      'Flexible management: Integrate freelancers seamlessly into your preferred communication channels',
      'Quality assured: Consistently deliver exceptional results across diverse project needs'
    ],
    cta: 'Hire Freelancers'
  },
  {
    icon: UserCheck,
    title: 'Hire Full-time',
    description: 'Build your dedicated remote team with top-tier professionals',
    features: [
      'Pre-screened candidates: Access India\'s top 1% talent pool',
      'Cultural fit assessment: Ensure seamless integration with your team',
      'Flexible contracts: From 6-month projects to permanent positions',
      'Onboarding support: Complete HR and administrative assistance',
      'Performance tracking: Regular check-ins and milestone reviews'
    ],
    cta: 'Hire Full-time'
  },
  {
    icon: Building,
    title: 'Hire Cutbound',
    description: 'Get projects executed by us from start to finish',
    features: [
      'End-to-end execution: From concept to deployment, we handle everything',
      'Dedicated project manager: Single point of contact for your project',
      'Multi-disciplinary teams: Designers, developers, and marketers working together',
      'Scalable solutions: From MVP to enterprise-grade applications',
      'Quality guarantee: 100% satisfaction or money-back promise'
    ],
    cta: 'Start Project'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 lg:px-8 section-gradient relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Your Team, Your Way
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you need individual specialists, dedicated teams, or complete project execution, 
            we have the perfect solution for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="card-premium slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-white/20 to-white/10 p-3 rounded-lg mr-4 glow">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                        <span className="text-white font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {feature.split(':')[0]}:
                        </span>
                        {feature.split(':')[1]}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full premium-button font-medium">
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
