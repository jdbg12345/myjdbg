import React from 'react';
import { Shield, Users, Zap, BarChart3, TrendingUp, Award, CheckCircle, Clock } from 'lucide-react';

export const FKSystemOverview = () => {
   const nodes = [
    { id: 1, x: 150, y: 130, name: "系统预警", desc: "", color: "#9ca3af", numberColor: "#9ca3af", number: "1" },
    { id: 2, x: 400, y: 130, name: "申请提交", desc: "", color: "#9ca3af", numberColor: "#9ca3af", number: "2" },
    { id: 3, x: 650, y: 130, name: "系统审核", desc: "", color: "#9ca3af", numberColor: "#9ca3af", number: "3" },
    { id: 4, x: 1200, y: 130, name: "出款放行", desc: "", color: "#9ca3af", numberColor: "#10b981", number: "4" },
    { id: 5, x: 900, y: 290, name: "人工审核", desc: "", color: "#9ca3af", numberColor: "#9ca3af", number: "5" },
    { id: 6, x: 1200, y: 290, name: "系统管控", desc: "", color: "#3b82f6", numberColor: "#3b82f6", number: "6" },
    { id: 7, x: 1450, y: 290, name: "内控复审", desc: "", color: "#3b82f6", numberColor: "#3b82f6", number: "7" },
    { id: 8, x: 1200, y: 450, name: "出款拒绝", desc: "", color: "#9ca3af", numberColor: "#ef4444", number: "8" }
  ];

  
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">
          3.2 FK变化说明
        </h1>
      </div>

      {/* FK流程变化 */}
      <div className="mb-16">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">FK流程变化</h2>
            <span className="text-gray-600 text-base">单人可出款 → 出款监控（+6） + 内控抽检（+7），想违规出款，会非常难且风险大，有效防内外串联</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-10 border border-gray-200 shadow-lg">
          <div className="flex justify-center">
            <svg viewBox="0 0 1600 550" className="w-full max-w-6xl h-[500px]">
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
                <ellipse cx="925" cy="50" rx="180" ry="40" fill="url(#bubbleGradient)" stroke="#2563eb" strokeWidth="2" filter="url(#nodeShadow)"/>
                <text x="925" y="55" textAnchor="middle" fill="white" fontSize="18" fontWeight="600">
                  变化：增加套利作弊等拦截策略
                </text>
              </g>

              {/* Bubble 2: Between 3 and 5 */}
              <g>
                <ellipse cx="590" cy="250" rx="170" ry="40" fill="url(#bubbleGradient)" stroke="#2563eb" strokeWidth="2" filter="url(#nodeShadow)"/>
                <text x="590" y="255" textAnchor="middle" fill="white" fontSize="18" fontWeight="600">
                  变化：升级为按分数和金额派单
                </text>
              </g>

              {/* Bubble 3: Below node 5 */}
              <g>
                <ellipse cx="900" cy="425" rx="140" ry="35" fill="url(#bubbleGradient)" stroke="#2563eb" strokeWidth="2" filter="url(#nodeShadow)"/>
                <text x="900" y="430" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">
                  变化：提供标准工具支持
                </text>
              </g>

              {/* Nodes */}
              {nodes.map((node) => (
                <g key={node.id}>
                  {/* Main node */}
                  <rect
                    x={node.x - 60}
                    y={node.y - 52}
                    width="120"
                    height="104"
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
                    cy={node.y - 30}
                    r="16"
                    fill="white"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                    filter="url(#nodeShadow)"
                  />
                  
                  {/* Number text */}
                  <text
                    x={node.x}
                    y={node.y - 24}
                    textAnchor="middle"
                    fill={node.numberColor}
                    fontSize="16"
                    fontWeight="700"
                  >
                    {node.number}
                  </text>
                  
                  {/* Node name */}
                  <text
                    x={node.x}
                    y={node.y + 10}
                    textAnchor="middle"
                    fill="white"
                    fontSize="20"
                    fontWeight="600"
                  >
                    {node.name}
                  </text>
                  
                  {/* Node description */}
                  <text
                    x={node.x}
                    y={node.y + 30}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.9)"
                    fontSize="14"
                    fontWeight="500"
                  >
                    {node.desc}
                  </text>
                </g>
              ))}

              {/* Flow labels */}
              <text x="275" y="115" textAnchor="middle" fill="#6b7280" fontSize="13" fontWeight="600">开始</text>
              <text x="525" y="115" textAnchor="middle" fill="#6b7280" fontSize="13" fontWeight="600">提交</text>
              <text x="925" y="115" textAnchor="middle" fill="#6b7280" fontSize="13" fontWeight="600">低风险</text>
              <text x="780" y="210" textAnchor="middle" fill="#6b7280" fontSize="13" fontWeight="600">高风险</text>
              <text x="1050" y="275" textAnchor="middle" fill="#6b7280" fontSize="13" fontWeight="600">通过</text>
              <text x="1050" y="380" textAnchor="middle" fill="#6b7280" fontSize="13" fontWeight="600">不通过</text>
              <text x="1160" y="210" textAnchor="middle" fill="#6b7280" fontSize="13" fontWeight="600">通过</text>
              <text x="1325" y="275" textAnchor="middle" fill="#6b7280" fontSize="13" fontWeight="600">不通过</text>
              <text x="1320" y="200" textAnchor="middle" fill="#6b7280" fontSize="13" fontWeight="600">通过</text>
              <text x="1325" y="380" textAnchor="middle" fill="#6b7280" fontSize="13" fontWeight="600">不通过</text>
            </svg>
          </div>
        </div>
      </div>

      {/* FK能力变化 */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">FK能力变化</h2>
            <span className="text-gray-600 text-base">防御型策略 → 多维度策略（防御 + 套利 + 作弊），既降低系统直接出款错误风险，又为人工审核提供强制提醒与决策支持</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
        
        {/* 玩家风险防控 */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200 shadow-md mb-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">玩家风险防控能力变化</h4>
                <div className="flex items-center space-x-6">
                  <div className="text-base font-semibold text-blue-600">主要资源在这个方向，变化比较大，持续落地中</div>                 
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 防御型规则 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h5 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mr-3 shadow-sm"></div>防御型规则
              </h5>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">账户安全类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">敏感信息变更</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-blue-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">帐变记录异常</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-yellow-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">睡眠账号激活</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-blue-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">提款环境异常</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-blue-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">租卖帐号异常</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-yellow-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">盈利监控类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">高盈利金额</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-blue-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">高盈利倍数</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-blue-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">大额类提款</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-blue-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">长期在盈利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-yellow-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">内控监控类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">前几次提款</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-yellow-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">多次不经过人工</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-yellow-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">特殊上分类型</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-blue-600">运行中</span></span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 font-semibold text-xs">没变</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 套利型规则 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h5 className="text-xl font-bold text-green-800 mb-6 flex items-center">
                <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-green-600 rounded-lg mr-3 shadow-sm"></div>套利型规则
              </h5>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">游戏套利类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">电子套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-orange-600">试运行</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">真人套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-orange-600">试运行</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">体育套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-yellow-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">棋牌套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-orange-600">试运行</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">彩票套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-yellow-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">电竞套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">方案中</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">红利活动类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">活动金额</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-blue-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">活动比例</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-blue-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">活动类型</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-yellow-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">游戏作弊类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">机器下注</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-yellow-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">算牌下注</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-orange-600">试运行</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">场馆多钱</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-orange-600">试运行</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 内控风险监控 */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200 shadow-md mt-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">内控风险监控能力变化</h4>
                <div className="flex items-center space-x-6">
                  <div className="text-base font-semibold text-blue-600">在以下高危场景进行优化升级</div>                  
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 防御型规则 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h5 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mr-3 shadow-sm"></div>信息安全
              </h5>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">泄漏风控标签和备注</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-blue-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">敏感信息密文查询</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-yellow-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">风控参数动态调整</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-orange-600">试运行</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 违规操作 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h5 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mr-3 shadow-sm"></div>违规操作
              </h5>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">出款不看标签和备注</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-blue-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">会员禁用流程升级</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-yellow-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="font-bold text-gray-800 text-base mb-2">高危参数修改监控</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-orange-600">试运行</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 代理风险监控 */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200 shadow-md mt-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">代理风险监控能力变化</h4>
                <div className="flex items-center space-x-6">
                  <div className="text-base font-semibold text-blue-600">Q3在这个方向的投入资源较少，Q4会作为主要方向升级</div>                  
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 佣金审核 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h5 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mr-3 shadow-sm"></div>代理佣金审核流程升级
              </h5>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">方案中</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
  
                  </div>
                </div>
              </div>
            </div>

            {/* 关联网络分析 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h5 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mr-3 shadow-sm"></div>代理质量自动化分析
              </h5>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">方案中</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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