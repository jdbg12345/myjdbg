import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export const YBBWSportsComparison = () => {
  // 主要球类Y/B/BW占比数据
  const mainSportsData = [
    { sport: '足球', yPercent: 61.84, bPercent: 66.62, bwPercent: 62.37 },
    { sport: '篮球', yPercent: 28.54, bPercent: 29.31, bwPercent: 30.23 }
  ];

  // 熊猫体育流水Y/B/BW占比数据
  const pandaFlowData = [
    { category: 'BW', flowPercent: 4.23, interceptPercent: 3.57 },
    { category: 'B系', flowPercent: 15.04, interceptPercent: 17.50 },
    { category: 'Y系', flowPercent: 80.73, interceptPercent: 78.93 }
  ];

  // 辅助函数：获取最大值最小值的样式类
  const getMinMaxClass = (value: number, values: number[]) => {
    const max = Math.max(...values);
    const min = Math.min(...values);
    if (value === max && max !== min) return 'text-red-400 font-semibold';
    if (value === min && max !== min) return 'text-green-500 font-semibold';
    return '';
  };

  return (
    <div className="bg-white rounded-lg p-10 mb-6 relative">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.11 Y/B/BW的对比分析</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">FK全局说明</span>
        </div>
      </div>

      {/* 1. 主要球类Y/B/BW占比 */}
      <div className="bg-white rounded-lg p-6 mb-6 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">主要球类Y/B/BW占比</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-center font-semibold">主要球类</th>
                <th className="p-4 text-center font-semibold">Y系</th>
                <th className="p-4 text-center font-semibold">B系</th>
                <th className="p-4 text-center font-semibold">BW</th>
              </tr>
            </thead>
            <tbody>
              {mainSportsData.map((row, index) => {
                const values = [row.yPercent, row.bPercent, row.bwPercent];
                return (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-4 text-center font-semibold">{row.sport}</td>
                    <td className={`p-4 text-center ${getMinMaxClass(row.yPercent, values)}`}>{row.yPercent}%</td>
                    <td className={`p-4 text-center ${getMinMaxClass(row.bPercent, values)}`}>{row.bPercent}%</td>
                    <td className={`p-4 text-center ${getMinMaxClass(row.bwPercent, values)}`}>{row.bwPercent}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 数据说明 */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="text-sm text-gray-700">
            <div className="font-semibold mb-2 text-blue-800">数据说明：</div>
            <div className="space-y-1">
              <div>● 足球在三个系统中占比均超过60%，为最主要的球类项目</div>
              <div>● B系足球占比最高达<span className="font-semibold text-red-400">66.62%</span>，Y系最低为<span className="font-semibold text-green-500">61.84%</span></div>
              <div>● 篮球占比相对稳定，在28-30%之间，BW篮球占比略高为<span className="font-semibold text-red-400">30.23%</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 熊猫体育流水Y/B/BW占比 */}
      <div className="bg-white rounded-lg p-6 mb-6 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">熊猫体育流水Y/B/BW占比</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-center font-semibold">站点分类</th>
                <th className="p-4 text-center font-semibold">流水</th>
                <th className="p-4 text-center font-semibold">拦截</th>
              </tr>
            </thead>
            <tbody>
              {pandaFlowData.map((row, index) => {
                const flowValues = pandaFlowData.map(r => r.flowPercent);
                const interceptValues = pandaFlowData.map(r => r.interceptPercent);
                return (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-4 text-center font-semibold">{row.category}</td>
                    <td className={`p-4 text-center ${getMinMaxClass(row.flowPercent, flowValues)}`}>{row.flowPercent}%</td>
                    <td className={`p-4 text-center ${getMinMaxClass(row.interceptPercent, interceptValues)}`}>{row.interceptPercent}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 数据说明 */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="text-sm text-gray-700">
            <div className="font-semibold mb-2 text-blue-800">数据说明：</div>
            <div className="space-y-1">
              <div>● Y系在熊猫体育中占据绝对主导地位，流水占比<span className="font-semibold text-red-400">80.73%</span>，拦截占比<span className="font-semibold text-red-400">78.93%</span></div>
              <div>● B系次之，流水占比15.04%，拦截占比17.50%，拦截占比略高于流水占比</div>
              <div>● BW占比最小，流水占比<span className="font-semibold text-green-500">4.23%</span>，拦截占比<span className="font-semibold text-green-500">3.57%</span></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">Q3 REPORT</div>
      </div>
    </div>
  );
};
