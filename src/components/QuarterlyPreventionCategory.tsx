import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';
import { formatNumber } from '../utils/formatters';
import { DataInsights } from './shared/DataInsights';

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
    { site: '1', q1Amount: 3188, q1Percent: 7.57, q2Amount: 3569, q2Percent: 9.49, q3Amount: 3611, q3Percent: 9.14, agentAmount: 1400, agentPercent: 9.35, sportsAmount: 1163, sportsPercent: 8.36, bonusAmount: 721, bonusPercent: 12.20, otherAmount: 327, otherPercent: 6.93 },
    { site: '2', q1Amount: 3016, q1Percent: 7.16, q2Amount: 3013, q2Percent: 8.01, q3Amount: 2090, q3Percent: 5.29, agentAmount: 660, agentPercent: 4.41, sportsAmount: 777, sportsPercent: 5.59, bonusAmount: 418, bonusPercent: 7.07, otherAmount: 235, otherPercent: 4.99 },
    { site: '3', q1Amount: 3889, q1Percent: 9.24, q2Amount: 3018, q2Percent: 8.02, q3Amount: 3127, q3Percent: 7.91, agentAmount: 1477, agentPercent: 9.86, sportsAmount: 801, sportsPercent: 5.76, bonusAmount: 569, bonusPercent: 9.63, otherAmount: 279, otherPercent: 5.93 },
    { site: '4', q1Amount: 12398, q1Percent: 29.45, q2Amount: 9857, q2Percent: 26.20, q3Amount: 10853, q3Percent: 27.47, agentAmount: 3167, agentPercent: 21.15, sportsAmount: 4831, sportsPercent: 34.73, bonusAmount: 1076, bonusPercent: 18.20, otherAmount: 1779, otherPercent: 37.74 },
    { site: '5', q1Amount: 317, q1Percent: 0.75, q2Amount: 155, q2Percent: 0.41, q3Amount: 256, q3Percent: 0.65, agentAmount: 38, agentPercent: 0.25, sportsAmount: 140, sportsPercent: 1.01, bonusAmount: 27, bonusPercent: 0.46, otherAmount: 50, otherPercent: 1.06 },
    { site: '7', q1Amount: 3731, q1Percent: 8.86, q2Amount: 3179, q2Percent: 8.45, q3Amount: 3198, q3Percent: 8.09, agentAmount: 962, agentPercent: 6.42, sportsAmount: 1194, sportsPercent: 8.58, bonusAmount: 676, bonusPercent: 11.44, otherAmount: 366, otherPercent: 7.77 },
    { site: '8', q1Amount: 868, q1Percent: 2.06, q2Amount: 450, q2Percent: 1.20, q3Amount: 3282, q3Percent: 8.31, agentAmount: 2325, agentPercent: 15.53, sportsAmount: 586, sportsPercent: 4.22, bonusAmount: 226, bonusPercent: 3.83, otherAmount: 145, otherPercent: 3.07 },
    { site: '6+9', q1Amount: 6521, q1Percent: 15.49, q2Amount: 4812, q2Percent: 12.79, q3Amount: 4574, q3Percent: 11.58, agentAmount: 1335, agentPercent: 8.92, sportsAmount: 1474, sportsPercent: 10.60, bonusAmount: 1286, bonusPercent: 21.76, otherAmount: 478, otherPercent: 10.14 },
    { site: 'B+X', q1Amount: 4025, q1Percent: 9.56, q2Amount: 4759, q2Percent: 12.65, q3Amount: 4083, q3Percent: 10.33, agentAmount: 1767, agentPercent: 11.80, sportsAmount: 1513, sportsPercent: 10.88, bonusAmount: 377, bonusPercent: 6.37, otherAmount: 426, otherPercent: 9.04 },
    { site: '综合', q1Amount: 4143, q1Percent: 9.84, q2Amount: 4813, q2Percent: 12.79, q3Amount: 4432, q3Percent: 11.22, agentAmount: 1841, agentPercent: 12.29, sportsAmount: 1429, sportsPercent: 10.28, bonusAmount: 534, bonusPercent: 9.03, otherAmount: 629, otherPercent: 13.34 }
];
  // 总计占比行的数据（用于最大值最小值高亮）
  const totalPercentages = [37.90, 35.21, 14.96, 11.93]; // 排除100%的数字

  return (
    <div className="bg-white rounded-lg p-6 mb-4 relative">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.2 防范金类型占比</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">4明细</span>
        </div>
      </div>

      {/* 第三季度防范金额（各大类站点占比） */}
      <div className="bg-white rounded-lg p-4 mb-3 border border-blue-200">
        <div>
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th rowSpan="3" className="p-2 text-center font-semibold border-r border-blue-500 w-16">站点</th>
                <th colSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">第1季度总计</th>
                <th colSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">第2季度总计</th>
                <th colSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">第3季度总计</th>
                <th colSpan="8" className="p-2 text-center font-semibold">第3季度分类明细</th>
              </tr>
              <tr>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-xs">(万)</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-xs">(万)</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-xs">(万)</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-xs">DL类</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-xs">体育类</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-xs">红利类</th>
                <th colSpan="2" className="p-1 text-center font-semibold text-xs">其他类</th>
              </tr>
              <tr>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-xs">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-xs">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-xs">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-xs">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-xs">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-xs">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-xs">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-xs">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-xs">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-xs">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-xs">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-xs">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-xs">金额</th>
                <th className="p-1 text-center font-semibold text-xs">占比</th>
              </tr>
            </thead>
            <tbody>
              {siteData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="p-1 font-bold text-center text-sm border-r border-gray-200">{row.site}</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700 border-r border-gray-200">{row.q1Amount}</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700 border-r border-gray-200">{row.q1Percent}%</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700 border-r border-gray-200">{row.q2Amount}</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700 border-r border-gray-200">{row.q2Percent}%</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700 border-r border-gray-200">{row.q3Amount}</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700 border-r border-gray-200">{row.q3Percent}%</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700 border-r border-gray-200">{row.agentAmount}</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700 border-r border-gray-200">{row.agentPercent}%</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700 border-r border-gray-200">{row.sportsAmount}</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700 border-r border-gray-200">{row.sportsPercent}%</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700 border-r border-gray-200">{row.bonusAmount}</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700 border-r border-gray-200">{row.bonusPercent}%</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700 border-r border-gray-200">{row.otherAmount}</td>
                  <td className="p-1 text-center text-xs font-bold text-gray-700">{row.otherPercent}%</td>
                </tr>
              ))}
             
              <tr className="bg-blue-50 border-b border-gray-100">
                <td className="p-1 font-bold text-center text-sm border-r border-gray-200">小计</td>
                <td className="p-1 text-center font-bold text-xs border-r border-gray-200" colSpan="2"></td>
                <td className="p-1 text-center font-bold text-xs border-r border-gray-200" colSpan="2"></td>
                <td className="p-1 text-center font-bold text-xs border-r border-gray-200" colSpan="2"></td>
                <td className="p-1 text-center font-bold text-xs text-gray-700 border-r border-gray-200">14972</td>
                <td className="p-1 text-center font-bold text-xs text-gray-700 border-r border-gray-200">100%</td>
                <td className="p-1 text-center font-bold text-xs text-gray-700 border-r border-gray-200">13909</td>
                <td className="p-1 text-center font-bold text-xs text-gray-700 border-r border-gray-200">100%</td>
                <td className="p-1 text-center font-bold text-xs text-gray-700 border-r border-gray-200">5910</td>
                <td className="p-1 text-center font-bold text-xs text-gray-700 border-r border-gray-200">100%</td>
                <td className="p-1 text-center font-bold text-xs text-gray-700 border-r border-gray-200">4714</td>
                <td className="p-1 text-center font-bold text-xs text-gray-700">100%</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="p-1 font-bold text-center text-sm border-r border-gray-200">总计</td>
                <td className="p-1 text-center font-bold text-xs text-gray-700 border-r border-gray-200">42098</td>
                <td className="p-1 text-center font-bold text-xs text-gray-700 border-r border-gray-200">100%</td>
                <td className="p-1 text-center font-bold text-xs text-gray-700 border-r border-gray-200">37624</td>
                <td className="p-1 text-center font-bold text-xs text-gray-700 border-r border-gray-200">100%</td>
                <td className="p-1 text-center font-bold text-xs text-gray-700 border-r border-gray-200">39505</td>
                <td className="p-1 text-center font-bold text-xs text-gray-700 border-r border-gray-200">100%</td>
                <td className={`p-2 text-center font-semibold text-xs ${getMinMaxClass(37.90, totalPercentages)}`} colSpan="2">37.90%</td>
                <td className={`p-2 text-center font-semibold text-xs ${getMinMaxClass(35.21, totalPercentages)}`} colSpan="2">35.21%</td>
                <td className={`p-2 text-center font-semibold text-xs ${getMinMaxClass(14.96, totalPercentages)}`} colSpan="2">14.96%</td>
                <td className={`p-2 text-center font-semibold text-xs ${getMinMaxClass(11.93, totalPercentages)}`} colSpan="2">11.93%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 数据解读 */}
      <DataInsights
        insights={[
          {
            text: '整体拦截金额对比上季度<span class="font-semibold text-green-600">增加5%</span>，较多站点对比上季度呈现增加，站<span class="font-semibold text-blue-600">4</span>及<span class="font-semibold text-blue-600">8</span>增加明显共计<span class="font-semibold text-green-600">3,829万</span>'
          },
          {
            text: '<span class="font-semibold text-blue-600">DL、体育</span>为本季度主要拦截里面部分，占比分别约达到<span class="font-semibold text-blue-600">38%</span>、<span class="font-semibold text-blue-600">35%</span>。总计约占整体<span class="font-semibold text-blue-600">73%</span>占比'
          },
          {
            text: '<span class="font-semibold">红利拦截：</span>以场馆首存及投注豪礼为主，总计占红利分类占比<span class="font-semibold text-blue-600">64%</span>'
          },
          {
            text: '<span class="font-semibold">其他拦截：</span>以电竞彩票棋牌刷子为主，总计占其他分类占比<span class="font-semibold text-blue-600">78%</span>'
          },
          {
            text: '<span class="font-semibold">站点方面：</span><span class="font-semibold text-blue-600">4、9、X</span>等站点占比三个季度保持整体较高占比，<span class="font-semibold text-green-600">8站在本季度数据提升明显</span>，原因为发展数据提升，同步拦截提升，其中DL拦截金额占比提升较大'
          }
        ]}
      />
      
      {/* Footer */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">Q3 REPORT</div>
      </div>
    </div>
  );
};