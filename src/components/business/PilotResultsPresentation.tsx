import React from 'react';
import { Award } from 'lucide-react';

export const PilotResultsPresentation = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Award className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">三、试点成果呈现</h2>
      </div>

      <div className="bg-white rounded-lg p-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">会员出款风控体系建设成果</h3>
          <p className="text-gray-600 text-lg">
            通过系统化的风控体系建设，我们在事前预警、事中审核、事后监控等各个环节都取得了显著进展
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <h4 className="text-xl font-bold text-blue-700 mb-4">已上线功能</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">风险预警系统</span>
                <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">已上线</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">系统审核策略</span>
                <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">已上线</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">智能派单机制</span>
                <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">已上线</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">内控抽检系统</span>
                <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">已上线</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <h4 className="text-xl font-bold text-blue-700 mb-4">开发中功能</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">人工审核工具</span>
                <span className="text-sm text-yellow-600 bg-yellow-100 px-2 py-1 rounded">开发中</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">B端风控API</span>
                <span className="text-sm text-yellow-600 bg-yellow-100 px-2 py-1 rounded">开发中</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">高级作弊策略</span>
                <span className="text-sm text-yellow-600 bg-yellow-100 px-2 py-1 rounded">开发中</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                <span className="text-gray-700">云盾报告系统</span>
                <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">方案中</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="text-lg font-bold text-blue-700 mb-2">详细试点成果</h4>
            <p className="text-blue-600">
              以下各个模块展示了具体的试点成果和实施细节，每个模块都代表了风控体系的重要组成部分
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};