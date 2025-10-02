import React from 'react';
import { Shield } from 'lucide-react';

export const AgentControlOverview = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 border-b-4 border-blue-600 pb-4 mb-4">3.4 代理风控说明</h1>
        <div className="text-gray-600 text-lg">
          <p className="text-gray-700 text-lg leading-relaxed font-semibold">Q3在这个方向的投入资源较少，Q4会从<span className="text-blue-600">佣金审核流程、代理质量分析</span>等方向进行重点优化</p>
        </div>
      </div>   


         {/* 佣金审核 */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">1</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">代理佣金审核流程升级</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">方案中</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">操盘错误是B端常见风险之一，常见表现包括<span className="text-blue-600">赔率差距过大、玩法错配、盘口不一致等</span>，直接影响用户体验与平台盈利</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">针对<span className="text-blue-600">红利、打负、调整等情况设定策略</span>，触发则进入<span className="text-blue-600">复审机制</span>来控制违规行为，提升佣金有效性</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">提升佣金合理性，有效避免内外串联</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded p-10 border-2 border-gray-200">
          <div className="flex justify-center p-4">
            <svg viewBox="0 0 1600 550" className="w-full max-w-6xl h-[600px]">
              <defs>
                <marker id="arrowhead-gray" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
                  <polygon points="0 0, 12 4, 0 8" fill="#6b7280" />
                </marker>
                <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.15"/>
                </filter>
                <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#1d4ed8', stopOpacity:1}} />
                </linearGradient>
                <linearGradient id="bubbleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#2563eb', stopOpacity:1}} />
                </linearGradient>
              </defs>

              {/* Connection lines */}
              {/* 1→2 */}
              <path d="M210,130 L340,130" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 2→3 */}
              <path d="M460,130 L590,130" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 3→4 (直接通过) */}
              <path d="M710,130 L1140,130" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 3→5 (需要审核) */}
              <path d="M650,170 Q750,230 840,290" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 5→6 (人工复审通过) */}
              <path d="M960,290 L1140,290" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 5→8 (人工复审不通过) */}
              <path d="M900,340 Q1000,395 1140,450" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 6→4 (系统监控通过) - 调整箭头终点避免重叠 */}
              <path d="M1200,238 L1200,182" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 6→7 */}
              <path d="M1260,290 L1390,290" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />

              {/* 7→4 (内控复审通过) */}
              <path d="M1450,238 Q1350,185 1262,130" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 7→8 (内控复审不通过) */}
              <path d="M1450,342 Q1350,395 1262,450" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />

              {/* Bubble 1: Between 3 and 4 */}
              <g>
                <ellipse cx="925" cy="50" rx="200" ry="45" fill="url(#bubbleGradient)" stroke="#2563eb" strokeWidth="2" filter="url(#nodeShadow)"/>
                <text x="925" y="55" textAnchor="middle" fill="white" fontSize="22" fontWeight="600">
                  变化：增加套利作弊等拦截策略
                </text>
              </g>

              {/* Bubble 2: Between 3 and 5 */}
              <g>
                <ellipse cx="590" cy="250" rx="190" ry="45" fill="url(#bubbleGradient)" stroke="#2563eb" strokeWidth="2" filter="url(#nodeShadow)"/>
                <text x="590" y="255" textAnchor="middle" fill="white" fontSize="22" fontWeight="600">
                  变化：升级为按分数和金额派单
                </text>
              </g>

              {/* Bubble 3: Below node 5 */}
              <g>
                <ellipse cx="900" cy="425" rx="160" ry="40" fill="url(#bubbleGradient)" stroke="#2563eb" strokeWidth="2" filter="url(#nodeShadow)"/>
                <text x="900" y="430" textAnchor="middle" fill="white" fontSize="22" fontWeight="600">
                  变化：提供标准工具支持
                </text>
              </g>

              {/* Nodes */}
              {nodes.map((node) => (
                <g key={node.id}>
                  {/* Main node */}
                  <rect
                    x={node.x - 80}
                    y={node.y - 65}
                    width="160"
                    height="130"
                    rx="16"
                    ry="16"
                    fill={node.color === "#3b82f6" ? "url(#nodeGradient)" : node.color}
                    stroke="#e5e7eb"
                    strokeWidth="2"
                    filter="url(#nodeShadow)"
                  />
                  
                  {/* Number circle */}
                  <circle
                    cx={node.x}
                    cy={node.y - 35}
                    r="20"
                    fill="white"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                    filter="url(#nodeShadow)"
                  />
                  
                  {/* Number text */}
                  <text
                    x={node.x}
                    y={node.y - 28}
                    textAnchor="middle"
                    fill={node.numberColor}
                    fontSize="20"
                    fontWeight="700"
                  >
                    {node.number}
                  </text>
                  
                  {/* Node name */}
                  <text
                    x={node.x}
                    y={node.y + 15}
                    textAnchor="middle"
                    fill="white"
                    fontSize="24"
                    fontWeight="600"
                  >
                    {node.name}
                  </text>
                  
                  {/* Node description */}
                  <text
                    x={node.x}
                    y={node.y + 40}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.9)"
                    fontSize="16"
                    fontWeight="500"
                  >
                    {node.desc}
                  </text>
                </g>
              ))}

              {/* Flow labels */}
              <text x="275" y="115" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">开始</text>
              <text x="525" y="115" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">提交</text>
              <text x="925" y="115" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">低风险</text>
              <text x="780" y="210" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">高风险</text>
              <text x="1050" y="275" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">通过</text>
              <text x="1050" y="380" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">不通过</text>
              <text x="1160" y="210" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">通过</text>
              <text x="1325" y="275" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">不通过</text>
              <text x="1320" y="200" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">通过</text>
              <text x="1325" y="380" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">不通过</text>
            </svg>
          </div>
        </div>
          
        </div>

               {/* 代理质量分析 */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">2</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">代理质量自动化分析</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">方案中</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">操盘错误是B端常见风险之一，常见表现包括<span className="text-blue-600">赔率差距过大、玩法错配、盘口不一致等</span>，直接影响用户体验与平台盈利</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">基于<span className="text-blue-600">盈利贡献、下级质量、风险评估</span>三个维度，自动化计算代理的有效贡献度分数，实现精准监控</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">优化代理管理及运营能力，提升佣金ROI</p>
              </div>
            </div>
          </div>
        </div>
      
      {/* 代理质量分析详细展示 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">📊</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">代理质量分析模型</h3>
          <span className="text-gray-600 text-lg">基于多维度综合评估，自动化计算代理有效贡献度</span>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* 第一列：综合分数 */}
          <div className="bg-blue-50 rounded p-6 border border-blue-200 flex flex-col justify-center items-center">
            <div className="text-3xl font-semibold text-blue-600 mb-2">xx</div>
            <div className="text-base font-semibold text-blue-700">综合分数</div>
          </div>

          {/* 第二列：盈利贡献 */}
          <div className="space-y-3">
            {/* 第一行：标题 */}
            <div className="bg-blue-600 text-white p-4 rounded text-center">
              <div className="text-base font-semibold">盈利贡献</div>
              <div className="text-sm opacity-90">xx%权重</div>
            </div>
            {/* 第二行：子指标 */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">贡献净盈利</div>
                <div className="text-xs text-gray-600 mt-1">xx%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">投入产出比</div>
                <div className="text-xs text-gray-600 mt-1">xx%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">贡献持续度</div>
                <div className="text-xs text-gray-600 mt-1">xx%</div>
              </div>
            </div>
          </div>

          {/* 第三列：下级质量 */}
          <div className="space-y-3">
            {/* 第一行：标题 */}
            <div className="bg-blue-600 text-white p-4 rounded text-center">
              <div className="text-base font-semibold">下级质量</div>
              <div className="text-sm opacity-90">xx%权重</div>
            </div>
            {/* 第二行：子指标 */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">一次性会员</div>
                <div className="text-xs text-gray-600 mt-1">-xx%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">贡献集中度</div>
                <div className="text-xs text-gray-600 mt-1">-xx%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">新客贡献度</div>
                <div className="text-xs text-gray-600 mt-1">xx%</div>
              </div>
            </div>
          </div>

          {/* 第四列：风险评估 */}
          <div className="space-y-3">
            {/* 第一行：标题 */}
            <div className="bg-blue-600 text-white p-4 rounded text-center">
              <div className="text-base font-semibold">风险评估</div>
              <div className="text-sm opacity-90">-35%权重</div>
            </div>
            {/* 第二行：子指标 */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">多关联风险</div>
                <div className="text-xs text-gray-600 mt-1">-xx%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">负盈利风险</div>
                <div className="text-xs text-gray-600 mt-1">-xx%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">下级风险度</div>
                <div className="text-xs text-gray-600 mt-1">-xx%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 有效贡献度呈现效果展示 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">📊</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">有效贡献度呈现示意</h3>
          <span className="text-gray-600 text-lg">快速区分优质代理与劣质代理，实现精准监控与管理</span>
        </div>

        {/* 代理列表 */}
        <div className="space-y-4">
          {[
            {
                id: '3Y218350',
                grade: 'C档 - 一般',
                site: 'Y8',
                joinDate: '2024-08-10',
                totalScore: 56,
                businessScore: 39,
                userQuality: 66,
                riskControl: 72,
                activeUsers: 586,
                monthlyActive: 586,
                validFlow: '¥46.8万',
                contributionProfit: '¥44.0万',
                totalDeposit: '¥48.1万',
                retention: '17%',
                riskUsers: '6%',
                gradeColor: 'text-blue-600 bg-blue-50'
            },
            {
                id: '3Y123456',
                grade: 'A档 - 优秀',
                site: 'Y1',
                joinDate: '2025-08-10',
                totalScore: 80,
                businessScore: 90,
                userQuality: 66,
                riskControl: 10,
                activeUsers: 586,
                monthlyActive: 586,
                validFlow: '¥156.8万',
                contributionProfit: '¥41.0万',
                totalDeposit: '¥40.1万',
                retention: '17%',
                riskUsers: '6%',
                gradeColor: 'text-blue-600 bg-blue-50'
            }
          
          ].map((agent, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
          {/* 顶部信息 */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-4">
              <span className="text-lg font-bold text-gray-800">{agent.id}</span>
              
              <span className="text-gray-600">{agent.site}</span>

              {/* 中间：汇总数据 */}
              <div className="flex items-center space-x-4 text-sm text-gray-600 ml-4">
                <span>贡献盈利: <span className="font-semibold text-gray-800">{agent.contributionProfit}</span></span>
                <span>累计存款: <span className="font-semibold text-gray-800">{agent.totalDeposit}</span></span>
                <span>下级人数: <span className="font-semibold text-gray-800">{agent.activeUsers}</span></span>
                <span>月活人数: <span className="font-semibold text-gray-800">{agent.monthlyActive}</span></span>
              </div>
            </div>

            {/* 最右侧：加入时间 */}
            <div className="text-sm text-gray-500">
              加入时间: <span className="text-gray-700">{agent.joinDate}</span>
            </div>
          </div>

          {/* 主体：两行四列布局 */}
          <div className="grid grid-cols-4 gap-6">
            {/* 第一列：综合分数，跨两行 */}
            <div className="row-span-2 flex flex-col items-center justify-center border-r pr-4">
              <div className="text-4xl font-extrabold text-blue-600">{agent.totalScore}</div>
              <div className="mt-2 text-sm text-gray-600">综合分数</div>
              <div className="mt-3">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${agent.gradeColor}`}>
                  {agent.grade}
                </span>
              </div>
            </div>

            {/* 第二列：盈利贡献 */}
            <div className="col-span-1 border-r pr-4">
              <div className="text-sm text-gray-500">盈利贡献</div>
              <div className="mt-2 text-2xl font-bold text-blue-600">{agent.businessScore}</div>
            </div>

            {/* 第三列：下级质量 */}
            <div className="col-span-1 border-r pr-4">
              <div className="text-sm text-gray-500">下级质量</div>
              <div className="mt-2 text-2xl font-bold text-blue-600">{agent.userQuality}</div>
            </div>

            {/* 第四列：风险评估 */}
            <div className="col-span-1">
              <div className="text-sm text-gray-500">风险评估</div>
              <div className="mt-2 text-2xl font-bold text-blue-600">{agent.riskControl}</div>
            </div>

            {/* 第二行：各列子项 */}
            {/* 第二列下半 */}
            <div className="col-start-2 col-span-1 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">贡献净盈利</span>
                <span className="font-semibold text-gray-800">{agent.contributionProfit}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">投入产出比</span>
                <span className="font-semibold text-gray-800">120%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">贡献持续度</span>
                <span className="font-semibold text-gray-800">{agent.retention}</span>
              </div>
            </div>

            {/* 第三列下半 */}
            <div className="col-span-1 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">一次性会员</span>
                <span className="font-semibold text-gray-800">{agent.retention}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">贡献集中度</span>
                <span className="font-semibold text-gray-800">{agent.riskUsers}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">新客贡献度</span>
                <span className="font-semibold text-gray-800">70%</span>
              </div>
            </div>

            {/* 第四列下半 */}
            <div className="col-span-1 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">多关联风险</span>
                <span className="font-semibold text-gray-800">{agent.riskUsers}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">负盈利风险</span>
                <span className="font-semibold text-gray-800">80%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">下级风险度</span>
                <span className="font-semibold text-gray-800">70%</span>
              </div>
            </div>
          </div>
        </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};