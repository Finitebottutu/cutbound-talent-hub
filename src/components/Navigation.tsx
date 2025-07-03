import { useState } from 'react';
import { Menu, X, ChevronDown, Plus, Minus } from 'lucide-react';
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSections({});
  };

  // Prevent body scroll when menu is open
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

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

  const serviceCategories = {
    uiux: [
      { title: 'UI/UX for Web Application', path: '/services/ui-ux/web-application' },
      { title: 'UI/UX for Mobile Application', path: '/services/ui-ux/mobile-application' },
      { title: 'UI/UX for Custom Software', path: '/services/ui-ux/custom-software' },
    ],
    website: [
      { title: 'Ecommerce Store Development Company', path: '/services/website/ecommerce-store-development' },
      { title: 'Landing Page Development Company', path: '/services/website/landing-page-development' },
      { title: 'Blog Development', path: '/services/website/blog-development' },
      { title: 'CMS Development', path: '/services/website/cms-development' },
      { title: 'SaaS Application Development Company', path: '/services/website/saas-application-development' },
      { title: 'Marketplace Development Company', path: '/services/website/marketplace-development' },
      { title: 'Corporate Website Development Company', path: '/services/website/corporate-website-development' },
      { title: 'Custom Web Application Development Company', path: '/services/website/custom-web-application-development' },
    ],
    mobile: [
      { title: 'Android Application Development Company', path: '/services/mobile/android-application-development' },
      { title: 'iOS Application Development Company', path: '/services/mobile/ios-application-development' },
      { title: 'Cross-platform Mobile Application Development Company', path: '/services/mobile/cross-platform-mobile-development' },
    ],
    marketing: [
      { title: 'SEO Company', path: '/services/marketing/seo-company' },
      { title: 'SEM Company', path: '/services/marketing/sem-company' },
      { title: 'Social Media Marketing Company', path: '/services/marketing/social-media-marketing' },
      { title: 'Content Marketing Company', path: '/services/marketing/content-marketing' },
      { title: 'Email Marketing Company', path: '/services/marketing/email-marketing' },
      { title: 'Affiliate Marketing Company', path: '/services/marketing/affiliate-marketing' },
      { title: 'PPC Ads Company', path: '/services/marketing/ppc-ads' },
      { title: 'Influencer Marketing Company', path: '/services/marketing/influencer-marketing' },
    ],
    writing: [
      { title: 'Blog Writing Services', path: '/services/writing/blog-writing-services' },
      { title: 'Copywriting Services', path: '/services/writing/copywriting-services' },
      { title: 'Technical Writing Services', path: '/services/writing/technical-writing-services' },
      { title: 'Ghostwriting Services', path: '/services/writing/ghostwriting-services' },
      { title: 'Creative Writing Services', path: '/services/writing/creative-writing-services' },
      { title: 'SEO Writing Services', path: '/services/writing/seo-writing-services' },
      { title: 'Product Description Writing', path: '/services/writing/product-description-writing' },
      { title: 'Press Release Writing', path: '/services/writing/press-release-writing' },
      { title: 'Academic Writing Services', path: '/services/writing/academic-writing-services' },
    ],
    software: [
      { title: 'Enterprise Software Development', path: '/services/software/enterprise-software-development' },
      { title: 'SaaS Tool Development', path: '/services/software/saas-tool-development' },
      { title: 'CRM Development', path: '/services/software/crm-development' },
      { title: 'ERP Development', path: '/services/software/erp-development' },
      { title: 'Desktop Application Development', path: '/services/software/desktop-application-development' },
      { title: 'Cloud-based Software Development', path: '/services/software/cloud-based-software-development' },
    ],
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 premium-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="group">
                <h1 className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                  Cutbound
                </h1>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-300 hover:text-white bg-transparent">
                        Our Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[1200px] gap-8 p-8">
                          <div className="grid grid-cols-3 gap-8">
                            <div>
                              <h3 className="font-semibold text-white mb-4 text-lg">UI/UX Design</h3>
                              <div className="grid gap-2 mb-6">
                                {serviceCategories.uiux.map((service) => (
                                  <NavigationMenuLink key={service.path} asChild>
                                    <Link
                                      to={service.path}
                                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-300 hover:text-white text-sm"
                                    >
                                      {service.title}
                                    </Link>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                              
                              <h3 className="font-semibold text-white mb-4 text-lg">Mobile App</h3>
                              <div className="grid gap-2">
                                {serviceCategories.mobile.map((service) => (
                                  <NavigationMenuLink key={service.path} asChild>
                                    <Link
                                      to={service.path}
                                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-300 hover:text-white text-sm"
                                    >
                                      {service.title}
                                    </Link>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold text-white mb-4 text-lg">Website Development</h3>
                              <div className="grid gap-2 mb-6">
                                {serviceCategories.website.map((service) => (
                                  <NavigationMenuLink key={service.path} asChild>
                                    <Link
                                      to={service.path}
                                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-300 hover:text-white text-sm"
                                    >
                                      {service.title}
                                    </Link>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                              
                              <h3 className="font-semibold text-white mb-4 text-lg">Digital Marketing</h3>
                              <div className="grid gap-2">
                                {serviceCategories.marketing.map((service) => (
                                  <NavigationMenuLink key={service.path} asChild>
                                    <Link
                                      to={service.path}
                                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-300 hover:text-white text-sm"
                                    >
                                      {service.title}
                                    </Link>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold text-white mb-4 text-lg">Content Writing</h3>
                              <div className="grid gap-2 mb-6">
                                {serviceCategories.writing.map((service) => (
                                  <NavigationMenuLink key={service.path} asChild>
                                    <Link
                                      to={service.path}
                                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-300 hover:text-white text-sm"
                                    >
                                      {service.title}
                                    </Link>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                              
                              <h3 className="font-semibold text-white mb-4 text-lg">Custom Software</h3>
                              <div className="grid gap-2">
                                {serviceCategories.software.map((service) => (
                                  <NavigationMenuLink key={service.path} asChild>
                                    <Link
                                      to={service.path}
                                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-300 hover:text-white text-sm"
                                    >
                                      {service.title}
                                    </Link>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    
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
                
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                  Portfolio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <a href="#blogs" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                  Blogs
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="ghost" className="premium-button-outline text-gray-300 hover:text-black">
                For Freelancers
              </Button>
              <Button className="premium-button">
                Hire Talent
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-16 left-0 right-0 bottom-0 z-40 lg:hidden transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="bg-gradient-to-b from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl h-full overflow-y-auto">
          <div className="px-4 py-6">
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={closeMenu}
                className="text-gray-300 hover:text-white transition-all duration-300 p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                onClick={closeMenu}
              >
                Home
              </Link>

              {/* Our Services Section */}
              <Collapsible open={openSections.services} onOpenChange={() => toggleSection('services')}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                  Our Services
                  {openSections.services ? <Minus size={20} /> : <Plus size={20} />}
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-4 mt-2 space-y-2">
                  {/* UI/UX Design */}
                  <Collapsible open={openSections.uiux} onOpenChange={() => toggleSection('uiux')}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                      UI/UX Design
                      {openSections.uiux ? <Minus size={16} /> : <Plus size={16} />}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-4 mt-1 space-y-1">
                      {serviceCategories.uiux.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                          onClick={closeMenu}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Website Development */}
                  <Collapsible open={openSections.website} onOpenChange={() => toggleSection('website')}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                      Website Development
                      {openSections.website ? <Minus size={16} /> : <Plus size={16} />}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-4 mt-1 space-y-1">
                      {serviceCategories.website.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                          onClick={closeMenu}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Mobile App */}
                  <Collapsible open={openSections.mobile} onOpenChange={() => toggleSection('mobile')}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                      Mobile App
                      {openSections.mobile ? <Minus size={16} /> : <Plus size={16} />}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-4 mt-1 space-y-1">
                      {serviceCategories.mobile.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                          onClick={closeMenu}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Digital Marketing */}
                  <Collapsible open={openSections.marketing} onOpenChange={() => toggleSection('marketing')}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                      Digital Marketing
                      {openSections.marketing ? <Minus size={16} /> : <Plus size={16} />}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-4 mt-1 space-y-1">
                      {serviceCategories.marketing.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                          onClick={closeMenu}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Content Writing */}
                  <Collapsible open={openSections.writing} onOpenChange={() => toggleSection('writing')}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                      Content Writing
                      {openSections.writing ? <Minus size={16} /> : <Plus size={16} />}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-4 mt-1 space-y-1">
                      {serviceCategories.writing.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                          onClick={closeMenu}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Custom Software */}
                  <Collapsible open={openSections.software} onOpenChange={() => toggleSection('software')}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                      Custom Software
                      {openSections.software ? <Minus size={16} /> : <Plus size={16} />}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-4 mt-1 space-y-1">
                      {serviceCategories.software.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                          onClick={closeMenu}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </CollapsibleContent>
              </Collapsible>

              {/* Hire Section */}
              <Collapsible open={openSections.hire} onOpenChange={() => toggleSection('hire')}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                  Hire
                  {openSections.hire ? <Minus size={20} /> : <Plus size={20} />}
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-4 mt-2 space-y-2">
                  {/* Hire by Role */}
                  <Collapsible open={openSections.hireRole} onOpenChange={() => toggleSection('hireRole')}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                      Hire by Role
                      {openSections.hireRole ? <Minus size={16} /> : <Plus size={16} />}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-4 mt-1 space-y-1">
                      {rolePages.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                          onClick={closeMenu}
                        >
                          Hire {page.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Hire by Skill */}
                  <Collapsible open={openSections.hireSkill} onOpenChange={() => toggleSection('hireSkill')}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                      Hire by Skill
                      {openSections.hireSkill ? <Minus size={16} /> : <Plus size={16} />}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-4 mt-1 space-y-1">
                      {skillPages.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                          onClick={closeMenu}
                        >
                          Hire {page.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </CollapsibleContent>
              </Collapsible>

              {/* Simple Links */}
              <Link 
                to="/portfolio" 
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
              <a 
                href="#blogs" 
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                onClick={closeMenu}
              >
                Blogs
              </a>

              {/* Mobile Buttons */}
              <div className="pt-6 space-y-3 border-t border-white/10 mt-6">
                <Button variant="ghost" className="w-full premium-button-outline text-gray-300 hover:text-black text-base py-3">
                  For Freelancers
                </Button>
                <Button className="w-full premium-button text-base py-3">
                  Hire Talent
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
