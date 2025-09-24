import React from 'react';
import { EssentialProblemsAndSolutions } from './business/EssentialProblemsAndSolutions';
import { SystemTransformationRhythm } from './business/SystemTransformationRhythm';
import { PilotResultsPresentation } from './business/PilotResultsPresentation';

export const BusinessOverview = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">3.0 业务方向及提升策略概览</h1>
      </div>

      {/* 一、本质问题与解法 */}
      <EssentialProblemsAndSolutions />

      {/* 二、体系变革的节奏 */}
      <SystemTransformationRhythm />

      {/* 三、试点成果呈现 */}
      <PilotResultsPresentation />
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};