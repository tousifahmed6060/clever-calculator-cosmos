
import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ArrowLeftRight } from 'lucide-react';

// Mock currency data (in a real app, you would fetch this from an API)
const currencies = {
  USD: { name: "US Dollar", symbol: "$", rate: 1 },
  EUR: { name: "Euro", symbol: "€", rate: 0.93 },
  GBP: { name: "British Pound", symbol: "£", rate: 0.79 },
  JPY: { name: "Japanese Yen", symbol: "¥", rate: 151.67 },
  CAD: { name: "Canadian Dollar", symbol: "C$", rate: 1.38 },
  AUD: { name: "Australian Dollar", symbol: "A$", rate: 1.51 },
  INR: { name: "Indian Rupee", symbol: "₹", rate: 83.42 },
  CNY: { name: "Chinese Yuan", symbol: "¥", rate: 7.23 },
};

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);

  const handleConvert = () => {
    const fromRate = currencies[fromCurrency as keyof typeof currencies].rate;
    const toRate = currencies[toCurrency as keyof typeof currencies].rate;
    const rate = toRate / fromRate;
    
    setExchangeRate(rate);
    setConvertedAmount(amount * rate);
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    handleConvert();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Currency Converter</CardTitle>
        <CardDescription>Convert between different currencies with latest exchange rates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              className="text-lg"
            />
          </div>

          <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-center">
            <div className="space-y-2">
              <Label htmlFor="fromCurrency">From</Label>
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(currencies).map(([code, { name }]) => (
                    <SelectItem key={code} value={code}>
                      {code} - {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleSwapCurrencies}
              className="mt-6"
            >
              <ArrowLeftRight className="h-5 w-5 text-calculator-primary" />
            </Button>

            <div className="space-y-2">
              <Label htmlFor="toCurrency">To</Label>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(currencies).map(([code, { name }]) => (
                    <SelectItem key={code} value={code}>
                      {code} - {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="pt-6 pb-2">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">
                {amount} {fromCurrency} =
              </p>
              <p className="text-3xl font-semibold text-calculator-primary">
                {convertedAmount.toFixed(2)} {toCurrency}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
              </p>
            </div>
          </div>

          <Button 
            onClick={handleConvert}
            className="w-full bg-calculator-primary hover:bg-blue-600"
          >
            Convert
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
