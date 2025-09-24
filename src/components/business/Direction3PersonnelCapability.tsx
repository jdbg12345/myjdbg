import React from 'react';
import { Settings } from 'lucide-react';

export const Direction3PersonnelCapability = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">3</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">系统审核策略的维度缺失</h2>
      </div>
      <p className="text-gray-700 mb-8 leading-relaxed">
        <span className="font-semibold">缺少作弊拦截策略，系统直接出款错误率高</span>，需要补充多维度风控策略，提升系统智能化水平。
      </p>

      {/* 1. 电子策略 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">电</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">电子策略</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">电子游戏缺乏有效的风控策略，卡免费旋转等套利行为难以识别</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">电子卡免费拦截策略上线，套利行为拦截率达到95%，有效防范电子游戏风险</div>
          </div>
        </div>
        
        {/* 电子策略图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">电子策略效果</h5>
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
                  <div className="absolute -top-8 text-sm font-semibold text-yellow-600">95%</div>
                  <div className="w-24 bg-yellow-500 rounded-t" style={{ height: '228px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">285单</div>
                    <div className="text-sm text-gray-600">电子策略</div>
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
              <span className="text-sm text-gray-600">拦截率: 95%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 2. 真人策略 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">真</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">真人策略</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">真人游戏算牌行为和异常胜率难以系统化识别</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">真人算牌风险检测上线，异常胜率识别率达到87%，有效防范真人游戏作弊</div>
          </div>
        </div>
        
        {/* 真人策略图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">真人策略效果</h5>
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
                  <div className="absolute -top-8 text-sm font-semibold text-pink-600">87%</div>
                  <div className="w-24 bg-pink-500 rounded-t" style={{ height: '209px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">218单</div>
                    <div className="text-sm text-gray-600">真人策略</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-pink-500"></div>
              <span className="text-sm text-gray-600">识别订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">识别率: 87%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 3. 体育策略 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">体</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">体育策略</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">体育投注对打风险和野鸡赛事识别困难，缺乏系统化检测</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">体育对打风险检测和野鸡赛事识别，异常投注识别率达到82%</div>
          </div>
        </div>
        
        {/* 体育策略图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">体育策略效果</h5>
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
                  <div className="absolute -top-8 text-sm font-semibold text-green-600">82%</div>
                  <div className="w-24 bg-green-500 rounded-t" style={{ height: '197px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">164单</div>
                    <div className="text-sm text-gray-600">体育策略</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500"></div>
              <span className="text-sm text-gray-600">识别订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">识别率: 82%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 4. 彩票策略 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">彩</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">彩票策略</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">彩票全包套利和异常盈利行为缺乏有效监控机制</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">彩票全包套利检测和异常盈利监控，套利行为识别率达到79%</div>
          </div>
        </div>
        
        {/* 彩票策略图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">彩票策略效果</h5>
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
                  <div className="absolute -top-8 text-sm font-semibold text-blue-600">79%</div>
                  <div className="w-24 bg-blue-500 rounded-t" style={{ height: '190px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">119单</div>
                    <div className="text-sm text-gray-600">彩票策略</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500"></div>
              <span className="text-sm text-gray-600">识别订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">识别率: 79%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 5. 棋牌策略 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">棋</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">棋牌策略</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">牌坊风险和棋牌对打行为缺乏系统化的检测和防范</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">牌坊风险防范和棋牌对打检测上线，异常操作识别率达到91%</div>
          </div>
        </div>
        
        {/* 棋牌策略图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">棋牌策略效果</h5>
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
                  <div className="absolute -top-8 text-sm font-semibold text-gray-600">91%</div>
                  <div className="w-24 bg-gray-500 rounded-t" style={{ height: '218px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">228单</div>
                    <div className="text-sm text-gray-600">棋牌策略</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-500"></div>
              <span className="text-sm text-gray-600">识别订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">识别率: 91%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>
    </div>
  );
};