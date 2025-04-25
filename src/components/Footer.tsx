
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-white py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-gray-500">
          © {currentYear} Calculators App. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-gray-500 hover:text-calculator-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-calculator-primary transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-calculator-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
