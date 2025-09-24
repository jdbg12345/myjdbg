import React from 'react';

export const Direction1PersonnelCapability = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">1</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">人员的风控能力参差不齐</h2>
      </div>
      
      {/* 新派单规则效果图表 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">派</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">手段1、派单策略变革</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">问题</h4>
            <p className="text-gray-700">当前派单机制仅以 金额维度 作为分配依据，未考虑订单的风险等级与审核人员能力差异。结果导致部分 高风险、复杂订单 被下发至远程/外包团队，其审核差错率明显高于总部（约为总部的 2–3 倍），每月因此造成 100 万元以上的潜在风险损失。</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">策略</h4>
            <p className="text-gray-700">引入订单风险评分机制，将派单从“仅按金额”升级为“按风险分数+金额”，确保中高风险订单由经验丰富的审核员处理，实现人单匹配最优分配。</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">收益</h4>
            <p className="text-gray-700">错误率降低<span className="font-bold text-green-600">15%-20%</span></p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          {/* 图表容器 */}
          <div className="relative h-80 mb-6">
            {/* Y轴标签 - 左侧 */}
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-gray-600">
              分配订单数
            </div>
            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 rotate-90 text-sm font-medium text-orange-600">
              问题率 (%)
            </div>
            
            {/* 图表主体 */}
            <div className="mx-8 h-full relative">
              {/* Y轴刻度 */}
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                <span>1400</span>
                <span>1050</span>
                <span>700</span>
                <span>350</span>
                <span>0</span>
              </div>
              
              {/* 右Y轴刻度 - 问题率 */}
              <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-orange-500">
                <span>5%</span>
                <span>3.75%</span>
                <span>2.5%</span>
                <span>1.25%</span>
                <span>0%</span>
              </div>
              
              {/* 网格线 */}
              <div className="absolute left-8 right-8 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              {/* 柱状图数据 */}
              <div className="absolute left-8 right-8 h-full flex items-end justify-around pb-4">
                {[
                  { name: '外包一审', before: 1200, after: 1050, beforeRate: 4.0, afterRate: 3.0 },
                  { name: '总部一审', before: 850, after: 900, beforeRate: 3.5, afterRate: 2.8 },
                  { name: '总部二审', before: 520, after: 550, beforeRate: 2.2, afterRate: 1.5 }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center relative">
                    <div className="flex items-end space-x-2 mb-6">
                      {/* 调整前柱子 */}
                      <div className="relative">
                        <div 
                          className="w-10 bg-blue-400 rounded-t"
                          style={{ height: `${(item.before / 1400) * 240}px` }}
                        ></div>
                      </div>
                      {/* 调整后柱子 */}
                      <div className="relative">
                        <div 
                          className="w-10 bg-green-500 rounded-t"
                          style={{ height: `${(item.after / 1400) * 240}px` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* 问题率点 - 调整前 */}
                    <div 
                      className="absolute w-3 h-3 bg-blue-500 rounded-full border-2 border-white"
                      style={{bottom: `${25 + (item.beforeRate / 5) * 240}px`, left: '15px'}}
                    >
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-600 whitespace-nowrap">
                        {item.beforeRate}%
                      </div>
                    </div>
                    
                    {/* 问题率点 - 调整后 */}
                    <div 
                      className="absolute w-3 h-3 bg-green-600 rounded-full border-2 border-white"
                      style={{bottom: `${25 + (item.afterRate / 5) * 240}px`, right: '15px'}}
                    >
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-green-600 whitespace-nowrap">
                        {item.afterRate}%
                      </div>
                    </div>
                    
                    {/* 底部标签和数据 */}
                    <div className="text-center">
                      <div className="text-xs text-gray-600 mb-1">{item.before}/{item.after}</div>
                      <div className="text-sm text-gray-700 font-medium whitespace-nowrap">{item.name}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 问题率连线 - 调整前 */}
              <svg className="absolute left-8 right-8 top-0 bottom-0 pointer-events-none" width="100%" height="100%">
                <path
                  d={`M 16.67% ${100 - (4.0 / 5) * 85}% L 50% ${100 - (3.5 / 5) * 85}% L 83.33% ${100 - (2.2 / 5) * 85}%`}
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4,4"
                />
                <path
                  d={`M 16.67% ${100 - (3.0 / 5) * 85}% L 50% ${100 - (2.8 / 5) * 85}% L 83.33% ${100 - (1.5 / 5) * 85}%`}
                  stroke="#10B981"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          
          {/* X轴标签 */}
          <div className="text-center text-sm font-medium text-gray-600 mb-4">审核角色</div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-400"></div>
              <span className="text-sm text-gray-600">调整前派单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500"></div>
              <span className="text-sm text-gray-600">调整后派单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">调整前问题率</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <span className="text-sm text-gray-600">调整后问题率</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 风险分数效果图表 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">云</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">手段2、云顿风险分数</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">问题</h4>
            <p className="text-gray-700">风控体系没有一个标准来衡量提款的风险，如银行风控体系的分数，在各自场景中就无法实现一个统一执行标准；每月约15-20%的错误出款源于此，影响约100+万/月</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">策略</h4>
            <p className="text-gray-700">所有的订单引入订单风险分数机制，将原来的"仅按金额派单"升级为"按订单分数+金额派单"，以实现将合适的单子分配到合适的人，确保中高风险订单由经验丰富的审核员处理</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">收益</h4>
            <p className="text-gray-700">错误出款影响降低<span className="font-bold text-green-600">15%-20%</span></p>
          </div>
        </div>
                    
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="relative h-80 mb-6">
            {/* 双Y轴标签 */}
            <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-gray-600">
              订单数量
            </div>
            <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 rotate-90 text-sm font-medium text-orange-600">
              问题率 (%)
            </div>
            
            {/* 图表主体 */}
            <div className="mx-8 h-full relative">
              {/* 左Y轴刻度 */}
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>
              
              {/* 右Y轴刻度 */}
              <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-orange-500">
                <span>28%</span>
                <span>21%</span>
                <span>14%</span>
                <span>7%</span>
                <span>0%</span>
              </div>
              
              {/* 网格线 */}
              <div className="absolute left-8 right-8 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              
              {/* 数据展示 */}
              <div className="absolute left-8 right-8 h-full flex items-end justify-around pb-4">
                {[
                  { range: '0-29分', count: 400, percent: '33.9%', rate: 20.0, color: '#3B82F6' },
                  { range: '30-59分', count: 350, percent: '29.7%', rate: 25.7, color: '#10B981' },
                  { range: '60-89分', count: 280, percent: '23.7%', rate: 21.4, color: '#F59E0B' },
                  { range: '90-100分', count: 150, percent: '12.7%', rate: 20.0, color: '#EF4444' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center relative">
                    {/* 柱状图 */}
                    <div 
                      className="w-16 rounded-t relative"
                      style={{ 
                        height: `${(item.count / 400) * 240}px`,
                        backgroundColor: item.color
                      }}
                    >
                    </div>
                    
                    {/* 问题率点 */}
                    <div 
                      className="absolute w-3 h-3 bg-orange-500 rounded-full border-2 border-white"
                      style={{bottom: `${20 + (item.rate / 28) * 240}px`}}
                    >
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-orange-600 whitespace-nowrap">
                        {item.rate}%
                      </div>
                    </div>
                    
                    {/* 底部标签和数据 */}
                    <div className="text-center">
                      <div className="text-xs font-medium text-gray-700">{item.count}</div>
                      <div className="text-xs text-gray-600">({item.percent})</div>
                      <div className="text-sm text-gray-700 font-medium mt-1">{item.range}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 问题率连线 */}
              <svg className="absolute left-8 right-8 top-0 bottom-0 pointer-events-none" width="100%" height="100%">
                <path
                  d={`M 12.5% ${100 - (20.0 / 28) * 85}% L 37.5% ${100 - (25.7 / 28) * 85}% L 62.5% ${100 - (21.4 / 28) * 85}% L 87.5% ${100 - (20.0 / 28) * 85}%`}
                  stroke="#f97316"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4,4"
                />
              </svg>
            </div>
          </div>
          
          {/* X轴标签 */}
          <div className="text-center text-sm font-medium text-gray-600 mb-4">风险分数区间</div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500"></div>
              <span className="text-sm text-gray-600">订单数量及占比</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-600">问题率趋势</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>
              
      {/* 关联下注工具 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">关</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">手段3、关联下注查询工具</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">完全依靠人工基于个人经验发掘关联下注（如对打）；曾经需要10人+团队从后台导出数据并在本地处理风控算法，<span className="font-bold text-red-600">存在严重的数据安全隐患</span>。且操作效率低下，有效拦截率也不足。</div>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold text-blue-700 mb-2">策略</div>
            <div className="text-gray-700 mb-4">标准化关联下注工具</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">影响减少<span className="font-bold text-green-600">30+%，120万/月</span>；节省人力成本至少<span className="font-bold text-green-600">40+万/月</span></div>
          </div>
        </div>
      </div>

      {/* 体育打水查询工具 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">体</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">手段4、体育打水查询工具</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">打水是体育中最常见的套利方式，目前完全依赖人工进行多平台对比，不仅耗时费力，效率极低，还无法实现全面及时的覆盖。</div>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold text-blue-700 mb-2">策略</div>
            <div className="text-gray-700 mb-4">通过B端百家赔率数据构建体育打水实时查询工具</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">影响减少<span className="font-bold text-green-600">30+%，120万/月</span>；节省人力成本至少<span className="font-bold text-green-600">40+万/月</span></div>
          </div>
        </div>
      </div>
             
      {/* 提款流水查询工具 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">流</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">手段5、提款流水查询工具</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">系统逻辑<span className="font-bold text-red-600">多年来</span>存在错误（锁定场馆流水双算、场馆红利多算1倍提款流水、输光后提款流水不自动达标等），导致需要人工重新手动计算流水。但计算标准模糊且执行不一致，使风控和质检部门经常因流水计算产生争议。在跨部门协作中，流水咨询形成冗长的沟通链路（用户-客服-运营-风控-运营-客服-用户），不仅浪费时间，降低用户体验并导致出款错误。</div>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold text-blue-700 mb-2">策略</div>
            <div className="text-gray-700 mb-4"><span className="font-bold">阶段1：</span>实现流水自动统一计算，无需人工介入；<span className="font-bold">阶段2：</span>用户在前端直接查看流水情况，目前大部分竞品已实现此体验，彻底解决这个多余过程（已提出需求，但收到无法实现的反馈）。</div>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">影响减少<span className="font-bold text-green-600">5%</span>；效率提升一倍；用户体验改善</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-700 text-sm">市场调研显示，主流平台（6 尊龙凯时（AG）7 金宝博（188）8 竞博（IM）5 万博（ManbetX）3 竞技宝（JJB）2 雷竞技（Raybet）1 易游（M6)）已普遍实现用户前端直接查看剩余提款流水功能，这不仅优化了用户体验，还有效解决了流水反复咨询的冗余低效流程和计算错误导致的出款问题（虽已提出需求，但技术侧目前无法实现）</p>
          </div>
        </div>
      </div>
    </div>
  );
};