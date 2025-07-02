import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Riddhi Shah',
    role: 'Co-founder - Avaasa',
    category: 'UI/UX • Real Estate • Landing Page',
    content: 'Cutbound\' web-design team completely revamped the user experience, and we\'ve seen a significant increase in both time spent on site and conversion rates. Their ability to understand our target audience and translate that into a user-friendly design was invaluable.'
  },
  {
    name: 'Alex Burton',
    role: 'Founder - Urban Crest',
    category: 'Real Estate • No-code',
    content: 'Building our new web app from scratch felt overwhelming. Cutbound took the reins, assembling a team of developers who worked seamlessly together using both code and no-code tools. They delivered the app on time and within budget, saving us a lot of headaches.'
  },
  {
    name: 'Bryce Harper',
    role: 'Founder - FormulasHQ',
    category: 'SaaS • AI',
    content: 'Partnering with Cutbound for our MVP development was one of the best decisions we\'ve made. The app they developed is sleek, user-friendly, and performs flawlessly across all devices. Our users have given us fantastic feedback, and we\'ve seen a significant increase in engagement and retention rates since the launch.'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 lg:px-8 relative section-premium">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Loved by Startups & Enterprises
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses across industries achieve their goals with top-tier talent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="premium-card card-hover slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-lg hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-white/10 pt-6">
                  <div className="font-semibold gradient-text text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 mb-2 hover:text-gray-300 transition-colors duration-300">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-400 bg-white/5 rounded-full px-3 py-1 inline-block border border-white/10">
                    {testimonial.category}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
