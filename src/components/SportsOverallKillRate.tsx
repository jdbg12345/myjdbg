import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';
import { formatPercent } from '../utils/formatters';

export const SportsOverallKillRate = () => {
  const getMinMaxClass = (value: number, values: number[]) => {
    if (value === 100.00) return '';
    const max = Math.max(...values);
    const min = Math.min(...values);
    if (value === max && max !== min) return 'text-red-400';
    if (value === min && max !== min) return 'text-green-500';
    return '';
  };

  const overallData = [
    { month: '2025 4', yRate: 5.54, bRate: 4.68, bwRate: 4.93, imRate: 5.16, totalRate: 5.08 },
    { month: '2025 5', yRate: 5.55, bRate: 4.56, bwRate: 5.46, imRate: 5.87, totalRate: 5.36 },
    { month: '2025 6', yRate: 5.79, bRate: 5.60, bwRate: 5.71, imRate: 5.73, totalRate: 5.71 },
    { month: '2025 7', yRate: 5.98, bRate: 5.42, bwRate: 6.20, imRate: 6.06, totalRate: 5.92 },
    { month: '2025 8', yRate: 5.96, bRate: 5.67, bwRate: 5.59, imRate: 6.26, totalRate: 5.87 },
    { month: '2025 9', yRate: 5.54, bRate: 5.48, bwRate: 5.34, imRate: 5.93, totalRate: 5.57 }
  ];

  const crownedMonthlyData = [
    { month: '2025 4', yRate: 5.67, bRate: 4.78, bwRate: 5.12, totalRate: 5.19 },
    { month: '2025 5', yRate: 5.66, bRate: 4.80, bwRate: 5.53, totalRate: 5.33 },
    { month: '2025 6', yRate: 5.82, bRate: 5.73, bwRate: 5.69, totalRate: 5.75 },
    { month: '2025 7', yRate: 6.05, bRate: 5.59, bwRate: 6.18, totalRate: 5.94 },
    { month: '2025 8', yRate: 6.01, bRate: 5.80, bwRate: 5.49, totalRate: 5.77 },
    { month: '2025 9', yRate: 5.62, bRate: 5.59, bwRate: 5.24, totalRate: 5.48 }
  ];

  const pandaMonthlyData = [
    { month: '2025 4', yRate: 3.31, bRate: 2.62, bwRate: 2.69, totalRate: 2.87 },
    { month: '2025 5', yRate: 3.58, bRate: 0.39, bwRate: 4.61, totalRate: 2.86 },
    { month: '2025 6', yRate: 5.10, bRate: 3.13, bwRate: 5.86, totalRate: 4.70 },
    { month: '2025 7', yRate: 4.08, bRate: 2.09, bwRate: 6.19, totalRate: 4.12 },
    { month: '2025 8', yRate: 4.01, bRate: 3.59, bwRate: 5.73, totalRate: 4.44 },
    { month: '2025 9', yRate: 3.28, bRate: 2.69, bwRate: 4.31, totalRate: 3.43 }
  ];

  const overallTotalRates = [5.72, 5.23, 5.54, 5.84, 5.58];
  const crownedTotalRates = [5.81, 5.38, 5.54, 5.58];
  const pandaTotalRates = [3.89, 2.42, 4.90, 3.74];

  return (
    <div className="bg-white rounded-lg p-10 mb-6 relative">
      <div className="mb-4 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.9 体育整体杀率明细</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">主要玩法杀率分析</span>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 mb-6 border border-blue-200">
        <div className="space-y-8 mb-8">
          {/* 整体表格 */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden table-fixed">
              <colgroup>
                <col className="w-32" />
                <col className="w-24" />
                <col className="w-24" />
                <col className="w-24" />
                <col className="w-24" />
                <col className="w-24" />
              </colgroup>
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 text-center font-semibold">日期</th>
                  <th className="p-3 text-center font-semibold">B系</th>
                  <th className="p-3 text-center font-semibold">Y系</th>
                  <th className="p-3 text-center font-semibold">BW</th>
                  <th className="p-3 text-center font-semibold">IM</th>
                  <th className="p-3 text-center font-semibold">合计</th>
                </tr>
              </thead>
              <tbody>
                {overallData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="p-3 text-center font-semibold">{row.month}</td>
                    <td className="p-2 text-center font-semibold border-r border-gray-200">{formatPercent(row.bRate, 2)}</td>
                    <td className="p-2 text-center font-semibold border-r border-gray-200">{formatPercent(row.yRate, 2)}</td>
                    <td className="p-2 text-center font-semibold border-r border-gray-200">{formatPercent(row.bwRate, 2)}</td>
                    <td className="p-2 text-center font-semibold border-r border-gray-200">{formatPercent(row.imRate, 2)}</td>
                    <td className="p-2 text-center font-semibold border-r border-gray-200">{formatPercent(row.totalRate, 2)}</td>
                  </tr>
                ))}
                <tr className="bg-blue-50 border-b border-gray-100">
                  <td className="p-3 text-center font-semibold">合计</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.23, overallTotalRates)}`}>{formatPercent(5.23, 2)}</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.72, overallTotalRates)}`}>{formatPercent(5.72, 2)}</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.54, overallTotalRates)}`}>{formatPercent(5.54, 2)}</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.84, overallTotalRates)}`}>{formatPercent(5.84, 2)}</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.58, overallTotalRates)}`}>{formatPercent(5.58, 2)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 冠名月份数据 */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden table-fixed">
              <colgroup>
                <col className="w-32" />
                <col className="w-24" />
                <col className="w-24" />
                <col className="w-24" />
                <col className="w-24" />
                <col className="w-24" />
              </colgroup>
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 text-center font-semibold">冠名</th>
                  <th className="p-3 text-center font-semibold">B系</th>
                  <th className="p-3 text-center font-semibold">Y系</th>
                  <th className="p-3 text-center font-semibold">BW</th>
                  <th className="p-3 text-center font-semibold">IM</th>
                  <th className="p-3 text-center font-semibold">合计</th>
                </tr>
              </thead>
              <tbody>
                {crownedMonthlyData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="p-3 text-center font-semibold">{row.month}</td>
                    <td className="p-2 text-center font-semibold border-r border-gray-200">{formatPercent(row.bRate, 2)}</td>
                    <td className="p-2 text-center font-semibold border-r border-gray-200">{formatPercent(row.yRate, 2)}</td>
                    <td className="p-2 text-center font-semibold border-r border-gray-200">{formatPercent(row.bwRate, 2)}</td>
                    <td className="p-3 text-center text-gray-400">-</td>
                    <td className="p-2 text-center font-semibold border-r border-gray-200">{formatPercent(row.totalRate, 2)}</td>
                  </tr>
                ))}
                <tr className="bg-blue-50 border-b border-gray-100">
                  <td className="p-3 text-center font-semibold">合计</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.38, crownedTotalRates)}`}>{formatPercent(5.38, 2)}</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.81, crownedTotalRates)}`}>{formatPercent(5.81, 2)}</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.54, crownedTotalRates)}`}>{formatPercent(5.54, 2)}</td>
                  <td className="p-3 text-center text-gray-400 font-semibold">-</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.58, crownedTotalRates)}`}>{formatPercent(5.58, 2)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 熊猫月份数据 */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden table-fixed">
              <colgroup>
                <col className="w-32" />
                <col className="w-24" />
                <col className="w-24" />
                <col className="w-24" />
                <col className="w-24" />
                <col className="w-24" />
              </colgroup>
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 text-center font-semibold">熊猫</th>
                  <th className="p-3 text-center font-semibold">B系</th>
                  <th className="p-3 text-center font-semibold">Y系</th>
                  <th className="p-3 text-center font-semibold">BW</th>
                  <th className="p-3 text-center font-semibold">IM</th>
                  <th className="p-3 text-center font-semibold">合计</th>
                </tr>
              </thead>
              <tbody>
                {pandaMonthlyData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="p-3 text-center font-semibold">{row.month}</td>
                    <td className="p-2 text-center font-semibold border-r border-gray-200">{formatPercent(row.bRate, 2)}</td>
                    <td className="p-2 text-center font-semibold border-r border-gray-200">{formatPercent(row.yRate, 2)}</td>
                    <td className="p-2 text-center font-semibold border-r border-gray-200">{formatPercent(row.bwRate, 2)}</td>
                    <td className="p-3 text-center text-gray-400">-</td>
                    <td className="p-2 text-center font-semibold border-r border-gray-200">{formatPercent(row.totalRate, 2)}</td>
                  </tr>
                ))}
                <tr className="bg-blue-50 border-b border-gray-100">
                  <td className="p-3 text-center font-semibold">合计</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(2.42, pandaTotalRates)}`}>{formatPercent(2.42, 2)}</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(3.89, pandaTotalRates)}`}>{formatPercent(3.89, 2)}</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(4.90, pandaTotalRates)}`}>{formatPercent(4.90, 2)}</td>
                  <td className="p-3 text-center text-gray-400 font-semibold">-</td>
                  <td className={`p-3 text-center font-semibold ${getMinMaxClass(3.74, pandaTotalRates)}`}>{formatPercent(3.74, 2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 数据解读 */}
      <div className="bg-white rounded-lg p-6 mb-6 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">数据解读</h2>
        </div>

        <div className="bg-white rounded-lg p-6">
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-red-600">DB体育场馆是含有大量内嵌真人、彩票订单，此杀率数据已排除内嵌真人与彩票</span></span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-blue-600">熊猫第3季度</span>杀率只有<span className="font-semibold text-red-600">3.74%</span>与上半年差不多，较整体<span className="font-semibold text-red-600">低2.04%</span>，属<span className="font-semibold text-red-600">B系较为严重</span>只有<span className="font-semibold text-red-600">2.81%</span></span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-green-600">熊猫在BW的表现长期较为优越的</span>，第3季度达到<span className="font-semibold text-green-600">5.3%</span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">Q3 REPORT</div>
      </div>
    </div>
  );
};
