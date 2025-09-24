import React from 'react';
import { Search, Lightbulb, Target, Shield, AlertCircle } from 'lucide-react';

export const EssentialProblemsAndSolutions = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
          <Search className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">一、本质问题与解法</h2>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {[
          {
            number: '1',
            title: '作弊策略做的较少',
            content: '人工经验很少转为系统策略，而人工存在能力差异及主动作弊风险',
            color: 'bg-blue-500'
          },
          {
            number: '2',
            title: '出款流程有风险',
            content: '派单机制不细分难度、单人审核过即可出款等核心流程不够严谨',
            color: 'bg-blue-500'
          },
          {
            number: '3',
            title: '跨站点未完全打通',
            content: '多站点数据在风控维度上相对隔离，无法有效进行多维度的关联',
            color: 'bg-blue-500'
          },
          {
            number: '4',
            title: '数据及能力不完整',
            content: '站点数据和能力外，未引入外部数据及能力，如B端跨站数据及能力',
            color: 'bg-blue-500'
          },
          {
            number: '5',
            title: '规则及策略较简单',
            content: '现有仅是多规则策略简单叠加，未引入复杂算法，更未涉及AI大模型',
            color: 'bg-blue-500'
          }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-center mb-4">
              <div className={`w-8 h-8 ${item.color} text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2`}>
                {item.number}
              </div>
              <h4 className="font-bold text-gray-800 text-base whitespace-nowrap">{item.title}</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed text-center">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};