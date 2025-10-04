import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';
import { DataInsights } from './shared/DataInsights';

export const Y6Y9SiteDetail = () => {
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

  // 6+9站点明细数据
  const y6y9DetailData = [
    { type: 'DL类', zkAmount: 0.00, zkPercent: 0.00, dlAmount: 1319.42, dlPercent: 57.82, tgAmount: 15.90, tgPercent: 2.33 },
    { type: '体育类', zkAmount: 451.56, zkPercent: 30.46, dlAmount: 553.62, dlPercent: 24.26, tgAmount: 469.04, tgPercent: 68.86 },
    { type: '红利类', zkAmount: 923.61, zkPercent: 62.30, dlAmount: 262.08, dlPercent: 11.48, tgAmount: 100.62, tgPercent: 14.77 },
    { type: '其他类', zkAmount: 151.63, zkPercent: 7.24, dlAmount: 195.10, dlPercent: 6.44, tgAmount: 131.11, tgPercent: 14.04 }
  ];

  // 累计占比行的数据（用于最大值最小值高亮）
  const totalPercentages = [33.35, 51.33, 15.32];

  return (
    <div className="bg-white rounded-lg p-6 mb-4 pb-16 relative">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.5 防范金突出站点-6+9明细</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">8明细</span>
        </div>
      </div>

      {/* 6+9站点明细 */}
      <div className="bg-white rounded-lg p-3 mb-3 border border-blue-200">

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
                    <td rowSpan="5" className="p-4 font-semibold text-center bg-blue-50">6+9</td>
                  </tr>
                  {y6y9DetailData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="p-3 font-semibold text-center">{row.type}</td>
                      <td className="p-2 text-center font-semibold border-r border-gray-200">{row.zkAmount}</td>
                      <td className="p-2 text-center font-semibold border-r border-gray-200">{row.zkPercent}%</td>
                      <td className="p-2 text-center font-semibold border-r border-gray-200">{row.dlAmount}</td>
                      <td className="p-2 text-center font-semibold border-r border-gray-200">{row.dlPercent}%</td>
                      <td className="p-2 text-center font-semibold border-r border-gray-200">{row.tgAmount}</td>
                      <td className="p-2 text-center font-semibold border-r border-gray-200">{row.tgPercent}%</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="p-3 font-semibold text-center">小计 | 占比</td>
                    <td className="p-3 text-center font-semibold">4573.69</td>
                    <td className="p-3 text-center font-semibold">1526.81</td>
                    <td className="p-3 text-center font-semibold">100%</td>
                    <td className="p-3 text-center font-semibold">2330.22</td>
                    <td className="p-3 text-center font-semibold">100%</td>
                    <td className="p-3 text-center font-semibold">716.67</td>
                    <td className="p-3 text-center font-semibold">100%</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-3 font-semibold text-center">总计 | 占比</td>
                    <td className="p-3 text-center font-semibold">100%</td>
                    <td className="p-3 text-center font-semibold"></td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(33.35, totalPercentages)}`}>33.35%</td>
                    <td className="p-3 text-center font-semibold"></td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(51.33, totalPercentages)}`}>51.33%</td>
                    <td className="p-3 text-center font-semibold"></td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(15.32, totalPercentages)}`}>15.32%</td>
                  </tr>
                </tbody>
              </table>
            </div>
      </div>

      {/* 数据解读 */}
      <div className="bg-white rounded-lg p-3 mb-3 mt-3 border border-blue-200">
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
              <span><span className="font-semibold text-blue-600">ZK用户</span>拦截占比<span className="font-semibold text-blue-600">33%</span>，主要组成部分为红利套利占比<span className="font-semibold text-blue-600">62%</span></span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-red-600">DL用户（含DL）拦截占比达到最高为51%</span>，主要为YJ拦截占<span className="font-semibold text-red-600">57%</span></span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-blue-600">TG用户</span>拦截占比<span className="font-semibold text-blue-600">15%</span>，主要为体育套利占比<span className="font-semibold text-blue-600">68%</span></span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold">问题：</span><span className="font-semibold text-red-600">DL拦截占比整体较高</span>（占比：基础<span className="font-semibold text-blue-600">19%</span>，额外<span className="font-semibold text-blue-600">27%</span>，人头费<span className="font-semibold text-blue-600">34%</span>）；<span className="font-semibold">结论：</span>新DL额外YJ及人头费拦截占主要组成部分，<span className="font-semibold text-green-600">8月调整后，人头费当月占比降至28%</span></span>
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