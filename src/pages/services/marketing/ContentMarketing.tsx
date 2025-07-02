
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const ContentMarketing = () => {
  const content = generateServiceContent('Content Marketing', 'Digital Marketing');
  return (
    <ServicePageLayout
      pageTitle="Content Marketing Company - Strategic Content Services"
      pageDescription="Drive engagement and conversions with strategic content marketing that resonates with your target audience."
      heroTitle="Strategic Content Marketing Services"
      heroDescription="Create compelling content that educates, engages, and converts your audience while building lasting relationships and brand authority."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Content Marketing"
    />
  );
};

export default ContentMarketing;
