import React from 'react';
import { Calendar } from 'lucide-react';

export const ImplementationPlan = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">四、实施计划</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">Q3</div>
            <h3 className="text-xl font-bold text-gray-800">第三季度重点</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">系统建设</h4>
              <div className="text-gray-700 text-sm space-y-1">
                <div>• 完善风控策略引擎</div>
                <div>• 优化派单机制</div>
                <div>• 建立内控抽检</div>
              </div>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">流程优化</h4>
              <div className="text-gray-700 text-sm space-y-1">
                <div>• 简化审核流程</div>
                <div>• 建立质检体系</div>
                <div>• 完善培训机制</div>
              </div>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">能力提升</h4>
              <div className="text-gray-700 text-sm space-y-1">
                <div>• 加强人员培训</div>
                <div>• 建立知识库</div>
                <div>• 提升技术能力</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">Q4</div>
            <h3 className="text-xl font-bold text-gray-800">第四季度目标</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">系统完善</h4>
              <div className="text-gray-700 text-sm space-y-1">
                <div>• 系统拦截率达到 90%+</div>
                <div>• 审核效率提升 50%</div>
                <div>• 错误率降低 80%</div>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">业务目标</h4>
              <div className="text-gray-700 text-sm space-y-1">
                <div>• 实现降本增效目标</div>
                <div>• 建立完善的风控体系</div>
                <div>• 提升整体业务能力</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};