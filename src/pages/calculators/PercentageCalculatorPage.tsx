
import React from 'react';
import Layout from '../../components/Layout';
import PercentageCalculator from '../../components/calculators/PercentageCalculator';

const PercentageCalculatorPage = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Percentage Calculator</h1>
        <PercentageCalculator />
      </div>
    </Layout>
  );
};

export default PercentageCalculatorPage;
