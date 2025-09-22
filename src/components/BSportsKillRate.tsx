import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export const BSportsKillRate = () => {
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

  // 游戏类型数据
  const gameTypeData = [
    { gameType: '足球', yWater: 51.33, yKill: 4.54, bWater: 53.98, bKill: 3.92, bwWater: 44.34, bwKill: 4.74 },
    { gameType: '篮球', yWater: 36.34, yKill: 5.48, bWater: 36.93, bKill: 4.69, bwWater: 44.60, bwKill: 4.27 },
    { gameType: '串关', yWater: 8.04, yKill: 11.50, bWater: 6.56, bKill: 10.68, bwWater: 7.49, bwKill: 11.11 },
    { gameType: '其他体育游戏', yWater: 4.29, yKill: 7.13, bWater: 2.53, bKill: 7.88, bwWater: 3.58, bwKill: 7.90 }
  ];

  // 足球玩法数据
  const footballPlayData = [
    { playType: '全场大小', yWater: 33.77, yKill: 4.14, bWater: 33.27, bKill: 3.29, bwWater: 31.97, bwKill: 4.69 },
    { playType: '其他玩法', yWater: 29.79, yKill: 6.21, bWater: 28.50, bKill: 5.76, bwWater: 33.55, bwKill: 5.62 },
    { playType: '全场让球', yWater: 21.24, yKill: 1.88, bWater: 23.25, bKill: 1.56, bwWater: 18.71, bwKill: 1.86 },
    { playType: '上半场大小', yWater: 10.51, yKill: 5.19, bWater: 10.43, bKill: 4.85, bwWater: 11.22, bwKill: 5.43 },
    { playType: '上半场让球', yWater: 1.73, yKill: 2.13, bWater: 1.75, bKill: 2.40, bwWater: 1.47, bwKill: 3.82 },
    { playType: '全场独赢', yWater: 1.53, yKill: 8.28, bWater: 1.45, bKill: 7.95, bwWater: 1.59, bwKill: 9.41 },
    { playType: '全场波胆', yWater: 1.20, yKill: 13.13, bWater: 1.10, bKill: 11.37, bwWater: 1.22, bwKill: 13.51 },
    { playType: '上半场独赢', yWater: 0.27, yKill: 11.04, bWater: 0.24, bKill: 12.18, bwWater: 0.27, bwKill: 9.24 }
  ];

  // 足球全场让球杀率月份数据
  const footballMonthlyData = [
    { month: '2025 1', yKill: 1.51, bKill: 0.42, bwKill: -0.54, total: 1.26 },
    { month: '2025 2', yKill: 2.65, bKill: 2.46, bwKill: 2.85, total: 2.62 },
    { month: '2025 3', yKill: 1.86, bKill: 1.57, bwKill: 2.64, total: 1.84 },
    { month: '2025 4', yKill: 1.84, bKill: 1.41, bwKill: 2.04, total: 1.77 },
    { month: '2025 5', yKill: 1.55, bKill: 1.80, bwKill: 2.08, total: 1.62 }
  ];

  // 计算各列的最大值最小值
  const gameYWaters = gameTypeData.map(row => row.yWater);
  const gameYKills = gameTypeData.map(row => row.yKill);
  const gameBWaters = gameTypeData.map(row => row.bWater);
  const gameBKills = gameTypeData.map(row => row.bKill);
  const gameBwWaters = gameTypeData.map(row => row.bwWater);
  const gameBwKills = gameTypeData.map(row => row.bwKill);

  const footballYWaters = footballPlayData.map(row => row.yWater);
  const footballYKills = footballPlayData.map(row => row.yKill);
  const footballBWaters = footballPlayData.map(row => row.bWater);
  const footballBKills = footballPlayData.map(row => row.bKill);
  const footballBwWaters = footballPlayData.map(row => row.bwWater);
  const footballBwKills = footballPlayData.map(row => row.bwKill);

  const monthlyYKills = footballMonthlyData.map(row => row.yKill);
  const monthlyBKills = footballMonthlyData.map(row => row.bKill);
  const monthlyBwKills = footballMonthlyData.map(row => row.bwKill);
  const monthlyTotals = footballMonthlyData.map(row => row.total);

  // 合计行的数据（用于最大值最小值高亮）
  const gameTypeTotalRates = [5.55, 4.75, 5.12]; // 排除100%的数字
  const footballPlayTotalRates = [4.54, 3.92, 4.74]; // 排除100%的数字
  const footballMonthlyTotalRates = [1.88, 1.56, 1.86, 1.82];

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">2.8 B系体育杀率明细</h1>
      </div>

      {/* B系体育杀率分析 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
       

        <div className="grid grid-cols-1 gap-8 mb-8">
          {/* 左侧游戏类型表格 */}
          <div>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th rowSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">游戏类型</th>
                    <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">Y系</th>
                    <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">B系</th>
                    <th colSpan="2" className="p-3 text-center font-semibold">BW</th>
                  </tr>
                  <tr>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">流水占比</th>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">杀率</th>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">流水占比</th>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">杀率</th>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">流水占比</th>
                    <th className="p-3 text-center font-semibold">杀率</th>
                  </tr>
                </thead>
                <tbody>
                  {gameTypeData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-3 text-center font-semibold">{row.gameType}</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.yWater, gameYWaters)}`}>{row.yWater}%</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.yKill, gameYKills)}`}>{row.yKill}%</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.bWater, gameBWaters)}`}>{row.bWater}%</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.bKill, gameBKills)}`}>{row.bKill}%</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.bwWater, gameBwWaters)}`}>{row.bwWater}%</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.bwKill, gameBwKills)}`}>{row.bwKill}%</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="p-3 text-center font-semibold">合计</td>
                    <td className="p-3 text-center font-semibold">100.00%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.55, gameTypeTotalRates)}`}>5.55%</td>
                    <td className="p-3 text-center font-semibold">100.00%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(4.75, gameTypeTotalRates)}`}>4.75%</td>
                    <td className="p-3 text-center font-semibold">100.00%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(5.12, gameTypeTotalRates)}`}>5.12%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th rowSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">足球玩法</th>
                    <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">Y系</th>
                    <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">B系</th>
                    <th colSpan="2" className="p-3 text-center font-semibold">BW</th>
                  </tr>
                  <tr>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">流水占比</th>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">杀率</th>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">流水占比</th>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">杀率</th>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">流水占比</th>
                    <th className="p-3 text-center font-semibold">杀率</th>
                  </tr>
                </thead>
                <tbody>
                  {footballPlayData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-3 text-center font-semibold">{row.playType}</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.yWater, footballYWaters)}`}>{row.yWater}%</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.yKill, footballYKills)}`}>{row.yKill}%</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.bWater, footballBWaters)}`}>{row.bWater}%</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.bKill, footballBKills)}`}>{row.bKill}%</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.bwWater, footballBwWaters)}`}>{row.bwWater}%</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.bwKill, footballBwKills)}`}>{row.bwKill}%</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="p-3 text-center font-semibold">合计</td>
                    <td className="p-3 text-center font-semibold">100.00%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(4.54, footballPlayTotalRates)}`}>4.54%</td>
                    <td className="p-3 text-center font-semibold">100.00%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(3.92, footballPlayTotalRates)}`}>3.92%</td>
                    <td className="p-3 text-center font-semibold">100.00%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(4.74, footballPlayTotalRates)}`}>4.74%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-3 text-center font-semibold">足球全场让球杀率月份</th>
                    <th className="p-3 text-center font-semibold">Y系</th>
                    <th className="p-3 text-center font-semibold">B系</th>
                    <th className="p-3 text-center font-semibold">BW</th>
                    <th className="p-3 text-center font-semibold">合计</th>
                  </tr>
                </thead>
                <tbody>
                  {footballMonthlyData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-3 text-center font-semibold">{row.month}</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.yKill, monthlyYKills)}`}>{row.yKill}%</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.bKill, monthlyBKills)}`}>{row.bKill}%</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.bwKill, monthlyBwKills)}`}>{row.bwKill}%</td>
                      <td className={`p-3 text-center ${getMinMaxClass(row.total, monthlyTotals)}`}>{row.total}%</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="p-3 text-center font-semibold">合计</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(1.88, footballMonthlyTotalRates)}`}>1.88%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(1.56, footballMonthlyTotalRates)}`}>1.56%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(1.86, footballMonthlyTotalRates)}`}>1.86%</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(1.82, footballMonthlyTotalRates)}`}>1.82%</td>
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
              <span className="text-red-600 font-semibold">B系长期杀率偏低，低于整体0.66%</span>
            </div>

            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span>B系足球流水占比53.98%比Y系和BW较高一些，反之串关和其他高抽水体育游戏是略低</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span>B系足球全场让球流水占比23.25%比Y系和BW较高一些，杀率也偏低</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span>整体全场让球杀率表现长期低于期望值，是打水账号首要套利的其中一个选项</span>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="text-sm text-green-700">
                <div className="font-semibold mb-2">✓ 优化方案</div>
                <div className="space-y-1">
                  <div>✓ B端操盘加强对主要赔率盘口的精确掌控，积极排查打水账号并给予风控及时反馈</div>
                  <div>✓ 增加对打水账号的风控力度，对可疑与竞品赔率对冲的新号、租号、卖号进行扣盈利、红利处理</div>
                </div>
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