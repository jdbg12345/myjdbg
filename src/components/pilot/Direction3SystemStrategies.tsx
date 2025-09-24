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
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-end justify-between h-64 mb-4">
              <div className="flex flex-col items-center flex-1 mx-2">
                <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '240px'}}>35%</div>
                <div className="bg-blue-500 w-full rounded-t transition-all duration-300" style={{height: '140px'}}></div>
                <div className="text-sm text-gray-600 mt-2">调整前</div>
                <div className="text-xs text-gray-500">400单</div>
              </div>
              <div className="flex flex-col items-center flex-1 mx-2">
                <div className="text-sm font-semibold text-green-600 mb-2" style={{marginBottom: '200px'}}>5%</div>
                <div className="bg-green-500 w-full rounded-t transition-all duration-300" style={{height: '20px'}}></div>
                <div className="text-sm text-gray-600 mt-2">调整后</div>
                <div className="text-xs text-gray-500">380单</div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-blue-500 mr-2"></span>
                  <span className="text-sm text-gray-600">调整前问题率</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>
                  <span className="text-sm text-gray-600">调整后问题率</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <div className="text-xs text-gray-500">
                统计周期：2025-04-01 ~ 2025-06-30 | X轴：调整前后 | Y轴：问题率(%)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 真人策略 */}
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
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="relative h-64">
            <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>500</span>
              <span>375</span>
              <span>250</span>
              <span>125</span>
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
                  <div className="absolute -top-8 text-sm font-semibold text-blue-600">26.7%</div>
                  <div className="w-24 bg-blue-500 rounded-t" style={{ height: '180px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">450单</div>
                    <div className="text-sm text-gray-600">真人套利</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                        
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500"></div>
              <span className="text-sm text-gray-600">拦截订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">问题率: 26.7%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 3. 体育策略 */}
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
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="relative h-64">
            <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>400</span>
              <span>300</span>
              <span>200</span>
              <span>100</span>
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
                  <div className="absolute -top-8 text-sm font-semibold text-red-600">22.1%</div>
                  <div className="w-24 bg-red-500 rounded-t" style={{ height: '152px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">380单</div>
                    <div className="text-sm text-gray-600">体育套利</div>
                  </div>
                </div>
              </div>
            </div>
          </div>                  
                        
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500"></div>
              <span className="text-sm text-gray-600">拦截订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">问题率: 22.1%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 4. 彩票策略 */}
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
        <div className="bg-white p-6 rounded-lg border border-gray-200">
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
                  <div className="absolute -top-8 text-sm font-semibold text-purple-600">25.0%</div>
                  <div className="w-24 bg-purple-500 rounded-t" style={{ height: '168px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">280单</div>
                    <div className="text-sm text-gray-600">彩票套利</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                        
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500"></div>
              <span className="text-sm text-gray-600">拦截订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">问题率: 25.0%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 5. 棋牌策略 */}
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
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="relative h-64">
            <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>250</span>
              <span>188</span>
              <span>125</span>
              <span>63</span>
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
                  <div className="absolute -top-8 text-sm font-semibold text-yellow-600">23.8%</div>
                  <div className="w-24 bg-yellow-500 rounded-t" style={{ height: '168px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">210单</div>
                    <div className="text-sm text-gray-600">棋牌套利</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                        
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500"></div>
              <span className="text-sm text-gray-600">拦截订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">问题率: 23.8%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>
    </div>
  );
};