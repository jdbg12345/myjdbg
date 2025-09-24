import React from 'react';
import { Calendar } from 'lucide-react';

export const SystemTransformationRhythm = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">二、体系变革的节奏</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-blue-500" />
              <div className="min-w-0 flex-1">
                <h4 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                  Q2：基础建设
                </h4>
              </div>
            </div>
            <span className="text-3xl font-bold text-gray-700">50%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
            <div 
              className="bg-blue-500 h-6 rounded-full transition-all duration-300"
              style={{ width: '50%' }}
            ></div>
          </div>
          <div className="text-gray-700 text-sm">
            <div className="font-semibold mb-2">核心目标：</div>
            <div>建立基础风控体系，完善系统审核策略，提升人工审核效率</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-blue-500" />
              <div className="min-w-0 flex-1">
                <h4 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                  Q3：能力提升
                </h4>
              </div>
            </div>
            <span className="text-3xl font-bold text-gray-700">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
            <div 
              className="bg-blue-500 h-6 rounded-full transition-all duration-300"
              style={{ width: '90%' }}
            ></div>
          </div>
          <div className="text-gray-700 text-sm">
            <div className="font-semibold mb-2">核心目标：</div>
            <div>完善风控策略覆盖，提升系统智能化水平，优化审核流程</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-blue-500" />
              <div className="min-w-0 flex-1">
                <h4 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                  Q4：体系完善
                </h4>
              </div>
            </div>
            <span className="text-3xl font-bold text-gray-700">100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
            <div 
              className="bg-blue-500 h-6 rounded-full transition-all duration-300"
              style={{ width: '100%' }}
            ></div>
          </div>
          <div className="text-gray-700 text-sm">
            <div className="font-semibold mb-2">核心目标：</div>
            <div>建立完整风控生态，实现全面智能化，达到行业领先水平</div>
          </div>
        </div>
      </div>
    </div>
  );
};