import React from 'react';
import { Users, Target, TrendingUp, Shield, Search, CheckCircle, Settings } from 'lucide-react';

export const Direction1PersonnelCapability = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Users className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800">方向1：人员的风控能力参差不齐</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* 派单策略变革效果 */}
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <Target className="w-6 h-6 text-blue-500" />
            <h4 className="text-lg font-bold text-gray-800">派单策略变革效果</h4>
          </div>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">优化前</div>
              <div className="text-xs text-blue-600">仅按金额派单，新人可能接到高风险订单</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">优化后</div>
              <div className="text-xs text-green-600">按【风险分数+金额】派单，确保合适人员处理对应难度订单</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="text-xs font-semibold text-blue-700">预期效果</div>
              <div className="text-xs text-gray-600 mt-1">降低错误出款风险30%+</div>
            </div>
          </div>
        </div>

        {/* 风险云盾分数效果 */}
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-blue-500" />
            <h4 className="text-lg font-bold text-gray-800">风险云盾分数效果</h4>
          </div>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">核心功能</div>
              <div className="text-xs text-blue-600">基于模型自动生成风控报告，审核人员只需确认重点</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">预期收益</div>
              <div className="text-xs text-green-600">提升审核效率50%+，确保SOP严格执行</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="text-xs font-semibold text-blue-700">当前状态</div>
              <div className="text-xs text-gray-600 mt-1">方案设计中</div>
            </div>
          </div>
        </div>

        {/* 关联下注工具 */}
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <Search className="w-6 h-6 text-blue-500" />
            <h4 className="text-lg font-bold text-gray-800">关联下注工具</h4>
          </div>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">工具类型</div>
              <div className="text-xs text-blue-600 space-y-1">
                <div>• 多账号对打查询工具</div>
                <div>• 百家乐对打查询工具</div>
                <div>• 体育对打查询工具</div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">预期效果</div>
              <div className="text-xs text-green-600">提升审核效率50%，快速识别对打行为</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="text-xs font-semibold text-blue-700">进度状态</div>
              <div className="text-xs text-gray-600 mt-1">开发中，预计7-8月完成</div>
            </div>
          </div>
        </div>

        {/* 提款流水工具 */}
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle className="w-6 h-6 text-blue-500" />
            <h4 className="text-lg font-bold text-gray-800">提款流水工具</h4>
          </div>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">优化内容</div>
              <div className="text-xs text-blue-600">优化流水计算逻辑，增加流水差额提醒</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">用户体验</div>
              <div className="text-xs text-green-600">减少因流水问题反复被拒的情况</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="text-xs font-semibold text-blue-700">实施状态</div>
              <div className="text-xs text-gray-600 mt-1">一期已上线，二三期开发中</div>
            </div>
          </div>
        </div>

        {/* 体育打水工具 */}
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <Settings className="w-6 h-6 text-blue-500" />
            <h4 className="text-lg font-bold text-gray-800">体育打水工具</h4>
          </div>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">检测能力</div>
              <div className="text-xs text-blue-600 space-y-1">
                <div>• 优势赔率利用分析</div>
                <div>• 危险球下注识别</div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">技术要求</div>
              <div className="text-xs text-green-600">需要B端支持提供相关数据接口</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="text-xs font-semibold text-blue-700">预计时间</div>
              <div className="text-xs text-gray-600 mt-1">8月底完成</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};