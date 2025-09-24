import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Direction2PersonnelCapability = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">2</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">人的审核不按照标准执行</h2>
      </div>
      <p className="text-gray-700 mb-8 leading-relaxed">
        <span className="font-semibold">审核流程执行不规范，标准化程度低</span>，存在主观判断差异，需要强化流程标准化和质量监控机制。
      </p>

      {/* 1. 出款未查看备注标签 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">备</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">出款未查看备注标签</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">审核人员未按标准查看会员备注和标签，高盈利标签或高风险标签被忽略</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">高盈利提款强制提醒功能，有效降低审核遗漏风险，标准执行率提升88%</div>
          </div>
        </div>
        
        {/* 出款未查看备注标签图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">备注标签查看效果</h5>
          <div className="relative h-64">
            <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>300</span>
              <span>225</span>
              <span>150</span>
              <span>75</span>
              <span>0</span>
            </div>
            <div className="ml-8 h-full relative">
              <div className="absolute left-0 right-0 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                <div className="flex flex-col items-center relative">
                  <div className="absolute -top-8 text-sm font-semibold text-cyan-600">88%</div>
                  <div className="w-24 bg-cyan-500 rounded-t" style={{ height: '211px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">264单</div>
                    <div className="text-sm text-gray-600">备注查看</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-cyan-500"></div>
              <span className="text-sm text-gray-600">标准执行订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">执行率: 88%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 2. VIP禁用流程 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">VIP</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">VIP禁用流程</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">VIP用户禁用权限管理不够精细，禁用操作缺乏标准化流程</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">建立VIP禁用标准化流程，权限分级管理，提升管理规范性75%</div>
          </div>
        </div>
        
        {/* VIP禁用流程图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">VIP禁用流程效果</h5>
          <div className="relative h-64">
            <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>150</span>
              <span>113</span>
              <span>75</span>
              <span>38</span>
              <span>0</span>
            </div>
            <div className="ml-8 h-full relative">
              <div className="absolute left-0 right-0 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                <div className="flex flex-col items-center relative">
                  <div className="absolute -top-8 text-sm font-semibold text-indigo-600">75%</div>
                  <div className="w-24 bg-indigo-500 rounded-t" style={{ height: '180px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">113单</div>
                    <div className="text-sm text-gray-600">VIP流程</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-indigo-500"></div>
              <span className="text-sm text-gray-600">规范操作数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">规范性: 75%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>
    </div>
  );
};