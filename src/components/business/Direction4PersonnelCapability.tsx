import React from 'react';
import { AlertCircle, Settings } from 'lucide-react';

export const Direction4PersonnelCapability = () => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-600 pl-4">
        方向4：内外的人员进行勾结串联
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 风控标签 */}
        <div className="bg-white rounded-lg p-6 border border-red-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center">
              <AlertCircle className="w-4 h-4" />
            </div>
            <h4 className="text-lg font-bold text-gray-800">风控标签</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">敏感操作监控覆盖</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">异常行为识别率</div>
            </div>
            <div className="text-xs text-gray-500">
              对风控标签的查看和修改进行全面监控，防止内部泄露
            </div>
          </div>
        </div>

        {/* 动态参数 */}
        <div className="bg-white rounded-lg p-6 border border-red-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center">
              <Settings className="w-4 h-4" />
            </div>
            <h4 className="text-lg font-bold text-gray-800">动态参数</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">实时监控</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-sm text-gray-600">参数异常检测率</div>
            </div>
            <div className="text-xs text-gray-500">
              对系统参数的修改进行实时监控，防止内部人员恶意调整
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};