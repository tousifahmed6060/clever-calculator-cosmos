
import React from 'react';
import Layout from '../../components/Layout';
import LoanCalculator from '../../components/calculators/LoanCalculator';

const LoanCalculatorPage = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Loan Calculator</h1>
        <LoanCalculator />
      </div>
    </Layout>
  );
};

export default LoanCalculatorPage;
