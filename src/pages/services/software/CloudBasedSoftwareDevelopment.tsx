
import ServicePageLayout from '@/components/ServicePageLayout';
import { generateServiceContent } from '@/utils/serviceData';

const CloudBasedSoftwareDevelopment = () => {
  const content = generateServiceContent('Cloud-based Software Development', 'Custom Software');
  return (<ServicePageLayout pageTitle="Cloud-based Software Development - Scalable Cloud Solutions" pageDescription="Build scalable cloud-based software solutions that provide flexibility, reliability, and cost-effectiveness." heroTitle="Cloud-based Software Development Services" heroDescription="Leverage the power of cloud computing with scalable software solutions that provide flexibility, reliability, and cost-effectiveness for your business." serviceOverview={content.serviceOverview} process={content.process} portfolio={content.portfolio} pricing={content.pricing} testimonials={content.testimonials} faqs={content.faqs} category="Cloud Software" />);
};

export default CloudBasedSoftwareDevelopment;
