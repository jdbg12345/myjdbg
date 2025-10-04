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
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.11 Y/B/BW对比分析</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">FK工作情况</span>
        </div>
      </div>

      {/* 1. 主要球类Y/B/BW占比 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
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
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
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
              <div>● B系的拦截占比（17.50%）高于流水占比（15.04%），说明B系风控力度相对较强</div>
            </div>
          </div>
        </div>
      </div>

      {/* 综合数据解读 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">综合数据解读</h2>
        </div>

        <div className="bg-white rounded-lg p-6">
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold">球类分布特征：</span>足球作为全球第一运动，在各系统中均占主导地位（61-67%），篮球作为第二大球类稳定在28-30%区间，两大球类合计占比接近90%。</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold">系统差异分析：</span>B系足球占比最高（66.62%），显示B系用户对足球的偏好度更强；BW的篮球占比略高于其他系统，可能与用户群体特征相关。</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold">熊猫平台特征：</span>Y系在熊猫体育中一家独大，占据超过<span className="font-semibold text-blue-600">80%</span>的流水份额，说明Y系是熊猫体育的核心用户群体。</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold">风控效果评估：</span>B系拦截占比（17.50%）高于流水占比（15.04%），反映出B系风控识别能力较强，能够有效拦截套利行为。</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold">运营建议：</span>建议针对不同系统的球类偏好制定差异化运营策略，重点关注Y系用户体验优化；加强BW渠道推广，提升其在熊猫平台的占比。</span>
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
