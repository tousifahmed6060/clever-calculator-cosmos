
import React from 'react';
import { Calculator } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-calculator-primary" />
          <Link to="/" className="text-xl font-bold text-calculator-primary">
            Calculators
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-calculator-primary transition-colors">
            Home
          </Link>
          <Link to="/calculators/basic" className="text-sm font-medium hover:text-calculator-primary transition-colors">
            Basic
          </Link>
          <Link to="/calculators/loan" className="text-sm font-medium hover:text-calculator-primary transition-colors">
            Loan
          </Link>
          <Link to="/calculators/currency" className="text-sm font-medium hover:text-calculator-primary transition-colors">
            Currency
          </Link>
          <Link to="/calculators/percentage" className="text-sm font-medium hover:text-calculator-primary transition-colors">
            Percentage
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
