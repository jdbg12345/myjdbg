import React from 'react';
import { AlertCircle, Clock, Lightbulb } from 'lucide-react';

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
              <AlertCircle className="w-4 h-4" />
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
              <Clock className="w-4 h-4" />
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
              <Lightbulb className="w-4 h-4" />
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