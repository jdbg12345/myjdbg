import React from 'react';

export const Direction4InternalCollusion = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">4</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">内外的人员进行勾结串联</h2>
      </div>

      {/* 风控标签和备注独立权限 */}
      <div className="mb-12">
        {/* 标题模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border-l-4 border-cyan-500">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">标</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">风控标签和备注独立权限</h4>
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
              <p className="text-gray-700 text-sm leading-relaxed">风控标签和备注权限未独立管理，大部分部门均可查看，敏感信息易泄露，存在潜在公司损失风险</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">风控类标签和备注独立权限</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">减少被泄露风险</p>
            </div>
          </div>
        </div>
    
      </div>

      {/* 风控参数动态机制 */}
      <div className="mb-8">
        {/* 标题模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border-l-4 border-teal-500">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">参</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">风控参数动态机制</h4>
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
              <p className="text-gray-700 text-sm leading-relaxed">风控策略参数固定，易被外部摸清规律或内外勾结泄露，已经存在被故意规避和绕过的风险，且缺乏动态调整机制。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">建立动态参数调整机制，使表面显示参数与实际执行参数不完全一致，从而增加外界预测难度并降低泄漏风险。</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">策略参数泄漏风险降低</p>
            </div>
          </div>
        </div>
        
        {/* 图表模块 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="relative h-96 mb-6 bg-gray-50 rounded-lg p-8">
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
                  
                  {/* 准确率数据点 */}
                  <div 
                    className="absolute w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg"
                    style={{top: `${100 - 45 - 10}%`, left: '50%', transform: 'translateX(-50%)'}}
                  >
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-md">
                      45%
                    </div>
                  </div>
                  
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
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">准确率</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>
    </div>
  );
};