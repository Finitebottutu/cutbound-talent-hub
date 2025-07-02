
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const SEMCompany = () => {
  const content = generateServiceContent('SEM Services', 'Digital Marketing');

  return (
    <ServicePageLayout
      pageTitle="SEM Company - Search Engine Marketing Services"
      pageDescription="Drive qualified traffic and increase conversions with our expert search engine marketing services."
      heroTitle="Professional SEM Services That Drive Results"
      heroDescription="Maximize your online visibility and drive qualified traffic with our comprehensive search engine marketing strategies and paid advertising expertise."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="SEM"
    />
  );
};

export default SEMCompany;
