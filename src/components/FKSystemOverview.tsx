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
          3.2 会员风控变化说明
        </h1>
      </div>

      {/* FK流程变化 */}
      <div className="mb-16">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">会员FK流程变化</h2>
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
            <h2 className="text-3xl font-bold text-gray-900">会员FK能力变化</h2>
            <span className="text-gray-700 text-xl">会员侧：<span className="text-blue-600">防御型策略 → 多维度策略（防御+套利+作弊）</span>，降低系统直接出款错误风险；内控侧：<span className="text-blue-600">增强了违规管控能力</span></span>
          </div>
        </div>

        <div className="bg-white rounded p-8 border-2 border-gray-200">
                 
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
              <div className="text-lg text-gray-600 mb-4">基于<span className="text-blue-600">盈利贡献、下级质量、风险评估</span>三个维度，自动化计算代理的有效贡献度分数，实现精准监控</div>
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
              <div className="text-sm opacity-90">50%权重</div>
            </div>
            {/* 第二行：子指标 */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">贡献净盈利</div>
                <div className="text-xs text-gray-600 mt-1">25%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">投入产出比</div>
                <div className="text-xs text-gray-600 mt-1">10%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">贡献持续度</div>
                <div className="text-xs text-gray-600 mt-1">10%</div>
              </div>
            </div>
          </div>

          {/* 第三列：下级质量 */}
          <div className="space-y-3">
            {/* 第一行：标题 */}
            <div className="bg-blue-600 text-white p-4 rounded text-center">
              <div className="text-base font-semibold">下级质量</div>
              <div className="text-sm opacity-90">30%权重</div>
            </div>
            {/* 第二行：子指标 */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">一次性会员</div>
                <div className="text-xs text-gray-600 mt-1">-10%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">贡献集中度</div>
                <div className="text-xs text-gray-600 mt-1">-5%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">新客贡献度</div>
                <div className="text-xs text-gray-600 mt-1">5%</div>
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
                <div className="text-xs text-gray-600 mt-1">-10%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">负盈利风险</div>
                <div className="text-xs text-gray-600 mt-1">-10%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">下级风险度</div>
                <div className="text-xs text-gray-600 mt-1">-10%</div>
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
          <h3 className="text-2xl font-bold text-gray-800">有效贡献度呈现效果</h3>
          <span className="text-gray-600 text-lg">快速区分优质代理与劣质代理，实现精准监控与管理</span>
        </div>

        {/* 代理列表 */}
        <div className="space-y-4">
          {[
            {
                id: '#3Y218350',
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
                gradeColor: 'text-yellow-600 bg-yellow-50'
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
              <div className="mt-2 text-2xl font-bold text-green-600">{agent.userQuality}</div>
            </div>

            {/* 第四列：风险评估 */}
            <div className="col-span-1">
              <div className="text-sm text-gray-500">风险评估</div>
              <div className="mt-2 text-2xl font-bold text-orange-600">{agent.riskControl}</div>
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
                <span className="font-semibold text-gray-800">—</span>
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
                <span className="font-semibold text-gray-800">—</span>
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
                <span className="font-semibold text-gray-800">—</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">下级风险度</span>
                <span className="font-semibold text-gray-800">—</span>
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