import React from 'react';
import { Shield } from 'lucide-react';
import { Direction4InternalCollusion } from './pilot/Direction4InternalCollusion';

export const InternalControlOverview = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between border-b-4 border-blue-600 pb-4 mb-4">
          <h1 className="text-5xl font-bold text-gray-800">3.3 内控风控说明</h1>
          <div className="text-gray-500 text-base">
            <span>下一节：</span>
            <span className="font-medium ml-2">代理风控说明</span>
          </div>
        </div>
        <div className="text-gray-600 text-lg">
          <p className="text-gray-700 text-lg leading-relaxed font-semibold">内控问题主要从<span className="text-blue-600">信息安全、违规操作</span>方向进行优化</p>
        </div>
      </div>   

      {/* 内控问题优化 */}
      <Direction4InternalCollusion />
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX Q3 REPORT</div>
      </div>
    </div>
  );
};