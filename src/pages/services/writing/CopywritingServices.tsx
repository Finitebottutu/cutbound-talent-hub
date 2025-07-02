
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const CopywritingServices = () => {
  const content = generateServiceContent('Copywriting Services', 'Content Writing');
  return (
    <ServicePageLayout
      pageTitle="Copywriting Services - Persuasive Copy That Converts"
      pageDescription="Drive conversions and sales with compelling copywriting that persuades your audience to take action."
      heroTitle="Professional Copywriting Services"
      heroDescription="Convert more prospects into customers with persuasive copy that communicates your value proposition and drives action."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Copywriting"
    />
  );
};

export default CopywritingServices;
