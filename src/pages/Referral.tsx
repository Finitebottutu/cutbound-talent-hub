
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, TrendingUp, Gift, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Referral = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Gift className="w-4 h-4 text-white" />
            <span className="text-white font-medium">Exclusive Referral Program</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
            <span className="gradient-text">Cutbound</span>
            <br />
            <span className="text-white">Referral Program</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            For every successful client referral you make, we will reward you with premium kick-backs
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="glass-effect rounded-2xl p-8 premium-shadow hover-scale">
              <div className="text-4xl font-bold gradient-text mb-2">20%</div>
              <div className="text-white font-semibold mb-2">One-off Project</div>
              <div className="text-gray-300">kick-back for project-based work</div>
            </div>
            <div className="glass-effect rounded-2xl p-8 premium-shadow hover-scale">
              <div className="text-4xl font-bold gradient-text mb-2">10%</div>
              <div className="text-white font-semibold mb-2">Recurring Engagement</div>
              <div className="text-gray-300">kick-back for 12 months</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">How It Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Simple process to start earning from your referrals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center slide-up">
              <div className="w-20 h-20 mx-auto mb-6 glass-effect rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">1. Refer Businesses</h3>
              <p className="text-gray-400">
                Introduce businesses to your Cutbound Account Manager or contact@cutbound.com
              </p>
            </div>
            <div className="text-center slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 mx-auto mb-6 glass-effect rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">2. Client Onboarding</h3>
              <p className="text-gray-400">
                As soon as they become a paying client, your reward is activated
              </p>
            </div>
            <div className="text-center slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 mx-auto mb-6 glass-effect rounded-full flex items-center justify-center">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">3. Get Rewarded</h3>
              <p className="text-gray-400">
                Receive your kick-back based on the engagement type
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-20 px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Offerings</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="glass-effect border-white/10 hover-scale">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Project Based</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  One-off projects like web development, paid campaigns, UI/UX design & more.
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-3xl font-bold gradient-text mb-2">20%</div>
                  <p className="text-sm text-gray-400">
                    You get 20% of the referred client's invoice amount for their first project with us.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover-scale">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Retainer Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Long-run engagement for SEO, paid media, email campaigns & more.
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-3xl font-bold gradient-text mb-2">10%</div>
                  <p className="text-sm text-gray-400">
                    You get 10% monthly for the first 12 months. If client pays $1000/month, you get $100!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover-scale">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Dedicated Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Hire managed full-time resources or build robust teams 10X faster.
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-3xl font-bold gradient-text mb-2">10%</div>
                  <p className="text-sm text-gray-400">
                    You get 10% of monthly invoice when they hire dedicated resources for 12 months.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Refer Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Who Should Refer?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-2xl p-8 text-center hover-scale">
              <Star className="w-12 h-12 text-white mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Cutbound Clients</h3>
              <p className="text-gray-400">
                If you use our services, you know firsthand how it can benefit other businesses
              </p>
            </div>
            <div className="glass-effect rounded-2xl p-8 text-center hover-scale">
              <Users className="w-12 h-12 text-white mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Client Employees</h3>
              <p className="text-gray-400">
                Referrals from your personal network are treated as individual consultant contributions
              </p>
            </div>
            <div className="glass-effect rounded-2xl p-8 text-center hover-scale">
              <TrendingUp className="w-12 h-12 text-white mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Industry Consultants</h3>
              <p className="text-gray-400">
                Help your clients hire 10X faster and more efficiently
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Some Facts Section */}
      <section className="py-20 px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-16">Some Facts</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect rounded-2xl p-8">
              <div className="text-4xl font-bold gradient-text mb-2">7000+</div>
              <div className="text-white font-semibold mb-2">Happy Clients</div>
              <div className="text-gray-400">who frequently recommend us</div>
            </div>
            <div className="glass-effect rounded-2xl p-8">
              <div className="text-4xl font-bold gradient-text mb-2">10 Years</div>
              <div className="text-white font-semibold mb-2">Experience</div>
              <div className="text-gray-400">800+ team strength, 100% remote</div>
            </div>
            <div className="glass-effect rounded-2xl p-8">
              <div className="text-4xl font-bold gradient-text mb-2">600+</div>
              <div className="text-white font-semibold mb-2">Dedicated Resources</div>
              <div className="text-gray-400">deployed across the globe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Get In Touch</h2>
            <p className="text-gray-400 text-lg">
              We'll get back to you within a few hours!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 premium-shadow">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name" className="text-white mb-2 block">Name*</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white mb-2 block">Email*</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="phone" className="text-white mb-2 block">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            
            <div className="mb-8">
              <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full bg-white text-black hover:bg-gray-200 text-lg py-6">
              Start Referring
              <ArrowRight className="ml-2" />
            </Button>
          </form>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Terms & Conditions</h3>
          <div className="glass-effect rounded-2xl p-8">
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>• The kick-back bonus is shared when the referral becomes a paying client.</li>
              <li>• The 20% kick-back for the project would be one-off for the first project only.</li>
              <li>• The 10% kick-back for recurring campaign services will be shared for the first 12 months. If the client's invoice amount changes, the referral amount will change accordingly.</li>
              <li>• For the dedicated model, you get 10% of the referred client's monthly invoice amount for the first 12 months of the engagement.</li>
              <li>• The referral bonus is paid after the first invoice is paid by the client.</li>
              <li>• The referral program is applicable on every new client onboarded and is not applicable on multiple projects, services or talents hired by the same client.</li>
              <li>• Cutbound reserves the right to change the referral program at any given time without prior notice.</li>
              <li>• For any questions or concerns you can reach out to your Account Manager or email contact@cutbound.com.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Referral;
