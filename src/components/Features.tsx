
import React from 'react';

const Features = () => {
  return (
    <div className="py-16 md:py-24 bg-calculator-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Use Our Calculators?</h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Designed to be simple, accurate, and accessible
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 h-12 w-12 rounded-full bg-calculator-primary/10 p-2 flex items-center justify-center text-calculator-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Fast & Accurate</h3>
            <p className="text-gray-500">
              Get instant results with precise calculations for all your needs.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 h-12 w-12 rounded-full bg-calculator-primary/10 p-2 flex items-center justify-center text-calculator-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-gray-500">
              All calculations are done in your browser. Your data never leaves your device.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 h-12 w-12 rounded-full bg-calculator-primary/10 p-2 flex items-center justify-center text-calculator-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <circle cx="12" cy="17" r="1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
            <p className="text-gray-500">
              User-friendly interface with simple inputs and clear results.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 h-12 w-12 rounded-full bg-calculator-primary/10 p-2 flex items-center justify-center text-calculator-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Always Free</h3>
            <p className="text-gray-500">
              No hidden fees, subscriptions, or in-app purchases. All calculators are completely free.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 h-12 w-12 rounded-full bg-calculator-primary/10 p-2 flex items-center justify-center text-calculator-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m16 16-4-4" />
                <path d="M12 8v4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Real-time Updates</h3>
            <p className="text-gray-500">
              See calculations update instantly as you adjust values.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 h-12 w-12 rounded-full bg-calculator-primary/10 p-2 flex items-center justify-center text-calculator-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M4 21a1 1 0 0 1-.997-.923L2.8 17H2.5a1.5 1.5 0 0 1 0-3h.041a3 3 0 0 1 2.959-2.5h.426C6.906 9.37 9.717 8 12.815 8c2.707 0 5.279 1.089 7.185 3" />
                <path d="M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M10 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M10 18h6" />
                <path d="m15.5 9-.5 1" />
                <path d="m12 6.5 1 .5" />
                <path d="M19 13v-2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Mobile Friendly</h3>
            <p className="text-gray-500">
              Use on any device - works perfectly on smartphones, tablets, and computers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
