import React from 'react';
import { Shield, Users, Zap, BarChart3, TrendingUp, Award, CheckCircle, Clock } from 'lucide-react';
import { Direction1PersonnelCapability } from './pilot/Direction1PersonnelCapability';
import { Direction3SystemStrategies } from './pilot/Direction3SystemStrategies';

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

        {/* 防御型规则 */}
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">防御型规则</h3>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 text-base leading-relaxed">
              无论玩家有没有问题，达到了对应的数据，就要拦截；存在有问题的玩家规避绕过的风险
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h4 className="font-semibold text-blue-700">账户安全类</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-增强</span>
                    <span>敏感信息变更</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-600">已上线</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-新增</span>
                    <span>帐变记录异常</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-600">开发中</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-新增</span>
                    <span>睡眠账号激活</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-600">开发中</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-新增</span>
                    <span>提款环境异常</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-600">开发中</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-新增</span>
                    <span>租卖帐号异常</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-600">开发中</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h4 className="font-semibold text-blue-700">盈利监控类</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-增强</span>
                    <span>高盈利金额</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-600">已上线</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-增强</span>
                    <span>高盈利倍数</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-600">已上线</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-增强</span>
                    <span>大额类提款</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-600">已上线</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-新增</span>
                    <span>长期在盈利</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-600">开发中</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h4 className="font-semibold text-blue-700">内控监控类</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-增强</span>
                    <span>前几次提款需要人工</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-600">开发中</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-增强</span>
                    <span>多次不经过人工</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-600">开发中</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">Q3-没变</span>
                    <span>特殊上分类型</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-600">运行中</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 套利类型规则 */}
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">套利类型规则</h3>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 text-base leading-relaxed">
              补充各种套利、作弊类的策略，优化绕过人工审核直接出的错误
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h4 className="font-semibold text-blue-700">游戏套利类</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-新增</span>
                    <span>电子套利</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-600">已上线</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-新增</span>
                    <span>真人套利</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-600">已上线</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-新增</span>
                    <span>体育套利</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-600">开发中</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-新增</span>
                    <span>棋牌套利</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-600">已上线</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-新增</span>
                    <span>彩票套利</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-600">开发中</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q4-预计</span>
                    <span>电竞套利</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">方案中</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h4 className="font-semibold text-blue-700">红利活动类</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-增强</span>
                    <span>活动金额</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-600">已上线</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-增强</span>
                    <span>活动比例</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-600">已上线</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-增强</span>
                    <span>活动类型</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-600">已上线</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h4 className="font-semibold text-blue-700">游戏作弊类</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-新增</span>
                    <span>机器下注</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-600">Q3-开发中</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-新增</span>
                    <span>算牌下注</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-600">已上线</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-600">Q3-新增</span>
                    <span>场馆多钱</span>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-600">开发中</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-8">
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">变化详细说明</h2>
            <span className="text-gray-700 text-xl">从<span className="text-blue-600">派单策略、审核流程、系统策略、风控工具、极端情况</span>等方向进行全面升级</span>
          </div>
      </div>
      
      {/* 优化 */}
      <Direction1PersonnelCapability />
      
       {/* 内控问题优化 */}
      <Direction3SystemStrategies />
      
    </div>
  );
};