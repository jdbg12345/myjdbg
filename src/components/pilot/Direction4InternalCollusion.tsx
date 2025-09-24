import React from 'react';

export const Direction4InternalCollusion = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">4</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">内外的人员进行勾结串联</h2>
      </div>

      {/* 2. 风控标签 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">标</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">风控标签</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">风控标签查看权限过于宽泛，敏感信息容易泄露，缺乏访问记录和审计机制</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">实施标签分级查看机制，敏感信息访问减少60%，建立完整的访问审计链路</div>
          </div>
        </div>
        
        {/* 风控标签图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">风控标签管控效果</h5>
          <div className="relative h-64">
            <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>200</span>
              <span>150</span>
              <span>100</span>
              <span>50</span>
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
                  <div className="absolute -top-8 text-sm font-semibold text-cyan-600">60%</div>
                  <div className="w-24 bg-cyan-500 rounded-t" style={{ height: '144px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">120单</div>
                    <div className="text-sm text-gray-600">标签管控</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                        
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-cyan-500"></div>
              <span className="text-sm text-gray-600">管控订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">减少率: 60%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
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

      {/* 3. 动态参数 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">参</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">动态参数</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">风控策略参数固定化，容易被外界摸清规律，故意规避和绕过，缺乏动态调整机制</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">实施动态参数机制，策略有效性提升45%，外界预测难度大幅增加</div>
          </div>
        </div>
        
        {/* 动态参数图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">动态参数管控效果</h5>
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
                  <div className="absolute -top-8 text-sm font-semibold text-teal-600">45%</div>
                  <div className="w-24 bg-teal-500 rounded-t" style={{ height: '108px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">90单</div>
                    <div className="text-sm text-gray-600">动态参数</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                        
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-teal-500"></div>
              <span className="text-sm text-gray-600">管控订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">提升率: 45%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>
    </div>
  );
};