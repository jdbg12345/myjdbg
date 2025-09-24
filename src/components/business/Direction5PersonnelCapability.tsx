import React from 'react';

export const Direction5PersonnelCapability = () => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-orange-600 pl-4">
        方向5：一些极端异常的预防机制
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 钱包预警 */}
        <div className="bg-white rounded-lg p-6 border border-orange-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">钱包预警</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">异常资金流动检测</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">5秒</div>
              <div className="text-sm text-gray-600">预警响应时间</div>
            </div>
            <div className="text-xs text-gray-500">
              对钱包异常变动进行实时监控，第一时间发现资金风险
            </div>
          </div>
        </div>

        {/* 场馆多钱 */}
        <div className="bg-white rounded-lg p-6 border border-orange-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">场馆多钱</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">场馆资金监控覆盖</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">异常识别准确率</div>
            </div>
            <div className="text-xs text-gray-500">
              监控场馆资金异常增加，防范技术手段非法获利
            </div>
          </div>
        </div>

        {/* 沉睡用户 */}
        <div className="bg-white rounded-lg p-6 border border-orange-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">沉睡用户</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">异常激活识别率</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">盗号风险拦截率</div>
            </div>
            <div className="text-xs text-gray-500">
              监控长期沉睡用户的异常激活，防范账号被盗用风险
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};