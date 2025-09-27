import React from 'react';
import { Shield, Users, Zap, BarChart3, TrendingUp, Award, CheckCircle, Clock, Target } from 'lucide-react';

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
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-500">1.0阶段</span>
                  <h4 className="text-xl font-bold text-gray-800">过去状态</h4>
                </div>
                <p className="text-gray-600 mb-4">人为绝对，系统只是简单的辅助工具</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    <span>人工决策：<strong className="text-gray-800">90%+</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Zap className="w-4 h-4 mr-2 text-gray-400" />
                    <span>系统作用：<strong className="text-gray-800">辅助工具</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart3 className="w-4 h-4 mr-2 text-gray-400" />
                    <span>效率：<strong className="text-gray-800">低</strong></span>
                  </div>
                </div>
              </div>

              {/* 2.0阶段 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-500">2.0阶段</span>
                  <h4 className="text-xl font-bold text-gray-800">当前目标</h4>
                </div>
                <p className="text-gray-600 mb-4">系统为绝对，但是还是人来做最后决策</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-blue-400" />
                    <span>人工决策占比：<strong className="text-blue-800">20-30%</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Zap className="w-4 h-4 mr-2 text-blue-400" />
                    <span>系统作用：<strong className="text-blue-800">核心判定</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart3 className="w-4 h-4 mr-2 text-blue-400" />
                    <span>效率：<strong className="text-blue-800">中高</strong></span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                    正在实现
                  </div>
                </div>
              </div>

              {/* 3.0阶段 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-green-500">3.0阶段</span>
                  <h4 className="text-xl font-bold text-gray-800">理想状态</h4>
                </div>
                <p className="text-gray-600 mb-4">系统为绝对，且大部分订单直接系统做决策，人做决策的比例要大大降低</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-green-400" />
                    <span>人工决策占比：<strong className="text-green-800">＜5%</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Zap className="w-4 h-4 mr-2 text-green-400" />
                    <span>系统作用：<strong className="text-green-800">完全自主</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart3 className="w-4 h-4 mr-2 text-green-400" />
                    <span>效率：<strong className="text-green-800">极高</strong></span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    未来目标
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
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>实时运行中</span>
              </div>
            </div>
            
            {/* 流程图 */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                {/* 申请提交 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1">申请提交</h5>
                  <p className="text-sm text-gray-600">玩家/代理提款申请</p>
                </div>

                {/* 箭头 */}
                <div className="text-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* AI智能审核 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1">AI智能审核</h5>
                  <p className="text-sm text-gray-600">多维度风险实时检测</p>
                  <div className="mt-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">92%通过</span>
                  </div>
                </div>

                {/* 箭头 */}
                <div className="text-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* 自动放行/人工复审 */}
                <div className="text-center">
                  <div className="space-y-4">
                    <div>
                      <div className="w-20 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="font-semibold text-gray-800 text-sm">自动放行</h5>
                      <p className="text-xs text-gray-600">即时到账</p>
                    </div>
                    <div>
                      <div className="w-20 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="font-semibold text-gray-800 text-sm">人工复审</h5>
                      <p className="text-xs text-gray-600">专业FK二次审核</p>
                    </div>
                  </div>
                </div>
              </div>
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
                    <p className="text-gray-600">全面监控玩家行为，防范异常操作与套利行为</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-500">完善度</div>
                  <div className="flex items-center justify-end mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600 font-medium">+12%</span>
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
      </div> {/* end of 2.1/2.2/2.3 wrapper */}

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};