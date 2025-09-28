import React from 'react';

export const Direction1PersonnelCapability = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">方向1</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">审核问题-质量较差</h2>
          </div>
        </div>

        {/* 手段1、派单策略变革 */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800">手段1、派单策略变革</h4>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 ml-3">已上线</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">当前派单机制仅以 金额维度 作为分配依据，未考虑订单的风险等级与审核人员能力差异。结果导致部分 高风险、复杂订单 被下发至远程/外包团队，其审核差错率明显高于总部（约为总部的 2–3 倍），每月因此造成 100 万元以上的潜在风险损失。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">引入订单风险评分机制，将派单从"仅按金额"升级为"按风险分数+金额"，确保中高风险订单由经验丰富的审核员处理，实现人单匹配最优分配。</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">错误率降低<span className="font-bold text-green-600">15%-20%</span></p>
              </div>
            </div>

            {/* 派单效果图表 */}
            <div className="mt-8">
              <div className="relative h-80 mb-6 bg-gray-50 rounded-lg p-8">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
                  分配订单数
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
                  问题率 (%)
                </div>
                
                <div className="mx-12 h-full relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                    <span>1400</span>
                    <span>1050</span>
                    <span>700</span>
                    <span>350</span>
                    <span>0</span>
                  </div>
                  
                  <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-orange-500">
                    <span>5%</span>
                    <span>3.75%</span>
                    <span>2.5%</span>
                    <span>1.25%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full flex items-end justify-around pb-8">
                    {[
                      { name: '外包一审', before: 1200, after: 1050, beforeRate: 4.0, afterRate: 3.0 },
                      { name: '总部一审', before: 850, after: 900, beforeRate: 3.5, afterRate: 2.8 },
                      { name: '总部二审', before: 520, after: 550, beforeRate: 2.2, afterRate: 1.5 }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center relative">
                        <div className="flex items-end space-x-1 mb-2">
                          <div className="relative">
                            <div 
                              className="w-8 bg-blue-500 rounded-t"
                              style={{ height: `${(item.before / 1400) * 200}px` }}
                            ></div>
                          </div>
                          <div className="relative">
                            <div 
                              className="w-8 bg-green-500 rounded-t"
                              style={{ height: `${(item.after / 1400) * 200}px` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div 
                          className="absolute w-3 h-3 bg-blue-600 rounded-full border border-white"
                          style={{bottom: `${24 + (item.beforeRate / 5) * 200}px`, left: '25%', transform: 'translateX(-50%)'}}
                        >
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-blue-700 bg-white px-1 py-0.5 rounded whitespace-nowrap">
                            {item.beforeRate}%
                          </div>
                        </div>
                        
                        <div 
                          className="absolute w-3 h-3 bg-green-600 rounded-full border border-white"
                          style={{bottom: `${24 + (item.afterRate / 5) * 200}px`, left: '75%', transform: 'translateX(-50%)'}}
                        >
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                            {item.afterRate}%
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-xs text-gray-800 font-medium whitespace-nowrap">{item.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{item.before}/{item.after}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <svg className="absolute left-16 right-16 top-0 bottom-0 pointer-events-none" width="100%" height="100%">
                    <path
                      d={`M 16.67% ${100 - (4.0 / 5) * 60}% L 50% ${100 - (3.5 / 5) * 60}% L 83.33% ${100 - (2.2 / 5) * 60}%`}
                      stroke="#3B82F6"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.8"
                    />
                    <path
                      d={`M 16.67% ${100 - (3.0 / 5) * 60}% L 50% ${100 - (2.8 / 5) * 60}% L 83.33% ${100 - (1.5 / 5) * 60}%`}
                      stroke="#10B981"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.9"
                    />
                  </svg>
                </div>
              </div>
              
              <div className="text-center text-sm font-medium text-gray-600 mb-4">审核角色</div>
              
              <div className="flex justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-gray-700">调整前派单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-gray-700">调整后派单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">调整前错误率</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">调整后错误率</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>

            {/* 分数分布图表 */}
            <div className="mt-8">
              <h5 className="text-lg font-bold text-gray-800 mb-4">分数分布图表</h5>
              <div className="relative h-80 mb-6 bg-gray-50 rounded-lg p-8">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
                  订单数量
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
                  问题率 (%)
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
                    <span>28%</span>
                    <span>21%</span>
                    <span>14%</span>
                    <span>7%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full flex items-end justify-around pb-8">
                    {[
                      { range: '0-29分', count: 400, percent: 33.9, rate: 25.7 },
                      { range: '30-59分', count: 350, percent: 29.7, rate: 21.4 },
                      { range: '60-89分', count: 280, percent: 23.7, rate: 20.0 },
                      { range: '90-100分', count: 150, percent: 12.7, rate: 14.0 }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center relative">
                        <div className="mb-2">
                          <div 
                            className="w-12 bg-blue-500 rounded-t"
                            style={{ height: `${(item.count / 400) * 200}px` }}
                          ></div>
                        </div>
                        
                        <div 
                          className="absolute w-3 h-3 bg-orange-600 rounded-full border border-white"
                          style={{bottom: `${24 + (item.rate / 28) * 200}px`, left: '50%', transform: 'translateX(-50%)'}}
                        >
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-orange-700 bg-white px-1 py-0.5 rounded whitespace-nowrap">
                            {item.rate}%
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-xs text-gray-800 font-medium whitespace-nowrap">{item.range}</div>
                          <div className="text-xs text-gray-500 mt-1">{item.count} ({item.percent}%)</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <svg className="absolute left-16 right-16 top-0 bottom-0 pointer-events-none" width="100%" height="100%">
                    <path
                      d={`M 12.5% ${100 - (25.7 / 28) * 60}% L 37.5% ${100 - (21.4 / 28) * 60}% L 62.5% ${100 - (20.0 / 28) * 60}% L 87.5% ${100 - (14.0 / 28) * 60}%`}
                      stroke="#EA580C"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.8"
                    />
                  </svg>
                </div>
              </div>
              
              <div className="text-center text-sm font-medium text-gray-600 mb-4">风险分数区间</div>
              
              <div className="flex justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-gray-700">订单数量及占比</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">问题率趋势</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>

        {/* 手段2、不看标签备注出款 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800">手段2、不看标签备注出款</h4>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-600 ml-3">试运行</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">审核人员过度依赖标签和备注进行判断，容易形成固化思维，忽略订单本身的风险特征分析，导致审核质量参差不齐。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">试点"盲审"机制，审核人员在不查看标签备注的情况下进行初步判断，然后与系统预判结果对比，提升独立分析能力。</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">提升审核人员独立判断能力，减少对标签依赖，审核准确率提升<span className="font-bold text-green-600">10%-15%</span></p>
              </div>
            </div>

            {/* 盲审效果图表 */}
            <div className="mt-8">
              <h5 className="text-lg font-bold text-gray-800 mb-4">盲审效果对比图表</h5>
              <div className="relative h-64 mb-6 bg-gray-50 rounded-lg p-8">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
                  错误率 (%)
                </div>
                
                <div className="mx-12 h-full relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                    <span>30%</span>
                    <span>22.5%</span>
                    <span>15%</span>
                    <span>7.5%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                    {[
                      { name: '整体错误率', before: 25.2, after: 18.7, change: -6.5 }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center relative">
                        <div className="flex items-end space-x-4 mb-2">
                          <div className="relative">
                            <div className="text-xs text-blue-600 font-bold mb-1 text-center">{item.before}%</div>
                            <div 
                              className="w-16 bg-blue-500 rounded-t"
                              style={{ height: `${(item.before / 30) * 160}px` }}
                            ></div>
                            <div className="text-xs text-gray-600 text-center mt-2">上线前</div>
                          </div>
                          <div className="relative">
                            <div className="text-xs text-green-600 font-bold mb-1 text-center">{item.after}%</div>
                            <div 
                              className="w-16 bg-green-500 rounded-t"
                              style={{ height: `${(item.after / 30) * 160}px` }}
                            ></div>
                            <div className="text-xs text-gray-600 text-center mt-2">上线后</div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-sm text-gray-800 font-medium whitespace-nowrap mt-4">{item.name}</div>
                          <div className="text-xs text-green-600 font-bold mt-1">改善 {Math.abs(item.change)}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center text-sm font-medium text-gray-600 mb-4">盲审机制效果对比</div>
              
              <div className="flex justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-gray-700">上线前错误率</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-gray-700">上线后错误率</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-05-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};