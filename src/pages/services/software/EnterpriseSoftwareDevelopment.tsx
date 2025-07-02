
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const EnterpriseSoftwareDevelopment = () => {
  const content = generateServiceContent('Enterprise Software Development', 'Custom Software');
  return (<ServicePageLayout pageTitle="Enterprise Software Development - Custom Business Solutions" pageDescription="Build scalable enterprise software solutions that streamline operations and drive business efficiency." heroTitle="Enterprise Software Development Services" heroDescription="Transform your business operations with custom enterprise software solutions designed to scale with your organization and optimize efficiency." serviceOverview={content.serviceOverview} process={content.process} portfolio={content.portfolio} pricing={content.pricing} testimonials={content.testimonials} faqs={content.faqs} category="Enterprise Software" />);
};

export default EnterpriseSoftwareDevelopment;
