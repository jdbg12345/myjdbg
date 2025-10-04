import React from 'react';

export const RiskWarning = () => {
  return (
    <div className="bg-white rounded-lg p-10 mb-6 relative">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-4">3.4.1 会员出款风控 - 事前（风险预警）</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {[
          { title: "核心问题", content: "缺维度且无效多淹没有效信息；预警后处理与否无监管" },
          { title: "解决策略", content: "按会员和游戏细分为金额、胜率、作弊等，完善且清理无效，建立跟进机制，确保有效处理" },
          { title: "整体收益", content: "提升覆盖范围及有效性，确保有效预警都得到处理" },
          { title: "目标进度", content: null, progress: 67 }
        ].map((card, index) => (
          <div key={index} className="border-l-4 border-blue-600 bg-white rounded-lg p-8 min-h-32 flex flex-col">
            <h4 className="text-blue-600 font-semibold text-lg mb-4 whitespace-nowrap">{card.title}</h4>
            {card.progress ? (
              <div className="flex items-center mt-4">
                <div className="flex-1 bg-gray-200 rounded-full h-4 mr-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{width: `${card.progress}%`}}></div>
                </div>
                <div className="bg-blue-600 h-4 rounded-full" style={{width: `${card.progress}%`}}></div>
              </div>
            ) : (
              <p className="text-gray-600 flex-1 flex items-center">{card.content}</p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-8 text-center mb-12">
        <span className="text-2xl font-bold mx-8 text-blue-600">已有预警：20</span>
        <span className="text-2xl text-gray-400 mx-8">|</span>
        <span className="text-2xl font-bold mx-8 text-blue-600">会员维度：15</span>
        <span className="text-2xl text-gray-400 mx-8">|</span>
        <span className="text-2xl font-bold mx-8 text-blue-600">游戏维度：5</span>
      </div>

      <div className="overflow-x-auto mt-12">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-6 text-left font-semibold">需求名称</th>
              <th className="p-6 text-left font-semibold">需求简述</th>
              <th className="p-6 text-center font-semibold w-32">当前状态</th>
              <th className="p-6 text-center font-semibold w-32">预期时间</th>
              <th className="p-6 text-left font-semibold w-48">预期收益</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "游戏盈利风险", desc: "针对特定游戏编号的异常盈利情况进行监控和预警", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "04月02", benefit: "补充预警维度" },
              { name: "玩家胜率风险", desc: "监控玩家胜率异常波动，识别潜在风险行为", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "05月03", benefit: "补充预警维度" },
              { name: "真人算牌风险", desc: "检测真人游戏中的算牌行为和异常模式", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "05月20", benefit: "补充预警维度" },
              { name: "游戏异常胜率-触发条件更新", desc: "优化触发条件，提升预警有效性", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "06月23", benefit: "补充预警维度" },
              { name: "会员异常盈利-更新预警内容", desc: "更新预警展示内容，提升处理效率", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "06月23", benefit: "补充预警维度" },
              { name: "野鸡赛事风险", desc: "识别和监控野鸡赛事及相关异常账号下注及盈利", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "06月30", benefit: "补充预警维度" },
              { name: "沉睡用户活跃预警", desc: "监控长期沉睡用户突然活跃的异常行为，识别潜在的账号盗用或异常操作", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "补充预警维度" },
              { name: "游戏杀率风险", desc: "针对游戏的杀率监控，高于设定值进行预警", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "补充预警维度" },
              { name: "专业玩家风险", desc: "建立专业玩家识别机制，防范职业套利行为", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "补充预警维度" },
              { name: "BW5对齐Y系预警", desc: "包网目前没有小飞机预警机制，要对标Y逐步完善", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "补充预警维度" },
              { name: "预警流程升级", desc: "对预警后处理情况进行跟进和监督，确保预警后有被关注和处理", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "新增处理监控" }
            ].map((row, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="p-6 font-semibold">{row.name}</td>
                <td className="p-6">{row.desc}</td>
                <td className="p-6 text-center">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${row.statusColor}`}>{row.status}</span>
                </td>
                <td className="p-6 text-center">{row.time}</td>
                <td className="p-6">{row.benefit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">Q3 REPORT</div>
      </div>
    </div>
  );
};