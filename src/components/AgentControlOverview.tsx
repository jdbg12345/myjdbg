import React from 'react';
import { Shield } from 'lucide-react';

export const AgentControlOverview = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 border-b-4 border-blue-600 pb-4 mb-4">3.4 代理风控说明</h1>
        <div className="text-gray-600 text-lg">
          <p className="text-gray-700 text-lg leading-relaxed font-semibold">Q3在这个方向的投入资源较少，Q4会从<span className="text-blue-600">佣金审核流程、代理质量分析</span>等方向进行重点优化</p>
        </div>
      </div>   

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
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
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">Q4重点</span>
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
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-xs">Q4重点</span>
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
              <div className="text-sm opacity-90">xx%权重</div>
            </div>
            {/* 第二行：子指标 */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">贡献净盈利</div>
                <div className="text-xs text-gray-600 mt-1">xx%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">投入产出比</div>
                <div className="text-xs text-gray-600 mt-1">xx%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">贡献持续度</div>
                <div className="text-xs text-gray-600 mt-1">xx%</div>
              </div>
            </div>
          </div>

          {/* 第三列：下级质量 */}
          <div className="space-y-3">
            {/* 第一行：标题 */}
            <div className="bg-blue-600 text-white p-4 rounded text-center">
              <div className="text-base font-semibold">下级质量</div>
              <div className="text-sm opacity-90">xx%权重</div>
            </div>
            {/* 第二行：子指标 */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">一次性会员</div>
                <div className="text-xs text-gray-600 mt-1">-xx%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">贡献集中度</div>
                <div className="text-xs text-gray-600 mt-1">-xx%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">新客贡献度</div>
                <div className="text-xs text-gray-600 mt-1">xx%</div>
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
                <div className="text-xs text-gray-600 mt-1">-xx%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">负盈利风险</div>
                <div className="text-xs text-gray-600 mt-1">-xx%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                <div className="text-sm font-semibold text-blue-700">下级风险度</div>
                <div className="text-xs text-gray-600 mt-1">-xx%</div>
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
          <h3 className="text-2xl font-bold text-gray-800">有效贡献度呈现示意</h3>
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
                gradeColor: 'text-blue-600 bg-blue-50'
            },
            {
                id: '#3Y218350',
                grade: 'A档 - 优秀',
                site: 'Y8',
                joinDate: '2025-08-10',
                totalScore: 80,
                businessScore: 90,
                userQuality: 66,
                riskControl: 10,
                activeUsers: 586,
                monthlyActive: 586,
                validFlow: '¥156.8万',
                contributionProfit: '¥41.0万',
                totalDeposit: '¥40.1万',
                retention: '17%',
                riskUsers: '6%',
                gradeColor: 'text-blue-600 bg-blue-50'
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
              <div className="mt-2 text-2xl font-bold text-blue-600">{agent.userQuality}</div>
            </div>

            {/* 第四列：风险评估 */}
            <div className="col-span-1">
              <div className="text-sm text-gray-500">风险评估</div>
              <div className="mt-2 text-2xl font-bold text-blue-600">{agent.riskControl}</div>
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
                <span className="font-semibold text-gray-800">120%</span>
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
                <span className="font-semibold text-gray-800">70%</span>
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
                <span className="font-semibold text-gray-800">80%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">下级风险度</span>
                <span className="font-semibold text-gray-800">70%</span>
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