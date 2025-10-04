import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export const DBSportsKillRate = () => {
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

  // DB杀率月份数据
  const dbMonthlyData = [
    { month: '2025 1', dbKill: 5.31, imKill: 5.74 },
    { month: '2025 2', dbKill: 5.64, imKill: 5.99 },
    { month: '2025 3', dbKill: 5.37, imKill: 6.06 },
    { month: '2025 4', dbKill: 5.38, imKill: 5.16 },
    { month: '2025 5', dbKill: 5.39, imKill: 5.87 },
    { month: '2025 6', dbKill: 5.76, imKill: 5.73 }
  ];

  // 高流水虚拟杀率数据
  const highVolumeVirtualData = [
    { category: 'VS-PANDA、IM虚拟', dbRatio: 8.30, dbKill: 6.80, imRatio: 33.49, imKill: 6.44 }
  ];

  // 计算各列的最大值最小值
  const dbKills = dbMonthlyData.map(row => row.dbKill);
  const imKills = dbMonthlyData.map(row => row.imKill);

  const dbRatios = highVolumeVirtualData.map(row => row.dbRatio);
  const dbVirtualKills = highVolumeVirtualData.map(row => row.dbKill);
  const imRatios = highVolumeVirtualData.map(row => row.imRatio);
  const imVirtualKills = highVolumeVirtualData.map(row => row.imKill);

  // 合计行的数据（用于最大值最小值高亮）
  const dbTotalRates = [5.46, 5.76];

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.9 DB体育杀率明细</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">飞投数据</span>
        </div>
      </div>

      {/* DB体育杀率分析 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        

        <div className="space-y-8 mb-8">
          {/* DB杀率月份表格 */}
          <div className="w-full">
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4 text-center font-semibold">月份</th>
                    <th className="p-4 text-center font-semibold">DB杀率</th>
                    <th className="p-4 text-center font-semibold">IM杀率</th>
                  </tr>
                </thead>
                <tbody>
                  {dbMonthlyData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="p-4 text-center font-semibold">{row.month}</td>
                      <td className="p-4 text-center">{row.dbKill}%</td>
                      <td className="p-4 text-center">{row.imKill}%</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="p-4 text-center font-semibold">合计</td>
                    <td className={`p-4 text-center font-semibold ${getMinMaxClass(5.46, dbTotalRates)}`}>5.46%</td>
                    <td className={`p-4 text-center font-semibold ${getMinMaxClass(5.76, dbTotalRates)}`}>5.76%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 高流水虚拟杀率表格 */}
          <div className="w-full">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4 text-center font-semibold">高抽水虚拟联赛</th>
                    <th className="p-4 text-center font-semibold">DB流水占比</th>
                    <th className="p-4 text-center font-semibold">DB杀率</th>
                    <th className="p-4 text-center font-semibold">IM流水占比</th>
                    <th className="p-4 text-center font-semibold">IM杀率</th>
                  </tr>
                </thead>
                <tbody>
                  {highVolumeVirtualData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="p-4 text-center font-semibold">{row.category}</td>
                      <td className="p-4 text-center">{row.dbRatio}%</td>
                      <td className="p-4 text-center">{row.dbKill}%</td>
                      <td className="p-4 text-center">{row.imRatio}%</td>
                      <td className="p-4 text-center">{row.imKill}%</td>
                    </tr>
                  ))}
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
              <span className="text-red-600 font-semibold">IM体育整体杀率5.76%，高于于DB整体0.29%左右</span>
            </div>
      

            <div className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>DB整体体育流水大于IM，投注于DB的客户群较多样化，分散于各等级的联赛</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>投注IM的玩家多数注重于高抽水的虚拟联赛，占总流水的33.49%，直接拉高了IM整体体育杀率</span>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="text-sm text-green-700">
                <div className="font-semibold mb-2">✓ 优化方案</div>
                <div className="space-y-1">
                  <div>✓ B端操盘加强对主要赔率盘口让球和大小的精确掌控，积极排查打水账号并给予风控及时反馈</div>
                </div>
              </div>
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