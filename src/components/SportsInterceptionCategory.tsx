import React from 'react';
import { BarChart3 } from 'lucide-react';

export const SportsInterceptionCategory = () => {
  // 体育拦截分类数据（删除其他打水列，数据顺移）
  const categoryData = [
    { site: '1', sportAmount: 596.9, sportPercent: 7, batchAmount: 226.5, batchPercent: 13, negativeAmount: 138.1, negativePercent: 10, shipmentAmount: 189.1, shipmentPercent: 13, chickenAmount: 6.6, chickenPercent: 3, sandwichAmount: 0.7, sandwichPercent: 0, otherAmount: 5.4, otherPercent: 11 },
    { site: '2', sportAmount: 606.3, sportPercent: 7, batchAmount: 76.4, batchPercent: 4, negativeAmount: 49.2, negativePercent: 4, shipmentAmount: 15.4, shipmentPercent: 1, chickenAmount: 18.3, chickenPercent: 8, sandwichAmount: 9.6, sandwichPercent: 5, otherAmount: 2.2, otherPercent: 5 },
    { site: '3', sportAmount: 481.3, sportPercent: 5, batchAmount: 182.4, batchPercent: 10, negativeAmount: 84.7, negativePercent: 6, shipmentAmount: 43.1, shipmentPercent: 3, chickenAmount: 6.2, chickenPercent: 3, sandwichAmount: 0.2, sandwichPercent: 0, otherAmount: 2.9, otherPercent: 6 },
    { site: '4', sportAmount: 2984.2, sportPercent: 33, batchAmount: 534.4, batchPercent: 30, negativeAmount: 513.4, negativePercent: 39, shipmentAmount: 683.7, shipmentPercent: 48, chickenAmount: 63.3, chickenPercent: 27, sandwichAmount: 38.8, sandwichPercent: 21, otherAmount: 13.2, otherPercent: 27 },
    { site: '5', sportAmount: 87.4, sportPercent: 1, batchAmount: 22.9, batchPercent: 1, negativeAmount: 17.3, negativePercent: 1, shipmentAmount: 9.7, shipmentPercent: 1, chickenAmount: 2.1, chickenPercent: 1, sandwichAmount: 0.0, sandwichPercent: 0, otherAmount: 1.0, otherPercent: 2 },
    { site: '7', sportAmount: 740.6, sportPercent: 8, batchAmount: 180.8, batchPercent: 10, negativeAmount: 146.0, negativePercent: 11, shipmentAmount: 116.9, shipmentPercent: 8, chickenAmount: 2.2, chickenPercent: 1, sandwichAmount: 4.8, sandwichPercent: 3, otherAmount: 2.3, otherPercent: 5 },
    { site: '8', sportAmount: 378.6, sportPercent: 4, batchAmount: 66.2, batchPercent: 4, negativeAmount: 90.5, negativePercent: 7, shipmentAmount: 46.6, shipmentPercent: 3, chickenAmount: 3.8, chickenPercent: 2, sandwichAmount: 0.4, sandwichPercent: 0, otherAmount: 0.2, otherPercent: 0 },
    { site: '6+9', sportAmount: 1040.0, sportPercent: 12, batchAmount: 157.1, batchPercent: 9, negativeAmount: 130.4, negativePercent: 10, shipmentAmount: 96.6, shipmentPercent: 7, chickenAmount: 41.5, chickenPercent: 18, sandwichAmount: 6.6, sandwichPercent: 4, otherAmount: 2.0, otherPercent: 4 },
    { site: 'BD+XK', sportAmount: 932.2, sportPercent: 10, batchAmount: 163.4, batchPercent: 9, negativeAmount: 86.8, negativePercent: 7, shipmentAmount: 163.4, shipmentPercent: 12, chickenAmount: 45.6, chickenPercent: 19, sandwichAmount: 114.0, sandwichPercent: 61, otherAmount: 7.5, otherPercent: 16 },
    { site: '综合', sportAmount: 1085.3, sportPercent: 12, batchAmount: 162.6, batchPercent: 9, negativeAmount: 62.5, negativePercent: 5, shipmentAmount: 52.3, shipmentPercent: 4, chickenAmount: 44.6, chickenPercent: 19, sandwichAmount: 10.4, sandwichPercent: 6, otherAmount: 11.4, otherPercent: 24 }
  ];

  // 小计数据
  const subtotalData = {
    sportTotal: 8932.9,
    batchTotal: 1772.7,
    negativeTotal: 1318.9,
    shipmentTotal: 1416.6,
    chickenTotal: 234.2,
    sandwichTotal: 185.6,
    otherTotal: 48.0
  };

  // 总计占比
  const totalPercentData = {
    sportPercent: 64.22,
    batchPercent: 12.75,
    negativePercent: 9.48,
    shipmentPercent: 10.18,
    chickenPercent: 1.68,
    sandwichPercent: 1.33,
    otherPercent: 0.34
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
              {/* 第1行：分类、打水分类、出货分类、快咨询、其他 */}
              <tr>
                <th rowSpan="3" className="p-2 text-center font-semibold border-r border-blue-500 align-middle">分类</th>
                <th colSpan="6" className="p-2 text-center font-semibold border-r border-blue-500">打水</th>
                <th colSpan="4" className="p-2 text-center font-semibold border-r border-blue-500">出货</th>
                <th colSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">快咨询</th>
                <th colSpan="2" className="p-2 text-center font-semibold border-r border-blue-500">其他</th>
              </tr>

              {/* 第2行：体育打水、批量打水、打负、出货、野鸡、夹盘、其他 */}
              <tr>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">体育打水</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">批量打水</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">打负、租卖号、其他打水</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">出货</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">野鸡、协议球、其他出货</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">夹盘、卡进球</th>
                <th colSpan="2" className="p-1 text-center font-semibold border-r border-blue-500 text-[10px]">其他</th>
              </tr>

              {/* 第3行：所有的金额和占比 */}
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
                  <td className="p-2 text-center">{row.shipmentAmount}</td>
                  <td className="p-2 text-center">{row.shipmentPercent}%</td>
                  <td className="p-2 text-center">{row.chickenAmount}</td>
                  <td className="p-2 text-center">{row.chickenPercent}%</td>
                  <td className="p-2 text-center">{row.sandwichAmount}</td>
                  <td className="p-2 text-center">{row.sandwichPercent}%</td>
                  <td className="p-2 text-center">{row.otherAmount}</td>
                  <td className="p-2 text-center">{row.otherPercent}%</td>
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
                <td className="p-2 text-center font-semibold">{subtotalData.shipmentTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.chickenTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.sandwichTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
                <td className="p-2 text-center font-semibold">{subtotalData.otherTotal}</td>
                <td className="p-2 text-center font-semibold">100%</td>
              </tr>

              {/* 总计占比行 */}
              <tr className="bg-gray-200">
                <td className="p-2 font-semibold text-center">总计|占比</td>
                <td className="p-2 text-center font-semibold text-red-400" colSpan="2">{totalPercentData.sportPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.batchPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.negativePercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.shipmentPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.chickenPercent}%</td>
                <td className="p-2 text-center font-semibold" colSpan="2">{totalPercentData.sandwichPercent}%</td>
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
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">数据解读</h2>
        </div>
        <div className="bg-white rounded-lg p-6">
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span>体育打水为主要占比，达到<span className="font-semibold text-blue-600">64.22%</span>，其次为批量打水占比为<span className="font-semibold text-blue-600">12.75%</span>，出货以及打负占比分别为<span className="font-semibold text-blue-600">10.18%</span>和<span className="font-semibold text-blue-600">9.48%</span>。</span>
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
