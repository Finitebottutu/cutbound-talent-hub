
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const CrossPlatformMobileDevelopment = () => {
  const content = generateServiceContent('Cross-platform Mobile Development', 'Mobile Development');

  return (
    <ServicePageLayout
      pageTitle="Cross-platform Mobile Application Development Company"
      pageDescription="Build mobile apps that work seamlessly across iOS and Android platforms with our cross-platform development expertise."
      heroTitle="Cross-Platform Mobile App Development"
      heroDescription="Reach both iOS and Android users with a single codebase using our cross-platform mobile development services that reduce costs while maintaining quality."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Cross-Platform Development"
    />
  );
};

export default CrossPlatformMobileDevelopment;
