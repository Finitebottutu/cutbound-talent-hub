
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
import Portfolio from "./pages/Portfolio";
import { ContactFormProvider } from './contexts/ContactFormContext';
import ContactForm from './components/ContactForm';
import { useContactForm } from './contexts/ContactFormContext';

const queryClient = new QueryClient();

const AppContent = () => {
  const { isFormOpen, closeForm } = useContactForm();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
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
