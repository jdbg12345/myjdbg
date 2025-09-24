import React from 'react';
import { Target } from 'lucide-react';
import { Direction1PersonnelCapability } from '../pilot/Direction1PersonnelCapability';
import { Direction2StandardExecution } from '../pilot/Direction2StandardExecution';
import { Direction3SystemStrategies } from '../pilot/Direction3SystemStrategies';
import { Direction4InternalCollusion } from '../pilot/Direction4InternalCollusion';
import { Direction5ExtremeAnomalyPrevention } from '../pilot/Direction5ExtremeAnomalyPrevention';
import { Award } from 'lucide-react';

export const PilotResultsPresentation = () => {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
          <Target className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">二、试点成果说明</h2>
      </div>
      {/* 体系定义 */}
      <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
        <p className="text-lg text-gray-700 leading-relaxed">
          在风控中，"人"是所有问题的根源。长期目标是不依赖"人"，压缩人的操作比重与空间，由系统自动完成大部分判定，覆盖策略、流程、内控与预警。当人的执行结果与系统偏差超出预设范围时，会触发内控二次审核，提升风控质量与稳定性，构建高效可靠的防护体系，使违规者成本与风险极高、几乎无操作空间。
        </p>
      </div>
      {/* 体系变化对比表 */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="p-4 text-center font-semibold w-32 whitespace-nowrap">优化方向</th>
                <th className="p-4 text-left font-semibold w-48">业务痛点</th>
                <th className="p-4 text-left font-semibold w-48">原来</th>
                <th className="p-4 text-left font-semibold w-48">现在</th>
                <th className="p-4 text-left font-semibold w-48">例子</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  direction: "方向1",
                  pain: "人员的风控能力参差不齐",
                  before: "仅按金额派单，新人可能接到高风险订单",
                  now: "按【风险分数+金额】派单，确保合适人员处理对应难度订单",
                  example: "高风险订单自动分配给经验丰富的审核员"
                },
                {
                  direction: "方向2",
                  pain: "人的审核不按照标准执行",
                  before: "审核人员可能忽略重要标签和备注",
                  now: "强制提醒机制，确保关键信息必须查看",
                  example: "高盈利标签强制弹窗提醒"
                },
                {
                  direction: "方向3",
                  pain: "系统审核策略的维度缺失",
                  before: "主要是防御型策略，缺乏作弊识别",
                  now: "补充50+套利识别策略，覆盖各游戏类型",
                  example: "电子卡免费、真人算牌、体育对打等策略"
                },
                {
                  direction: "方向4",
                  pain: "内外的人员进行勾结串联",
                  before: "敏感信息访问权限过于宽泛",
                  now: "分级权限管理，完整操作日志记录",
                  example: "标签查看需点击查询，记录完整日志"
                },
                {
                  direction: "方向5",
                  pain: "一些极端异常的预防机制",
                  before: "缺乏对极端异常情况的预警",
                  now: "建立多维度异常预警机制",
                  example: "钱包异常、场馆多钱、沉睡用户预警"
                }
              ].map((item, index) => (
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
      {/* 各个方向的试点成果 */}
      <Direction1PersonnelCapability />
      <Direction2StandardExecution />
      <Direction3SystemStrategies />
      <Direction4InternalCollusion />
      <Direction5ExtremeAnomalyPrevention />
    </div>
  );
};