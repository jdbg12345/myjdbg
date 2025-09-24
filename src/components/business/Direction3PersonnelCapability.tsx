import React from 'react';

export const Direction3PersonnelCapability = () => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-purple-600 pl-4">
        方向3：系统审核策略的维度缺失
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* 电子策略 */}
        <div className="bg-white rounded-lg p-6 border border-purple-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12l-4-4 1.41-1.41L10 9.17l2.59-2.58L14 8l-4 4z"/>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">电子策略</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600 mb-2">15</div>
              <div className="text-sm text-gray-600">新增策略数量</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">覆盖率提升</div>
            </div>
            <div className="text-xs text-gray-500">
              针对电子游戏的各类套利行为建立专门的识别策略
            </div>
          </div>
        </div>

        {/* 真人策略 */}
        <div className="bg-white rounded-lg p-6 border border-purple-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">真人策略</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-sm text-gray-600">新增策略数量</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">78%</div>
              <div className="text-sm text-gray-600">覆盖率提升</div>
            </div>
            <div className="text-xs text-gray-500">
              针对真人游戏的对打、算牌等行为建立识别机制
            </div>
          </div>
        </div>

        {/* 体育策略 */}
        <div className="bg-white rounded-lg p-6 border border-purple-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11a1 1 0 001 1h3v-8h6v8h3a1 1 0 001-1V7l-7-5z"/>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">体育策略</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600 mb-2">18</div>
              <div className="text-sm text-gray-600">新增策略数量</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-sm text-gray-600">覆盖率提升</div>
            </div>
            <div className="text-xs text-gray-500">
              针对体育投注的打水、套利等行为建立全面防护
            </div>
          </div>
        </div>

        {/* 彩票策略 */}
        <div className="bg-white rounded-lg p-6 border border-purple-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">彩票策略</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-sm text-gray-600">新增策略数量</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">70%</div>
              <div className="text-sm text-gray-600">覆盖率提升</div>
            </div>
            <div className="text-xs text-gray-500">
              针对彩票游戏的全包、异常投注等行为进行监控
            </div>
          </div>
        </div>

        {/* 棋牌策略 */}
        <div className="bg-white rounded-lg p-6 border border-purple-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">棋牌策略</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-sm text-gray-600">新增策略数量</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">65%</div>
              <div className="text-sm text-gray-600">覆盖率提升</div>
            </div>
            <div className="text-xs text-gray-500">
              针对棋牌游戏的作弊、对打等行为建立识别体系
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};