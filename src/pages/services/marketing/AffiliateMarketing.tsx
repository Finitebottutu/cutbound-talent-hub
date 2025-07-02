
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const AffiliateMarketing = () => {
  const content = generateServiceContent('Affiliate Marketing', 'Digital Marketing');
  return (
    <ServicePageLayout
      pageTitle="Affiliate Marketing Company - Performance-Based Marketing"
      pageDescription="Expand your reach and drive sales through strategic affiliate marketing partnerships and programs."
      heroTitle="Professional Affiliate Marketing Services"
      heroDescription="Scale your business growth through strategic affiliate partnerships that drive qualified traffic and increase sales with performance-based marketing."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Affiliate Marketing"
    />
  );
};

export default AffiliateMarketing;
