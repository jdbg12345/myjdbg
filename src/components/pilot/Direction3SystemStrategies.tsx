import React from 'react';

export const Direction3SystemStrategies = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">3</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">系统审核策略的维度缺失</h2>
      </div>
      <p className="text-gray-700 mb-8 leading-relaxed">
        目前系统的策略主要集中在防御型，而非套利及作弊识别类型，导致直接出款错误，以及转人工后缺乏强有力的风险提醒。
      </p>
    
      {/* 1. 电子策略 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">电</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">电子策略</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">电子游戏卡免费旋转等套利行为难以识别，系统缺乏有效的电子游戏异常行为监控机制</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">电子卡免费策略拦截率达到25%，有效防范套利行为，显著提升电子游戏风控能力</div>
          </div>
        </div>
        
        {/* 电子策略图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h5 className="text-lg font-semibold text-gray-900 mb-6 text-center bg-gradient-to-r from-blue-50 to-indigo-50 py-3 rounded-lg">电子卡免费策略拦截效果</h5>
          <div className="relative h-80 mb-8 bg-gradient-to-br from-gray-50 to-white rounded-lg p-6">
            {/* Y轴标签 */}
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-semibold text-gray-700 bg-white px-2 rounded shadow">
              拦截订单数
            </div>
            
            {/* 图表主体 */}
            <div className="mx-16 h-full relative">
              {/* Y轴刻度 */}
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs font-medium text-gray-600">
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
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
                  <div className="absolute -top-10 text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded shadow">25%</div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-gray-800 px-2 py-1 rounded shadow">
                    400单
                  </div>
                  <div className="w-28 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t shadow-lg" style={{ height: '200px' }}></div>
                  <div className="text-center mt-4">
                    <div className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded">电子卡免费</div>
                    <div className="text-xs text-gray-500 mt-1">拦截策略</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* X轴标签 */}
          <div className="text-center text-base font-semibold text-gray-700 mb-6 bg-gray-100 py-2 rounded">策略类型</div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-t from-blue-600 to-blue-400 rounded shadow"></div>
              <span className="text-sm font-medium text-gray-700">拦截订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-blue-700">问题率: 25%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 真人策略 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">真</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">真人策略</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">真人游戏对打和算牌行为识别不足，缺乏对真人游戏异常投注模式的有效监控</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">真人套利策略问题率26.7%，精准识别异常行为，大幅提升真人游戏风控效果</div>
          </div>
        </div>
        
        {/* 真人策略图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h5 className="text-lg font-semibold text-gray-900 mb-6 text-center bg-gradient-to-r from-blue-50 to-indigo-50 py-3 rounded-lg">真人套利策略拦截效果</h5>
          <div className="relative h-80 mb-8 bg-gradient-to-br from-gray-50 to-white rounded-lg p-6">
            {/* Y轴标签 */}
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-semibold text-gray-700 bg-white px-2 rounded shadow">
              拦截订单数
            </div>
            
            {/* 图表主体 */}
            <div className="mx-16 h-full relative">
              {/* Y轴刻度 */}
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs font-medium text-gray-600">
                <span>500</span>
                <span>375</span>
                <span>250</span>
                <span>125</span>
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
                  <div className="absolute -top-10 text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded shadow">26.7%</div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-gray-800 px-2 py-1 rounded shadow">
                    450单
                  </div>
                  <div className="w-28 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t shadow-lg" style={{ height: '225px' }}></div>
                  <div className="text-center mt-4">
                    <div className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded">真人套利</div>
                    <div className="text-xs text-gray-500 mt-1">拦截策略</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* X轴标签 */}
          <div className="text-center text-base font-semibold text-gray-700 mb-6 bg-gray-100 py-2 rounded">策略类型</div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-t from-blue-600 to-blue-400 rounded shadow"></div>
              <span className="text-sm font-medium text-gray-700">拦截订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-blue-700">问题率: 26.7%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 体育策略 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">体</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">体育策略</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">体育打水和对冲套利行为监控薄弱，无法有效识别跨平台套利和异常投注行为</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">体育套利策略覆盖面广，问题率22.1%，有效拦截体育投注中的套利行为</div>
          </div>
        </div>
        
        {/* 体育策略图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h5 className="text-lg font-semibold text-gray-900 mb-6 text-center bg-gradient-to-r from-red-50 to-pink-50 py-3 rounded-lg">体育套利策略拦截效果</h5>
          <div className="relative h-80 mb-8 bg-gradient-to-br from-gray-50 to-white rounded-lg p-6">
            {/* Y轴标签 */}
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-semibold text-gray-700 bg-white px-2 rounded shadow">
              拦截订单数
            </div>
            
            {/* 图表主体 */}
            <div className="mx-16 h-full relative">
              {/* Y轴刻度 */}
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs font-medium text-gray-600">
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
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
                  <div className="absolute -top-10 text-sm font-semibold text-red-700 bg-red-50 px-3 py-1 rounded shadow">22.1%</div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-gray-800 px-2 py-1 rounded shadow">
                    380单
                  </div>
                  <div className="w-28 bg-gradient-to-t from-red-600 to-red-400 rounded-t shadow-lg" style={{ height: '190px' }}></div>
                  <div className="text-center mt-4">
                    <div className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded">体育套利</div>
                    <div className="text-xs text-gray-500 mt-1">拦截策略</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* X轴标签 */}
          <div className="text-center text-base font-semibold text-gray-700 mb-6 bg-gray-100 py-2 rounded">策略类型</div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-t from-red-600 to-red-400 rounded shadow"></div>
              <span className="text-sm font-medium text-gray-700">拦截订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-red-700">问题率: 22.1%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 彩票策略 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">彩</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">彩票策略</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">彩票全包和异常投注模式缺乏有效拦截，无法识别彩票游戏中的套利行为</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">彩票套利策略问题率25%，有效识别全包行为，显著提升彩票游戏风控水平</div>
          </div>
        </div>
        
        {/* 彩票策略图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h5 className="text-lg font-semibold text-gray-900 mb-6 text-center bg-gradient-to-r from-purple-50 to-indigo-50 py-3 rounded-lg">彩票套利策略拦截效果</h5>
          <div className="relative h-80 mb-8 bg-gradient-to-br from-gray-50 to-white rounded-lg p-6">
            {/* Y轴标签 */}
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-semibold text-gray-700 bg-white px-2 rounded shadow">
              拦截订单数
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
                  <div className="absolute -top-10 text-sm font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded shadow">25.0%</div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-gray-800 px-2 py-1 rounded shadow">
                    280单
                  </div>
                  <div className="w-28 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t shadow-lg" style={{ height: '210px' }}></div>
                  <div className="text-center mt-4">
                    <div className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded">彩票套利</div>
                    <div className="text-xs text-gray-500 mt-1">拦截策略</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* X轴标签 */}
          <div className="text-center text-base font-semibold text-gray-700 mb-6 bg-gray-100 py-2 rounded">策略类型</div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-t from-purple-600 to-purple-400 rounded shadow"></div>
              <span className="text-sm font-medium text-gray-700">拦截订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-purple-700">问题率: 25.0%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 棋牌策略 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">棋</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">棋牌策略</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">棋牌游戏作弊和异常胜率难以监控，缺乏对棋牌游戏异常行为的有效识别</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">棋牌套利策略问题率23.8%，精准定位异常行为，有效提升棋牌游戏安全性</div>
          </div>
        </div>
        
        {/* 棋牌策略图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h5 className="text-lg font-semibold text-gray-900 mb-6 text-center bg-gradient-to-r from-yellow-50 to-orange-50 py-3 rounded-lg">棋牌套利策略拦截效果</h5>
          <div className="relative h-80 mb-8 bg-gradient-to-br from-gray-50 to-white rounded-lg p-6">
            {/* Y轴标签 */}
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-semibold text-gray-700 bg-white px-2 rounded shadow">
              拦截订单数
            </div>
            
            {/* 图表主体 */}
            <div className="mx-16 h-full relative">
              {/* Y轴刻度 */}
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs font-medium text-gray-600">
                <span>250</span>
                <span>188</span>
                <span>125</span>
                <span>63</span>
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
                  <div className="absolute -top-10 text-sm font-semibold text-yellow-700 bg-yellow-50 px-3 py-1 rounded shadow">23.8%</div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-gray-800 px-2 py-1 rounded shadow">
                    210单
                  </div>
                  <div className="w-28 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-t shadow-lg" style={{ height: '210px' }}></div>
                  <div className="text-center mt-4">
                    <div className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded">棋牌套利</div>
                    <div className="text-xs text-gray-500 mt-1">拦截策略</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* X轴标签 */}
          <div className="text-center text-base font-semibold text-gray-700 mb-6 bg-gray-100 py-2 rounded">策略类型</div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded shadow"></div>
              <span className="text-sm font-medium text-gray-700">拦截订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-yellow-700">问题率: 23.8%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>
    </div>
  );
};