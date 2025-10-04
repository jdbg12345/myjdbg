import React from 'react';

export const ManualReview = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-4">3.4.4 会员出款风控 - 事中（人工审核）</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {[
          { title: "核心问题", content: "单人审核过后即可直接出款；人工整合信息易错且效率低，且由于有时间考核会导致错误出单" },
          { title: "解决策略", content: "提供各类风控工具，及会员风控云盾报告，统一执行标准，提升审核效率" },
          { title: "整体收益", content: "提升审核准确率至95%+，减少审核时间50%" },
          { title: "目标进度", content: null, progress: 55 }
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
              { name: "高盈利的提款强提醒", desc: "为确保风控审核人员在处理高盈利标签或高盈利倍数标签时不遗漏关键审核点，系统需提供审核提示，以确保审核流程全面、准确。", status: "已上线", statusColor: "bg-blue-100 text-blue-600", time: "04月07", benefit: "强提醒降低遗漏" },
              { name: "多账号对打查询工具", desc: "识别跨站点多账号间的对打行为", status: "开发中", statusColor: "bg-yellow-100 text-yellow-600", time: "7月中", benefit: "同比提升审核效率 50%" },
              { name: "百家乐对打查询工具", desc: "针对百家乐游戏的对打行为分析工具，提供详细的对打模式识别", status: "开发中", statusColor: "bg-yellow-100 text-yellow-600", time: "7月底", benefit: "同比提升审核效率 50%" },
              { name: "体育对打查询工具", desc: "体育投注中的对打行为检测工具，分析投注模式和关联性", status: "开发中", statusColor: "bg-yellow-100 text-yellow-600", time: "7月底", benefit: "同比提升审核效率 50%" },
              { name: "体育下注优势赔率", desc: "分析体育投注中的优势赔率利用行为和套利模式（需B端支持）", status: "开发中", statusColor: "bg-yellow-100 text-yellow-600", time: "8月底", benefit: "同比提升审核效率 50%" },
              { name: "体育卡危险球下注", desc: "识别体育投注中的危险球和异常赔率投注行为（需B端支持）", status: "开发中", statusColor: "bg-yellow-100 text-yellow-600", time: "8月底", benefit: "同比提升审核效率 50%" },
              { name: "彩票套利查询工具", desc: "彩票游戏中的全包行为分析工具，识别异常投注模式", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "同比提升审核效率 50%" },
              { name: "云盾报告", desc: "会员风控打分体系，基于模型自动完成风控报告。审核人员只需打开报告进行重点确认，即可确保SOP严格执行，同时提升审核效率", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "同比提升审核效率 50%，且间接提升拦截率" }
            ].map((row, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="p-6 font-semibold">{row.name}</td>
                <td className="p-6">{row.desc}</td>
                <td className="p-6 text-center">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${row.statusColor}`}>{row.status}</span>
                </td>
                <td className="p-6 text-center">{row.time}</td>
                <td className="p-6">{row.benefit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX Q3 REPORT</div>
      </div>
    </div>
  );
};