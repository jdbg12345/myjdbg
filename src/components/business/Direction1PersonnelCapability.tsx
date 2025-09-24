import React from 'react';
import { BarChart3, CheckCircle, Clock, AlertCircle, Lightbulb } from 'lucide-react';

export const Direction1PersonnelCapability = () => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4">
        方向1：人员的风控能力参差不齐
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* 1、派单策略变革效果 */}
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <h4 className="text-lg font-bold text-gray-800">派单策略变革效果</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">审核准确率提升</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-sm text-gray-600">审核效率提升</div>
            </div>
            <div className="text-xs text-gray-500">
              通过智能派单机制，将订单按风险等级分配给相应经验的审核员
            </div>
          </div>
        </div>

        {/* 2、风险云盾分数效果 */}
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <h4 className="text-lg font-bold text-gray-800">风险云盾分数效果</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-sm text-gray-600">风险识别准确率</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-sm text-gray-600">误报率降低</div>
            </div>
            <div className="text-xs text-gray-500">
              基于AI算法的风险评分系统，提供精准的风险预警
            </div>
          </div>
        </div>

        {/* 3、关联下注工具 */}
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <h4 className="text-lg font-bold text-gray-800">关联下注工具</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">78%</div>
              <div className="text-sm text-gray-600">关联账户识别率</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 mb-2">45%</div>
              <div className="text-sm text-gray-600">套利行为拦截提升</div>
            </div>
            <div className="text-xs text-gray-500">
              通过多维度数据分析，识别关联账户的异常下注行为
            </div>
          </div>
        </div>

        {/* 4、提款流水工具 */}
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <h4 className="text-lg font-bold text-gray-800">提款流水工具</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">88%</div>
              <div className="text-sm text-gray-600">流水异常检测率</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 mb-2">35%</div>
              <div className="text-sm text-gray-600">审核时间缩短</div>
            </div>
            <div className="text-xs text-gray-500">
              自动分析提款流水合规性，快速识别异常提款行为
            </div>
          </div>
        </div>

        {/* 5、体育打水工具 */}
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
            <h4 className="text-lg font-bold text-gray-800">体育打水工具</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">91%</div>
              <div className="text-sm text-gray-600">打水行为识别率</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 mb-2">52%</div>
              <div className="text-sm text-gray-600">套利损失减少</div>
            </div>
            <div className="text-xs text-gray-500">
              专门针对体育投注的打水行为进行实时监控和拦截
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};