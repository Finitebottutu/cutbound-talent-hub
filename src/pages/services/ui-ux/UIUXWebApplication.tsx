
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const UIUXWebApplication = () => {
  const content = generateServiceContent('UI/UX for Web Application', 'UI/UX Design');

  return (
    <ServicePageLayout
      pageTitle="UI/UX for Web Application - Professional Design Services"
      pageDescription="Create engaging and intuitive web experiences with our expert UI/UX design services. Boost conversions and user satisfaction."
      heroTitle={content.heroTitle}
      heroDescription={content.heroDescription}
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="UI/UX Design"
    />
  );
};

export default UIUXWebApplication;
