import React from 'react';
import { EssentialProblemsAndSolutions } from './business/EssentialProblemsAndSolutions';
import { SystemTransformationRhythm } from './business/SystemTransformationRhythm';
import { BusinessOverview2 } from './business/BusinessOverview2';
import { PilotResultsPresentation } from './business/PilotResultsPresentation';

export const BusinessOverview = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">3.0 业务方向及提升策略概览</h1>
      </div>

      {/* 一、体系变革节奏 */}
      <SystemTransformationRhythm />
      
      {/* 二、FK体系概览 */}
      <BusinessOverview2 />
      
      {/* 三、试点成果说明 */}
      <PilotResultsPresentation />
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};