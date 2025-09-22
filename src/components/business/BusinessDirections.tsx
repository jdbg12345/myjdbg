import React from 'react';
import { Target } from 'lucide-react';

export const BusinessDirections = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Target className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">一、业务方向</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <h3 className="text-xl font-bold text-gray-800">降本增效</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">降本</h4>
              <p className="text-gray-700 text-sm">通过系统化、自动化手段，减少对人工审核的依赖，降低人力成本和运营成本</p>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">增效</h4>
              <p className="text-gray-700 text-sm">提升审核效率和准确性，缩短处理时间，提高整体业务处理能力</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <h3 className="text-xl font-bold text-gray-800">提升拦截质量</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">系统拦截</h4>
              <p className="text-gray-700 text-sm">建立完善的风控策略体系，提高系统自动拦截的准确率和覆盖面</p>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">人工审核</h4>
              <p className="text-gray-700 text-sm">优化人工审核流程，提供更好的工具支持，降低审核错误率</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};