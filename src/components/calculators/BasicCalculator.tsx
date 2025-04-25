
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const BasicCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState<string | null>(null);
  const [storedValue, setStoredValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memory, setMemory] = useState<string | null>(null);

  const clearAll = () => {
    setDisplay('0');
    setCurrentValue(null);
    setStoredValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const clearDisplay = () => {
    setDisplay('0');
    setCurrentValue(null);
    setWaitingForOperand(false);
  };

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setCurrentValue(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
      setCurrentValue(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setCurrentValue('0.');
      setWaitingForOperand(false);
      return;
    }

    if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
      setCurrentValue(currentValue + '.');
    }
  };

  const toggleSign = () => {
    const newValue = parseFloat(display) * -1;
    setDisplay(String(newValue));
    setCurrentValue(String(newValue));
  };

  const inputPercent = () => {
    const currentValueNum = parseFloat(display);
    const newValue = currentValueNum / 100;
    setDisplay(String(newValue));
    setCurrentValue(String(newValue));
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (storedValue === null) {
      setStoredValue(String(inputValue));
    } else if (operation) {
      const currentValueNum = parseFloat(currentValue || '0');
      const storedValueNum = parseFloat(storedValue);

      let newValue: number;

      switch (operation) {
        case '+':
          newValue = storedValueNum + currentValueNum;
          break;
        case '-':
          newValue = storedValueNum - currentValueNum;
          break;
        case '×':
          newValue = storedValueNum * currentValueNum;
          break;
        case '÷':
          newValue = storedValueNum / currentValueNum;
          break;
        default:
          newValue = currentValueNum;
      }

      setDisplay(String(newValue));
      setStoredValue(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculateResult = () => {
    if (!operation || storedValue === null) {
      return;
    }

    const currentValueNum = parseFloat(currentValue || '0');
    const storedValueNum = parseFloat(storedValue);

    let newValue: number;

    switch (operation) {
      case '+':
        newValue = storedValueNum + currentValueNum;
        break;
      case '-':
        newValue = storedValueNum - currentValueNum;
        break;
      case '×':
        newValue = storedValueNum * currentValueNum;
        break;
      case '÷':
        newValue = storedValueNum / currentValueNum;
        break;
      default:
        newValue = currentValueNum;
    }

    setDisplay(String(newValue));
    setStoredValue(null);
    setCurrentValue(String(newValue));
    setOperation(null);
    setWaitingForOperand(true);
  };

  // Memory functions
  const memoryClear = () => {
    setMemory(null);
  };

  const memoryRecall = () => {
    if (memory !== null) {
      setDisplay(memory);
      setCurrentValue(memory);
    }
  };

  const memoryAdd = () => {
    if (memory === null) {
      setMemory(display);
    } else {
      setMemory(String(parseFloat(memory) + parseFloat(display)));
    }
    setWaitingForOperand(true);
  };

  const memorySubtract = () => {
    if (memory === null) {
      setMemory(String(-parseFloat(display)));
    } else {
      setMemory(String(parseFloat(memory) - parseFloat(display)));
    }
    setWaitingForOperand(true);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-center">Basic Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 p-4 bg-gray-100 rounded-md text-right">
          <div className="text-gray-600 text-sm h-6">
            {storedValue && operation ? `${storedValue} ${operation}` : ''}
          </div>
          <div className="text-3xl font-mono overflow-hidden text-ellipsis">{display}</div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {/* Memory and Clear Row */}
          <Button variant="outline" size="sm" onClick={memoryClear} className="text-calculator-primary">MC</Button>
          <Button variant="outline" size="sm" onClick={memoryRecall} className="text-calculator-primary">MR</Button>
          <Button variant="outline" size="sm" onClick={memoryAdd} className="text-calculator-primary">M+</Button>
          <Button variant="outline" size="sm" onClick={memorySubtract} className="text-calculator-primary">M-</Button>

          {/* Clear and Operations */}
          <Button variant="outline" onClick={clearAll} className="text-destructive">AC</Button>
          <Button variant="outline" onClick={toggleSign} className="text-calculator-primary">±</Button>
          <Button variant="outline" onClick={inputPercent} className="text-calculator-primary">%</Button>
          <Button variant="outline" onClick={() => performOperation('÷')} className="text-calculator-primary">÷</Button>

          {/* Numbers and Operations */}
          <Button variant="outline" onClick={() => inputDigit('7')}>7</Button>
          <Button variant="outline" onClick={() => inputDigit('8')}>8</Button>
          <Button variant="outline" onClick={() => inputDigit('9')}>9</Button>
          <Button variant="outline" onClick={() => performOperation('×')} className="text-calculator-primary">×</Button>

          <Button variant="outline" onClick={() => inputDigit('4')}>4</Button>
          <Button variant="outline" onClick={() => inputDigit('5')}>5</Button>
          <Button variant="outline" onClick={() => inputDigit('6')}>6</Button>
          <Button variant="outline" onClick={() => performOperation('-')} className="text-calculator-primary">-</Button>

          <Button variant="outline" onClick={() => inputDigit('1')}>1</Button>
          <Button variant="outline" onClick={() => inputDigit('2')}>2</Button>
          <Button variant="outline" onClick={() => inputDigit('3')}>3</Button>
          <Button variant="outline" onClick={() => performOperation('+')} className="text-calculator-primary">+</Button>

          {/* Zero and Equals */}
          <Button variant="outline" onClick={() => inputDigit('0')} className="col-span-2">0</Button>
          <Button variant="outline" onClick={inputDecimal}>.</Button>
          <Button onClick={calculateResult} className="bg-calculator-primary text-white hover:bg-blue-600">=</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicCalculator;
