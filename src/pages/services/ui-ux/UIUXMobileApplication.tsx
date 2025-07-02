
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const UIUXMobileApplication = () => {
  const content = generateServiceContent('UI/UX for Mobile Application', 'UI/UX Design');

  return (
    <ServicePageLayout
      pageTitle="UI/UX for Mobile Application - Professional Design Services"
      pageDescription="Design beautiful and intuitive mobile app experiences that engage users and drive downloads."
      heroTitle="Expert Mobile App UI/UX Design Services"
      heroDescription="Create stunning mobile experiences that users love with our specialized mobile UI/UX design expertise."
      serviceOverview={[
        'Mobile-first design approach optimized for touch interactions',
        'iOS and Android platform-specific design guidelines',
        'User journey mapping and app flow optimization',
        'Interactive prototyping for better user testing',
        'Accessibility compliance for inclusive design',
        'App store optimization through visual appeal'
      ]}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Mobile UI/UX"
    />
  );
};

export default UIUXMobileApplication;
