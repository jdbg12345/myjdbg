import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export const BDXKSiteDetail = () => {
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

  // BD+XK站点明细数据
  const bdxkDetailData = [
    { type: '代理类', zkAmount: 0.00, zkPercent: 0.00, dlAmount: 1741.59, dlPercent: 65.36, tgAmount: 25.35, tgPercent: 8.71 },
    { type: '体育类', zkAmount: 723.10, zkPercent: 73.78, dlAmount: 638.37, dlPercent: 24.15, tgAmount: 151.42, tgPercent: 52.05 },
    { type: '红利类', zkAmount: 139.69, zkPercent: 14.16, dlAmount: 164.50, dlPercent: 6.29, tgAmount: 72.32, tgPercent: 26.14 },
    { type: '其他类', zkAmount: 199.31, zkPercent: 12.07, dlAmount: 164.95, dlPercent: 4.20, tgAmount: 61.90, tgPercent: 13.10 }
  ];

  // 累计占比行的数据（用于最大值最小值高亮）
  const totalPercentages = [25.44, 67.26, 7.30];

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.4 BD+XK明细</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">Y6+Y9明细</span>
        </div>
      </div>

      {/* BD+XK站点明细 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
       

        <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th rowSpan="2" className="p-4 text-center font-semibold border-r border-blue-500">站点</th>
                    <th rowSpan="2" className="p-4 text-center font-semibold border-r border-blue-500">类型</th>
                    <th colSpan="2" className="p-4 text-center font-semibold border-r border-blue-500">ZK</th>
                    <th colSpan="2" className="p-4 text-center font-semibold border-r border-blue-500">DL</th>
                    <th colSpan="2" className="p-4 text-center font-semibold">TG | GZ</th>
                  </tr>
                  <tr>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">金额</th>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">占比</th>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">金额</th>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">占比</th>
                    <th className="p-3 text-center font-semibold border-r border-blue-500">金额</th>
                    <th className="p-3 text-center font-semibold">占比</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td rowSpan="5" className="p-4 font-semibold text-center bg-blue-50">BD+XK</td>
                  </tr>
                  {bdxkDetailData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="p-3 font-semibold text-center">{row.type}</td>
                      <td className="p-3 text-center">{row.zkAmount}</td>
                      <td className="p-3 text-center">{row.zkPercent}%</td>
                      <td className="p-3 text-center">{row.dlAmount}</td>
                      <td className="p-3 text-center">{row.dlPercent}%</td>
                      <td className="p-3 text-center">{row.tgAmount}</td>
                      <td className="p-3 text-center">-</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="p-3 font-semibold text-center">小计 | 占比</td>
                    <td className="p-3 text-center font-semibold">4082.50</td>
                    <td className="p-3 text-center font-semibold">1062.10</td>
                    <td className="p-3 text-center font-semibold">100%</td>
                    <td className="p-3 text-center font-semibold">2709.42</td>
                    <td className="p-3 text-center font-semibold">100%</td>
                    <td className="p-3 text-center font-semibold">310.99</td>
                    <td className="p-3 text-center font-semibold">100%</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-3 font-semibold text-center">总计 | 占比</td>
                    <td className="p-3 text-center font-semibold">100%</td>
                    <td className="p-3 text-center font-semibold"></td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(25.44, totalPercentages)}`}>25.44%</td>
                    <td className="p-3 text-center font-semibold"></td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(67.26, totalPercentages)}`}>67.26%</td>
                    <td className="p-3 text-center font-semibold"></td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(7.30, totalPercentages)}`}>7.30%</td>
                  </tr>
                </tbody>
              </table>
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
              <span className="text-blue-600 mr-2">•</span>
              <span>ZK用户拦截占比27%，主要组成部分为体育套利占比55%</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span> DL用户（含代理）拦截占比达到最高为64%，主要为佣金拦截占63%</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>TG用户拦截占比15%，主要为体育套利占比47%</span>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-blue-700">
                <div className="font-semibold mb-2">数据说明：</div>
                <div>DL类：</div>
                <div>佣金拦截（为“代理本身”佣金&代理人头费套利）</div>
                <div>红利拦截（为“代理线下会员”活动套利）</div>
                <div className="mt-2">TG类：</div>
                <div>代理类（为额度代存套利）</div>
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