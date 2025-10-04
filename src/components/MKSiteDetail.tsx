import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';
import { DataInsights } from './shared/DataInsights';

export const MKSiteDetail = () => {
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

  // 8站点明细数据
  const mkDetailData = [
    { type: 'DL类', zkAmount: 0.00, zkPercent: 0.00, dlAmount: 2321.48, dlPercent: 81.66, tgAmount: 3.79, tgPercent: 3.33 },
    { type: '体育类', zkAmount: 169.02, zkPercent: 51.87, dlAmount: 344.81, dlPercent: 12.13, tgAmount: 72.49, tgPercent: 63.79 },
    { type: '红利类', zkAmount: 101.08, zkPercent: 31.02, dlAmount: 111.77, dlPercent: 3.93, tgAmount: 13.33, tgPercent: 11.73 },
    { type: '其他类', zkAmount: 55.76, zkPercent: 17.11, dlAmount: 64.83, dlPercent: 2.28, tgAmount: 24.04, tgPercent: 21.15 }
  ];

  // 累计占比行的数据（用于最大值最小值高亮）
  const totalPercentages = [9.93, 86.61, 3.46];

  return (
    <div className="bg-white rounded-lg p-6 mb-4 pb-16 relative">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.6 防范金突出站点-8</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">DL活动防犯</span>
        </div>
      </div>

      {/* 8站点明细 */}
      <div className="bg-white rounded-lg p-3 mb-3 border border-blue-200">

        <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th rowSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">站点</th>
                    <th rowSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">类型</th>
                    <th colSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">ZK</th>
                    <th colSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">DL</th>
                    <th colSpan="2" className="p-2 text-center font-semibold">TG | GZ</th>
                  </tr>
                  <tr>
                    <th className="p-1 text-center font-semibold border-r border-blue-500">金额</th>
                    <th className="p-1 text-center font-semibold border-r border-blue-500">占比</th>
                    <th className="p-1 text-center font-semibold border-r border-blue-500">金额</th>
                    <th className="p-1 text-center font-semibold border-r border-blue-500">占比</th>
                    <th className="p-1 text-center font-semibold border-r border-blue-500">金额</th>
                    <th className="p-1 text-center font-semibold">占比</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td rowSpan="5" className="p-2 font-bold text-center bg-blue-50 border-r border-gray-200">8</td>
                  </tr>
                  {mkDetailData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="p-1 font-bold text-center border-r border-gray-200">{row.type}</td>
                      <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.zkAmount}</td>
                      <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.zkPercent}%</td>
                      <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.dlAmount}</td>
                      <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.dlPercent}%</td>
                      <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.tgAmount}</td>
                      <td className="p-1 text-center font-bold text-gray-700">{row.tgPercent}%</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="p-1 font-bold text-center border-r border-gray-200">小计 | 占比</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">3282.39</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">325.86</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">100%</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">2842.89</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">100%</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">113.64</td>
                    <td className="p-1 text-center font-bold text-gray-700">100%</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-1 font-bold text-center border-r border-gray-200">总计 | 占比</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">100%</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200"></td>
                    <td className={`p-1 text-center font-bold text-gray-700 border-r border-gray-200 ${getMinMaxClass(9.93, totalPercentages)}`}>9.93%</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200"></td>
                    <td className={`p-1 text-center font-bold text-gray-700 border-r border-gray-200 ${getMinMaxClass(86.61, totalPercentages)}`}>86.61%</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200"></td>
                    <td className={`p-1 text-center font-bold text-gray-700 ${getMinMaxClass(3.46, totalPercentages)}`}>3.46%</td>
                  </tr>
                </tbody>
              </table>
            </div>
      </div>

      {/* 数据解读 */}
      <div className="bg-white rounded-lg p-3 mb-3 border border-blue-200">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">数据解读</h2>
        </div>

        <div className="p-2">
          <div className="space-y-1.5 text-gray-700">

            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-blue-600">ZK用户</span>拦截占比<span className="font-semibold text-blue-600">9%</span>，主要组成部分为体育套利占比<span className="font-semibold text-blue-600">51%</span></span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-red-600">DL用户（含DL）拦截占比达到最高为86%</span>，主要为DL拦截占<span className="font-semibold text-red-600">81%</span></span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-blue-600">TG用户</span>拦截占比<span className="font-semibold text-blue-600">3%</span>，主要为体育套利占比<span className="font-semibold text-blue-600">63%</span></span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold">问题：</span><span className="font-semibold text-red-600">DL拦截占比整体较高</span>（占比：基础<span className="font-semibold text-blue-600">3%</span>，额外<span className="font-semibold text-blue-600">6%</span>，人头费<span className="font-semibold text-blue-600">74%</span>）；<span className="font-semibold">结论：</span>新DL额外YJ及人头费拦截占主要组成部分，<span className="font-semibold text-green-600">8月调整后，人头费当月占比下降至42%</span></span>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="text-sm text-blue-700">
                <div className="font-semibold mb-2">数据说明：</div>
                <div><span className="font-semibold">DL类：</span>YJ拦截（为"DL本身"YJ&DL人头费套利），红利拦截（为"DL线下会员"活动套利）</div>
                <div className="mt-2"><span className="font-semibold">TG类：</span>DL类（为额度代存套利）</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">Q3 REPORT</div>
      </div>
    </div>
  );
};
