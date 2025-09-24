import React from 'react';
import { EssentialProblemsAndSolutions } from './business/EssentialProblemsAndSolutions';
import { SystemTransformationRhythm } from './business/SystemTransformationRhythm';
import { PilotResultsPresentation } from './business/PilotResultsPresentation';

export const BusinessOverview = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">风控体系变革概览</h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            <span className="font-semibold">风控变革涉及多个部门与既得利益相关方，任何调整都可能影响会员体验、代理收益和业务稳定性。因此，我们先小范围试点，效果验证后逐步推广，避免一刀切的潜在的组织及业务风险。</span>
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {/* 一、本质问题与解法 */}
                <EssentialProblemsAndSolutions />
                
                {/* 二、体系变革的节奏 */}
                <SystemTransformationRhythm />
                
                {/* 三、试点成果呈现 */}
                <PilotResultsPresentation />
              </tbody>
            </table>
          </div>
        </div>

        {/* 方向1：工具的缺失导致人工效率低下 */}
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">1</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">工具的缺失导致人工效率低下</h2>
          </div>
          
          {/* 手段1、审核分配策略 */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">手段1、审核分配策略</h4>
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
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="relative h-80 mb-6">
              {/* 双Y轴标签 */}
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-gray-600">
                分配数量
              </div>
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 rotate-90 text-sm font-medium text-orange-600">
                问题率 (%)
              </div>
              
              {/* 图表主体 */}
              <div className="mx-8 h-full relative">
                {/* 左Y轴刻度 */}
                <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>500</span>
                  <span>375</span>
                  <span>250</span>
                  <span>125</span>
                  <span>0</span>
                </div>
                
                {/* 右Y轴刻度 */}
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
                
                {/* 数据展示 */}
                <div className="absolute left-8 right-8 h-full flex items-end justify-around pb-4">
                  {[
                    { role: '初级审核员', before: 450, after: 300, beforeRate: 4.0, afterRate: 3.0 },
                    { role: '中级审核员', before: 400, after: 350, beforeRate: 3.5, afterRate: 2.8 },
                    { role: '高级审核员', before: 250, after: 400, beforeRate: 2.2, afterRate: 1.5 }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center relative">
                      {/* 调整前柱状图 */}
                      <div 
                        className="w-8 bg-blue-400 rounded-t mr-2"
                        style={{ height: `${(item.before / 500) * 240}px` }}
                      ></div>
                      
                      {/* 调整后柱状图 */}
                      <div 
                        className="w-8 bg-green-500 rounded-t ml-2"
                        style={{ height: `${(item.after / 500) * 240}px` }}
                      ></div>
                      
                      {/* 问题率点 - 调整前 */}
                      <div 
                        className="absolute w-3 h-3 bg-blue-500 rounded-full border-2 border-white"
                        style={{bottom: `${20 + (item.beforeRate / 5) * 240}px`, left: '25%'}}
                      ></div>
                      
                      {/* 问题率点 - 调整后 */}
                      <div 
                        className="absolute w-3 h-3 bg-green-600 rounded-full border-2 border-white"
                        style={{bottom: `${20 + (item.afterRate / 5) * 240}px`, right: '25%'}}
                      ></div>
                      
                      {/* 底部标签和数据 */}
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">{item.before}/{item.after}</div>
                        <div className="text-sm text-gray-700 font-medium whitespace-nowrap">{item.role}</div>
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
                <span className="text-sm text-gray-600">调整前分配数</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500"></div>
                <span className="text-sm text-gray-600">调整后分配数</span>
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
        <div>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">手段2、云顿风险分数</h4>
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
        <div className="bg-white rounded-lg p-8 mb-8 border border-purple-200">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">手段3、关联下注查询工具</h3>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">问题</h4>
                <p className="text-gray-700">完全依靠人工基于个人经验发掘关联下注（如对打）；曾经需要10人+团队从后台导出数据并在本地处理风控算法，<span className="font-bold text-red-600">存在严重的数据安全隐患</span>。且操作效率低下，有效拦截率也不足。</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">策略</h4>
                <p className="text-gray-700">标准化关联下注工具</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">收益</h4>
                <p className="text-gray-700">影响减少<span className="font-bold text-green-600">30+%，120万/月</span>；节省人力成本至少<span className="font-bold text-green-600">40+万/月</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* 体育打水查询工具 */}
        <div className="bg-white rounded-lg p-8 mb-8 border border-purple-200">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">手段4、体育打水查询工具</h3>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">问题</h4>
                <p className="text-gray-700">打水是体育中最常见的套利方式，目前完全依赖人工进行多平台对比，不仅耗时费力，效率极低，还无法实现全面及时的覆盖。</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">策略</h4>
                <p className="text-gray-700">通过B端百家赔率数据构建体育打水实时查询工具</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">收益</h4>
                <p className="text-gray-700">影响减少<span className="font-bold text-green-600">30+%，120万/月</span>；节省人力成本至少<span className="font-bold text-green-600">40+万/月</span></p>
              </div>
            </div>
          </div>       
        </div>       
             
        {/* 提款流水查询工具 */}
        <div className="bg-white rounded-lg p-8 mb-8 border border-purple-200">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">手段5、提款流水查询工具</h3>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">问题</h4>
                <p className="text-gray-700">系统逻辑<span className="font-bold text-red-600">多年来</span>存在错误（锁定场馆流水双算、场馆红利多算1倍提款流水、输光后提款流水不自动达标等），导致需要人工重新手动计算流水。但计算标准模糊且执行不一致，使风控和质检部门经常因流水计算产生争议。在跨部门协作中，流水咨询形成冗长的沟通链路（用户-客服-运营-风控-运营-客服-用户），不仅浪费时间，降低用户体验并导致出款错误。</p>
              </div>
        
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">策略</h4>
                <p className="text-gray-700"><span className="font-bold">阶段1：</span>实现流水自动统一计算，无需人工介入；<span className="font-bold">阶段2：</span>用户在前端直接查看流水情况，目前大部分竞品已实现此体验，彻底解决这个多余过程（已提出需求，但收到无法实现的反馈）。</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">收益</h4>
                <p className="text-gray-700">影响减少<span className="font-bold text-green-600">5%</span>；效率提升一倍；用户体验改善</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-700 text-sm">市场调研显示，主流平台（6 尊龙凯时（AG）7 金宝博（188）8 竞博（IM）5 万博（ManbetX）3 竞技宝（JJB）2 雷竞技（Raybet）1 易游（M6)）已普遍实现用户前端直接查看剩余提款流水功能，这不仅优化了用户体验，还有效解决了流水反复咨询的冗余低效流程和计算错误导致的出款问题（虽已提出需求，但技术侧目前无法实现）</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 方向2：人的审核不按照标准执行	 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">2</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">人的审核不按照标准执行</h2>
        </div>
        
       
        {/* 1、出款未查看备注标签 */}
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-800">出款未查看备注标签</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">问题</h4>
                <p className="text-gray-700">出款时未查看备注标签（公告）导致套利出款错误；每月约15-20%的错误出款源于此，影响约100+万/月</p>
              </div>
        
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">策略</h4>
                <p className="text-gray-700">将查看备注设为出款流程中的强制环节</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">收益</h4>
                <p className="text-gray-700">错误出款影响降低<span className="font-bold text-green-600">15%-20%</span></p>
              </div>
            </div>
          </div>

          {/* 图表 */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-end justify-between h-64 mb-4">
              <div className="flex flex-col items-center flex-1 mx-2">
                <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '280px'}}>25%</div>
                <div className="bg-red-400 w-full rounded-t transition-all duration-300" style={{height: '200px'}}></div>
                <div className="text-sm text-gray-600 mt-2">调整前</div>
                <div className="text-xs text-gray-500">错误率</div>
              </div>
              <div className="flex flex-col items-center flex-1 mx-2">
                <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '200px'}}>8%</div>
                <div className="bg-green-500 w-full rounded-t transition-all duration-300" style={{height: '64px'}}></div>
                <div className="text-sm text-gray-600 mt-2">调整后</div>
                <div className="text-xs text-gray-500">错误率</div>
              </div>
            </div>
            <div className="text-center text-sm text-gray-600">
              <div className="mb-2">统计周期：2025-04-01 ~ 2025-06-30</div>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-red-400 mr-2"></span>
                  <span>调整前错误率</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>
                  <span>调整后错误率</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. VIP禁用流程 */}
        <div className="mb-12">       
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-xl font-bold text-gray-800">VIP禁用流程</h4>            
            <div className="mb-4">
              <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
              <div className="text-gray-700 mb-4">VIP用户禁用权限管理不够精细，缺乏分级审批机制，存在误禁和滥用风险</div>
            </div>
            <div className="mb-4">
              <div className="text-lg font-semibold text-red-700 mb-2">策略</div>
              <div className="text-gray-700 mb-4">VIP用户禁用权限管理不够精细，缺乏分级审批机制，存在误禁和滥用风险</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
              <div className="text-gray-700">建立VIP禁用分级审批机制，提升禁用操作的准确性和合规性，降低误禁率80%</div>
            </div>
          </div>
        </div>
      </div>

        
      {/* 方向3：系统审核策略的维度缺失	 */}
      <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">3</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">系统审核策略的维度缺失</h2>
        </div>
        <p className="text-gray-700 mb-8 leading-relaxed">
          目前系统的策略主要集中在防御型，而非套利及作弊识别类型，导致直接出款错误，以及转人工后缺乏强有力的风险提醒。
        </p>
      
        {/* 1. 电子策略 */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">电</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">电子策略</h4>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="mb-4">
              <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
              <div className="text-gray-700 mb-4">电子游戏卡免费旋转等套利行为难以识别，系统缺乏有效的电子游戏异常行为监控机制</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
              <div className="text-gray-700">电子卡免费策略拦截率达到25%，有效防范套利行为，显著提升电子游戏风控能力</div>
            </div>
          </div>
          
          {/* 电子策略图表 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-800 mb-4">电子卡免费策略效果</h4>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-end justify-between h-64 mb-4">
                <div className="flex flex-col items-center flex-1 mx-2">
                  <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '240px'}}>35%</div>
                  <div className="bg-blue-500 w-full rounded-t transition-all duration-300" style={{height: '140px'}}></div>
                  <div className="text-sm text-gray-600 mt-2">调整前</div>
                  <div className="text-xs text-gray-500">400单</div>
                </div>
                <div className="flex flex-col items-center flex-1 mx-2">
                  <div className="text-sm font-semibold text-green-600 mb-2" style={{marginBottom: '200px'}}>5%</div>
                  <div className="bg-green-500 w-full rounded-t transition-all duration-300" style={{height: '20px'}}></div>
                  <div className="text-sm text-gray-600 mt-2">调整后</div>
                  <div className="text-xs text-gray-500">380单</div>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-blue-500 mr-2"></span>
                    <span className="text-sm text-gray-600">调整前问题率</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>
                    <span className="text-sm text-gray-600">调整后问题率</span>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-xs text-gray-500">
                  统计周期：2025-04-01 ~ 2025-06-30 | X轴：调整前后 | Y轴：问题率(%)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 真人策略 */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">真</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">真人策略</h4>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="mb-4">
              <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
              <div className="text-gray-700 mb-4">真人游戏对打和算牌行为识别不足，缺乏对真人游戏异常投注模式的有效监控</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
              <div className="text-gray-700">真人套利策略问题率26.7%，精准识别异常行为，大幅提升真人游戏风控效果</div>
            </div>
          </div>
          
          {/* 真人策略图表 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">真人套利策略效果</h5>
            <div className="relative h-64">
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                <span>500</span>
                <span>375</span>
                <span>250</span>
                <span>125</span>
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
                    <div className="absolute -top-8 text-sm font-semibold text-blue-600">26.7%</div>
                    <div className="w-24 bg-blue-500 rounded-t" style={{ height: '180px' }}></div>
                    <div className="text-center mt-3">
                      <div className="text-sm font-medium text-gray-700">450单</div>
                      <div className="text-sm text-gray-600">真人套利</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                          
            {/* 图例 */}
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500"></div>
                <span className="text-sm text-gray-600">拦截订单数</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">问题率: 26.7%</span>
              </div>
            </div>
            
            <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
          </div>
        </div>

        {/* 3. 体育策略 */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">体</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">体育策略</h4>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="mb-4">
              <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
              <div className="text-gray-700 mb-4">体育打水和对冲套利行为监控薄弱，无法有效识别跨平台套利和异常投注行为</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
              <div className="text-gray-700">体育套利策略覆盖面广，问题率22.1%，有效拦截体育投注中的套利行为</div>
            </div>
          </div>
          
          {/* 体育策略图表 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">体育套利策略效果</h5>
            <div className="relative h-64">
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
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
                    <div className="absolute -top-8 text-sm font-semibold text-red-600">22.1%</div>
                    <div className="w-24 bg-red-500 rounded-t" style={{ height: '152px' }}></div>
                    <div className="text-center mt-3">
                      <div className="text-sm font-medium text-gray-700">380单</div>
                      <div className="text-sm text-gray-600">体育套利</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>                  
                          
            {/* 图例 */}
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500"></div>
                <span className="text-sm text-gray-600">拦截订单数</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">问题率: 22.1%</span>
              </div>
            </div>
            
            <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
          </div>
        </div>

        {/* 4. 彩票策略 */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">彩</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">彩票策略</h4>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="mb-4">
              <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
              <div className="text-gray-700 mb-4">彩票全包和异常投注模式缺乏有效拦截，无法识别彩票游戏中的套利行为</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
              <div className="text-gray-700">彩票套利策略问题率25%，有效识别全包行为，显著提升彩票游戏风控水平</div>
            </div>
          </div>
          
          {/* 彩票策略图表 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">彩票套利策略效果</h5>
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
                    <div className="absolute -top-8 text-sm font-semibold text-purple-600">25.0%</div>
                    <div className="w-24 bg-purple-500 rounded-t" style={{ height: '168px' }}></div>
                    <div className="text-center mt-3">
                      <div className="text-sm font-medium text-gray-700">280单</div>
                      <div className="text-sm text-gray-600">彩票套利</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                          
            {/* 图例 */}
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-500"></div>
                <span className="text-sm text-gray-600">拦截订单数</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">问题率: 25.0%</span>
              </div>
            </div>
            
            <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
          </div>
        </div>

        {/* 5. 棋牌策略 */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">棋</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">棋牌策略</h4>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="mb-4">
              <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
              <div className="text-gray-700 mb-4">棋牌游戏作弊和异常胜率难以监控，缺乏对棋牌游戏异常行为的有效识别</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
              <div className="text-gray-700">棋牌套利策略问题率23.8%，精准定位异常行为，有效提升棋牌游戏安全性</div>
            </div>
          </div>
          
          {/* 棋牌策略图表 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">棋牌套利策略效果</h5>
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
                    <div className="absolute -top-8 text-sm font-semibold text-yellow-600">23.8%</div>
                    <div className="w-24 bg-yellow-500 rounded-t" style={{ height: '168px' }}></div>
                    <div className="text-center mt-3">
                      <div className="text-sm font-medium text-gray-700">210单</div>
                      <div className="text-sm text-gray-600">棋牌套利</div>
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
                <span className="text-sm text-gray-600">问题率: 23.8%</span>
              </div>
            </div>
            
            <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
          </div>
        </div>
      </div>
      
      {/* 方向4：内外的人员进行勾结串联	*/}
      <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">4</span>
          </div>
            <h2 className="text-3xl font-bold text-gray-800">内外的人员进行勾结串联</h2>
        </div>

        {/* 2. 风控标签 */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">标</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">风控标签</h4>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="mb-4">
              <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
              <div className="text-gray-700 mb-4">风控标签查看权限过于宽泛，敏感信息容易泄露，缺乏访问记录和审计机制</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
              <div className="text-gray-700">实施标签分级查看机制，敏感信息访问减少60%，建立完整的访问审计链路</div>
            </div>
          </div>
          
          {/* 风控标签图表 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">风控标签管控效果</h5>
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
                    <div className="absolute -top-8 text-sm font-semibold text-cyan-600">60%</div>
                    <div className="w-24 bg-cyan-500 rounded-t" style={{ height: '144px' }}></div>
                    <div className="text-center mt-3">
                      <div className="text-sm font-medium text-gray-700">120单</div>
                      <div className="text-sm text-gray-600">标签管控</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                          
            {/* 图例 */}
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-cyan-500"></div>
                <span className="text-sm text-gray-600">管控订单数</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">减少率: 60%</span>
              </div>
            </div>
            
            <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
          </div>
        </div>

        {/* 3. 动态参数 */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">参</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">动态参数</h4>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="mb-4">
              <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
              <div className="text-gray-700 mb-4">风控策略参数固定化，容易被外界摸清规律，故意规避和绕过，缺乏动态调整机制</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
              <div className="text-gray-700">实施动态参数机制，策略有效性提升45%，外界预测难度大幅增加</div>
            </div>
          </div>
          
          {/* 动态参数图表 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">动态参数管控效果</h5>
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
                    <div className="absolute -top-8 text-sm font-semibold text-teal-600">45%</div>
                    <div className="w-24 bg-teal-500 rounded-t" style={{ height: '108px' }}></div>
                    <div className="text-center mt-3">
                      <div className="text-sm font-medium text-gray-700">90单</div>
                      <div className="text-sm text-gray-600">动态参数</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                          
            {/* 图例 */}
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-teal-500"></div>
                <span className="text-sm text-gray-600">管控订单数</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">提升率: 45%</span>
              </div>
            </div>
            
            <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
          </div>
        </div>
      </div>

      {/* 方向5：一些极端异常的预防机制 */}
      <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">5</span>
          </div>
            <h2 className="text-3xl font-bold text-gray-800">一些极端异常的预防机制</h2>
        </div>
          <p className="text-gray-700 mb-8 leading-relaxed">
          <span className="font-semibold">流程缺陷及策略局限导致异常资金风险</span>，针对场馆多钱、沉睡用户等极端情况建立预警和防御策略，确保资金安全。
        </p>
        {/* 1. 钱包预警 */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">钱</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">钱包预警</h4>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="mb-4">
              <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
              <div className="text-gray-700 mb-4">用户钱包异常变动缺乏实时监控，无法及时发现异常资金流动</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
              <div className="text-gray-700">建立钱包异常预警机制，异常资金发现率提升85%，响应时间缩短至分钟级</div>
            </div>
          </div>
          
          {/* 钱包预警图表 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">钱包预警效果</h5>
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
                    <div className="absolute -top-8 text-sm font-semibold text-emerald-600">85%</div>
                    <div className="w-24 bg-emerald-500 rounded-t" style={{ height: '204px' }}></div>
                    <div className="text-center mt-3">
                      <div className="text-sm font-medium text-gray-700">255单</div>
                      <div className="text-sm text-gray-600">钱包预警</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
            {/* 图例 */}
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-emerald-500"></div>
                <span className="text-sm text-gray-600">预警订单数</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">发现率: 85%</span>
              </div>
            </div>
            
            <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
          </div>
        </div>

        {/* 2. 场馆多钱 */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">场</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">场馆多钱</h4>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="mb-4">
              <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
              <div className="text-gray-700 mb-4">场馆账户异常增加资金，缺乏有效的监控和预警机制</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
              <div className="text-gray-700">场馆多钱预警机制上线，异常资金识别率达到92%，有效防范资金风险</div>
            </div>
          </div>
          
          {/* 场馆多钱图表 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">场馆多钱预警效果</h5>
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
                    <div className="absolute -top-8 text-sm font-semibold text-rose-600">92%</div>
                    <div className="w-24 bg-rose-500 rounded-t" style={{ height: '184px' }}></div>
                    <div className="text-center mt-3">
                      <div className="text-sm font-medium text-gray-700">184单</div>
                      <div className="text-sm text-gray-600">场馆多钱</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                          
            {/* 图例 */}
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-rose-500"></div>
                <span className="text-sm text-gray-600">预警订单数</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">识别率: 92%</span>
              </div>
            </div>
            
            <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
          </div>
        </div>

        {/* 3. 沉睡用户 */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">睡</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">沉睡用户</h4>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="mb-4">
              <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
              <div className="text-gray-700 mb-4">长期沉睡用户突然活跃，可能存在账号被盗或异常操作风险</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
              <div className="text-gray-700">沉睡用户活跃预警机制，异常账号识别率78%，有效防范账号盗用风险</div>
            </div>
          </div>
          
          {/* 沉睡用户图表 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">沉睡用户预警效果</h5>
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
                    <div className="absolute -top-8 text-sm font-semibold text-amber-600">78%</div>
                    <div className="w-24 bg-amber-500 rounded-t" style={{ height: '156px' }}></div>
                    <div className="text-center mt-3">
                      <div className="text-sm font-medium text-gray-700">117单</div>
                      <div className="text-sm text-gray-600">沉睡用户</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                          
            {/* 图例 */}
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-amber-500"></div>
                <span className="text-sm text-gray-600">预警订单数</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">识别率: 78%</span>
              </div>
            </div>
            
            <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
          </div>
        </div>

      </div>
    </div>
    
    {/* Footer */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="text-gray-400 text-sm">FKZX</div>
    </div>
  </div>
  );
};