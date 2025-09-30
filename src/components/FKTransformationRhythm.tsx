import React from 'react';
import { Calendar, AlertTriangle, Target, CheckCircle, Clock, Users, Shield, Award, BarChart3 } from 'lucide-react';

export const FKTransformationRhythm = () => {
  const progressSchedule = [
    {
      time: "Q1",
      stage: "梳理规划",
      work: "对业务和组织现状梳理，识别问题并制定针对性解决策略",
      result: "已完成",
      status: "completed"
    },
    {
      time: "Q2",
      stage: "逐步落地",
      work: "推动技术及相关业务协同，进行系统改造、流程优化等",
      result: "已完成",
      status: "completed"
    },
    {
      time: "Q3",
      stage: "试点验证",
      work: "选择核心业务场景进行试点，验证新机制的有效性和可行性",
      result: "进行中",
      status: "current"
    },
    {
      time: "Q4",
      stage: "全面推广",
      work: "完成全面部署，实现人工审核向系统审核的根本性转变",
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
        <div className="bg-white rounded p-8 border-2 border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">核心问题</h2>
          </div>
          <div className="mb-8">
            <span className="text-gray-700 text-xl">问题虽多，但已逐步明确解决路径，并按计划有序推进</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 问题1 */}
            <div className="bg-red-50 rounded p-6 border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">审核问题-质量较差</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
                    人员能力参差不齐，新人及外包团队错误率高；审核操作未严格遵循SOP；时间考核压力导致无法充分审核。
                  </p>
                </div>
              </div>
            </div>

            {/* 问题2 */}
            <div className="bg-red-50 rounded p-6 border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">内控问题-违规行为</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
                    存在敏感信息被泄漏、内外串联出款等违规行为；长期以来，在内控上并未真正做到有效治理，甚至形成灰色产业链。
                  </p>
                </div>
              </div>
            </div>

            {/* 问题3 */}
            <div className="bg-red-50 rounded p-6 border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">系统问题-支持不够</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
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
        <div className="bg-white rounded p-8 border-2 border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">面对困难</h2>
          </div>
          <div className="mb-8">
            <span className="text-gray-700 text-xl">推进过程中，人员、系统与风险管理都面临较大挑战</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 困难1 */}
            <div className="bg-amber-50 rounded p-6 border-l-4 border-amber-500 flex-1">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">人员挑战</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
                    依赖个人经验，稳定性差；小圈子文化，员工不愿分享经验，人才培养困难；内外串联等风险事件仍时有发生。
                  </p>
                </div>
              </div>
            </div>

            {/* 困难2 */}
            <div className="bg-amber-50 rounded p-6 border-l-4 border-amber-500 flex-1">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">系统挑战</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
                    系统处于初级，底层升级、跨站融合、策略升级等需投入资源和时间，不仅难度大，短期难显成效，需要足够的韧性。
                  </p>
                </div>
              </div>
            </div>

            {/* 困难3 */}
            <div className="bg-amber-50 rounded p-6 border-l-4 border-amber-500 flex-1">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">风险挑战</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
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
        <div className="bg-white rounded p-8 border-2 border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">核心目标</h2>
          </div>
          <div className="mb-8">
            <span className="text-gray-700 text-xl">
              构建以系统为核心、人工为辅助的防护体系，实现全流程自动化风险识别与控制
            </span>
          </div>

          {/* 核心目标下的三个模块 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 模块1 */}
            <div className="bg-blue-50 rounded p-6 border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">对人的依赖要越来越低</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
                    持续迭代套利与作弊识别模型，不断完善风控流程；当系统准确率与效率超过人工时，对人的依赖将显著降低，不仅实现降本增效，也提升了应对极端情况的能力
                  </p>
                </div>
              </div>
            </div>

            {/* 模块2 */}
            <div className="bg-blue-50 rounded p-6 border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">提供丰富的风控工具库</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
                    将风控中的高频操作、费时费力的场景，通过提供关联工具、对打工具、流水工具等工具集，实现技能熟练度提升，提高效率和准确性，同时帮助新人快速上手。
                  </p>
                </div>
              </div>
            </div>

            {/* 模块3 */}
            <div className="bg-blue-50 rounded p-6 border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">内控违规操作行为管控</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
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
        <div className="bg-white rounded p-8 border-2 border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">推进节奏</h2>
          </div>
          <div className="mb-8">
            <span className="text-gray-700 text-xl">由于变革会存在较大影响及风险，将采取分阶段推进方式，在风险可控和有效的前提下，完成体系变革。</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {progressSchedule.map((item, index) => (
              <div key={index} className={`rounded p-6 border-2 ${
                item.status === 'completed' ? 'bg-green-50 border-green-500' :
                item.status === 'current' ? 'bg-blue-50 border-blue-600' :
                'bg-gray-50 border-gray-300'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded flex items-center justify-center flex-shrink-0 ${
                    item.status === 'completed' ? 'bg-green-100' :
                    item.status === 'current' ? 'bg-blue-100' :
                    'bg-gray-100'
                  }`}>
                    {item.status === 'completed' ? (
                      <CheckCircle className="w-7 h-7 text-green-600" />
                    ) : item.status === 'current' ? (
                      <Clock className="w-7 h-7 text-blue-600" />
                    ) : (
                      <span className="text-gray-600 font-bold text-lg">{item.time}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className={`text-xl font-bold mb-3 ${
                      item.status === 'completed' ? 'text-gray-900' :
                      item.status === 'current' ? 'text-gray-900' :
                      'text-gray-900'
                    }`}>
                      {item.time} - {item.stage}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base mb-4">
                      {item.work}
                    </p>
                    <div className={`text-base font-bold ${
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