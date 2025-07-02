
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const AndroidApplicationDevelopment = () => {
  const content = generateServiceContent('Android Application Development', 'Mobile Development');

  return (
    <ServicePageLayout
      pageTitle="Android Application Development Company - Professional Android Apps"
      pageDescription="Build powerful Android applications that engage users and drive downloads with our expert development services."
      heroTitle="Professional Android App Development Services"
      heroDescription="Create feature-rich Android applications that provide exceptional user experiences and help your business reach millions of Android users worldwide."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Android Development"
    />
  );
};

export default AndroidApplicationDevelopment;
