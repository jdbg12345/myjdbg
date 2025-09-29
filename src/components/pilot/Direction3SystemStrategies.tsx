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
        过去侧重防御，缺防范套利和作弊的策略，缺提效的工具，综合导致员工对系统不信任，只能依赖个人经验，陷入恶性循环。
      </p>

      {/* 风控套利理解概览 */}
      <div className="bg-blue-50 rounded-lg p-8 mb-8 border border-blue-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">解决维度</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <h4 className="text-lg font-bold text-blue-700">系统审核策略</h4>
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

      {/* 系统审核策略 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">系</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">系统审核策略</h3>
        </div>
        <p className="text-gray-700 mb-8 leading-relaxed">
          <span className="font-semibold">策略主要集中在防御型，而非套利及作弊识别类型</span>，通过建立各游戏类型的异常行为识别机制，提升系统自动拦截能力。
        </p>
        
        {/* 1. 电子策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">电</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">电子策略</h4>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">已上线</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h5 className="font-bold text-red-700 mb-2 text-sm">问题</h5>
                <p className="text-gray-700 text-xs leading-relaxed">电子游戏卡免费旋转等套利行为难以识别</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h5 className="font-bold text-blue-700 mb-2 text-sm">策略</h5>
                <p className="text-gray-700 text-xs leading-relaxed">建立电子游戏异常行为识别机制</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h5 className="font-bold text-green-700 mb-2 text-sm">收益</h5>
                <p className="text-gray-700 text-xs leading-relaxed">拦截率达到25%</p>
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

        {/* 2. 真人策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">真</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">真人策略</h4>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">已上线</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h5 className="font-bold text-red-700 mb-2 text-sm">问题</h5>
                <p className="text-gray-700 text-xs leading-relaxed">真人游戏对打和算牌行为识别不足</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h5 className="font-bold text-blue-700 mb-2 text-sm">策略</h5>
                <p className="text-gray-700 text-xs leading-relaxed">建立真人游戏异常行为识别机制</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h5 className="font-bold text-green-700 mb-2 text-sm">收益</h5>
                <p className="text-gray-700 text-xs leading-relaxed">问题率26.7%</p>
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

        {/* 3. 体育策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">体</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">体育策略</h4>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">已上线</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h5 className="font-bold text-red-700 mb-2 text-sm">问题</h5>
                <p className="text-gray-700 text-xs leading-relaxed">体育打水和对冲套利行为监控薄弱</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h5 className="font-bold text-blue-700 mb-2 text-sm">策略</h5>
                <p className="text-gray-700 text-xs leading-relaxed">建立体育投注异常行为识别机制</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h5 className="font-bold text-green-700 mb-2 text-sm">收益</h5>
                <p className="text-gray-700 text-xs leading-relaxed">问题率22.1%</p>
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

        {/* 4. 棋牌策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">棋</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">棋牌策略</h4>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">已上线</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h5 className="font-bold text-red-700 mb-2 text-sm">问题</h5>
                <p className="text-gray-700 text-xs leading-relaxed">棋牌游戏作弊和异常胜率难以监控</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h5 className="font-bold text-blue-700 mb-2 text-sm">策略</h5>
                <p className="text-gray-700 text-xs leading-relaxed">建立棋牌游戏异常行为识别机制</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h5 className="font-bold text-green-700 mb-2 text-sm">收益</h5>
                <p className="text-gray-700 text-xs leading-relaxed">问题率23.8%</p>
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

        {/* 5. 彩票策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">彩</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">彩票策略</h4>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-600">方案中</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h5 className="font-bold text-red-700 mb-2 text-sm">问题</h5>
                <p className="text-gray-700 text-xs leading-relaxed">彩票全包和异常投注模式缺乏有效拦截</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h5 className="font-bold text-blue-700 mb-2 text-sm">策略</h5>
                <p className="text-gray-700 text-xs leading-relaxed">建立彩票游戏异常投注识别机制</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h5 className="font-bold text-green-700 mb-2 text-sm">收益</h5>
                <p className="text-gray-700 text-xs leading-relaxed">问题率25%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* 标准化风控工具 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">工</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">标准化风控工具</h3>
        </div>
        <p className="text-gray-700 mb-8 leading-relaxed">
          <span className="font-semibold">人工审核依赖个人经验，效率低且存在安全隐患</span>，通过标准化工具提升审核效率和准确性，降低人工依赖。
        </p>
        
        {/* 1. 关联下注工具 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">关</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">关联下注工具</h4>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-600">试运行中</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">完全依靠人工基于个人经验发掘关联下注（如对打）；曾经需要10人+团队从后台导出数据并在本地处理风控算法，存在严重的数据安全隐患。且操作效率低下，有效拦截率也不足。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">标准化关联下注工具</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">每月约50+%的错误出款源于此，影响约200+万/月</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 提款流水工具 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">流</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">提款流水工具</h4>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-600">待开发</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">系统逻辑多年来存在错误（锁定场馆流水双算、场馆红利多算1倍提款流水、输光后提款流水不自动达标等），导致需要人工重新手动计算流水。但计算标准模糊且执行不一致，使风控和质检部门经常因流水计算产生争议。在跨部门协作中，流水咨询形成冗长的沟通链路（用户-客服-运营-风控-运营-客服-用户），不仅浪费时间，降低用户体验并导致出款错误。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">阶段1：实现流水自动统一计算，无需人工介入；阶段2：用户在前端直接查看流水情况，目前大部分竞品已实现此体验，彻底解决这个多余过程（已提出需求，但收到无法实现的反馈）。</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">每月约5%的错误出款源于此，影响约30+万/月；效率提升一倍；用户体验改善</p>
              </div>
            </div>
            
            {/* 竞品调研情况说明 */}
            <div className="mt-8">
              <h5 className="text-lg font-bold text-gray-800 mb-4">竞品调研情况说明</h5>
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="p-4 text-left font-semibold w-48">平台</th>
                        <th className="p-4 text-left font-semibold">提款流水展示</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { platform: '易游（M6)', display: '提款界面明确显示"还需完成 XX 元投注额"' },
                        { platform: '雷竞技（Raybet）', display: '提款界面提示"需完成 XX元投注"；流水计算基于投注金额而非结算金额；有系统判定，无人工审核' },
                        { platform: '竞技宝（JJB）', display: '提款界面显示"还需XX元流水"；流水满足后显示"可提余额"与"账户余额"' },
                        { platform: '易倍体育（EMC）', display: '提款界面未直接显示流水；用户需发起提款等待人工审核' },
                        { platform: '万博（ManbetX）', display: '提款界面显示"还需完成 XX元"；并有实时更新流水，显示不同场馆流水及剩余差额' },
                        { platform: '尊龙凯时（AG）', display: '提款时弹窗提示"暂未完成流水XX USDT，提款可能被拒绝"' },
                        { platform: '金宝博（188）', display: '提款时提示"账户尚未满足流水要求"；界面可实时查看"可提款金额"和"未完成流水"，回传速度极快' },
                        { platform: '竞博（IM）', display: '提款界面直接显示可提现金额' }
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="p-4 font-semibold text-blue-700">{row.platform}</td>
                          <td className="p-4 text-gray-700">{row.display}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 体育打水工具 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">打</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">体育打水工具</h4>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-600">试运行</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">打水是体育中最常见的套利方式，目前完全依赖人工进行多平台对比，不仅耗时费力，效率极低，还无法实现全面及时的覆盖。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">通过B端百家赔率数据构建体育打水实时查询工具</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">每月约5%的错误出款源于此，影响约30+万/月</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 极端异常预防机制 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">钱</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">中心钱包多钱</h4>
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">场</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">场馆钱包多钱</h4>
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">盈</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">盈利监控预警</h4>
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">睡</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">沉睡用户活跃</h4>
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
  );
};