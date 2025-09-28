import React from 'react';
import { Shield, Users, TrendingUp } from 'lucide-react';

export const FKSystemOverview = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">
          3.2 FK体系概览
        </h1>
      </div>

      {/* 2.2 FK能力变化 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">2.2</div>
            <h3 className="text-2xl font-bold text-gray-800">FK能力变化</h3>
            <span className="text-gray-600 text-lg">防御型策略 → 多维度策略（防御 + 套利 + 作弊），降低系统出款风险</span>
          </div>
        </div>

        {/* 玩家风险防控 */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200 mb-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">玩家风险防控</h4>
                <div className="flex items-center space-x-6">
                  <div className="text-3xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-500">完善度</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600 font-medium">+25%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-blue-100">
              <h5 className="text-xl font-bold text-blue-800 mb-4">账户安全类</h5>
              <div className="grid grid-cols-3 gap-2 text-sm font-medium text-gray-600 border-b pb-1 mb-2">
                <span>项目</span>
                <span>状态</span>
                <span>Q3变化</span>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-2 items-center">
                  <span>敏感信息变更</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">试运行</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">增强</span>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                  <span>帐变记录异常</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">开发中</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-700">新增</span>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                  <span>睡眠账号激活</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">试运行</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">增强</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 内控风险监控 */}
        <div className="bg-blue-50 rounded-xl p-8 border border-blue-200 mt-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 rounded-xl bg-blue-500 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-800">内控风险监控</h4>
              <div className="flex items-center space-x-6">
                <div className="text-3xl font-bold text-blue-600">85%</div>
                <div className="text-sm text-gray-500">完善度</div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 font-medium">+25%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-blue-100">
            <h5 className="text-xl font-bold text-blue-800 mb-4">信息安全类</h5>
            <div className="grid grid-cols-3 gap-2 text-sm font-medium text-gray-600 border-b pb-1 mb-2">
              <span>项目</span>
              <span>状态</span>
              <span>Q3变化</span>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-2 items-center">
                <span>泄漏风控标签和备注</span>
                <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">试运行</span>
                <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">增强</span>
              </div>
              <div className="grid grid-cols-3 gap-2 items-center">
                <span>敏感信息明文查询</span>
                <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">开发中</span>
                <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-700">新增</span>
              </div>
            </div>
          </div>
        </div>

        {/* 代理网络监控 */}
        <div className="bg-blue-50 rounded-xl p-8 border border-blue-200 mt-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 rounded-xl bg-blue-500 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-800">代理网络监控</h4>
              <div className="flex items-center space-x-6">
                <div className="text-3xl font-bold text-blue-600">72%</div>
                <div className="text-sm text-gray-500">完善度</div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 font-medium">+15%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-blue-100">
            <h5 className="text-xl font-bold text-blue-800 mb-4">佣金审核</h5>
            <div className="grid grid-cols-3 gap-2 text-sm font-medium text-gray-600 border-b pb-1 mb-2">
              <span>项目</span>
              <span>状态</span>
              <span>Q3变化</span>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-2 items-center">
                <span>审核流程</span>
                <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">试运行</span>
                <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-700">新增</span>
              </div>
              <div className="grid grid-cols-3 gap-2 items-center">
                <span>代理质量</span>
                <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">开发中</span>
                <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">增强</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};
