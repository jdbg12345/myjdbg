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
      
      {/* 新派单规则效果图表 */}
      <div className="mb-12">
        {/* 整合的内容和图表模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">1</span>
            </div>
              <h4 className="text-xl font-bold text-gray-800">派单策略变革</h4>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 ml-3">试运行</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                核心问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">以金额作为分单依据，未考虑订单难度及人员能力匹配，导致部分高风险订单被分配至远程或外包，而其差错率较总部高出约2～3倍，由此带来超过100万+/月的损失。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                解决方法
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">引入订单风险评分机制，将派单从"仅按金额"升级为"按风险分数+金额"，确保中高风险订单由经验丰富的审核员处理，实现人单匹配最优分配。</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                预期收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">错误率降低<span className="font-bold text-green-600">15%-20%</span></p>
            </div>
          </div>
        
          {/* 图表模块 */}
          <div className="mt-8">
          <div className="relative h-80 mb-6 bg-gray-50 rounded-lg p-8">
            
            {/* Y轴标签 */}
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              分配订单数
            </div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
              错误率 (%)
            </div>
            
            <div className="mx-12 h-full relative">
              {/* Y轴刻度 */}
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
                    <div className="flex items-end space-x-1 mb-4">
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
                    
                    {/* 问题率点 */}
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 rounded-full border border-white"
                      style={{bottom: `${32 + (item.beforeRate / 5) * 200}px`, left: '12px'}}
                    >
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-blue-700 bg-white px-1 py-0.5 rounded shadow whitespace-nowrap">
                        {item.beforeRate}%
                      </div>
                    </div>
                    
                    <div 
                      className="absolute w-3 h-3 bg-green-600 rounded-full border border-white"
                      style={{bottom: `${32 + (item.afterRate / 5) * 200}px`, right: '12px'}}
                    >
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-green-700 bg-white px-1 py-0.5 rounded shadow whitespace-nowrap">
                        {item.afterRate}%
                      </div>
                    </div>
                    
                    {/* 底部标签 */}
                    <div className="text-center">
                      <div className="text-xs text-gray-800 font-medium whitespace-nowrap">{item.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.before}/{item.after}</div>
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
                  strokeDasharray="4,4"
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
        </div>
      </div>

         
      {/* 1、出款强制查看标签备注 */}
      <div className="mb-12">

        {/* 云盾分数分布图表 */}
        <div className="mt-8">
          <div className="relative h-96 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="absolute left-2 top-1/3 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              订单数
            </div>
            <div className="absolute right-2 top-2/3 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
              订单风控率 (%)
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
                  { range: '0-29分', count: 400, percent: 33.9, rate: 20 },
                  { range: '30-59分', count: 350, percent: 29.7, rate: 25.7 },
                  { range: '60-89分', count: 280, percent: 23.7, rate: 21.4 },
                  { range: '90-100分', count: 150, percent: 12.7, rate: 20 }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center relative">
                    <div className="relative">
                      <div 
                        className="w-16 bg-blue-500 rounded-t"
                        style={{ height: `${(item.count / 400) * 200}px` }}
                      ></div>
                    </div>
                    
                    {/* 订单风控率点 */}
                    <div 
                      className="absolute w-3 h-3 bg-orange-500 rounded-full border-2 border-white"
                      style={{bottom: `${32 + (item.rate / 28) * 200}px`, left: '50%', transform: 'translateX(-50%)'}}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-orange-700 bg-white px-1 py-0.5 rounded shadow whitespace-nowrap">
                        {item.rate}%
                      </div>
                    </div>
                    
                    {/* 底部标签 */}
                    <div className="text-center mt-4">
                      <div className="text-xs text-gray-800 font-medium whitespace-nowrap">{item.range}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.count}</div>
                      <div className="text-xs text-gray-500">({item.percent}%)</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 问题率连线 */}
              <svg className="absolute left-16 right-16 top-0 bottom-0 pointer-events-none" width="100%" height="100%">
                <path
                  d={`M 12.5% ${100 - (20 / 28) * 60}% L 37.5% ${100 - (25.7 / 28) * 60}% L 62.5% ${100 - (21.4 / 28) * 60}% L 87.5% ${100 - (20 / 28) * 60}%`}
                  stroke="#f97316"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.8"
                />
              </svg>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-gray-700">订单数量及占比</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">订单风控率</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
        
        {/* 整合的内容和图表模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">出款强制查看标签备注</h4>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 ml-3">试运行</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                核心问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">在出款操作中，尽管SOP明确要求查看标签备注，但部分人员仍存在忽视行为，导致出款错误。每月约15–20%的错误出款由此产生，造成约100万+/月的损失。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                解决策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">将查看标签备注，设为出款流程中的强制查看环节，否则无法完成审核</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                预期收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">错误出款影响降低<span className="font-bold text-green-600">15%-20%</span></p>
            </div>
          </div>

          {/* 图表模块 */}
          <div className="mt-8">
          <div className="relative h-80 mb-6 bg-gray-50 rounded-lg p-8">
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
              
              {/* 数据点和连线 */}
              <div className="absolute left-12 right-12 h-full">
                {/* 调整前数据点 */}
                <div 
                  className="absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"
                  style={{left: '25%', bottom: `${(25/30) * 80 + 10}%`}}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                    25%
                  </div>
                </div>
                
                {/* 调整后数据点 */}
                <div 
                  className="absolute w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"
                  style={{left: '75%', bottom: `${(8/30) * 80 + 10}%`}}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                    8%
                  </div>
                </div>
                
                {/* 连接线 */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line
                    x1="25%"
                    y1={`${100 - ((25/30) * 80 + 10)}%`}
                    x2="75%"
                    y2={`${100 - ((8/30) * 80 + 10)}%`}
                    stroke="#3B82F6"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    opacity="0.8"
                  />
                </svg>
                
                {/* 底部标签 */}
                <div className="absolute bottom-2 left-1/4 transform -translate-x-1/2 text-center">
                  <div className="text-xs text-gray-800 font-medium">调整前</div>
                </div>
                <div className="absolute bottom-2 right-1/4 transform translate-x-1/2 text-center">
                  <div className="text-xs text-gray-800 font-medium">调整后</div>
                </div>
                
                {/* 变化率标签 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  ↓ 68% 改善
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">调整前错误率</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">调整后错误率</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">改善趋势</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
        </div>
      </div>

      {/* 内控培训 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">培</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">内控培训</h4>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">已上线</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-gray-600 text-center">内容待定</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};