import React from 'react';
import { Lightbulb } from 'lucide-react';

export const EssentialProblemsAndSolutions = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">一、本质问题与解法</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {[
          {
            number: '1',
            title: '人员的风控能力参差不齐',
            content: '新人经验不足，老员工能力差异大，导致审核质量不稳定',
            solution: '建立标准化培训体系，实施能力分级管理',
            color: 'bg-blue-500'
          },
          {
            number: '2', 
            title: '人的审核不按照标准执行',
            content: '审核流程执行不规范，标准化程度低，存在主观判断差异',
            solution: '强化流程标准化，建立审核质量监控机制',
            color: 'bg-orange-500'
          },
          {
            number: '3',
            title: '系统审核策略的维度缺失',
            content: '缺少作弊拦截策略，系统直接出款错误率高',
            solution: '补充多维度风控策略，提升系统智能化水平',
            color: 'bg-purple-500'
          },
          {
            number: '4',
            title: '内外的人员进行勾结串联',
            content: '内部权限管理不严，存在信息泄露和内外勾结风险',
            solution: '加强权限管控，建立内部监督机制',
            color: 'bg-red-500'
          },
          {
            number: '5',
            title: '一些极端异常的预防机制',
            content: '缺乏极端情况的预防和应急响应机制',
            solution: '建立全方位监控预警体系，完善应急处置流程',
            color: 'bg-yellow-500'
          }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-center mb-4">
              <div className={`w-8 h-8 ${item.color} text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2`}>
                {item.number}
              </div>
              <h4 className="font-bold text-gray-800 text-base">{item.title}</h4>
            </div>
            <div className="space-y-3">
              <div className="bg-red-50 rounded-lg p-3">
                <div className="text-xs font-semibold text-red-700 mb-1">问题现状</div>
                <p className="text-xs text-red-600">{item.content}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-xs font-semibold text-green-700 mb-1">解决方案</div>
                <p className="text-xs text-green-600">{item.solution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};