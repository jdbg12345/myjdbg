import React from 'react';
import { Award } from 'lucide-react';
import { Direction1PersonnelCapability } from '../pilot/Direction1PersonnelCapability';
import { Direction2StandardExecution } from '../pilot/Direction2StandardExecution';
import { Direction3SystemStrategies } from '../pilot/Direction3SystemStrategies';
import { Direction4InternalCollusion } from '../pilot/Direction4InternalCollusion';
import { Direction5ExtremeAnomalyPrevention } from '../pilot/Direction5ExtremeAnomalyPrevention';

export const PilotResultsPresentation = () => {
  return (
    <div className="space-y-8">
      {/* 标题 */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Award className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">三、试点成果呈现</h2>
      </div>

      {/* 试点成果概览 */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">试点成果概览</h3>
          <p className="text-gray-600 text-lg">
            通过系统化的试点实施，在多个关键方向取得显著成效，为全面推广奠定坚实基础
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-gray-600 font-medium">试点方向</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">已上线功能</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
            <div className="text-3xl font-bold text-yellow-600 mb-2">20+</div>
            <div className="text-gray-600 font-medium">开发中功能</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">50%+</div>
            <div className="text-gray-600 font-medium">效率提升</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
            <div className="text-3xl font-bold text-red-600 mb-2">90%+</div>
            <div className="text-gray-600 font-medium">目标拦截率</div>
          </div>
        </div>
      </div>

      {/* 各个方向的试点成果 */}
      <Direction1PersonnelCapability />
      <Direction2StandardExecution />
      <Direction3SystemStrategies />
      <Direction4InternalCollusion />
      <Direction5ExtremeAnomalyPrevention />
    </div>
  );
};