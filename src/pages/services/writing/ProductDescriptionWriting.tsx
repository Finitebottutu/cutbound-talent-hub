
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const ProductDescriptionWriting = () => {
  const content = generateServiceContent('Product Description Writing', 'Content Writing');
  return (<ServicePageLayout pageTitle="Product Description Writing - Compelling Product Copy" pageDescription="Increase sales with compelling product descriptions that highlight benefits and persuade customers to buy." heroTitle="Professional Product Description Writing" heroDescription="Drive more sales with compelling product descriptions that highlight key benefits and persuade customers to make purchase decisions." serviceOverview={content.serviceOverview} process={content.process} portfolio={content.portfolio} pricing={content.pricing} testimonials={content.testimonials} faqs={content.faqs} category="Product Writing" />);
};

export default ProductDescriptionWriting;
