import React from 'react';
import { EssentialProblemsAndSolutions } from './business/EssentialProblemsAndSolutions';
import { SystemTransformationRhythm } from './business/SystemTransformationRhythm';
import { PilotResultsPresentation } from './business/PilotResultsPresentation';
import { Direction1PersonnelCapability } from './business/Direction1PersonnelCapability';
import { Direction2PersonnelCapability } from './business/Direction2PersonnelCapability';
import { Direction3PersonnelCapability } from './business/Direction3PersonnelCapability';
import { Direction4PersonnelCapability } from './business/Direction4PersonnelCapability';
import { Direction5PersonnelCapability } from './business/Direction5PersonnelCapability';

export const BusinessOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 relative">
      {/* 标题 */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">3.0 FKZX-业务方向及提升策略概览</h1>
      </div>
      
      {/* 导入的子组件 */}
      <EssentialProblemsAndSolutions />
      <SystemTransformationRhythm />
      <PilotResultsPresentation />
      <Direction1PersonnelCapability />
      <Direction2PersonnelCapability />
      <Direction3PersonnelCapability />
      <Direction4PersonnelCapability />
      <Direction5PersonnelCapability />
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};