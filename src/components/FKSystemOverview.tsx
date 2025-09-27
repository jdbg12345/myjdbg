import React from 'react';
import { Shield, Users, TrendingUp, AlertTriangle, CheckCircle, XCircle, Clock, Target } from 'lucide-react';

const FKSystemOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold text-gray-800">FKZX-FK体系概览</h2>
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>

      {/* 智能FK流程 */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">智能FK流程</h3>
        <div className="relative">
          <svg width="1000" height="300" viewBox="0 0 1000 300" className="w-full">
            {/* 主线节点 1-4 */}
            <g>
              {/* 节点1 */}
              <circle cx="100" cy="80" r="35" fill="#f97316" />
              <text x="100" y="85" textAnchor="middle" className="fill-white text-sm font-bold">1</text>
              <text x="100" y="130" textAnchor="middle" className="fill-gray-800 text-sm font-bold">系统自动预警/打标</text>
              <text x="100" y="145" textAnchor="middle" className="fill-gray-600 text-xs">风险识别</text>
              
              {/* 节点2 */}
              <circle cx="300" cy="80" r="35" fill="#3b82f6" />
              <text x="300" y="85" textAnchor="middle" className="fill-white text-sm font-bold">2</text>
              <text x="300" y="130" textAnchor="middle" className="fill-gray-800 text-sm font-bold">申请提交</text>
              <text x="300" y="145" textAnchor="middle" className="fill-gray-600 text-xs">玩家/代理提款申请</text>
              
              {/* 节点3 */}
              <circle cx="500" cy="80" r="35" fill="#10b981" />
              <text x="500" y="85" textAnchor="middle" className="fill-white text-sm font-bold">3</text>
              <text x="500" y="130" textAnchor="middle" className="fill-gray-800 text-sm font-bold">AI智能审核</text>
              <text x="500" y="145" textAnchor="middle" className="fill-gray-600 text-xs">多维度风险实时检测</text>
              
              {/* 节点4 */}
              <circle cx="700" cy="80" r="35" fill="#8b5cf6" />
              <text x="700" y="85" textAnchor="middle" className="fill-white text-sm font-bold">4</text>
              <text x="700" y="130" textAnchor="middle" className="fill-gray-800 text-sm font-bold">自动放行</text>
              <text x="700" y="145" textAnchor="middle" className="fill-gray-600 text-xs">系统自动处理</text>
            </g>

            {/* 支线节点 5-7 */}
            <g>
              {/* 节点5 */}
              <circle cx="400" cy="200" r="35" fill="#ef4444" />
              <text x="400" y="205" textAnchor="middle" className="fill-white text-sm font-bold">5</text>
              <text x="400" y="250" textAnchor="middle" className="fill-gray-800 text-sm font-bold">人工复审</text>
              <text x="400" y="265" textAnchor="middle" className="fill-gray-600 text-xs">专业人员审核</text>
              
              {/* 节点6 */}
              <circle cx="550" cy="200" r="35" fill="#f59e0b" />
              <text x="550" y="205" textAnchor="middle" className="fill-white text-sm font-bold">6</text>
              <text x="550" y="250" textAnchor="middle" className="fill-gray-800 text-sm font-bold">系统监控</text>
              <text x="550" y="265" textAnchor="middle" className="fill-gray-600 text-xs">持续风险监测</text>
              
              {/* 节点7 */}
              <circle cx="650" cy="200" r="35" fill="#6366f1" />
              <text x="650" y="205" textAnchor="middle" className="fill-white text-sm font-bold">7</text>
              <text x="650" y="250" textAnchor="middle" className="fill-gray-800 text-sm font-bold">内控复审</text>
              <text x="650" y="265" textAnchor="middle" className="fill-gray-600 text-xs">内控部门审核</text>
            </g>

            {/* 连接线 */}
            <g stroke="#d1d5db" strokeWidth="2" fill="none">
              {/* 主线连接 */}
              <line x1="135" y1="80" x2="265" y2="80" />
              <line x1="335" y1="80" x2="465" y2="80" />
              
              {/* 审核通过连接 */}
              <line x1="535" y1="80" x2="665" y2="80" />
              <text x="600" y="70" textAnchor="middle" className="fill-green-600 text-xs">通过</text>
              
              {/* 审核不通过连接 */}
              <line x1="500" y1="115" x2="400" y2="165" />
              <text x="430" y="140" textAnchor="middle" className="fill-red-600 text-xs">不通过</text>
              
              {/* 人工复审到监控 */}
              <line x1="435" y1="200" x2="515" y2="200" />
              
              {/* 监控通过到放行 */}
              <line x1="585" y1="200" x2="700" y2="115" />
              <text x="640" y="150" textAnchor="middle" className="fill-green-600 text-xs">通过</text>
              
              {/* 监控不通过到内控 */}
              <line x1="585" y1="200" x2="615" y2="200" />
              <text x="600" y="190" textAnchor="middle" className="fill-red-600 text-xs">不通过</text>
            </g>
          </svg>
        </div>
      </div>

      {/* 人与系统关系演进 */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">人与系统关系演进</h3>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">传统人工审核</h4>
            <div className="space-y-2">
              <div className="text-lg font-bold text-red-600">人工决策: 100%</div>
              <div className="text-sm text-gray-600">效率低，主观性强</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">智能辅助审核</h4>
            <div className="space-y-2">
              <div className="text-lg font-bold text-green-600">系统通过: 75%</div>
              <div className="text-lg font-bold text-red-600">系统拒绝: 15%</div>
              <div className="text-lg font-bold text-orange-600">人工决策: 10%</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">全智能化审核</h4>
            <div className="space-y-2">
              <div className="text-lg font-bold text-green-600">系统通过: 85%</div>
              <div className="text-lg font-bold text-red-600">系统拒绝: 12%</div>
              <div className="text-lg font-bold text-orange-600">人工决策: 3%</div>
            </div>
          </div>
        </div>
      </div>

      {/* FK能力变化 */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">FK能力变化</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-gray-800">玩家风险防控</h4>
                <div className="flex items-center space-x-6">
                  <span className="text-sm text-gray-600">完善度: 85%</span>
                  <span className="text-sm text-green-600">季度变化: +15%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">实时风险识别</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">多维度数据分析</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">智能决策引擎</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-gray-800">代理网络监控</h4>
                <div className="flex items-center space-x-6">
                  <span className="text-sm text-gray-600">完善度: 78%</span>
                  <span className="text-sm text-green-600">季度变化: +12%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">代理行为分析</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '82%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">异常模式识别</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">风险预警机制</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};

export default FKSystemOverview;