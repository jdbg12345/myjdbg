@@ .. @@
 import React from 'react';
-import { Award, BarChart3, CheckCircle, Clock, AlertCircle, Lightbulb, Search, Settings, Play, Layers } from 'lucide-react';
import { Target } from 'lucide-react';
import { Direction1PersonnelCapability } from '../pilot/Direction1PersonnelCapability';
import { Direction2StandardExecution } from '../pilot/Direction2StandardExecution';
import { Direction3SystemStrategies } from '../pilot/Direction3SystemStrategies';
import { Direction4InternalCollusion } from '../pilot/Direction4InternalCollusion';
import { Direction5ExtremeAnomalyPrevention } from '../pilot/Direction5ExtremeAnomalyPrevention';
+import { Award } from 'lucide-react';
+import { Direction1PersonnelCapability } from '../pilot/Direction1PersonnelCapability';
+import { Direction2StandardExecution } from '../pilot/Direction2StandardExecution';
+import { Direction3SystemStrategies } from '../pilot/Direction3SystemStrategies';
+import { Direction4InternalCollusion } from '../pilot/Direction4InternalCollusion';
+import { Direction5ExtremeAnomalyPrevention } from '../pilot/Direction5ExtremeAnomalyPrevention';
 
 export const PilotResultsPresentation = () => {
   return (
-      {/* 试点成果概览 */}
-        <div className="text-center mb-8">
-          <h3 className="text-2xl font-bold text-gray-800 mb-4">试点成果概览</h3>
-          <p className="text-gray-600 text-lg">
-            通过系统化的试点实施，在多个关键方向取得显著成效，为全面推广奠定坚实基础
-          </p>
-        </div>
-
-        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
-          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
-            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
-            <div className="text-gray-600 font-medium">试点方向</div>
-          </div>
-          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
-            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
-            <div className="text-gray-600 font-medium">已上线功能</div>
-          </div>
-          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
-            <div className="text-3xl font-bold text-yellow-600 mb-2">20+</div>
-            <div className="text-gray-600 font-medium">开发中功能</div>
-          </div>
-          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
-            <div className="text-3xl font-bold text-purple-600 mb-2">50%+</div>
-            <div className="text-gray-600 font-medium">效率提升</div>
-          </div>
-          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
-            <div className="text-3xl font-bold text-red-600 mb-2">90%+</div>
-            <div className="text-gray-600 font-medium">目标拦截率</div>
-          </div>
-        </div>
-      </div>
-
-      {/* 方向1：人员的风控能力参差不齐 */}
-      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
-        <div className="flex items-center space-x-3 mb-6">
-          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
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
-          {/* 派单策略变革效果 */}
-          <div className="bg-white rounded-lg p-6 border border-blue-200">
-            <div className="flex items-center space-x-3 mb-4">
-              <Play className="w-6 h-6 text-blue-500" />
-              <h4 className="text-lg font-bold text-gray-800">派单策略变革效果</h4>
-            </div>
-            <div className="space-y-3">
-              <div className="bg-blue-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-blue-700 mb-2">优化前</div>
-                <div className="text-xs text-blue-600">仅按金额派单，新人可能接到高风险订单</div>
-              </div>
-              <div className="bg-green-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-green-700 mb-2">优化后</div>
-                <div className="text-xs text-green-600">按【风险分数+金额】派单，确保合适人员处理对应难度订单</div>
-              </div>
-              <div className="bg-white rounded-lg p-3 border border-blue-200">
-                <div className="text-xs font-semibold text-blue-700">预期效果</div>
-                <div className="text-xs text-gray-600 mt-1">降低错误出款风险30%+</div>
-              </div>
-            </div>
-          </div>
-
-          {/* 风险云盾分数效果 */}
-          <div className="bg-white rounded-lg p-6 border border-blue-200">
-            <div className="flex items-center space-x-3 mb-4">
-              <Layers className="w-6 h-6 text-blue-500" />
-              <h4 className="text-lg font-bold text-gray-800">风险云盾分数效果</h4>
-            </div>
-            <div className="space-y-3">
-              <div className="bg-blue-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-blue-700 mb-2">核心功能</div>
-                <div className="text-xs text-blue-600">基于模型自动生成风控报告，审核人员只需确认重点</div>
-              </div>
-              <div className="bg-green-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-green-700 mb-2">预期收益</div>
-                <div className="text-xs text-green-600">提升审核效率50%+，确保SOP严格执行</div>
-              </div>
-              <div className="bg-white rounded-lg p-3 border border-blue-200">
-                <div className="text-xs font-semibold text-blue-700">当前状态</div>
-                <div className="text-xs text-gray-600 mt-1">方案设计中</div>
-              </div>
-            </div>
-          </div>
-
-          {/* 关联下注工具 */}
-          <div className="bg-white rounded-lg p-6 border border-blue-200">
-            <div className="flex items-center space-x-3 mb-4">
-              <Search className="w-6 h-6 text-blue-500" />
-              <h4 className="text-lg font-bold text-gray-800">关联下注工具</h4>
-            </div>
-            <div className="space-y-3">
-              <div className="bg-blue-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-blue-700 mb-2">工具类型</div>
-                <div className="text-xs text-blue-600 space-y-1">
-                  <div>• 多账号对打查询工具</div>
-                  <div>• 百家乐对打查询工具</div>
-                  <div>• 体育对打查询工具</div>
-                </div>
-              </div>
-              <div className="bg-green-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-green-700 mb-2">预期效果</div>
-                <div className="text-xs text-green-600">提升审核效率50%，快速识别对打行为</div>
-              </div>
-              <div className="bg-white rounded-lg p-3 border border-blue-200">
-                <div className="text-xs font-semibold text-blue-700">进度状态</div>
-                <div className="text-xs text-gray-600 mt-1">开发中，预计7-8月完成</div>
-              </div>
-            </div>
-          </div>
-
-          {/* 提款流水工具 */}
-          <div className="bg-white rounded-lg p-6 border border-blue-200">
-            <div className="flex items-center space-x-3 mb-4">
-              <CheckCircle className="w-6 h-6 text-blue-500" />
-              <h4 className="text-lg font-bold text-gray-800">提款流水工具</h4>
-            </div>
-            <div className="space-y-3">
-              <div className="bg-blue-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-blue-700 mb-2">优化内容</div>
-                <div className="text-xs text-blue-600">优化流水计算逻辑，增加流水差额提醒</div>
-              </div>
-              <div className="bg-green-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-green-700 mb-2">用户体验</div>
-                <div className="text-xs text-green-600">减少因流水问题反复被拒的情况</div>
-              </div>
-              <div className="bg-white rounded-lg p-3 border border-blue-200">
-                <div className="text-xs font-semibold text-blue-700">实施状态</div>
-                <div className="text-xs text-gray-600 mt-1">一期已上线，二三期开发中</div>
-              </div>
-            </div>
-          </div>
-
-          {/* 体育打水工具 */}
-          <div className="bg-white rounded-lg p-6 border border-blue-200">
-            <div className="flex items-center space-x-3 mb-4">
-              <Settings className="w-6 h-6 text-blue-500" />
-              <h4 className="text-lg font-bold text-gray-800">体育打水工具</h4>
-            </div>
-            <div className="space-y-3">
-              <div className="bg-blue-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-blue-700 mb-2">检测能力</div>
-                <div className="text-xs text-blue-600 space-y-1">
-                  <div>• 优势赔率利用分析</div>
-                  <div>• 危险球下注识别</div>
-                </div>
-              </div>
-              <div className="bg-green-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-green-700 mb-2">技术要求</div>
-                <div className="text-xs text-green-600">需要B端支持提供相关数据接口</div>
-              </div>
-              <div className="bg-white rounded-lg p-3 border border-blue-200">
-                <div className="text-xs font-semibold text-blue-700">预计时间</div>
-                <div className="text-xs text-gray-600 mt-1">8月底完成</div>
-              </div>
-            </div>
-          </div>
-        </div>
-      </div>
-
-      {/* 方向2：人的审核不按照标准执行 */}
-      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
-        <div className="flex items-center space-x-3 mb-6">
-          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
-            <AlertCircle className="w-5 h-5 text-white" />
-          </div>
-          <h3 className="text-3xl font-bold text-gray-800">方向2：人的审核不按照标准执行</h3>
-        </div>
-
-        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
-          {/* 出款未查看备注标签 */}
-          <div className="bg-white rounded-lg p-6 border border-orange-200">
-            <div className="flex items-center space-x-3 mb-4">
-              <CheckCircle className="w-6 h-6 text-orange-500" />
-              <h4 className="text-xl font-bold text-gray-800">出款未查看备注标签</h4>
-            </div>
-            <div className="space-y-4">
-              <div className="bg-red-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-red-700 mb-2">问题现状</div>
-                <div className="text-sm text-red-600 space-y-2">
-                  <div>• 审核人员未按标准查看会员备注和标签</div>
-                  <div>• 高盈利标签或高风险标签被忽略</div>
-                  <div>• 导致风险订单错误通过</div>
-                </div>
-              </div>
-              <div className="bg-blue-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-blue-700 mb-2">解决方案</div>
-                <div className="text-sm text-blue-600 space-y-2">
-                  <div>• 高盈利提款强制提醒功能</div>
-                  <div>• 系统强制显示关键标签信息</div>
-                  <div>• 审核流程标准化检查点</div>
-                </div>
-              </div>
-              <div className="bg-green-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-green-700 mb-2">实施效果</div>
-                <div className="text-sm text-green-600">
-                  强提醒功能已上线，有效降低审核遗漏风险
-                </div>
-              </div>
-              <div className="bg-white rounded-lg p-3 border border-orange-200">
-                <div className="text-sm font-semibold text-orange-700">当前状态</div>
-                <div className="text-sm text-gray-600 mt-1">已上线运行，持续优化中</div>
-              </div>
-            </div>
-          </div>
-
-          {/* VIP禁用流程 */}
-          <div className="bg-white rounded-lg p-6 border border-orange-200">
-            <div className="flex items-center space-x-3 mb-4">
-              <Clock className="w-6 h-6 text-orange-500" />
-              <h4 className="text-xl font-bold text-gray-800">VIP禁用流程</h4>
-            </div>
-            <div className="space-y-4">
-              <div className="bg-red-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-red-700 mb-2">流程问题</div>
-                <div className="text-sm text-red-600 space-y-2">
-                  <div>• VIP用户禁用权限管理不够精细</div>
-                  <div>• 禁用操作缺乏标准化流程</div>
-                  <div>• 权限使用缺乏有效监督</div>
-                </div>
-              </div>
-              <div className="bg-blue-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-blue-700 mb-2">优化措施</div>
-                <div className="text-sm text-blue-600 space-y-2">
-                  <div>• 建立VIP禁用标准化流程</div>
-                  <div>• 权限分级管理机制</div>
-                  <div>• 禁用操作审批流程</div>
-                  <div>• 操作记录可追溯性</div>
-                </div>
-              </div>
-              <div className="bg-green-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-green-700 mb-2">预期收益</div>
-                <div className="text-sm text-green-600">
-                  提升VIP用户管理规范性，降低操作风险
-                </div>
-              </div>
-              <div className="bg-white rounded-lg p-3 border border-orange-200">
-                <div className="text-sm font-semibold text-orange-700">实施进度</div>
-                <div className="text-sm text-gray-600 mt-1">流程设计中，预计Q3完成</div>
-              </div>
-            </div>
-          </div>
-        </div>
-      </div>
-
-      {/* 方向3：系统审核策略的维度缺失 */}
-      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
-        <div className="flex items-center space-x-3 mb-6">
-          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
-            <Settings className="w-5 h-5 text-white" />
-          </div>
-          <h3 className="text-3xl font-bold text-gray-800">方向3：系统审核策略的维度缺失</h3>
-        </div>
-
-        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
-          {[
-            { title: "电子策略", desc: "电子卡免费、老虎机异常等", status: "已上线", color: "green", progress: 85 },
-            { title: "真人策略", desc: "真人算牌、百家乐对打等", status: "开发中", color: "yellow", progress: 60 },
-            { title: "体育策略", desc: "体育对打、野鸡赛事等", status: "开发中", color: "yellow", progress: 45 },
-            { title: "彩票策略", desc: "彩票全包、异常盈利等", status: "方案中", color: "gray", progress: 20 },
-            { title: "棋牌策略", desc: "牌坊风险、棋牌对打等", status: "已上线", color: "green", progress: 90 }
-          ].map((strategy, index) => (
-            <div key={index} className="bg-white rounded-lg p-6 border border-purple-200">
-              <h4 className="text-lg font-bold text-gray-800 mb-4">{strategy.title}</h4>
-              <div className="space-y-4">
-                <div className="bg-purple-50 rounded-lg p-4">
-                  <div className="text-sm font-semibold text-purple-700 mb-2">策略内容</div>
-                  <div className="text-xs text-purple-600">{strategy.desc}</div>
-                </div>
-                <div className="bg-white rounded-lg p-3 border border-purple-200">
-                  <div className="text-sm font-semibold text-purple-700 mb-2">进度状态</div>
-                  <div className="flex items-center space-x-2 mb-2">
-                    <div className="flex-1 bg-gray-200 rounded-full h-2">
-                      <div 
-                        className="bg-purple-500 h-2 rounded-full transition-all duration-300"
-                        style={{ width: `${strategy.progress}%` }}
-                      ></div>
-                    </div>
-                    <span className="text-xs font-semibold text-purple-600">{strategy.progress}%</span>
-                  </div>
-                  <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-${strategy.color}-100 text-${strategy.color}-700`}>
-                    {strategy.status}
-                  </span>
-                </div>
-                <div className="bg-gray-50 rounded-lg p-3">
-                  <div className="text-xs font-semibold text-gray-700 mb-1">预期收益</div>
-                  <div className="text-xs text-gray-600">拦截率达到90%+</div>
-                </div>
-              </div>
-            </div>
-          ))}
-        </div>
-
-        <div className="mt-8 bg-purple-50 rounded-lg p-6">
-          <div className="text-center">
-            <h4 className="text-xl font-bold text-purple-800 mb-4">整体策略覆盖目标</h4>
-            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
-              <div className="bg-white rounded-lg p-4 border border-purple-200">
-                <div className="text-2xl font-bold text-purple-600 mb-2">50+</div>
-                <div className="text-sm text-purple-700">风控策略数量</div>
-              </div>
-              <div className="bg-white rounded-lg p-4 border border-purple-200">
-                <div className="text-2xl font-bold text-purple-600 mb-2">100+</div>
-                <div className="text-sm text-purple-700">子策略特征</div>
-              </div>
-              <div className="bg-white rounded-lg p-4 border border-purple-200">
-                <div className="text-2xl font-bold text-purple-600 mb-2">90%+</div>
-                <div className="text-sm text-purple-700">目标拦截率</div>
-              </div>
-            </div>
-          </div>
-        </div>
-      </div>
-
-      {/* 方向4：内外的人员进行勾结串联 */}
-      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
-        <div className="flex items-center space-x-3 mb-6">
-          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
-            <AlertCircle className="w-5 h-5 text-white" />
-          </div>
-          <h3 className="text-3xl font-bold text-gray-800">方向4：内外的人员进行勾结串联</h3>
-        </div>
-
-        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
-          {/* 风控标签 */}
-          <div className="bg-white rounded-lg p-6 border border-red-200">
-            <h4 className="text-xl font-bold text-gray-800 mb-4">风控标签</h4>
-            <div className="space-y-4">
-              <div className="bg-red-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-red-700 mb-2">安全风险</div>
-                <div className="text-sm text-red-600 space-y-2">
-                  <div>• 敏感标签信息可能被泄露</div>
-                  <div>• 内部人员与外部勾结获取会员信息</div>
-                  <div>• 标签查看权限管理不够精细</div>
-                </div>
-              </div>
-              <div className="bg-blue-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-blue-700 mb-2">防范措施</div>
-                <div className="text-sm text-blue-600 space-y-2">
-                  <div>• 标签查看权限分级管理</div>
-                  <div>• 敏感信息查询日志记录</div>
-                  <div>• 查看操作实时监控预警</div>
-                  <div>• 权限使用异常行为检测</div>
-                </div>
-              </div>
-              <div className="bg-green-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-green-700 mb-2">实施效果</div>
-                <div className="text-sm text-green-600">
-                  标签查看权限已升级，由原来打开页面即可看到升级为须点击查询才可看到，并保留完整日志记录
-                </div>
-              </div>
-              <div className="bg-white rounded-lg p-3 border border-red-200">
-                <div className="text-sm font-semibold text-red-700">当前状态</div>
-                <div className="text-sm text-gray-600 mt-1">已上线，持续监控中</div>
-              </div>
-            </div>
-          </div>
-
-          {/* 动态参数 */}
-          <div className="bg-white rounded-lg p-6 border border-red-200">
-            <h4 className="text-xl font-bold text-gray-800 mb-4">动态参数</h4>
-            <div className="space-y-4">
-              <div className="bg-red-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-red-700 mb-2">参数风险</div>
-                <div className="text-sm text-red-600 space-y-2">
-                  <div>• 风控策略参数可能被恶意修改</div>
-                  <div>• 内部人员调整参数规避检测</div>
-                  <div>• 参数变更缺乏有效监督</div>
-                </div>
-              </div>
-              <div className="bg-blue-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-blue-700 mb-2">控制机制</div>
-                <div className="text-sm text-blue-600 space-y-2">
-                  <div>• 参数修改权限严格控制</div>
-                  <div>• 参数变更审批流程</div>
-                  <div>• 参数修改日志完整记录</div>
-                  <div>• 异常参数变更实时预警</div>
-                </div>
-              </div>
-              <div className="bg-green-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-green-700 mb-2">监控体系</div>
-                <div className="text-sm text-green-600">
-                  建立参数变更监控体系，确保所有策略参数变更都有完整的审批和记录流程
-                </div>
-              </div>
-              <div className="bg-white rounded-lg p-3 border border-red-200">
-                <div className="text-sm font-semibold text-red-700">实施进度</div>
-                <div className="text-sm text-gray-600 mt-1">监控机制设计中，预计Q3完成</div>
-              </div>
-            </div>
-          </div>
-        </div>
-
-        <div className="mt-8 bg-red-50 rounded-lg p-6">
-          <div className="text-center">
-            <h4 className="text-xl font-bold text-red-800 mb-4">内控安全防护目标</h4>
-            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
-              <div className="bg-white rounded-lg p-4 border border-red-200">
-                <div className="text-2xl font-bold text-red-600 mb-2">100%</div>
-                <div className="text-sm text-red-700">敏感操作记录覆盖</div>
-              </div>
-              <div className="bg-white rounded-lg p-4 border border-red-200">
-                <div className="text-2xl font-bold text-red-600 mb-2">24/7</div>
-                <div className="text-sm text-red-700">实时监控预警</div>
-              </div>
-              <div className="bg-white rounded-lg p-4 border border-red-200">
-                <div className="text-2xl font-bold text-red-600 mb-2">0</div>
-                <div className="text-sm text-red-700">内外勾结事件目标</div>
-              </div>
-            </div>
-          </div>
-        </div>
-      </div>
-
-      {/* 方向5：一些极端异常的预防机制 */}
-      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
-        <div className="flex items-center space-x-3 mb-6">
-          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
-            <Lightbulb className="w-5 h-5 text-white" />
-          </div>
-          <h3 className="text-3xl font-bold text-gray-800">方向5：一些极端异常的预防机制</h3>
-        </div>
-
-        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
-          {/* 钱包预警 */}
-          <div className="bg-white rounded-lg p-6 border border-yellow-200">
-            <h4 className="text-xl font-bold text-gray-800 mb-4">钱包预警</h4>
-            <div className="space-y-4">
-              <div className="bg-yellow-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-yellow-700 mb-2">预警场景</div>
-                <div className="text-sm text-yellow-600 space-y-2">
-                  <div>• 账户余额异常波动</div>
-                  <div>• 大额资金异常流入</div>
-                  <div>• 钱包操作异常频繁</div>
-                  <div>• 跨钱包异常转移</div>
-                </div>
-              </div>
-              <div className="bg-blue-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-blue-700 mb-2">监控机制</div>
-                <div className="text-sm text-blue-600 space-y-2">
-                  <div>• 实时钱包余额监控</div>
-                  <div>• 异常资金流动预警</div>
-                  <div>• 钱包操作行为分析</div>
-                </div>
-              </div>
-              <div className="bg-green-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-green-700 mb-2">预期效果</div>
-                <div className="text-sm text-green-600">
-                  及时发现资金异常，防范重大资金风险事件
-                </div>
-              </div>
-              <div className="bg-white rounded-lg p-3 border border-yellow-200">
-                <div className="text-sm font-semibold text-yellow-700">实施状态</div>
-                <div className="text-sm text-gray-600 mt-1">方案设计中</div>
-              </div>
-            </div>
-          </div>
-
-          {/* 场馆对账 */}
-          <div className="bg-white rounded-lg p-6 border border-yellow-200">
-            <h4 className="text-xl font-bold text-gray-800 mb-4">场馆对账</h4>
-            <div className="space-y-4">
-              <div className="bg-yellow-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-yellow-700 mb-2">对账内容</div>
-                <div className="text-sm text-yellow-600 space-y-2">
-                  <div>• 站点与财务系统对账</div>
-                  <div>• 场馆账变核对</div>
-                  <div>• 场馆输赢数据验证</div>
-                  <div>• 异常数据实时预警</div>
-                </div>
-              </div>
-              <div className="bg-blue-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-blue-700 mb-2">技术实现</div>
-                <div className="text-sm text-blue-600 space-y-2">
-                  <div>• MQ消息机制确保数据一致性</div>
-                  <div>• 多维度对账预警机制</div>
-                  <div>• 7×24小时实时监控</div>
-                </div>
-              </div>
-              <div className="bg-green-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-green-700 mb-2">防护价值</div>
-                <div className="text-sm text-green-600">
-                  构建事后风险防控最后防线，确保异常资金流动第一时间被发现
-                </div>
-              </div>
-              <div className="bg-white rounded-lg p-3 border border-yellow-200">
-                <div className="text-sm font-semibold text-yellow-700">开发进度</div>
-                <div className="text-sm text-gray-600 mt-1">方案中，待技术评估</div>
-              </div>
-            </div>
-          </div>
-
-          {/* 沉睡用户 */}
-          <div className="bg-white rounded-lg p-6 border border-yellow-200">
-            <h4 className="text-xl font-bold text-gray-800 mb-4">沉睡用户</h4>
-            <div className="space-y-4">
-              <div className="bg-yellow-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-yellow-700 mb-2">风险识别</div>
-                <div className="text-sm text-yellow-600 space-y-2">
-                  <div>• 长期沉睡用户突然活跃</div>
-                  <div>• 登录设备/IP异常变化</div>
-                  <div>• 账户行为模式突变</div>
-                  <div>• 潜在账号盗用风险</div>
-                </div>
-              </div>
-              <div className="bg-blue-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-blue-700 mb-2">预警机制</div>
-                <div className="text-sm text-blue-600 space-y-2">
-                  <div>• 沉睡用户活跃预警</div>
-                  <div>• 异常行为模式检测</div>
-                  <div>• 提款拦截机制</div>
-                </div>
-              </div>
-              <div className="bg-green-50 rounded-lg p-4">
-                <div className="text-sm font-semibold text-green-700 mb-2">安全保障</div>
-                <div className="text-sm text-green-600">
-                  有效防范账号盗用和异常操作，保护用户资金安全
-                </div>
-              </div>
-              <div className="bg-white rounded-lg p-3 border border-yellow-200">
-                <div className="text-sm font-semibold text-yellow-700">开发状态</div>
-                <div className="text-sm text-gray-600 mt-1">方案中，预计Q3启动</div>
-              </div>
-            </div>
-          </div>
-        </div>
-
-        <div className="mt-8 bg-yellow-50 rounded-lg p-6">
-          <div className="text-center">
-            <h4 className="text-xl font-bold text-yellow-800 mb-4">极端异常预防目标</h4>
-            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
-              <div className="bg-white rounded-lg p-4 border border-yellow-200">
-                <div className="text-2xl font-bold text-yellow-600 mb-2">100%</div>
-                <div className="text-sm text-yellow-700">异常事件覆盖</div>
-              </div>
-              <div className="bg-white rounded-lg p-4 border border-yellow-200">
-                <div className="text-2xl font-bold text-yellow-600 mb-2">&lt;5min</div>
-                <div className="text-sm text-yellow-700">异常发现时间</div>
-              </div>
-              <div className="bg-white rounded-lg p-4 border border-yellow-200">
-                <div className="text-2xl font-bold text-yellow-600 mb-2">24/7</div>
-                <div className="text-sm text-yellow-700">全天候监控</div>
-              </div>
-              <div className="bg-white rounded-lg p-4 border border-yellow-200">
-                <div className="text-2xl font-bold text-yellow-600 mb-2">0</div>
-                <div className="text-sm text-yellow-700">重大损失事件目标</div>
-              </div>
-            </div>
-          </div>
-        </div>
-      </div>
+      {/* 试点成果概览 */}
+      <div className="bg-white rounded-lg p-6 mb-8">
+        <div className="text-center mb-8">
+          <h3 className="text-2xl font-bold text-gray-800 mb-4">试点成果概览</h3>
+          <p className="text-gray-600 text-lg">
+            通过系统化的试点实施，在多个关键方向取得显著成效，为全面推广奠定坚实基础
+          </p>
+        </div>
+
+        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
+          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
+            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
+            <div className="text-gray-600 font-medium">试点方向</div>
+          </div>
+          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
+            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
+            <div className="text-gray-600 font-medium">已上线功能</div>
+          </div>
+          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
+            <div className="text-3xl font-bold text-yellow-600 mb-2">20+</div>
+            <div className="text-gray-600 font-medium">开发中功能</div>
+          </div>
+          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
+            <div className="text-3xl font-bold text-purple-600 mb-2">50%+</div>
+            <div className="text-gray-600 font-medium">效率提升</div>
+          </div>
+          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
+            <div className="text-3xl font-bold text-red-600 mb-2">90%+</div>
+            <div className="text-gray-600 font-medium">目标拦截率</div>
+          </div>
+        </div>
+      </div>
+
+      {/* 各个方向的试点成果 */}
+      <Direction1PersonnelCapability />
+      <Direction2StandardExecution />
+      <Direction3SystemStrategies />
+      <Direction4InternalCollusion />
+      <Direction5ExtremeAnomalyPrevention />
     </div>
   );
 };