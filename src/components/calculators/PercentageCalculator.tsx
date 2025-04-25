
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const PercentageCalculator = () => {
  // Basic percentage calculation
  const [basicNumber, setBasicNumber] = useState<number>(0);
  const [basicPercentage, setBasicPercentage] = useState<number>(0);
  const [basicResult, setBasicResult] = useState<number>(0);

  // Percentage change calculation
  const [originalValue, setOriginalValue] = useState<number>(0);
  const [newValue, setNewValue] = useState<number>(0);
  const [changeResult, setChangeResult] = useState<number | null>(null);
  const [changeAmount, setChangeAmount] = useState<number | null>(null);

  // Percentage of calculation
  const [partValue, setPartValue] = useState<number>(0);
  const [wholeValue, setWholeValue] = useState<number>(0);
  const [ofResult, setOfResult] = useState<number | null>(null);

  // Calculate basic percentage
  const calculateBasicPercentage = () => {
    setBasicResult((basicNumber * basicPercentage) / 100);
  };

  // Calculate percentage change
  const calculatePercentageChange = () => {
    if (originalValue === 0) {
      setChangeResult(null);
      setChangeAmount(null);
      return;
    }
    
    const change = ((newValue - originalValue) / Math.abs(originalValue)) * 100;
    setChangeResult(change);
    setChangeAmount(newValue - originalValue);
  };

  // Calculate percentage of a value
  const calculatePercentageOf = () => {
    if (wholeValue === 0) {
      setOfResult(null);
      return;
    }
    
    setOfResult((partValue / wholeValue) * 100);
  };

  return (
    <Card className="w-full max-w-xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Percentage Calculator</CardTitle>
        <CardDescription>Calculate percentages, percentage changes and proportions</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="change">% Change</TabsTrigger>
            <TabsTrigger value="of">% of Total</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="p-4 pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="basicNumber">Number</Label>
                  <Input
                    id="basicNumber"
                    type="number"
                    value={basicNumber}
                    onChange={(e) => setBasicNumber(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="basicPercentage">Percentage</Label>
                  <div className="flex">
                    <Input
                      id="basicPercentage"
                      type="number"
                      value={basicPercentage}
                      onChange={(e) => setBasicPercentage(Number(e.target.value))}
                      className="rounded-r-none"
                    />
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-input bg-muted text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={calculateBasicPercentage}
                className="w-full bg-calculator-primary hover:bg-blue-600"
              >
                Calculate
              </Button>
              
              <div className="bg-calculator-muted p-4 rounded-md mt-4 text-center">
                <p className="text-sm text-gray-500 mb-1">Result</p>
                <p className="text-2xl font-medium text-calculator-primary">
                  {basicResult.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {basicPercentage}% of {basicNumber} = {basicResult.toFixed(2)}
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="change" className="p-4 pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="originalValue">Original Value</Label>
                  <Input
                    id="originalValue"
                    type="number"
                    value={originalValue}
                    onChange={(e) => setOriginalValue(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newValue">New Value</Label>
                  <Input
                    id="newValue"
                    type="number"
                    value={newValue}
                    onChange={(e) => setNewValue(Number(e.target.value))}
                  />
                </div>
              </div>
              
              <Button 
                onClick={calculatePercentageChange}
                className="w-full bg-calculator-primary hover:bg-blue-600"
              >
                Calculate Change
              </Button>
              
              <div className="bg-calculator-muted p-4 rounded-md mt-4 text-center">
                <p className="text-sm text-gray-500 mb-1">Percentage Change</p>
                <p className="text-2xl font-medium text-calculator-primary">
                  {changeResult !== null ? `${changeResult.toFixed(2)}%` : 'N/A'}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Change Amount: {changeAmount !== null ? changeAmount.toFixed(2) : 'N/A'}
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="of" className="p-4 pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="partValue">Part Value</Label>
                  <Input
                    id="partValue"
                    type="number"
                    value={partValue}
                    onChange={(e) => setPartValue(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wholeValue">Total Value</Label>
                  <Input
                    id="wholeValue"
                    type="number"
                    value={wholeValue}
                    onChange={(e) => setWholeValue(Number(e.target.value))}
                  />
                </div>
              </div>
              
              <Button 
                onClick={calculatePercentageOf}
                className="w-full bg-calculator-primary hover:bg-blue-600"
              >
                Calculate Percentage
              </Button>
              
              <div className="bg-calculator-muted p-4 rounded-md mt-4 text-center">
                <p className="text-sm text-gray-500 mb-1">Result</p>
                <p className="text-2xl font-medium text-calculator-primary">
                  {ofResult !== null ? `${ofResult.toFixed(2)}%` : 'N/A'}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {partValue} is {ofResult !== null ? `${ofResult.toFixed(2)}%` : 'N/A'} of {wholeValue}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PercentageCalculator;
