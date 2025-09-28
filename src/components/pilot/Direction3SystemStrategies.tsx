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

      {/* 系统审核策略 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">系</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">系统审核策略</h3>
        </div>
        <p className="text-gray-700 mb-8 leading-relaxed">
          <span className="font-semibold">建立多维度游戏套利识别机制</span>，针对不同游戏类型的特定套利手法进行精准拦截，提升系统自动审核能力。
        </p>
        
        {/* 电子策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 border border-blue-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">电</span>
                </div>
                <h5 className="text-lg font-bold text-gray-800">电子策略</h5>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 ml-3">已上线</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h6 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  问题
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">电子游戏中存在卡免费旋转、利用游戏漏洞等套利行为，传统人工审核难以及时识别。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h6 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  策略
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">建立电子游戏异常行为识别模型，自动检测卡免费、异常盈利等套利模式。</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h6 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  收益
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">电子游戏套利识别率提升<span className="font-bold text-green-600">85%</span></p>
              </div>
            </div>

            {/* 电子策略效果图表 */}
            <div className="mt-6">
              <h6 className="text-md font-bold text-gray-800 mb-4">电子策略效果图表</h6>
              <div className="relative h-64 mb-4 bg-gray-50 rounded-lg p-8">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
                  命中订单数
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
                  准确率 (%)
                </div>
                
                <div className="mx-12 h-full relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                    <span>1200</span>
                    <span>900</span>
                    <span>600</span>
                    <span>300</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-6 right-6 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-6 right-6 h-full flex items-end justify-around pb-4">
                    {[
                      { name: '卡免费', rate: 92 },
                      { name: '异常盈利', rate: 88 },
                      { name: '游戏漏洞', rate: 85 }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="mb-2">
                          <div 
                            className="w-8 bg-blue-500 rounded-t"
                            style={{ height: `${(item.rate / 100) * 100}px` }}
                          ></div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-800 font-medium">{item.name}</div>
                          <div className="text-xs text-blue-600 font-bold">{item.rate}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center text-sm font-medium text-gray-600 mb-4">策略类型</div>
              
              <div className="flex justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-gray-700">拦截率</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>

        {/* 真人策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 border border-blue-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">真</span>
                </div>
                <h5 className="text-lg font-bold text-gray-800">真人策略</h5>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 ml-3">已上线</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h6 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  问题
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">真人游戏中存在算牌、看牌等作弊行为，需要专业的识别技术。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h6 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  策略
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">建立真人游戏行为分析模型，识别算牌、异常胜率等作弊模式。</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h6 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  收益
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">真人游戏作弊识别率提升<span className="font-bold text-green-600">78%</span></p>
              </div>
            </div>

            {/* 真人策略效果图表 */}
            <div className="mt-6">
              <h6 className="text-md font-bold text-gray-800 mb-4">真人策略效果图表</h6>
              <div className="relative h-48 mb-4 bg-gray-50 rounded-lg p-4">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
                  命中订单数
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
                  准确率 (%)
                </div>
                
                <div className="mx-12 h-full relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                    <span>800</span>
                    <span>600</span>
                    <span>400</span>
                    <span>200</span>
                    <span>0%</span>
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
                      <div className="mb-2">
                        <div className="w-20 bg-blue-500 rounded-t" style={{ height: '160px' }}></div>
                      </div>
                      
                      <div 
                        className="absolute w-4 h-4 bg-orange-500 rounded-full border-2 border-white"
                        style={{top: '22%', left: '50%', transform: 'translateX(-50%)'}}
                      >
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                          78%
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <div className="text-sm text-gray-800 font-medium">真人算牌策略</div>
                        <div className="text-xs text-gray-500 mt-1">640单 (78%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center text-sm font-medium text-gray-600 mb-4">策略效果</div>
              
              <div className="flex justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-gray-700">命中订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">策略准确率</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>

        {/* 体育策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 border border-blue-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">体</span>
                </div>
                <h5 className="text-lg font-bold text-gray-800">体育策略</h5>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-600 ml-3">开发中</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h6 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  问题
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">体育投注中存在对打、套利等行为，需要复杂的关联分析。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h6 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  策略
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">建立体育投注行为分析模型，识别对打、套利等异常投注模式。</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h6 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  收益
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">预计体育套利识别率提升<span className="font-bold text-green-600">80%</span></p>
              </div>
            </div>

            {/* 体育策略效果图表 */}
            <div className="mt-6">
              <h6 className="text-md font-bold text-gray-800 mb-4">体育策略预期效果图表</h6>
              <div className="relative h-64 mb-4 bg-gray-50 rounded-lg p-8">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
                  预期命中订单数
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
                  预期准确率 (%)
                </div>
                
                <div className="mx-12 h-full relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                    <span>1000</span>
                    <span>750</span>
                    <span>500</span>
                    <span>250</span>
                    <span>0%</span>
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
                      <div className="mb-2">
                        <div className="w-20 bg-yellow-500 rounded-t" style={{ height: '160px' }}></div>
                      </div>
                      
                      <div 
                        className="absolute w-4 h-4 bg-orange-500 rounded-full border-2 border-white"
                        style={{top: '20%', left: '50%', transform: 'translateX(-50%)'}}
                      >
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                          80%
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <div className="text-sm text-gray-800 font-medium">体育对打策略</div>
                        <div className="text-xs text-gray-500 mt-1">800单 (80%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center text-sm font-medium text-gray-600 mb-4">策略效果</div>
              
              <div className="flex justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                  <span className="text-gray-700">预期命中订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">预期准确率</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>

        {/* 棋牌策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 border border-blue-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">棋</span>
                </div>
                <h5 className="text-lg font-bold text-gray-800">棋牌策略</h5>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 ml-3">已上线</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h6 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  问题
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">棋牌游戏中存在合伙作弊、机器人等风险行为。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h6 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  策略
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">建立棋牌游戏行为分析模型，识别合伙作弊、机器人等异常行为。</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h6 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  收益
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">棋牌套利策略问题率23.8%，精准定位异常行为</p>
              </div>
            </div>

            {/* 棋牌策略效果图表 */}
            <div className="mt-6">
              <h6 className="text-md font-bold text-gray-800 mb-4">棋牌策略效果图表</h6>
              <div className="relative h-64 mb-4 bg-gray-50 rounded-lg p-8">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
                  命中订单数
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
                  准确率 (%)
                </div>
                
                <div className="mx-12 h-full relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                    <span>300</span>
                    <span>225</span>
                    <span>150</span>
                    <span>75</span>
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
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                  
                      <div className="mb-2">
                        <div className="w-20 bg-blue-500 rounded-t" style={{ height: '140px' }}></div>
                      </div>
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                        style={{top: '76.2%', left: '50%', transform: 'translateX(-50%)'}}
                  
                  <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                    <div className="flex flex-col items-center relative">
                      <div className="w-20 bg-blue-500 rounded-t" style={{ height: '210px' }}></div>
                      
                      <div 
                        className="absolute w-4 h-4 bg-orange-500 rounded-full border-2 border-white"
                        style={{bottom: `${24 + (23.8 / 28) * 200}px`, left: '50%', transform: 'translateX(-50%)'}}
                      >
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                          23.8%
                        </div>
                      </div>
                      
              <div className="text-center text-sm font-medium text-gray-600 mb-4">策略效果</div>
                        <div className="text-xs text-gray-500 mt-1">210单 (23.8%)</div>
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-700">命中订单数</span>
              </div>
              
              <div className="text-center text-sm font-medium text-gray-600 mb-4">策略类型对比</div>
                  <span className="text-gray-700">策略准确率</span>
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
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 border border-blue-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">彩</span>
                </div>
                <h5 className="text-lg font-bold text-gray-800">彩票策略</h5>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 ml-3">方案中</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h6 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  问题
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">彩票游戏中存在全包、异常投注等套利行为。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h6 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  策略
                </h6>
                <p className="text-gray-700 text-sm leading-relaxed">建立彩票投注模式分析，识别全包、异常投注等套利行为。</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h6 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  收益
              <div className="relative h-64 mb-4 bg-gray-50 rounded-lg p-8">
                <p className="text-gray-700 text-sm leading-relaxed">彩票套利策略问题率25%，有效识别全包行为</p>
                  规划命中订单数
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
                  规划准确率 (%)
            </div>

                <div className="mx-12 h-full relative">
            <div className="mt-6">
                    <span>600</span>
                    <span>450</span>
                    <span>300</span>
                    <span>150</span>
                </div>
                
                <div className="mx-6 h-full relative">
                  <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-orange-500">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                    <div className="flex flex-col items-center relative">
                      <div className="mb-2">
                        <div className="w-20 bg-gray-500 rounded-t" style={{ height: '120px' }}></div>
                      </div>
                      
                      <div 
                        className="absolute w-4 h-4 bg-orange-500 rounded-full border-2 border-white"
                        style={{top: '25%', left: '50%', transform: 'translateX(-50%)'}}
                      >
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                          75%
                      </div>
                      >
                      
                      <div className="text-center mt-4">
                        <div className="text-sm text-gray-800 font-medium">彩票全包策略</div>
                        <div className="text-xs text-gray-500 mt-1">450单 (75%)</div>
                      </div>
                    </div>
                          23.8%
                        </div>
                      </div>
                      
              <div className="text-center text-sm font-medium text-gray-600 mb-4">策略效果</div>
                        <div className="text-sm text-gray-800 font-medium">棋牌合伙策略</div>
                        <div className="text-xs text-gray-500 mt-1">210单 (23.8%)</div>
                      </div>
              <>
                <div className="text-center text-sm font-medium text-gray-600 mb-4">策略效果</div>
                
                <div className="flex justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-gray-700">命中订单数</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">策略准确率</span>
                  </div>
                </div>
                
                <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
              </>
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
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
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
              <div className="relative h-64 mb-4 bg-gray-50 rounded-lg p-8">
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
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
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
          </div>
        </div>

        {/* 3. 体育打水工具 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
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
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
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
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
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
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
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
          <div className="bg-white rounded-lg p-6 border border-gray-200">
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