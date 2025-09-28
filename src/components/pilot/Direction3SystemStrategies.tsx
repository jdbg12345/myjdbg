import React from 'react';

export const Direction3SystemStrategies = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">方向2</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">系统问题-支持不够</h2>
        </div>
      </div>
      <p className="text-gray-700 mb-8 leading-relaxed">
        目前系统的策略主要集中在防御型，而非套利及作弊识别类型，导致直接出款错误，以及转人工后缺乏强有力的风险提醒。
      </p>

      {/* 风控套利理解概览 */}
      <div className="bg-blue-50 rounded-lg p-8 mb-8 border border-blue-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">风控套利理解概览</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <h4 className="text-lg font-bold text-blue-700">游戏典型套利</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              按照每个游戏的典型套利手法进行精准拦截，如电子卡免费、真人算牌、体育打水、彩票全包等特定游戏场景的套利行为识别
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 border-l-4 border-green-600">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <h4 className="text-lg font-bold text-green-700">特征组合兜底</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              不考虑具体游戏类型，通过多维度特征组合（如投注模式、时间规律、金额分布等）进行兜底判定，捕获未知套利手法
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 border-l-4 border-orange-600">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <h4 className="text-lg font-bold text-orange-700">多维度覆盖</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              覆盖线上线下红利套利、活动套利、代理佣金套利等多个维度，构建全方位的风控防护体系
            </p>
          </div>
        </div>
      </div>
    
      {/* 1. 电子策略 */}
      <div className="mb-12">
        {/* 整合的内容和图表模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">电</span>
            </div>
              <h4 className="text-xl font-bold text-gray-800">电子策略</h4>
            </div>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">已上线</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">电子游戏卡免费旋转等套利行为难以识别，系统缺乏有效的电子游戏异常行为监控机制</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">建立电子游戏异常行为识别机制，重点监控卡免费旋转等套利行为</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">电子卡免费策略拦截率达到25%，有效防范套利行为，显著提升电子游戏风控能力</p>
            </div>
          </div>
        
          {/* 电子策略图表 */}
          <div className="mt-8">
          <div className="relative h-96 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="absolute left-2 top-1/3 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              拦截订单数
            </div>
            <div className="absolute right-2 top-2/3 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
              准确率 (%)
            </div>
            
            <div className="mx-12 h-full relative">
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>
              
              <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-orange-500">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
              
              <div className="absolute left-12 right-12 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                <div className="flex flex-col items-center relative">
                  <div className="w-20 bg-blue-500 rounded-t" style={{ height: '200px' }}></div>
                  
                  {/* 准确率数据点 */}
                  <div 
                    className="absolute w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg"
                    style={{top: `${100 - 25 - 10}%`, left: '50%', transform: 'translateX(-50%)'}}
                  >
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-md">
                      25%
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-500 mt-1">400单 (25%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span className="text-gray-700">拦截订单数</span>
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

      {/* 真人策略 */}
      <div className="mb-12">
        {/* 整合的内容和图表模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">真</span>
            </div>
              <h4 className="text-xl font-bold text-gray-800">真人策略</h4>
            </div>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">已上线</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">真人游戏对打和算牌行为识别不足，缺乏对真人游戏异常投注模式的有效监控</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">建立真人游戏异常行为识别机制，重点监控对打和算牌等套利行为</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">真人套利策略问题率26.7%，精准识别异常行为，大幅提升真人游戏风控效果</p>
            </div>
          </div>
        
          {/* 真人策略图表 */}
          <div className="mt-8">
          <div className="relative h-96 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="absolute left-2 top-1/3 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              拦截订单数
            </div>
            <div className="absolute right-2 top-2/3 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
              准确率 (%)
            </div>
            
            <div className="mx-12 h-full relative">
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                <span>500</span>
                <span>375</span>
                <span>250</span>
                <span>125</span>
                <span>0</span>
              </div>
              
              <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-orange-500">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
              
              <div className="absolute left-12 right-12 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                <div className="flex flex-col items-center relative">
                  <div className="w-20 bg-blue-500 rounded-t" style={{ height: '225px' }}></div>
                  
                  {/* 准确率数据点 */}
                  <div 
                    className="absolute w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg"
                    style={{top: `${100 - 26.7 - 10}%`, left: '50%', transform: 'translateX(-50%)'}}
                  >
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-md">
                      26.7%
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-500 mt-1">450单 (26.7%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span className="text-gray-700">拦截订单数</span>
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

      {/* 体育策略 */}
      <div className="mb-12">
        {/* 整合的内容和图表模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">体</span>
            </div>
              <h4 className="text-xl font-bold text-gray-800">体育策略</h4>
            </div>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">已上线</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">体育打水和对冲套利行为监控薄弱，无法有效识别跨平台套利和异常投注行为</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">建立体育投注异常行为识别机制，重点监控打水和对冲套利行为</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">体育套利策略覆盖面广，问题率22.1%，有效拦截体育投注中的套利行为</p>
            </div>
          </div>
        
          {/* 体育策略图表 */}
          <div className="mt-8">
          <div className="relative h-96 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="absolute left-2 top-1/3 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              拦截订单数
            </div>
            <div className="absolute right-2 top-2/3 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
              准确率 (%)
            </div>
            
            <div className="mx-12 h-full relative">
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>
              
              <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-orange-500">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
              
              <div className="absolute left-12 right-12 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                <div className="flex flex-col items-center relative">
                  <div className="w-20 bg-blue-500 rounded-t" style={{ height: '190px' }}></div>
                  
                  {/* 准确率数据点 */}
                  <div 
                    className="absolute w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg"
                    style={{top: `${100 - 22.1 - 10}%`, left: '50%', transform: 'translateX(-50%)'}}
                  >
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-md">
                      22.1%
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-500 mt-1">380单 (22.1%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-600 rounded"></div>
              <span className="text-gray-700">拦截订单数</span>
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

      {/* 棋牌策略 */}
      <div className="mb-12">
        {/* 整合的内容模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">棋</span>
            </div>
              <h4 className="text-xl font-bold text-gray-800">棋牌策略</h4>
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">已上线</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">棋牌游戏作弊和异常胜率难以监控，缺乏对棋牌游戏异常行为的有效识别</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">建立棋牌游戏异常行为识别机制，重点监控作弊和异常胜率行为</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">棋牌套利策略问题率23.8%，精准定位异常行为，有效提升棋牌游戏安全性</p>
            </div>
          </div>
        
          {/* 棋牌策略图表 */}
          <div className="mt-8">
          <div className="relative h-96 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="absolute left-2 top-1/3 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              拦截订单数
            </div>
            <div className="absolute right-2 top-2/3 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
              准确率 (%)
            </div>
            
            <div className="mx-12 h-full relative">
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                <span>250</span>
                <span>188</span>
                <span>125</span>
                <span>63</span>
                <span>0</span>
              </div>
              
              <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-orange-500">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
              
              <div className="absolute left-12 right-12 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                <div className="flex flex-col items-center relative">
                  <div className="w-20 bg-blue-500 rounded-t" style={{ height: '210px' }}></div>
                  
                  {/* 准确率数据点 */}
                  <div 
                    className="absolute w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg"
                    style={{top: `${100 - 23.8 - 10}%`, left: '50%', transform: 'translateX(-50%)'}}
                  >
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-md">
                      23.8%
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-500 mt-1">210单 (23.8%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-gray-700">拦截订单数</span>
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

      {/* 彩票策略 */}
      <div className="mb-12">
        {/* 整合的内容模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">彩</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">彩票策略</h4>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 ml-3">方案中</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">彩票全包和异常投注模式缺乏有效拦截，无法识别彩票游戏中的套利行为</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">建立彩票游戏异常投注识别机制，重点监控全包和套利行为</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">彩票套利策略问题率25%，有效识别全包行为，显著提升彩票游戏风控水平</p>
            </div>
          </div>
        </div>
      </div>

      {/* 套利兜底组合策略 */}
      <div className="mb-8">
        {/* 整合的内容和图表模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">套</span>
            </div>
              <h4 className="text-xl font-bold text-gray-800">套利兜底组合策略</h4>
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">已上线</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">单一策略无法覆盖所有套利手法，需要多特征组合进行兜底判定</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">建立多特征组合兜底机制，通过综合分析进行套利识别</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">套利兜底策略问题率22.1%，作为最后防线有效拦截漏网套利行为</p>
            </div>
          </div>
        
          {/* 套利兜底组合策略图表 */}
          <div className="mt-8">
          <div className="relative h-96 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="absolute left-2 top-1/3 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              拦截订单数
            </div>
            <div className="absolute right-2 top-2/3 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
              准确率 (%)
            </div>
            
            <div className="mx-12 h-full relative">
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>
              
              <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-orange-500">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
              
              <div className="absolute left-12 right-12 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                <div className="flex flex-col items-center relative">
                  <div className="w-20 bg-blue-500 rounded-t" style={{ height: '190px' }}></div>
                  
                  {/* 准确率数据点 */}
                  <div 
                    className="absolute w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg"
                    style={{top: `${100 - 22.1 - 10}%`, left: '50%', transform: 'translateX(-50%)'}}
                  >
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-md">
                      22.1%
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-500 mt-1">380单 (22.1%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-gray-700">拦截订单数</span>
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

      {/* 极端异常预防机制 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">极</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">极端异常预防机制</h3>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">
            <span className="font-semibold">流程缺陷及策略局限导致异常资金风险</span>，针对场馆多钱、沉睡用户等极端情况建立预警和防御策略，确保资金安全。
          </p>
          
          {/* 1. 钱包预警 */}
          <div className="mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">钱</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">中心钱包多钱</h4>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-600">试运行</span>
              </div>
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
          </div>

          {/* 2. 场馆多钱 */}
          <div className="mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">场</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">场馆钱包多钱</h4>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-600">试运行</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    问题
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">场馆账户异常增加资金，缺乏有效的监控和预警机制</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    策略
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">建立场馆资金异常监控机制，实时预警异常资金变动</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    收益
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">场馆多钱预警机制上线，异常资金识别率达到92%，有效防范资金风险</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. 盈利监控预警 */}
          <div className="mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">盈</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">盈利监控预警</h4>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-600">试运行</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    问题
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">场馆、游戏、单笔、持续等盈利维度进行监控</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    策略
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">场馆、游戏、单笔、持续等盈利维度进行监控</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    收益
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">场馆多钱预警机制上线，异常资金识别率达到92%，有效防范资金风险</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 4. 沉睡用户 */}
          <div className="mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">睡</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">沉睡用户活跃</h4>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-600">方案中</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    问题
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">长期沉睡用户突然活跃，可能存在账号被盗或异常操作风险</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    策略
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">建立沉睡用户活跃预警机制，监控异常登录和操作行为</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    收益
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">沉睡用户活跃预警机制，异常账号识别率78%，有效防范账号盗用风险</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};