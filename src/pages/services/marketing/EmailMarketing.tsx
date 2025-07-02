
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const EmailMarketing = () => {
  const content = generateServiceContent('Email Marketing', 'Digital Marketing');
  return (
    <ServicePageLayout
      pageTitle="Email Marketing Company - Professional Email Campaigns"
      pageDescription="Drive conversions and build customer relationships with our targeted email marketing campaigns."
      heroTitle="Professional Email Marketing Services"
      heroDescription="Nurture leads and drive sales with personalized email marketing campaigns that deliver measurable results and build lasting customer relationships."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Email Marketing"
    />
  );
};

export default EmailMarketing;
