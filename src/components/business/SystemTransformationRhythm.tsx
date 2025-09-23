import React from 'react';
import { TrendingUp } from 'lucide-react';

export const SystemTransformationRhythm = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">二、体系变革的节奏</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">Q2</div>
            <h3 className="text-xl font-bold text-gray-800">基础建设期</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
              <div className="font-semibold text-blue-700 text-sm mb-1">系统能力建设</div>
              <div className="text-blue-600 text-xs">建立基础风控策略和预警机制</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
              <div className="font-semibold text-blue-700 text-sm mb-1">流程优化</div>
              <div className="text-blue-600 text-xs">完善派单机制和内控抽检</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
              <div className="font-semibold text-blue-700 text-sm mb-1">工具建设</div>
              <div className="text-blue-600 text-xs">开发人工审核辅助工具</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">Q3</div>
            <h3 className="text-xl font-bold text-gray-800">能力提升期</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
              <div className="font-semibold text-green-700 text-sm mb-1">策略完善</div>
              <div className="text-green-600 text-xs">补充更多作弊拦截策略</div>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
              <div className="font-semibold text-green-700 text-sm mb-1">效率优化</div>
              <div className="text-green-600 text-xs">提升系统审核和人工审核效率</div>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
              <div className="font-semibold text-green-700 text-sm mb-1">质量提升</div>
              <div className="text-green-600 text-xs">降低错误出款率</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">Q4</div>
            <h3 className="text-xl font-bold text-gray-800">智能化期</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-500">
              <div className="font-semibold text-purple-700 text-sm mb-1">AI能力引入</div>
              <div className="text-purple-600 text-xs">引入机器学习和AI大模型</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-500">
              <div className="font-semibold text-purple-700 text-sm mb-1">跨站融合</div>
              <div className="text-purple-600 text-xs">实现多站点数据融合分析</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-500">
              <div className="font-semibold text-purple-700 text-sm mb-1">外部能力</div>
              <div className="text-purple-600 text-xs">引入B端和外部数据能力</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};