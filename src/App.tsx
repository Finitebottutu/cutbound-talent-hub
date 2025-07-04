
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
