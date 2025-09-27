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
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">3.1 FK变革节奏</h1>
      </div>

      {/* 困难挑战 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">困难挑战</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-500">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 font-bold text-sm">1</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-amber-800 mb-3">多部门协调挑战</h4>
                <p className="text-amber-700 leading-relaxed">
                  FK变革横跨多个部门与利益相关方，任何策略或流程调整都可能影响会员体验、代理收益与业务稳定性
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-500">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 font-bold text-sm">2</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-amber-800 mb-3">系统架构挑战</h4>
                <p className="text-amber-700 leading-relaxed">
                  核心流程的系统升级则对既有架构提出了巨大的挑战
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
                    item.status === 'current' ? 'bg-blue-500 border-blue-500 animate-pulse' :
                    'bg-gray-300 border-gray-300'
                  }`}>
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  
                  {/* 内容卡片 */}
                  <div className={`bg-white rounded-lg p-4 shadow-sm border border-gray-200 ${
                    item.status === 'current' ? 'bg-blue-50 border-blue-300' : ''
                  }`}>
                    <div className="text-center mb-2">
                      <h5 className="font-semibold text-gray-800 text-sm">{item.time}</h5>
                      <h6 className="font-bold text-gray-800">{item.stage}</h6>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'completed' ? 'bg-green-100 text-green-800' :
                        item.status === 'current' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.result}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.work}</p>
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