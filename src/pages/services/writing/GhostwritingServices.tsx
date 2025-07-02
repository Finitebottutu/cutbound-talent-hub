
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const GhostwritingServices = () => {
  const content = generateServiceContent('Ghostwriting Services', 'Content Writing');
  return (<ServicePageLayout pageTitle="Ghostwriting Services - Professional Ghost Writers" pageDescription="Professional ghostwriting services for books, articles, and content that establishes your thought leadership." heroTitle="Professional Ghostwriting Services" heroDescription="Bring your ideas to life with professional ghostwriting that captures your voice and establishes your expertise in your field." serviceOverview={content.serviceOverview} process={content.process} portfolio={content.portfolio} pricing={content.pricing} testimonials={content.testimonials} faqs={content.faqs} category="Ghostwriting" />);
};

export default GhostwritingServices;
