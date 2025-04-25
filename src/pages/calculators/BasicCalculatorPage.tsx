
import React from 'react';
import Layout from '../../components/Layout';
import BasicCalculator from '../../components/calculators/BasicCalculator';

const BasicCalculatorPage = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Basic Calculator</h1>
        <div className="max-w-md mx-auto">
          <BasicCalculator />
        </div>
      </div>
    </Layout>
  );
};

export default BasicCalculatorPage;
