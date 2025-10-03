import React from 'react';

export const TableOfContents = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-16 mb-10 relative">
      <div className="max-w-5xl w-full">
        <h1 className="text-6xl font-bold text-center text-gray-800 mb-16 border-b-4 border-blue-600 pb-6">目录</h1>

        <div className="space-y-5">
          {/* 1. 组织情况 */}
          <div className="bg-white border-l-4 border-blue-600 rounded-lg p-6 hover:shadow-lg transition-all">
            <span className="text-2xl font-bold text-blue-600 mr-4">1.</span>
            <span className="text-xl font-semibold text-gray-800">组织情况</span>
          </div>

          {/* 2. 数据情况 */}
          <div className="bg-white border-l-4 border-blue-600 rounded-lg p-6 hover:shadow-lg transition-all">
            <span className="text-2xl font-bold text-blue-600 mr-4">2.</span>
            <span className="text-xl font-semibold text-gray-800">数据情况</span>
          </div>

          <div className="ml-12 space-y-3">
            {[
              { num: "2.1", title: "防范单量与金额" },
              { num: "2.2", title: "站点类型占比" },
              { num: "2.3", title: "Y4明细" },
              { num: "2.4", title: "BD+XK明细" },
              { num: "2.5", title: "Y6+Y9明细" },
              { num: "2.6", title: "体育整体杀率明细" },
              { num: "2.7", title: "熊猫体育杀率" },
              { num: "2.8", title: "B系体育杀率明细" },
              { num: "2.9", title: "DB体育杀率明细" },
              { num: "2.10", title: "飞投数据" }
            ].map((item, index) => (
              <div key={index} className="bg-white border-l-4 border-gray-400 rounded-lg p-4 hover:shadow-md transition-all">
                <span className="text-lg font-bold text-gray-600 mr-3">{item.num}</span>
                <span className="text-lg text-gray-700">{item.title}</span>
              </div>
            ))}
          </div>

          {/* 3. 工作情况 */}
          <div className="bg-white border-l-4 border-blue-600 rounded-lg p-6 hover:shadow-lg transition-all">
            <span className="text-2xl font-bold text-blue-600 mr-4">3.</span>
            <span className="text-xl font-semibold text-gray-800">工作情况</span>
          </div>

          <div className="ml-12 space-y-3">
            {[
              { num: "3.1", title: "FK全局说明" },
              { num: "3.2", title: "FK会员说明" },
              { num: "3.3", title: "FK内控说明" },
              { num: "3.4", title: "FK代理说明" }
            ].map((item, index) => (
              <div key={index} className="bg-white border-l-4 border-gray-400 rounded-lg p-4 hover:shadow-md transition-all">
                <span className="text-lg font-bold text-gray-600 mr-3">{item.num}</span>
                <span className="text-lg text-gray-700">{item.title}</span>
              </div>
            ))}
          </div>

          {/* 4. B端问题汇总 */}
          <div className="bg-white border-l-4 border-blue-600 rounded-lg p-6 hover:shadow-lg transition-all">
            <span className="text-2xl font-bold text-blue-600 mr-4">4.</span>
            <span className="text-xl font-semibold text-gray-800">B端问题汇总</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX Q3 REPORT</div>
      </div>
    </div>
  );
};