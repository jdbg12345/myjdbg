import React from 'react';
import { Shield, Users, Zap, BarChart3, TrendingUp, Award, CheckCircle, Clock } from 'lucide-react';

export const FKSystemOverview = () => {
   const nodes = [
    { id: 1, x: 150, y: 130, name: "系统预警", desc: "", color: "#3b82f6", number: "1" },
    { id: 2, x: 400, y: 130, name: "申请提交", desc: "", color: "#3b82f6", number: "2" },
    { id: 3, x: 650, y: 130, name: "系统审核", desc: "", color: "#3b82f6", number: "3" },
    { id: 4, x: 1200, y: 130, name: "审核通过", desc: "", color: "#3b82f6", number: "4" },
    { id: 5, x: 900, y: 290, name: "人工复审", desc: "", color: "#3b82f6", number: "5" },
    { id: 6, x: 1200, y: 290, name: "系统监控", desc: "", color: "#f97316", number: "6" },
    { id: 7, x: 1450, y: 290, name: "内控复审", desc: "", color: "#f97316", number: "7" },
    { id: 8, x: 1200, y: 450, name: "审核拒绝", desc: "", color: "#3b82f6", number: "8" }
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
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">FK流程变化</h2>
          <span className="text-gray-600 text-lg">单人可出款 → 多环节监控 + 内控的抽检，防内外串联风险</span>
        </div>

        <div className="bg-white rounded-lg p-8 border border-blue-200">
          <div className="flex justify-center">
            <svg viewBox="0 0 1600 550" className="w-full max-w-6xl h-[400px]">
              <defs>
                <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                </marker>
                <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#f97316" />
                </marker>
                <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                </marker>
                <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                </marker>
              </defs>

              {/* Connection lines */}
              {/* 1→2 */}
              <path d="M210,130 L340,130" stroke="#3b82f6" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-blue)" />
              
              {/* 2→3 */}
              <path d="M460,130 L590,130" stroke="#3b82f6" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-blue)" />
              
              {/* 3→4 (直接通过) */}
              <path d="M710,130 L1140,130" stroke="#10b981" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-green)" />
              
              {/* 3→5 (需要审核) */}
              <path d="M650,170 Q750,230 840,290" stroke="#3b82f6" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-blue)" />
              
              {/* 5→6 (人工复审通过) */}
              <path d="M960,290 L1140,290" stroke="#10b981" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-green)" />
              
              {/* 5→8 (人工复审不通过) */}
              <path d="M900,340 Q1000,395 1140,450" stroke="#ef4444" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-red)" />
              
              {/* 6→4 (系统监控通过) - 调整箭头终点避免重叠 */}
              <path d="M1200,238 L1200,182" stroke="#f97316" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-orange)" />
              
              {/* 6→7 */}
              <path d="M1260,290 L1390,290" stroke="#f97316" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-orange)" />

              {/* 7→4 (内控复审通过) */}
              <path d="M1450,238 Q1350,185 1262,130" stroke="#10b981" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-green)" />
              
              {/* 7→8 (内控复审不通过) */}
              <path d="M1450,342 Q1350,395 1262,450" stroke="#ef4444" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-red)" />

              {/* Nodes */}
              {nodes.map((node) => (
                <g key={node.id}>
                  {/* Node shadow */}
                  <rect
                    x={node.x - 58}
                    y={node.y - 50}
                    width="116"
                    height="100"
                    rx="12"
                    ry="12"
                    fill="rgba(0,0,0,0.2)"
                    transform="translate(3,3)"
                  />
                  
                  {/* Main node */}
                  <rect
                    x={node.x - 60}
                    y={node.y - 52}
                    width="120"
                    height="104"
                    rx="12"
                    ry="12"
                    fill={node.color}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                  />
                  
                  {/* Number circle */}
                  <circle
                    cx={node.x}
                    cy={node.y - 30}
                    r="15"
                    fill="rgba(255,255,255,0.95)"
                  />
                  
                  {/* Number text */}
                  <text
                    x={node.x}
                    y={node.y - 24}
                    textAnchor="middle"
                    fill={node.color}
                    fontSize="16"
                    fontWeight="bold"
                  >
                    {node.number}
                  </text>
                  
                  {/* Node name */}
                  <text
                    x={node.x}
                    y={node.y + 5}
                    textAnchor="middle"
                    fill="white"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    {node.name}
                  </text>
                  
                  {/* Node description */}
                  <text
                    x={node.x}
                    y={node.y + 28}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.8)"
                    fontSize="12"
                  >
                    {node.desc}
                  </text>
                </g>
              ))}

              {/* Flow labels - 重新定位避免重叠 */}
              <text x="275" y="115" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">开始</text>
              <text x="525" y="115" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">提交</text>
              <text x="925" y="115" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">低风险</text>
              <text x="745" y="210" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">高风险</text>
              <text x="1050" y="275" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">通过</text>
              <text x="1000" y="420" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">不通过</text>
              <text x="1160" y="210" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">通过</text>
              <text x="1325" y="275" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">内控</text>
              <text x="1320" y="200" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">通过</text>
              <text x="1320" y="430" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">不通过</text>
            </svg>
          </div>
        </div>
      </div>

      {/* FK能力变化 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">FK能力变化</h2>
          <span className="text-gray-600 text-base">防御型策略 → 多维度策略（防御 + 套利 + 作弊），降低系统出款风险</span>
        </div>
        
        <div className="bg-white rounded-lg p-8 border border-blue-200">
        
        {/* 玩家风险防控 */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200 mb-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">玩家风险防控</h4>
                <div className="flex items-center space-x-6">
                  <div className="text-lg font-bold text-blue-600">Q1-Q3主要资源在这个方向，目前整体框架已有，逐步落地中</div>                 
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 防御型规则 */}
            <div className="bg-white rounded-xl p-6 border border-blue-100">
              <h5 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>防御型规则
              </h5>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">账户安全类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">敏感信息变更</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-blue-600 text-sm">已上线</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">帐变记录异常</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-yellow-600 text-sm">开发中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">睡眠账号激活</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-blue-600 text-sm">已上线</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">提款环境异常</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-blue-600 text-sm">已上线</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">租卖帐号异常</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-yellow-600 text-sm">开发中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">盈利监控类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">高盈利金额</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-blue-600 text-sm">已上线</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">高盈利倍数</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-blue-600 text-sm">已上线</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">大额类提款</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-blue-600 text-sm">已上线</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">长期在盈利</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-yellow-600 text-sm">开发中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">内控监控类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">前几次提款</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-yellow-600 text-sm">开发中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">多次不经过人工</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-yellow-600 text-sm">开发中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">特殊上分类型</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-blue-600 text-sm">运行中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 font-bold text-sm">没变</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 套利型规则 */}
            <div className="bg-white rounded-xl p-6 border border-green-100">
              <h5 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>套利型规则
              </h5>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">游戏套利类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">电子套利</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-orange-600 text-sm">试运行</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">真人套利</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-orange-600 text-sm">试运行</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">体育套利</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-yellow-600 text-sm">开发中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">棋牌套利</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-orange-600 text-sm">试运行</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">彩票套利</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-yellow-600 text-sm">开发中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">电竞套利</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-gray-600 text-sm">方案中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">红利活动类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">活动金额</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-blue-600 text-sm">已上线</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">活动比例</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-blue-600 text-sm">已上线</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">活动类型</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-yellow-600 text-sm">开发中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">增强</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">游戏作弊类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">机器下注</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-yellow-600 text-sm">开发中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">算牌下注</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-orange-600 text-sm">试运行</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">场馆多钱</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-orange-600 text-sm">试运行</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 内控风险监控 */}
        <div className="bg-blue-50 rounded-xl p-8 border border-blue-200 mt-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-blue-500 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">内控风险监控</h4>
                <div className="flex items-center space-x-6">
                  <div className="text-lg font-bold text-blue-600">部分资源在这个方向，在几个维度进行完善</div>                  
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 防御型规则 */}
            <div className="bg-white rounded-xl p-6 border border-blue-100">
              <h5 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>信息安全
              </h5>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">信息安全类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">泄漏风控标签和备注</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-blue-600 text-sm">已上线</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">敏感信息密文查询</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-yellow-600 text-sm">开发中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">风控参数动态调整</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-orange-600 text-sm">试运行</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 违规操作 */}
            <div className="bg-white rounded-xl p-6 border border-blue-100">
              <h5 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>违规操作
              </h5>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">游戏套利类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">出款不看标签和备注</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-blue-600 text-sm">已上线</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">会员禁用流程升级</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-yellow-600 text-sm">开发中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">高危参数修改监控</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-orange-600 text-sm">试运行</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 代理网络监控 */}
        <div className="bg-blue-50 rounded-xl p-8 border border-blue-200 mt-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-blue-500 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">代理网络监控</h4>
                <div className="flex items-center space-x-6">
                  <div className="text-lg font-bold text-blue-600">Q3在这个方向的建设上资源较少，Q4会作为主要方向升级</div>                  
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 佣金审核 */}
            <div className="bg-white rounded-xl p-6 border border-blue-100">
              <h5 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>佣金审核
              </h5>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">审核流程</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-gray-600 text-sm">方案中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">代理质量</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-gray-600 text-sm">方案中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 关联网络分析 */}
            <div className="bg-white rounded-xl p-6 border border-blue-100">
              <h5 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>关联网络
              </h5>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">关联图谱</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-gray-600 text-sm">方案中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <div className="font-semibold text-gray-800 text-sm mb-1">设备指纹</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">状态：<span className="font-bold text-gray-600 text-sm">方案中</span></span>
                        <span className="text-gray-600">Q3变化：<span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">新增</span></span>
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