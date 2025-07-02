
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const TechnicalWritingServices = () => {
  const content = generateServiceContent('Technical Writing Services', 'Content Writing');
  return (
    <ServicePageLayout
      pageTitle="Technical Writing Services - Clear Technical Documentation"
      pageDescription="Create clear, comprehensive technical documentation that helps users understand and utilize your products effectively."
      heroTitle="Professional Technical Writing Services"
      heroDescription="Simplify complex technical concepts with clear, user-friendly documentation that improves user experience and reduces support costs."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Technical Writing"
    />
  );
};

export default TechnicalWritingServices;
