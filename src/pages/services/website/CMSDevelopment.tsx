
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const CMSDevelopment = () => {
  const content = generateServiceContent('CMS Development', 'Website Development');

  return (
    <ServicePageLayout
      pageTitle="CMS Development - Custom Content Management Systems"
      pageDescription="Build powerful, user-friendly content management systems tailored to your specific business needs."
      heroTitle="Custom CMS Development Services"
      heroDescription="Empower your team with custom content management systems that make updating and managing your website content effortless."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="CMS Development"
    />
  );
};

export default CMSDevelopment;
