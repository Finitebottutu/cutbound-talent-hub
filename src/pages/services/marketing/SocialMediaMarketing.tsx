
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const SocialMediaMarketing = () => {
  const content = generateServiceContent('Social Media Marketing', 'Digital Marketing');

  return (
    <ServicePageLayout
      pageTitle="Social Media Marketing Company - Professional SMM Services"
      pageDescription="Build your brand and engage your audience with our comprehensive social media marketing strategies."
      heroTitle="Professional Social Media Marketing Services"
      heroDescription="Build meaningful connections with your audience and drive business growth through strategic social media marketing campaigns across all major platforms."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Social Media Marketing"
    />
  );
};

export default SocialMediaMarketing;
