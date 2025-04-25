
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface CalculatorCardProps {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
}

const CalculatorCard = ({ title, description, path, icon }: CalculatorCardProps) => {
  return (
    <Link to={path} className="group">
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:border-calculator-primary">
        <CardHeader className="pb-2">
          <div className="mb-2 h-12 w-12 rounded-full bg-calculator-muted p-2 flex items-center justify-center text-calculator-primary group-hover:bg-calculator-primary group-hover:text-white transition-all duration-200">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-6">
          <div className="text-sm text-calculator-primary font-medium group-hover:translate-x-1 transition-transform duration-200">
            Try Calculator →
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CalculatorCard;
