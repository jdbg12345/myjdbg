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
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="relative h-80 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              管控订单数
            </div>
            
            <div className="mx-12 h-full relative">
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>200</span>
              <span>150</span>
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>
              
              <div className="absolute left-12 right-12 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                <div className="flex flex-col items-center relative">
                  <div className="w-20 bg-cyan-600 rounded-t" style={{ height: '180px' }}></div>
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-800 font-medium">标签管控</div>
                    <div className="text-xs text-gray-500 mt-1">120单 (60%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm font-medium text-gray-600 mb-4">管控类型</div>
          
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-600 rounded"></div>
              <span className="text-gray-700">管控订单数</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
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
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="relative h-80 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              管控订单数
            </div>
            
            <div className="mx-12 h-full relative">
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>150</span>
              <span>113</span>
              <span>75</span>
              <span>38</span>
              <span>0</span>
            </div>
              
              <div className="absolute left-12 right-12 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                <div className="flex flex-col items-center relative">
                  <div className="w-20 bg-teal-600 rounded-t" style={{ height: '135px' }}></div>
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-800 font-medium">动态参数</div>
                    <div className="text-xs text-gray-500 mt-1">90单 (45%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm font-medium text-gray-600 mb-4">优化类型</div>
          
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-teal-600 rounded"></div>
              <span className="text-gray-700">管控订单数</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>
    </div>
  );
};