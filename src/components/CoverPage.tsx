import React from 'react';

export const CoverPage = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 min-h-screen flex flex-col justify-center items-center text-center relative">
      <h1 className="text-6xl font-bold text-blue-600 mb-8">FKZX Q3 Report</h1>
      <div className="text-2xl text-gray-600 font-medium">2025年10月05日</div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};