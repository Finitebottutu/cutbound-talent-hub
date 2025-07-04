import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Hire from "./pages/Hire";
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/hire" element={<Hire />} />
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
