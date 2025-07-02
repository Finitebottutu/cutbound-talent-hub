
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const CustomWebApplicationDevelopment = () => {
  const content = generateServiceContent('Custom Web Application Development', 'Website Development');

  return (
    <ServicePageLayout
      pageTitle="Custom Web Application Development Company - Tailored Solutions"
      pageDescription="Build custom web applications tailored to your specific business requirements and processes."
      heroTitle="Custom Web Application Development Services"
      heroDescription="Transform your unique business requirements into powerful web applications with our custom development expertise and cutting-edge technologies."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Custom Web Apps"
    />
  );
};

export default CustomWebApplicationDevelopment;
