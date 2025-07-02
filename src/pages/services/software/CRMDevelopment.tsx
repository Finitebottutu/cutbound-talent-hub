
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const CRMDevelopment = () => {
  const content = generateServiceContent('CRM Development', 'Custom Software');
  return (<ServicePageLayout pageTitle="CRM Development - Custom Customer Relationship Management" pageDescription="Build custom CRM solutions that help you manage customer relationships and drive sales growth." heroTitle="Custom CRM Development Services" heroDescription="Optimize your customer relationships and sales processes with custom CRM solutions tailored to your unique business requirements." serviceOverview={content.serviceOverview} process={content.process} portfolio={content.portfolio} pricing={content.pricing} testimonials={content.testimonials} faqs={content.faqs} category="CRM Development" />);
};

export default CRMDevelopment;
