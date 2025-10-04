import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export const Y4SiteDetail = () => {
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

  // Y4站点明细数据
  const y4DetailData = [
    { type: '代理类', zkAmount: 0.00, zkPercent: 0.00, dlAmount: 3159.66, dlPercent: 53.23, tgAmount: 7.26, tgPercent: 0.60 },
    { type: '体育类', zkAmount: 2217.25, zkPercent: 72.67, dlAmount: 1855.88, dlPercent: 31.26, tgAmount: 757.93, tgPercent: 62.97 },
    { type: '红利类', zkAmount: 381.54, zkPercent: 12.51, dlAmount: 439.90, dlPercent: 7.41, tgAmount: 254.49, tgPercent: 21.14 },
    { type: '其他类', zkAmount: 853.88, zkPercent: 14.82, dlAmount: 608.41, dlPercent: 8.10, tgAmount: 316.81, tgPercent: 15.29 }
  ];

  // 累计占比行的数据（用于最大值最小值高亮）
  const totalPercentages = [31.81, 55.87, 12.31];

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.3 防范金突出站点-Y4明细</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">BD+XK明细</span>
        </div>
      </div>

      {/* Y4站点明细 */}
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
                    <td rowSpan="5" className="p-4 font-semibold text-center bg-blue-50">Y4</td>
                  </tr>
                  {y4DetailData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="p-3 font-semibold text-center">{row.type}</td>
                      <td className="p-3 text-center">{row.zkAmount}</td>
                      <td className="p-3 text-center">{row.zkPercent}%</td>
                      <td className="p-3 text-center">{row.dlAmount}</td>
                      <td className="p-3 text-center">{row.dlPercent}%</td>
                      <td className="p-3 text-center">{row.tgAmount}</td>
                      <td className="p-3 text-center">{row.tgPercent}%</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="p-3 font-semibold text-center">小计 | 占比</td>
                    <td className="p-3 text-center font-semibold">10853.00</td>
                    <td className="p-3 text-center font-semibold">3452.66</td>
                    <td className="p-3 text-center font-semibold">100%</td>
                    <td className="p-3 text-center font-semibold">6063.85</td>
                    <td className="p-3 text-center font-semibold">100%</td>
                    <td className="p-3 text-center font-semibold">1336.48</td>
                    <td className="p-3 text-center font-semibold">100%</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-3 font-semibold text-center">总计 | 占比</td>
                    <td className="p-3 text-center font-semibold">100%</td>
                    <td className="p-3 text-center font-semibold"></td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(31.81, totalPercentages)}`}>31.81%</td>
                    <td className="p-3 text-center font-semibold"></td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(55.87, totalPercentages)}`}>55.87%</td>
                    <td className="p-3 text-center font-semibold"></td>
                    <td className={`p-3 text-center font-semibold ${getMinMaxClass(12.31, totalPercentages)}`}>12.31%</td>
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
              <span>ZK用户拦截占比31.81%，主要组成部分为体育套利占比72%</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>DL用户（含代理）拦截占比达到最高为55%，主要为佣金拦截占53%</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>TG用户拦截占比12%，主要为体育套利占比62%</span>
            </div>
             <div className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span> DL拦截占比整体较高
详细占比：基础17%，额外24%，人头费23%
结论：新代理额外佣金及人头费拦截占主要组成部分，8月调整后，人头费当月占比降至16%。
</span>
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