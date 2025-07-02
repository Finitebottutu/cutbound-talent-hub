
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Referral from "./pages/Referral";
import NotFound from "./pages/NotFound";

// Hire by Role pages
import FullStackDevelopers from "./pages/hire/FullStackDevelopers";
import FrontEndDevelopers from "./pages/hire/FrontEndDevelopers";
import BackEndDevelopers from "./pages/hire/BackEndDevelopers";
import MobileDevelopers from "./pages/hire/MobileDevelopers";
import GameDevelopers from "./pages/hire/GameDevelopers";
import DevOps from "./pages/hire/DevOps";
import CloudEngineers from "./pages/hire/CloudEngineers";
import AIEngineers from "./pages/hire/AIEngineers";
import MachineLearningEngineers from "./pages/hire/MachineLearningEngineers";
import DataAnalysts from "./pages/hire/DataAnalysts";
import DataEngineers from "./pages/hire/DataEngineers";
import DataScientists from "./pages/hire/DataScientists";
import BlockchainDevelopers from "./pages/hire/BlockchainDevelopers";
import AutomationQAEngineers from "./pages/hire/AutomationQAEngineers";

// Hire by Skill pages
import ReactDevelopers from "./pages/hire/ReactDevelopers";
import AngularDevelopers from "./pages/hire/AngularDevelopers";
import NodeJSDevelopers from "./pages/hire/NodeJSDevelopers";
import JavaScriptDevelopers from "./pages/hire/JavaScriptDevelopers";
import NextJSDevelopers from "./pages/hire/NextJSDevelopers";
import VueJSDevelopers from "./pages/hire/VueJSDevelopers";
import ThreeJSDevelopers from "./pages/hire/ThreeJSDevelopers";
import PythonDevelopers from "./pages/hire/PythonDevelopers";
import UnityDevelopers from "./pages/hire/UnityDevelopers";
import DjangoDevelopers from "./pages/hire/DjangoDevelopers";
import JavaDevelopers from "./pages/hire/JavaDevelopers";
import RubyOnRailsDevelopers from "./pages/hire/RubyOnRailsDevelopers";
import PHPDevelopers from "./pages/hire/PHPDevelopers";
import LaravelDevelopers from "./pages/hire/LaravelDevelopers";
import DotNetDevelopers from "./pages/hire/DotNetDevelopers";
import ASPNetDevelopers from "./pages/hire/ASPNetDevelopers";
import iOSDevelopers from "./pages/hire/iOSDevelopers";
import FlutterDevelopers from "./pages/hire/FlutterDevelopers";
import ReactNativeDevelopers from "./pages/hire/ReactNativeDevelopers";
import AndroidDevelopers from "./pages/hire/AndroidDevelopers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/referral" element={<Referral />} />
          
          {/* Hire by Role Routes */}
          <Route path="/hire/full-stack-developers" element={<FullStackDevelopers />} />
          <Route path="/hire/front-end-developers" element={<FrontEndDevelopers />} />
          <Route path="/hire/back-end-developers" element={<BackEndDevelopers />} />
          <Route path="/hire/mobile-developers" element={<MobileDevelopers />} />
          <Route path="/hire/game-developers" element={<GameDevelopers />} />
          <Route path="/hire/devops" element={<DevOps />} />
          <Route path="/hire/cloud-engineers" element={<CloudEngineers />} />
          <Route path="/hire/ai-engineers" element={<AIEngineers />} />
          <Route path="/hire/machine-learning-engineers" element={<MachineLearningEngineers />} />
          <Route path="/hire/data-analysts" element={<DataAnalysts />} />
          <Route path="/hire/data-engineers" element={<DataEngineers />} />
          <Route path="/hire/data-scientists" element={<DataScientists />} />
          <Route path="/hire/blockchain-developers" element={<BlockchainDevelopers />} />
          <Route path="/hire/automation-qa-engineers" element={<AutomationQAEngineers />} />
          
          {/* Hire by Skill Routes */}
          <Route path="/hire/react-developers" element={<ReactDevelopers />} />
          <Route path="/hire/angular-developers" element={<AngularDevelopers />} />
          <Route path="/hire/nodejs-developers" element={<NodeJSDevelopers />} />
          <Route path="/hire/javascript-developers" element={<JavaScriptDevelopers />} />
          <Route path="/hire/nextjs-developers" element={<NextJSDevelopers />} />
          <Route path="/hire/vuejs-developers" element={<VueJSDevelopers />} />
          <Route path="/hire/threejs-developers" element={<ThreeJSDevelopers />} />
          <Route path="/hire/python-developers" element={<PythonDevelopers />} />
          <Route path="/hire/unity-developers" element={<UnityDevelopers />} />
          <Route path="/hire/django-developers" element={<DjangoDevelopers />} />
          <Route path="/hire/java-developers" element={<JavaDevelopers />} />
          <Route path="/hire/ruby-on-rails-developers" element={<RubyOnRailsDevelopers />} />
          <Route path="/hire/php-developers" element={<PHPDevelopers />} />
          <Route path="/hire/laravel-developers" element={<LaravelDevelopers />} />
          <Route path="/hire/dotnet-developers" element={<DotNetDevelopers />} />
          <Route path="/hire/aspnet-developers" element={<ASPNetDevelopers />} />
          <Route path="/hire/ios-developers" element={<iOSDevelopers />} />
          <Route path="/hire/flutter-developers" element={<FlutterDevelopers />} />
          <Route path="/hire/react-native-developers" element={<ReactNativeDevelopers />} />
          <Route path="/hire/android-developers" element={<AndroidDevelopers />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
