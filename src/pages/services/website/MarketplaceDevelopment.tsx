
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const MarketplaceDevelopment = () => {
  const content = generateServiceContent('Marketplace Development', 'Website Development');

  return (
    <ServicePageLayout
      pageTitle="Marketplace Development Company - Multi-Vendor Platforms"
      pageDescription="Build powerful multi-vendor marketplace platforms that connect buyers and sellers with seamless user experiences."
      heroTitle="Professional Marketplace Development Services"
      heroDescription="Create successful multi-vendor marketplaces that facilitate seamless transactions between buyers and sellers while generating revenue through commissions."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Marketplace Development"
    />
  );
};

export default MarketplaceDevelopment;
