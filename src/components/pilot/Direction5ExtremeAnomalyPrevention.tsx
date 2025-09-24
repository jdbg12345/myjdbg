import React from 'react';

export const Direction5ExtremeAnomalyPrevention = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">5</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">一些极端异常的预防机制</h2>
      </div>
      <p className="text-gray-700 mb-8 leading-relaxed">
        <span className="font-semibold">流程缺陷及策略局限导致异常资金风险</span>，针对场馆多钱、沉睡用户等极端情况建立预警和防御策略，确保资金安全。
      </p>
      
      {/* 1. 钱包预警 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">钱</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">钱包预警</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
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
          <h5 className="text-lg font-semibold text-gray-900 mb-6 text-center bg-gradient-to-r from-emerald-50 to-green-50 py-3 rounded-lg">钱包异常预警效果</h5>
          <div className="relative h-80 mb-8 bg-gradient-to-br from-gray-50 to-white rounded-lg p-6">
            {/* Y轴标签 */}
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-semibold text-gray-700 bg-white px-2 rounded shadow">
              预警订单数
            </div>
            
            {/* 图表主体 */}
            <div className="mx-16 h-full relative">
              {/* Y轴刻度 */}
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs font-medium text-gray-600">
              <span>300</span>
              <span>225</span>
              <span>150</span>
              <span>75</span>
              <span>0</span>
            </div>
              
              {/* 网格线 */}
              <div className="absolute left-16 right-16 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-300 opacity-50" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              {/* 柱状图数据 */}
              <div className="absolute left-16 right-16 h-full flex items-end justify-center pb-6">
                <div className="flex flex-col items-center relative">
                  <div className="absolute -top-10 text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded shadow">85%</div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-gray-800 px-2 py-1 rounded shadow">
                    255单
                  </div>
                  <div className="w-28 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t shadow-lg" style={{ height: '255px' }}></div>
                  <div className="text-center mt-4">
                    <div className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded">钱包预警</div>
                    <div className="text-xs text-gray-500 mt-1">异常监控</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* X轴标签 */}
          <div className="text-center text-base font-semibold text-gray-700 mb-6 bg-gray-100 py-2 rounded">预警类型</div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded shadow"></div>
              <span className="text-sm font-medium text-gray-700">预警订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-emerald-700">发现率: 85%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded">统计周期：2025-04-01 ~ 2025-06-30</div>
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
          <h5 className="text-lg font-semibold text-gray-900 mb-6 text-center bg-gradient-to-r from-rose-50 to-pink-50 py-3 rounded-lg">场馆多钱预警效果</h5>
          <div className="relative h-80 mb-8 bg-gradient-to-br from-gray-50 to-white rounded-lg p-6">
            {/* Y轴标签 */}
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-semibold text-gray-700 bg-white px-2 rounded shadow">
              预警订单数
            </div>
            
            {/* 图表主体 */}
            <div className="mx-16 h-full relative">
              {/* Y轴刻度 */}
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs font-medium text-gray-600">
              <span>200</span>
              <span>150</span>
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>
              
              {/* 网格线 */}
              <div className="absolute left-16 right-16 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-300 opacity-50" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              {/* 柱状图数据 */}
              <div className="absolute left-16 right-16 h-full flex items-end justify-center pb-6">
                <div className="flex flex-col items-center relative">
                  <div className="absolute -top-10 text-sm font-semibold text-rose-700 bg-rose-50 px-3 py-1 rounded shadow">92%</div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-gray-800 px-2 py-1 rounded shadow">
                    184单
                  </div>
                  <div className="w-28 bg-gradient-to-t from-rose-600 to-rose-400 rounded-t shadow-lg" style={{ height: '230px' }}></div>
                  <div className="text-center mt-4">
                    <div className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded">场馆多钱</div>
                    <div className="text-xs text-gray-500 mt-1">资金监控</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* X轴标签 */}
          <div className="text-center text-base font-semibold text-gray-700 mb-6 bg-gray-100 py-2 rounded">监控类型</div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-t from-rose-600 to-rose-400 rounded shadow"></div>
              <span className="text-sm font-medium text-gray-700">预警订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-rose-700">识别率: 92%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded">统计周期：2025-04-01 ~ 2025-06-30</div>
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
          <h5 className="text-lg font-semibold text-gray-900 mb-6 text-center bg-gradient-to-r from-amber-50 to-yellow-50 py-3 rounded-lg">沉睡用户预警效果</h5>
          <div className="relative h-80 mb-8 bg-gradient-to-br from-gray-50 to-white rounded-lg p-6">
            {/* Y轴标签 */}
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-semibold text-gray-700 bg-white px-2 rounded shadow">
              预警订单数
            </div>
            
            {/* 图表主体 */}
            <div className="mx-16 h-full relative">
              {/* Y轴刻度 */}
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs font-medium text-gray-600">
              <span>150</span>
              <span>113</span>
              <span>75</span>
              <span>38</span>
              <span>0</span>
            </div>
              
              {/* 网格线 */}
              <div className="absolute left-16 right-16 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-300 opacity-50" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              {/* 柱状图数据 */}
              <div className="absolute left-16 right-16 h-full flex items-end justify-center pb-6">
                <div className="flex flex-col items-center relative">
                  <div className="absolute -top-10 text-sm font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded shadow">78%</div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-gray-800 px-2 py-1 rounded shadow">
                    117单
                  </div>
                  <div className="w-28 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t shadow-lg" style={{ height: '195px' }}></div>
                  <div className="text-center mt-4">
                    <div className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded">沉睡用户</div>
                    <div className="text-xs text-gray-500 mt-1">活跃监控</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* X轴标签 */}
          <div className="text-center text-base font-semibold text-gray-700 mb-6 bg-gray-100 py-2 rounded">监控类型</div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-t from-amber-600 to-amber-400 rounded shadow"></div>
              <span className="text-sm font-medium text-gray-700">预警订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-amber-700">识别率: 78%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>
    </div>
  );
};