
import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Slider } from '../ui/slider';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(60); // months
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateLoan = () => {
    const principal = loanAmount;
    const interest = interestRate / 100 / 12; // Monthly interest rate
    const payments = loanTerm;

    // Monthly payment formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    if (interest === 0) {
      const monthlyAmount = principal / payments;
      setMonthlyPayment(monthlyAmount);
      setTotalInterest(0);
      setTotalPayment(principal);
    } else {
      const x = Math.pow(1 + interest, payments);
      const monthly = (principal * x * interest) / (x - 1);
      
      setMonthlyPayment(monthly);
      setTotalPayment(monthly * payments);
      setTotalInterest((monthly * payments) - principal);
    }
  };

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Loan/EMI Calculator</CardTitle>
        <CardDescription>Calculate your monthly loan payments, total interest and more</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="loanAmount">Loan Amount</Label>
                <span className="text-sm text-gray-500">${loanAmount.toLocaleString()}</span>
              </div>
              <Slider 
                id="loanAmount" 
                min={1000} 
                max={1000000} 
                step={1000} 
                value={[loanAmount]} 
                onValueChange={(value) => setLoanAmount(value[0])}
                className="mb-4" 
              />
              <Input 
                id="loanAmountInput" 
                type="number" 
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))} 
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <span className="text-sm text-gray-500">{interestRate}%</span>
              </div>
              <Slider 
                id="interestRate" 
                min={0} 
                max={20} 
                step={0.1} 
                value={[interestRate]} 
                onValueChange={(value) => setInterestRate(value[0])}
                className="mb-4" 
              />
              <Input 
                id="interestRateInput" 
                type="number" 
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))} 
                step={0.1}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="loanTerm">Loan Term (months)</Label>
                <span className="text-sm text-gray-500">{loanTerm} months</span>
              </div>
              <Slider 
                id="loanTerm" 
                min={12} 
                max={360} 
                step={12} 
                value={[loanTerm]} 
                onValueChange={(value) => setLoanTerm(value[0])}
                className="mb-4" 
              />
              <Input 
                id="loanTermInput" 
                type="number" 
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))} 
                step={1}
              />
            </div>
            
            <Button 
              onClick={calculateLoan}
              className="w-full bg-calculator-primary hover:bg-blue-600"
            >
              Calculate
            </Button>
          </div>

          <div className="bg-calculator-muted rounded-lg p-6 space-y-6">
            <h3 className="text-lg font-medium text-center">Loan Summary</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-md border shadow-sm">
                <p className="text-sm text-gray-500">Monthly Payment</p>
                <p className="text-2xl font-semibold text-calculator-primary">${monthlyPayment.toFixed(2)}</p>
              </div>
              
              <div className="bg-white p-4 rounded-md border shadow-sm">
                <p className="text-sm text-gray-500">Total Interest</p>
                <p className="text-2xl font-semibold text-calculator-primary">${totalInterest.toFixed(2)}</p>
              </div>
              
              <div className="bg-white p-4 rounded-md border shadow-sm">
                <p className="text-sm text-gray-500">Total Payment</p>
                <p className="text-2xl font-semibold text-calculator-primary">${totalPayment.toFixed(2)}</p>
              </div>
            </div>
            
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-calculator-primary" 
                style={{ width: `${(loanAmount / totalPayment * 100) || 0}%` }}>
              </div>
            </div>
            <div className="flex justify-between text-xs">
              <span>Principal: ${loanAmount.toFixed(2)}</span>
              <span>Interest: ${totalInterest.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanCalculator;
