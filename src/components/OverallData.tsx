import React from 'react';
import { BarChart3, TrendingUp, Target } from 'lucide-react';

export const OverallData = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">2.0 数据情况</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">防范单量与金额</span>
        </div>
      </div>

      {/* 1. 整体数据 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">一、数据情况</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-blue-200 text-center">
            <div className="text-blue-600 text-lg font-semibold mb-2">防范单量与金额</div>
            <div className="text-gray-600 text-sm">防范金额趋势分析</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-blue-200 text-center">
            <div className="text-blue-600 text-lg font-semibold mb-2">各大类型占比</div>
            <div className="text-gray-600 text-sm">站点类型分布统计</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-blue-200 text-center">
            <div className="text-blue-600 text-lg font-semibold mb-2">突出站点分析</div>
            <div className="text-gray-600 text-sm">Y4、BD+XK、Y6+Y9、MK</div>
          </div>
        </div>
      </div>

      {/* 2. 体育数据 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">二、体育数据</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-blue-200 text-center">
            <div className="text-blue-600 text-lg font-semibold mb-2">体育整体杀率</div>
            <div className="text-gray-600 text-sm">Y系、B系、BW系统对比</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-blue-200 text-center">
            <div className="text-blue-600 text-lg font-semibold mb-2">熊猫体育杀率</div>
            <div className="text-gray-600 text-sm">联赛分类与场馆对比</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-blue-200 text-center">
            <div className="text-blue-600 text-lg font-semibold mb-2">B系体育杀率</div>
            <div className="text-gray-600 text-sm">游戏类型与玩法分析</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-blue-200 text-center">
            <div className="text-blue-600 text-lg font-semibold mb-2">DB体育杀率</div>
            <div className="text-gray-600 text-sm">DB与IM对比分析</div>
          </div>
        </div>
      </div>

      {/* 3. 飞机数据 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">三、飞投数据</h2>
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-200 text-center">
          <div className="text-blue-600 text-lg font-semibold mb-2">飞机提款数据</div>
          <div className="text-gray-600 text-sm">提款人数、订单量、审核时效统计</div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX Q3 REPORT</div>
      </div>
    </div>
  );
};