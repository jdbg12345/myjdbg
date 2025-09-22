import React from 'react';
import { Users, Target, Calendar, BarChart3, CheckCircle, Clock, Award } from 'lucide-react';

export const AuditGroup = () => {
  // 上季度规划数据
  const lastQuarterPlans = [
    {
      name: "风控标签完善优化",
      importance: "SS",
      details: "各类套利场景统计，标签明确化便于部门清晰复盘带来的市场动向明确，同时针对常规，特殊，特殊频发案例进行培训手册纳入提高新人成长，完成闭环。",
      targets: [
        "1.套利场景梳理，I II III类型区分",
        "2.常见，特殊类型案例定期同步",
        "3.对于每月 持续跟进优化"
      ],
      progress: 90
    },
    {
      name: "风控审核超时/取消订单复盘",
      importance: "SS",
      details: "定期针对超时/取消订单进行进行拉取原因分析，实现效率提升。",
      targets: [
        "1.已知问题发现调整",
        "2.板块负责人okr月指标制定执行",
        "3.持续跟进优化"
      ],
      progress: 80
    },
    {
      name: "部门流程复盘优化",
      importance: "SS",
      details: "问题缺口收集窗口成立，内部外部定期长期发现问题及跟进项目，核心目的提高部门对接外部门工作效率。",
      targets: [
        "1.内部周例会问题收集",
        "2.外部问题案例收集",
        "3.持续跟进优化"
      ],
      progress: 80
    },
    {
      name: "部门核心成员培养",
      importance: "SS",
      details: "目前市场动向不稳，核心员工近期或短期内预流失避免导致影响业务相应筹备",
      targets: [
        "1.部门班次细分至以组为单位，上级负责'传帮带''赋能'工作",
        "2.搬迁问题员工离职占比高，新人培训周期需要一定周期，需持续跟进"
      ],
      progress: 30
    },
    {
      name: "部门敏感权限调整",
      importance: "SS",
      details: "各角色权限进行梳理，分化功能，达到权限层级分明，如风控标签查看进行上下级优化展示，达到信息安全把控目的",
      targets: [
        "1.全站配置差异化统一",
        "2.铭感权限回收",
        "3.风控标签查询铭感操作稽查功能上线"
      ],
      progress: 90
    }
  ];

  // 第三季度重点事项规划数据
  const thirdQuarterPlans = [
    {
      name: "各场馆杀率逐月分析",
      importance: "SS",
      details: "1. 每周、每月从场馆的杀率、流水占比->游戏->玩法的杀率、流水占比去评估异常程度。2. 每周、每月从站点->场馆的净利率(包含红利返水)->游戏->玩法去评估异常程度。",
      target: "预计7月"
    },
    {
      name: "每月活动复盘优化",
      importance: "SS",
      details: "每月2次活动复盘，针对风险事件级进行分析及建议，措施产出",
      target: "预计7月"
    },
    {
      name: "业务部门问题意见优化",
      importance: "SS",
      details: "每周频次针对业务部门收集相应问题及建议进行合理自查改善及回执交互",
      target: "预计7月"
    },
    {
      name: "已上线功能关注执行",
      importance: "SS",
      details: "三季度上线优化功能执行数据报告复盘 ，明确成果与改进迭代计划",
      target: "预计3季度"
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getImportanceStyle = (importance: string) => {
    return 'bg-red-100 text-red-700 border border-red-200';
  };

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">3.1 FKZX-审核组 工作总结</h1>
      </div>

      {/* 1. 部门工作内容 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">一、部门工作内容</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left font-semibold w-48">项目名称</th>
                <th className="p-4 text-center font-semibold w-24">重要程度</th>
                <th className="p-4 text-left font-semibold">详细内容</th>
                <th className="p-4 text-left font-semibold w-64">目标完成</th>
                <th className="p-4 text-center font-semibold w-24">进度</th>
              </tr>
            </thead>
            <tbody>
              {lastQuarterPlans.map((plan, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">{plan.name}</td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getImportanceStyle(plan.importance)}`}>
                      {plan.importance}
                    </span>
                  </td>
                  <td className="p-4 text-gray-700">{plan.details}</td>
                  <td className="p-4">
                    <div className="space-y-1">
                      {plan.targets.map((target, targetIndex) => (
                        <div key={targetIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{target}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border-4 border-gray-200 flex items-center justify-center mb-2 relative">
                        <svg className="w-12 h-12 transform -rotate-90 absolute">
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            className="text-gray-200"
                          />
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 20}`}
                            strokeDashoffset={`${2 * Math.PI * 20 * (1 - plan.progress / 100)}`}
                            className={`${getProgressColor(plan.progress)} transition-all duration-300`}
                          />
                        </svg>
                        <span className="text-sm font-bold text-gray-700">{plan.progress}%</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Q3工作计划 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">二、Q3工作计划</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left font-semibold w-48">项目名称</th>
                <th className="p-4 text-center font-semibold w-24">重要程度</th>
                <th className="p-4 text-left font-semibold">详细内容</th>
                <th className="p-4 text-center font-semibold w-32">目标完成</th>
              </tr>
            </thead>
            <tbody>
              {thirdQuarterPlans.map((plan, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">{plan.name}</td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getImportanceStyle(plan.importance)}`}>
                      {plan.importance}
                    </span>
                  </td>
                  <td className="p-4 text-gray-700">{plan.details}</td>
                  <td className="p-4 text-center">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">
                      {plan.target}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};