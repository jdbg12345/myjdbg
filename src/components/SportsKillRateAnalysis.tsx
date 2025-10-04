import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export const SportsKillRateAnalysis = () => {
  // DB整体主要玩法数据
  const dbOverallData = [
    { gameplay: '全场大小', killRate: 4.75, orderPercent: 32.07, flowPercent: 32.26 },
    { gameplay: '全场让球', killRate: 1.71, orderPercent: 10.25, flowPercent: 16.22 }
  ];

  // 熊猫整体主要玩法数据
  const pandaOverallData = [
    { gameplay: '全场大小', killRate: 2.70, orderPercent: 27.46, flowPercent: 28.26 },
    { gameplay: '全场让球', killRate: 0.11, orderPercent: 12.54, flowPercent: 16.19 }
  ];

  // 熊猫B系主要玩法数据
  const pandaBata = [
    { gameplay: '全场大小', killRate: 3.51, orderPercent: 30.11, flowPercent: 35.76 },
    { gameplay: '全场让球', killRate: -1.72, orderPercent: 16.31, flowPercent: 17.98 }
  ];

  // 熊猫在BW的表现数据
  const pandaBWData = [
    { gameplay: '全场大小', killRate: 5.95, orderPercent: 30.77, flowPercent: 28.21 },
    { gameplay: '全场让球', killRate: 2.66, orderPercent: 10.69, flowPercent: 11.08 }
  ];

  // 辅助函数：获取杀率样式（负数绿色，正数默认）
  const getKillRateClass = (value: number) => {
    if (value < 0) return 'text-red-500 font-semibold';
    return '';
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-4 pb-16 relative">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.10 主要玩法杀率分析</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">Y/B/BW的对比分析</span>
        </div>
      </div>

      {/* 4个分析表格 */}
      <div className="space-y-2">
        {/* 1. DB整体主要玩法的表现 */}
        <div className="bg-white rounded-lg p-4 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">DB整体主要玩法的表现</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">玩法</th>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">杀率</th>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">注单占比</th>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">流水占比</th>
                </tr>
              </thead>
              <tbody>
                {dbOverallData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.gameplay}</td>
                    <td className={`p-1 text-center font-bold ${getKillRateClass(row.killRate)} border-r border-gray-200`}>{row.killRate}%</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.orderPercent}%</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.flowPercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. 熊猫整体主要玩法的表现 */}
        <div className="bg-white rounded-lg p-4 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">熊猫整体主要玩法的表现</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">玩法</th>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">杀率</th>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">注单占比</th>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">流水占比</th>
                </tr>
              </thead>
              <tbody>
                {pandaOverallData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.gameplay}</td>
                    <td className={`p-1 text-center font-bold ${getKillRateClass(row.killRate)} border-r border-gray-200`}>{row.killRate}%</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.orderPercent}%</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.flowPercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. 熊猫B系主要玩法的表现 */}
        <div className="bg-white rounded-lg p-4 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">熊猫B系主要玩法的表现</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">玩法</th>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">杀率</th>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">注单占比</th>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">流水占比</th>
                </tr>
              </thead>
              <tbody>
                {pandaBata.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.gameplay}</td>
                    <td className={`p-1 text-center font-bold ${getKillRateClass(row.killRate)} border-r border-gray-200`}>{row.killRate}%</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.orderPercent}%</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.flowPercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. 熊猫在BW的表现-主要玩法的表现 */}
        <div className="bg-white rounded-lg p-4 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">熊猫在BW的表现-主要玩法</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">玩法</th>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">杀率</th>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">注单占比</th>
                  <th className="p-2 text-center font-semibold border-r border-blue-500">流水占比</th>
                </tr>
              </thead>
              <tbody>
                {pandaBWData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.gameplay}</td>
                    <td className={`p-1 text-center font-bold ${getKillRateClass(row.killRate)} border-r border-gray-200`}>{row.killRate}%</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.orderPercent}%</td>
                    <td className="p-1 text-center font-bold text-gray-700 border-r border-gray-200">{row.flowPercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 数据解读 */}
      <div className="bg-white rounded-lg p-8 mt-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">数据解读</h2>
        </div>

        <div className="bg-white rounded-lg p-6">
          <div className="space-y-3 text-gray-700">
            
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-blue-600">熊猫第3季度</span>杀率只有<span className="font-semibold text-red-600">3.74%</span>与上半年差不多，较整体低<span className="font-semibold text-blue-600">2.04%</span>，属<span className="font-semibold text-red-600">B系较为严重</span>只有<span className="font-semibold text-red-600">2.81%</span></span>
            </div>

            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-red-600">问题点：</span><span className="font-semibold">1、</span><span className="font-semibold text-blue-600">全场让球</span>一直是打水账号主要套利的玩法，熊猫基数较小没好客互补会照成亏水的状况尤为明显。<span className="font-semibold">2、</span><span className="font-semibold text-red-600">B系主要玩法被打水较为严重</span>，拦截比率<span className="font-semibold text-red-600">17.5%</span>高于流水占比<span className="font-semibold text-blue-600">15%</span>。</span>
            </div>

            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-green-600">已执行的风控流程：</span><span className="font-semibold">1、</span><span className="font-semibold text-blue-600">9月份</span>上线风控降水、延迟设置会自动同步熊猫，解决利用未风控场馆继续打水的问题。<span className="font-semibold">2、</span><span className="font-semibold text-blue-600">9月份</span>B系后台上线场馆合拼，能给于风控专员快速直观判断。<span className="font-semibold">3、</span>进行中，后台导出数据格式全站统一，方便风控专员快速整理数据并发现异常状况。</span>
            </div>

            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-blue-600">需优化方案：</span><span className="font-semibold">1、</span>全场让球常年杀率低于<span className="font-semibold text-red-600">1.8%</span>，让B端操盘加强对主要赔率盘口的精确掌控，系统化排查打水账号并给予风控及时反馈。<span className="font-semibold">2、</span>增大对打水账号的风控力度，对可疑与竞品赔率对冲的新号、租号、卖号进行扣盈利、红利处理。</span>
            </div>

            <div className="flex items-start">
              <span className="text-blue-600 mr-2">●</span>
              <span><span className="font-semibold text-green-600">熊猫在BW的表现长期属于较优越的</span>，第3季度达到<span className="font-semibold text-green-600">5.3%</span>；熊猫在BW<span className="font-semibold text-blue-600">全场让球</span>流水占比较低，接近抽水期望值；熊猫在BW的<span className="font-semibold text-blue-600">篮球流水</span>高于Y系、B系，杀率也会拉高一些</span>
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
