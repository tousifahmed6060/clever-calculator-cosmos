
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Calculator as CalculatorIcon } from 'lucide-react';
import CalculatorCard from './CalculatorCard';

const Categories = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Calculators</h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Explore our most used calculators for various needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <CalculatorCard
            title="Basic Calculator"
            description="Simple calculator for basic math operations"
            path="/calculators/basic"
            icon={<CalculatorIcon className="w-6 h-6" />}
          />
          
          <CalculatorCard
            title="Loan Calculator"
            description="Calculate EMIs, interest and loan payments"
            path="/calculators/loan"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
            }
          />
          
          <CalculatorCard
            title="Currency Converter"
            description="Convert between different currencies with latest exchange rates"
            path="/calculators/currency"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Z" />
                <path d="M14 6v2" />
                <path d="M10 6v2" />
                <path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M12 15v2" />
              </svg>
            }
          />
          
          <CalculatorCard
            title="Percentage Calculator"
            description="Calculate percentages, discounts and proportions"
            path="/calculators/percentage"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.5 4.27c-1.7.43-3.24 1.31-4.5 2.5" />
                <path d="M7 7a7 7 0 1 0 10-5" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
