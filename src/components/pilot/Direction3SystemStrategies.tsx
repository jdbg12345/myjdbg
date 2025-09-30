import React from 'react';

export const Direction3SystemStrategies = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-8 border border-blue-200 shadow-md">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">方向2</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">系统问题-支持不够</h2>
        </div>
        <div className="text-gray-600 text-lg">
          从系统审核策略、风控工具合集、极端异常预防等三个维度进行优化
        </div>
      </div>

      {/* 系统审核策略 */}
      <div className="bg-white rounded-xl p-8 mb-8 border border-gray-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">1</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-800">系统审核策略</h3>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 mb-8 border border-blue-200 shadow-sm">
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-sm mr-4 mt-1 flex-shrink-0 shadow-md">1</div>
              <div>
                <span className="font-bold text-gray-800 text-base">精准策略：按游戏类型提取并建模典型套利特征</span>
                <div className="text-sm text-gray-600 mt-2">如电子卡免费、真人对打、体育打水、彩票全包、棋牌移分等</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-sm mr-4 mt-1 flex-shrink-0 shadow-md">2</div>
              <div>
                <span className="font-bold text-gray-800 text-base">防御策略：基于套利结果构建兜底式组合识别策略</span>
                <div className="text-sm text-gray-600 mt-2">如玩家/代理的关联、红利金额/比例、流水异常等</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-sm mr-4 mt-1 flex-shrink-0 shadow-md">3</div>
              <div>
                <span className="font-bold text-gray-800 text-base">基础保障：打通Y/B跨站点及B/C端系统链路</span>
                <div className="text-sm text-gray-600 mt-2">实现数据与策略协同，提升审核的准确性与时效性，降低直接出款错误</div>
              </div>
            </div>
          </div>
        </div>
    
        {/* 1. 电子策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">1.1</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">电子策略</h4>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 shadow-sm">已上线</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h5 className="font-bold text-red-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-xs leading-relaxed">卡免费是最典型的套利或藏分手段。目前系统在自动出款及人工审核环节中对此识别不足，仍存在较多遗漏，每月都有损失100万+/月。</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                <h5 className="font-bold text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-xs leading-relaxed">系统策略增加电子卡免费的策略模型</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                <h5 className="font-bold text-green-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-xs leading-relaxed">拦截率达到25%</p>
              </div>
            </div>
        
            {/* 电子策略图表 */}
            <div className="mt-8">
              <div className="relative h-80 mb-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 shadow-sm">
                
                <div className="mx-12 h-full relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-sm font-medium text-gray-600">
                    <span>500</span>
                    <span>375</span>
                    <span>250</span>
                    <span>125</span>
                    <span>0</span>
                  </div>
                  
                  <div className="absolute right-0 h-full flex flex-col justify-between text-sm font-medium text-orange-600">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                    <div className="flex flex-col items-center relative">
                      <div className="w-20 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t shadow-md" style={{ height: '200px' }}></div>
                      
                      {/* 准确率数据点 */}
                      <div 
                        className="absolute w-5 h-5 bg-orange-500 rounded-full border-2 border-white shadow-lg"
                        style={{top: `${100 - 25 - 10}%`, left: '50%', transform: 'translateX(-50%)'}}
                      >
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shadow-md">
                          25%
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <div className="text-sm text-gray-600 mt-1 font-medium">400单 (25%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded shadow-sm"></div>
                  <span className="text-gray-700 font-medium">拦截订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-700 font-medium">准确率</span>
                </div>
              </div>
              
              <div className="text-right text-sm text-gray-500 mt-6 font-medium">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>

        {/* 2. 真人策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">1.2</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">真人策略</h4>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 shadow-sm">已上线</span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 ml-4 shadow-sm">突破：B/C端打通</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h5 className="font-bold text-red-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-xs leading-relaxed">对打、机器下注和算牌等是最常见的套利及作弊手段。当前系统在自动出款和人工审核环节对此识别不足，存在较多遗漏，导致每月损失超过100万元。</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                <h5 className="font-bold text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-xs leading-relaxed">系统策略增加真人对打、机器下注、算牌的策略模型</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                <h5 className="font-bold text-green-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-xs leading-relaxed">问题率26.7%</p>
              </div>
            </div>
        
            {/* 真人策略图表 */}
            <div className="mt-8">
              <div className="relative h-80 mb-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 shadow-sm">
                          
                <div className="mx-12 h-full relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-sm font-medium text-gray-600">
                    <span>500</span>
                    <span>375</span>
                    <span>250</span>
                    <span>125</span>
                    <span>0</span>
                  </div>
                  
                  <div className="absolute right-0 h-full flex flex-col justify-between text-sm font-medium text-orange-600">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                    <div className="flex flex-col items-center relative">
                      <div className="w-20 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t shadow-md" style={{ height: '225px' }}></div>
                      
                      {/* 准确率数据点 */}
                      <div 
                        className="absolute w-5 h-5 bg-orange-500 rounded-full border-2 border-white shadow-lg"
                        style={{top: `${100 - 26.7 - 10}%`, left: '50%', transform: 'translateX(-50%)'}}
                      >
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shadow-md">
                          26.7%
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <div className="text-sm text-gray-600 mt-1 font-medium">450单 (26.7%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded shadow-sm"></div>
                  <span className="text-gray-700 font-medium">拦截订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-700 font-medium">准确率</span>
                </div>
              </div>
              
              <div className="text-right text-sm text-gray-500 mt-6 font-medium">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>

        {/* 3. 体育策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">1.3</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">体育策略</h4>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-600 shadow-sm">开发中</span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 ml-4 shadow-sm">突破：B/C端打通</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h5 className="font-bold text-red-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-xs leading-relaxed">打水、协议球、卡危险球、出货、蛇货、拉赛、机器下注等是最常见的套利与作弊手段。当前系统在自动出款与人工审核环节对此类行为的识别尚不充分，尤其是体育赛类场景复杂、多变，对审核人员经验依赖高，导致漏判与误判并存，带来较大风控盲区与损失风险</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                <h5 className="font-bold text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-xs leading-relaxed">通过联动 B 端系统，引入百家赔、危险球等关键外部数据，构建针对性的特征识别策略，实现对异常行为更高时效的预警与拦截，全面提升对体育类套利与作弊行为的识别与防控能力。</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                <h5 className="font-bold text-green-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-xs leading-relaxed">问题率22.1%</p>
              </div>
            </div>
        
            {/* 体育策略图表 */}
            <div className="mt-8">
              <div className="relative h-80 mb-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 shadow-sm">
                
                <div className="mx-12 h-full relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-sm font-medium text-gray-600">
                    <span>500</span>
                    <span>375</span>
                    <span>250</span>
                    <span>125</span>
                    <span>0</span>
                  </div>
                  
                  <div className="absolute right-0 h-full flex flex-col justify-between text-sm font-medium text-orange-600">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                    <div className="flex flex-col items-center relative">
                      <div className="w-20 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t shadow-md" style={{ height: '190px' }}></div>
                      
                      {/* 准确率数据点 */}
                      <div 
                        className="absolute w-5 h-5 bg-orange-500 rounded-full border-2 border-white shadow-lg"
                        style={{top: `${100 - 22.1 - 10}%`, left: '50%', transform: 'translateX(-50%)'}}
                      >
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shadow-md">
                          22.1%
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <div className="text-sm text-gray-600 mt-1 font-medium">380单 (22.1%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded shadow-sm"></div>
                  <span className="text-gray-700 font-medium">拦截订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-700 font-medium">准确率</span>
                </div>
              </div>
              
              <div className="text-right text-sm text-gray-500 mt-6 font-medium">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>

        {/* 4. 棋牌策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">1.4</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">棋牌策略</h4>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 shadow-sm">已上线</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h5 className="font-bold text-red-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-xs leading-relaxed">棋牌游戏作弊和异常胜率难以监控</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                <h5 className="font-bold text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-xs leading-relaxed">建立棋牌游戏异常行为识别机制</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                <h5 className="font-bold text-green-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-xs leading-relaxed">问题率23.8%</p>
              </div>
            </div>
        
            {/* 棋牌策略图表 */}
            <div className="mt-8">
              <div className="relative h-80 mb-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 shadow-sm">
                           
                <div className="mx-12 h-full relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-sm font-medium text-gray-600">
                    <span>250</span>
                    <span>188</span>
                    <span>125</span>
                    <span>63</span>
                    <span>0</span>
                  </div>
                  
                  <div className="absolute right-0 h-full flex flex-col justify-between text-sm font-medium text-orange-600">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                    <div className="flex flex-col items-center relative">
                      <div className="w-20 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t shadow-md" style={{ height: '210px' }}></div>
                      
                      {/* 准确率数据点 */}
                      <div 
                        className="absolute w-5 h-5 bg-orange-500 rounded-full border-2 border-white shadow-lg"
                        style={{top: `${100 - 23.8 - 10}%`, left: '50%', transform: 'translateX(-50%)'}}
                      >
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shadow-md">
                          23.8%
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <div className="text-sm text-gray-600 mt-1 font-medium">210单 (23.8%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded shadow-sm"></div>
                  <span className="text-gray-700 font-medium">拦截订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-700 font-medium">准确率</span>
                </div>
              </div>
              
              <div className="text-right text-sm text-gray-500 mt-6 font-medium">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>

        {/* 5. 彩票策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">1.5</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">彩票策略</h4>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-600 shadow-sm">开发中</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h5 className="font-bold text-red-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-xs leading-relaxed">全包行为等是最常见的套利与作弊手段；目前系统在自动出款及人工审核环节中对此识别不足，仍存在较多遗漏，每月都有损失100万+/月。</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                <h5 className="font-bold text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-xs leading-relaxed">针对对全包行为进行预警和拦截</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                <h5 className="font-bold text-green-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-xs leading-relaxed">问题率25%</p>
              </div>
            </div>
        
            {/* 彩票策略图表 */}
            <div className="mt-8">
              <div className="relative h-80 mb-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 shadow-sm">
                
                <div className="mx-12 h-full relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-sm font-medium text-gray-600">
                    <span>300</span>
                    <span>225</span>
                    <span>150</span>
                    <span>75</span>
                    <span>0</span>
                  </div>
                  
                  <div className="absolute right-0 h-full flex flex-col justify-between text-sm font-medium text-orange-600">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                    <div className="flex flex-col items-center relative">
                      <div className="w-20 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t shadow-md" style={{ height: '200px' }}></div>
                      
                      {/* 准确率数据点 */}
                      <div 
                        className="absolute w-5 h-5 bg-orange-500 rounded-full border-2 border-white shadow-lg"
                        style={{top: `${100 - 25 - 10}%`, left: '50%', transform: 'translateX(-50%)'}}
                      >
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shadow-md">
                          25%
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <div className="text-sm text-gray-600 mt-1 font-medium">250单 (25%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded shadow-sm"></div>
                  <span className="text-gray-700 font-medium">拦截订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-700 font-medium">准确率</span>
                </div>
              </div>
              
              <div className="text-right text-sm text-gray-500 mt-6 font-medium">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>
      </div>
      

      {/* 风控工具集合 */}
      <div className="bg-white rounded-xl p-8 mb-8 border border-gray-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">2</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-800">风控工具集合</h3>
        </div>
        <p className="text-gray-700 mb-8 leading-relaxed text-base">
          风控中高频、费时费力的场景整合为标准化工具集，使人员仅需查询结果，无需手动计算或深入理解逻辑，从而提升效率与准确性。
        </p>
        
        {/* 1. 关联下注工具 */}
        <div className="mb-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">2.1</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">关联下注工具</h4>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 ml-4 shadow-sm">已上线</span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 ml-4 shadow-sm">突破：跨Y+B全站点打通</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 shadow-sm"></span>
                  核心问题
                </h4>
                <div className="text-gray-700 text-sm leading-relaxed space-y-1">
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><span className="font-bold">依赖个人经验</span>：完全依靠人工基于个人经验发掘关联下注（如对打），操作效率低，新人门槛高</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><span className="font-bold">成本高风险大</span>：曾需要10人+团队从后台导出数据并在本地处理风控算法，不仅人力成本高，也存在安全隐患</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 shadow-sm"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">提供面向真人、彩票及体育（开发中）等多类游戏的一键跨站点"关联下注查询"工具，支持基于核心关联特征（IP、设备指纹、虚拟币地址、姓名、手机号、注册域名等）的数据聚合与可视化展示，快速生成完整的关联链路与下注明细</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                <h4 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 shadow-sm"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">关联因素在日常风控中占比极高，该工具可一键筛选并展示所有关联用户的下注行为，极大增强风险识别与处置能力</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 体育打水工具 */}
        <div className="mb-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">2.2</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">体育打水工具</h4>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 shadow-sm">已上线</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 shadow-sm"></span>
                  核心问题
                </h4>
                <div className="text-gray-700 text-sm leading-relaxed space-y-1">
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><span className="font-bold">人工效率低</span>：目前完全依赖人工进行多平台对比，耗时费力，效率极低</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><span className="font-bold">无法全覆盖</span>：人工非标操作，无法实现全面及时的覆盖</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 shadow-sm"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">通过B端百家赔率数据构建体育打水查询工具</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                <h4 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 shadow-sm"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">节省成本，提升效率</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 提款流水工具 */}
        <div className="mb-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">2.3</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800">提款流水工具</h4>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 shadow-sm">待开发</span>
              </div>
              <div className="text-blue-600 font-semibold text-sm bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                目前该问题在技术层面反馈，暂时无法实现彻底解决，需进一步讨论，如何能够支持？
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 shadow-sm"></span>
                  核心问题
                </h4>
                <div className="text-gray-700 text-sm leading-relaxed space-y-1">
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><span className="font-bold">系统计算错误</span>：长期以来，系统在审核流水计算中存在多类错误，例如锁定场馆流水重复计算、场馆红利多计一次提款流水、用户输光后提款流水未自动达标等；这些问题可能导致提款系统因流水计算错误而误拒用户提款</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><span className="font-bold">人工计算错误</span>：由于系统计算流水不可用，风控人员只能被动依赖自己手动计算。但由于规则复杂，实际执行存在较大差异，不仅耗时繁琐，还导致每月约 1 万笔订单因流水计算错误引发出款问题</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><span className="font-bold">用户体验较差</span>：流水咨询形成冗长的沟通链路（如，用户-客服-运营-风控-运营-客服-用户），消耗大量时间，运行效率极低</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 shadow-sm"></span>
                  解决策略
                </h4>
                <div className="text-gray-700 text-sm leading-relaxed space-y-2">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs mr-3 mt-1 flex-shrink-0">1</div>
                    <span><span className="font-bold">阶段1-》解决系统流水错误</span>：修复系统计算错误，且在后台提供流水查询工具，实现流水自动统一计算，人工只需一键查询</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs mr-3 mt-1 flex-shrink-0">2</div>
                    <span><span className="font-bold">阶段2-》后端提款流水工具</span>：用户在前端直接查看流水情况，目前大部分竞品已实现此体验，彻底解决这个多余过程</span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs mr-3 mt-1 flex-shrink-0">3</div>
                    <span><span className="font-bold">阶段3-》前端直接展示流水</span>：用户在前端直接查看流水情况，目前大部分竞品已实现此体验，彻底解决这个多余过程</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                <h4 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 shadow-sm"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">每月约5%的错误出款源于此，影响约30+万/月；运行效率提升；用户体验改善</p>
              </div>
            </div>
            
            {/* 调研情况表格 */}
            <div className="mt-8">
              <h5 className="text-xl font-bold text-gray-800 mb-6">调研情况</h5>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="p-4 text-left font-semibold">平台</th>
                      <th className="p-4 text-left font-semibold">前端提款流水展示</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { platform: "开云（KY）", display: "用户无法在前端得知提款所需流水以及已完成流水；后台也无法直接查看，需要人工手动计算", highlight: true },
                      { platform: "尊龙凯时（AG）", display: "提款提示：暂未完成流水XX USDT，提款可能被拒绝" },
                      { platform: "金宝博（188）", display: "提款提示：账户尚未满足流水要求\"；可实时查看\"可提款金额\"和\"未完成流水\"，回传速度极快" },
                      { platform: "万博（ManbetX）", display: "提款界面直接显示：还需完成 XX元；（并有显示不同场馆流水及剩余差额）" },
                      { platform: "竞博（IM）", display: "提款界面直接显示：可提现金额" },
                      { platform: "易游（M6)", display: "提款界面直接显示：还需完成XX元投注额" },
                      { platform: "雷竞技（Raybet）", display: "提款界面直接提示：需完成XX元投注" },
                      { platform: "竞技宝（JJB）", display: "提款界面显示：还需XX元流水；流水满足后显示\"可提余额\"与\"账户余额\"" }
                    ].map((row, index) => (
                      <tr key={index} className={`border-b border-gray-100 ${row.highlight ? 'bg-yellow-50' : 'hover:bg-gray-50 transition-colors'}`}>
                        <td className={`p-4 font-semibold ${row.highlight ? 'text-yellow-700' : 'text-blue-600'}`}>{row.platform}</td>
                        <td className={`p-4 ${row.highlight ? 'text-yellow-700 font-semibold' : 'text-gray-700'}`}>{row.display}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};