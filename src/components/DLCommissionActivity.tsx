import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export const DLCommissionActivity = () => {
  // DL佣金活动数据
  const activityData = [
    { month: '4月', baseAmount: 1138.7, basePercent: 20, extraAmount: 1517.6, extraPercent: 21, headAmount: 1633.3, headPercent: 16, firstAmount: 1277.9, firstPercent: 43, flowAmount: 395.6, flowPercent: 27, oldAmount: null, oldPercent: 0, otherAmount: 23.8, otherPercent: 22 },
    { month: '5月', baseAmount: 1380.9, basePercent: 24, extraAmount: 1459.3, extraPercent: 20, headAmount: 1376.4, headPercent: 13, firstAmount: 495.2, firstPercent: 17, flowAmount: 407.0, flowPercent: 28, oldAmount: null, oldPercent: 0, otherAmount: 25.1, otherPercent: 23 },
    { month: '6月', baseAmount: 828.4, basePercent: 14, extraAmount: 1005.1, extraPercent: 14, headAmount: 1543.6, headPercent: 15, firstAmount: 414.6, firstPercent: 14, flowAmount: 397.8, flowPercent: 28, oldAmount: null, oldPercent: 0, otherAmount: 16.6, otherPercent: 15 },
    { month: '7月', baseAmount: 721.9, basePercent: 12, extraAmount: 1141.1, extraPercent: 16, headAmount: 1946.3, headPercent: 19, firstAmount: 366.8, firstPercent: 12, flowAmount: 90.6, flowPercent: 6, oldAmount: 965.2, oldPercent: 44, otherAmount: 7.3, otherPercent: 7 },
    { month: '8月', baseAmount: 753.8, basePercent: 13, extraAmount: 1072.8, extraPercent: 15, headAmount: 3053.4, headPercent: 30, firstAmount: 134.1, firstPercent: 4, flowAmount: 110.8, flowPercent: 8, oldAmount: 1147.0, oldPercent: 52, otherAmount: 23.8, otherPercent: 22 },
    { month: '9月', baseAmount: 965.3, basePercent: 17, extraAmount: 1065.4, extraPercent: 15, headAmount: 665.7, headPercent: 7, firstAmount: 307.9, firstPercent: 10, flowAmount: 39.8, flowPercent: 3, oldAmount: 100.8, oldPercent: 5, otherAmount: 10.4, otherPercent: 10 }
  ];

  // 小计数据
  const subtotalData = {
    baseTotal: 5788.9,
    extraTotal: 7261.4,
    headTotal: 10218.7,
    firstTotal: 2996.4,
    flowTotal: 1441.6,
    oldTotal: 2213.0,
    otherTotal: 107.0
  };

  // 总计占比
  const totalPercentData = {
    total: 30027.1,
    basePercent: 19,
    extraPercent: 24.2,
    headPercent: 34.0,
    firstPercent: 10.0,
    flowPercent: 4.8,
    oldPercent: 7.4,
    otherPercent: 0.4
  };

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.7 DL佣金活动防犯</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">体育拦截分类明细</span>
        </div>
      </div>

      {/* DL佣金活动表格 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden text-xs">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th rowSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">时间</th>
                <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">基础</th>
                <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">额外</th>
                <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">人头费</th>
                <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">首复存</th>
                <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">流水返利</th>
                <th colSpan="2" className="p-3 text-center font-semibold border-r border-blue-500">老代理流水返利</th>
                <th colSpan="2" className="p-3 text-center font-semibold">其他</th>
              </tr>
              <tr>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-[10px]">拦截金额</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-[10px]">拦截金额</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-[10px]">拦截金额</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-[10px]">拦截金额</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-[10px]">拦截金额</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-[10px]">拦截金额</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th className="p-2 text-center font-semibold border-r border-blue-500 text-[10px]">拦截金额</th>
                <th className="p-2 text-center font-semibold text-[10px]">占比</th>
              </tr>
            </thead>
            <tbody>
              {activityData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td className="p-2 font-semibold text-center">{row.month}</td>
                  <td className="p-2 text-center">{row.baseAmount}</td>
                  <td className="p-2 text-center">{row.basePercent}%</td>
                  <td className="p-2 text-center">{row.extraAmount}</td>
                  <td className="p-2 text-center">{row.extraPercent}%</td>
                  <td className="p-2 text-center">{row.headAmount}</td>
                  <td className="p-2 text-center">{row.headPercent}%</td>
                  <td className="p-2 text-center">{row.firstAmount}</td>
                  <td className="p-2 text-center">{row.firstPercent}%</td>
                  <td className="p-2 text-center">{row.flowAmount}</td>
                  <td className="p-2 text-center">{row.flowPercent}%</td>
                  <td className="p-2 text-center">{row.oldAmount || '-'}</td>
                  <td className="p-2 text-center">{row.oldPercent}%</td>
                  <td className="p-2 text-center">{row.otherAmount}</td>
                  <td className="p-2 text-center">{row.otherPercent}%</td>
                </tr>
              ))}

              {/* 小计行 */}
              <tr className="bg-blue-50 border-b border-gray-100">
                <td className="p-2 font-semibold text-center">小计|占比</td>
                <td className="p-2 text-center font-semibold">{subtotalData.baseTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.extraTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.headTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.firstTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.flowTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.oldTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.otherTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
              </tr>

              {/* 总计占比行 */}
              <tr className="bg-gray-200">
                <td className="p-2 font-semibold text-center">总计|占比</td>
                <td className="p-2 text-center font-semibold" colSpan="1">{totalPercentData.total}</td>
                <td className="p-2 text-center font-semibold">{totalPercentData.basePercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.extraPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.headPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.firstPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.flowPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.oldPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.otherPercent}%</td>
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
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-blue-600">基础佣金</span>以及<span className="font-semibold text-blue-600">额外佣金</span>拦截，两者总计占比达整体<span className="font-semibold text-blue-600">43.2%</span>，主要为扶持降低派发拦截。</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span>代理活动拦截主要以<span className="font-semibold text-blue-600">人头费</span>以及<span className="font-semibold text-blue-600">流水返利</span>拦截金为主，两者总计占比占整体<span className="font-semibold text-blue-600">46.2%</span>。</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-blue-600">老代理流水返利：</span>因世俱杯<span className="font-semibold text-blue-600">6月</span>上线，刺激代理流水发展项目，<span className="font-semibold text-blue-600">8月</span>赛事结束后，活动门槛调整。<span className="font-semibold text-green-600">拦截同步下降</span>。</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-blue-600">人头费：</span>因<span className="font-semibold text-blue-600">6月</span>进行整改上调，<span className="font-semibold text-blue-600">8月</span>优化更改活动参与有效新增定义，所以拦截金额在<span className="font-semibold text-blue-600">6/7/8月</span>呈现由上至下趋势。由于新增定义整改，<span className="font-semibold text-green-600">后续季度此拦截会持续减少</span>。</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-blue-600">首复存：</span>为会员活动，整体拦截占比约占<span className="font-semibold text-blue-600">10%</span>。</span>
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
