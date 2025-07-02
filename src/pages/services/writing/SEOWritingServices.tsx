
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const SEOWritingServices = () => {
  const content = generateServiceContent('SEO Writing Services', 'Content Writing');
  return (<ServicePageLayout pageTitle="SEO Writing Services - Search-Optimized Content" pageDescription="Boost your search rankings with SEO-optimized content that drives organic traffic and engages readers." heroTitle="Professional SEO Writing Services" heroDescription="Improve your search rankings and drive organic traffic with SEO-optimized content that balances search visibility with reader engagement." serviceOverview={content.serviceOverview} process={content.process} portfolio={content.portfolio} pricing={content.pricing} testimonials={content.testimonials} faqs={content.faqs} category="SEO Writing" />);
};

export default SEOWritingServices;
