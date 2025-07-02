
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const rolePages = [
    { title: 'Full-stack developers', path: '/hire/full-stack-developers' },
    { title: 'Front-end developers', path: '/hire/front-end-developers' },
    { title: 'Back-end developers', path: '/hire/back-end-developers' },
    { title: 'Mobile developers', path: '/hire/mobile-developers' },
    { title: 'Game developers', path: '/hire/game-developers' },
    { title: 'DevOps', path: '/hire/devops' },
    { title: 'Cloud engineers', path: '/hire/cloud-engineers' },
    { title: 'AI engineers', path: '/hire/ai-engineers' },
    { title: 'Machine Learning engineers', path: '/hire/machine-learning-engineers' },
    { title: 'Data analysts', path: '/hire/data-analysts' },
    { title: 'Data engineers', path: '/hire/data-engineers' },
    { title: 'Data scientists', path: '/hire/data-scientists' },
    { title: 'Blockchain developers', path: '/hire/blockchain-developers' },
    { title: 'Automation QA engineers', path: '/hire/automation-qa-engineers' },
  ];

  const skillPages = [
    { title: 'React developers', path: '/hire/react-developers' },
    { title: 'Angular developers', path: '/hire/angular-developers' },
    { title: 'Node.js developers', path: '/hire/nodejs-developers' },
    { title: 'JavaScript developers', path: '/hire/javascript-developers' },
    { title: 'Next.js developers', path: '/hire/nextjs-developers' },
    { title: 'Vue.js developers', path: '/hire/vuejs-developers' },
    { title: 'Three.js developers', path: '/hire/threejs-developers' },
    { title: 'Python developers', path: '/hire/python-developers' },
    { title: 'Unity developers', path: '/hire/unity-developers' },
    { title: 'Django developers', path: '/hire/django-developers' },
    { title: 'Java developers', path: '/hire/java-developers' },
    { title: 'Ruby on Rails developers', path: '/hire/ruby-on-rails-developers' },
    { title: 'PHP developers', path: '/hire/php-developers' },
    { title: 'Laravel developers', path: '/hire/laravel-developers' },
    { title: '.NET developers', path: '/hire/dotnet-developers' },
    { title: 'ASP.NET developers', path: '/hire/aspnet-developers' },
    { title: 'iOS developers', path: '/hire/ios-developers' },
    { title: 'Flutter developers', path: '/hire/flutter-developers' },
    { title: 'React Native developers', path: '/hire/react-native-developers' },
    { title: 'Android developers', path: '/hire/android-developers' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 premium-nav">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="group">
              <h1 className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                Cutbound
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-300 hover:text-white bg-transparent">
                      Hire
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[800px] gap-6 p-6">
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold text-white mb-4">Hire by Role</h3>
                            <div className="grid gap-2">
                              {rolePages.slice(0, 7).map((page) => (
                                <NavigationMenuLink key={page.path} asChild>
                                  <Link
                                    to={page.path}
                                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-300 hover:text-white text-sm"
                                  >
                                    Hire {page.title}
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-4">Hire by Skill</h3>
                            <div className="grid gap-2">
                              {skillPages.slice(0, 10).map((page) => (
                                <NavigationMenuLink key={page.path} asChild>
                                  <Link
                                    to={page.path}
                                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-300 hover:text-white text-sm"
                                  >
                                    Hire {page.title}
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                              <Link
                                to="/hire/all-skills"
                                className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-blue-400 hover:text-blue-300 text-sm font-medium"
                              >
                                View all skills →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                How it Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link to="/referral" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                Referral Program
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="premium-button-outline text-gray-300 hover:text-black">
              For Freelancers
            </Button>
            <Button className="premium-button">
              Hire Talent
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-white transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass-effect border-b border-white/10 fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="space-y-2">
              <p className="px-3 py-2 text-white font-semibold">Hire by Role</p>
              {rolePages.slice(0, 5).map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="block px-6 py-2 text-foreground hover:text-white transition-all duration-300 hover:bg-white/5 rounded text-sm"
                >
                  Hire {page.title}
                </Link>
              ))}
              <p className="px-3 py-2 text-white font-semibold mt-4">Hire by Skill</p>
              {skillPages.slice(0, 5).map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="block px-6 py-2 text-foreground hover:text-white transition-all duration-300 hover:bg-white/5 rounded text-sm"
                >
                  Hire {page.title}
                </Link>
              ))}
            </div>
            <a href="#services" className="block px-3 py-2 text-foreground hover:text-white transition-all duration-300 hover:bg-white/5 rounded">Services</a>
            <a href="#how-it-works" className="block px-3 py-2 text-foreground hover:text-white transition-all duration-300 hover:bg-white/5 rounded">How it Works</a>
            <a href="#testimonials" className="block px-3 py-2 text-foreground hover:text-white transition-all duration-300 hover:bg-white/5 rounded">Testimonials</a>
            <Link to="/referral" className="block px-3 py-2 text-foreground hover:text-white transition-all duration-300 hover:bg-white/5 rounded">Referral Program</Link>
            <div className="pt-4 pb-2 space-y-2">
              <Button variant="ghost" className="w-full premium-button-outline text-foreground hover:text-black">
                For Freelancers
              </Button>
              <Button className="w-full premium-button">
                Hire Talent
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
