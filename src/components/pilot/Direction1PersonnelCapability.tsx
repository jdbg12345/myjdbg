import React from 'react';

export const Direction1PersonnelCapability = () => {
  return (
    <>
      <div className="bg-white rounded-xl p-8 mb-8 border border-blue-200 shadow-md">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">方向1</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">审核问题-质量较差</h2>
          </div>
        </div>
      
        {/* 新派单规则效果图表 */}
        <div className="mb-12">
          {/* 整合的内容和图表模块 */}
          <div className="bg-white rounded-xl p-8 mb-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800">派单策略变革</h4>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 ml-4 shadow-sm">试运行</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 shadow-sm"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">以金额作为分单依据，未考虑订单难度及人员能力匹配，导致部分高风险订单被分配至远程或外包，而其差错率较总部高出约2～3倍，由此带来超过100万+/月的损失。</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 shadow-sm"></span>
                  解决方法
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">引入订单风险评分机制，将派单从"仅按金额"升级为"按风险分数+金额"，确保中高风险订单由经验丰富的审核员处理，实现人单匹配最优分配。</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                <h4 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 shadow-sm"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">错误率降低<span className="font-bold text-green-600">15%-20%</span></p>
              </div>
            </div>
        
            {/* 图表模块 */}
            <div className="mt-8">
              <div className="relative h-80 mb-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 shadow-sm">
                
                {/* Y轴标签 */}
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-semibold text-gray-700">
                  分配订单数
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-sm font-semibold text-orange-600">
                  错误率 (%)
                </div>
                
                <div className="mx-12 h-full relative">
                  {/* Y轴刻度 */}
                  <div className="absolute left-0 h-full flex flex-col justify-between text-sm font-medium text-gray-600">
                    <span>1400</span>
                    <span>1050</span>
                    <span>700</span>
                    <span>350</span>
                    <span>0</span>
                  </div>
                  
                  <div className="absolute right-0 h-full flex flex-col justify-between text-sm font-medium text-orange-600">
                    <span>5%</span>
                    <span>3.75%</span>
                    <span>2.5%</span>
                    <span>1.25%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full flex items-end justify-around pb-8">
                    {[
                      { name: '外包一审', before: 1200, after: 1050, beforeRate: 4.0, afterRate: 3.0 },
                      { name: '总部一审', before: 850, after: 900, beforeRate: 3.5, afterRate: 2.8 },
                      { name: '总部二审', before: 520, after: 550, beforeRate: 2.2, afterRate: 1.5 }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center relative">
                        <div className="flex items-end space-x-1 mb-4">
                          <div className="relative">
                            <div 
                              className="w-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t shadow-md"
                              style={{ height: `${(item.before / 1400) * 200}px` }}
                            ></div>
                          </div>
                          <div className="relative">
                            <div 
                              className="w-10 bg-gradient-to-t from-green-500 to-green-400 rounded-t shadow-md"
                              style={{ height: `${(item.after / 1400) * 200}px` }}
                            ></div>
                          </div>
                        </div>
                        
                        {/* 问题率点 */}
                        <div 
                          className="absolute w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md"
                          style={{bottom: `${32 + (item.beforeRate / 5) * 200}px`, left: '12px'}}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-blue-700 bg-white px-2 py-1 rounded-md shadow-md whitespace-nowrap">
                            {item.beforeRate}%
                          </div>
                        </div>
                        
                        <div 
                          className="absolute w-4 h-4 bg-green-600 rounded-full border-2 border-white shadow-md"
                          style={{bottom: `${32 + (item.afterRate / 5) * 200}px`, right: '12px'}}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-green-700 bg-white px-2 py-1 rounded-md shadow-md whitespace-nowrap">
                            {item.afterRate}%
                          </div>
                        </div>
                        
                        {/* 底部标签 */}
                        <div className="text-center">
                          <div className="text-sm text-gray-800 font-semibold whitespace-nowrap">{item.name}</div>
                          <div className="text-xs text-gray-600 mt-1 font-medium">{item.before}/{item.after}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 问题率连线 */}
                  <svg className="absolute left-16 right-16 top-0 bottom-0 pointer-events-none" width="100%" height="100%">
                    <path
                      d={`M 16.67% ${100 - (4.0 / 5) * 60}% L 50% ${100 - (3.5 / 5) * 60}% L 83.33% ${100 - (2.2 / 5) * 60}%`}
                      stroke="#3B82F6"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="6,4"
                      opacity="0.8"
                    />
                    <path
                      d={`M 16.67% ${100 - (3.0 / 5) * 60}% L 50% ${100 - (2.8 / 5) * 60}% L 83.33% ${100 - (1.5 / 5) * 60}%`}
                      stroke="#10B981"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.8"
                    />
                  </svg>
                </div>
              </div>
              
              <div className="text-center text-base font-semibold text-gray-700 mb-6">审核角色</div>
              
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded shadow-sm"></div>
                  <span className="text-gray-700 font-medium">调整前派单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-400 rounded shadow-sm"></div>
                  <span className="text-gray-700 font-medium">调整后派单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full shadow-sm"></div>
                  <span className="text-gray-700 font-medium">调整前错误率</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-600 rounded-full shadow-sm"></div>
                  <span className="text-gray-700 font-medium">调整后错误率</span>
                </div>
              </div>
              
              <div className="text-right text-sm text-gray-500 mt-6 font-medium">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>
         
        {/* 云盾分数分布图表 */}
        <div className="mb-12">
          <div className="bg-white rounded-xl p-8 mb-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800">云盾分数订单分布</h4>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-orange-100 text-orange-600 ml-4 shadow-sm">试运行</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 shadow-sm"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">人工审核依赖个人经验，标准不统一，新人培训周期长，审核质量参差不齐，容易出现漏判和误判。</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 shadow-sm"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">建立云盾智能评分系统，为每个订单生成标准化风险报告，审核员只需确认关键风险点，提升审核效率和准确性。</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                <h4 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 shadow-sm"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">审核效率提升<span className="font-bold text-green-600">50%+</span>，准确率提升至<span className="font-bold text-green-600">95%+</span></p>
              </div>
            </div>

            {/* 云盾分数分布图表 */}
            <div className="mt-8">
              <div className="relative h-96 mb-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 shadow-sm">
                         
                <div className="mx-12 h-full relative">
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full flex items-end justify-around pb-8">
                    {[
                      { name: '低风险\n(0-30分)', orders: 1800, rejectRate: 5 },
                      { name: '中风险\n(31-60分)', orders: 1200, rejectRate: 15 },
                      { name: '高风险\n(61-100分)', orders: 600, rejectRate: 35 }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center relative">
                        <div className="w-16 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t shadow-md" style={{ height: `${(item.orders / 2000) * 250}px` }}></div>
                        
                        {/* 风控拒单率点 */}
                        <div 
                          className="absolute w-5 h-5 bg-orange-500 rounded-full border-2 border-white shadow-lg"
                          style={{top: `${100 - (item.rejectRate / 40) * 70 - 10}%`, left: '50%', transform: 'translateX(-50%)'}}
                        >
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shadow-md">
                            {item.rejectRate}%
                          </div>
                        </div>
                        
                        <div className="text-center mt-4">
                          <div className="text-sm text-gray-800 font-semibold whitespace-pre-line">{item.name}</div>
                          <div className="text-xs text-gray-600 mt-1 font-medium">{item.orders}单</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded shadow-sm"></div>
                  <span className="text-gray-700 font-medium">订单数量</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-700 font-medium">风控拒单率</span>
                </div>
              </div>
              
              <div className="text-right text-sm text-gray-500 mt-6 font-medium">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>

        {/* 出款强制查看标签备注 */}
        <div className="mb-12">
          <div className="bg-white rounded-xl p-8 mb-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800">出款强制查看标签备注</h4>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 ml-4 shadow-sm">已上线</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 shadow-sm"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">在出款操作中，尽管SOP明确要求查看标签备注，但部分人员仍存在忽视行为，导致出款错误。每月约15–20%的错误出款由此产生，造成约100万+/月的损失。</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 shadow-sm"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">将查看标签备注，设为出款流程中的强制查看环节，否则无法完成审核</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                <h4 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 shadow-sm"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">错误出款影响降低15%-20%</p>
              </div>
            </div>

            {/* 错误率对比图表 */}
            <div className="mt-8">
              <div className="relative h-80 mb-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 shadow-sm">
                <div className="mx-12 h-full relative">
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full flex items-center justify-center">
                    <div className="flex items-center space-x-48">
                      {/* 调整前 */}
                      <div className="flex flex-col items-center relative">
                        <div 
                          className="absolute w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-lg"
                          style={{top: '40%'}}
                        >
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shadow-md">
                            25%
                          </div>
                        </div>
                        
                       
                      </div>

                      {/* 调整后 */}
                      <div className="flex flex-col items-center relative">
                        <div 
                          className="absolute w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-lg"
                          style={{top: '60%'}}
                        >
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shadow-md">
                            8%
                          </div>
                        </div>
                        
                      
                      </div>
                    </div>
                    
                    {/* 连接线显示下降趋势 - 连接两个数据点 */}
                    <line
                      x1="25%"
                      y1="40%"
                      x2="75%"
                      y2="60%"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeDasharray="8,4"
                      className="absolute"
                    />
                    
                    {/* 箭头 */}
                    <polygon
                      points="75%,58% 77%,60% 75%,62%"
                      fill="#10b981"
                      className="absolute"
                    />
                    
                    {/* 改善指示 - 放在连线中间 */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-md">
                      ↓ 68% 改善
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-700 font-medium">调整前错误率</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-700 font-medium">调整后错误率</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded shadow-sm"></div>
                  <span className="text-gray-700 font-medium">改善趋势</span>
                </div>
              </div>
              
              <div className="text-right text-sm text-gray-500 mt-6 font-medium">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};