import React from 'react';
import { AlertTriangle, Eye, Lock } from 'lucide-react';

export const Direction2StandardExecution = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800">方向2：人的审核不按照标准执行</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 出款未查看备注标签 */}
        <div className="bg-white rounded-lg p-6 border border-orange-200">
          <div className="flex items-center space-x-3 mb-4">
            <Eye className="w-6 h-6 text-orange-500" />
            <h4 className="text-xl font-bold text-gray-800">出款未查看备注标签</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-red-700 mb-2">问题现状</div>
              <div className="text-sm text-red-600 space-y-2">
                <div>• 审核人员未按标准查看会员备注和标签</div>
                <div>• 高盈利标签或高风险标签被忽略</div>
                <div>• 导致风险订单错误通过</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">解决方案</div>
              <div className="text-sm text-blue-600 space-y-2">
                <div>• 高盈利提款强制提醒功能</div>
                <div>• 系统强制显示关键标签信息</div>
                <div>• 审核流程标准化检查点</div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">实施效果</div>
              <div className="text-sm text-green-600">
                强提醒功能已上线，有效降低审核遗漏风险
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <div className="text-sm font-semibold text-orange-700">当前状态</div>
              <div className="text-sm text-gray-600 mt-1">已上线运行，持续优化中</div>
            </div>
          </div>
        </div>

        {/* VIP禁用流程 */}
        <div className="bg-white rounded-lg p-6 border border-orange-200">
          <div className="flex items-center space-x-3 mb-4">
            <Lock className="w-6 h-6 text-orange-500" />
            <h4 className="text-xl font-bold text-gray-800">VIP禁用流程</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-red-700 mb-2">流程问题</div>
              <div className="text-sm text-red-600 space-y-2">
                <div>• VIP用户禁用权限管理不够精细</div>
                <div>• 禁用操作缺乏标准化流程</div>
                <div>• 权限使用缺乏有效监督</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">优化措施</div>
              <div className="text-sm text-blue-600 space-y-2">
                <div>• 建立VIP禁用标准化流程</div>
                <div>• 权限分级管理机制</div>
                <div>• 禁用操作审批流程</div>
                <div>• 操作记录可追溯性</div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">预期收益</div>
              <div className="text-sm text-green-600">
                提升VIP用户管理规范性，降低操作风险
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <div className="text-sm font-semibold text-orange-700">实施进度</div>
              <div className="text-sm text-gray-600 mt-1">流程设计中，预计Q3完成</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};