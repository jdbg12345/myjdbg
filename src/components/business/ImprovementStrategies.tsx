import React from 'react';
import { TrendingUp } from 'lucide-react';

export const ImprovementStrategies = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">二、提升策略</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <h3 className="text-xl font-bold text-gray-800">系统化建设</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-blue-200 rounded-lg p-3">
              <div className="text-sm text-blue-600">• 完善风控策略引擎</div>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-3">
              <div className="text-sm text-blue-600">• 建立智能派单机制</div>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-3">
              <div className="text-sm text-blue-600">• 优化预警系统</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <h3 className="text-xl font-bold text-gray-800">流程优化</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-blue-200 rounded-lg p-3">
              <div className="text-sm text-blue-600">• 简化审核流程</div>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-3">
              <div className="text-sm text-blue-600">• 建立内控抽检机制</div>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-3">
              <div className="text-sm text-blue-600">• 完善质检体系</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <h3 className="text-xl font-bold text-gray-800">能力提升</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-blue-200 rounded-lg p-3">
              <div className="text-sm text-blue-600">• 加强人员培训</div>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-3">
              <div className="text-sm text-blue-600">• 建立知识库</div>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-3">
              <div className="text-sm text-blue-600">• 提升技术能力</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};