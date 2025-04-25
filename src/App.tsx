
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BasicCalculatorPage from "./pages/calculators/BasicCalculatorPage";
import LoanCalculatorPage from "./pages/calculators/LoanCalculatorPage";
import CurrencyConverterPage from "./pages/calculators/CurrencyConverterPage";
import PercentageCalculatorPage from "./pages/calculators/PercentageCalculatorPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/calculators/basic" element={<BasicCalculatorPage />} />
          <Route path="/calculators/loan" element={<LoanCalculatorPage />} />
          <Route path="/calculators/currency" element={<CurrencyConverterPage />} />
          <Route path="/calculators/percentage" element={<PercentageCalculatorPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
