import React from 'react';
import { Calendar, AlertTriangle, Target, CheckCircle, Clock, Users } from 'lucide-react';

export const FKTransformationRhythm = () => {
  const progressSchedule = [
    {
      time: "Q1 2025",
      stage: "梳理规划",
      work: "对业务和组织现状进行梳理，识别问题并制定针对性解决策略",
      result: "已完成",
      status: "completed"
    },
    {
      time: "Q2 2025", 
      stage: "逐步落地",
      work: "推动技术及相关业务协同，进行系统改造、流程优化、标准对齐",
      result: "已完成",
      status: "completed"
    },
    {
      time: "Q3 2025",
      stage: "试点验证", 
      work: "选择核心业务场景进行小范围试点，验证新机制的有效性和可行性",
      result: "进行中",
      status: "current"
    },
    {
      time: "Q4 2025",
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
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">3.1 FK变革进度</h1>
      </div>

      {/* 核心问题 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">核心问题</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border-l-4 border-red-500 flex-1">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold text-sm">1</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-red-800 mb-3">人员的风控能力参差不齐</h4>
                <p className="text-red-700 leading-relaxed">
                  审核人员经验差异明显，新人和外包团队错误率高，缺乏统一的能力评估和培训体系
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border-l-4 border-red-500 flex-1">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold text-sm">2</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-red-800 mb-3">人的审核不按照标准执行</h4>
                <p className="text-red-700 leading-relaxed">
                  审核流程执行不规范，未严格按照SOP操作，导致错误出款和风险遗漏
                </p>
              </div>
            </div>
          </div>
     
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border-l-4 border-red-500 flex-1">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold text-sm">3</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-red-800 mb-3">系统审核策略的维度缺失</h4>
                <p className="text-red-700 leading-relaxed">
                  系统策略主要为防御型，缺乏套利和作弊识别能力，导致系统直接出款错误
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 困难挑战 */}
      <div className="mb-8">    
         <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">困难挑战</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-500 flex-1">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 font-bold text-sm">1</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-amber-800 mb-3">影响面大挑战</h4>
                <p className="text-amber-700 leading-relaxed">
                  FK变革横跨多个部门与利益相关方，任何策略或流程调整都可能影响会员体验、代理收益与业务稳定性
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-500 flex-1">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 font-bold text-sm">2</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-amber-800 mb-3">系统研发挑战</h4>
                <p className="text-amber-700 leading-relaxed">
                  核心流程的系统升级则对既有架构提出了巨大的挑战
                </p>
              </div>
            </div>
          </div>
     
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-500 flex-1">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 font-bold text-sm">3</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-amber-800 mb-3">人能力差挑战</h4>
                <p className="text-amber-700 leading-relaxed">
                  人员基础能力较差
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      {/* 落地策略 - 横向里程碑样式 */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6" />
            <h3 className="text-xl font-bold">落地策略：小范围试点，效果验证后逐步推广，避免一刀切的潜在组织及业务风险。</h3>
          </div>
        </div>
        
        <div className="p-8">
          {/* 横向时间轴 */}
          <div className="relative">
            {/* 时间轴线 */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200"></div>
            
            {/* 里程碑节点 */}
            <div className="grid grid-cols-4 gap-4 relative">
              {progressSchedule.map((item, index) => (
                <div key={index} className="relative">
                  {/* 节点圆圈 */}
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center mx-auto mb-4 ${
                    item.status === 'completed' ? 'bg-green-500 border-green-500' :
                    item.status === 'current' ? 'bg-blue-500 border-blue-500 shadow-2xl ring-8 ring-blue-300 scale-110' :
                    'bg-gray-300 border-gray-300'
                  }`}>
                    <span className={`text-white font-bold ${item.status === 'current' ? 'text-lg' : 'text-sm'}`}>
                      {item.time.split(' ')[0]}
                    </span>
                  </div>
                  
                  {/* 内容卡片 */}
                  <div className={`bg-white rounded-lg p-4 shadow-sm border border-gray-200 ${
                    item.status === 'current' ? 'bg-blue-50 border-blue-300 shadow-2xl ring-4 ring-blue-200 transform scale-105' : ''
                  }`}>
                    <div className="mb-2">
                      <h6 className={`font-bold mb-2 ${item.status === 'current' ? 'text-blue-800 text-xl' : 'text-gray-800 text-lg'}`}>{item.stage}</h6>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'completed' ? 'bg-green-100 text-green-800' :
                        item.status === 'current' ? 'bg-blue-100 text-blue-800 font-bold text-sm' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.result}
                      </span>
                    </div>
                    <p className={`text-sm text-center ${item.status === 'current' ? 'text-blue-700 font-medium' : 'text-gray-600'}`}>{item.work}</p>
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
      {/* 核心目标 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">核心目标</h2>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 mb-8">
          <div className="text-center mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              构建以系统为核心、人工为辅助的智能FK防护体系，实现全流程自动化风险识别与控制
            </p>
            <div className="bg-white/80 rounded-xl p-6 inline-block">
              <p className="text-gray-800 text-lg leading-relaxed">
                在FK中，<span className="font-bold text-red-600">"人"是所有问题的根源</span>。长期目标是不依赖"人"，压缩人的操作比重与空间，由系统自动完成大部分判定，覆盖策略、流程、内控与预警。当人的执行结果与系统偏差超出预设范围时，会触发内控二次审核，提升FK质量与稳定性，构建高效可靠的防护体系，使违规者成本与风险极高、几乎无操作空间。
              </p>
            </div>
          </div>

          {/* 人与系统关系演进 */}
          <div className="mt-8">
            <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">人与系统关系演进</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 1.0阶段 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-gray-400">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">1.0阶段 过去状态</h4>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">人做决策的比例要大大降低</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-xl">人工决策：<strong className="text-gray-800 text-2xl">90%+</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-xl">系统通过：<strong className="text-gray-800 text-2xl">90%+</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart3 className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-xl">系统拒绝：<strong className="text-gray-800 text-2xl">0%（排除流水）</strong></span>
                  </div>
                </div>
              </div>

              {/* 2.0阶段 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">2.0阶段 当前目标</h4>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">人做决策的比例要大大降低</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-xl">人工决策：<strong className="text-gray-800 text-2xl">50%</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-xl">系统通过：<strong className="text-gray-800 text-2xl">70%</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart3 className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-xl">系统拒绝：<strong className="text-gray-800 text-2xl">30%</strong></span>
                  </div>
                </div>
              </div>

              {/* 3.0阶段 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">3.0阶段 理想状态</h4>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">人做决策的比例要大大降低</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-xl">人工决策：<strong className="text-gray-800 text-2xl">10%</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-xl">系统通过：<strong className="text-gray-800 text-2xl">40%</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart3 className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-xl">系统拒绝：<strong className="text-gray-800 text-2xl">60%</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

};