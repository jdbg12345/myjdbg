import React from 'react';
import { Calendar, AlertTriangle, Target, CheckCircle, Clock, Users } from 'lucide-react';

export const SystemTransformationRhythm = () => {
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
      work: "完成所有核心功能的全面部署，实现人工审核向系统审核的根本性转变",
      result: "待开始", 
      status: "pending"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">一、FK变革节奏</h2>
      </div>

      {/* 困难挑战 */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mb-8 border-l-4 border-amber-500">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-amber-800 mb-3">困难挑战</h3>
            <p class="text-amber-700 leading-relaxed">
              FK变革涉及多个部门与利益相关方，任何调整都可能影响会员体验、代理收益和业务稳定性。
              因此，采取先小范围试点，效果验证后逐步推广，避免一刀切的潜在的组织及业务风险。
            </p>
          </div>
        </div>
      </div>

      {/* 变革原则 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border-l-4 border-blue-500">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Target className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-800 mb-3">变革原则</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-700">小范围试点，效果验证后逐步推广</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-700">避免一刀切的潜在组织及业务风险</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-700">平衡会员体验、代理收益和业务稳定性</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-700">持续优化和迭代改进</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 当前状态 */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-8 border-l-4 border-green-500">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-green-800 mb-3">当前状态</h3>
            <p className="text-green-700 mb-4">
              当前项目进展顺利，各项指标均在预期范围内。试点验证阶段的关键功能已部署完成，
              正在收集用户反馈和性能数据，为Q4全面推广做准备。
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-medium">整体进度</span>
                <span className="font-bold text-green-800 text-lg">75%</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-300" style={{width: '75%'}}></div>
              </div>
              <div className="text-sm text-green-600">Q3试点验证阶段 - 按计划推进</div>
            </div>
          </div>
        </div>
      </div>

      {/* 项目时间轴 */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6" />
            <h3 className="text-xl font-bold">项目时间轴</h3>
          </div>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            {progressSchedule.map((item, index) => (
              <div key={index} className={`relative pl-8 ${item.status === 'current' ? 'bg-blue-50 rounded-lg p-4 -ml-4' : ''}`}>
                {/* 时间轴点 */}
                <div className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 ${
                  item.status === 'completed' ? 'bg-green-500 border-green-500' :
                  item.status === 'current' ? 'bg-blue-500 border-blue-500 animate-pulse' :
                  'bg-gray-300 border-gray-300'
                }`}></div>
                
                {/* 时间轴线 */}
                {index < progressSchedule.length - 1 && (
                  <div className="absolute left-1.5 top-6 w-0.5 h-16 bg-gray-200"></div>
                )}
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{item.time} - {item.stage}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'completed' ? 'bg-green-100 text-green-800' :
                      item.status === 'current' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {item.result}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.work}</p>
                  {item.status === 'current' && (
                    <div className="mt-2 text-sm text-blue-700 font-medium">当前阶段 - 在预期范围内</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};