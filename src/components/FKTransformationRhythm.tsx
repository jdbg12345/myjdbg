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
          3.1 整体说明
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
            <span className="text-gray-600 text-lg">问题虽然很多，但已找到路径，逐步解决中</span>
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
                    存在敏感信息被泄漏、内外串联出款等违规行为；长期以来，在内控上并未真正做到有效治理，甚至形成灰色产业链。
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
                    过去侧重防御，缺防范套利和作弊的策略，缺提效的工具，综合导致员工对系统不信任，只能依赖个人经验，陷入恶性循环。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 面对困难 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">面对困难</h2>
            <span className="text-gray-600 text-lg">过程面临的实际挑战和风险较大</span>
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
                    系统处于初期，跨站融合、策略升级等需投入资源，在‘解决当下问题’与‘长期合理性’之间需平衡，短期难显成效，需要韧性。
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
                  <h4 className="text-lg font-bold text-amber-800 mb-3">风险挑战（关键考虑点）</h4>
                  <p className="text-amber-700 leading-relaxed">
                    变革涉及多部门，且任何策略流程调整（即使改正过往错误做法），都影响会员体验、代理收益和业务稳定，存在隐性风险。
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

          {/* 核心目标下的三个模块 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 模块1 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-blue-800 mb-3">对人的依赖会越来越低</h4>
                  <p className="text-blue-700 leading-relaxed">
                    不断提供更多策略，尤其是针对套利和作弊的模型，持续迭代优化效果，当模型的准确率和效率超过人工时，对人的依赖将降低，从而更好地应对极端情况。
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
                    将风控中高频操作、费时费力的场景，通过提供关联工具、对打工具、流水工具等工具集，实现技能熟练度提升，提高效率和准确性，同时帮助新人快速上手。
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
                  <h4 className="text-lg font-bold text-blue-800 mb-3">内控违规操作行为管控</h4>
                  <p className="text-blue-700 leading-relaxed">
                    通过合理切割权限、增加背靠背流程机制，并在多环节、多维度识别高危操作、实施监控预警，提升违规成本，几乎消除违规操作空间，构建可靠防护体系。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 推进节奏 */}
      <div className="mb-8">
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">推进节奏</h2>
              <span className="text-gray-600 text-base">存在较大影响及风险，将采取分阶段推进方式，在风险可控和有效的前提下，完成体系变革。</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {progressSchedule.map((item, index) => (
              <div key={index} className={`rounded-xl p-6 border-2 transition-all duration-200 ${
                item.status === 'completed' ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-400 shadow-md' :
                item.status === 'current' ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-500 shadow-lg' :
                'bg-gradient-to-br from-gray-50 to-slate-50 border-gray-300 shadow-sm'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                    item.status === 'completed' ? 'bg-gradient-to-r from-green-100 to-green-200' :
                    item.status === 'current' ? 'bg-gradient-to-r from-blue-100 to-blue-200' :
                    'bg-gradient-to-r from-gray-100 to-gray-200'
                  }`}>
                    {item.status === 'completed' ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : item.status === 'current' ? (
                      <Clock className="w-6 h-6 text-blue-600" />
                    ) : (
                      <span className="text-gray-600 font-bold text-base">{item.time}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className={`text-xl font-bold mb-3 ${
                      item.status === 'completed' ? 'text-green-800' :
                      item.status === 'current' ? 'text-blue-800' :
                      'text-gray-800'
                    }`}>
                      {item.time} - {item.stage}
                    </div>
                    <p className={`leading-relaxed text-sm mb-4 ${
                      item.status === 'completed' ? 'text-green-700' :
                      item.status === 'current' ? 'text-blue-700' :
                      'text-gray-600'
                    }`}>
                      {item.work}
                    </p>
                    <div className={`text-base font-semibold ${
                      item.status === 'completed' ? 'text-green-600' :
                      item.status === 'current' ? 'text-blue-600' :
                      'text-gray-500'
                    }`}>
                      {item.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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