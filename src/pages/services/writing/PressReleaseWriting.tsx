
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const PressReleaseWriting = () => {
  const content = generateServiceContent('Press Release Writing', 'Content Writing');
  return (<ServicePageLayout pageTitle="Press Release Writing - Professional PR Content" pageDescription="Generate media coverage and publicity with professionally written press releases that get noticed." heroTitle="Professional Press Release Writing Services" heroDescription="Generate media attention and build brand awareness with professionally crafted press releases that capture journalist interest and drive coverage." serviceOverview={content.serviceOverview} process={content.process} portfolio={content.portfolio} pricing={content.pricing} testimonials={content.testimonials} faqs={content.faqs} category="Press Release Writing" />);
};

export default PressReleaseWriting;
