import React from 'react';
import { Shield, Search, AlertTriangle, Target, Users, TrendingDown, Eye, Lock, Calendar, BarChart3, CheckCircle, XCircle, Clock, Award, Lightbulb, ArrowRight } from 'lucide-react';

export const AuditDepartmentOverview = () => {
  // Investigation cases data - 去除状态列
  const investigationCases = [
    { 
      category: "YH对外协作", 
      personnel: "538** Huich***、392** Gao**、392** Sanda****", 
      violation: "与外部合作，协助查询账号备注内容后外发", 
      result: "即刻开除", 
      resultColor: "bg-blue-100 text-blue-600",
      month: "4月份"
    },
    { 
      category: "账号销售测试", 
      personnel: "Lile*****", 
      violation: "等级1，按照计划成功卖至外部团队，但截至目前该号并未有任何存取和投注行为", 
      result: "持续关注，并重新养号至≥等级3后再尝试卖出", 
      resultColor: "bg-blue-100 text-blue-600",
      month: "5月份"
    },
    { 
      category: "YH对外协作", 
      personnel: "225** Mona***、Baid*****", 
      violation: "与外部合作，协助查询账号备注内容后外发", 
      result: "即刻开除", 
      resultColor: "bg-blue-100 text-blue-600",
      month: "6月份"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">3.3 FKZX-稽查组 工作总结</h1>
      </div>

      {/* 1. 上季度工作调整对比 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">一、部门工作内容</h2>
        </div>

        <div className="bg-white rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-center font-semibold w-24">时期</th>
                  <th className="p-4 text-center font-semibold">日常录屏</th>
                  <th className="p-4 text-center font-semibold">钓鱼执法</th>
                  <th className="p-4 text-center font-semibold">套利手法分析</th>
                  <th className="p-4 text-center font-semibold">活动套利分析</th>
                  <th className="p-4 text-center font-semibold">流程梳理</th>
                  <th className="p-4 text-center font-semibold">买卖号</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-center">
                    <div className="font-bold text-gray-800">Q1</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">主要围绕着纸飞机，被动式。设定规范做检查并给予预警</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">被动式。部门反馈再介入调查</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">无相关工作</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">无相关工作</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">仅配合ZJB梳理员工规范</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">无相关工作</div>
                  </td>
                </tr>
                
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-center">
                    <div className="font-bold text-gray-800">Q2</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">主要针对犯罪行为进行检查，如：泄露机密、内外勾结</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">主动式。多个小号潜入外部群组及论坛</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">每月挖掘技术套利手段并更新资料库，持续研究新颖套利手法</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">线上&线下活动结束后，每月针对参与用户盈利情况分析，异常及时同步对应部门</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">针对FK内部流程问题梳理及优化</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-gray-700 text-sm">内部养号后卖出，每日观察行为和目标</div>
                  </td>
                </tr>

                {/* 形式转变行 - 不用色块表示，直接文字 */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-center">
                    <div className="font-bold text-gray-800">形式转变</div>
                  </td>
                  <td className="p-6" colSpan="6">
                    {/* 对比总结 - 从下方移到这里 */}
                    <div className="flex items-center justify-center space-x-8">
                      <div className="bg-white rounded-lg p-6 border-l-4 border-gray-500 flex-1 max-w-md">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">之前</div>
                          <h4 className="text-lg font-bold text-gray-700">被动式监控</h4>
                        </div>
                        <p className="text-gray-700 text-sm">初期，更多是一些较初级、被动式的稽查行为，处于有效手段摸索阶段。</p>
                      </div>

                      <div className="flex items-center">
                        <ArrowRight className="w-12 h-12 text-blue-600" />
                      </div>

                      <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500 flex-1 max-w-md">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">之后</div>
                          <h4 className="text-lg font-bold text-blue-700">主动式防控</h4>
                        </div>
                        <p className="text-gray-700 text-sm">主要针对行为，采取主动式方法。通过套利研究、内部监控、钓鱼执法、活动分析、风险梳理等综合手段来挖掘潜在风险</p>
                      </div>
                    </div>
                  </td>
                </tr>

                {/* 经验总结行 - 不用色块表示，直接文字 */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-center">
                    <div className="font-bold text-gray-800">经验总结</div>
                  </td>
                  <td className="p-6" colSpan="6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <h4 className="font-bold text-blue-700">执行难点</h4>
                        </div>
                        <p className="text-gray-700 text-sm">耗时较长，且人员众多，需要过滤几遍才能锁定哪个部门/人员。一旦涉及业绩岗位则无从下手。</p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <h4 className="font-bold text-blue-700">活动套利</h4>
                        </div>
                        <p className="text-gray-700 text-sm mb-2">多月分析显示异常投注已受控，未发现长期高占比套利线路。但活动用户盈利占比仍高，主因是彩金高、倍数低，存在单一条件可领多重彩金情况</p>
                        <div className="bg-white rounded p-2 border border-blue-200">
                          <span className="text-sm font-medium text-blue-700">优化方向：对规则进行限制</span>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <h4 className="font-bold text-blue-700">后台操作日志bug</h4>
                        </div>
                        <p className="text-gray-700 text-sm mb-2">系统在非账号搜索方式下不记录操作日志。用户只需停留在验证码页面并刷新，即可查看所有已发送号码，可能与外部合谋获利且不被系统监测</p>
                        <div className="bg-white rounded p-2 border border-blue-200">
                          <span className="text-sm font-medium text-blue-700">优化方向：限制该页面的刷新全展示功能，仅允许通过账号搜索查看</span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 2. Q2 Work Results */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">二、Q2工作成果</h2>
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-200 mb-8">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Award className="w-6 h-6 text-blue-500 mr-3" />
            调查成果总览
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-3">3</div>
              <div className="text-gray-600 font-medium text-lg">调查案件总数</div>
              <div className="text-sm text-blue-600 mt-2">100%处置</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-3">5</div>
              <div className="text-gray-600 font-medium text-lg">违规人员处置</div>
              <div className="text-sm text-gray-500 mt-2">4开除+1持续关注</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-3">1</div>
              <div className="text-gray-600 font-medium text-lg">买卖号测试</div>
              <div className="text-sm text-gray-500 mt-2">持续推进</div>
            </div>
          </div>
        </div>

        {/* Detailed Investigation Cases - 去除状态列 */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">详细案件记录</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold w-20">月份</th>
                  <th className="p-4 text-left font-semibold w-32">案件类型</th>
                  <th className="p-4 text-left font-semibold">涉及人员</th>
                  <th className="p-4 text-left font-semibold">违规行为</th>
                  <th className="p-4 text-center font-semibold">处置结果</th>
                </tr>
              </thead>
              <tbody>
                {investigationCases.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-blue-600">{item.month}</td>
                    <td className="p-4 font-semibold whitespace-nowrap">{item.category}</td>
                    <td className="p-4">{item.personnel}</td>
                    <td className="p-4">{item.violation}</td>
                    <td className="p-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${item.resultColor}`}>{item.result}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 3. Q3 Work Plan */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">三、Q3工作计划</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800 whitespace-nowrap">人员培训</h3>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">原班人马对于各类玩法、分析报告偏弱，已安排主管分批次从基础玩法开始进行培训，确保每个人都能独当一面</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800 whitespace-nowrap">权限梳理</h3>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">比如账号备注内容，仅开放权限给到组长级以上，减少专员犯罪行为</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800 whitespace-nowrap">钓鱼执法升级</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <p className="text-gray-700 text-sm mb-2">已拉拢前套利团伙人员加入外部团队作为卧底，按情报和贡献价值给予奖金</p>
                <div className="bg-white rounded p-3 border">
                  <span className="text-sm font-medium text-blue-600">风险提示：人在国内，有风险，预计7月底答复</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-800 whitespace-nowrap">活动监控</h3>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">已知漏洞优化后进行跟踪，再以其它方式尝试套利</p>
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