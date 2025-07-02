
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const EcommerceStoreDevelopment = () => {
  const content = generateServiceContent('Ecommerce Store Development', 'Website Development');

  return (
    <ServicePageLayout
      pageTitle="Ecommerce Store Development Company - Professional Online Stores"
      pageDescription="Build powerful, scalable ecommerce stores that drive sales and provide exceptional shopping experiences."
      heroTitle={content.heroTitle}
      heroDescription={content.heroDescription}
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Ecommerce Development"
    />
  );
};

export default EcommerceStoreDevelopment;
