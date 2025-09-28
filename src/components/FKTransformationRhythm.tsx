import React from 'react';
import { Calendar, AlertTriangle, Target, CheckCircle, Clock, Users, Shield, Award, BarChart3 } from 'lucide-react';

export const FKTransformationRhythm = () => {
  const progressSchedule = [
    {
      time: "Q1",
      stage: "梳理规划",
      work: "对业务和组织现状进行梳理，识别问题并制定针对性解决策略",
      result: "已完成",
      status: "completed"
    },
    {
      time: "Q2",
      stage: "逐步落地",
      work: "推动技术及相关业务协同，进行系统改造、流程优化、标准对齐",
      result: "已完成",
      status: "completed"
    },
    {
      time: "Q3",
      stage: "试点验证",
      work: "选择核心业务场景进行小范围试点，验证新机制的有效性和可行性",
      result: "进行中",
      status: "current"
    },
    {
      time: "Q4",
      stage: "全面推广",
      work: "完成核心功能的全面部署，实现人工审核向系统审核的根本性转变",
      result: "待开始",
      status: "pending"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">
          3.1 FK整体说明
        </h1>
      </div>

      {/* 核心问题 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">核心问题</h2>
            <span className="text-gray-600 text-lg">即使问题很多，逐步拆解解决中</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 问题1 */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-sm">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-red-800 mb-3">审核问题-质量较差</h4>
                  <p className="text-red-700 leading-relaxed">
                    人员能力参差不齐，新人及外包团队错误率高；审核操作未严格遵循SOP；时间考核压力导致无法充分审核。
                  </p>
                </div>
              </div>
            </div>

            {/* 问题2 */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-sm">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-red-800 mb-3">内控问题-违规行为</h4>
                  <p className="text-red-700 leading-relaxed">
                    存在信息泄漏、强制出款等违规行为，在机制和流程上无法做到有效根除。
                  </p>
                </div>
              </div>
            </div>

            {/* 问题3 */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-sm">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-red-800 mb-3">系统问题-支持不够</h4>
                  <p className="text-red-700 leading-relaxed">
                    策略偏防御型，缺乏套利及作弊识别能力，且缺少标准化工具支持以提升效率。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 困难挑战 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">面对困难</h2>
            <span className="text-gray-600 text-lg">解决过程面临的实际挑战困难较大</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 困难1 */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-500 flex-1">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 font-bold text-sm">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-amber-800 mb-3">人员挑战</h4>
                  <p className="text-amber-700 leading-relaxed">
                    依赖个人经验，稳定性差；小圈子文化严重，部分员工不愿分享经验，人才培养困难；内外串联等风险事件仍时有发生。
                  </p>
                </div>
              </div>
            </div>

            {/* 困难2 */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-500 flex-1">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 font-bold text-sm">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-amber-800 mb-3">系统挑战</h4>
                  <p className="text-amber-700 leading-relaxed">
                    系统处于初期，跨站融合、策略升级、多站对齐等需资源投入，短期难显成效。在"解决当下问题"与"长期建设"之间需平衡。
                  </p>
                </div>
              </div>
            </div>

            {/* 困难3 */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-500 flex-1">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 font-bold text-sm">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-amber-800 mb-3">组织挑战</h4>
                  <p className="text-amber-700 leading-relaxed">
                    风控变革涉及多部门与利益相关方，任何策略或流程调整都可能影响会员体验、代理收益及业务组织稳定性，隐性风险大。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 核心目标 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">核心目标</h2>
            <span className="text-gray-600 text-lg">
              构建以系统为核心、人工为辅助的FK防护体系，实现全流程自动化风险识别与控制
            </span>
          </div>

        </div>
      </div>

      {/* 核心目标下的三个模块 */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 模块1 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-blue-800 mb-3">系统审核比重逐步增加</h4>
                <p className="text-blue-700 leading-relaxed">
                  提供尽量由系统判定，降低人工操作比例。
                </p>
              </div>
            </div>
          </div>

          {/* 模块2 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">2</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-blue-800 mb-3">提供丰富的风控工具库</h4>
                <p className="text-blue-700 leading-relaxed">
                  偏差监控：人工结果偏离系统预设时触发二次审核，保证风控稳定性。
                </p>
              </div>
            </div>
          </div>

          {/* 模块3 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">3</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-blue-800 mb-3">内控违规操作风险监控</h4>
                <p className="text-blue-700 leading-relaxed">
                  提升违规成本，几乎消除违规操作空间，构建可靠防护体系。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 推进节奏 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">推进节奏</h2>
            <span className="text-gray-600 text-lg">针对FK特殊性，我们采取先小范围试点，验证效果后逐步推广，避免"一刀切"带来的组织和业务风险。</span>
          </div>

          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200"></div>

            <div className="grid grid-cols-4 gap-4 relative">
              {progressSchedule.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center mx-auto mb-4 ${
                    item.status === 'completed' ? 'bg-green-500 border-green-500' :
                    item.status === 'current' ? 'bg-blue-500 border-blue-500 shadow-2xl ring-8 ring-blue-300 scale-110' :
                    'bg-gray-300 border-gray-300'
                  }`}>
                    <span className={`text-white font-bold ${item.status === 'current' ? 'text-lg' : 'text-sm'}`}>
                      {item.time}
                    </span>
                  </div>

                  <div className={`bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center ${
                    item.status === 'current' ? 'bg-blue-50 border-blue-300 shadow-2xl ring-4 ring-blue-200 transform scale-105' : ''
                  }`}>
                    <div className="mb-2">
                      <h6 className={`font-bold mb-2 ${item.status === 'current' ? 'text-blue-800 text-xl' : 'text-gray-800'}`}>
                        {item.stage}
                      </h6>
                      <p className="text-sm text-gray-600 mb-2 leading-relaxed">{item.work}</p>
                    </div>
                    <div className="mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'completed' ? 'bg-green-100 text-green-700' :
                        item.status === 'current' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-500'
                      }`}>
                        {item.result}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
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