import React from 'react';
import { TrendingUp } from 'lucide-react';

interface InsightItem {
  text: string;
}

interface DataInsightsProps {
  insights: InsightItem[];
  title?: string;
}

export const DataInsights: React.FC<DataInsightsProps> = ({ insights, title = '数据解读' }) => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="bg-white rounded-lg p-6">
        <div className="space-y-3 text-gray-700">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span dangerouslySetInnerHTML={{ __html: insight.text }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
