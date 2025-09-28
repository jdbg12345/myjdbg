import React from 'react';
import { Shield, Users, Zap, BarChart3, TrendingUp, Award, CheckCircle, Clock } from 'lucide-react';

export const FKSystemOverview = () => {
   const nodes = [
    { id: 1, x: 150, y: 130, name: "系统自动预警/打标", desc: "风险识别", color: "#f97316", number: "1" },
    { id: 2, x: 400, y: 130, name: "申请提交", desc: "玩家/代理提款申请", color: "#3b82f6", number: "2" },
    { id: 3, x: 650, y: 130, name: "AI智能审核", desc: "多维度风险实时检测", color: "#3b82f6", number: "3" },
    { id: 4, x: 1200, y: 130, name: "自动放行", desc: "即时到账", color: "#10b981", number: "4" },
    { id: 5, x: 900, y: 290, name: "人工复审", desc: "专业FK二次审核", color: "#3b82f6", number: "5" },
    { id: 6, x: 1200, y: 290, name: "系统监控", desc: "持续监控", color: "#f97316", number: "6" },
    { id: 7, x: 1450, y: 290, name: "内控复审", desc: "最终审核", color: "#f97316", number: "7" },
    { id: 8, x: 1200, y: 450, name: "审核拒绝", desc: "拒绝提款", color: "#ef4444", number: "8" }
  ];

  
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">
          3.2 FKZX-FK体系概览
        </h1>
  
        {/* 2.2 FK流程变化 */}
        <div className="mb-16">
          <div className="bg-white rounded-lg p-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">2.2</div>
              <h3 className="text-2xl font-bold text-gray-800">FK流程变化</h3>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-2xl font-bold text-gray-800">智能FK流程</h4>
            </div>

            <div className="bg-white rounded-lg p-8 mb-6">
                  <svg 
            viewBox="0 0 1600 550" 
            className="w-full h-[550px] min-w-[1200px]"
          >
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

            {/* 缩小后的节点坐标 */}
            {[
              { id: 1, x: 100, y: 130, name: "系统自动预警/打标", desc: "风险识别", color: "#f97316", number: "1" },
              { id: 2, x: 250, y: 130, name: "申请提交", desc: "玩家/代理提款申请", color: "#3b82f6", number: "2" },
              { id: 3, x: 400, y: 130, name: "AI智能审核", desc: "多维度风险实时检测", color: "#3b82f6", number: "3" },
              { id: 4, x: 700, y: 130, name: "自动放行", desc: "即时到账", color: "#10b981", number: "4" },
              { id: 5, x: 500, y: 290, name: "人工复审", desc: "专业FK二次审核", color: "#3b82f6", number: "5" },
              { id: 6, x: 600, y: 290, name: "系统监控", desc: "持续监控", color: "#f97316", number: "6" },
              { id: 7, x: 700, y: 290, name: "内控复审", desc: "最终审核", color: "#f97316", number: "7" },
              { id: 8, x: 600, y: 450, name: "审核拒绝", desc: "拒绝提款", color: "#ef4444", number: "8" }
            ].map((node) => (
              <g key={node.id}>
                <rect
                  x={node.x - 58}
                  y={node.y - 50}
                  width="116"
                  height="100"
                  rx="12"
                  ry="12"
                  fill={node.color}
                />
                <text
                  x={node.x}
                  y={node.y - 10}
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
                >
                  {node.name}
                </text>
                <text
                  x={node.x}
                  y={node.y + 15}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.8)"
                  fontSize="12"
                >
                  {node.desc}
                </text>
              </g>
            ))}

            {/* 连接线：根据缩放后的坐标重新绘制 */}
            <path d="M160,130 L240,130" stroke="#3b82f6" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-blue)" />
            <path d="M260,130 L380,130" stroke="#3b82f6" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-blue)" />
            <path d="M420,130 L680,130" stroke="#10b981" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-green)" />
            <path d="M400,170 Q450,230 500,270" stroke="#3b82f6" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-blue)" />
            <path d="M520,290 L580,290" stroke="#f97316" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-orange)" />
            <path d="M600,320 Q600,390 600,430" stroke="#ef4444" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-red)" />
            <path d="M620,290 L680,130" stroke="#10b981" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-green)" />

          </svg>
            </div>
          </div>
        </div>
                

        {/* 2.3 FK能力变化 */}
        <div className="mb-8">
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
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h6 className="font-semibold text-gray-700 mb-3">盈利监控类</h6>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">高盈利提款</span>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">高盈利倍数</span>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">累计大额提款</span>
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
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h6 className="font-semibold text-gray-700 mb-3">红利活动类</h6>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">特殊活动</span>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">活动套利</span>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">重复参与</span>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
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
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>代理行为监控
                  </h5>
                  <div className="space-y-4">
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h6 className="font-semibold text-gray-700 mb-3">推广行为类</h6>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">异常推广渠道</span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">虚假推广</span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h6 className="font-semibold text-gray-700 mb-3">佣金管理类</h6>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">异常佣金模式</span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">佣金套利</span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 关联网络分析 */}
                <div className="bg-white rounded-xl p-6 border border-purple-100">
                  <h5 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>关联网络分析
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
        </div>

      </div>
    </div>
  );
};
