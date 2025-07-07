import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from "sonner";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Hire from "./pages/Hire";
import Portfolio from "./pages/Portfolio";
import Referral from "./pages/Referral";
import ComingSoon from "./pages/ComingSoon";
import { ContactFormProvider } from './contexts/ContactFormContext';
import ContactForm from './components/ContactForm';
import { useContactForm } from './contexts/ContactFormContext';

// Import service pages
import UIUXWebApplication from './pages/services/ui-ux/UIUXWebApplication';
import UIUXMobileApplication from './pages/services/ui-ux/UIUXMobileApplication';
import UIUXCustomSoftware from './pages/services/ui-ux/UIUXCustomSoftware';

// Import website service pages
import CustomWebApplicationDevelopment from './pages/services/website/CustomWebApplicationDevelopment';
import EcommerceStoreDevelopment from './pages/services/website/EcommerceStoreDevelopment';
import CorporateWebsiteDevelopment from './pages/services/website/CorporateWebsiteDevelopment';
import LandingPageDevelopment from './pages/services/website/LandingPageDevelopment';
import CMSDevelopment from './pages/services/website/CMSDevelopment';
import BlogDevelopment from './pages/services/website/BlogDevelopment';
import MarketplaceDevelopment from './pages/services/website/MarketplaceDevelopment';
import SaaSApplicationDevelopment from './pages/services/website/SaaSApplicationDevelopment';

// Import mobile service pages
import IOSApplicationDevelopment from './pages/services/mobile/IOSApplicationDevelopment';
import AndroidApplicationDevelopment from './pages/services/mobile/AndroidApplicationDevelopment';
import CrossPlatformMobileDevelopment from './pages/services/mobile/CrossPlatformMobileDevelopment';

// Import software service pages
import EnterpriseSoftwareDevelopment from './pages/services/software/EnterpriseSoftwareDevelopment';
import SaaSToolDevelopment from './pages/services/software/SaaSToolDevelopment';
import CRMDevelopment from './pages/services/software/CRMDevelopment';
import ERPDevelopment from './pages/services/software/ERPDevelopment';
import DesktopApplicationDevelopment from './pages/services/software/DesktopApplicationDevelopment';
import CloudBasedSoftwareDevelopment from './pages/services/software/CloudBasedSoftwareDevelopment';

// Import marketing service pages
import SEOCompany from './pages/services/marketing/SEOCompany';
import SEMCompany from './pages/services/marketing/SEMCompany';
import SocialMediaMarketing from './pages/services/marketing/SocialMediaMarketing';
import ContentMarketing from './pages/services/marketing/ContentMarketing';
import EmailMarketing from './pages/services/marketing/EmailMarketing';
import PPCAds from './pages/services/marketing/PPCAds';
import InfluencerMarketing from './pages/services/marketing/InfluencerMarketing';
import AffiliateMarketing from './pages/services/marketing/AffiliateMarketing';

// Import writing service pages
import BlogWritingServices from './pages/services/writing/BlogWritingServices';
import CopywritingServices from './pages/services/writing/CopywritingServices';
import SEOWritingServices from './pages/services/writing/SEOWritingServices';
import TechnicalWritingServices from './pages/services/writing/TechnicalWritingServices';
import CreativeWritingServices from './pages/services/writing/CreativeWritingServices';
import AcademicWritingServices from './pages/services/writing/AcademicWritingServices';
import ProductDescriptionWriting from './pages/services/writing/ProductDescriptionWriting';
import PressReleaseWriting from './pages/services/writing/PressReleaseWriting';
import GhostwritingServices from './pages/services/writing/GhostwritingServices';

