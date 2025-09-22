import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export const QuarterlyPreventionCategory = () => {
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

  // 各大类站点占比数据 - 完整更新数据
const siteData = [
    { site: 'Y1', q1Amount: 3188.40, q1Percent: 7.57, q2Amount: 3569.31, q2Percent: 9.49, agentAmount: 1756.24, agentPercent: 11.47, sportsAmount: 661.19, sportsPercent: 5.44, bonusAmount: 886.96, bonusPercent: 14.82, otherAmount: 264.92, otherPercent: 6.34 },
    { site: 'Y2', q1Amount: 3016.20, q1Percent: 7.16, q2Amount: 3012.55, q2Percent: 8.01, agentAmount: 1571.45, agentPercent: 10.26, sportsAmount: 778.78, sportsPercent: 6.41, bonusAmount: 485.00, bonusPercent: 8.11, otherAmount: 177.31, otherPercent: 4.24 },
    { site: 'Y3', q1Amount: 3889.30, q1Percent: 9.24, q2Amount: 3017.89, q2Percent: 8.02, agentAmount: 1510.45, agentPercent: 9.86, sportsAmount: 800.91, sportsPercent: 6.59, bonusAmount: 504.50, bonusPercent: 8.43, otherAmount: 202.04, otherPercent: 4.83 },
    { site: 'Y4', q1Amount: 12397.80, q1Percent: 29.45, q2Amount: 9856.62, q2Percent: 26.20, agentAmount: 2949.60, agentPercent: 19.26, sportsAmount: 4091.23, sportsPercent: 33.69, bonusAmount: 1668.41, bonusPercent: 27.89, otherAmount: 1147.38, otherPercent: 27.45 },
    { site: 'Y5', q1Amount: 317.10, q1Percent: 0.75, q2Amount: 154.52, q2Percent: 0.41, agentAmount: 43.31, agentPercent: 0.28, sportsAmount: 56.70, sportsPercent: 0.47, bonusAmount: 8.54, bonusPercent: 0.14, otherAmount: 45.97, otherPercent: 1.10 },
    { site: 'Y7', q1Amount: 3731.40, q1Percent: 8.86, q2Amount: 3178.58, q2Percent: 8.45, agentAmount: 1114.24, agentPercent: 7.28, sportsAmount: 944.61, sportsPercent: 7.78, bonusAmount: 679.86, bonusPercent: 11.36, otherAmount: 439.86, otherPercent: 10.52 },
    { site: 'Y8', q1Amount: 868.40, q1Percent: 2.06, q2Amount: 450.25, q2Percent: 1.20, agentAmount: 136.25, agentPercent: 0.89, sportsAmount: 127.32, sportsPercent: 1.05, bonusAmount: 97.75, bonusPercent: 1.63, otherAmount: 88.92, otherPercent: 2.13 },
    { site: 'Y6+Y9', q1Amount: 6520.70, q1Percent: 15.49, q2Amount: 4812.13, q2Percent: 12.79, agentAmount: 2109.91, agentPercent: 13.78, sportsAmount: 1519.76, sportsPercent: 12.51, bonusAmount: 746.99, bonusPercent: 12.48, otherAmount: 435.48, otherPercent: 10.42 },
    { site: 'BD+XK', q1Amount: 4025.30, q1Percent: 9.56, q2Amount: 4759.03, q2Percent: 12.65, agentAmount: 1982.10, agentPercent: 12.94, sportsAmount: 1529.91, sportsPercent: 12.60, bonusAmount: 510.79, bonusPercent: 8.54, otherAmount: 736.22, otherPercent: 17.61 },
    { site: '综合', q1Amount: 4143.10, q1Percent: 9.84, q2Amount: 4812.89, q2Percent: 12.79, agentAmount: 2141.37, agentPercent: 13.98, sportsAmount: 1634.99, sportsPercent: 13.46, bonusAmount: 394.37, bonusPercent: 6.59, otherAmount: 642.17, otherPercent: 15.36 }
];
  // 总计占比行的数据（用于最大值最小值高亮）
  const totalPercentages = [40.71, 32.28, 15.90, 11.11]; // 排除100%的数字

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">2.2 站点类型占比</h1>
      </div>

      {/* 第三季度防范金额（各大类站点占比） */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div>
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th rowSpan="2" className="p-3 text-center font-semibold border-r border-blue-500 w-20">分类</th>
                <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">第1季度总计(万)</th>
                <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">第2季度总计(万)</th>
                <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">代理类</th>
                <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">体育类</th>
                <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">红利类</th>
                <th colSpan="2" className="p-3 text-center font-semibold">其他类</th>
              </tr>
              <tr>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-xs">金额</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-xs">占比</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-xs">金额</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-xs">占比</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-xs">金额</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-xs">占比</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-xs">金额</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-xs">占比</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-xs">金额</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-xs">占比</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-xs">金额</th>
                <th className="p-2 text-center font-semibold text-xs">占比</th>
              </tr>
            </thead>
            <tbody>
              {siteData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-2 font-semibold text-center text-sm">{row.site}</td>
                  <td className="p-2 text-center text-xs">{row.q1Amount}</td>
                  <td className="p-2 text-center text-xs">{row.q1Percent}%</td>
                  <td className="p-2 text-center text-xs">{row.q2Amount}</td>
                  <td className="p-2 text-center text-xs">{row.q2Percent}%</td>
                  <td className="p-2 text-center text-xs">{row.agentAmount}</td>
                  <td className="p-2 text-center text-xs">{row.agentPercent}%</td>
                  <td className="p-2 text-center text-xs">{row.sportsAmount}</td>
                  <td className="p-2 text-center text-xs">{row.sportsPercent}%</td>
                  <td className="p-2 text-center text-xs">{row.bonusAmount}</td>
                  <td className="p-2 text-center text-xs">{row.bonusPercent}%</td>
                  <td className="p-2 text-center text-xs">{row.otherAmount}</td>
                  <td className="p-2 text-center text-xs">{row.otherPercent}%</td>
                </tr>
              ))}
             
              <tr className="bg-blue-50 border-b border-gray-100">
                <td className="p-2 font-semibold text-center text-sm">小计占比</td>
                <td className="p-2 text-center font-semibold text-xs"></td>
                <td className="p-2 text-center font-semibold text-xs"></td>
                <td className="p-2 text-center font-semibold text-xs"></td>
                <td className="p-2 text-center font-semibold text-xs"></td>
                <td className="p-2 text-center font-semibold text-xs">15314.92</td>
                <td className="p-2 text-center font-semibold text-xs">100%</td>
                <td className="p-2 text-center font-semibold text-xs">12145.41</td>
                <td className="p-2 text-center font-semibold text-xs">100%</td>
                <td className="p-2 text-center font-semibold text-xs">5983.16</td>
                <td className="p-2 text-center font-semibold text-xs">100%</td>
                <td className="p-2 text-center font-semibold text-xs">4180.28</td>
                <td className="p-2 text-center font-semibold text-xs">100%</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="p-2 font-semibold text-center text-sm">总计占比</td>
                <td className="p-2 text-center font-semibold text-xs" colSpan="1">42097.60</td>
                                <td className="p-2 text-center font-semibold text-xs" colSpan="1">100%</td>
                <td className="p-2 text-center font-semibold text-xs" colSpan="1">37623.77</td>

                <td className="p-2 text-center font-semibold text-xs" colSpan="1">100%</td>
                <td className={`p-2 text-center font-semibold text-xs ${getMinMaxClass(40.71, totalPercentages)}`} colSpan="2">40.71%</td>
                <td className={`p-2 text-center font-semibold text-xs ${getMinMaxClass(32.28, totalPercentages)}`} colSpan="2">32.28%</td>
                <td className={`p-2 text-center font-semibold text-xs ${getMinMaxClass(15.90, totalPercentages)}`} colSpan="2">15.90%</td>
                <td className={`p-2 text-center font-semibold text-xs ${getMinMaxClass(11.11, totalPercentages)}`} colSpan="2">11.11%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 数据解读 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">数据解读</h2>
        </div>
        <div className="bg-white rounded-lg p-6">
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span>整体拦截金额对比上季度减少12%，多数站点对比上季度呈现减少，Y4及Y6+9为主共计减少4249w</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span>代理，体育，红利为本季度主要拦截里面部分，占比分别达到40%，32%，16%。总计约占整体88%占比</span>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-blue-700">
                <div className="font-semibold mb-2">数据说明：</div>
                <div>其他类：涵盖（其余场馆刷子等其他套利）</div>
              </div>
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