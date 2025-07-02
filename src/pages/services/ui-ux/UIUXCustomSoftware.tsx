
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const UIUXCustomSoftware = () => {
  const content = generateServiceContent('UI/UX for Custom Software', 'UI/UX Design');

  return (
    <ServicePageLayout
      pageTitle="UI/UX for Custom Software - Professional Design Services"
      pageDescription="Design intuitive interfaces for complex software applications with our custom software UI/UX expertise."
      heroTitle="Custom Software UI/UX Design Services"
      heroDescription="Transform complex software into intuitive experiences with our specialized custom software UI/UX design services."
      serviceOverview={[
        'Complex workflow simplification and user journey optimization',
        'Enterprise software design with scalability in mind',
        'Dashboard and data visualization design expertise',
        'Custom component libraries and design systems',
        'User role-based interface design and permissions',
        'Integration with existing software ecosystems'
      ]}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Custom Software UI/UX"
    />
  );
};

export default UIUXCustomSoftware;
