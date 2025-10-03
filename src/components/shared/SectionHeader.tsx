import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  nextSection?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, nextSection }) => {
  return (
    <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-blue-600">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      {nextSection && (
        <div className="flex items-center space-x-2 text-gray-500 text-sm">
          <span>下一节：</span>
          <span className="font-medium">{nextSection}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};
