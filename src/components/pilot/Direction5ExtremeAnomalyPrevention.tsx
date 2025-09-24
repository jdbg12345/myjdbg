import React from 'react';
import { AlertTriangle, Wallet, DollarSign, UserX } from 'lucide-react';

export const Direction5ExtremeAnomalyPrevention = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800">方向5：一些极端异常的预防机制</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 钱包预警 */}
        <div className="bg-white rounded-lg p-6 border border-yellow-200">
          <div className="flex items-center space-x-3 mb-4">
            <Wallet className="w-6 h-6 text-yellow-500" />
            <h4 className="text-xl font-bold text-gray-800">钱包预警</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-yellow-700 mb-2">预警场景</div>
              <div className="text-sm text-yellow-600 space-y-2">
                <div>• 账户余额异常波动</div>
                <div>• 大额资金异常流入</div>
                <div>• 钱包操作异常频繁</div>
                <div>• 跨钱包异常转移</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">监控机制</div>
              <div className="text-sm text-blue-600 space-y-2">
                <div>• 实时钱包余额监控</div>
                <div>• 异常资金流动预警</div>
                <div>• 钱包操作行为分析</div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">预期效果</div>
              <div className="text-sm text-green-600">
                及时发现资金异常，防范重大资金风险事件
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <div className="text-sm font-semibold text-yellow-700">实施状态</div>
              <div className="text-sm text-gray-600 mt-1">方案设计中</div>
            </div>
          </div>
        </div>

        {/* 场馆对账 */}
        <div className="bg-white rounded-lg p-6 border border-yellow-200">
          <div className="flex items-center space-x-3 mb-4">
            <DollarSign className="w-6 h-6 text-yellow-500" />
            <h4 className="text-xl font-bold text-gray-800">场馆对账</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-yellow-700 mb-2">对账内容</div>
              <div className="text-sm text-yellow-600 space-y-2">
                <div>• 站点与财务系统对账</div>
                <div>• 场馆账变核对</div>
                <div>• 场馆输赢数据验证</div>
                <div>• 异常数据实时预警</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">技术实现</div>
              <div className="text-sm text-blue-600 space-y-2">
                <div>• MQ消息机制确保数据一致性</div>
                <div>• 多维度对账预警机制</div>
                <div>• 7×24小时实时监控</div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">防护价值</div>
              <div className="text-sm text-green-600">
                构建事后风险防控最后防线，确保异常资金流动第一时间被发现
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <div className="text-sm font-semibold text-yellow-700">开发进度</div>
              <div className="text-sm text-gray-600 mt-1">方案中，待技术评估</div>
            </div>
          </div>
        </div>

        {/* 沉睡用户 */}
        <div className="bg-white rounded-lg p-6 border border-yellow-200">
          <div className="flex items-center space-x-3 mb-4">
            <UserX className="w-6 h-6 text-yellow-500" />
            <h4 className="text-xl font-bold text-gray-800">沉睡用户</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-yellow-700 mb-2">风险识别</div>
              <div className="text-sm text-yellow-600 space-y-2">
                <div>• 长期沉睡用户突然活跃</div>
                <div>• 登录设备/IP异常变化</div>
                <div>• 账户行为模式突变</div>
                <div>• 潜在账号盗用风险</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">预警机制</div>
              <div className="text-sm text-blue-600 space-y-2">
                <div>• 沉睡用户活跃预警</div>
                <div>• 异常行为模式检测</div>
                <div>• 提款拦截机制</div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">安全保障</div>
              <div className="text-sm text-green-600">
                有效防范账号盗用和异常操作，保护用户资金安全
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <div className="text-sm font-semibold text-yellow-700">开发状态</div>
              <div className="text-sm text-gray-600 mt-1">方案中，预计Q3启动</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 rounded-lg p-6">
        <div className="text-center">
          <h4 className="text-xl font-bold text-yellow-800 mb-4">极端异常预防目标</h4>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600 mb-2">100%</div>
              <div className="text-sm text-yellow-700">异常事件覆盖</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600 mb-2">&lt;5min</div>
              <div className="text-sm text-yellow-700">异常发现时间</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-sm text-yellow-700">全天候监控</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600 mb-2">0</div>
              <div className="text-sm text-yellow-700">重大损失事件目标</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};