
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-calculator-muted to-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Smart Calculators for Every Need
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Free online calculators for finance, math, health, and everyday use. Quick, accurate, and easy to use.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/calculators/basic">
                <Button size="lg" className="bg-calculator-primary hover:bg-blue-600">
                  Start Calculating
                </Button>
              </Link>
              <Link to="/calculators/loan">
                <Button size="lg" variant="outline" className="border-calculator-primary text-calculator-primary">
                  Try Loan Calculator
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="grid gap-4">
                <div className="rounded-lg bg-white p-4 shadow-lg border border-calculator-border animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <div className="h-8 w-8 rounded-full bg-calculator-muted p-1 flex items-center justify-center text-calculator-primary mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 4h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                      <path d="M9 10h6" />
                      <path d="M12 7v6" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Basic Calculator</p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-lg border border-calculator-border animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="h-8 w-8 rounded-full bg-calculator-muted p-1 flex items-center justify-center text-calculator-primary mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Z" />
                      <path d="M14 6v2" />
                      <path d="M10 6v2" />
                      <path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      <path d="M12 15v2" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Currency Converter</p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-white p-4 shadow-lg border border-calculator-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="h-8 w-8 rounded-full bg-calculator-muted p-1 flex items-center justify-center text-calculator-primary mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Loan Calculator</p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-lg border border-calculator-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <div className="h-8 w-8 rounded-full bg-calculator-muted p-1 flex items-center justify-center text-calculator-primary mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7.5 4.27c-1.7.43-3.24 1.31-4.5 2.5" />
                      <path d="M7 7a7 7 0 1 0 10-5" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Percentage Calculator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
