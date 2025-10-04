import React from 'react';
import { Shield } from 'lucide-react';

export const InternalControlSampling = () => {
  return (
    <div className="bg-white rounded-lg p-10 mb-6 relative">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-4">3.4.5 会员出款风控 - 事中（内控抽检）</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {[
          { title: "核心问题", content: "对新人/低绩效/风险操作等出款无事前监管，容易错误出单" },
          { title: "解决策略", content: "命中策略，如指定人员、特殊操作、高风险的订单进行内控抽检" },
          { title: "整体收益", content: "抽检覆盖率提升至30%+，及时发现审核问题" },
          { title: "目标进度", content: null, progress: 40 }
        ].map((card, index) => (
          <div key={index} className="border-l-4 border-blue-600 bg-white rounded-lg p-8 min-h-32 flex flex-col">
            <h4 className="text-blue-600 font-semibold text-lg mb-4 whitespace-nowrap">{card.title}</h4>
            {card.progress ? (
              <div className="flex items-center mt-4">
                <div className="flex-1 bg-gray-200 rounded-full h-4 mr-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{width: `${card.progress}%`}}></div>
                </div>
                <div className="bg-blue-600 h-4 rounded-full" style={{width: `${card.progress}%`}}></div>
              </div>
            ) : (
              <p className="text-gray-600 flex-1 flex items-center">{card.content}</p>
            )}
          </div>
        ))}
      </div>

      {/* 抽检机制简要说明模块 - 压缩上下空间 */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <Shield className="w-6 h-6 text-blue-600 mr-4" />
          <h3 className="text-2xl font-bold text-gray-800">抽检机制简要说明</h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          内控是一个新增的流程，作为最后一道防线，确保高风险订单和可疑操作得到充分审核，有效降低错误出款风险，提升整体风控质量。
        </p>

        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-8">
            {/* 指定人员 */}
            <div className="bg-white rounded-lg p-6 text-center min-w-48 border border-gray-200">
              <div className="text-gray-700 font-semibold mb-2">指定人员</div>
              <div className="text-sm text-gray-600">新人/低绩效</div>
            </div>

            {/* 箭头 */}
            <div className="bg-gray-600 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* 内控抽检 */}
            <div className="bg-white border border-blue-200 rounded-lg p-6 text-center min-w-48">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-blue-700 font-semibold mb-2">内控抽检</div>
              <div className="text-sm text-blue-600">专门复审</div>
            </div>

            {/* 箭头 */}
            <div className="bg-gray-600 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* 抽检通过 */}
            <div className="bg-white border border-green-200 rounded-lg p-6 text-center min-w-48">
              <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div className="text-green-700 font-semibold mb-2">抽检通过</div>
              <div className="text-sm text-green-600">进入财务</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-6">
          <div className="flex items-center space-x-8">
            {/* 高危订单 */}
            <div className="bg-white rounded-lg p-6 text-center min-w-48 border border-gray-200">
              <div className="text-gray-700 font-semibold mb-2">高危订单</div>
              <div className="text-sm text-gray-600">高风险分数</div>
            </div>

            {/* 箭头 */}
            <div className="bg-gray-600 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* 内控抽检 */}
            <div className="bg-white border border-blue-200 rounded-lg p-6 text-center min-w-48">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-blue-700 font-semibold mb-2">内控抽检</div>
              <div className="text-sm text-blue-600">专门复审</div>
            </div>

            {/* 箭头 */}
            <div className="bg-gray-600 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* 抽检不通过 */}
            <div className="bg-white border border-red-200 rounded-lg p-6 text-center min-w-48">
              <svg className="w-8 h-8 text-red-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div className="text-red-700 font-semibold mb-2">抽检不通过</div>
              <div className="text-sm text-red-600">挂起核实</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-6">
          <div className="flex items-center space-x-8">
            {/* 危险操作 */}
            <div className="bg-white rounded-lg p-6 text-center min-w-48 border border-gray-200">
              <div className="text-gray-700 font-semibold mb-2">危险操作</div>
              <div className="text-sm text-gray-600">强制领单等</div>
            </div>

            {/* 箭头 */}
            <div className="bg-gray-600 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* 内控抽检 */}
            <div className="bg-white border border-blue-200 rounded-lg p-6 text-center min-w-48">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-blue-700 font-semibold mb-2">内控抽检</div>
              <div className="text-sm text-blue-600">专门复审</div>
            </div>

            {/* 箭头 */}
            <div className="bg-gray-600 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* 抽检通过 */}
            <div className="bg-white border border-green-200 rounded-lg p-6 text-center min-w-48">
              <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div className="text-green-700 font-semibold mb-2">抽检通过</div>
              <div className="text-sm text-green-600">进入财务</div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-12">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-6 text-left font-semibold">需求名称</th>
              <th className="p-6 text-left font-semibold">需求简述</th>
              <th className="p-6 text-center font-semibold w-32">当前状态</th>
              <th className="p-6 text-center font-semibold w-32">预期时间</th>
              <th className="p-6 text-left font-semibold w-48">预期收益</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "新增【设置特定操作人】抽检策略", desc: "在现有审核流程中增加内控复审抽检环节", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "06月25", benefit: "作为内控机制，可针对指定人员，如新上岗/低绩效/有风险的人进行抽检" },
              { name: "新增【被强制领单】抽检策略", desc: "对被强制领取的订单进行专门的抽检机制", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "作为内控机制，降低因主观内外勾结导致的错误出款" },
              { name: "新增【会员被同一人出单次数过高】抽检策略", desc: "会员被同一审核人员反复审核且通过出单次数超出正常阈值，可能存在内外勾结的可能，需要进行出单抽检", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "作为内控机制，预防内外勾结的场景" },
              { name: "抽检过程支持管理转单", desc: "无管理转单功能，若人员掉线或者其他原因，后台单量无法正常处理，管理无法介入处理，只能领单本人处理", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "提升抽检流程效率，增强管理灵活性" }
            ].map((row, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="p-6 font-semibold">{row.name}</td>
                <td className="p-4">{row.desc}</td>
                <td className="p-6 text-center">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${row.statusColor}`}>{row.status}</span>
                </td>
                <td className="p-6 text-center">{row.time}</td>
                <td className="p-4">{row.benefit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">Q3 REPORT</div>
      </div>
    </div>
  );
};