import React from 'react';
import { Shield, Users, Zap, BarChart3, TrendingUp, Award, CheckCircle, Clock } from 'lucide-react';

export const FKSystemOverview = () => {
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
                  <svg viewBox="0 0 1600 450" className="w-full h-[450px]">
                {/* 节点定义 */}
                {[
                  { id: 1, x: 100, y: 120, name: "系统自动预警/打标", desc: "风险识别", color: "#f97316" },
                  { id: 2, x: 350, y: 120, name: "申请提交", desc: "玩家/代理提款申请", color: "#3b82f6" },
                  { id: 3, x: 600, y: 120, name: "AI智能审核", desc: "多维度风险实时检测", color: "#3b82f6" },
                  { id: 4, x: 1500, y: 120, name: "自动放行", desc: "即时到账", color: "#3b82f6" },
                  { id: 5, x: 850, y: 300, name: "人工复审", desc: "专业FK二次审核", color: "#3b82f6" },
                  { id: 6, x: 1100, y: 300, name: "系统监控", desc: "持续监控", color: "#f97316" },
                  { id: 7, x: 1350, y: 300, name: "内控复审", desc: "最终审核", color: "#f97316" }
                ].map((node) => (
                  <g key={node.id}>
                    <rect
                      x={node.x - 60}
                      y={node.y - 40}
                      width={120}
                      height={80}
                      rx={10}
                      ry={10}
                      fill={node.color}
                      stroke="white"
                      strokeWidth="3"
                    />
                    <text x={node.x} y={node.y - 5} textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                      {node.name}
                    </text>
                    <text x={node.x} y={node.y + 20} textAnchor="middle" fill="#e5e7eb" fontSize="12">
                      {node.desc}
                    </text>
                  </g>
                ))}

                {/* 箭头定义 */}
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
                    <polygon points="0 0, 10 5, 0 10" fill="#6b7280" />
                  </marker>
                  <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
                    <polygon points="0 0, 10 5, 0 10" fill="#3b82f6" />
                  </marker>
                  <marker id="arrow-orange" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
                    <polygon points="0 0, 10 5, 0 10" fill="#f97316" />
                  </marker>
                  <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
                    <polygon points="0 0, 10 5, 0 10" fill="#ef4444" />
                  </marker>
                </defs>

                {/* 连接线 */}
                {/* 1→2 */}
                <path d="M160 120 L290 120" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-blue)" />
                {/* 2→3 */}
                <path d="M410 120 L540 120" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-blue)" />
                {/* 3→4 (通过) */}
                <path d="M660 120 Q1080 120 1420 120" stroke="#3b82f6" strokeWidth="3" fill="transparent" markerEnd="url(#arrow-blue)" />
                <text x={1040} y={100} textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="600">通过</text>
                {/* 3→5 (不通过) */}
                <path d="M600 145 Q725 180 850 280" stroke="#f97316" strokeWidth="3" fill="transparent" markerEnd="url(#arrow-orange)" />
                <text x={725} y={210} textAnchor="middle" fill="#f97316" fontSize="14" fontWeight="600">不通过</text>
                {/* 5→6 */}
                <path d="M910 300 L1070 300" stroke="#f97316" strokeWidth="3" fill="transparent" markerEnd="url(#arrow-orange)" />
                {/* 6→4 (监控通过) */}
                <path d="M1110 270 Q1300 200 1500 120" stroke="#3b82f6" strokeWidth="3" fill="transparent" markerEnd="url(#arrow-blue)" />
                <text x={1300} y={180} textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="600">监控通过</text>
                {/* 6→7 (监控不通过) */}
                <path d="M1110 330 Q1230 360 1350 300" stroke="#f97316" strokeWidth="3" fill="transparent" markerEnd="url(#arrow-orange)" />
                <text x={1230} y={320} textAnchor="middle" fill="#f97316" fontSize="14" fontWeight="600">监控不通过</text>
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
