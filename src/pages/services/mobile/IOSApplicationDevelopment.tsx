
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const IOSApplicationDevelopment = () => {
  const content = generateServiceContent('iOS Application Development', 'Mobile Development');

  return (
    <ServicePageLayout
      pageTitle="iOS Application Development Company - Professional iPhone Apps"
      pageDescription="Build stunning iOS applications that delight users and drive success on the App Store."
      heroTitle="Professional iOS App Development Services"
      heroDescription="Create premium iOS applications that leverage the full potential of Apple's ecosystem and provide seamless experiences across iPhone and iPad devices."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="iOS Development"
    />
  );
};

export default IOSApplicationDevelopment;
