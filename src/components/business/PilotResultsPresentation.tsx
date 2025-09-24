import React from 'react';
import { Award } from 'lucide-react';
import { Direction1PersonnelCapability } from './Direction1PersonnelCapability';
import { Direction2PersonnelCapability } from './Direction2PersonnelCapability';
import { Direction3PersonnelCapability } from './Direction3PersonnelCapability';
import { Direction4PersonnelCapability } from './Direction4PersonnelCapability';
import { Direction5PersonnelCapability } from './Direction5PersonnelCapability';

export const PilotResultsPresentation = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Award className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">三、试点成果呈现</h2>
      </div>

      {/* 方向1：人员的风控能力参差不齐 */}
      <Direction1PersonnelCapability />

      {/* 方向2：人的审核不按照标准执行 */}
      <Direction2PersonnelCapability />

      {/* 方向3：系统审核策略的维度缺失 */}
      <Direction3PersonnelCapability />

      {/* 方向4：内外的人员进行勾结串联 */}
      <Direction4PersonnelCapability />

      {/* 方向5：一些极端异常的预防机制 */}
      <Direction5PersonnelCapability />

      <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
    </div>
  );
};