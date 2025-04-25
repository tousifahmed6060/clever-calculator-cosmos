
import React from 'react';
import Layout from '../../components/Layout';
import CurrencyConverter from '../../components/calculators/CurrencyConverter';

const CurrencyConverterPage = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Currency Converter</h1>
        <CurrencyConverter />
      </div>
    </Layout>
  );
};

export default CurrencyConverterPage;
