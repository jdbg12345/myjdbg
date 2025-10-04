import React from 'react';
import { BarChart3 } from 'lucide-react';

export const SportsInterceptionCategory = () => {
  // 体育拦截分类数据
  const categoryData = [
    { category: '1', q1Percent: 7, q1Amount: 226.5, q2Percent: 13, q2Amount: 138.1, q3Percent: 10, q3Amount: 189.1, waterPercent: 13, waterAmount: 6.6, batchPercent: 3, batchAmount: 0.7, sellPercent: 0, sellAmount: 5.4, otherWaterPercent: 11, otherWaterAmount: null },
    { category: '2', q1Percent: 7, q1Amount: 76.4, q2Percent: 4, q2Amount: 49.2, q3Percent: 4, q3Amount: 15.4, waterPercent: 1, waterAmount: 18.3, batchPercent: 8, batchAmount: 9.6, sellPercent: 5, sellAmount: 2.2, otherWaterPercent: 5, otherWaterAmount: null },
    { category: '3', q1Percent: 5, q1Amount: 182.4, q2Percent: 10, q2Amount: 84.7, q3Percent: 6, q3Amount: 43.1, waterPercent: 3, waterAmount: 6.2, batchPercent: 3, batchAmount: 0.2, sellPercent: 0, sellAmount: 2.9, otherWaterPercent: 6, otherWaterAmount: null },
    { category: '4', q1Percent: 33, q1Amount: 534.4, q2Percent: 30, q2Amount: 513.4, q3Percent: 39, q3Amount: 683.7, waterPercent: 48, waterAmount: 63.3, batchPercent: 27, batchAmount: 38.8, sellPercent: 21, sellAmount: 13.2, otherWaterPercent: 27, otherWaterAmount: null },
    { category: '5', q1Percent: 1, q1Amount: 22.9, q2Percent: 1, q2Amount: 17.3, q3Percent: 1, q3Amount: 9.7, waterPercent: 1, waterAmount: 2.1, batchPercent: 1, batchAmount: 0.0, sellPercent: 0, sellAmount: 1.0, otherWaterPercent: 2, otherWaterAmount: null },
    { category: '7', q1Percent: 8, q1Amount: 180.8, q2Percent: 10, q2Amount: 146.0, q3Percent: 11, q3Amount: 116.9, waterPercent: 8, waterAmount: 2.2, batchPercent: 1, batchAmount: 4.8, sellPercent: 3, sellAmount: 2.3, otherWaterPercent: 5, otherWaterAmount: null },
    { category: '8', q1Percent: 4, q1Amount: 66.2, q2Percent: 4, q2Amount: 90.5, q3Percent: 7, q3Amount: 46.6, waterPercent: 3, waterAmount: 3.8, batchPercent: 2, batchAmount: 0.4, sellPercent: 0, sellAmount: 0.2, otherWaterPercent: 0, otherWaterAmount: null },
    { category: '6+9', q1Percent: 12, q1Amount: 157.1, q2Percent: 9, q2Amount: 130.4, q3Percent: 10, q3Amount: 96.6, waterPercent: 7, waterAmount: 41.5, batchPercent: 18, batchAmount: 6.6, sellPercent: 4, sellAmount: 2.0, otherWaterPercent: 4, otherWaterAmount: null },
    { category: 'BD+XK', q1Percent: 10, q1Amount: 163.4, q2Percent: 9, q2Amount: 86.8, q3Percent: 7, q3Amount: 163.4, waterPercent: 12, waterAmount: 45.6, batchPercent: 19, batchAmount: 114.0, sellPercent: 61, sellAmount: 7.5, otherWaterPercent: 16, otherWaterAmount: null },
    { category: '综合', q1Percent: 12, q1Amount: 162.6, q2Percent: 9, q2Amount: 62.5, q3Percent: 5, q3Amount: 52.3, waterPercent: 4, waterAmount: 44.6, batchPercent: 19, batchAmount: 10.4, sellPercent: 6, sellAmount: 11.4, otherWaterPercent: 24, otherWaterAmount: null }
  ];

  // 小计数据
  const subtotalData = {
    q1Total: 1772.7,
    q2Total: 1318.9,
    q3Total: 1416.6,
    waterTotal: 234.2,
    batchTotal: 185.6,
    sellTotal: 48.0
  };

  // 总计占比
  const totalPercentData = {
    waterPercent: 64.22,
    shippingPercent: 12.75,
    batchPercent: 9.48,
    fastConsultPercent: 10.18,
    chickenAgreementPercent: 1.68,
    otherShippingPercent: 1.33,
    sandwichPercent: 0.34
  };

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.6 体育拦截分类明细</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">体育整体杀率明细</span>
        </div>
      </div>

      {/* 体育拦截分类表格 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden text-xs">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th rowSpan="4" className="p-2 text-center font-semibold border-r border-blue-500">站点</th>
                <th colSpan="6" className="p-2 text-center font-semibold border-r border-blue-500">各季度汇总(万)</th>
                <th colSpan="14" className="p-2 text-center font-semibold">第3季度明细</th>
              </tr>
              <tr>
                <th colSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">第1季度</th>
                <th colSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">第2季度</th>
                <th colSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">第3季度</th>
                <th colSpan="8" className="p-2 text-center font-semibold border-r border-blue-500">体育打水</th>
                <th colSpan="4" className="p-2 text-center font-semibold border-r border-blue-500">出货</th>
                <th rowSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">快咨询</th>
                <th rowSpan="2" className="p-2 text-center font-semibold">其他</th>
              </tr>
              <tr>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">(万)</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">(万)</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">(万)</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">批量打水</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">打负、租卖号</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">其他打水</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">野鸡、协议球</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">其他出货</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">夹盘、卡进球</th>
              </tr>
              <tr>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">金额</th>
                <th className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-1 text-center font-semibold text-[10px]">金额</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td className="p-2 font-semibold text-center">{row.category}</td>
                  <td className="p-2 text-center">{row.q1Percent}%</td>
                  <td className="p-2 text-center">{row.q1Amount}</td>
                  <td className="p-2 text-center">{row.q2Percent}%</td>
                  <td className="p-2 text-center">{row.q2Amount}</td>
                  <td className="p-2 text-center">{row.q3Percent}%</td>
                  <td className="p-2 text-center">{row.q3Amount}</td>
                  <td className="p-2 text-center">{row.waterPercent}%</td>
                  <td className="p-2 text-center">{row.waterAmount}</td>
                  <td className="p-2 text-center">{row.batchPercent}%</td>
                  <td className="p-2 text-center">{row.batchAmount}</td>
                  <td className="p-2 text-center">{row.sellPercent}%</td>
                  <td className="p-2 text-center">{row.sellAmount}</td>
                  <td className="p-2 text-center">{row.otherWaterPercent}%</td>
                  <td className="p-2 text-center">-</td>
                  <td className="p-2 text-center">-</td>
                  <td className="p-2 text-center">-</td>
                  <td className="p-2 text-center">-</td>
                  <td className="p-2 text-center">-</td>
                  <td className="p-2 text-center">-</td>
                  <td className="p-2 text-center">-</td>
                </tr>
              ))}

              {/* 小计行 */}
              <tr className="bg-blue-50 border-b border-gray-100">
                <td className="p-2 font-semibold text-center">小计</td>
                <td className="p-2 text-center font-semibold" colSpan="1">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.q1Total}</td>
                <td className="p-2 text-center font-semibold" colSpan="1">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.q2Total}</td>
                <td className="p-2 text-center font-semibold" colSpan="1">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.q3Total}</td>
                <td className="p-2 text-center font-semibold" colSpan="1">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.waterTotal}</td>
                <td className="p-2 text-center font-semibold" colSpan="1">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.batchTotal}</td>
                <td className="p-2 text-center font-semibold" colSpan="1">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.sellTotal}</td>
                <td className="p-2 text-center font-semibold" colSpan="1">-</td>
                <td className="p-2 text-center font-semibold" colSpan="6">-</td>
              </tr>

              {/* 总计占比行 */}
              <tr className="bg-gray-200">
                <td className="p-2 font-semibold text-center">总计占比</td>
                <td className="p-2 text-center font-semibold" colSpan="6">-</td>
                <td className="p-2 text-center font-semibold text-red-400" colSpan="2">{totalPercentData.waterPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.batchPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.shippingPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.fastConsultPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.chickenAgreementPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.otherShippingPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.sandwichPercent}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 数据解读 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">数据解读</h2>
        </div>
        <div className="bg-white rounded-lg p-6">
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span>体育打水打水为主要占比，达到<span className="font-semibold text-blue-600">64%</span>，其次为排查批量关联打水占比为<span className="font-semibold text-blue-600">12%</span>，快资讯出货以及租卖号打水占比分别为<span className="font-semibold text-blue-600">10%</span>。</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span>站点分布主要为<span className="font-semibold text-blue-600">4，9，XK</span>为主要，占比合计约占整体<span className="font-semibold text-blue-600">55%</span>。</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold">套利手段：</span>主要通过盘口水位优势进行打水及红利套利，同时部分职业玩家集中在小联赛进行打水。</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold">发现方式：</span>主要通过提款审核、批量团体，账户关联分析、提前预警排查、三方反馈和预警群等渠道识别玩家套利行为。</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold">处置措施：</span>针对问题玩家，依据风险程度采取降水、延迟处理、单笔警告、扣款或终止合作等手段。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
