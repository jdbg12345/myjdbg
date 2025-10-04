import React from 'react';
import { Target } from 'lucide-react';
import { Direction1PersonnelCapability } from './pilot/Direction1PersonnelCapability';
import { Direction3SystemStrategies } from './pilot/Direction3SystemStrategies';
import { Direction4InternalCollusion } from './pilot/Direction4InternalCollusion';

export const PilotResults = () => {
  return (
    <div className="bg-white rounded-lg p-10 mb-6 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 border-b-4 border-blue-600 pb-4 mb-4">3.3 成果说明</h1>
        <div className="text-gray-600 text-lg">
        <p className="text-gray-700 text-lg leading-relaxed font-semibold">从<span className="text-blue-600">审核问题-质量较差、系统问题-支持不够、内控问题-违规行为</span>等三个方向进行优化</p>
        </div>
      </div>   

      {/* 各个方向的试点成果 */}
      <div data-section="pilot-direction1">
        <Direction1PersonnelCapability />
      </div>
      
      <div data-section="pilot-direction2">
        <Direction3SystemStrategies />
      </div>
      
      <div data-section="pilot-direction3">
        <Direction4InternalCollusion />
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">Q3 REPORT</div>
      </div>
    </div>
  );
};