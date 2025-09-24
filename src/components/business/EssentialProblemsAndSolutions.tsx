import React from 'react';
import { AlertTriangle, Target, TrendingUp, Shield, Users } from 'lucide-react';

export const EssentialProblemsAndSolutions = () => {
  const problemSolutions = [
    {
      problem: "人员的风控能力参差不齐",
      solution: "建立分级派单机制和能力评估体系",
      description: "通过风险分数和金额双重维度进行智能派单，确保合适的人处理合适难度的订单",
      impact: "降低错误出款15-20%",
      color: "bg-red-100 text-red-700"
    },
    {
      problem: "人的审核不按照标准执行",
      solution: "强制执行标准化审核流程",
      description: "通过系统强制提醒和流程控制，确保关键步骤不被跳过",
      impact: "提升审核标准化程度90%",
      color: "bg-orange-100 text-orange-700"
    },
    {
      problem: "系统审核策略的维度缺失",
      solution: "补充50+套利识别策略",
      description: "覆盖电子、真人、体育、彩票、棋牌等各游戏类型的作弊识别",
      impact: "系统拦截率提升至90%+",
      color: "bg-yellow-100 text-yellow-700"
    },
    {
      problem: "内外的人员进行勾结串联",
      solution: "建立权限分级和操作审计机制",
      description: "通过精细化权限管理和完整操作日志，防范内部风险",
      impact: "内部风险事件降低80%",
      color: "bg-green-100 text-green-700"
    },
    {
      problem: "一些极端异常的预防机制",
      solution: "建立多维度异常预警体系",
      description: "针对钱包异常、场馆多钱、沉睡用户等极端情况的实时监控",
      impact: "异常发现率提升85%+",
      color: "bg-blue-100 text-blue-700"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">一、本质问题与解法</h2>
      </div>

      <div className="bg-red-50 rounded-xl p-6 mb-8">
        <p className="text-lg text-red-900 leading-relaxed">
          <span className="font-semibold">风控的核心挑战在于"人"的不确定性。</span>
          无论是能力差异、执行标准不一、还是内外勾结，都源于对人的过度依赖。我们的目标是通过系统化、智能化手段，最大程度减少人为因素的影响，构建稳定可靠的风控体系。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {problemSolutions.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">核心问题</h4>
                    <p className="text-gray-700 text-sm">{item.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">解决方案</h4>
                    <p className="text-gray-700 text-sm">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">实施策略</h4>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">预期收益</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${item.color}`}>
                      {item.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};