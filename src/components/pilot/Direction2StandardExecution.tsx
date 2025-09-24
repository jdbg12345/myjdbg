import React from 'react';

export const Direction2StandardExecution = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
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
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">出款备注标签查看效果</h5>
          <div className="flex items-end justify-between h-64 mb-4">
            <div className="flex flex-col items-center flex-1 mx-2">
              <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '280px'}}>25%</div>
              <div className="bg-red-400 w-full rounded-t transition-all duration-300" style={{height: '200px'}}></div>
              <div className="text-sm text-gray-600 mt-2">调整前</div>
              <div className="text-xs text-gray-500">错误率</div>
            </div>
            <div className="flex flex-col items-center flex-1 mx-2">
              <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '200px'}}>8%</div>
              <div className="bg-green-500 w-full rounded-t transition-all duration-300" style={{height: '64px'}}></div>
              <div className="text-sm text-gray-600 mt-2">调整后</div>
              <div className="text-xs text-gray-500">错误率</div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600">
            <div className="mb-2">统计周期：2025-04-01 ~ 2025-06-30</div>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-red-400 mr-2"></span>
                <span>调整前错误率</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>
                <span>调整后错误率</span>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};