import React from 'react';
import { Target, TrendingUp, Shield, Calendar, AlertCircle, Search, Lightbulb, Award, BarChart3, ArrowRight, AlertTriangle } from 'lucide-react';

export const SummaryOverview = () => {
  // Mock data for risk control progress calculation
  const riskControlData = [
    {
      name: "风险预警",
      issues: [
        { status: 'live' }, { status: 'live' }, { status: 'live' }, { status: 'live' }, { status: 'live' }, { status: 'live' },
        { status: 'planning' }, { status: 'planning' }, { status: 'planning' }, { status: 'planning' }, { status: 'planning' }
      ]
    },
    {
      name: "系统审核", 
      issues: [
        { status: 'live' }, { status: 'live' }, { status: 'live' },
        { status: 'development' }, { status: 'development' }, { status: 'development' }, { status: 'development' },
        { status: 'planning' }, { status: 'planning' }, { status: 'planning' }, { status: 'planning' }, { status: 'planning' },
        { status: 'planning' }, { status: 'planning' }, { status: 'planning' }, { status: 'planning' }, { status: 'planning' }, { status: 'planning' }
      ]
    },
    {
      name: "系统派单",
      issues: [
        { status: 'live' },
        { status: 'planning' }
      ]
    },
    {
      name: "人工审核",
      issues: [
        { status: 'live' },
        { status: 'development' }, { status: 'development' }, { status: 'development' }, { status: 'development' }, { status: 'development' }, { status: 'development' },
        { status: 'planning' }
      ]
    },
    {
      name: "内控抽检",
      issues: [
        { status: 'live' },
        { status: 'planning' }, { status: 'planning' }, { status: 'planning' }
      ]
    }
  ];

  const additionalRequirements = [
    { status: 'live' }, { status: 'live' }, { status: 'live' }, { status: 'live' }, { status: 'live' }
  ];

  // Calculate overall progress across all business processes
  const calculateOverallProgress = () => {
    let totalWeightedCompletion = 0;
    let totalItems = 0;

    riskControlData.forEach(process => {
      const liveCount = process.issues.filter(issue => issue.status === 'live').length;
      const developmentCount = process.issues.filter(issue => issue.status === 'development').length;
      const processTotal = process.issues.length;
      
      // Calculate weighted completion: live = 100%, development = 50%
      const weightedCompletion = liveCount + (developmentCount * 0.5);
      totalWeightedCompletion += weightedCompletion;
      totalItems += processTotal;
    });

    return Math.round((totalWeightedCompletion / totalItems) * 100);
  };

  // Calculate status counts across all business processes
  const calculateStatusCounts = () => {
    let liveCount = 0;
    let developmentCount = 0;
    let pendingCount = 0;
    let planningCount = 0;

    riskControlData.forEach(process => {
      process.issues.forEach(issue => {
        switch (issue.status) {
          case 'live':
            liveCount++;
            break;
          case 'development':
            developmentCount++;
            break;
          case 'pending':
            pendingCount++;
            break;
          case 'planning':
            planningCount++;
            break;
        }
      });
    });

    return { liveCount, developmentCount, pendingCount, planningCount };
  };

  // Calculate additional requirements count (non-core requirements)
  const calculateAdditionalRequirementsCount = () => {
    return additionalRequirements.filter(req => req.status === 'live').length;
  };

  const overallProgress = calculateOverallProgress();
  const statusCounts = calculateStatusCounts();
  const additionalRequirementsLiveCount = calculateAdditionalRequirementsCount();

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">3.4.0 会员出款风控</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">风险预警</span>
        </div>
      </div>

      {/* Current Status */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">当前现状</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-blue-700 whitespace-nowrap">
                  系统审核问题
                </h3>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600">缺少作弊拦截策略</span>，导致系统直接出款时出现错误，无法有效识别和拦截各类作弊行为
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-blue-700 whitespace-nowrap">
                  人工审核问题
                </h3>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600">风险识别及判定依赖人工</span>，成本效率存在提升空间，质量方面错误频发且同类型错误不断重复
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cause Analysis - 修复标题换行问题，使用原来的icon，字体下一号 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-gray-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <Search className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">问题拆解</h2>
        </div>
        <div className="grid grid-cols-5 gap-6">
          {[
            {
              number: '1',
              title: '作弊策略做的较少',
              content: '人工经验很少转为系统策略，而人工存在能力差异及主动作弊风险',
              color: 'bg-blue-500'
            },
            {
              number: '2',
              title: '出款流程有风险',
              content: '派单机制不细分难度、单人审核过即可出款等核心流程不够严谨',
              color: 'bg-blue-500'
            },
            {
              number: '3',
              title: '跨站点未完全打通',
              content: '多站点数据在风控维度上相对隔离，无法有效进行多维度的关联',
              color: 'bg-blue-500'
            },
            {
              number: '4',
              title: '数据及能力不完整',
              content: '站点数据和能力外，未引入外部数据及能力，如B端跨站数据及能力',
              color: 'bg-blue-500'
            },
            {
              number: '5',
              title: '规则及策略较简单',
              content: '现有仅是多规则策略简单叠加，未引入复杂算法，更未涉及AI大模型',
              color: 'bg-blue-500'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-center mb-4">
                <div className={`w-8 h-8 ${item.color} text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2`}>
                  {item.number}
                </div>
                <h4 className="font-bold text-gray-800 text-base whitespace-nowrap">{item.title}</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed text-center">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Expected Benefits */}
      <div className="bg-white rounded-lg border border-blue-200 p-8 mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Award className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">预期收益</h3>
          <span className="text-gray-600">将逐月显现效果，预计Q4可基本达成目标</span>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-6 h-6 text-blue-500" />
              <div className="min-w-0 flex-1">
                <h4 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                  定量收益
                </h4>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <div className="text-lg font-semibold text-gray-700">
                系统直接、间接拦截收益：<span className="text-red-500">+Δ 千万级/月</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-blue-500" />
              <div className="min-w-0 flex-1">
                <h4 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                  定性收益
                </h4>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <div className="text-lg font-semibold text-gray-700">会员了解也难突破FK（50+策略/100+个特征）作弊</div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Progress */}
      <div className="bg-white rounded-lg border border-blue-200 p-8 mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">整体进度</h3>
          <span className="text-gray-600">核心需求</span>

          <div className="flex items-center space-x-4 text-gray-600">
            <span className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold border border-blue-200">已上线：{statusCounts.liveCount}</span>
            <span className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold border border-blue-200">开发中：{statusCounts.developmentCount}</span>
            <span className="bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold border border-gray-200">待开发：{statusCounts.pendingCount}</span>
            <span className="bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold border border-gray-200">方案中：{statusCounts.planningCount}</span>
            <span className="text-gray-600">非核心需求</span>
            <span className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold border border-blue-200">已上线：{additionalRequirementsLiveCount}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-blue-500" />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                    Q2：整体进度
                  </h4>
                </div>
              </div>
              <span className="text-3xl font-bold text-gray-700">{overallProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div 
                className="bg-blue-500 h-6 rounded-full"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-blue-500" />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                    Q3：计划进度
                  </h4>
                </div>
              </div>
              <span className="text-3xl font-bold text-gray-700">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div 
                className="bg-blue-500 h-6 rounded-full"
                style={{ width: '90%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX Q3 REPORT</div>
      </div>
    </div>
  );
};