import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TrackOrder from "./pages/TrackOrder";
import FAQ from "./pages/FAQ";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster as Sonner } from "./components/ui/sonner";
import './App.css'

const App: React.FC = () => {
  return (
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
  );
};

export default App;