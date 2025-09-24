import React from 'react';

export const Direction5ExtremeAnomalyPrevention = () => {
  return (
    <div className="bg-gradient-to-br from-white to-red-50 rounded-xl p-8 mb-8 shadow-lg border border-red-100">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">5</span>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800">一些极端异常的预防机制</h2>
          <div className="w-full h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full mt-2"></div>
        </div>
      </div>
      <p className="text-gray-700 mb-8 leading-relaxed">
        <span className="font-semibold">流程缺陷及策略局限导致异常资金风险</span>，针对场馆多钱、沉睡用户等极端情况建立预警和防御策略，确保资金安全。
      </p>
      
      {/* 1. 钱包预警 */}
      <div className="mb-12">
        {/* 标题模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border-l-4 border-emerald-500">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">钱</span>
          </div>
            <h4 className="text-xl font-bold text-gray-800">钱包预警</h4>
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
              <p className="text-gray-700 text-sm leading-relaxed">用户钱包异常变动缺乏实时监控，无法及时发现异常资金流动</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">建立钱包异常预警机制，实时监控资金流动</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">异常资金发现率提升85%，响应时间缩短至分钟级</p>
            </div>
          </div>
        </div>
        
        {/* 图表模块 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="relative h-80 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">用户钱包异常变动缺乏实时监控，无法及时发现异常资金流动</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">建立钱包异常预警机制，异常资金发现率提升85%，响应时间缩短至分钟级</div>
          </div>
        </div>
        
        {/* 钱包预警图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="relative h-80 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              预警订单数
            </div>
            
            <div className="mx-12 h-full relative">
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>300</span>
              <span>225</span>
              <span>150</span>
              <span>75</span>
              <span>0</span>
            </div>
              
              <div className="absolute left-12 right-12 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                <div className="flex flex-col items-center relative">
                  <div className="w-20 bg-emerald-600 rounded-t" style={{ height: '255px' }}></div>
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-500 mt-1">255单 (85%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-600 rounded"></div>
              <span className="text-gray-700">预警订单数</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 2. 场馆多钱 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">场</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">场馆多钱</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">场馆账户异常增加资金，缺乏有效的监控和预警机制</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">场馆多钱预警机制上线，异常资金识别率达到92%，有效防范资金风险</div>
          </div>
        </div>
        
        {/* 场馆多钱图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="relative h-80 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              预警订单数
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
                  <div className="w-20 bg-rose-600 rounded-t" style={{ height: '230px' }}></div>
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-500 mt-1">184单 (92%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-rose-600 rounded"></div>
              <span className="text-gray-700">预警订单数</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 3. 沉睡用户 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">睡</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">沉睡用户</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">长期沉睡用户突然活跃，可能存在账号被盗或异常操作风险</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">沉睡用户活跃预警机制，异常账号识别率78%，有效防范账号盗用风险</div>
          </div>
        </div>
        
        {/* 沉睡用户图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="relative h-80 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              预警订单数
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
                  <div className="w-20 bg-amber-600 rounded-t" style={{ height: '195px' }}></div>
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-500 mt-1">117单 (78%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-amber-600 rounded"></div>
              <span className="text-gray-700">预警订单数</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>
    </div>
  );
};