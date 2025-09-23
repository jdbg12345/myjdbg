import React from 'react';
import { Lightbulb } from 'lucide-react';

export const EssentialProblemsAndSolutions = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">一、本质问题与解法</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">问题</span>
            </div>
            <h3 className="text-xl font-bold text-red-700">核心问题</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">系统审核能力不足</h4>
              <p className="text-red-600 text-sm">缺少作弊拦截策略，导致系统直接出款错误</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">人工审核依赖过重</h4>
              <p className="text-red-600 text-sm">风险识别依赖人工，效率低且错误频发</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">流程机制不完善</h4>
              <p className="text-red-600 text-sm">派单机制简单，缺乏有效的内控监管</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">解法</span>
            </div>
            <h3 className="text-xl font-bold text-green-700">解决方案</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">构建智能风控体系</h4>
              <p className="text-green-600 text-sm">建立50+策略/100+特征的系统审核能力</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">优化人工审核流程</h4>
              <p className="text-green-600 text-sm">提供风控工具和云盾报告，提升审核效率</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">完善内控监管机制</h4>
              <p className="text-green-600 text-sm">建立智能派单和内控抽检体系</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};