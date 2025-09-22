import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export const SportsOverallKillRate = () => {
  // 辅助函数：获取最大值最小值的样式类
  const getMinMaxClass = (value: number, values: number[]) => {
    // 排除100%的数字
    if (value === 100.00) return '';
    const max = Math.max(...values);
    const min = Math.min(...values);
    if (value === max && max !== min) return 'text-red-400';
    if (value === min && max !== min) return 'text-green-500';
    return '';
  };

  // 整体体育杀率分析数据
  const overallData = [
    { month: '2025 1', yRate: 5.46, bRate: 4.79, bwRate: 4.47, ybRate: 5.36, ybBwRate: 5.31, imRate: 5.74 },
    { month: '2025 2', yRate: 5.75, bRate: 4.90, bwRate: 5.99, ybRate: 5.62, ybBwRate: 5.64, imRate: 5.99 },
    { month: '2025 3', yRate: 5.50, bRate: 4.82, bwRate: 4.95, ybRate: 5.39, ybBwRate: 5.37, imRate: 6.06 },
    { month: '2025 4', yRate: 5.54, bRate: 4.68, bwRate: 4.93, ybRate: 5.40, ybBwRate: 5.38, imRate: 5.16 },
    { month: '2025 5', yRate: 5.55, bRate: 4.56, bwRate: 5.46, ybRate: 5.39, ybBwRate: 5.39, imRate: 5.87 },
    { month: '2025 6', yRate: 5.79, bRate: 5.60, bwRate: 5.71, ybRate: 5.76, ybBwRate: 5.76, imRate: 5.73 }
  ];

  // 冠名月份数据
  const crownedMonthlyData = [
    { month: '2025 1', yRate: 5.53, bRate: 4.81, bwRate: 4.45, ybRate: 5.42, ybBwRate: 5.37 },
    { month: '2025 2', yRate: 5.85, bRate: 5.04, bwRate: 6.07, ybRate: 5.72, ybBwRate: 5.74 },
    { month: '2025 3', yRate: 5.61, bRate: 4.96, bwRate: 5.01, ybRate: 5.51, ybBwRate: 5.48 },
    { month: '2025 4', yRate: 5.67, bRate: 4.78, bwRate: 5.12, ybRate: 5.52, ybBwRate: 5.50 },
    { month: '2025 5', yRate: 5.66, bRate: 4.80, bwRate: 5.53, ybRate: 5.52, ybBwRate: 5.52 },
    { month: '2025 6', yRate: 5.82, bRate: 5.73, bwRate: 5.69, ybRate: 5.81, ybBwRate: 5.81 }
  ];

  // 熊猫月份数据
  const pandaMonthlyData = [
    { month: '2025 1', yRate: 4.24, bRate: 4.36, bwRate: 4.74, ybRate: 4.26, ybBwRate: 4.29 },
    { month: '2025 2', yRate: 3.93, bRate: 2.24, bwRate: 4.96, ybRate: 3.68, ybBwRate: 3.77 },
    { month: '2025 3', yRate: 3.48, bRate: 1.94, bwRate: 4.15, ybRate: 3.26, ybBwRate: 3.31 },
    { month: '2025 4', yRate: 3.31, bRate: 2.62, bwRate: 2.69, ybRate: 3.20, ybBwRate: 3.17 },
    { month: '2025 5', yRate: 3.58, bRate: 0.39, bwRate: 4.61, ybRate: 3.07, ybBwRate: 3.16 },
    { month: '2025 6', yRate: 5.10, bRate: 3.13, bwRate: 5.86, ybRate: 4.86, ybBwRate: 4.93 }
  ];

  // 总计行的数据（用于最大值最小值高亮）
  const overallTotalRates = [5.59, 4.85, 5.20, 5.48, 5.46, 5.76];
  const crownedTotalRates = [5.68, 4.98, 5.25, 5.58, 5.56];
  const pandaTotalRates = [3.91, 2.36, 4.46, 3.69, 3.74];

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">2.6 体育整体杀率明细</h1>
      </div>

      {/* 整体体育杀率分析 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="space-y-8 mb-8">
          {/* 整体表格 */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 text-center font-semibold">整体｜月份</th>
                  <th className="p-3 text-center font-semibold">Y系</th>
                  <th className="p-3 text-center font-semibold">B系</th>
                  <th className="p-3 text-center font-semibold">BW</th>
                  <th className="p-3 text-center font-semibold">Y/B系</th>
                  <th className="p-3 text-center font-semibold">Y/B/BW</th>
                  <th className="p-3 text-center font-semibold">IM体育</th>
                </tr>
              </thead>
              <tbody>
                {overallData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-3 text-center font-semibold">{row.month}</td>
                    <td className="p-3 text-center">{row.yRate}%</td>
                    <td className="p-3 text-center">{row.bRate}%</td>
                    <td className="p-3 text-center">{row.bwRate}%</td>
                    <td className="p-3 text-center">{row.ybRate}%</td>
                    <td className="p-3 text-center">{row.ybBwRate}%</td>
                    <td className="p-3 text-center">{row.imRate}%</td>
                  </tr>
                ))}
                <tr className="bg-blue-50 border-b border-gray-100">
                  <td className="p-3 text-center font-semibold">总计</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.59, overallTotalRates)}`}>5.59%</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(4.85, overallTotalRates)}`}>4.85%</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.20, overallTotalRates)}`}>5.20%</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.48, overallTotalRates)}`}>5.48%</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.46, overallTotalRates)}`}>5.46%</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.76, overallTotalRates)}`}>5.76%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 冠名月份数据 */}
          <div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-3 text-center font-semibold">冠名｜月份</th>
                    <th className="p-3 text-center font-semibold">Y系</th>
                    <th className="p-3 text-center font-semibold">B系</th>
                    <th className="p-3 text-center font-semibold">BW</th>
                    <th className="p-3 text-center font-semibold">Y、B系</th>
                    <th className="p-3 text-center font-semibold">Y/B/BW</th>
                  </tr>
                </thead>
                <tbody>
                  {crownedMonthlyData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-3 text-center font-semibold">{row.month}</td>
                      <td className="p-3 text-center">{row.yRate}%</td>
                      <td className="p-3 text-center">{row.bRate}%</td>
                      <td className="p-3 text-center">{row.bwRate}%</td>
                      <td className="p-3 text-center">{row.ybRate}%</td>
                      <td className="p-3 text-center">{row.ybBwRate}%</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="p-3 text-center font-semibold">总计</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.68, crownedTotalRates)}`}>5.68%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(4.98, crownedTotalRates)}`}>4.98%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.25, crownedTotalRates)}`}>5.25%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.58, crownedTotalRates)}`}>5.58%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.56, crownedTotalRates)}`}>5.56%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 熊猫月份数据 */}
          <div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-3 text-center font-semibold">熊猫｜月份</th>
                    <th className="p-3 text-center font-semibold">Y系</th>
                    <th className="p-3 text-center font-semibold">B系</th>
                    <th className="p-3 text-center font-semibold">BW</th>
                    <th className="p-3 text-center font-semibold">Y、B系</th>
                    <th className="p-3 text-center font-semibold">Y/B/BW</th>
                  </tr>
                </thead>
                <tbody>
                  {pandaMonthlyData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-3 text-center font-semibold">{row.month}</td>
                      <td className="p-3 text-center">{row.yRate}%</td>
                      <td className="p-3 text-center">{row.bRate}%</td>
                      <td className="p-3 text-center">{row.bwRate}%</td>
                      <td className="p-3 text-center">{row.ybRate}%</td>
                      <td className="p-3 text-center">{row.ybBwRate}%</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="p-3 text-center font-semibold">总计</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(3.91, pandaTotalRates)}`}>3.91%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(2.36, pandaTotalRates)}`}>2.36%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(4.46, pandaTotalRates)}`}>4.46%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(3.69, pandaTotalRates)}`}>3.69%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(3.74, pandaTotalRates)}`}>3.74%</td>
                  </tr>
                </tbody>
              </table>
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
              <span className="text-red-600 mr-2">▶</span>
              <span className="text-red-600 font-semibold"> DB体育场馆是含有大量内嵌真人、彩票订单，此杀率数据已排除内嵌真人与彩票</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">▶</span>
              <span>熊猫杀率近半年只有3.74%，比整体低1.725%，1月至5月表现差劲，6月份有所好转</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">▶</span>
              <span>B系近半年杀率最低只有4.85%，比整体低于整体0.61%</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">▶</span>
              <span>IM体育整体杀率5.76%，要高于DB整体0.29%左右</span>
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