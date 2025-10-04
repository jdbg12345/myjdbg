import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export const PandaSportsKillRate = () => {
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

  // 熊猫收益分类数据
  const pandaRevenueData = [
    { category: '主流联赛', amount: 900.06, profit: 62.51, killRate: 52.54, avgBet: 1.52, rate: 2.89, pandaRatio: 60.36, totalRatio: 61.84 },
    { category: '高抽水野鸡联赛', amount: 596.53, profit: 31.23, killRate: 25.23, avgBet: 0.80, rate: 3.17, pandaRatio: 28.99, totalRatio: 21.76 },
    { category: 'VS-PANDA、虚拟联赛', amount: 199.88, profit: 5.21, killRate: 4.00, avgBet: 0.26, rate: 6.39, pandaRatio: 4.59, totalRatio: 8.51 },
    { category: '串关', amount: 287.69, profit: 5.60, killRate: 5.28, avgBet: 0.50, rate: 9.54, pandaRatio: 6.06, totalRatio: 7.89 }
  ];

  // 体育场馆数据
  const sportsVenueData = [
    { venue: '冠军', totalAmount: 1537.33, killRate: 56.81, rate: 3.70, killRatePercent: 0.19 },
    { venue: '熊猫', totalAmount: 87.05, killRate: 8.80, rate: 10.11, killRatePercent: -0.47 },
    { venue: 'IM', totalAmount: 257.03, killRate: 6.03, rate: 2.34, killRatePercent: 0.18 }
  ];

  // 合计行的数据（用于最大值最小值高亮）
  const pandaTotalValues = [1984.16, 104.55, 87.05, 3.08, 3.54]; // 排除100%的数字

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.7 熊猫体育杀率</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">B系体育杀率明细</span>
        </div>
      </div>

      {/* 熊猫体育杀率分析 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        

        <div className="grid grid-cols-1 lg:grid-2 gap-8 mb-8">
          {/* 左侧熊猫收益分类表格 */}
          <div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-3 text-center font-semibold">熊猫联赛分类</th>
                    <th className="p-3 text-center font-semibold">注单数量(万)</th>
                    <th className="p-3 text-center font-semibold">投注额（个）</th>
                    <th className="p-3 text-center font-semibold">有效投注额(个)</th>
                    <th className="p-3 text-center font-semibold">公司输赢（个）</th>
                    <th className="p-3 text-center font-semibold">杀率</th>
                    <th className="p-3 text-center font-semibold">熊猫流水占比</th>
                    <th className="p-3 text-center font-semibold">冠名流水占比</th>
                  </tr>
                </thead>
                <tbody>
                  {pandaRevenueData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="p-3 text-center font-semibold">{row.category}</td>
                      <td className="p-3 text-center">{row.amount}</td>
                      <td className="p-3 text-center">{row.profit}</td>
                      <td className="p-3 text-center">{row.killRate}</td>
                      <td className="p-3 text-center">{row.avgBet}</td>
                      <td className="p-3 text-center">{row.rate}%</td>
                      <td className="p-3 text-center">{row.pandaRatio}%</td>
                      <td className="p-3 text-center">{row.totalRatio}%</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="p-3 text-center font-semibold">合计</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(1984.16, pandaTotalValues)}`}>1,984.16</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(104.55, pandaTotalValues)}`}>104.55</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(87.05, pandaTotalValues)}`}>87.05</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(3.08, pandaTotalValues)}`}>3.08</td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(3.54, pandaTotalValues)}`}>3.54%</td>
                    <td className="p-3 text-center font-semibold">100.00%</td>
                    <td className="p-3 text-center font-semibold">100.00%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-3 text-center font-semibold">体育场馆</th>
                    <th className="p-3 text-center font-semibold">总流水（个）</th>
                    <th className="p-3 text-center font-semibold">异常流水（个）</th>
                    <th className="p-3 text-center font-semibold">异常占比</th>
                    <th className="p-3 text-center font-semibold">杀率</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-center font-semibold">冠名</td>
                    <td className="p-3 text-center">1,537.33</td>
                    <td className="p-3 text-center">56.81</td>
                    <td className="p-3 text-center">3.70%</td>
                    <td className="p-3 text-center">0.19%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-center font-semibold">熊猫</td>
                    <td className="p-3 text-center">87.05</td>
                    <td className="p-3 text-center">8.80</td>
                    <td className="p-3 text-center">10.11%</td>
                    <td className="p-3 text-center text-red-600 font-semibold">-0.47%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-center font-semibold">IM</td>
                    <td className="p-3 text-center">257.03</td>
                    <td className="p-3 text-center">6.03</td>
                    <td className="p-3 text-center">2.34%</td>
                    <td className="p-3 text-center">0.18%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 右侧体育场馆表格 */}
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
              <span className="text-red-600 font-semibold">熊猫杀率近半年只有3.74%，比整体低1.725%</span>
            </div>
        

            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span>熊猫体育杀率低主要问题来自打水账号，异常流水占总流水的10.11%</span>
            </div>
               <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span>打水账号先打冠名场馆，被降水干预后打熊猫，主要问题在没投注熊猫前系统无法识别账号并对其同步降水</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span>VS-PANDA、串关等优质流水只占10.66%低于冠名16.40%</span>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="text-sm text-green-700">
                <div className="font-semibold mb-2">✓ 执行方案</div>
                <div className="space-y-1">
                  <div>✓ 对已在冠名降水的打水账号进行追踪，投注熊猫后立刻进行降水干预</div>
                  <div>✓ 对恶意更换场馆打水账号进行扣盈利处理</div>
                  <div>✓ 经过5月份开始对打水账号的严控，熊猫6月份杀率开始有所好转，整体杀率4.93%</div>
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