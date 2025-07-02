
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const DesktopApplicationDevelopment = () => {
  const content = generateServiceContent('Desktop Application Development', 'Custom Software');
  return (<ServicePageLayout pageTitle="Desktop Application Development - Custom Desktop Software" pageDescription="Build powerful desktop applications that provide rich user experiences and offline functionality." heroTitle="Desktop Application Development Services" heroDescription="Create powerful desktop applications that leverage the full capabilities of desktop environments and provide rich user experiences." serviceOverview={content.serviceOverview} process={content.process} portfolio={content.portfolio} pricing={content.pricing} testimonials={content.testimonials} faqs={content.faqs} category="Desktop Apps" />);
};

export default DesktopApplicationDevelopment;
