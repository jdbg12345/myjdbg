import React from 'react';
import { Target } from 'lucide-react';
import { Direction1PersonnelCapability } from '../pilot/Direction1PersonnelCapability';
import { Direction2StandardExecution } from '../pilot/Direction2StandardExecution';
import { Direction3SystemStrategies } from '../pilot/Direction3SystemStrategies';
import { Direction4InternalCollusion } from '../pilot/Direction4InternalCollusion';
import { Direction5ExtremeAnomalyPrevention } from '../pilot/Direction5ExtremeAnomalyPrevention';
import { Award } from 'lucide-react';

export const PilotResultsPresentation = () => {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
          <Target className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">二、试点成果说明</h2>
      </div>
      {/* 体系定义 */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200">
        <p className="text-gray-700 leading-relaxed">
          在风控中，"人"是所有问题的根源。长期目标是不依赖"人"，压缩人的操作比重与空间，由系统自动完成大部分判定，覆盖策略、流程、内控与预警。当人的执行结果与系统偏差超出预设范围时，会触发内控二次审核，提升风控质量与稳定性，构建高效可靠的防护体系，使违规者成本与风险极高、几乎无操作空间。
        </p>
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