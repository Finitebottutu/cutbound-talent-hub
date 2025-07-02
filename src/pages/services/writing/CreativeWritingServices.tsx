
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const CreativeWritingServices = () => {
  const content = generateServiceContent('Creative Writing Services', 'Content Writing');
  return (<ServicePageLayout pageTitle="Creative Writing Services - Engaging Creative Content" pageDescription="Captivate your audience with creative writing that tells compelling stories and builds emotional connections." heroTitle="Professional Creative Writing Services" heroDescription="Engage and inspire your audience with creative content that tells your brand story and creates lasting emotional connections." serviceOverview={content.serviceOverview} process={content.process} portfolio={content.portfolio} pricing={content.pricing} testimonials={content.testimonials} faqs={content.faqs} category="Creative Writing" />);
};

export default CreativeWritingServices;
