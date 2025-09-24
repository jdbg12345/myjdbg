import React from 'react';
import { Shield } from 'lucide-react';

export const Direction4PersonnelCapability = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">4</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">内外的人员进行勾结串联</h2>
      </div>
      <p className="text-gray-700 mb-8 leading-relaxed">
        <span className="font-semibold">内部权限管理不严，存在信息泄露和内外勾结风险</span>，需要加强权限管控，建立内部监督机制。
      </p>

      {/* 1. 风控标签 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">标</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">风控标签</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">敏感标签信息可能被泄露，内部人员与外部勾结获取会员信息</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">标签查看权限升级，由打开页面即可看到升级为须点击查询，安全性提升93%</div>
          </div>
        </div>
        
        {/* 风控标签图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">风控标签安全效果</h5>
          <div className="relative h-64">
            <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>300</span>
              <span>225</span>
              <span>150</span>
              <span>75</span>
              <span>0</span>
            </div>
            <div className="ml-8 h-full relative">
              <div className="absolute left-0 right-0 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                <div className="flex flex-col items-center relative">
                  <div className="absolute -top-8 text-sm font-semibold text-violet-600">93%</div>
                  <div className="w-24 bg-violet-500 rounded-t" style={{ height: '223px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">279单</div>
                    <div className="text-sm text-gray-600">标签安全</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-violet-500"></div>
              <span className="text-sm text-gray-600">安全操作数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">安全性: 93%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>

      {/* 2. 动态参数 */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">参</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800">动态参数</h4>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-700 mb-2">问题</div>
            <div className="text-gray-700 mb-4">风控策略参数固定化，容易被外界摸清规律，故意规避和绕过，缺乏动态调整机制</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-700 mb-2">收益</div>
            <div className="text-gray-700">实施动态参数机制，策略有效性提升45%，外界预测难度大幅增加</div>
          </div>
        </div>
        
        {/* 动态参数图表 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="text-lg font-semibold text-gray-900 mb-4">动态参数管控效果</h5>
          <div className="relative h-64">
            <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>150</span>
              <span>113</span>
              <span>75</span>
              <span>38</span>
              <span>0</span>
            </div>
            <div className="ml-8 h-full relative">
              <div className="absolute left-0 right-0 h-full">
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div key={percent} className="absolute w-full border-t border-gray-200" style={{bottom: `${percent}%`}}></div>
                ))}
              </div>
              <div className="absolute left-0 right-0 h-full flex items-end justify-center pb-4">
                <div className="flex flex-col items-center relative">
                  <div className="absolute -top-8 text-sm font-semibold text-teal-600">45%</div>
                  <div className="w-24 bg-teal-500 rounded-t" style={{ height: '108px' }}></div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-medium text-gray-700">90单</div>
                    <div className="text-sm text-gray-600">动态参数</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-teal-500"></div>
              <span className="text-sm text-gray-600">管控订单数</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">提升率: 45%</span>
            </div>
          </div>
          
          <div className="text-right text-xs text-gray-500 mt-4">统计周期：2025-04-01 ~ 2025-06-30</div>
        </div>
      </div>
    </div>
  );
};