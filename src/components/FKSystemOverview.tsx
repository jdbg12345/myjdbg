import React from "react";
import { Shield, Users, BarChart3 } from "lucide-react";

export const FKSystemOverview: React.FC = () => {
  const nodes = [
    { id: 1, x: 150, y: 130, name: "系统预警", desc: "", color: "#9ca3af", numberColor: "#9ca3af", number: "1" },
    { id: 2, x: 400, y: 130, name: "申请提交", desc: "", color: "#9ca3af", numberColor: "#9ca3af", number: "2" },
    { id: 3, x: 650, y: 130, name: "系统审核", desc: "", color: "#9ca3af", numberColor: "#9ca3af", number: "3" },
    { id: 4, x: 1200, y: 130, name: "出款放行", desc: "", color: "#9ca3af", numberColor: "#10b981", number: "4" },
    { id: 5, x: 900, y: 290, name: "人工审核", desc: "", color: "#9ca3af", numberColor: "#9ca3af", number: "5" },
    { id: 6, x: 1200, y: 290, name: "系统管控", desc: "", color: "#3b82f6", numberColor: "#3b82f6", number: "6" },
    { id: 7, x: 1450, y: 290, name: "内控复审", desc: "", color: "#3b82f6", numberColor: "#3b82f6", number: "7" },
    { id: 8, x: 1200, y: 450, name: "出款拒绝", desc: "", color: "#9ca3af", numberColor: "#ef4444", number: "8" },
  ];

  const agents = [
    {
      id: "#1Y695966",
      grade: "B档 - 良好",
      level: "高级代理",
      joinDate: "2024-10-02",
      totalScore: 61,
      businessScore: 39,
      userQuality: 64,
      riskControl: 97,
      activeUsers: 970,
      validFlow: "¥38.8万",
      retention: "30%",
      riskUsers: "5%",
      gradeColor: "text-blue-600 bg-blue-50",
    },
    {
      id: "#2Y144558",
      grade: "C档 - 一般",
      level: "金牌代理",
      joinDate: "2024-09-05",
      totalScore: 57,
      businessScore: 38,
      userQuality: 60,
      riskControl: 90,
      activeUsers: 253,
      validFlow: "¥51.4万",
      retention: "18%",
      riskUsers: "4%",
      gradeColor: "text-yellow-600 bg-yellow-50",
    },
    {
      id: "#3Y218350",
      grade: "C档 - 一般",
      level: "金牌代理",
      joinDate: "2024-08-10",
      totalScore: 56,
      businessScore: 39,
      userQuality: 66,
      riskControl: 72,
      activeUsers: 586,
      validFlow: "¥46.8万",
      retention: "17%",
      riskUsers: "6%",
      gradeColor: "text-yellow-600 bg-yellow-50",
    },
    {
      id: "#4Y116215",
      grade: "C档 - 一般",
      level: "高级代理",
      joinDate: "2024-11-25",
      totalScore: 55,
      businessScore: 34,
      userQuality: 59,
      riskControl: 91,
      activeUsers: 231,
      validFlow: "¥44.6万",
      retention: "31%",
      riskUsers: "4%",
      gradeColor: "text-yellow-600 bg-yellow-50",
    },
    {
      id: "#5Y455003",
      grade: "C档 - 一般",
      level: "高级代理",
      joinDate: "2024-12-17",
      totalScore: 55,
      businessScore: 27,
      userQuality: 65,
      riskControl: 90,
      activeUsers: 325,
      validFlow: "¥37.4万",
      retention: "32%",
      riskUsers: "4%",
      gradeColor: "text-yellow-600 bg-yellow-50",
    },
    {
      id: "#6Y567649",
      grade: "C档 - 一般",
      level: "初级代理",
      joinDate: "2024-06-15",
      totalScore: 55,
      businessScore: 39,
      userQuality: 52,
      riskControl: 91,
      activeUsers: 876,
      validFlow: "¥64.8万",
      retention: "24%",
      riskUsers: "7%",
      gradeColor: "text-yellow-600 bg-yellow-50",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">3.2 试点说明</h1>
      </div>

      {/* FK流程变化 */}
      <div className="mb-16">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">FK流程变化</h2>
            <span className="text-gray-700 text-xl">
              <span className="text-blue-600">单人可出款 → 出款监控（+6） + 内控抽检（+7），想违规出款，会非常难且风险大</span>
              ，有效防内外串联
            </span>
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
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
                </filter>
                <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#1d4ed8", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="bubbleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#2563eb", stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Connection lines */}
              <path d="M210,130 L340,130" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              <path d="M460,130 L590,130" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              <path d="M710,130 L1140,130" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              <path d="M650,170 Q750,230 840,290" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              <path d="M960,290 L1140,290" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              <path d="M900,340 Q1000,395 1140,450" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              <path d="M1200,238 L1200,182" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              <path d="M1260,290 L1390,290" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              <path d="M1450,238 Q1350,185 1262,130" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />
              <path d="M1450,342 Q1350,395 1262,450" stroke="#6b7280" strokeWidth="3" fill="transparent" markerEnd="url(#arrowhead-gray)" />

              {/* Bubbles */}
              <g>
                <ellipse cx="925" cy="50" rx="200" ry="45" fill="url(#bubbleGradient)" stroke="#2563eb" strokeWidth="2" filter="url(#nodeShadow)" />
                <text x="925" y="55" textAnchor="middle" fill="white" fontSize="22" fontWeight="600">
                  变化：增加套利作弊等拦截策略
                </text>
              </g>

              <g>
                <ellipse cx="590" cy="250" rx="190" ry="45" fill="url(#bubbleGradient)" stroke="#2563eb" strokeWidth="2" filter="url(#nodeShadow)" />
                <text x="590" y="255" textAnchor="middle" fill="white" fontSize="22" fontWeight="600">
                  变化：升级为按分数和金额派单
                </text>
              </g>

              <g>
                <ellipse cx="900" cy="425" rx="160" ry="40" fill="url(#bubbleGradient)" stroke="#2563eb" strokeWidth="2" filter="url(#nodeShadow)" />
                <text x="900" y="430" textAnchor="middle" fill="white" fontSize="22" fontWeight="600">
                  变化：提供标准工具支持
                </text>
              </g>

              {/* Nodes */}
              {nodes.map((node) => (
                <g key={node.id}>
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
                  <circle cx={node.x} cy={node.y - 35} r="20" fill="white" stroke="#e5e7eb" strokeWidth="2" filter="url(#nodeShadow)" />
                  <text x={node.x} y={node.y - 28} textAnchor="middle" fill={node.numberColor} fontSize="20" fontWeight="700">
                    {node.number}
                  </text>
                  <text x={node.x} y={node.y + 15} textAnchor="middle" fill="white" fontSize="24" fontWeight="600">
                    {node.name}
                  </text>
                  <text x={node.x} y={node.y + 40} textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="16" fontWeight="500">
                    {node.desc}
                  </text>
                </g>
              ))}

              {/* Flow labels */}
              <text x="275" y="115" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">
                开始
              </text>
              <text x="525" y="115" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">
                提交
              </text>
              <text x="925" y="115" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">
                低风险
              </text>
              <text x="780" y="210" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">
                高风险
              </text>
              <text x="1050" y="275" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">
                通过
              </text>
              <text x="1050" y="380" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">
                不通过
              </text>
              <text x="1160" y="210" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">
                通过
              </text>
              <text x="1325" y="275" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">
                不通过
              </text>
              <text x="1320" y="200" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">
                通过
              </text>
              <text x="1325" y="380" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="600">
                不通过
              </text>
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
            <span className="text-gray-700 text-xl">
              会员侧：<span className="text-blue-600">防御型策略 → 多维度策略（防御+套利+作弊）</span>，降低系统直接出款错误风险；内控侧：
              <span className="text-blue-600">增强了违规管控能力</span>
            </span>
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
                <div className="text-lg font-semibold text-gray-700">主要资源在这个方向，变化比较大，持续落地中</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* left column (防御型规则) */}
            <div className="bg-white rounded p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded mr-3" />
                防御型规则
              </h5>
              <div className="text-lg text-gray-600 mb-4">
                无论玩家有没有问题，达到了对应的数据，就要拦截；存在
                <span className="text-blue-600">有问题的玩家规避绕过的风险</span>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <span className="text-green-500 mr-2">✅</span>账户安全类
                  </h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">敏感信息变更</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">
                          状态：<span className="font-semibold text-green-600">已上线</span>
                        </span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">增强</span>
                      </div>
                    </div>

                    {/* ... (other small cards omitted for brevity) */}
                  </div>
                </div>

                {/* 盈利监控类 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <span className="text-green-500 mr-2">✅</span>盈利监控类
                  </h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">高盈利金额</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">
                          状态：<span className="font-semibold text-green-600">已上线</span>
                        </span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">增强</span>
                      </div>
                    </div>

                    {/* ... (other small cards omitted for brevity) */}
                  </div>
                </div>

                {/* 内控监控类 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <span className="text-green-500 mr-2">✅</span>内控监控类
                  </h6>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-5">
                      <div className="font-bold text-gray-800 text-base mb-2">前几次提款需要人工</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">
                          状态：<span className="font-semibold text-gray-600">开发中</span>
                        </span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">增强</span>
                      </div>
                    </div>

                    {/* ... */}
                  </div>
                </div>
              </div>
            </div>

            {/* right column (套利型规则) */}
            <div className="bg-white rounded p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded-lg mr-3" />
                套利型规则
              </h5>
              <div className="text-lg text-gray-600 mb-4">
                补充各种<span className="text-blue-600">套利、作弊</span>类的策略，优化绕过人工审核直接出的错误
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h6 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <span className="text-blue-600 mr-2">✅</span>游戏套利类
                  </h6>

                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">电子套利</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">
                          状态：<span className="font-semibold text-green-600">已上线</span>
                        </span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>

                    {/* ... (other small cards omitted for brevity) */}
                  </div>
                </div>

                {/* 红利活动类 & 游戏作弊类 omitted for brevity */}
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

          {/* 信息安全 + 违规操作 grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded mr-3" />
                信息安全
              </h5>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">风控标签和备注独立权限</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">
                          状态：<span className="font-semibold text-green-600">已上线</span>
                        </span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>

                    {/* ... */}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded mr-3" />
                违规操作
              </h5>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-gray-800 text-base mb-2">出款必须看标签和备注</div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">
                          状态：<span className="font-semibold text-green-600">已上线</span>
                        </span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">新增</span>
                      </div>
                    </div>

                    {/* ... */}
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

          {/* 代理网格 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded mr-3" />
                代理佣金审核流程升级
              </h5>
              <div className="text-lg text-gray-600 mb-4">
                针对<span className="text-blue-600">红利、打负、调整等情况设定策略</span>，触发则进入
                <span className="text-blue-600">复审机制</span>来控制违规行为，提升佣金有效性
              </div>
            </div>

            <div className="bg-white rounded p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded mr-3" />
                代理质量自动化分析
              </h5>
              <div className="text-lg text-gray-600 mb-4">
                定义<span className="text-blue-600">平台有效贡献度模型(下级质量+收益质量+风险情况)综合纬度打分</span>，
                进行全局监控，及时发现优质和劣质代理，进行后续针对性的调整措施
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 代理质量自动化分析详细展示 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">📊</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">有效贡献度</h3>
          <span className="text-gray-600 text-lg">快速区分优质代理与劣质代理，实现精准监控与管理</span>
        </div>

        {/* 代理分级统计 */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-green-50 rounded-lg p-6 text-center border border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">0</div>
            <div className="text-green-700 font-semibold">A档优质</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
            <div className="text-blue-700 font-semibold">B档良好</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-6 text-center border border-yellow-200">
            <div className="text-4xl font-bold text-yellow-600 mb-2">51</div>
            <div className="text-yellow-700 font-semibold">C档一般</div>
          </div>
          <div className="bg-red-50 rounded-lg p-6 text-center border border-red-200">
            <div className="text-4xl font-bold text-red-600 mb-2">1</div>
            <div className="text-red-700 font-semibold">D档风险</div>
          </div>
        </div>

        {/* 代理贡献度总览标题 */}
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-bold text-gray-800">代理贡献度总览</h4>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <option>全部站点</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <option>全部分级</option>
            </select>
          </div>
        </div>

        {/* 代理列表 */}
        <div className="space-y-4">
          {agents.map((agent, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-lg font-bold text-gray-800">{agent.id}</span>
                    <span className={`${agent.gradeColor} px-3 py-1 rounded-full text-sm font-semibold`}>{agent.grade}</span>
                    <span className="text-gray-600">{agent.level}</span>
                    <span className="text-gray-500">• 加入时间: {agent.joinDate}</span>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">{agent.totalScore}</div>
                      <div className="text-sm text-gray-600">综合贡献度分数</div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">业务贡献</span>
                        <span className="font-semibold text-blue-600">{agent.businessScore}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">用户质量</span>
                        <span className="font-semibold text-green-600">{agent.userQuality}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">风险控制</span>
                        <span className="font-semibold text-orange-600">{agent.riskControl}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">活跃用户:</span>
                        <span className="font-semibold">{agent.activeUsers}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">有效流水:</span>
                        <span className="font-semibold">{agent.validFlow}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">30日留存:</span>
                        <span className="font-semibold text-green-600">{agent.retention}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">风险用户:</span>
                        <span className="font-semibold text-red-600">{agent.riskUsers}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};
