
import React from 'react';

interface AdPlaceholderProps {
  width?: string;
  height?: string;
}

const AdPlaceholder = ({ width = "100%", height = "90px" }: AdPlaceholderProps) => {
  return (
    <div 
      className="bg-gray-100 border border-dashed border-gray-300 rounded-md flex items-center justify-center my-4"
      style={{ width, height }}
    >
      <p className="text-gray-500 text-sm">Advertisement Placeholder</p>
    </div>
  );
};

export default AdPlaceholder;
