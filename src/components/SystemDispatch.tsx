import React from 'react';

export const SystemDispatch = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-4">3.4.3 会员出款风控 - 事中（系统派单）</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {[
          { title: "核心问题", content: "当前派单只按金额，存在金额低风险高给到经验少导致出款错误" },
          { title: "解决策略", content: "派单规则引入\"分数\"来定义出款难度，按【难度+金额】派单" },
          { title: "整体收益", content: "提升审核效率30%+，降低人工审核错误率" },
          { title: "目标进度", content: null, progress: 60 }
        ].map((card, index) => (
          <div key={index} className="border-l-4 border-blue-600 bg-white rounded-lg p-8 min-h-32 flex flex-col">
            <h4 className="text-blue-600 font-semibold text-lg mb-4 whitespace-nowrap">{card.title}</h4>
            {card.progress ? (
              <div className="flex items-center mt-4">
                <div className="flex-1 bg-gray-200 rounded-full h-4 mr-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{width: `${card.progress}%`}}></div>
                </div>
                <div className="text-blue-600 font-semibold text-lg">{card.progress}%</div>
              </div>
            ) : (
              <p className="text-gray-600 flex-1 flex items-center">{card.content}</p>
            )}
          </div>
        ))}
      </div>

      {/* Intelligent Dispatch Mechanism - Matching the Image Exactly */}
      <div className="bg-white rounded-lg p-8 mb-8">
        <div className="flex items-center mb-8">
          <div className="bg-blue-600 rounded-lg p-3 mr-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-800">派单机制简要说明</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Risk Score Definition */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4">1</div>
              <h4 className="text-2xl font-bold text-gray-800">风险分数定义</h4>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              分数定义分为2个维度：当会员提款时，将此会员命中的所有策略及标签的分数进行累加（也为后续风控体系合理性做了铺垫）
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-800">风控策略：</span>
                  <span className="text-gray-600">【每个策略】都可单独设定分数</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-800">会员标签：</span>
                  <span className="text-gray-600">【每个标签】都可单独设定分数</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Dispatch Rules Definition */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4">2</div>
              <h4 className="text-2xl font-bold text-gray-800">派单规则定义</h4>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              设定分数和金额的区间对应的可审核人员，当订单来了，基于金额和分数，会落到对应区间，由相应人员进行审核
            </p>
            
            <div className="space-y-4">
              <div className="bg-white border-l-4 border-green-600 p-4 rounded border border-green-200">
                <span className="text-green-700 font-medium">例：分数0-10且金额≤1万 → 初级审核员</span>
              </div>
              <div className="bg-white border-l-4 border-green-600 p-4 rounded border border-green-200">
                <span className="text-green-700 font-medium">例：分数11-30且金额≤5万 → 中级审核员</span>
              </div>
            </div>
          </div>
        </div>
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
              { name: "派单规则引入当前订单的风险分数作为派单因子", desc: "在派单系统中集成风险评分机制，根据订单风险分数和金额进行智能派单", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "6月30", benefit: "降低错误出款风险" },
              { name: "派单规则引入订单风险点与出单人擅长点匹配机制", desc: "基于当前订单的命中策略及标签分布确定其难度，并通过分析出单人历史记录中错误率最低的订单特点来确定其擅长领域，然后据此设置匹配派单权重", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "降低错误出款风险" }
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