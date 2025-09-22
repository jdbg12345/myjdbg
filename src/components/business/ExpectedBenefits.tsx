import React from 'react';
import { Award } from 'lucide-react';

export const ExpectedBenefits = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Award className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">三、预期收益</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">$</div>
            <h3 className="text-xl font-bold text-gray-800">定量收益</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">成本节约</h4>
              <div className="text-gray-700 text-sm space-y-1">
                <div>• 减少人工审核成本 30%</div>
                <div>• 提升处理效率 50%</div>
                <div>• 降低错误率 80%</div>
              </div>
            </div>
            <div className="bg-white border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">风险防控</h4>
              <div className="text-gray-700 text-sm space-y-1">
                <div>• 系统拦截收益：千万级/月</div>
                <div>• 减少损失：百万级/月</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">★</div>
            <h3 className="text-xl font-bold text-gray-800">定性收益</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">业务能力</h4>
              <div className="text-gray-700 text-sm space-y-1">
                <div>• 提升风控专业度</div>
                <div>• 增强系统稳定性</div>
                <div>• 优化用户体验</div>
              </div>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">团队发展</h4>
              <div className="text-gray-700 text-sm space-y-1">
                <div>• 提升团队技能</div>
                <div>• 建立标准化流程</div>
                <div>• 积累业务经验</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};