import React from 'react';

export const PlatformReconciliation = () => {
  return (
    <div className="bg-white rounded-lg p-6 mb-4 relative">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-4">3.4.6 会员出款风控 - 事后（平台对账）</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="border-l-4 border-blue-600 bg-white rounded-lg p-8 min-h-32 flex flex-col">
          <h4 className="text-blue-600 font-semibold text-lg mb-4 whitespace-nowrap">核心问题</h4>
          <p className="text-gray-600 flex-1 flex items-center leading-relaxed text-sm">站点与财务系统间缺乏实时对账机制，异常资金流动难以及时发现，导致风险事件发生后无法第一时间通过数据异常进行预警和拦截</p>
        </div>
        
        <div className="border-l-4 border-blue-600 bg-white rounded-lg p-8 min-h-32 flex flex-col">
          <h4 className="text-blue-600 font-semibold text-lg mb-4 whitespace-nowrap">解决策略</h4>
          <p className="text-gray-600 flex-1 flex items-center leading-relaxed text-sm">建立站点与财务系统间的实时对账监控体系，通过MQ消息机制确保数据一致性，构建多维度对账预警机制，实现异常资金流动的实时监控</p>
        </div>
        
        <div className="border-l-4 border-blue-600 bg-white rounded-lg p-8 min-h-32 flex flex-col">
          <h4 className="text-blue-600 font-semibold text-lg mb-4 whitespace-nowrap">整体收益</h4>
          <p className="text-gray-600 flex-1 flex items-center leading-relaxed text-sm">构建事后风险防控最后防线，建立7×24小时实时监控体系，确保任何异常资金流动都能在第一时间被发现并预警，有效防范类似事件再次发生</p>
        </div>
        
        <div className="border-l-4 border-blue-600 bg-white rounded-lg p-8 min-h-32 flex flex-col">
          <h4 className="text-blue-600 font-semibold text-lg mb-4 whitespace-nowrap">目标进度</h4>
          <div className="flex items-center mt-4">
            <div className="flex-1 bg-gray-200 rounded-full h-4 mr-4">
              <div className="bg-blue-600 h-4 rounded-full" style={{width: '0%'}}></div>
            </div>
            <div className="text-blue-600 font-semibold text-lg">0%</div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-12">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-6 text-left font-semibold whitespace-nowrap">需求名称</th>
              <th className="p-6 text-left font-semibold">需求简述</th>
              <th className="p-6 text-center font-semibold w-32">当前状态</th>
              <th className="p-6 text-center font-semibold w-32">预期时间</th>
              <th className="p-6 text-left font-semibold w-48">预期收益</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "存款对账", desc: "站点监听财务存款/上分成功MQ，核对站点记录，核对异常直接预警", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "及时发现存款异常，防范资金风险" },
              { name: "提款对账", desc: "站点监听财务提款/下分成功MQ，核对站点记录，核对异常直接预警", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "及时发现提款异常，防范资金风险" },
              { name: "场馆对账", desc: "站点场馆帐变和场馆输赢进行核对，核对异常直接预警", status: "方案中", statusColor: "bg-gray-100 text-gray-600", time: "待定", benefit: "及时发现场馆异常，防范资金风险" }
            ].map((row, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="p-6 font-semibold whitespace-nowrap">{row.name}</td>
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