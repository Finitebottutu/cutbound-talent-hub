
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const AcademicWritingServices = () => {
  const content = generateServiceContent('Academic Writing Services', 'Content Writing');
  return (<ServicePageLayout pageTitle="Academic Writing Services - Scholarly Content Creation" pageDescription="Professional academic writing services for research papers, articles, and scholarly publications." heroTitle="Professional Academic Writing Services" heroDescription="Support your research and academic goals with professionally written content that meets scholarly standards and publication requirements." serviceOverview={content.serviceOverview} process={content.process} portfolio={content.portfolio} pricing={content.pricing} testimonials={content.testimonials} faqs={content.faqs} category="Academic Writing" />);
};

export default AcademicWritingServices;
