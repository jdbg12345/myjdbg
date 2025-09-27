import React from 'react';
import { Target } from 'lucide-react';
import { Direction1PersonnelCapability } from './pilot/Direction1PersonnelCapability';
import { Direction2StandardExecution } from './pilot/Direction2StandardExecution';
import { Direction3SystemStrategies } from './pilot/Direction3SystemStrategies';
import { Direction4InternalCollusion } from './pilot/Direction4InternalCollusion';
import { Direction5ExtremeAnomalyPrevention } from './pilot/Direction5ExtremeAnomalyPrevention';

export const PilotResults = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">3.3 FKZX-FK试点成果</h1>
      </div>   

      {/* 各个方向的试点成果 */}
      <Direction1PersonnelCapability />
      <Direction2StandardExecution />
      <Direction3SystemStrategies />
      <Direction4InternalCollusion />
      <Direction5ExtremeAnomalyPrevention />
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};