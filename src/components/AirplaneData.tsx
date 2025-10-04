import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export const AirplaneData = () => {
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

  // 飞机数据统计
  const airplaneStats = [
    { period: '5月', playerCount: 79, orderCount: 204, amount: 56.77, avgTime: '0:38:00', optimizedTime: '' },
    { period: '6月1日-6月14日', playerCount: 50, orderCount: 150, amount: 24.87, avgTime: '0:34:00', optimizedTime: '0:12:00-0:15:00' },
    { period: '6月15日-6月28日', playerCount: 137, orderCount: 275, amount: 26.36, avgTime: '0:15:00', optimizedTime: '' }
  ];

  // 5月异常用户数据
  const mayAbnormalUsers = [
    { account: 'Qt585825l202', type: '体育打水套利', amount: 710 },
    { account: 'Qt7171091340', type: '快赢打体育打水套利', amount: 11627 },
    { account: 'Qt663864B972', type: '推广链接重制代理', amount: 100 },
    { account: 'Qt717414S590', type: '推广链接重制代理', amount: 120 },
    { account: 'Qt541659S595', type: '推广链接重制代理', amount: 146 }
  ];

  // 6月异常用户数据
  const juneAbnormalUsers = [
    { account: 'Qt786708T159', type: '推广链接重制代理', amount: 17 },
    { account: 'Qt757551B999', type: '彩票异常团队投注', amount: 3137 },
    { account: 'Qt744420391B', type: '推广链接重制代理', amount: 21 },
    { account: 'Qt785763G443', type: '体育手卡注球打水', amount: 139 }
  ];

  const totalAmount = [...mayAbnormalUsers, ...juneAbnormalUsers].reduce((sum, user) => sum + user.amount, 0);

  // 合计行的数据（用于最大值最小值高亮）
  const airplaneTotalStats = [453, 1054, 159.22]; // 人数、订单数量、提款金额

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.10 飞投数据</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">工作情况</span>
        </div>
      </div>

      {/* 飞机数据统计表 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
       

        <div className="grid grid-cols-1 gap-8 mb-8">
          {/* 左侧统计表格 */}
          <div>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4 text-center font-semibold">日期</th>
                    <th className="p-4 text-center font-semibold">提款人数</th>
                    <th className="p-4 text-center font-semibold">订单数量</th>
                    <th className="p-4 text-center font-semibold">提款金额 (USDT万)</th>
                    <th className="p-4 text-center font-semibold">平均审核时间</th>
                    <th className="p-4 text-center font-semibold">后续优化时间</th>
                  </tr>
                </thead>
                <tbody>
                  {airplaneStats.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="p-4 text-center font-semibold">{row.period}</td>
                      <td className="p-4 text-center">{row.playerCount}</td>
                      <td className="p-4 text-center">{row.orderCount}</td>
                      <td className="p-4 text-center">{row.amount}</td>
                      <td className="p-4 text-center">{row.avgTime}</td>
                      <td className="p-4 text-center">{row.optimizedTime}</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="p-4 text-center font-semibold">合计</td>
                    <td className={`p-4 text-center font-semibold ${getMinMaxClass(453, airplaneTotalStats)}`}>453</td>
                    <td className={`p-4 text-center font-semibold ${getMinMaxClass(1054, airplaneTotalStats)}`}>1054</td>
                    <td className={`p-4 text-center font-semibold ${getMinMaxClass(159.22, airplaneTotalStats)}`}>159.22</td>
                    <td className="p-4 text-center font-semibold">0:29:00</td>
                    <td className="p-4 text-center font-semibold"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 异常用户详情表格 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 5月异常用户 */}
              <div className="bg-white rounded-lg border border-blue-200">
                <div className="bg-blue-600 text-white p-3 text-center font-semibold">5月异常用户</div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="p-3 text-center font-semibold text-blue-800">账号</th>
                        <th className="p-3 text-center font-semibold text-blue-800">风险原因</th>
                        <th className="p-3 text-center font-semibold text-blue-800">风险金额 (USDT)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mayAbnormalUsers.map((user, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="p-3 text-center text-sm">{user.account}</td>
                          <td className="p-3 text-center text-sm">{user.type}</td>
                          <td className="p-3 text-center text-sm font-semibold">{user.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 6月异常用户 */}
              <div className="bg-white rounded-lg border border-blue-200">
                <div className="bg-blue-600 text-white p-3 text-center font-semibold">6月异常用户</div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="p-3 text-center font-semibold text-blue-800">账号</th>
                        <th className="p-3 text-center font-semibold text-blue-800">风险原因</th>
                        <th className="p-3 text-center font-semibold text-blue-800">风险金额 (USDT)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {juneAbnormalUsers.map((user, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="p-3 text-center text-sm">{user.account}</td>
                          <td className="p-3 text-center text-sm">{user.type}</td>
                          <td className="p-3 text-center text-sm font-semibold">{user.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold">
                合计: 9个 - 总金额: {totalAmount} USDT
              </span>
            </div>
          </div>
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
              <span className="text-blue-600 mr-2">▶</span>
              <span>提款数据拉取为5月1～6月28。飞投上线为5月1日，整体提款数据在6月15后有明细增长</span>
            </div>
         
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">▶</span>
              <span>前期由于飞投用户存在无实名信息缺失情况下，审核主要为游戏审核筛查，个别用户导致，故时间较长</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">▶</span>
              <span>后续调整后审核时效有所提升。已制定时效范围12～15分钟时效为目标时效</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">▶</span>
              <span>已建立飞投盈利用户周期筛查机制，应对未来大力推</span>
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