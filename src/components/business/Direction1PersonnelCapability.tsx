import React from 'react';
import { BarChart3 } from 'lucide-react';

export const Direction1PersonnelCapability = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">1</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">人员的风控能力参差不齐</h2>
      </div>
      <p className="text-gray-700 mb-8 leading-relaxed">
        <span className="font-semibold">新人经验不足，老员工能力差异大</span>，导致审核质量不稳定，需要通过系统化培训和工具支持来提升整体风控能力。
      </p>

      {/* 1. 派单策略变革效果 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">派</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">派单策略变革效果</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">仅按金额派单，新人可能接到高风险订单，导致审核质量不稳定</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">按【风险分数+金额】派单，确保合适人员处理对应难度订单，错误率降低30%</div>
          </div>
        </div>
        
        {/* 派单策略图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">派单策略优化效果</h5>
          <div className="relative h-64">
            <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
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
                  <div className="absolute -top-8 text-sm font-semibold text-blue-600">30%</div>
                  <div className="w-24 bg-blue-500 rounded-t" style={{ height: '72px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">60单</div>
                    <div className="text-sm text-gray-600">派单优化</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500"></div>
              <span className="text-sm text-gray-600">优化订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">错误率降低: 30%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 2. 风险云盾分数效果 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">云</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">风险云盾分数效果</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">人工审核依赖经验，标准不统一，审核效率低且容易出错</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">基于模型自动生成风控报告，审核人员只需确认重点，效率提升50%</div>
          </div>
        </div>
        
        {/* 风险云盾图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">风险云盾效果</h5>
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
                  <div className="absolute -top-8 text-sm font-semibold text-green-600">50%</div>
                  <div className="w-24 bg-green-500 rounded-t" style={{ height: '120px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">100单</div>
                    <div className="text-sm text-gray-600">云盾分数</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500"></div>
              <span className="text-sm text-gray-600">优化订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">效率提升: 50%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 3. 关联下注工具 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">关</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">关联下注工具</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">人工识别对打行为效率低，容易遗漏复杂的关联关系</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">多账号对打、百家乐对打、体育对打查询工具，审核效率提升50%</div>
          </div>
        </div>
        
        {/* 关联下注工具图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">关联下注工具效果</h5>
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
                  <div className="absolute -top-8 text-sm font-semibold text-purple-600">50%</div>
                  <div className="w-24 bg-purple-500 rounded-t" style={{ height: '120px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">75单</div>
                    <div className="text-sm text-gray-600">关联工具</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500"></div>
              <span className="text-sm text-gray-600">识别订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">效率提升: 50%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 4. 提款流水工具 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">流</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">提款流水工具</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">提款因流水问题反复被拒，用户体验差，客服工作量大</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">优化流水计算逻辑，增加流水差额提醒，减少反复被拒情况65%</div>
          </div>
        </div>
        
        {/* 提款流水工具图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">提款流水工具效果</h5>
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
                  <div className="absolute -top-8 text-sm font-semibold text-orange-600">65%</div>
                  <div className="w-24 bg-orange-500 rounded-t" style={{ height: '156px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">130单</div>
                    <div className="text-sm text-gray-600">流水工具</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500"></div>
              <span className="text-sm text-gray-600">优化订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">减少被拒: 65%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 5. 体育打水工具 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">体</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">体育打水工具</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">体育打水行为识别困难，需要B端支持提供相关数据接口</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">优势赔率利用分析、危险球下注识别，打水行为识别率提升72%</div>
          </div>
        </div>
        
        {/* 体育打水工具图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">体育打水工具效果</h5>
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
                  <div className="absolute -top-8 text-sm font-semibold text-red-600">72%</div>
                  <div className="w-24 bg-red-500 rounded-t" style={{ height: '172px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">144单</div>
                    <div className="text-sm text-gray-600">打水工具</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500"></div>
              <span className="text-sm text-gray-600">识别订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">识别率: 72%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>
    </div>
  );
};