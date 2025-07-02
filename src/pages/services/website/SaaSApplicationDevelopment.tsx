
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const SaaSApplicationDevelopment = () => {
  const content = generateServiceContent('SaaS Application Development', 'Website Development');

  return (
    <ServicePageLayout
      pageTitle="SaaS Application Development Company - Custom Software Solutions"
      pageDescription="Build scalable SaaS applications that grow with your business using our expert development services."
      heroTitle="Professional SaaS Application Development"
      heroDescription="Transform your business idea into a successful SaaS product with our comprehensive development expertise and proven methodologies."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="SaaS Development"
    />
  );
};

export default SaaSApplicationDevelopment;