// Import hire pages
import FullStackDevelopers from './pages/hire/FullStackDevelopers';
import FrontEndDevelopers from './pages/hire/FrontEndDevelopers';
import BackEndDevelopers from './pages/hire/BackEndDevelopers';
import ReactDevelopers from './pages/hire/ReactDevelopers';
import NodeJSDevelopers from './pages/hire/NodeJSDevelopers';
import PythonDevelopers from './pages/hire/PythonDevelopers';
import JavaDevelopers from './pages/hire/JavaDevelopers';
import PHPDevelopers from './pages/hire/PHPDevelopers';
import JavaScriptDevelopers from './pages/hire/JavaScriptDevelopers';
import AngularDevelopers from './pages/hire/AngularDevelopers';
import VueJSDevelopers from './pages/hire/VueJSDevelopers';
import NextJSDevelopers from './pages/hire/NextJSDevelopers';
import ReactNativeDevelopers from './pages/hire/ReactNativeDevelopers';
import FlutterDevelopers from './pages/hire/FlutterDevelopers';
import AndroidDevelopers from './pages/hire/AndroidDevelopers';
import IOSDevelopers from './pages/hire/iOSDevelopers';
import MobileDevelopers from './pages/hire/MobileDevelopers';
import DjangoDevelopers from './pages/hire/DjangoDevelopers';
import LaravelDevelopers from './pages/hire/LaravelDevelopers';
import RubyOnRailsDevelopers from './pages/hire/RubyOnRailsDevelopers';
import DotNetDevelopers from './pages/hire/DotNetDevelopers';
import ASPNetDevelopers from './pages/hire/ASPNetDevelopers';
import GameDevelopers from './pages/hire/GameDevelopers';
import UnityDevelopers from './pages/hire/UnityDevelopers';
import ThreeJSDevelopers from './pages/hire/ThreeJSDevelopers';
import BlockchainDevelopers from './pages/hire/BlockchainDevelopers';
import AIEngineers from './pages/hire/AIEngineers';
import MachineLearningEngineers from './pages/hire/MachineLearningEngineers';
import DataScientists from './pages/hire/DataScientists';
import DataAnalysts from './pages/hire/DataAnalysts';
import DataEngineers from './pages/hire/DataEngineers';
import DevOps from './pages/hire/DevOps';
import CloudEngineers from './pages/hire/CloudEngineers';
import AutomationQAEngineers from './pages/hire/AutomationQAEngineers';

const queryClient = new QueryClient();

