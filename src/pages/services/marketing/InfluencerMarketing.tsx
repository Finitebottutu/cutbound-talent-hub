
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const InfluencerMarketing = () => {
  const content = generateServiceContent('Influencer Marketing', 'Digital Marketing');
  return (
    <ServicePageLayout
      pageTitle="Influencer Marketing Company - Strategic Influencer Campaigns"
      pageDescription="Amplify your brand reach and credibility through strategic influencer marketing partnerships."
      heroTitle="Strategic Influencer Marketing Services"
      heroDescription="Connect with your target audience through authentic influencer partnerships that build trust, drive engagement, and increase brand awareness."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Influencer Marketing"
    />
  );
};

export default InfluencerMarketing;
