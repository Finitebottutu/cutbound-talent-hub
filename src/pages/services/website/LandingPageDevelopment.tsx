
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const LandingPageDevelopment = () => {
  const content = generateServiceContent('Landing Page Development', 'Website Development');

  return (
    <ServicePageLayout
      pageTitle="Landing Page Development Company - High-Converting Pages"
      pageDescription="Create high-converting landing pages that turn visitors into customers with our expert development services."
      heroTitle="High-Converting Landing Page Development"
      heroDescription="Drive conversions and maximize your marketing ROI with professionally developed landing pages optimized for results."
      serviceOverview={[
        'Conversion-focused design and development approach',
        'A/B testing setup for continuous optimization',
        'Fast loading speeds for better user experience',
        'Mobile-responsive design for all devices',
        'SEO optimization for organic traffic',
        'Integration with marketing tools and analytics'
      ]}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Landing Page Development"
    />
  );
};

export default LandingPageDevelopment;
