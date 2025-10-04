import React from 'react';
import { BarChart3, TrendingUp, AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface InsightItem {
  text: string;
  type?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

interface DataInsightsProps {
  insights: InsightItem[];
  title?: string;
}

export const DataInsights: React.FC<DataInsightsProps> = ({ insights, title = '数据解读' }) => {
  const getIcon = (type: InsightItem['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'danger':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-600" />;
      default:
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
    }
  };

  const getBorderColor = (type: InsightItem['type']) => {
    switch (type) {
      case 'success':
        return 'border-l-green-500';
      case 'warning':
        return 'border-l-yellow-500';
      case 'danger':
        return 'border-l-red-500';
      case 'info':
        return 'border-l-blue-500';
      default:
        return 'border-l-gray-400';
    }
  };

  const getBgColor = (type: InsightItem['type']) => {
    switch (type) {
      case 'success':
        return 'bg-green-50';
      case 'warning':
        return 'bg-yellow-50';
      case 'danger':
        return 'bg-red-50';
      case 'info':
        return 'bg-blue-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 mb-8 border border-blue-100 shadow-sm">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className={`flex items-start space-x-4 p-4 rounded-lg border-l-4 ${getBorderColor(insight.type)} ${getBgColor(insight.type)} transition-all hover:shadow-md`}
          >
            <div className="flex-shrink-0 mt-0.5">
              {getIcon(insight.type)}
            </div>
            <div className="flex-1">
              <p
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: insight.text }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
