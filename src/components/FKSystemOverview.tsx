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
          3.2 FKZX-FK体系概览
        </h1>
      </div>

      {/* 2.1 FK流程变化 */}
      <div className="mb-16">
        <div className="bg-white rounded-lg p-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">2.1</div>
            <h3 className="text-2xl font-bold text-gray-800">FK流程变化</h3>
          </div>
          <div className="text-gray-500 ml-11">单人可出款 → 多环节监控 + 内控的抽检，防内外串联风险。</div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
          <div className="bg-white rounded-lg p-8 mb-6">
            <svg viewBox="0 0 1600 550" className="w-full h-[550px] min-w-[1400px]">
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

      {/* 2.2 FK能力变化 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">2.2</div>
            <h3 className="text-2xl font-bold text-gray-800">FK能力变化</h3>
          </div>
          <div className="text-gray-500 ml-11">防御型策略 → 多维度策略（防御 + 套利 + 作弊），降低系统出款风险。</div>
        </div>
        
        {/* 玩家风险防控 */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">玩家风险防控</h4>
                <div className="flex items-center space-x-6">
                  <div className="text-3xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-500">完善度</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600 font-medium">+25%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 防御型规则 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-blue-100">
              <h5 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>防御型规则
              </h5>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">账户安全类</h6>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">敏感信息变更</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">帐变记录异常</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">睡眠账号激活</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                    </div>
                     <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">提款环境异常</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                    </div>
                     <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">新手账户防护</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">盈利监控类</h6>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">高盈利金额</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">高盈利倍数</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">大额类提款</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">-</span>
                    </div>
                     <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">长期在盈利</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">-</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">内控监控类</h6>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">前几次提款</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">多次不经过人工</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">特殊上分类型</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 套利型规则 */}
            <div className="bg-white rounded-xl p-6 border border-green-100">
              <h5 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>套利型规则
              </h5>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">游戏套利类</h6>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">电子套利</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">真人套利</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">体育套利</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                    </div>
                     <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">棋牌套利</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">彩票套利</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">电竞套利</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">红利活动类</h6>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">活动金额</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">活动比例</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">活动类型</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">游戏作弊类</h6>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">机器下注</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">算牌下注</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">场馆多钱</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 代理网络监控 */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 mt-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">代理网络监控</h4>
                <div className="flex items-center space-x-6">
                  <div className="text-3xl font-bold text-purple-600">72%</div>
                  <div className="text-sm text-gray-500">完善度</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600 font-medium">+15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 代理行为监控 */}
            <div className="bg-white rounded-xl p-6 border border-indigo-100">
              <h5 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>佣金审核
              </h5>
              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">审核流程</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">代理质量</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 关联网络分析 */}
            <div className="bg-white rounded-xl p-6 border border-purple-100">
              <h5 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>关联网络
              </h5>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">关联识别类</h6>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">多账号关联</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">设备指纹</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h6 className="font-semibold text-gray-700 mb-3">权限管理类</h6>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">权限异常</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">权限滥用</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
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