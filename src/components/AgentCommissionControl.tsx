import React from 'react';

export const AgentCommissionControl = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-4">3.4.8 DL佣金风控</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="border-l-4 border-blue-600 bg-white rounded-lg p-8 min-h-32 flex flex-col">
          <h4 className="text-blue-600 font-semibold text-lg mb-4 whitespace-nowrap">核心问题</h4>
          <p className="text-gray-600 flex-1 flex items-center leading-relaxed text-sm">过度依赖人工识别，系统功能弱，缺跨站点分析，异常检测不足，刷量识别未完善。存在DL刷活跃、凑负盈利和伪造新增用户作弊。</p>
        </div>
        
        <div className="border-l-4 border-blue-600 bg-white rounded-lg p-8 min-h-32 flex flex-col">
          <h4 className="text-blue-600 font-semibold text-lg mb-4 whitespace-nowrap">解决策略</h4>
          <p className="text-gray-600 flex-1 flex items-center leading-relaxed text-sm">构建DL行为分析模型，优化佣金审核机制，建立异常预警系统，实现刷量识别，强化关联检测和监控</p>
        </div>
        
        <div className="border-l-4 border-blue-600 bg-white rounded-lg p-8 min-h-32 flex flex-col">
          <h4 className="text-blue-600 font-semibold text-lg mb-4 whitespace-nowrap">整体收益</h4>
          <p className="text-gray-600 flex-1 flex items-center leading-relaxed text-sm">减少80%DL刷量行为损失，提高佣金发放准确性和安全性。</p>
        </div>
        
        <div className="border-l-4 border-blue-600 bg-white rounded-lg p-8 min-h-32 flex flex-col">
          <h4 className="text-blue-600 font-semibold text-lg mb-4 whitespace-nowrap">目标进度</h4>
          <div className="flex items-center mt-4">
            <div className="flex-1 bg-gray-200 rounded-full h-4 mr-4">
              <div className="bg-blue-600 h-4 rounded-full" style={{width: '0%'}}></div>
            </div>
            <div className="text-blue-600 font-semibold text-lg">0%</div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-12">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-6 text-left font-semibold">需求名称</th>
              <th className="p-6 text-left font-semibold">需求简述</th>
              <th className="p-6 text-center font-semibold w-32">预期时间</th>
              <th className="p-6 text-left font-semibold w-48">预期收益</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "DL佣金审核预警", desc: "建立DL佣金计算和发放的审核预警机制，监控异常佣金申请和发放行为，防范DL刷量和虚假活跃等风险行为，包括DL行为建模、关联关系分析、异常模式识别等功能", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "降低DL佣金风险，提升佣金发放准确性和安全性，预计降低DL损失80%" }
            ].map((row, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="p-6 font-semibold">{row.name}</td>
                <td className="p-6">{row.desc}</td>
                <td className="p-6 text-center">{row.time}</td>
                <td className="p-6">{row.benefit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">Q3 REPORT </div>
      </div>
    </div>
  );
};