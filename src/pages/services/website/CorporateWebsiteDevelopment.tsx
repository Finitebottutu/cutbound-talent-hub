
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const CorporateWebsiteDevelopment = () => {
  const content = generateServiceContent('Corporate Website Development', 'Website Development');

  return (
    <ServicePageLayout
      pageTitle="Corporate Website Development Company - Professional Business Sites"
      pageDescription="Build professional corporate websites that establish credibility and drive business growth."
      heroTitle="Professional Corporate Website Development"
      heroDescription="Establish your corporate presence online with professionally designed and developed websites that reflect your brand values and drive business results."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Corporate Website"
    />
  );
};

export default CorporateWebsiteDevelopment;
