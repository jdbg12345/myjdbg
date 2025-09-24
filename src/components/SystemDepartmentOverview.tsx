import React from 'react';
import { Users, AlertTriangle } from 'lucide-react';

export const SystemDepartmentOverview = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">3.4 FKZX-系统组 工作总结</h1>
      </div>

      {/* 1. Department Work Content - 统一样式，参照其他页面 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">一、部门工作内容</h2>
        </div>
        
        <div className="bg-white rounded-lg p-6">          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-center font-semibold w-32">工作模块</th>
                  <th className="p-4 text-center font-semibold">会员出款风控</th>
                  <th className="p-4 text-center font-semibold">内控人员风控</th>
                  <th className="p-4 text-center font-semibold">代理佣金风控</th>
                </tr>
              </thead>
              <tbody>
                {/* 优化方向行 */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-center">
                    <div className="font-bold text-gray-800">优化方向</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">以较小人力成本和较高的审核效率，提升拦截质量</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">建立完善的权限管理体系和实时监控机制，加强敏感操作审计和异常行为预警</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">构建代理行为分析模型，优化佣金审核机制，强化关联检测和监控</div>
                  </td>
                </tr>
                
                {/* Q2优先级行 */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-center">
                    <div className="font-bold text-gray-800">Q2：优先级</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">P0</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">P1</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">P2</div>
                  </td>
                </tr>
                
                {/* Q3优先级行 */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-center">
                    <div className="font-bold text-gray-800">Q3：优先级</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">P0</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">P1</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">P0</div>
                  </td>
                </tr>

                {/* 挑战与困难行 - 参照稽查组经验总结的样式 */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-center">
                    <div className="font-bold text-gray-800">挑战与困难</div>
                  </td>
                  <td className="p-6" colSpan="3">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <h4 className="font-bold text-blue-700">补充基础建设</h4>
                        </div>
                        <p className="text-gray-700 text-sm">实施需大量资源和时间，价值难以在短期内体现（如跨站融合、系统效能提升、底层模型升级、外部能力引入）。面对众多业务痛点，需要平衡，既能解决实际问题，又能兼顾长期性和合理性</p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <h4 className="font-bold text-blue-700">多站存在差异</h4>
                        </div>
                        <p className="text-gray-700 text-sm">Y、B、K系统架构和实施进度差异明显。例如，B系统风控策略仍采用硬编码，缺乏可视化界面和灵活性。这种不一致性增加了跨平台落地的复杂度，影响整体风控系统进度</p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <h4 className="font-bold text-blue-700">风控理念差异</h4>
                        </div>
                        <p className="text-gray-700 text-sm">由于长期以人工审核为主，经验未被沉淀，“个人方法”为主；且考核指标主要基于人工拦截金额，员工担心被系统替代或收入受影响，因此不愿分享和沉淀个人经验，这也导致新系统落地实施效率不高</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 2. 风险自查及预防手段 - 更新内容 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">二、风险自查及预防手段</h2>
        </div>
        
        {/* 新增的5个部分模块 */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {[
              { number: "1", title: "风控权限收紧", desc: "对白/黑名单、禁用、手动上分、敏感信息查询等权限进行全面梳理与优化。", status: "进行中", statusColor: "bg-yellow-100 text-yellow-700" },
              { number: "2", title: "系统能力收紧", desc: "禁止向外提供能绕过风控的API及相应功能。", status: "已执行", statusColor: "bg-green-100 text-green-700" },
              { number: "3", title: "风控需求收紧", desc: "所有影响出款的需求必须经过风控审核。", status: "已执行", statusColor: "bg-green-100 text-green-700" },
              { number: "4", title: "排查策略参数", desc: "检查线上策略及预警参数的合理性，以及是否存在缺失（尤其针对可能被绕过系统的策略及参数）", status: "进行中", statusColor: "bg-yellow-100 text-yellow-700" },
              { number: "5", title: "排查系统风险", desc: "包括账户风险、上分风险、游戏风险、提款风险和内控风险。", status: "已完成", statusColor: "bg-blue-100 text-blue-700" }
            ].map((item, index) => (
              <div key={index} className="bg-white border-l-4 border-blue-600 rounded-lg p-4 transition-all duration-300 flex flex-col h-full">
                <div className="text-center mb-3">
                  <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-base mx-auto mb-2">
                    {item.number}
                  </div>
                  <h4 className="text-blue-600 font-semibold text-base whitespace-nowrap">{item.title}</h4>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-grow">{item.desc}</p>
                <div className="flex justify-center mt-auto">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold w-40">系统风险</th>
                  <th className="p-4 text-left font-semibold w-40">风险操作</th>
                  <th className="p-4 text-left font-semibold w-48">风险描述</th>
                  <th className="p-4 text-center font-semibold w-24">风险</th>
                  <th className="p-4 text-center font-semibold w-24">状态</th>
                  <th className="p-4 text-left font-semibold w-48">预防手段</th>
                  <th className="p-4 text-center font-semibold w-32">预计时间</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { category: "1、账户风险", subCategory: "异常登录", desc: "换IP/设备等登录存在被盗、租卖等潜在风险", level: "中", status: "✅", strategy: "校验手机号", time: "", isHighRiskUnsolved: false },
                  { category: "", subCategory: "沉睡用户", desc: "长时间未登录突然登录，存在被盗、租卖等潜在风险", level: "中", status: "❌", strategy: "沉睡用户登录预警并增加提款拦截", time: "7月内", isHighRiskUnsolved: false },
                  { category: "", subCategory: "修改敏感信息", desc: "修改手机号、姓名等信息", level: "高", status: "✅", strategy: "后台人工审核通过才可生效", time: "", isHighRiskUnsolved: false },
                  { category: "2、上分风险", subCategory: "技术手段上分", desc: "站点侧没上分记录", level: "高", status: "❌", strategy: "成立高危预警群，【站点和财务】对账", time: "方案中:待定", isHighRiskUnsolved: true },
                  { category: "", subCategory: "人工手动上分", desc: "如工作人员账号被盗去操作", level: "高", status: "✅", strategy: "已有拦截策略命中转人工", time: "", isHighRiskUnsolved: false },
                  { category: "3、游戏风险", subCategory: "账变异常", desc: "游戏账户变动异常", level: "高", status: "❌", strategy: "成立高危预警群，【站点和场馆】投注记录对账", time: "方案中:待定", isHighRiskUnsolved: true },
                  { category: "4、提款风险", subCategory: "绕过风控", desc: "财务白名单", level: "高", status: "✅", strategy: "移除此逻辑", time: "", isHighRiskUnsolved: false },
                  { category: "", subCategory: "绕过风控", desc: "财务U商白名单", level: "高", status: "❌", strategy: "移除此逻辑", time: "7月内", isHighRiskUnsolved: true },
                  { category: "", subCategory: "系统直接通过", desc: "经过风控，但系统直接通过，到财务出款", level: "高", status: "✅", strategy: "需持续增加其他作弊策略", time: "", isHighRiskUnsolved: false },
                  { category: "", subCategory: "人工审核通过", desc: "经过风控，需人工审核通过，到财务出款", level: "低", status: "✅", strategy: "派单升级【分数+金额】机制；增加出款前抽检", time: "", isHighRiskUnsolved: false },
                  { category: "", subCategory: "质检未发现", desc: "系统出款订单的质检主要依靠违规注单来定位问题订单。然而，此次事故中的会员完全没有投注行为。另外，该事故每日仅涉及3-4笔提款订单，而全平台系统出款订单每日约达10万笔，这使得此类问题难以被及时发现和定位", level: "中", status: "✅", strategy: "每日必须抽检VIP等级0-3且出款1万以上的订单", time: "", isHighRiskUnsolved: false },
                  { category: "5、内控风险", subCategory: "查看会员标签和备注", desc: "售卖服务查会员敏感信息", level: "中", status: "✅", strategy: "由原来打开页面即可看到升级为须点击查询才可看到，保留日志记录", time: "", isHighRiskUnsolved: false },
                  { category: "", subCategory: "查看验证码", desc: "停留在验证码页面并刷新，即可看到所有已发送号码，且无日志记录，从而与外部合作牟利并逃避侦查", level: "高", status: "❌", strategy: "限制该页面刷新全展示功能，仅允许通过账号搜索方式查询，保留日志记录", time: "7月内", isHighRiskUnsolved: true },
                  { category: "", subCategory: "后台账号被盗", desc: "一旦后台账号被盗存在较大安全隐患", level: "高", status: "✅", strategy: "后台IP登录绑定以及预警", time: "", isHighRiskUnsolved: false }
                ].map((row, index) => (
                  <tr key={index} className={`border-b border-gray-100 hover:bg-white transition-colors ${row.isHighRiskUnsolved ? 'bg-white' : ''}`}>
                    <td className={`p-4 font-semibold whitespace-nowrap ${row.isHighRiskUnsolved ? 'text-blue-700' : ''}`}>{row.category}</td>
                    <td className={`p-4 font-semibold whitespace-nowrap ${row.isHighRiskUnsolved ? 'text-blue-700' : ''}`}>{row.subCategory}</td>
                    <td className={`p-4 ${row.isHighRiskUnsolved ? 'text-blue-700' : ''}`}>{row.desc}</td>
                    <td className="p-4 text-center">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">{row.level}</span>
                    </td>
                    <td className={`p-4 text-center text-base ${row.isHighRiskUnsolved ? 'text-blue-700' : ''}`}>{row.status}</td>
                    <td className={`p-4 ${row.isHighRiskUnsolved ? 'text-blue-700' : ''}`}>{row.strategy}</td>
                    <td className={`p-4 text-center ${row.isHighRiskUnsolved ? 'text-blue-700' : ''}`}>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};