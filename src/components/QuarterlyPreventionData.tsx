import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export const QuarterlyPreventionData = () => {
  // 第三季度防范单量与金额数据
  const preventionData = [
    { month: '2025/1', amount: 1.647 },
    { month: '2025/2', amount: 1.225 },
    { month: '2025/3', amount: 1.337 },
    { month: '2025/4', amount: 1.327 },
    { month: '2025/5', amount: 1.309 },
    { month: '2025/6', amount: 1.126 }
  ];

  // 人工单量与时效数据
  const manualData = [
    { month: '2025/1', volume: 228.8, efficiency: '06:50' },
    { month: '2025/2', volume: 206.8, efficiency: '05:30' },
    { month: '2025/3', volume: 220.3, efficiency: '08:20' },
    { month: '2025/4', volume: 220.5, efficiency: '06:54' },
    { month: '2025/5', volume: 205.8, efficiency: '06:38' },
    { month: '2025/6', volume: 217.4, efficiency: '06:32' }
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
          <span className="font-medium ml-2">站点类型占比</span>
        </div>
      </div>

      {/* 第三季度防范单量与金额 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* 左侧：防范金额图表 */}
          <div className="bg-white rounded-lg p-5 border border-blue-200">
            <div className="bg-blue-600 text-white text-center py-3 rounded-lg mb-6">
              <h3 className="text-xl font-bold">二季度总防范金额：3.95E</h3>
            </div>

            {/* 图表区域 */}
            <div className="h-[280px] mb-2 relative">
              <div className="flex items-end justify-between h-full">
                {/* Y轴基线 */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></div>
                {preventionData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1 mx-1 relative">
                    <div className="absolute -top-6 text-sm font-semibold text-blue-600">{item.amount}</div>
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
              <h3 className="text-xl font-bold">二季度总平均审核时长:  06:41</h3>
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
                    <div className="absolute text-sm font-semibold text-blue-600" style={{ bottom: `${barHeight + 4}px` }}>{item.volume}</div>
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
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">数据解读</h2>
        </div>

        <div className="bg-white rounded-lg p-6">
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">

              <span className="text-blue-600 mr-2">▶</span>
              <span>整体人工审核单量在643.7笔，本季度对比上季度呈现下降，降低1.8%</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">▶</span>
              <span>整体人工审核时效在06：42整体环比上一季度，人工审核效率有所提升。后续持续发展优化此项时长</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">▶</span>
              <span>此部分原因为：JN+BD站点执行迁移事项，会员数量减少较低，单量进行金额分配后故有所提升</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">▶</span>
              <span>整体拦截金额为3.77E，本季度环比上一季度有所下降，减少12%。次部分原因为1月整体数据拉高1季度金额占比导致，春节后波动平稳</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX Q3 REPORT</div>
      </div>
    </div>
  );
};