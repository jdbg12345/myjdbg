import React from 'react';

export const SystemReview = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-4">3.4.2 会员出款风控 - 事中（系统审核）</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {[
          { title: "核心问题", content: "几乎没有\"作弊行为\"的拦截策略，导致系统直接出款错误" },
          { title: "解决策略", content: "系统审核补充多种作弊、套利等拦截策略，降低直接出款错误" },
          { title: "整体收益", content: "预计50+策略(含100+子策略)，拦截率达到90%+" },
          { title: "目标进度", content: null, progress: 45 }
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
              { name: "牌坊风险", desc: "防范牌坊类游戏的上下分功能风险和异常操作", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "05月11", benefit: "拦截会员间上下分等高风险转移分场景直接出款风险，须转人工严格审核" },
              { name: "优化提款流水计算", desc: "提款因流水问题反复被拒的体验问题（一期，增加提醒；二期，优化流水计算逻辑；三期，提款前直接进行流水差额提醒（待开发））", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "05月27", benefit: "一期已上线，提款因流水不足被拒后，增加站内信、push、订单等流水差XX的提醒" },
              { name: "电子卡免费", desc: "识别和拦截电子游戏中的卡免费旋转等套利行为", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "06月30", benefit: "质检结果中，错误占比约5%-10%，目标是全部拦截，不再出现" },
              { name: "套利风险", desc: "套利分为明确套利场景和多特征组合兜底判定。该策略将采取多特征组合作为兜底机制，辅助套利特征拦截。", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "06月30", benefit: "当其他已有套利策略未拦截后，此作为拦截兜底" },
              { name: "机器下注", desc: "检测和拦截自动化下注程序和机器人行为", status: "开发中", statusColor: "bg-yellow-100 text-yellow-600", time: "07月底", benefit: "此类行为拦截率达到90%+" },
              { name: "租卖号", desc: "识别账号租借和买卖行为，防范账号滥用", status: "开发中", statusColor: "bg-yellow-100 text-yellow-600", time: "07月底", benefit: "此类行为拦截率达到90%+" },
              { name: "活动&红利风险", desc: "监控会员领取活动和红利后是否套利", status: "开发中", statusColor: "bg-yellow-100 text-yellow-600", time: "07月底", benefit: "新用户套活动&红利、代理线下红利等拦截率达到90%+" },
              { name: "对打风险", desc: "检测游戏对打行为，分为关联对打（一期）和无关联对打（二期）", status: "开发中", statusColor: "bg-yellow-100 text-yellow-600", time: "08月中", benefit: "真人、体育等拦截率达到90%+" },
              { name: "野鸡赛事风险", desc: "识别下注野鸡赛事的用户异常行为", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "此类行为拦截率达到90%+" },
              { name: "关联代理套利", desc: "监控提款会员所属代理刷活跃、凑负盈利、刷新增等行为", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "质检结果中，错误占比约10%-20%，目标是拦截率达到90%+" },
              { name: "彩票风险", desc: "监控彩票异常盈利、全包套利等行为", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "质检结果中，错误占比约10%-20%，目标是拦截率达到90%+" },
              { name: "帐变异常", desc: "监控帐变是否异常", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "帐变一旦有异常，就会带来巨大风险" },
              { name: "事件临时配置", desc: "建立应急响应机制，支持突发风险事件的快速配置，如IP、游戏code、代理code、活动Code等", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "增强系统应急扩展性" },
              { name: "+B端风控(TY)", desc: "为C端提供体育游戏提供专业的风控API接口服务", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "作为对C端风控能力的重要补充，特别是在覆盖原有系统盲点的场景中，如其他平台关联" },
              { name: "+B端风控(ZR)", desc: "为真人游戏提供专业的风控API接口服务", status: "开发中", statusColor: "bg-yellow-100 text-yellow-600", time: "09月底", benefit: "作为对C端风控能力的重要补充，特别是在覆盖原有系统盲点的场景中，如其他平台关联" },
              { name: "+B端风控(DJ)", desc: "为C端提供电竞游戏提供专业的风控API接口服务", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "作为对C端风控能力的重要补充，特别是在覆盖原有系统盲点的场景中，如其他平台关联" },
              { name: "+B端风控(CP)", desc: "为C端提供体彩票游戏提供专业的风控API接口服务", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "作为对C端风控能力的重要补充，特别是在覆盖原有系统盲点的场景中，如其他平台关联" },
              { name: "+B端风控(DZ)", desc: "为老虎机游戏、棋牌、娱乐等电子游戏提供专业的风控API接口服务", status: "开发中", statusColor: "bg-yellow-100 text-yellow-600", time: "09月底", benefit: "作为对C端风控能力的重要补充，特别是在覆盖原有系统盲点的场景中" }
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
        <div className="text-gray-400 text-sm">FKZX Q3 REPORT</div>
      </div>
    </div>
  );
};