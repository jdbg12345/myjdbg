import React from 'react';

export const Direction1PersonnelCapability = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 mb-8 shadow-lg border border-blue-100">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">1</span>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800">人员的风控能力参差不齐</h2>
          <div className="w-full h-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full mt-2"></div>
        </div>
      </div>
      
      {/* 新派单规则效果图表 */}
      <div className="mb-12">
        {/* 标题模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border-l-4 border-blue-500">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">派</span>
          </div>
            <h4 className="text-xl font-bold text-gray-800">手段1、派单策略变革</h4>
          </div>
        </div>
        
        {/* 问题、策略、收益模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
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
        </div>
        
        {/* 图表模块 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="relative h-80 mb-6 bg-gray-50 rounded-lg p-8">
            {/* Y轴标签 */}
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              分配订单数
            </div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
              问题率 (%)
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

      {/* 风险分数效果图表 */}
      <div className="mb-12">
        {/* 标题模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border-l-4 border-orange-500">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">云</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">手段2、云顿风险分数</h4>
          </div>
        </div>
        
        {/* 问题、策略、收益模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">风控体系没有一个标准来衡量提款的风险，如银行风控体系的分数，在各自场景中就无法实现一个统一执行标准；每月约15-20%的错误出款源于此，影响约100+万/月</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">所有的订单引入订单风险分数机制，将原来的"仅按金额派单"升级为"按订单分数+金额派单"，以实现将合适的单子分配到合适的人，确保中高风险订单由经验丰富的审核员处理</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">错误出款影响降低<span className="font-bold text-green-600">15%-20%</span></p>
            </div>
          </div>
        </div>
                    
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
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
                  { range: '0-29分', count: 400, percent: '33.9%', rate: 20.0, color: '#3B82F6' },
                  { range: '30-59分', count: 350, percent: '29.7%', rate: 25.7, color: '#10B981' },
                  { range: '60-89分', count: 280, percent: '23.7%', rate: 21.4, color: '#F59E0B' },
                  { range: '90-100分', count: 150, percent: '12.7%', rate: 20.0, color: '#EF4444' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center relative">
                    <div 
                      className="w-12 rounded-t relative"
                      style={{ 
                        height: `${(item.count / 400) * 200}px`,
                        backgroundColor: item.color
                      }}
                    >
                    </div>
                    
                    <div 
                      className="absolute w-3 h-3 bg-orange-600 rounded-full border border-white"
                      style={{bottom: `${32 + (item.rate / 28) * 200}px`}}
                    >
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-orange-700 bg-white px-1 py-0.5 rounded shadow whitespace-nowrap">
                        {item.rate}%
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-xs text-gray-800 font-medium">{item.range}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.count}单 ({item.percent})</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <svg className="absolute left-12 right-12 top-0 bottom-0 pointer-events-none" width="100%" height="100%">
                <path
                  d={`M 12.5% ${100 - (20.0 / 28) * 60}% L 37.5% ${100 - (25.7 / 28) * 60}% L 62.5% ${100 - (21.4 / 28) * 60}% L 87.5% ${100 - (20.0 / 28) * 60}%`}
                  stroke="#f97316"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="4,4"
                  opacity="0.8"
                />
              </svg>
            </div>
          </div>
          
          <div className="text-center text-sm font-medium text-gray-600 mb-4">风险分数区间</div>
          
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span className="text-gray-700">订单数量及占比</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
              <span className="text-gray-700">拒单率</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-400 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>
              
      {/* 关联下注工具 */}
      <div className="mb-12">
        {/* 标题模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border-l-4 border-green-500">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">关</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">手段3、关联下注查询工具</h4>
          </div>
        </div>
        
        {/* 问题、策略、收益模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">完全依靠人工基于个人经验发掘关联下注（如对打）；曾经需要10人+团队从后台导出数据并在本地处理风控算法，<span className="font-bold text-red-600">存在严重的数据安全隐患</span>。且操作效率低下，有效拦截率也不足。</p>
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
              <p className="text-gray-700 text-sm leading-relaxed">影响减少<span className="font-bold text-green-600">30+%，120万/月</span>；节省人力成本至少<span className="font-bold text-green-600">40+万/月</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 体育打水查询工具 */}
      <div className="mb-12">
        {/* 标题模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border-l-4 border-red-500">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">体</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">手段4、体育打水查询工具</h4>
          </div>
        </div>
        
        {/* 问题、策略、收益模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
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
              <p className="text-gray-700 text-sm leading-relaxed">影响减少<span className="font-bold text-green-600">30+%，120万/月</span>；节省人力成本至少<span className="font-bold text-green-600">40+万/月</span></p>
            </div>
          </div>
        </div>
      </div>
             
      {/* 提款流水查询工具 */}
      <div className="mb-8">
        {/* 标题模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border-l-4 border-purple-500">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">流</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">手段5、提款流水查询工具</h4>
          </div>
        </div>
        
        {/* 问题、策略、收益模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">       
          {/* 1. 核心问题 */}
          <div className="mb-8">
            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 mb-4 flex items-center text-lg">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
            系统逻辑长期存在缺陷（如锁定场馆流水双算、红利流水多算、输光后流水未达标等），导致流水计算结果不准确。引发问题：
              </h4>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">用户体验较差</h5>
                  <p className="text-gray-700 text-sm">提款延误、出款错误频发，用户满意度与信任度下降。</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">内部效率极低</h5>
                  <div className="text-gray-700 text-sm space-y-2">
                    <p>• 审核人员清楚系统流水有误，只能人工反复计算</p>
                    <p>• 流水计算复杂且缺乏工具支持，风控与质检部门频繁产生争议</p>
                    <p>• 跨部门沟通链路冗长（用户–客服–运营–风控–运营–客服–用户），效率极低</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">公司损失增加</h5>
                  <div className="text-gray-700 text-sm space-y-2">
                    <p>• 差错引发直接资金损失与风险纠纷</p>
                    <p>• 大量人力投入在低效重复工作中，增加额外成本</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 竞品情况 */}
          <div className="mb-8">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-4 flex items-center text-lg">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                2. 竞品情况
              </h4>
              <p className="text-gray-700 leading-relaxed">
                市场调研显示，主流平台（6 尊龙凯时（AG）7 金宝博（188）8 竞博（IM）5 万博（ManbetX）3 竞技宝（JJB）2 雷竞技（Raybet）1 易游（M6)）已普遍实现用户前端直接查看剩余提款流水功能。
              </p>
            </div>
          </div>

          {/* 3. 当前卡点 */}
          <div className="mb-6">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-500">
              <h4 className="font-bold text-gray-700 mb-4 flex items-center text-lg">
                <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
                3. 当前卡点
              </h4>
              <p className="text-gray-700 leading-relaxed">
                技术侧目前评估下来，流水相关的修正，难度较大，暂时处理不了。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};