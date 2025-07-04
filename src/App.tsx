
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
import { ContactFormProvider } from './contexts/ContactFormContext';
import ContactForm from './components/ContactForm';
import { useContactForm } from './contexts/ContactFormContext';

// Import service pages
import UIUXWebApplication from './pages/services/ui-ux/UIUXWebApplication';

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
import iOSDevelopers from './pages/hire/iOSDevelopers';
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
          
          {/* Service Routes */}
          <Route path="/services/ui-ux/web-application" element={<UIUXWebApplication />} />
          
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
          <Route path="/hire/ios-developers" element={<iOSDevelopers />} />
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
