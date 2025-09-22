import React from 'react';
import { Users, Target, BookOpen, Shield, Calendar, TrendingUp, Award, BarChart3, CheckCircle, Clock, AlertCircle, Lightbulb, Search, Settings, Play, Layers } from 'lucide-react';

export const InternalControlOverview = () => {
  // 课件类别数据 - 重新组织为以类别为主
  const courseCategories = [
    {
      category: "规则制度",
      count: 2,
      courses: ["部门规则制度", "安全培训"]
    },
    {
      category: "网站基础",
      count: 3,
      courses: ["足球基础知识", "真人棋牌", "体育串关"]
    },
    {
      category: "风控业务",
      count: 6,
      courses: ["套利原理", "彩票高盈利异常", "策略触发及审核方向", "嫌疑洗钱异常会员", "策略触发及审核方向2", "常见套利原理解析"]
    },
    {
      category: "风控流程",
      count: 5,
      courses: ["风控质检规则", "审单流程", "风控审单操作流程", "填表指南", "群组表格质检"]
    },
    {
      category: "风控案例",
      count: 2,
      courses: ["财务极速骗分", "近期盗号案例"]
    }
  ];

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">3.2 FKZX-内控组 工作总结</h1>
      </div>

      {/* 1. Department Work Content - 调整工作模块列宽度，其他列均匀分配 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">一、部门工作内容</h2>
        </div>
        
        <div className="bg-white rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse table-fixed">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-center font-semibold w-32">工作模块</th>
                  <th className="p-4 text-center font-semibold">新人培训</th>
                  <th className="p-4 text-center font-semibold">回群支持（Q2-新增）</th>
                  <th className="p-4 text-center font-semibold">出单抽检（Q2-新增）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-left">
                    <div className="font-bold text-center text-gray-800">工作内容</div>
                  </td>
                  <td className="p-4 text-left">
                    <div className="text-gray-700 text-sm">负责风控中心新人培训，建立完整的培训课程体系和考核机制</div>
                  </td>
                  <td className="p-4 text-left">
                    <div className="text-gray-700 text-sm">一审人员人力紧张，一审工作项目包含群组对接及审单工作。内控组承接客服回群工作，通过专人专项方式提升审单效能。</div>
                  </td>
                  <td className="p-4 text-left">
                    <div className="text-gray-700 text-sm">建立内部质检团队，对新人、低绩效人员或高风险操作出单进行定期抽检和监督。</div>
                  </td>
                </tr>
                
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-left">
                    <div className="font-bold text-center text-gray-800">当前现状</div>
                  </td>
                  <td className="p-4 text-left">
                    <div className="text-gray-700 text-sm space-y-3">
                      {/* 新人培训的当前现状 - 拆分为三个蓝色小色块，添加图标，改为1、2、3 */}
                      <div className="bg-white rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                          <div className="font-semibold text-blue-700 text-xs">第一阶段：</div>
                        </div>
                        <div className="text-xs text-blue-600">新人助理群组对接接受新人，制定培训周期计划</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                          <div className="font-semibold text-blue-700 text-xs">第二阶段：</div>
                        </div>
                        <div className="text-xs text-blue-600">内控内部培训考核</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                          <div className="font-semibold text-blue-700 text-xs">第三阶段：</div>
                        </div>
                        <div className="text-xs text-blue-600">测试交付群组对接业务团队，安排新人下组</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-left">
                    <div className="text-gray-700 text-sm space-y-3">
                      {/* 回群支持的当前现状 - 拆分已完成为2个小色块 */}
                      <div className="bg-white rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center space-x-1 mb-1">
                          <CheckCircle className="w-3 h-3 text-blue-500" />
                          <span className="font-semibold text-blue-700 text-xs">已完成1：</span>
                        </div>
                        <div className="text-xs text-blue-600">制定内控回群专员绩效方案</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center space-x-1 mb-1">
                          <CheckCircle className="w-3 h-3 text-blue-500" />
                          <span className="font-semibold text-blue-700 text-xs">已完成2：</span>
                        </div>
                        <div className="text-xs text-blue-600">制定回群专员的培训课件</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center space-x-1 mb-1">
                          <Clock className="w-3 h-3 text-blue-500" />
                          <span className="font-semibold text-blue-700 text-xs">进行中：人员招聘</span>
                        </div>
                        <div className="text-xs text-blue-600">7月安排团队可以抽调的全部人力7人，固定班次插入承接回客服群，实操回群</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-left">
                    <div className="text-gray-700 text-sm space-y-3">
                      <div className="bg-white rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          <span className="font-semibold text-blue-700 text-sm">已上线：</span>
                        </div>
                        <div className="text-xs text-blue-600">内控配置事前拦截，试运行中</div>
                      </div>
                      {/* 内控质检的当前现状 - 新增试运行 */}
                      <div className="bg-white rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span className="font-semibold text-blue-700 text-sm">试运行：</span>
                        </div>
                        <div className="text-xs text-blue-600">已下发新角色进行抽检</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center space-x-2 mb-1">
                          <Settings className="w-4 h-4 text-blue-500" />
                          <div className="font-semibold text-blue-700 text-xs">新需求：</div>
                        </div>
                        <div className="space-y-1 text-xs">
                          <div className="text-blue-600">• 复审环节管理转单功能</div>
                          <div className="text-blue-600">• 内控复审单处理机制</div>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">40</div>
            <div className="text-gray-600 font-medium">交付人数</div>
            <div className="text-sm text-gray-500 mt-2">完成19批次培训</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-gray-600 font-medium">课程类型</div>
            <div className="text-sm text-gray-500 mt-2 space-y-1">
              <div>8-15天周期：风控中心新人课程、内控培训师课程、回群内控专员课程</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">18</div>
            <div className="text-gray-600 font-medium">培训课件</div>
            <div className="text-sm text-gray-500 mt-2">5个类别：规则制度、网站基础、风控业务、风控流程、风控案例</div>
          </div>
        </div>

        {/* 详细课件清单 - 调整为以课件类别为主 */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">详细课件清单</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 text-center font-semibold w-20">序号</th>
                  <th className="p-4 text-left font-semibold w-32">课件类别</th>
                  <th className="p-4 text-center font-semibold w-24">课件数量</th>
                  <th className="p-4 text-left font-semibold">课件内容</th>
                </tr>
              </thead>
              <tbody>
                {courseCategories.map((category, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 text-center font-semibold">{index + 1}</td>
                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">
                        {category.category}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-lg font-bold text-blue-600">{category.count}</span>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-gray-700">
                        {category.courses.join('、')}
                      </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800">内控部成立回群团队</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">具体内容</h4>
                <p className="text-gray-700 text-sm">承接业务一审，日常对接客服群组的回群工作，预计人力20人</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">预期收益</h4>
                <div className="text-gray-700 text-sm space-y-2">
                  <p><strong>提升效能：</strong>一审日常工作抽离回群工作项目，预计20个人力，按照人均250单/天，可以额外新增审单量5000效能/天，精简工作范围，提升审单效能，专人专项。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800">内控培训体系搭建</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">具体内容</h4>
                <p className="text-gray-700 text-sm">针对新人类（一审、二审、远程新人）、管理类（基层管理）业务类（业务更新、案例分享）全方位全层级的覆盖培训</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">预期收益</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>提升业务水平：</strong>建立全层级培训体系，提高业务能力，减少投诉，提升效能并储备各层级人才</li>
                  <li>• <strong>降低管理成本：</strong>通过定期培训减少技能不足导致的错误和重复劳动</li>
                  <li>• <strong>建立培训文档：</strong>统一内容方法，减少沟通成本，促进人才培养</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800">内控质检体系搭建</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">具体内容</h4>
                <p className="text-gray-700 text-sm">成立内部抽检团队，负责质检、风控和业务同步抽查，形成业务同步→培训→抽查→问题追踪→改进的闭环流程</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">预期收益</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>降低安全隐患：</strong>通过内部二审把关，降低新人和异常人员导致的风险事件</li>
                  <li>• <strong>减少损失：</strong>内部审核可拦截水错误和未看备注等问题，避免造成实际损失</li>
                  <li>• <strong>快速反应跟改进：</strong>质检发现的问题及时同步给业务团队，减少错误复现</li>
                </ul>
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