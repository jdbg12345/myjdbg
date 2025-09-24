import React from 'react';
import { Calendar } from 'lucide-react';

export const SystemTransformationRhythm = () => {
  const progressSchedule = [
    {
      time: "Q2 2025",
      stage: "试点验证",
      work: "选择核心业务场景进行小范围试点，验证新机制的有效性和可行性。重点关注派单机制、风险分数体系、关键策略的落地效果。",
      result: "试点成功，各项指标达到预期，为全面推广奠定基础",
      current: true
    },
    {
      time: "Q3 2025",
      stage: "逐步推广",
      work: "基于试点经验，将成功验证的机制逐步推广到更大范围。同时继续完善系统功能，补充更多策略维度。",
      result: "预计覆盖80%核心业务场景，系统化程度显著提升",
      current: false
    },
    {
      time: "Q4 2025",
      stage: "全面落地",
      work: "完成所有核心功能的全面部署，建立完整的风控体系。实现人工审核向系统审核的根本性转变。",
      result: "预计实现90%+的系统化覆盖，人工依赖度降至最低",
      current: false
    },
    {
      time: "2026年",
      stage: "持续优化",
      work: "基于运行数据持续优化策略参数，引入AI和机器学习技术，进一步提升风控智能化水平。",
      result: "建成行业领先的智能风控体系",
      current: false
    }
  ];

  return (
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
                <th className="p-4 text-left font-semibold">工作与目标</th>
                <th className="p-4 text-left font-semibold">状态</th>
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
  );
};