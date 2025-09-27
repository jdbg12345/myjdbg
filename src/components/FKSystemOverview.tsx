import React from 'react';
import { Shield, Users, Zap, BarChart3, TrendingUp, Award, CheckCircle, Clock, Target, AlertTriangle, Calendar, Search } from 'lucide-react';

export const FKSystemOverview = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">3.2 FK体系概览</h1>
      </div>

      {/* 2.1 FK理念变化 */}
      <div className="mb-16">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">2.1</div>
          <h3 className="text-2xl font-bold text-gray-800">FK理念变化</h3>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 mb-8">
          <div className="text-center mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              构建以系统为核心、人工为辅助的智能FK防护体系，实现全流程自动化风险识别与控制
            </p>
            <div className="bg-white/80 rounded-xl p-6 inline-block">
              <p className="text-gray-800 text-lg leading-relaxed">
                在FK中，<span className="font-bold text-red-600">"人"是所有问题的根源</span>。长期目标是不依赖"人"，压缩人的操作比重与空间，由系统自动完成大部分判定，覆盖策略、流程、内控与预警。当人的执行结果与系统偏差超出预设范围时，会触发内控二次审核，提升FK质量与稳定性，构建高效可靠的防护体系，使违规者成本与风险极高、几乎无操作空间。
              </p>
            </div>
          </div>

          {/* 人与系统关系演进 */}
          <div className="mt-8">
            <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">人与系统关系演进</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 1.0阶段 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-gray-400 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">1.0阶段 过去状态</h4>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">人为绝对，系统只是简单的辅助工具</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    <span>人工决策：<strong className="text-gray-800">90%+</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-gray-400" />
                    <span>系统通过：<strong className="text-gray-800">90%+</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart3 className="w-4 h-4 mr-2 text-gray-400" />
                    <span>系统拒绝：<strong className="text-gray-800">0%（排除流水不足）</strong></span>
                  </div>
                </div>
              </div>

              {/* 2.0阶段 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">2.0阶段 当前目标</h4>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">系统为绝对，但是还是人来做最后决策</p>
                <div className="space-y-2">
                   <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    <span>人工决策：<strong className="text-gray-800">90%+</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-gray-400" />
                    <span>系统通过：<strong className="text-gray-800">90%+</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart3 className="w-4 h-4 mr-2 text-gray-400" />
                    <span>系统拒绝：<strong className="text-gray-800">0%（排除流水不足）</strong></span>
                  </div>
                </div>
              </div>

              {/* 3.0阶段 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">3.0阶段 理想状态</h4>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">人做决策的比例要大大降低</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    <span>人工决策：<strong className="text-gray-800">90%+</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-gray-400" />
                    <span>系统通过：<strong className="text-gray-800">90%+</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart3 className="w-4 h-4 mr-2 text-gray-400" />
                    <span>系统拒绝：<strong className="text-gray-800">0%（排除流水不足）</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* 2.2 FK流程变化 */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">2.2</div>
            <h3 className="text-2xl font-bold text-gray-800">FK流程变化</h3>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-2xl font-bold text-gray-800">智能FK流程</h4>
            </div>
            
            {/* SVG流程图 - 7个节点的横向流程 */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <svg viewBox="0 0 1200 300" className="w-full h-80">
                {/* 节点定义 */}
                {[
                  { id: 1, x: 100, y: 100, name: "系统自动预警/打标", desc: "风险识别", color: "#f97316" },
                  { id: 2, x: 250, y: 100, name: "申请提交", desc: "玩家/代理提款申请", color: "#3b82f6" },
                  { id: 3, x: 400, y: 100, name: "AI智能审核", desc: "多维度风险实时检测", color: "#10b981" },
                  { id: 4, x: 550, y: 100, name: "自动放行", desc: "即时到账", color: "#10b981" },
                  { id: 5, x: 350, y: 200, name: "人工复审", desc: "专业FK二次审核", color: "#f97316" },
                  { id: 6, x: 450, y: 200, name: "系统监控", desc: "持续监控", color: "#3b82f6" },
                  { id: 7, x: 550, y: 200, name: "内控复审", desc: "最终审核", color: "#ef4444" }
                ].map((node) => (
                  <g key={node.id}>
                    {/* 节点圆圈 */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="30"
                      fill={node.color}
                      stroke="white"
                      strokeWidth="3"
                    />
                    <text
                      x={node.x}
                      y={node.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="14"
                      fontWeight="bold"
                    >
                      {node.id}
                    </text>
                    
                    {/* 节点标签 */}
                    <text
                      x={node.x}
                      y={node.y + 50}
                      textAnchor="middle"
                      fill="#374151"
                      fontSize="12"
                      fontWeight="600"
                    >
                      {node.name}
                    </text>
                    <text
                      x={node.x}
                      y={node.y + 65}
                      textAnchor="middle"
                      fill="#6b7280"
                      fontSize="10"
                    >
                      {node.desc}
                    </text>
                  </g>
                ))}
                
                {/* 连接线 */}
                {/* 1→2 */}
                <line x1="130" y1="100" x2="220" y2="100" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                
                {/* 2→3 */}
                <line x1="280" y1="100" x2="370" y2="100" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                
                {/* 3→4 (通过) */}
                <line x1="430" y1="100" x2="520" y2="100" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead-green)" />
                <text x="475" y="85" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="600">通过</text>
                
                {/* 3→5 (不通过) */}
                <line x1="400" y1="130" x2="350" y2="170" stroke="#f97316" strokeWidth="3" markerEnd="url(#arrowhead-orange)" />
                <text x="375" y="155" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">不通过</text>
                
                {/* 5→6 */}
                <line x1="380" y1="200" x2="420" y2="200" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                
                {/* 6→4 (监控通过) */}
                <line x1="480" y1="200" x2="550" y2="130" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead-green)" />
                <text x="515" y="160" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="600">监控通过</text>
                
                {/* 6→7 (监控不通过) */}
                <line x1="480" y1="200" x2="520" y2="200" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowhead-red)" />
                <text x="500" y="185" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="600">监控不通过</text>
                
                {/* 箭头标记定义 */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                  </marker>
                  <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                  </marker>
                  <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#f97316" />
                  </marker>
                  <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* 2.3 FK能力变化 */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">2.3</div>
            <h3 className="text-2xl font-bold text-gray-800">FK能力变化</h3>
          </div>

          <div className="space-y-8">
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
                      <span className="text-gray-600">完善度: 85%</span>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600 font-medium">+12%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 防御型规则 */}
                <div className="bg-white rounded-xl p-6 border border-blue-100">
                  <h5 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    防御型规则
                  </h5>
                  <p className="text-blue-700 text-sm mb-4">风险控制 · 防止异常损失</p>
                  
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
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    套利型规则
                  </h5>
                  <p className="text-green-700 text-sm mb-4">防止套利 · 堵塞系统漏洞</p>
                  
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
            </div>

            {/* 代理网络监控 */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">代理网络监控</h4>
                    <p className="text-gray-600">监控代理行为，分析关联风险</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-600">72%</div>
                  <div className="text-sm text-gray-500">完善度</div>
                  <div className="flex items-center justify-end mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600 font-medium">+15%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 代理行为监控 */}
                <div className="bg-white rounded-xl p-6 border border-indigo-100">
                  <h5 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                    代理行为监控
                  </h5>
                  <p className="text-indigo-700 text-sm mb-4">行为分析 · 推广监控</p>
                  
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
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    关联网络分析
                  </h5>
                  <p className="text-purple-700 text-sm mb-4">网络分析 · 关联风险</p>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h6 className="font-semibold text-gray-700 mb-3">关联关系类</h6>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">异常关联账号</span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">增强</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">代理网络异常</span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">新增</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4">
                      <h6 className="font-semibold text-gray-700 mb-3">权限管理类</h6>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">代理异常操作</span>
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

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};