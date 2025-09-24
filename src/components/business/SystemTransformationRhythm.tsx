import React from 'react';
import { TrendingUp } from 'lucide-react';

export const SystemTransformationRhythm = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">二、体系变革的节奏</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Q2阶段 */}
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">Q2</div>
            <h3 className="text-xl font-bold text-gray-800">基础建设阶段</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">核心任务</div>
              <div className="text-sm text-blue-600 space-y-2">
                <div>• 建立基础风控策略框架</div>
                <div>• 完善人员培训体系</div>
                <div>• 优化审核流程标准</div>
                <div>• 加强权限管控机制</div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">预期成果</div>
              <div className="text-sm text-green-600">
                建立完整的风控基础体系，为后续优化奠定基础
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="text-sm font-semibold text-blue-700">进度状态</div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <span className="text-sm font-semibold text-blue-600">75%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Q3阶段 */}
        <div className="bg-white rounded-lg p-6 border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">Q3</div>
            <h3 className="text-xl font-bold text-gray-800">优化提升阶段</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-green-700 mb-2">核心任务</div>
              <div className="text-sm text-green-600 space-y-2">
                <div>• 完善系统审核策略</div>
                <div>• 提升人工审核效率</div>
                <div>• 强化内控监督机制</div>
                <div>• 建立预警响应体系</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-700 mb-2">预期成果</div>
              <div className="text-sm text-blue-600">
                实现风控体系全面优化，显著提升风控效能
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <div className="text-sm font-semibold text-green-700">目标进度</div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                <span className="text-sm font-semibold text-green-600">90%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Q4阶段 */}
        <div className="bg-white rounded-lg p-6 border border-purple-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">Q4</div>
            <h3 className="text-xl font-bold text-gray-800">成熟运营阶段</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-purple-700 mb-2">核心任务</div>
              <div className="text-sm text-purple-600 space-y-2">
                <div>• 系统全面稳定运行</div>
                <div>• 持续优化和迭代</div>
                <div>• 经验总结和推广</div>
                <div>• 建立长效机制</div>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-yellow-700 mb-2">预期成果</div>
              <div className="text-sm text-yellow-600">
                形成成熟稳定的风控运营体系，实现可持续发展
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-purple-200">
              <div className="text-sm font-semibold text-purple-700">规划状态</div>
              <div className="text-sm text-gray-600 mt-1">规划设计中</div>
            </div>
          </div>
        </div>
      </div>

      {/* 变革节奏总结 */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <div className="text-center">
          <h4 className="text-xl font-bold text-gray-800 mb-4">变革节奏总体规划</h4>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-blue-600 mb-2">3个月</div>
              <div className="text-sm text-gray-700">基础建设周期</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-green-600 mb-2">6个月</div>
              <div className="text-sm text-gray-700">优化提升周期</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-purple-600 mb-2">12个月</div>
              <div className="text-sm text-gray-700">成熟运营周期</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-orange-600 mb-2">持续</div>
              <div className="text-sm text-gray-700">迭代优化</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};