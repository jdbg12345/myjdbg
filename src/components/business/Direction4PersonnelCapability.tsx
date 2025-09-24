import React from 'react';

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
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
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
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
              </svg>
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