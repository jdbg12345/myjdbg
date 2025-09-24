import React from 'react';

export const Direction2StandardExecution = () => {
  return (
    <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl p-8 mb-8 shadow-lg border border-orange-100">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">2</span>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800">人的审核不按照标准执行</h2>
          <div className="w-full h-1 bg-gradient-to-r from-orange-600 to-transparent rounded-full mt-2"></div>
        </div>
      </div>
      
      {/* 1、出款强制查看标签备注 */}
      <div className="mb-12">
        {/* 标题模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border-l-4 border-blue-500">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">备</span>
          </div>
            <h4 className="text-xl font-bold text-gray-800">出款强制查看标签备注</h4>
          </div>
        </div>
        
        {/* 问题、策略、收益模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">出款时未查看备注标签（公告）导致出款错误，每月约15-20%的错误出款源于此，影响约100+万/月</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">将查看备注设为出款流程中的强制环节</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">错误出款影响降低<span className="font-bold text-green-600">15%-20%</span></p>
            </div>
          </div>
        </div>

        {/* 图表模块 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
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
              
              {/* 数据点和连线 */}
              <div className="absolute left-12 right-12 h-full">
                {/* 调整前数据点 */}
                <div 
                  className="absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"
                  style={{left: '25%', bottom: `${(25/30) * 80 + 10}%`}}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                    25%
                  </div>
                </div>
                
                {/* 调整后数据点 */}
                <div 
                  className="absolute w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"
                  style={{left: '75%', bottom: `${(8/30) * 80 + 10}%`}}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                    8%
                  </div>
                </div>
                
                {/* 连接线 */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line
                    x1="25%"
                    y1={`${100 - ((25/30) * 80 + 10)}%`}
                    x2="75%"
                    y2={`${100 - ((8/30) * 80 + 10)}%`}
                    stroke="#3B82F6"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    opacity="0.8"
                  />
                </svg>
                
                {/* 底部标签 */}
                <div className="absolute bottom-2 left-1/4 transform -translate-x-1/2 text-center">
                  <div className="text-xs text-gray-800 font-medium">调整前</div>
                </div>
                <div className="absolute bottom-2 right-1/4 transform translate-x-1/2 text-center">
                  <div className="text-xs text-gray-800 font-medium">调整后</div>
                </div>
                
                {/* 变化率标签 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  ↓ 68% 改善
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">调整前错误率</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">调整后错误率</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">改善趋势</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 2. 会员禁用流程升级 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">VIP</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">会员禁用流程升级</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">当前会员禁用流程单人即可操作，权限管理不够精细，缺乏分级审批机制，存在高V用户误禁及权限滥用风险。</div>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold text-blue-700 mb-2">策略</div>
            <div className="text-gray-700 mb-4">建立基于玩家等级的会员禁用分级审批机制，高V玩家的启禁用操作需提供审批人的 U 盾或谷歌验证码验证。</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">彻底解决禁用滥用问题</div>
          </div>
        </div>
      </div>
    </div>
  );
};