import React from 'react';

export const TableOfContents = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-4">目录</h2>
      <div className="space-y-4 mt-8">
        {[
          { num: "1.", title: "风控组织架构", isParent: false, isChild: false },
          { num: "2.", title: "风控整体数据", isParent: false, isChild: false },
          { num: "3.", title: "风控工作总结", isParent: true, isChild: false }
        ].map((item, index) => (
          <div key={index} className={`bg-white border-l-4 ${
            item.isParent 
              ? 'border-blue-600' 
              : 'border-blue-600'
          } rounded-lg p-8 transition-all duration-300`}>
            <span className={`text-2xl font-bold ${
              item.isParent 
                ? 'text-blue-600' 
                : 'text-blue-600'
            } mr-4`}>{item.num}</span>
            <span className="text-xl font-semibold text-gray-800">{item.title}</span>
          </div>
        ))}
        
        {/* Sub-items under 3. 风控工作总结 */}
        <div className="ml-12 space-y-3">
          {[
            { num: "3.0", title: "业务方向及提升策略概览" },
            { num: "3.1", title: "审核组" },
            { num: "3.2", title: "内控组" },
            { num: "3.3", title: "稽查组" },
            { num: "3.4", title: "系统组" }
          ].map((item, index) => (
            <div key={index} className="bg-white border-l-4 border-gray-600 rounded-lg p-6 transition-all duration-300 scale-95">
              <span className="text-lg font-bold text-gray-600 mr-4">{item.num}</span>
              <span className="text-lg font-semibold text-gray-800">{item.title}</span>
            </div>
          ))}
        </div>

        {/* 4. B端事故问题汇总 */}
        <div className="bg-white border-l-4 border-blue-600 rounded-lg p-8 transition-all duration-300">
          <span className="text-2xl font-bold text-blue-600 mr-4">4.</span>
          <span className="text-xl font-semibold text-gray-800">B端问题汇总</span>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};