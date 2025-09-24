import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export const Direction2PersonnelCapability = () => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-4">
        方向2：人的审核不按照标准执行
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1、出款未查看备注标签 */}
        <div className="bg-white rounded-lg p-6 border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <h4 className="text-lg font-bold text-gray-800">出款未查看备注标签</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">标签查看合规率</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">80%</div>
              <div className="text-sm text-gray-600">审核错误率降低</div>
            </div>
            <div className="text-xs text-gray-500">
              通过系统强制要求查看备注标签，确保审核标准执行
            </div>
          </div>
        </div>

        {/* 2、VIP禁用流程 */}
        <div className="bg-white rounded-lg p-6 border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <h4 className="text-lg font-bold text-gray-800">VIP禁用流程</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">流程执行合规率</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-sm text-gray-600">处理效率提升</div>
            </div>
            <div className="text-xs text-gray-500">
              建立标准化VIP禁用流程，确保高价值客户处理的准确性
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};