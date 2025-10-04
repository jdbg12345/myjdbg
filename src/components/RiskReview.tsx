import React from 'react';
import { AlertTriangle, Calendar, MapPin, Bug, Users, DollarSign, CheckCircle, XCircle } from 'lucide-react';

export const RiskReview = () => {
  const incidentData = [
    {
      date: '4月8日',
      venue: 'JDB电子',
      incident: '免费旋转功能异常',
      description: '异常为三方后台账号：hwpusdtmgr进行"免费旋转游戏下发"站点异常金额派发导致亏损。',
      cause: '三方人员',
      impact: '74.41w',
      status: '商务沟通三方承担，后续无异常',
      statusColor: 'bg-green-100 text-green-600'
    },
    {
      date: '4月28日～5月10日',
      venue: 'DBTY',
      incident: '15分钟进球玩法异常',
      description: '独赢进球后赔率没更新和大小没按时间调整赔率，被套了超过500%以上的赔付额。',
      cause: '系统漏洞',
      impact: '135.1w',
      status: '后续暂无异常',
      statusColor: 'bg-blue-100 text-blue-600'
    },
    {
      date: '5月22日～5月31日',
      venue: 'DBTY',
      incident: '同队伍、玩法选项串关',
      description: '利用梦幻赛事同队伍玩法能串关，利用接近3倍的异常赔付额套利。',
      cause: '操盘失误',
      impact: '369.2w',
      status: '后续暂无异常',
      statusColor: 'bg-blue-100 text-blue-600'
    },
    {
      date: '6月13日～6月16日',
      venue: 'DBTY',
      incident: '危险进球期间确认注单',
      description: '本应危险球拒单的成了确认投注成功。',
      cause: '三方技术',
      impact: '2.5w',
      status: '后续暂无异常',
      statusColor: 'bg-blue-100 text-blue-600'
    }
  ];

  // 计算统计数据
  const totalIncidents = incidentData.length;
  const totalImpact = incidentData.reduce((sum, item) => {
    const impact = parseFloat(item.impact.replace('w', ''));
    return sum + impact;
  }, 0);
  const resolvedIncidents = incidentData.filter(item => item.status.includes('无异常')).length;
  const venueCount = [...new Set(incidentData.map(item => item.venue))].length;

  // 按原因分类统计
  const causeStats = incidentData.reduce((acc, item) => {
    acc[item.cause] = (acc[item.cause] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // 按场馆分类统计
  const venueStats = incidentData.reduce((acc, item) => {
    const impact = parseFloat(item.impact.replace('w', ''));
    if (!acc[item.venue]) {
      acc[item.venue] = { count: 0, impact: 0 };
    }
    acc[item.venue].count += 1;
    acc[item.venue].impact += impact;
    return acc;
  }, {} as Record<string, { count: number; impact: number }>);

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-4">4. B端事故问题汇总</h1>
        <div className="text-gray-500 text-sm italic">
          注：Q2事故统计概览和事故详细记录已迁移至【3.4.1 会员出款风控 - 事前（风险预警）】模块
        </div>
      </div>

      {/* 统计概览 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Q2事故统计概览</h2>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-3">{totalIncidents}</div>
            <div className="text-gray-600 font-medium text-lg">事故总数</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
            <div className="text-4xl font-bold text-red-600 mb-3">{totalImpact.toFixed(1)}w</div>
            <div className="text-gray-600 font-medium text-lg">总影响金额</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-3">{venueCount}</div>
            <div className="text-gray-600 font-medium text-lg">涉及场馆</div>
          </div>
        </div>
      </div>

      {/* 事故详细列表 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">事故详细记录</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left font-semibold w-32">日期</th>
                <th className="p-4 text-left font-semibold w-24">场馆</th>
                <th className="p-4 text-left font-semibold w-40">异常事件</th>
                <th className="p-4 text-left font-semibold">问题描述</th>
                <th className="p-4 text-center font-semibold w-24">问题原因</th>
                <th className="p-4 text-center font-semibold w-24">问题影响</th>
                <th className="p-4 text-center font-semibold w-40">当前状态</th>
              </tr>
            </thead>
            <tbody>
              {incidentData.map((incident, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="p-4 font-semibold text-blue-600">{incident.date}</td>
                  <td className="p-4 font-semibold">{incident.venue}</td>
                  <td className="p-4 font-semibold">{incident.incident}</td>
                  <td className="p-4 text-gray-700">{incident.description}</td>
                  <td className="p-4 text-center">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-600">
                      {incident.cause}
                    </span>
                  </td>
                  <td className="p-4 text-center font-bold text-red-600">{incident.impact}</td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${incident.statusColor}`}>
                      {incident.status}
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
        <div className="text-gray-400 text-sm">FKZX Q3 REPORT</div>
      </div>
    </div>
  );
};