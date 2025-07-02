
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const ERPDevelopment = () => {
  const content = generateServiceContent('ERP Development', 'Custom Software');
  return (<ServicePageLayout pageTitle="ERP Development - Enterprise Resource Planning Systems" pageDescription="Streamline your business operations with custom ERP solutions that integrate all your business processes." heroTitle="Custom ERP Development Services" heroDescription="Integrate and optimize all your business processes with custom ERP solutions that provide real-time visibility and operational efficiency." serviceOverview={content.serviceOverview} process={content.process} portfolio={content.portfolio} pricing={content.pricing} testimonials={content.testimonials} faqs={content.faqs} category="ERP Development" />);
};

export default ERPDevelopment;