const AppContent = () => {
  const { isFormOpen, closeForm } = useContactForm();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          
          {/* UI/UX Service Routes */}
          <Route path="/services/ui-ux/web-application" element={<UIUXWebApplication />} />
          <Route path="/services/ui-ux/mobile-application" element={<UIUXMobileApplication />} />
          <Route path="/services/ui-ux/custom-software" element={<UIUXCustomSoftware />} />
          
          {/* Website Service Routes */}
          <Route path="/services/website/custom-web-application-development" element={<CustomWebApplicationDevelopment />} />
          <Route path="/services/website/ecommerce-store-development" element={<EcommerceStoreDevelopment />} />
          <Route path="/services/website/corporate-website-development" element={<CorporateWebsiteDevelopment />} />
          <Route path="/services/website/landing-page-development" element={<LandingPageDevelopment />} />
          <Route path="/services/website/cms-development" element={<CMSDevelopment />} />
          <Route path="/services/website/blog-development" element={<BlogDevelopment />} />
          <Route path="/services/website/marketplace-development" element={<MarketplaceDevelopment />} />
          <Route path="/services/website/saas-application-development" element={<SaaSApplicationDevelopment />} />
          
          {/* Mobile Service Routes */}
          <Route path="/services/mobile/ios-application-development" element={<IOSApplicationDevelopment />} />
          <Route path="/services/mobile/android-application-development" element={<AndroidApplicationDevelopment />} />
          <Route path="/services/mobile/cross-platform-mobile-development" element={<CrossPlatformMobileDevelopment />} />
          
          {/* Software Service Routes */}
          <Route path="/services/software/enterprise-software-development" element={<EnterpriseSoftwareDevelopment />} />
          <Route path="/services/software/saas-tool-development" element={<SaaSToolDevelopment />} />
          <Route path="/services/software/crm-development" element={<CRMDevelopment />} />
          <Route path="/services/software/erp-development" element={<ERPDevelopment />} />
          <Route path="/services/software/desktop-application-development" element={<DesktopApplicationDevelopment />} />
          <Route path="/services/software/cloud-based-software-development" element={<CloudBasedSoftwareDevelopment />} />
          
          {/* Marketing Service Routes */}
          <Route path="/services/marketing/seo-company" element={<SEOCompany />} />
          <Route path="/services/marketing/sem-company" element={<SEMCompany />} />
          <Route path="/services/marketing/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/marketing/content-marketing" element={<ContentMarketing />} />
          <Route path="/services/marketing/email-marketing" element={<EmailMarketing />} />
          <Route path="/services/marketing/ppc-ads" element={<PPCAds />} />
          <Route path="/services/marketing/influencer-marketing" element={<InfluencerMarketing />} />
          <Route path="/services/marketing/affiliate-marketing" element={<AffiliateMarketing />} />
          
          {/* Writing Service Routes */}
          <Route path="/services/writing/blog-writing-services" element={<BlogWritingServices />} />
          <Route path="/services/writing/copywriting-services" element={<CopywritingServices />} />
          <Route path="/services/writing/seo-writing-services" element={<SEOWritingServices />} />
          <Route path="/services/writing/technical-writing-services" element={<TechnicalWritingServices />} />
          <Route path="/services/writing/creative-writing-services" element={<CreativeWritingServices />} />
          <Route path="/services/writing/academic-writing-services" element={<AcademicWritingServices />} />
          <Route path="/services/writing/product-description-writing" element={<ProductDescriptionWriting />} />
          <Route path="/services/writing/press-release-writing" element={<PressReleaseWriting />} />
          <Route path="/services/writing/ghostwriting-services" element={<GhostwritingServices />} />
          
          {/* Hire Routes */}
          <Route path="/hire/full-stack-developers" element={<FullStackDevelopers />} />
          <Route path="/hire/frontend-developers" element={<FrontEndDevelopers />} />
          <Route path="/hire/backend-developers" element={<BackEndDevelopers />} />
          <Route path="/hire/react-developers" element={<ReactDevelopers />} />
          <Route path="/hire/nodejs-developers" element={<NodeJSDevelopers />} />
          <Route path="/hire/python-developers" element={<PythonDevelopers />} />
          <Route path="/hire/java-developers" element={<JavaDevelopers />} />
          <Route path="/hire/php-developers" element={<PHPDevelopers />} />
          <Route path="/hire/javascript-developers" element={<JavaScriptDevelopers />} />
          <Route path="/hire/angular-developers" element={<AngularDevelopers />} />
          <Route path="/hire/vuejs-developers" element={<VueJSDevelopers />} />
          <Route path="/hire/nextjs-developers" element={<NextJSDevelopers />} />
          <Route path="/hire/react-native-developers" element={<ReactNativeDevelopers />} />
          <Route path="/hire/flutter-developers" element={<FlutterDevelopers />} />
          <Route path="/hire/android-developers" element={<AndroidDevelopers />} />
          <Route path="/hire/ios-developers" element={<IOSDevelopers />} />
          <Route path="/hire/mobile-developers" element={<MobileDevelopers />} />
          <Route path="/hire/django-developers" element={<DjangoDevelopers />} />
          <Route path="/hire/laravel-developers" element={<LaravelDevelopers />} />
          <Route path="/hire/ruby-on-rails-developers" element={<RubyOnRailsDevelopers />} />
          <Route path="/hire/dotnet-developers" element={<DotNetDevelopers />} />
          <Route path="/hire/aspnet-developers" element={<ASPNetDevelopers />} />
          <Route path="/hire/game-developers" element={<GameDevelopers />} />
          <Route path="/hire/unity-developers" element={<UnityDevelopers />} />
          <Route path="/hire/threejs-developers" element={<ThreeJSDevelopers />} />
          <Route path="/hire/blockchain-developers" element={<BlockchainDevelopers />} />
          <Route path="/hire/ai-engineers" element={<AIEngineers />} />
          <Route path="/hire/machine-learning-engineers" element={<MachineLearningEngineers />} />
          <Route path="/hire/data-scientists" element={<DataScientists />} />
          <Route path="/hire/data-analysts" element={<DataAnalysts />} />
          <Route path="/hire/data-engineers" element={<DataEngineers />} />
          <Route path="/hire/devops-engineers" element={<DevOps />} />
          <Route path="/hire/cloud-engineers" element={<CloudEngineers />} />
          <Route path="/hire/automation-qa-engineers" element={<AutomationQAEngineers />} />
        </Routes>
      </Router>
      <ContactForm isOpen={isFormOpen} onClose={closeForm} />
      <Toaster />
    </>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactFormProvider>
        <AppContent />
      </ContactFormProvider>
    </QueryClientProvider>
  );
}

export default App;
