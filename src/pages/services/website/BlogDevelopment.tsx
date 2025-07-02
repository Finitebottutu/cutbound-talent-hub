
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const BlogDevelopment = () => {
  const content = generateServiceContent('Blog Development', 'Website Development');

  return (
    <ServicePageLayout
      pageTitle="Blog Development - Professional Blog Websites"
      pageDescription="Create engaging blog websites that attract readers and drive traffic with our professional blog development services."
      heroTitle="Professional Blog Development Services"
      heroDescription="Build engaging, SEO-optimized blog websites that attract readers, drive traffic, and establish your authority in your industry."
      serviceOverview={content.serviceOverview}
      process={content.process}
      portfolio={content.portfolio}
      pricing={content.pricing}
      testimonials={content.testimonials}
      faqs={content.faqs}
      category="Blog Development"
    />
  );
};

export default BlogDevelopment;
