import React from 'react';

export const InternalSecurityControl = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-4">3.4.7 内控安全风控</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {[
          { title: "核心问题", content: "内部人员权限管理不够精细，缺乏实时行为监控，存在内部勾结和数据泄露风险" },
          { title: "解决策略", content: "建立完善的权限管理体系和实时监控机制，加强敏感操作审计和异常行为预警" },
          { title: "整体收益", content: "提升内部安全防护能力，降低内部风险事件发生率，保障数据和资金安全" },
          { title: "目标进度", content: null, progress: 60 }
        ].map((card, index) => (
          <div key={index} className="border-l-4 border-blue-600 bg-white rounded-lg p-8 min-h-32 flex flex-col">
            <h4 className="text-blue-600 font-semibold text-lg mb-4 whitespace-nowrap">{card.title}</h4>
            {card.progress ? (
              <div className="flex items-center mt-4">
                <div className="flex-1 bg-gray-200 rounded-full h-4 mr-4">
                  <div className="bg-blue-600 h-4 rounded-full transition-all duration-300" style={{width: `${card.progress}%`}}></div>
                </div>
                <div className="text-blue-600 font-semibold text-lg">{card.progress}%</div>
              </div>
            ) : (
              <p className="text-gray-600 flex-1 flex items-center leading-relaxed text-sm">{card.content}</p>
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
              { name: "后台登陆IP管控和预警", desc: "建立后台登录IP白名单机制，对异常IP登录进行实时监控和预警，防范账户被盗用风险", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "06月13", benefit: "有效防范异地登录和账户盗用风险，提升账户安全性" },
              { name: "会员标签和备注查看权限升级", desc: "对会员标签和备注查看权限进行细化管理，限制敏感信息的访问范围，防止信息泄露", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "06月24", benefit: "减少敏感信息泄露风险，加强数据访问控制" },
              { name: "禁用记录查询与禁用权限细分", desc: "建立禁用记录查询机制，对禁用权限进行细分管理，确保权限使用的可追溯性和合规性", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "提升权限管理精细化程度，增强内部安全监控能力" }
            ].map((row, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
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
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};