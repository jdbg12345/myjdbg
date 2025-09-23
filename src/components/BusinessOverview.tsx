import React from 'react';
import { Target, TrendingUp, Shield, Calendar, AlertCircle, Search, Lightbulb, Award, BarChart3, ArrowRight, AlertTriangle, Heart, Users, Zap, Database, Clock, DollarSign, Settings } from 'lucide-react';

export const BusinessOverview = () => {
  // 问题与解法对应数据
  const problemSolutionPairs = [
    {
      id: 'quality',
      title: '质量',
      priority: 'P0',
      icon: Shield,
      description: '降低出错的订单数量和订单金额',
      impact: '核心指标',
      problem: {
        title: '人员能力参差不齐',
        icon: AlertTriangle,
        description: '依赖个人经验，小圈子文化，等导致大部分人尤其是新人无法得到技能有效提升'
      },
      solution: {
        title: '标准化工具和规则',
        icon: Shield,
        description: '系统负责自动识别与拦截；流程负责在关键环节嵌入约束，减少人为操作空间；'
      }
    },
    {
      id: 'efficiency',
      title: '效率',
      priority: 'P1',
      icon: Clock,
      description: '降低无问题订单的平均出单时长',
      impact: '重要指标',
      problem: {
        title: '人不按照标准执行',
        icon: Users,
        description: '有些是新型高端作弊手段无法识别风险；'
      },
      solution: {
        title: '自动化拦截和预警',
        icon: Database,
        description: '建立完善的策略库和规则引擎，将人工经验转化为系统能力'
      }
    },
       {
      id: 'efficiency',
      title: '效率',
      priority: 'P1',
      icon: Clock,
      description: '降低无问题订单的平均出单时长',
      impact: '重要指标',
      problem: {
        title: '人在时间压力下无法全部检查',
        icon: Users,
        description: '有些是新型高端作弊手段无法识别风险；'
      },
      solution: {
        title: '自动化拦截和预警',
        icon: Database,
        description: '建立完善的策略库和规则引擎，将人工经验转化为系统能力'
      }
    },
    
    {
      id: 'cost',
      title: '成本',
      priority: 'P2',
      icon: DollarSign,
      description: '有人主观违规，即使剔除，也会不断有新的人进入。',
      impact: '优化指标',
      problem: {
        title: '内外人员进行勾结',
        icon: AlertCircle,
        description: '策略参数、标签备注、出款放行等'
      },
      solution: {
        title: '流程化操作和预警',
        icon: Zap,
        description: '限和合规机制保证"人"无法绕过规则'
      }
    }
  ];

  // 体系变革推进节奏数据
  const progressSchedule = [
    { time: '2025 Q1', stage: '梳理规划', work: '全站点现状摸底，识别关键痛点；制定体系变革策略（风险可控、循序渐进）', result: '明确变革方向，形成可执行策略框架', current: false },
    { time: '2025 Q2', stage: '试点落地', work: '在部分关键环节实施标准化、策略多元化、内控强化及预警机制；配置局部策略参数、验证执行可行性', result: '局部环节完成初步落地，形成阶段性数据与经验', current: false },
    { time: '2025 Q3', stage: '成果验证', work: '聚焦试点环节，收集定量和定性成果；评估策略有效性和风险可控性', result: '局部成果显现，为全站点推广提供依据', current: true },
    { time: '2025 Q4', stage: '全站推广', work: '将验证通过的策略在全站点实施；统一跨平台流程与操作标准', result: '风控体系覆盖全站点，执行标准化，初步达到业务与风险平衡', current: false },
    { time: '2026 Q1', stage: '体系成熟', work: '完成全链路闭环治理；优化策略参数、流程与预警机制；建立持续迭代机制', result: '风控体系稳定运行，风险可控、业务受益最大化，具备可扩展性', current: false }
  ];

  // 体系变化对比数据
  const systemChanges = [
    { direction: '人工审核流程', pain: '派单策略不合理、单人即可出款机制', before: '按照金额派单；单人即可出款', now: '按照分数和金额派单；会有策略出款前抽检', example: '云盾分数、内控抽检' },
    { direction: '风控核心策略', pain: '系统直接出款错误；转人工后缺乏强风控建议', before: '以防御型策略为主（新手类、金额类），缺少套利识别策略', now: '套利识别策略比重增加', example: '电子卡免费、代理关联、棋牌套利、彩票套利等' },
    { direction: '风控支持工具', pain: '操作效率极低：风控要求时效；且标准难统一：降低准确率', before: '信息零散、跨平台能力弱', now: '信息聚合、底层打通多平台', example: '1、关联用户下注工具；2、提款流水工具' },
    { direction: '风控内控机制', pain: '内控薄弱：敏感操作缺乏授权与审计，参数、标签泄露', before: '一些核心策略和参数外界已"知晓"', now: '逐步实施参数分层、动态设置', example: '部分***参数已经试运行中' },
    { direction: '极端预防机制', pain: '流程缺陷及策略局限导致异常资金风险', before: '场馆多钱、沉睡用户', now: '预警和防御策略', example: '场馆多钱预警' }
  ];

  // 策略数据
  const strategyData = [
    { name: '电子卡免费', orders: 320, rate: 25.0, color: '#10B981' },
    { name: '真人套利', orders: 450, rate: 26.7, color: '#3B82F6' },
    { name: '彩票套利', orders: 280, rate: 25.0, color: '#8B5CF6' },
    { name: '棋牌套利', orders: 210, rate: 23.8, color: '#F59E0B' },
    { name: '体育套利', orders: 380, rate: 22.1, color: '#EF4444' }
  ];

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">3.0 系统与流程在风控演进中的核心作用</h1>
      </div>

      {/* 一、本质问题与解法 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">一、本质问题与解法</h2>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <p className="text-lg text-blue-900 font-semibold">
            风控中"人"是所有问题的根源，解决人的问题的核心在于：“不依赖人，不信任人”，有问题的人想搞事情成本和风险极高，几乎没有操作空间
          </p>
        </div>
        
        <div className="space-y-6">
          {problemSolutionPairs.map((pair, index) => {
            const ProblemIcon = pair.problem.icon;
            const SolutionIcon = pair.solution.icon;
            
            return (
              <div key={index} className="flex items-center space-x-6 bg-white rounded-xl p-6 shadow-sm">
                {/* 问题部分 */}
                <div className="flex-1 p-6 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <ProblemIcon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-red-700">{pair.problem.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{pair.problem.description}</p>
                </div>

                {/* 箭头 */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* 解法部分 */}
                <div className="flex-1 p-6 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <SolutionIcon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-green-700">{pair.solution.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{pair.solution.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* 二、体系变革的节奏 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">二、体系变革的节奏</h2>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <p className="text-lg text-blue-900 leading-relaxed">
            <span className="font-semibold">风控变革涉及多个部门与既得利益相关方，任何调整都可能影响会员体验、代理收益和业务稳定性。因此，我们先小范围试点，效果验证后逐步推广，避免一刀切的潜在的组织及业务风险。</span>
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="p-4 text-center font-semibold">时间</th>
                  <th className="p-4 text-center font-semibold">阶段分类</th>
                  <th className="p-4 text-left font-semibold">核心工作与目标</th>
                  <th className="p-4 text-left font-semibold">成果预期</th>
                </tr>
              </thead>
              <tbody>
                {progressSchedule.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-100 transition-colors ${
                      item.current 
                        ? 'bg-blue-100 border-blue-300 shadow-md' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className={`p-4 text-center font-bold whitespace-nowrap ${
                      item.current ? 'text-blue-700' : 'text-blue-600'
                    }`}>
                      {item.time}
                      {item.current && (
                        <div className="text-xs text-blue-800 mt-1 font-semibold">当前</div>
                      )}
                    </td>
                    <td className={`p-4 text-center font-semibold whitespace-nowrap ${
                      item.current ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {item.stage}
                    </td>
                    <td className={`p-4 text-sm ${
                      item.current ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {item.work}
                    </td>
                    <td className={`p-4 text-sm ${
                      item.current ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {item.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 三、试点成果呈现 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">三、试点成果呈现</h2>
        </div>

        {/* 体系定义 */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            风控体系是一套覆盖 <span className="font-bold text-blue-600">策略、流程、内控与预警</span> 的全链路治理框架，以 <span className="font-bold text-blue-600">多元化策略 + 精准特征识别 + 内控防线 + 全链路预警</span> 为核心支柱，通过 <span className="font-bold text-blue-600">可验证、可复制、可扩展</span> 的方式逐步落地，最终实现风险与业务平衡。
          </p>
        </div>

        {/* 体系变化对比表 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="p-4 text-center font-semibold w-32 whitespace-nowrap">核心方向</th>
                  <th className="p-4 text-left font-semibold w-48">业务痛点</th>
                  <th className="p-4 text-left font-semibold w-48">原来</th>
                  <th className="p-4 text-left font-semibold w-48">现在</th>
                  <th className="p-4 text-left font-semibold w-48">例子</th>
                </tr>
              </thead>
              <tbody>
                {systemChanges.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-center font-bold text-blue-600 whitespace-nowrap">{item.direction}</td>
                    <td className="p-4 text-gray-700">{item.pain}</td>
                    <td className="p-4 text-gray-700">{item.before}</td>
                    <td className="p-4 text-gray-700">{item.now}</td>
                    <td className="p-4 text-gray-700">{item.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 方向1：人工审核流程 */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">方向1：人工审核流程变革</h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            <span className="font-semibold">派单逻辑不够完善，现有派单机制以影响控制原则为主</span>，把低金额订单分配给经验较少的外包和一审人员，没有充分考虑<span className="font-semibold">审核难度与人员专业水平的匹配关系</span>，导致<span className="font-semibold">一些金额虽小但风险较高的订单可能被漏检。</span>
          </p>

          {/* 新派单规则效果图表 */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">1. 派单策略变革效果</h4>
            <p className="text-sm text-gray-600 mb-6">引入订单风险分数机制，将原来的“仅按金额派单”升级为“按订单分数+金额派单”，确保中高风险订单由经验丰富的审核员处理</p>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              {/* 图表容器 */}
              <div className="relative h-80 mb-6">
                {/* Y轴标签 - 左侧 */}
                <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-gray-600">
                  分配订单数
                </div>
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 rotate-90 text-sm font-medium text-orange-600">
                  问题率 (%)
                </div>
                
                {/* 图表主体 */}
                <div className="mx-8 h-full relative">
                  {/* Y轴刻度 */}
                  <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                    <span>1400</span>
                    <span>1050</span>
                    <span>700</span>
                    <span>350</span>
                    <span>0</span>
                  </div>
                  
                  {/* 右Y轴刻度 - 问题率 */}
                  <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-orange-500">
                    <span>5%</span>
                    <span>3.75%</span>
                    <span>2.5%</span>
                    <span>1.25%</span>
                    <span>0%</span>
                  </div>
                  
                  {/* 网格线 */}
                  <div className="absolute left-8 right-8 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  {/* 柱状图数据 */}
                  <div className="absolute left-8 right-8 h-full flex items-end justify-around pb-4">
                    {[
                      { name: '外包一审', before: 1200, after: 1050, beforeRate: 4.0, afterRate: 3.0 },
                      { name: '总部一审', before: 850, after: 900, beforeRate: 3.5, afterRate: 2.8 },
                      { name: '总部二审', before: 520, after: 550, beforeRate: 2.2, afterRate: 1.5 }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center relative">
                        <div className="flex items-end space-x-2 mb-6">
                          {/* 调整前柱子 */}
                          <div className="relative">
                            <div 
                              className="w-10 bg-blue-400 rounded-t"
                              style={{ height: `${(item.before / 1400) * 240}px` }}
                            ></div>
                          </div>
                          {/* 调整后柱子 */}
                          <div className="relative">
                            <div 
                              className="w-10 bg-green-500 rounded-t"
                              style={{ height: `${(item.after / 1400) * 240}px` }}
                            ></div>
                          </div>
                        </div>
                        
                        {/* 问题率点 - 调整前 */}
                        <div 
                          className="absolute w-3 h-3 bg-blue-500 rounded-full border-2 border-white"
                          style={{bottom: `${25 + (item.beforeRate / 5) * 240}px`, left: '15px'}}
                        >
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-600 whitespace-nowrap">
                            {item.beforeRate}%
                          </div>
                        </div>
                        
                        {/* 问题率点 - 调整后 */}
                        <div 
                          className="absolute w-3 h-3 bg-green-600 rounded-full border-2 border-white"
                          style={{bottom: `${25 + (item.afterRate / 5) * 240}px`, right: '15px'}}
                        >
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-green-600 whitespace-nowrap">
                            {item.afterRate}%
                          </div>
                        </div>
                        
                        {/* 底部标签和数据 */}
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1">{item.before}/{item.after}</div>
                          <div className="text-sm text-gray-700 font-medium whitespace-nowrap">{item.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 问题率连线 - 调整前 */}
                  <svg className="absolute left-8 right-8 top-0 bottom-0 pointer-events-none" width="100%" height="100%">
                    <path
                      d={`M 16.67% ${100 - (4.0 / 5) * 85}% L 50% ${100 - (3.5 / 5) * 85}% L 83.33% ${100 - (2.2 / 5) * 85}%`}
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="4,4"
                    />
                    <path
                      d={`M 16.67% ${100 - (3.0 / 5) * 85}% L 50% ${100 - (2.8 / 5) * 85}% L 83.33% ${100 - (1.5 / 5) * 85}%`}
                      stroke="#10B981"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
              
              {/* X轴标签 */}
              <div className="text-center text-sm font-medium text-gray-600 mb-4">审核角色</div>
              
              {/* 图例 */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-400"></div>
                  <span className="text-sm text-gray-600">调整前分配数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500"></div>
                  <span className="text-sm text-gray-600">调整后分配数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">调整前问题率</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">调整后问题率</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>

        
          {/* 风险分数效果图表 */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">风险分数效果（细分区间）</h4>
            <p className="text-sm text-gray-600 mb-6">此图表展示了在细分的风险分数区间内，订单的分布情况和相应的问题率。通过观察问题率随分数区间的变化趋势，验证风险分数模型的有效性和区分能力。</p>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="relative h-80 mb-6">
                {/* 双Y轴标签 */}
                <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-gray-600">
                  订单数量
                </div>
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 rotate-90 text-sm font-medium text-orange-600">
                  问题率 (%)
                </div>
                
                {/* 图表主体 */}
                <div className="mx-8 h-full relative">
                  {/* 左Y轴刻度 */}
                  <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                    <span>400</span>
                    <span>300</span>
                    <span>200</span>
                    <span>100</span>
                    <span>0</span>
                  </div>
                  
                  {/* 右Y轴刻度 */}
                  <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-orange-500">
                    <span>28%</span>
                    <span>21%</span>
                    <span>14%</span>
                    <span>7%</span>
                    <span>0%</span>
                  </div>
                  
                  {/* 网格线 */}
                  <div className="absolute left-8 right-8 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  {/* 数据展示 */}
                  <div className="absolute left-8 right-8 h-full flex items-end justify-around pb-4">
                    {[
                      { range: '0-29分', count: 400, percent: '33.9%', rate: 20.0, color: '#3B82F6' },
                      { range: '30-59分', count: 350, percent: '29.7%', rate: 25.7, color: '#10B981' },
                      { range: '60-89分', count: 280, percent: '23.7%', rate: 21.4, color: '#F59E0B' },
                      { range: '90-100分', count: 150, percent: '12.7%', rate: 20.0, color: '#EF4444' }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center relative">
                        {/* 柱状图 */}
                        <div 
                          className="w-16 rounded-t relative"
                          style={{ 
                            height: `${(item.count / 400) * 240}px`,
                            backgroundColor: item.color
                          }}
                        >
                        </div>
                        
                        {/* 问题率点 */}
                        <div 
                          className="absolute w-3 h-3 bg-orange-500 rounded-full border-2 border-white"
                          style={{bottom: `${20 + (item.rate / 28) * 240}px`}}
                        >
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-orange-600 whitespace-nowrap">
                            {item.rate}%
                          </div>
                        </div>
                        
                        {/* 底部标签和数据 */}
                        <div className="text-center">
                          <div className="text-xs font-medium text-gray-700">{item.count}</div>
                          <div className="text-xs text-gray-600">({item.percent})</div>
                          <div className="text-sm text-gray-700 font-medium mt-1">{item.range}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 问题率连线 */}
                  <svg className="absolute left-8 right-8 top-0 bottom-0 pointer-events-none" width="100%" height="100%">
                    <path
                      d={`M 12.5% ${100 - (20.0 / 28) * 85}% L 37.5% ${100 - (25.7 / 28) * 85}% L 62.5% ${100 - (21.4 / 28) * 85}% L 87.5% ${100 - (20.0 / 28) * 85}%`}
                      stroke="#f97316"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="4,4"
                    />
                  </svg>
                </div>
              </div>
              
              {/* X轴标签 */}
              <div className="text-center text-sm font-medium text-gray-600 mb-4">风险分数区间</div>
              
              {/* 图例 */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500"></div>
                  <span className="text-sm text-gray-600">订单数量及占比</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">问题率趋势</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>

      {/* 方向1新增：出款查看备注标签 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">+</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">出款查看备注标签</h3>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">已上线</span>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">问题</h4>
              <p className="text-gray-700">出款时未查看备注标签（公告）导致套利出款错误</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">影响</h4>
              <p className="text-gray-700">每月约<span className="font-bold text-red-600">15-20%</span>的错误出款源于此，影响约<span className="font-bold text-red-600">100+万/月</span></p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">目标</h4>
              <p className="text-gray-700">将查看备注设为出款流程中的强制环节</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">收益</h4>
              <p className="text-gray-700">错误出款影响降低<span className="font-bold text-green-600">15%-20%</span></p>
            </div>
          </div>
        </div>

        {/* 图表 */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-end justify-between h-64 mb-4">
            <div className="flex flex-col items-center flex-1 mx-2">
              <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '280px'}}>25%</div>
              <div className="bg-red-400 w-full rounded-t transition-all duration-300" style={{height: '200px'}}></div>
              <div className="text-sm text-gray-600 mt-2">调整前</div>
              <div className="text-xs text-gray-500">错误率</div>
            </div>
            <div className="flex flex-col items-center flex-1 mx-2">
              <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '200px'}}>8%</div>
              <div className="bg-green-500 w-full rounded-t transition-all duration-300" style={{height: '64px'}}></div>
              <div className="text-sm text-gray-600 mt-2">调整后</div>
              <div className="text-xs text-gray-500">错误率</div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600">
            <div className="mb-2">统计周期：2025-04-01 ~ 2025-06-30</div>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-red-400 mr-2"></span>
                <span>调整前错误率</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>
                <span>调整后错误率</span>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* 方向2：风控核心策略 */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">方向2：风控核心策略</h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            目前系统的策略主要集中在防御型，而非套利及作弊识别类型，导致直接出款错误，以及转人工后缺乏强有力的风险提醒。
          </p>

          {/* 1. 电子策略 */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">电</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">电子策略</h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
                <div className="text-gray-700 mb-4">电子游戏卡免费旋转等套利行为难以识别，系统缺乏有效的电子游戏异常行为监控机制</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
                <div className="text-gray-700">电子卡免费策略拦截率达到25%，有效防范套利行为，显著提升电子游戏风控能力</div>
              </div>
            </div>
            
            {/* 电子策略图表 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4">电子卡免费策略效果</h4>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-end justify-between h-64 mb-4">
                  <div className="flex flex-col items-center flex-1 mx-2">
                    <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '240px'}}>35%</div>
                    <div className="bg-blue-500 w-full rounded-t transition-all duration-300" style={{height: '140px'}}></div>
                    <div className="text-sm text-gray-600 mt-2">调整前</div>
                    <div className="text-xs text-gray-500">400单</div>
                  </div>
                  <div className="flex flex-col items-center flex-1 mx-2">
                    <div className="text-sm font-semibold text-green-600 mb-2" style={{marginBottom: '200px'}}>5%</div>
                    <div className="bg-green-500 w-full rounded-t transition-all duration-300" style={{height: '20px'}}></div>
                    <div className="text-sm text-gray-600 mt-2">调整后</div>
                    <div className="text-xs text-gray-500">380单</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="flex items-center">
                      <span className="inline-block w-4 h-4 bg-blue-500 mr-2"></span>
                      <span className="text-sm text-gray-600">调整前问题率</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>
                      <span className="text-sm text-gray-600">调整后问题率</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="text-xs text-gray-500">
                    统计周期：2025-04-01 ~ 2025-06-30 | X轴：调整前后 | Y轴：问题率(%)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 真人策略 */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">真</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">真人策略</h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
                <div className="text-gray-700 mb-4">真人游戏对打和算牌行为识别不足，缺乏对真人游戏异常投注模式的有效监控</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
                <div className="text-gray-700">真人套利策略问题率26.7%，精准识别异常行为，大幅提升真人游戏风控效果</div>
              </div>
            </div>
            
            {/* 真人策略图表 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">真人套利策略效果</h5>
              <div className="relative h-64">
                <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>500</span>
                  <span>375</span>
                  <span>250</span>
                  <span>125</span>
                  <span>0</span>
                </div>
                <div className="ml-8 h-full relative">
                  <div className="absolute left-0 right-0 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 text-sm font-semibold text-blue-600">26.7%</div>
                      <div className="w-24 bg-blue-500 rounded-t" style={{ height: '180px' }}></div>
                      <div className="text-center mt-3">
                        <div className="text-sm font-medium text-gray-700">450单</div>
                        <div className="text-sm text-gray-600">真人套利</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            
              {/* 图例 */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500"></div>
                  <span className="text-sm text-gray-600">拦截订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">问题率: 26.7%</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>

          {/* 3. 体育策略 */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">体</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">体育策略</h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
                <div className="text-gray-700 mb-4">体育打水和对冲套利行为监控薄弱，无法有效识别跨平台套利和异常投注行为</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
                <div className="text-gray-700">体育套利策略覆盖面广，问题率22.1%，有效拦截体育投注中的套利行为</div>
              </div>
            </div>
            
            {/* 体育策略图表 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">体育套利策略效果</h5>
              <div className="relative h-64">
                <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>400</span>
                  <span>300</span>
                  <span>200</span>
                  <span>100</span>
                  <span>0</span>
                </div>
                <div className="ml-8 h-full relative">
                  <div className="absolute left-0 right-0 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 text-sm font-semibold text-red-600">22.1%</div>
                      <div className="w-24 bg-red-500 rounded-t" style={{ height: '152px' }}></div>
                      <div className="text-center mt-3">
                        <div className="text-sm font-medium text-gray-700">380单</div>
                        <div className="text-sm text-gray-600">体育套利</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>                  
                            
              {/* 图例 */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500"></div>
                  <span className="text-sm text-gray-600">拦截订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">问题率: 22.1%</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>

          {/* 4. 彩票策略 */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">彩</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">彩票策略</h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
                <div className="text-gray-700 mb-4">彩票全包和异常投注模式缺乏有效拦截，无法识别彩票游戏中的套利行为</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
                <div className="text-gray-700">彩票套利策略问题率25%，有效识别全包行为，显著提升彩票游戏风控水平</div>
              </div>
            </div>
            
            {/* 彩票策略图表 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">彩票套利策略效果</h5>
              <div className="relative h-64">
                <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>300</span>
                  <span>225</span>
                  <span>150</span>
                  <span>75</span>
                  <span>0</span>
                </div>
                <div className="ml-8 h-full relative">
                  <div className="absolute left-0 right-0 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 text-sm font-semibold text-purple-600">25.0%</div>
                      <div className="w-24 bg-purple-500 rounded-t" style={{ height: '168px' }}></div>
                      <div className="text-center mt-3">
                        <div className="text-sm font-medium text-gray-700">280单</div>
                        <div className="text-sm text-gray-600">彩票套利</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            
              {/* 图例 */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-500"></div>
                  <span className="text-sm text-gray-600">拦截订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">问题率: 25.0%</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>

          {/* 5. 棋牌策略 */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">棋</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">棋牌策略</h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
                <div className="text-gray-700 mb-4">棋牌游戏作弊和异常胜率难以监控，缺乏对棋牌游戏异常行为的有效识别</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
                <div className="text-gray-700">棋牌套利策略问题率23.8%，精准定位异常行为，有效提升棋牌游戏安全性</div>
              </div>
            </div>
            
            {/* 棋牌策略图表 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">棋牌套利策略效果</h5>
              <div className="relative h-64">
                <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>250</span>
                  <span>188</span>
                  <span>125</span>
                  <span>63</span>
                  <span>0</span>
                </div>
                <div className="ml-8 h-full relative">
                  <div className="absolute left-0 right-0 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 text-sm font-semibold text-yellow-600">23.8%</div>
                      <div className="w-24 bg-yellow-500 rounded-t" style={{ height: '168px' }}></div>
                      <div className="text-center mt-3">
                        <div className="text-sm font-medium text-gray-700">210单</div>
                        <div className="text-sm text-gray-600">棋牌套利</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            
              {/* 图例 */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500"></div>
                  <span className="text-sm text-gray-600">拦截订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">问题率: 23.8%</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>

      {/* 方向3：风控支持工具 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">3</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">方向3：风控支持工具</h2>
        </div>

        {/* 关联下注工具 */}
        <div className="bg-white rounded-lg p-8 mb-8 border border-purple-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">关联下注工具</h3>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">试运行中</span>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">问题</h4>
                <p className="text-gray-700">完全依靠人工基于个人经验发掘关联下注（如对打）；曾经需要10人+团队从后台导出数据并在本地处理风控算法，<span className="font-bold text-red-600">存在严重的数据安全隐患</span>。且操作效率低下，有效拦截率也不足。</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">影响</h4>
                <p className="text-gray-700">每月约<span className="font-bold text-red-600">50+%</span>的错误出款源于此，影响约<span className="font-bold text-red-600">200+万/月</span></p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">目标</h4>
                <p className="text-gray-700">标准化关联下注工具</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">收益</h4>
                <p className="text-gray-700">影响减少<span className="font-bold text-green-600">30+%，120万/月</span>；节省人力成本至少<span className="font-bold text-green-600">40+万/月</span></p>
              </div>
            </div>
          </div>

          {/* 图表 */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-end justify-between h-64 mb-4">
              <div className="flex flex-col items-center flex-1 mx-2">
                <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '260px'}}>52%</div>
                <div className="bg-red-400 w-full rounded-t transition-all duration-300" style={{height: '208px'}}></div>
                <div className="text-sm text-gray-600 mt-2">调整前</div>
                <div className="text-xs text-gray-500">错误率</div>
              </div>
              <div className="flex flex-col items-center flex-1 mx-2">
                <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '176px'}}>22%</div>
                <div className="bg-green-500 w-full rounded-t transition-all duration-300" style={{height: '88px'}}></div>
                <div className="text-sm text-gray-600 mt-2">调整后</div>
                <div className="text-xs text-gray-500">错误率</div>
              </div>
            </div>
            <div className="text-center text-sm text-gray-600">
              <div className="mb-2">统计周期：2025-04-01 ~ 2025-06-30 (以Y1为例)</div>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-red-400 mr-2"></span>
                  <span>调整前错误率</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>
                  <span>调整后错误率</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 提款流水工具 */}
        <div className="bg-white rounded-lg p-8 mb-8 border border-purple-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">提款流水工具</h3>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">开发中</span>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">问题</h4>
                <p className="text-gray-700">系统逻辑<span className="font-bold text-red-600">多年来</span>存在错误（锁定场馆流水双算、场馆红利多算1倍提款流水、输光后提款流水不自动达标等），导致需要人工重新手动计算流水。但计算标准模糊且执行不一致，使风控和质检部门经常因流水计算产生争议。在跨部门协作中，流水咨询形成冗长的沟通链路（用户-客服-运营-风控-运营-客服-用户），不仅浪费时间，降低用户体验并导致出款错误。</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">影响</h4>
                <p className="text-gray-700">每月约<span className="font-bold text-red-600">5%</span>的错误出款源于此，影响约<span className="font-bold text-red-600">30+万/月</span></p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">目标</h4>
                <p className="text-gray-700"><span className="font-bold">阶段1：</span>实现流水自动统一计算，无需人工介入；<span className="font-bold">阶段2：</span>用户在前端直接查看流水情况，目前大部分竞品已实现此体验，彻底解决这个多余过程（已提出需求，但收到无法实现的反馈）。</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">收益</h4>
                <p className="text-gray-700">影响减少<span className="font-bold text-green-600">5%</span>；效率提升一倍；用户体验改善</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-700 text-sm">市场调研显示，主流平台（6 尊龙凯时（AG）7 金宝博（188）8 竞博（IM）5 万博（ManbetX）3 竞技宝（JJB）2 雷竞技（Raybet）1 易游（M6)）已普遍实现用户前端直接查看剩余提款流水功能，这不仅优化了用户体验，还有效解决了流水反复咨询的冗余低效流程和计算错误导致的出款问题（虽已提出需求，但技术侧目前无法实现）</p>
              </div>
            </div>
          </div>

          {/* 图表 */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-end justify-between h-64 mb-4">
              <div className="flex flex-col items-center flex-1 mx-2">
                <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '200px'}}>8小时</div>
                <div className="bg-red-400 w-full rounded-t transition-all duration-300" style={{height: '160px'}}></div>
                <div className="text-sm text-gray-600 mt-2">调整前</div>
                <div className="text-xs text-gray-500">处理时长</div>
              </div>
              <div className="flex flex-col items-center flex-1 mx-2">
                <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '100px'}}>4小时</div>
                <div className="bg-green-500 w-full rounded-t transition-all duration-300" style={{height: '80px'}}></div>
                <div className="text-sm text-gray-600 mt-2">调整后</div>
                <div className="text-xs text-gray-500">处理时长</div>
              </div>
            </div>
            <div className="text-center text-sm text-gray-600">
              <div className="mb-2">统计周期：2025-04-01 ~ 2025-06-30</div>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-red-400 mr-2"></span>
                  <span>调整前处理时长</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>
                  <span>调整后处理时长</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 体育打水工具 */}
        <div className="bg-white rounded-lg p-8 mb-8 border border-purple-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">体育打水工具</h3>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">试运行</span>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">问题</h4>
                <p className="text-gray-700">打水是体育中最常见的套利方式，目前完全依赖人工进行多平台对比，不仅耗时费力，效率极低，还无法实现全面及时的覆盖。</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">影响</h4>
                <p className="text-gray-700">每月约<span className="font-bold text-red-600">5%</span>的错误出款源于此，影响约<span className="font-bold text-red-600">30+万/月</span></p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">目标</h4>
                <p className="text-gray-700">通过B端百家赔率数据构建体育打水实时查询工具</p>
              </div>
            </div>
          </div>

          {/* 图表 */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-end justify-between h-64 mb-4">
              <div className="flex flex-col items-center flex-1 mx-2">
                <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '216px'}}>18%</div>
                <div className="bg-red-400 w-full rounded-t transition-all duration-300" style={{height: '144px'}}></div>
                <div className="text-sm text-gray-600 mt-2">调整前</div>
                <div className="text-xs text-gray-500">错误率</div>
              </div>
              <div className="flex flex-col items-center flex-1 mx-2">
                <div className="text-sm font-semibold text-blue-600 mb-2" style={{marginBottom: '196px'}}>13%</div>
                <div className="bg-green-500 w-full rounded-t transition-all duration-300" style={{height: '104px'}}></div>
                <div className="text-sm text-gray-600 mt-2">调整后</div>
                <div className="text-xs text-gray-500">错误率</div>
              </div>
            </div>
            <div className="text-center text-sm text-gray-600">
              <div className="mb-2">统计周期：2025-04-01 ~ 2025-06-30 (以Y1为例)</div>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-red-400 mr-2"></span>
                  <span>调整前错误率</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>
                  <span>调整后错误率</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 风控支持工具 */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">方向3：风控支持工具</h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            <span className="font-semibold">审核标准一致性及稳定性差，</span>审核过程高度依赖个人能力和状态，<span className="font-semibold">导致审核标准难以统一且不稳定。经验丰富的审核员虽能快速处理订单，但因出款时间考核压力而存在遗漏风险；同时，资深人员出于绩效考核因素不愿与新人分享经验，致使新手错误率持续居高不下，形成恶性循环。</span>
          </p>

        {/* 方向4：风控内控机制 */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">方向4：风控内控机制</h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            <span className="font-semibold">内控薄弱：敏感操作缺乏授权与审计，参数、标签泄露</span>，一些核心策略和参数外界已"知晓"，需要逐步实施参数分层、动态设置等机制。
          </p>

          {/* 1. VIP禁用 */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">VIP禁用</h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
                <div className="text-gray-700 mb-4">VIP用户禁用权限管理不够精细，缺乏分级审批机制，存在误禁和滥用风险</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
                <div className="text-gray-700">建立VIP禁用分级审批机制，提升禁用操作的准确性和合规性，降低误禁率80%</div>
              </div>
            </div>
            
            {/* VIP禁用图表 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">VIP禁用管控效果</h5>
              <div className="relative h-64">
                <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                  <span>0</span>
                </div>
                <div className="ml-8 h-full relative">
                  <div className="absolute left-0 right-0 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 text-sm font-semibold text-indigo-600">80%</div>
                      <div className="w-24 bg-indigo-500 rounded-t" style={{ height: '192px' }}></div>
                      <div className="text-center mt-3">
                        <div className="text-sm font-medium text-gray-700">85单</div>
                        <div className="text-sm text-gray-600">VIP禁用</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            
              {/* 图例 */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-indigo-500"></div>
                  <span className="text-sm text-gray-600">管控订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">准确率: 80%</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>

          {/* 2. 风控标签 */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">标</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">风控标签</h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
                <div className="text-gray-700 mb-4">风控标签查看权限过于宽泛，敏感信息容易泄露，缺乏访问记录和审计机制</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
                <div className="text-gray-700">实施标签分级查看机制，敏感信息访问减少60%，建立完整的访问审计链路</div>
              </div>
            </div>
            
            {/* 风控标签图表 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">风控标签管控效果</h5>
              <div className="relative h-64">
                <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>200</span>
                  <span>150</span>
                  <span>100</span>
                  <span>50</span>
                  <span>0</span>
                </div>
                <div className="ml-8 h-full relative">
                  <div className="absolute left-0 right-0 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 text-sm font-semibold text-cyan-600">60%</div>
                      <div className="w-24 bg-cyan-500 rounded-t" style={{ height: '144px' }}></div>
                      <div className="text-center mt-3">
                        <div className="text-sm font-medium text-gray-700">120单</div>
                        <div className="text-sm text-gray-600">标签管控</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            
              {/* 图例 */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-cyan-500"></div>
                  <span className="text-sm text-gray-600">管控订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">减少率: 60%</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>

          {/* 3. 动态参数 */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">参</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">动态参数</h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
                <div className="text-gray-700 mb-4">风控策略参数固定化，容易被外界摸清规律，缺乏动态调整机制</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
                <div className="text-gray-700">实施动态参数机制，策略有效性提升45%，外界预测难度大幅增加</div>
              </div>
            </div>
            
            {/* 动态参数图表 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">动态参数管控效果</h5>
              <div className="relative h-64">
                <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>150</span>
                  <span>113</span>
                  <span>75</span>
                  <span>38</span>
                  <span>0</span>
                </div>
                <div className="ml-8 h-full relative">
                  <div className="absolute left-0 right-0 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 text-sm font-semibold text-teal-600">45%</div>
                      <div className="w-24 bg-teal-500 rounded-t" style={{ height: '108px' }}></div>
                      <div className="text-center mt-3">
                        <div className="text-sm font-medium text-gray-700">90单</div>
                        <div className="text-sm text-gray-600">动态参数</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            
              {/* 图例 */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-teal-500"></div>
                  <span className="text-sm text-gray-600">管控订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">提升率: 45%</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>

        {/* 方向5：极端预防机制 */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">方向5：极端预防机制</h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            <span className="font-semibold">流程缺陷及策略局限导致异常资金风险</span>，针对场馆多钱、沉睡用户等极端情况建立预警和防御策略，确保资金安全。
          </p>

          {/* 1. 钱包预警 */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">钱</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">钱包预警</h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
                <div className="text-gray-700 mb-4">用户钱包异常变动缺乏实时监控，无法及时发现异常资金流动</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
                <div className="text-gray-700">建立钱包异常预警机制，异常资金发现率提升85%，响应时间缩短至分钟级</div>
              </div>
            </div>
            
            {/* 钱包预警图表 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">钱包预警效果</h5>
              <div className="relative h-64">
                <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>300</span>
                  <span>225</span>
                  <span>150</span>
                  <span>75</span>
                  <span>0</span>
                </div>
                <div className="ml-8 h-full relative">
                  <div className="absolute left-0 right-0 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 text-sm font-semibold text-emerald-600">85%</div>
                      <div className="w-24 bg-emerald-500 rounded-t" style={{ height: '204px' }}></div>
                      <div className="text-center mt-3">
                        <div className="text-sm font-medium text-gray-700">255单</div>
                        <div className="text-sm text-gray-600">钱包预警</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              
              {/* 图例 */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-emerald-500"></div>
                  <span className="text-sm text-gray-600">预警订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">发现率: 85%</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>

          {/* 2. 场馆多钱 */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">场</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">场馆多钱</h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
                <div className="text-gray-700 mb-4">场馆账户异常增加资金，缺乏有效的监控和预警机制</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
                <div className="text-gray-700">场馆多钱预警机制上线，异常资金识别率达到92%，有效防范资金风险</div>
              </div>
            </div>
            
            {/* 场馆多钱图表 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">场馆多钱预警效果</h5>
              <div className="relative h-64">
                <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>200</span>
                  <span>150</span>
                  <span>100</span>
                  <span>50</span>
                  <span>0</span>
                </div>
                <div className="ml-8 h-full relative">
                  <div className="absolute left-0 right-0 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 text-sm font-semibold text-rose-600">92%</div>
                      <div className="w-24 bg-rose-500 rounded-t" style={{ height: '184px' }}></div>
                      <div className="text-center mt-3">
                        <div className="text-sm font-medium text-gray-700">184单</div>
                        <div className="text-sm text-gray-600">场馆多钱</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            
              {/* 图例 */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-rose-500"></div>
                  <span className="text-sm text-gray-600">预警订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">识别率: 92%</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>

          {/* 3. 沉睡用户 */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">睡</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">沉睡用户</h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
                <div className="text-gray-700 mb-4">长期沉睡用户突然活跃，可能存在账号被盗或异常操作风险</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
                <div className="text-gray-700">沉睡用户活跃预警机制，异常账号识别率78%，有效防范账号盗用风险</div>
              </div>
            </div>
            
            {/* 沉睡用户图表 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">沉睡用户预警效果</h5>
              <div className="relative h-64">
                <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>150</span>
                  <span>113</span>
                  <span>75</span>
                  <span>38</span>
                  <span>0</span>
                </div>
                <div className="ml-8 h-full relative">
                  <div className="absolute left-0 right-0 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 text-sm font-semibold text-amber-600">78%</div>
                      <div className="w-24 bg-amber-500 rounded-t" style={{ height: '156px' }}></div>
                      <div className="text-center mt-3">
                        <div className="text-sm font-medium text-gray-700">117单</div>
                        <div className="text-sm text-gray-600">沉睡用户</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            
              {/* 图例 */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-amber-500"></div>
                  <span className="text-sm text-gray-600">预警订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">识别率: 78%</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>

          {/* 4. 风险帐号 */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">险</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800">风险帐号</h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
                <div className="text-gray-700 mb-4">高风险账号识别不够精准，缺乏综合风险评估和动态监控机制</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
                <div className="text-gray-700">建立风险账号综合评估体系，风险账号识别准确率达到88%，提前预防风险事件</div>
              </div>
            </div>
            
            {/* 风险帐号图表 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">风险帐号识别效果</h5>
              <div className="relative h-64">
                <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>250</span>
                  <span>188</span>
                  <span>125</span>
                  <span>63</span>
                  <span>0</span>
                </div>
                <div className="ml-8 h-full relative">
                  <div className="absolute left-0 right-0 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 text-sm font-semibold text-slate-600">88%</div>
                      <div className="w-24 bg-slate-500 rounded-t" style={{ height: '176px' }}></div>
                      <div className="text-center mt-3">
                        <div className="text-sm font-medium text-gray-700">220单</div>
                        <div className="text-sm text-gray-600">风险帐号</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* X轴标签 */}
              <div className="text-center text-sm font-medium text-gray-600 mb-4">识别类型</div>
              
              {/* 图例 */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-slate-500"></div>
                  <span className="text-sm text-gray-600">识别订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">准确率: 88%</span>
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
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