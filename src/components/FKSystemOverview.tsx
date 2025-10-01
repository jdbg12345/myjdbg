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
          3.2 试点说明
        </h1>
      </div>

      {/* FK流程变化 */}
      <div className="mb-16">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">FK流程变化</h2>
            <span className="text-gray-700 text-xl"><span className="text-blue-600">单人可出款 → 出款监控（+6） + 内控抽检（+7），想违规出款，会非常难且风险大</span>，有效防内外串联</span>
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

      {/* FK能力变化 */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">FK能力变化</h2>
            <span className="text-gray-700 text-xl">会员侧：<span className="text-blue-600">防御型策略 → 多维度策略（防御+套利+作弊）</span>，降低系统直接出款错误风险；内控侧：<span className="text-blue-600">增强了违规管控能力</span></span>
          </div>
        </div>

        <div className="bg-white rounded p-8 border-2 border-gray-200">
        
        {/* 玩家风险防控 */}
          <div className="bg-blue-50 rounded p-6 border-l-4 border-blue-600 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded bg-blue-600 flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900">玩家风险防控能力变化</h4>
                <div className="text-lg font-semibold text-gray-700">主要资源在这个方向，增强了一些既有策略，更重要的新增【套利型】策略</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* 防御型规则 */}
            <div className="bg-white rounded p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded mr-3"></div>防御型规则
              </h5>
                 <div className="text-lg text-gray-600 mb-4">无论玩家有没有问题，达到了对应的数据，就要拦截；存在<span className="text-blue-600">有问题的玩家规避绕过的风险</span></div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h6 className="font-bold text-blue-800 mb-4 text-lg flex items-center">
                    <span className="text-blue-500 mr-2">1</span>
                    账户安全类
                  </h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">敏感信息变更</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">帐变记录异常</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">睡眠账号激活</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">提款环境异常</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">租卖帐号异常</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h6 className="font-bold text-blue-800 mb-4 text-lg flex items-center">
                    <span className="text-blue-500 mr-2">2</span>
                    盈利监控类
                  </h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">高盈利金额</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">高盈利倍数</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">大额类提款</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">长期在盈利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h6 className="font-bold text-blue-800 mb-4 text-lg flex items-center">
                    <span className="text-blue-500 mr-2">3</span>
                    内控监控类
                  </h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-5">
                      <div className="font-bold text-gray-800 text-base mb-2">前几次提款需要人工</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-5">
                      <div className="font-bold text-gray-800 text-base mb-2">多次不经过人工</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-5">
                      <div className="font-bold text-gray-800 text-base mb-2">特殊上分类型</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 font-semibold text-xs">没变</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 套利型规则 */}
            <div className="bg-white rounded p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded-lg mr-3"></div>套利型规则
              </h5>
                 <div className="text-lg text-gray-600 mb-4">补充各种<span className="text-blue-600">套利、作弊</span>类的策略，优化绕过人工审核直接出的错误</div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h6 className="font-bold text-blue-800 mb-4 text-lg flex items-center">
                    <span className="text-blue-600 mr-2">1</span>
                    游戏套利类
                  </h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">电子套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">真人套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">体育套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">棋牌套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">彩票套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">电竞套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-500">方案中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h6 className="font-bold text-blue-800 mb-4 text-lg flex items-center">
                    <span className="text-blue-500 mr-2">2</span>
                    红利活动类
                  </h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">活动金额</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">活动比例</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">活动类型</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">增强</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h6 className="font-bold text-blue-800 mb-4 text-lg flex items-center">
                    <span className="text-blue-500 mr-2">3</span>
                    游戏作弊类
                  </h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">机器下注</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">算牌下注</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">场馆多钱</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* 内控风险监控 */}
          <div className="bg-blue-50 rounded p-6 border-l-4 border-blue-600 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded bg-blue-600 flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900">内控风险监控能力变化</h4>
                <div className="text-lg font-semibold text-gray-700">在以下高危场景进行优化升级</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* 信息安全 */}
            <div className="bg-white rounded p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded mr-3"></div>
                信息安全
              </h5>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">风控标签和备注独立权限</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">敏感信息支持密文查询</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">风控策略参数动态调整</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 违规操作 */}
            <div className="bg-white rounded p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded mr-3"></div>
                违规操作
              </h5>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">出款必须看标签和备注</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">会员启禁用流程升级</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-600">开发中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">高危参数修改预警监控</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-green-600">已上线</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* 代理风险监控 */}
          <div className="bg-blue-50 rounded p-6 border-l-4 border-blue-600 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded bg-blue-600 flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900">代理风险监控能力变化</h4>
                <div className="text-lg font-semibold text-gray-700">Q3在这个方向的投入资源较少，Q4会作为主要方向升级</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 佣金审核 */}
            <div className="bg-white rounded p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded mr-3"></div>
                代理佣金审核流程升级
              </h5>
              <div className="text-lg text-gray-600 mb-4">针对<span className="text-blue-600">红利、打负、调整等情况设定策略</span>，触发则进入<span className="text-blue-600">复审机制</span>来控制违规行为，提升佣金有效性</div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-500">方案中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
  
                  </div>
                </div>
              </div>
            </div>

            {/* 代理质量分析 */}
            <div className="bg-white rounded p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded mr-3"></div>
                代理质量自动化分析
              </h5>
              <div className="text-lg text-gray-600 mb-4">定义<span className="text-blue-600">代理有效贡献度模</span>，进行全局监控，及时发现优质和劣质代理，进行后续针对性的调整措施</div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-semibold text-gray-500">方案中</span></span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 有效贡献度模型 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">📋</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">有效贡献度模型</h3>
          <span className="text-gray-600 text-lg">基于<span className="text-blue-600">盈利贡献、下级质量、风险评估</span>等多维度指标构建代理质量评估体系</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left font-semibold border-r border-blue-500">维度</th>
                <th className="p-4 text-left font-semibold border-r border-blue-500">子指标</th>
                <th className="p-4 text-left font-semibold border-r border-blue-500">说明</th>
                <th className="p-4 text-center font-semibold border-r border-blue-500">权重</th>
                <th className="p-4 text-center font-semibold">正向/负向</th>
              </tr>
            </thead>
            <tbody>
              {/* 盈利贡献维度 */}
              <tr className="border-b border-gray-100">
                <td rowSpan="4" className="p-4 font-bold text-center bg-blue-50 border-r border-gray-200 align-top">
                  <div className="text-blue-700 text-lg">盈利贡献</div>
                </td>
                <td className="p-4 font-semibold border-r border-gray-200">净盈利</td>
                <td className="p-4 text-gray-700 border-r border-gray-200">代理带来的净盈利（投注输赢 - 红利 - 返水 - 成本），考虑长期稳定性</td>
                <td className="p-4 text-center font-bold text-blue-600 border-r border-gray-200">25%</td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-600">正向</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-semibold border-r border-gray-200">投入产出比（ROI）</td>
                <td className="p-4 text-gray-700 border-r border-gray-200">平台投入资源（红利、奖励、运营成本）与代理贡献盈利比率</td>
                <td className="p-4 text-center font-bold text-blue-600 border-r border-gray-200">10%</td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-600">正向</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-semibold border-r border-gray-200">日常贡献</td>
                <td className="p-4 text-gray-700 border-r border-gray-200">停扶持后下级盈利表现是否稳定或提升（滑动周期评估，如3-6个月平均）</td>
                <td className="p-4 text-center font-bold text-blue-600 border-r border-gray-200">10%</td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-600">正向</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-semibold border-r border-gray-200">净盈利稳定性</td>
                <td className="p-4 text-gray-700 border-r border-gray-200">净盈利波动系数（CV），稳定性高加分</td>
                <td className="p-4 text-center font-bold text-blue-600 border-r border-gray-200">5%</td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-600">正向</span>
                </td>
              </tr>

              {/* 下级质量维度 */}
              <tr className="border-b border-gray-100">
                <td rowSpan="5" className="p-4 font-bold text-center bg-blue-50 border-r border-gray-200 align-top">
                  <div className="text-blue-700 text-lg">下级质量</div>
                </td>
                <td className="p-4 font-semibold border-r border-gray-200">一次性会员占比</td>
                <td className="p-4 text-gray-700 border-r border-gray-200">低价值用户占比（结合留存率评估低价值风险）</td>
                <td className="p-4 text-center font-bold text-red-600 border-r border-gray-200">-10%</td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-600">负向</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-semibold border-r border-gray-200">大客户贡献占比</td>
                <td className="p-4 text-gray-700 border-r border-gray-200">高价值用户对代理净盈利的贡献占比</td>
                <td className="p-4 text-center font-bold text-blue-600 border-r border-gray-200">15%</td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-600">正向</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-semibold border-r border-gray-200">贡献集中度</td>
                <td className="p-4 text-gray-700 border-r border-gray-200">收益是否过度依赖少数下级（Top N占比 vs 下级数）</td>
                <td className="p-4 text-center font-bold text-red-600 border-r border-gray-200">-5%</td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-600">负向</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-semibold border-r border-gray-200">新用户贡献度</td>
                <td className="p-4 text-gray-700 border-r border-gray-200">近一段时间新增下级对总盈利贡献（结合活跃和留存加权）</td>
                <td className="p-4 text-center font-bold text-blue-600 border-r border-gray-200">5%</td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-600">正向</span>
                </td>
              </tr>
          

              {/* 风险评估维度 */}
              <tr className="border-b border-gray-100">
                <td rowSpan="3" className="p-4 font-bold text-center bg-blue-50 border-r border-gray-200 align-top">
                  <div className="text-blue-700 text-lg">风险评估</div>
                </td>
                <td className="p-4 font-semibold border-r border-gray-200">关联风险</td>
                <td className="p-4 text-gray-700 border-r border-gray-200">下级账号与高风险账号关联（按风险等级加权）</td>
                <td className="p-4 text-center font-bold text-red-600 border-r border-gray-200">-10%</td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-600">负向</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-semibold border-r border-gray-200">打负风险</td>
                <td className="p-4 text-gray-700 border-r border-gray-200">异常亏损/盈利比例（分级权重，高额异常权重大）</td>
                <td className="p-4 text-center font-bold text-red-600 border-r border-gray-200">-10%</td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-600">负向</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-semibold border-r border-gray-200">下级风险</td>
                <td className="p-4 text-gray-700 border-r border-gray-200">下级中被风控拦截比例（按违规类型和严重程度加权）</td>
                <td className="p-4 text-center font-bold text-red-600 border-r border-gray-200">-10%</td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-600">负向</span>
                </td>
              </tr>
  
            </tbody>
          </table>
        </div>

      </div>

      {/* 有效贡献度呈现效果展示 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">📊</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">有效贡献度呈现效果</h3>
          <span className="text-gray-600 text-lg">快速区分优质代理与劣质代理，实现精准监控与管理</span>
        </div>

        {/* 代理列表 */}
        <div className="space-y-4">
          {[
            {
              id: '#3Y218350',
              grade: 'C档 - 一般',
              site: ' Y8',
              joinDate: '2024-08-10',
              totalScore: 56,
              businessScore: 39,
              userQuality: 66,
              riskControl: 72,
              activeUsers: 586,
              validFlow: '¥46.8万',
              retention: '17%',
              riskUsers: '6%',
              gradeColor: 'text-yellow-600 bg-yellow-50'
            },
            {
              id: '#4Y116215',
              grade: 'C档 - 一般',
              site: ' Y1',
              joinDate: '2024-11-25',
              totalScore: 55,
              businessScore: 34,
              userQuality: 59,
              riskControl: 91,
              activeUsers: 231,
              validFlow: '¥44.6万',
              retention: '31%',
              riskUsers: '4%',
              gradeColor: 'text-yellow-600 bg-yellow-50'
            },
            {
              id: '#5Y455003',
              grade: 'C档 - 一般',
              site: ' Y3',
              joinDate: '2024-12-17',
              totalScore: 55,
              businessScore: 27,
              userQuality: 65,
              riskControl: 90,
              activeUsers: 325,
              validFlow: '¥37.4万',
              retention: '32%',
              riskUsers: '4%',
              gradeColor: 'text-yellow-600 bg-yellow-50'
            },
            {
              id: '#6Y567649',
              grade: 'C档 - 一般',
              site: 'Y4',
              joinDate: '2024-06-15',
              totalScore: 55,
              businessScore: 39,
              userQuality: 52,
              riskControl: 91,
              activeUsers: 876,
              validFlow: '¥64.8万',
              retention: '24%',
              riskUsers: '7%',
              gradeColor: 'text-yellow-600 bg-yellow-50'
            }
          ].map((agent, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-lg font-bold text-gray-800">{agent.id}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${agent.gradeColor}`}>
                      {agent.grade}
                    </span>
                    <span className="text-gray-600">{agent.site}</span>
                    <span className="text-gray-500">• 加入时间: {agent.joinDate}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* 综合贡献度分数 */}
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">{agent.totalScore}</div>
                      <div className="text-sm text-gray-600">综合分数</div>
                    </div>
                    
                    {/* 三个评分指标 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">盈利贡献</span>
                        <span className="font-semibold text-blue-600">{agent.businessScore}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">下级质量</span>
                        <span className="font-semibold text-green-600">{agent.userQuality}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">风险评估</span>
                        <span className="font-semibold text-orange-600">{agent.riskControl}</span>
                      </div>
                    </div>
                    
                    {/* 业务数据 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">月活用户:</span>
                        <span className="font-semibold">{agent.activeUsers}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">有效流水:</span>
                        <span className="font-semibold">{agent.validFlow}</span>
                      </div>
                       <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">净盈利:</span>
                        <span className="font-semibold">{agent.validFlow}</span>
                      </div>
                    </div>
                    
                    {/* 质量指标 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">:</span>
                        <span className="font-semibold">{agent.retention}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">风险用户:</span>
                        <span className="font-semibold">{agent.riskUsers}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};