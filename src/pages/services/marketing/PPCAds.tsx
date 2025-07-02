
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const PPCAds = () => {
  const content = generateServiceContent('PPC Advertising', 'Digital Marketing');
  return (
    <ServicePageLayout
      pageTitle="PPC Ads Company - Pay-Per-Click Advertising Services"
      pageDescription="Drive immediate results and qualified traffic with our expertly managed PPC advertising campaigns."
      heroTitle="Professional PPC Advertising Services"
      heroDescription="Generate qualified leads and drive immediate results with our data-driven PPC advertising campaigns across Google, Facebook, and other platforms."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="PPC Advertising"
    />
  );
};

export default PPCAds;
