import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';
import { formatNumber } from '../utils/formatters';
import { DataInsights } from './shared/DataInsights';

export const QuarterlyPreventionData = () => {
  // 第三季度防范单量与金额数据（亿元）
  const preventionData = [
    { month: '2025/4', amount: 1.327 },
    { month: '2025/5', amount: 1.309 },
    { month: '2025/6', amount: 1.126 },
    { month: '2025/7', amount: 1.346 },
    { month: '2025/8', amount: 1.483 },
    { month: '2025/9', amount: 1.121 }
  ];

  const totalAmount = preventionData.reduce((sum, item) => sum + item.amount, 0);

  // 人工单量与时效数据
  const manualData = [
    { month: '2025/4', volume: 220.51, efficiency: '06:54' },
    { month: '2025/5', volume: 205.81, efficiency: '06:34' },
    { month: '2025/6', volume: 217.38, efficiency: '06:32' },
    { month: '2025/7', volume: 202.72, efficiency: '06:34' },
    { month: '2025/8', volume: 200.68, efficiency: '06:50' },
    { month: '2025/9', volume: 203.26, efficiency: '07:02' }
  ];

  const maxAmount = Math.max(...preventionData.map(d => d.amount));
  const maxVolume = Math.max(...manualData.map(d => d.volume));

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.1 防范单量与金额</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">防范金类型占比</span>
        </div>
      </div>

      {/* 第三季度防范单量与金额 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* 左侧：防范金额图表 */}
          <div className="bg-white rounded-lg p-5 border border-blue-200">
            <div className="bg-blue-600 text-white text-center py-3 rounded-lg mb-6">
              <h3 className="text-white text-xl font-bold">三季度总防范金额：3.95</h3>
            </div>

            {/* 图表区域 */}
            <div className="h-[280px] mb-2 relative">
              <div className="flex items-end justify-between h-full">
                {/* Y轴基线 */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></div>
                {preventionData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1 mx-1 relative">
                    <div className="absolute -top-6 text-sm font-semibold text-blue-600">{formatNumber(item.amount, 3)}</div>
                    <div
                      className="bg-blue-500 w-full rounded-t"
                      style={{ height: `${(item.amount / maxAmount) * 280}px` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* X轴标签（图表外） */}
            <div className="flex items-center justify-between mt-2">
              {preventionData.map((item, index) => (
                <div key={index} className="flex-1 text-center">
                  <div className="text-sm text-gray-600 whitespace-nowrap">{item.month}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className="inline-block w-4 h-4 bg-blue-500 mr-2"></span>
                <span className="text-sm text-gray-600">防范金额</span>
              </div>
            </div>
          </div>

          {/* 右侧：人工单量与时效图表 */}
          <div className="bg-white rounded-lg p-5 border border-blue-200">
            <div className="bg-blue-600 text-white text-center py-3 rounded-lg mb-6">
              <h3 className="text-white text-xl font-bold">三季度总平均审核时长：06:49</h3>
            </div>

            {/* 图表区域 */}
            <div className="h-[280px] mb-2 relative">
              <div className="flex items-end justify-between h-full relative">
                {/* Y轴基线 */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></div>
                {manualData.map((item, index) => {
                  const barHeight = (item.volume / maxVolume) * 280;
                  return (
                  <div key={index} className="flex flex-col items-center flex-1 mx-1 relative">
                    <div className="absolute text-sm font-semibold text-blue-600" style={{ bottom: `${barHeight + 4}px` }}>{formatNumber(item.volume, 3)}</div>
                    <div
                      className="bg-blue-500 w-full rounded-t"
                      style={{ height: `${barHeight}px` }}
                    ></div>
                    <div className="absolute w-full flex justify-center" style={{ bottom: `${barHeight * 0.6}px` }}>
                      <div className="bg-red-300 w-3 h-3 rounded-full z-10"></div>
                      <div className="text-xs text-red-400 ml-1 bg-white px-1 rounded shadow whitespace-nowrap z-10">{item.efficiency}</div>
                    </div>
                  </div>
                )})}
                {/* 连接红点的折线 */}
                <svg className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0">
                  <polyline
                    fill="none"
                    stroke="#fca5a5"
                    strokeWidth="2"
                    points={manualData.map((item, index) => {
                      const x = (index + 0.5) * (100 / manualData.length);
                      const barHeight = (item.volume / maxVolume) * 280;
                      const y = 280 - barHeight * 0.6;
                      return `${x}%,${y}px`;
                    }).join(' ')}
                  />
                </svg>
              </div>
            </div>

            {/* X轴标签（图表外） */}
            <div className="flex items-center justify-between mt-2">
              {manualData.map((item, index) => (
                <div key={index} className="flex-1 text-center">
                  <div className="text-sm text-gray-600 whitespace-nowrap">{item.month}</div>
                </div>
              ))}
            </div>
            <div className="text-center space-x-4">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-blue-500 mr-2"></span>
                  <span className="text-sm text-gray-600">人工单量</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-red-300 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-600">人工时效</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 数据解读 */}
      <DataInsights
        insights={[
          {
            text: '整体人工审核单量在<span class="font-semibold text-blue-600">606.7笔</span>，对比上季度<span class="font-semibold text-red-600">减少6%</span>，本季度对比上季度呈现下降趋势。此部分原因为大部分站点单量均存在下降趋势。'
          },
          {
            text: '整体人工审核时效在<span class="font-semibold text-blue-600">06:49</span>，整体环比上一季度，人工审核效率因9月导致下降，原因为外包远程部门提高准确率进行策略单量导流，总部单量增加时效有所延长，后续持续发展优化此项时长。'
          },
          {
            text: '整体拦截金额为<span class="font-semibold text-green-600">3.95亿</span>，本季度环比上一季度<span class="font-semibold text-green-600">提升5%</span>，此部分原因为8月代理部分人头费拦截增多导致。'
          }
        ]}
      />
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX Q3 REPORT</div>
      </div>
    </div>
  );
};