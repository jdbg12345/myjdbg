import React from 'react';
import { CheckCircle } from 'lucide-react';

export const EndPage = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-gray-800 mb-6">
          Q3汇报结束
        </h1>

        <p className="text-2xl text-gray-600 font-medium">
          感谢大家建议
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX Q3 REPORT</div>
      </div>
    </div>
  );
};
