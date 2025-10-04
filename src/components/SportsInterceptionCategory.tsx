import React from 'react';
import { BarChart3 } from 'lucide-react';

export const SportsInterceptionCategory = () => {
  // 体育拦截分类数据
  const categoryData = [
    { site: '1', sportAmount: 596.9, sportPercent: 7, batchAmount: 226.5, batchPercent: 13, negativeAmount: 138.1, negativePercent: 10, otherWaterAmount: 189.1, otherWaterPercent: 13, shipmentAmount: 6.6, shipmentPercent: 3, chickenAmount: 0.7, chickenPercent: 0, fastConsultAmount: 5.4, fastConsultPercent: 11, sandwichAmount: null, sandwichPercent: null, otherAmount: null, otherPercent: null },
    { site: '2', sportAmount: 606.3, sportPercent: 7, batchAmount: 76.4, batchPercent: 4, negativeAmount: 49.2, negativePercent: 4, otherWaterAmount: 15.4, otherWaterPercent: 1, shipmentAmount: 18.3, shipmentPercent: 8, chickenAmount: 9.6, chickenPercent: 5, fastConsultAmount: 2.2, fastConsultPercent: 5, sandwichAmount: null, sandwichPercent: null, otherAmount: null, otherPercent: null },
    { site: '3', sportAmount: 481.3, sportPercent: 5, batchAmount: 182.4, batchPercent: 10, negativeAmount: 84.7, negativePercent: 6, otherWaterAmount: 43.1, otherWaterPercent: 3, shipmentAmount: 6.2, shipmentPercent: 3, chickenAmount: 0.2, chickenPercent: 0, fastConsultAmount: 2.9, fastConsultPercent: 6, sandwichAmount: null, sandwichPercent: null, otherAmount: null, otherPercent: null },
    { site: '4', sportAmount: 2984.2, sportPercent: 33, batchAmount: 534.4, batchPercent: 30, negativeAmount: 513.4, negativePercent: 39, otherWaterAmount: 683.7, otherWaterPercent: 48, shipmentAmount: 63.3, shipmentPercent: 27, chickenAmount: 38.8, chickenPercent: 21, fastConsultAmount: 13.2, fastConsultPercent: 27, sandwichAmount: null, sandwichPercent: null, otherAmount: null, otherPercent: null },
    { site: '5', sportAmount: 87.4, sportPercent: 1, batchAmount: 22.9, batchPercent: 1, negativeAmount: 17.3, negativePercent: 1, otherWaterAmount: 9.7, otherWaterPercent: 1, shipmentAmount: 2.1, shipmentPercent: 1, chickenAmount: 0.0, chickenPercent: 0, fastConsultAmount: 1.0, fastConsultPercent: 2, sandwichAmount: null, sandwichPercent: null, otherAmount: null, otherPercent: null },
    { site: '7', sportAmount: 740.6, sportPercent: 8, batchAmount: 180.8, batchPercent: 10, negativeAmount: 146.0, negativePercent: 11, otherWaterAmount: 116.9, otherWaterPercent: 8, shipmentAmount: 2.2, shipmentPercent: 1, chickenAmount: 4.8, chickenPercent: 3, fastConsultAmount: 2.3, fastConsultPercent: 5, sandwichAmount: null, sandwichPercent: null, otherAmount: null, otherPercent: null },
    { site: '8', sportAmount: 378.6, sportPercent: 4, batchAmount: 66.2, batchPercent: 4, negativeAmount: 90.5, negativePercent: 7, otherWaterAmount: 46.6, otherWaterPercent: 3, shipmentAmount: 3.8, shipmentPercent: 2, chickenAmount: 0.4, chickenPercent: 0, fastConsultAmount: 0.2, fastConsultPercent: 0, sandwichAmount: null, sandwichPercent: null, otherAmount: null, otherPercent: null },
    { site: '6+9', sportAmount: 1040.0, sportPercent: 12, batchAmount: 157.1, batchPercent: 9, negativeAmount: 130.4, negativePercent: 10, otherWaterAmount: 96.6, otherWaterPercent: 7, shipmentAmount: 41.5, shipmentPercent: 18, chickenAmount: 6.6, chickenPercent: 4, fastConsultAmount: 2.0, fastConsultPercent: 4, sandwichAmount: null, sandwichPercent: null, otherAmount: null, otherPercent: null },
    { site: 'BD+XK', sportAmount: 932.2, sportPercent: 10, batchAmount: 163.4, batchPercent: 9, negativeAmount: 86.8, negativePercent: 7, otherWaterAmount: 163.4, otherWaterPercent: 12, shipmentAmount: 45.6, shipmentPercent: 19, chickenAmount: 114.0, chickenPercent: 61, fastConsultAmount: 7.5, fastConsultPercent: 16, sandwichAmount: null, sandwichPercent: null, otherAmount: null, otherPercent: null },
    { site: '综合', sportAmount: 1085.3, sportPercent: 12, batchAmount: 162.6, batchPercent: 9, negativeAmount: 62.5, negativePercent: 5, otherWaterAmount: 52.3, otherWaterPercent: 4, shipmentAmount: 44.6, shipmentPercent: 19, chickenAmount: 10.4, chickenPercent: 6, fastConsultAmount: 11.4, fastConsultPercent: 24, sandwichAmount: null, sandwichPercent: null, otherAmount: null, otherPercent: null }
  ];

  // 小计数据
  const subtotalData = {
    sportTotal: 8932.9,
    batchTotal: 1772.7,
    negativeTotal: 1318.9,
    otherWaterTotal: 1416.6,
    shipmentTotal: 234.2,
    chickenTotal: 185.6,
    fastConsultTotal: 48.0
  };

  // 总计占比
  const totalPercentData = {
    sportPercent: 64.22,
    batchPercent: 12.75,
    negativePercent: 9.48,
    otherWaterPercent: 10.18,
    shipmentPercent: 1.68,
    chickenPercent: 1.33,
    fastConsultPercent: 0.34
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
                <th rowSpan="4" className="p-2 text-center font-semibold border-r border-blue-500 align-middle">站点</th>
                <th colSpan="8" className="p-2 text-center font-semibold border-r border-blue-500">打水分类</th>
                <th colSpan="4" className="p-2 text-center font-semibold border-r border-blue-500">出货分类</th>
                <th colSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">快咨询</th>
                <th rowSpan="4" className="p-2 text-center font-semibold align-middle">其他</th>
              </tr>
              <tr>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">体育打水</th>
                <th colSpan="6" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">打水分类</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">出货</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">出货分类</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">快咨询</th>
              </tr>
              <tr>
                <th rowSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">金额</th>
                <th rowSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">批量打水</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">打负、租卖号、其他打水</th>
                <th rowSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">金额</th>
                <th rowSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">占比</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">野鸡、协议球</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">夹盘、卡进球</th>
              </tr>
              <tr>
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
              </tr>
            </thead>
            <tbody>
              {categoryData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td className="p-2 font-semibold text-center">{row.site}</td>
                  <td className="p-2 text-center">{row.sportAmount}</td>
                  <td className="p-2 text-center">{row.sportPercent}%</td>
                  <td className="p-2 text-center">{row.batchAmount}</td>
                  <td className="p-2 text-center">{row.batchPercent}%</td>
                  <td className="p-2 text-center">{row.negativeAmount}</td>
                  <td className="p-2 text-center">{row.negativePercent}%</td>
                  <td className="p-2 text-center">{row.otherWaterAmount}</td>
                  <td className="p-2 text-center">{row.otherWaterPercent}%</td>
                  <td className="p-2 text-center">{row.shipmentAmount}</td>
                  <td className="p-2 text-center">{row.shipmentPercent}%</td>
                  <td className="p-2 text-center">{row.chickenAmount}</td>
                  <td className="p-2 text-center">{row.chickenPercent}%</td>
                  <td className="p-2 text-center">{row.fastConsultAmount}</td>
                  <td className="p-2 text-center">{row.fastConsultPercent}%</td>
                  <td className="p-2 text-center">-</td>
                </tr>
              ))}

              {/* 小计行 */}
              <tr className="bg-blue-50 border-b border-gray-100">
                <td className="p-2 font-semibold text-center">小计|占比</td>
                <td className="p-2 text-center font-semibold">{subtotalData.sportTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.batchTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.negativeTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.otherWaterTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.shipmentTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.chickenTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.fastConsultTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">-</td>
              </tr>

              {/* 总计占比行 */}
              <tr className="bg-gray-200">
                <td className="p-2 font-semibold text-center">总计|占比</td>
                <td className="p-2 text-center font-semibold text-red-400" colSpan="2">{totalPercentData.sportPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.batchPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.negativePercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.otherWaterPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.shipmentPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.chickenPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="3">{totalPercentData.fastConsultPercent}%</td>
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
              <span>体育打水为主要占比，达到<span className="font-semibold text-blue-600">64.22%</span>，其次为批量打水占比为<span className="font-semibold text-blue-600">12.75%</span>，其他打水以及打负/租卖号占比分别为<span className="font-semibold text-blue-600">10.18%</span>和<span className="font-semibold text-blue-600">9.48%</span>。</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span>站点分布主要为<span className="font-semibold text-blue-600">4、6+9、综合</span>为主要，占比合计约占整体<span className="font-semibold text-blue-600">55%</span>。</span>
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
