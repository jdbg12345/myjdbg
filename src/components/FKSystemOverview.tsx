import React from 'react';
import { Shield, Users, Zap, BarChart3, TrendingUp, Award, CheckCircle, Clock } from 'lucide-react';

export const FKSystemOverview = () => {
   const nodes = [
    { id: 1, x: 150, y: 130, name: "系统预警", desc: "", color: "#9ca3af", numberColor: "#9ca3af", number: "1" },
    { id: 2, x: 400, y: 130, name: "申请提交", desc: "", color: "#9ca3af", numberColor: "#9ca3af", number: "2" },
    { id: 3, x: 650, y: 130, name: "系统审核", desc: "", color: "#9ca3af", numberColor: "#9ca3af", number: "3" },
    { id: 4, x: 1200, y: 130, name: "出款放行", desc: "", color: "#10b981", numberColor: "#10b981", number: "4" },
    { id: 5, x: 900, y: 290, name: "人工审核", desc: "", color: "#9ca3af", numberColor: "#9ca3af", number: "5" },
    { id: 6, x: 1200, y: 290, name: "系统管控", desc: "", color: "#3b82f6", numberColor: "#3b82f6", number: "6" },
    { id: 7, x: 1450, y: 290, name: "内控复审", desc: "", color: "#3b82f6", numberColor: "#3b82f6", number: "7" },
    { id: 8, x: 1200, y: 450, name: "出款拒绝", desc: "", color: "#ef4444", numberColor: "#ef4444", number: "8" }
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
          <span className="text-gray-600 text-lg">单人可出款 → 多环节的监控 + 触发内控抽检，防内外串联风险</span>
        </div>

        <div className="bg-white rounded-lg p-8 border border-blue-200">
          <div className="flex justify-center">
            <svg viewBox="0 0 1600 550" className="w-full max-w-6xl h-[450px]">
              <defs>
                <marker id="arrowhead-gray" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
                </marker>
              </defs>

              {/* Connection lines */}
              {/* 1→2 */}
              <path d="M210,130 L340,130" stroke="#9ca3af" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 2→3 */}
              <path d="M460,130 L590,130" stroke="#9ca3af" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 3→4 (直接通过) */}
              <path d="M710,130 L1140,130" stroke="#9ca3af" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 3→5 (需要审核) */}
              <path d="M650,170 Q750,230 840,290" stroke="#9ca3af" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 5→6 (人工复审通过) */}
              <path d="M960,290 L1140,290" stroke="#9ca3af" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 5→8 (人工复审不通过) */}
              <path d="M900,340 Q1000,395 1140,450" stroke="#9ca3af" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 6→4 (系统监控通过) - 调整箭头终点避免重叠 */}
              <path d="M1200,238 L1200,182" stroke="#9ca3af" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 6→7 */}
              <path d="M1260,290 L1390,290" stroke="#9ca3af" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />

              {/* 7→4 (内控复审通过) */}
              <path d="M1450,238 Q1350,185 1262,130" stroke="#9ca3af" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              
              {/* 7→8 (内控复审不通过) */}
              <path d="M1450,342 Q1350,395 1262,450" stroke="#9ca3af" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />

              {/* Bubble 1: Between 3 and 4 */}
              <g>
                <ellipse cx="925" cy="50" rx="140" ry="30" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3"/>
                <text x="925" y="55" textAnchor="middle" fill="#3b82f6" fontSize="16" fontWeight="bold">
                  变化：增加套利作弊等拦截策略
                </text>
              </g>

              {/* Bubble 2: Between 3 and 5 */}
              <g>
                <ellipse cx="720" cy="380" rx="130" ry="30" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3"/>
                <text x="720" y="385" textAnchor="middle" fill="#3b82f6" fontSize="16" fontWeight="bold">
                  变化：升级为按分数和金额派单
                </text>
              </g>

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
                    y={node.y - 25}
                    textAnchor="middle"
                    fill={node.numberColor}
                    fontSize="16"
                    fontWeight="bold"
                  >
                    {node.number}
                  </text>
                  
                  {/* Node name */}
                  <text
                    x={node.x}
                    y={node.y + 15}
                    textAnchor="middle"
                    fill="white"
                    fontSize="20"
                    fontWeight="bold"
                  >
                    {node.name}
                  </text>
                  
                  {/* Node description */}
                  <text
                    x={node.x}
                    y={node.y + 32}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.8)"
                    fontSize="14"
                  >
                    {node.desc}
                  </text>
                </g>
              ))}

              {/* Flow labels */}
              <text x="275" y="115" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="bold">开始</text>
              <text x="525" y="115" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="bold">提交</text>
              <text x="925" y="115" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="bold">低风险</text>
              <text x="745" y="210" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="bold">高风险</text>
              <text x="1050" y="275" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="bold">通过</text>
              <text x="1050" y="380" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="bold">不通过</text>
              <text x="1160" y="210" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="bold">通过</text>
              <text x="1325" y="275" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="bold">不通过</text>
              <text x="1320" y="200" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="bold">通过</text>
              <text x="1325" y="380" textAnchor="middle" fill="#9ca3af" fontSize="12" fontWeight="bold">不通过</text>
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
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <h5 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>防御型规则
              </h5>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-5">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">账户安全类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">敏感信息变更</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-blue-600 text-base">已上线</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">帐变记录异常</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-yellow-600 text-base">开发中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">睡眠账号激活</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-blue-600 text-base">已上线</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">提款环境异常</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-blue-600 text-base">已上线</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">租卖帐号异常</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-yellow-600 text-base">开发中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-5">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">盈利监控类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">高盈利金额</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-blue-600 text-base">已上线</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-base">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">高盈利倍数</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-blue-600 text-base">已上线</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-base">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">大额类提款</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-blue-600 text-base">已上线</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-base">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">长期在盈利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-yellow-600 text-base">开发中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-5">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">内控监控类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">前几次提款</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-yellow-600 text-base">开发中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-base">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">多次不经过人工</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-yellow-600 text-base">开发中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-base">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">特殊上分类型</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-blue-600 text-base">运行中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-bold text-base">没变</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 套利型规则 */}
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <h5 className="text-xl font-bold text-green-800 mb-6 flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>套利型规则
              </h5>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-5">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">游戏套利类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">电子套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-orange-600 text-base">试运行</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">真人套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-orange-600 text-base">试运行</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">体育套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-yellow-600 text-base">开发中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">棋牌套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-orange-600 text-base">试运行</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">彩票套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-yellow-600 text-base">开发中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">电竞套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-gray-600 text-base">方案中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-5">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">红利活动类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">活动金额</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-blue-600 text-base">已上线</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-base">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">活动比例</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-blue-600 text-base">已上线</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-base">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">活动类型</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-yellow-600 text-base">开发中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-base">增强</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-5">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">游戏作弊类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">机器下注</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-yellow-600 text-base">开发中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">算牌下注</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-orange-600 text-base">试运行</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-base">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">场馆多钱</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-orange-600 text-base">试运行</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
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
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <h5 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>信息安全
              </h5>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-5">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">信息安全类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">泄漏风控标签和备注</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-blue-600 text-base">已上线</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">敏感信息密文查询</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-yellow-600 text-base">开发中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">风控参数动态调整</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-orange-600 text-base">试运行</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 违规操作 */}
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <h5 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>违规操作
              </h5>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-5">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg">游戏套利类</h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">出款不看标签和备注</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-blue-600 text-base">已上线</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">会员禁用流程升级</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-yellow-600 text-base">开发中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">高危参数修改监控</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-orange-600 text-base">试运行</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
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
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <h5 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>佣金审核
              </h5>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-5">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">审核流程</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-gray-600 text-base">方案中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">代理质量</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-gray-600 text-base">方案中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 关联网络分析 */}
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <h5 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>关联网络
              </h5>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-5">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">关联图谱</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-gray-600 text-base">方案中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-base">增强</span></span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-bold text-gray-800 text-base mb-2">设备指纹</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">状态：<span className="font-bold text-gray-600 text-base">方案中</span></span>
                        <span className="text-gray-600 text-sm">Q3变化：<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-base">新增</span></span>
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