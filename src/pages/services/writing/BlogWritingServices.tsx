
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const BlogWritingServices = () => {
  const content = generateServiceContent('Blog Writing Services', 'Content Writing');
  return (
    <ServicePageLayout
      pageTitle="Blog Writing Services - Professional Content Creation"
      pageDescription="Engage your audience and drive traffic with high-quality blog content that ranks well and converts readers."
      heroTitle="Professional Blog Writing Services"
      heroDescription="Create compelling blog content that engages your audience, establishes thought leadership, and drives organic traffic to your website."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Blog Writing"
    />
  );
};

export default BlogWritingServices;
