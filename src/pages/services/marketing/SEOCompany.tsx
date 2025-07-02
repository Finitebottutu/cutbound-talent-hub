
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const SEOCompany = () => {
  const content = generateServiceContent('SEO Services', 'Digital Marketing');

  return (
    <ServicePageLayout
      pageTitle="SEO Company - Professional Search Engine Optimization Services"
      pageDescription="Boost your search engine rankings and drive organic traffic with our comprehensive SEO strategies."
      heroTitle={content.heroTitle}
      heroDescription={content.heroDescription}
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="SEO"
    />
  );
};

export default SEOCompany;
