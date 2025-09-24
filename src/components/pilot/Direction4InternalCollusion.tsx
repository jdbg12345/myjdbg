import React from 'react';
import { Shield, Tag, Settings } from 'lucide-react';

export const Direction4InternalCollusion = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800">方向4：内外的人员进行勾结串联</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 风控标签 */}
        <div className="bg-white rounded-lg p-6 border border-red-200">
          <div className="flex items-center space-x-3 mb-4">
            <Tag className="w-6 h-6 text-red-500" />
            <h4 className="text-xl font-bold text-gray-800">风控标签</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-red-700 mb-2">安全风险</div>
              <div className="text-sm text-red-600 space-y-2">
                <div>• 敏感标签信息可能被泄露</div>
                <div>• 内部人员与外部勾结获取会员信息</div>
                <div>• 标签查看权限管理不够精细</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">防范措施</div>
              <div className="text-sm text-blue-600 space-y-2">
                <div>• 标签查看权限分级管理</div>
                <div>• 敏感信息查询日志记录</div>
                <div>• 查看操作实时监控预警</div>
                <div>• 权限使用异常行为检测</div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">实施效果</div>
              <div className="text-sm text-green-600">
                标签查看权限已升级，由原来打开页面即可看到升级为须点击查询才可看到，并保留完整日志记录
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-red-200">
              <div className="text-sm font-semibold text-red-700">当前状态</div>
              <div className="text-sm text-gray-600 mt-1">已上线，持续监控中</div>
            </div>
          </div>
        </div>

        {/* 动态参数 */}
        <div className="bg-white rounded-lg p-6 border border-red-200">
          <div className="flex items-center space-x-3 mb-4">
            <Settings className="w-6 h-6 text-red-500" />
            <h4 className="text-xl font-bold text-gray-800">动态参数</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-red-700 mb-2">参数风险</div>
              <div className="text-sm text-red-600 space-y-2">
                <div>• 风控策略参数可能被恶意修改</div>
                <div>• 内部人员调整参数规避检测</div>
                <div>• 参数变更缺乏有效监督</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">控制机制</div>
              <div className="text-sm text-blue-600 space-y-2">
                <div>• 参数修改权限严格控制</div>
                <div>• 参数变更审批流程</div>
                <div>• 参数修改日志完整记录</div>
                <div>• 异常参数变更实时预警</div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">监控体系</div>
              <div className="text-sm text-green-600">
                建立参数变更监控体系，确保所有策略参数变更都有完整的审批和记录流程
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-red-200">
              <div className="text-sm font-semibold text-red-700">实施进度</div>
              <div className="text-sm text-gray-600 mt-1">监控机制设计中，预计Q3完成</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-red-50 rounded-lg p-6">
        <div className="text-center">
          <h4 className="text-xl font-bold text-red-800 mb-4">内控安全防护目标</h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <div className="text-2xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-sm text-red-700">敏感操作记录覆盖</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <div className="text-2xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-sm text-red-700">实时监控预警</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <div className="text-2xl font-bold text-red-600 mb-2">0</div>
              <div className="text-sm text-red-700">内外勾结事件目标</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};