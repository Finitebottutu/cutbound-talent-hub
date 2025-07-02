
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const SaaSToolDevelopment = () => {
  const content = generateServiceContent('SaaS Tool Development', 'Custom Software');
  return (<ServicePageLayout pageTitle="SaaS Tool Development - Custom SaaS Solutions" pageDescription="Build scalable SaaS tools that solve real problems and generate recurring revenue for your business." heroTitle="Professional SaaS Tool Development" heroDescription="Create successful SaaS products that solve real market problems and generate sustainable recurring revenue with our expert development services." serviceOverview={content.serviceOverview} process={content.process} portfolio={content.portfolio} pricing={content.pricing} testimonials={content.testimonials} faqs={content.faqs} category="SaaS Tools" />);
};

export default SaaSToolDevelopment;
