import React from 'react';

export const Direction2StandardExecution = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">2</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">人的审核不按照标准执行</h2>
      </div>
      
      {/* 1、出款未查看备注标签 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">备</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">出款未查看备注标签</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">出款时未查看备注标签（公告）导致套利出款错误；每月约15-20%的错误出款源于此，影响约100+万/月</div>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold text-blue-700 mb-2">策略</div>
            <div className="text-gray-700 mb-4">将查看备注设为出款流程中的强制环节</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">错误出款影响降低<span className="font-bold text-green-600">15%-20%</span></div>
          </div>
        </div>

        {/* 图表 */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <div className="relative h-80 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              错误率 (%)
            </div>
            
            <div className="mx-12 h-full relative">
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                <span>30%</span>
                <span>22.5%</span>
                <span>15%</span>
                <span>7.5%</span>
                <span>0%</span>
              </div>
              
              <div className="absolute left-12 right-12 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              <div className="absolute left-12 right-12 h-full flex items-end justify-around pb-8">
                <div className="flex flex-col items-center relative">
                  <div className="w-16 bg-red-500 rounded-t" style={{height: `${(25/30) * 200}px`}}></div>
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-800 font-medium">调整前</div>
                    <div className="text-xs text-gray-500 mt-1">25%</div>
                  </div>
                </div>
                <div className="flex flex-col items-center relative">
                  <div className="w-16 bg-green-500 rounded-t" style={{height: `${(8/30) * 200}px`}}></div>
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-800 font-medium">调整后</div>
                    <div className="text-xs text-gray-500 mt-1">8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm font-medium text-gray-600 mb-4">调整前后对比</div>
          
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span className="text-gray-700">调整前错误率</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-gray-700">调整后错误率</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 2. VIP禁用流程 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">VIP</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">VIP禁用流程</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">VIP用户禁用权限管理不够精细，缺乏分级审批机制，存在误禁和滥用风险</div>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold text-blue-700 mb-2">策略</div>
            <div className="text-gray-700 mb-4">建立VIP禁用分级审批机制，完善权限管理体系</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">建立VIP禁用分级审批机制，提升禁用操作的准确性和合规性，降低误禁率80%</div>
          </div>
        </div>
      </div>
    </div>
  );
};