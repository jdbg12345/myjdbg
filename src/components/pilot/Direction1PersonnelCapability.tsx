import React from 'react';

export const Direction1PersonnelCapability = () => {
  return (
    <>
      <div className="bg-white rounded-xl p-8 mb-8 border border-blue-200 shadow-md">
          
     {/* 云盾分数分布图表 */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">1</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">云盾分数分布</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">Y123579:已上线</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">FK体系缺一个统一的量化标准</span>，如分数来衡量风险程度，在多方协作和系统交互中，就难以高效、一致地执行判断和决策</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">依托风控策略与标签对各项指标进行赋分</span>，构建风控评分体系；<span className="text-blue-600">为每笔订单/每位玩家生成风险分数</span>，实现风险量化管理</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">风控体系是从<span className="text-blue-600">「人工驱动」向「系统驱动」</span>转变的最核心基础</p>
              </div>
            </div>

          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-8">
            <h4 className="font-medium text-green-700 mb-3 flex items-center">
              <span className="w-3 h-3 bg-green-600 rounded mr-3"></span>
              数据效果
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">现有模型评分已具备初步区分能力，<span className="text-blue-600">风险分数越高的订单数量越少、但风控率越高；</span>随着策略和参数的持续优化，评分将更精准可靠，可作为关键指标，逐步用于驱动规则引擎，<span className="text-blue-600">减少人工介入，实现更高效的风控自动化</span></p>
          </div>

        {/* 云盾分数分布图表 */}
<div className="mt-8">
  <div className="relative h-96 mb-6 bg-blue-50 rounded-lg p-8 border border-blue-200">
    <div className="mx-12 h-full relative">
      {/* 左侧数量刻度 */}
      <div className="absolute left-0 h-full flex flex-col justify-between text-sm text-gray-600">
        <span>160000</span>
        <span>120000</span>
        <span>80000</span>
        <span>40000</span>
        <span>0</span>
      </div>

      {/* 右侧百分比刻度 */}
      <div className="absolute right-0 h-full flex flex-col justify-between text-sm text-blue-600">
        <span>20%</span>
        <span>15%</span>
        <span>10%</span>
        <span>5%</span>
        <span>0%</span>
      </div>

      {/* 背景横线 */}
      <div className="absolute left-12 right-12 h-full">
        {[0, 25, 50, 75, 100].map((percent) => (
          <div
            key={percent}
            className="absolute w-full border-t border-gray-300"
            style={{ bottom: `${percent}%` }}
          ></div>
        ))}
      </div>

      {/* 柱状体和绿点 */}
      <div
        className="absolute left-20 right-12 h-full flex items-end justify-between pb-0"
        style={{ width: "420px" }}
      >
        {[
          { name: "1-100分（55.46%）", count: 140916, rate: 2.57 },
          { name: "101-200分（35.25%）", count: 89585, rate: 3.64 },
          { name: "201-300分（7.51%）", count: 19092, rate: 5.57 },
          { name: "301-400分（1.54%）", count: 3923, rate: 9.81 },
          { name: "401-及以上（0.25%）", count: 634, rate: 17.03 },
        ].map((item, index) => {
          const maxCount = 140000;
          const maxRate = 20;

          const barHeight = (item.count / maxCount) * 250;
          const greenBottom = (item.rate / maxRate) * 250;

          return (
            <div
              key={index}
              className="flex flex-col items-center relative"
              style={{ width: 80 }}
            >
              <div className="flex items-end space-x-1">
                <div className="relative">
                  <div
                    className="w-20 bg-blue-500 rounded-t"
                    style={{ height: `${barHeight}px` }}
                  ></div>
                </div>
              </div>

              {/* 风控拒单率点 */}
              <div
                className="absolute w-4 h-4 bg-green-600 rounded-full border-2 border-white"
                style={{
                  bottom: `${greenBottom}px`,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-green-700 bg-white px-2 py-1 rounded whitespace-nowrap">
                  {item.rate}%
                </div>
              </div>

              {/* 底部标签 */}
              <div className="text-center mt-4">
                <div className="text-sm text-gray-800 font-medium whitespace-pre-line">
                  {item.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 风控拒单率连线 */}
      <svg
        className="absolute left-20 bottom-8 pointer-events-none"
        width={420}
        height={250}
        viewBox="0 0 420 250"
        preserveAspectRatio="none"
        style={{ top: 0 }}
      >
        <polyline
          fill="none"
          stroke="#16a34a"
          strokeWidth="3"
          opacity="0.8"
          points={
            [
              2.57,
              3.64,
              5.57,
              9.81,
              17.03,
            ].map((rate, index) => {
              const barWidth = 80;
              const gap = 0; // justify-between让间距自动分配，所以gap是0
              const x = (barWidth + gap) * index + barWidth / 2;
              const y = 250 - (rate / 20) * 250;
              return `${x},${y}`;
            }).join(" ")
          }
        />
      </svg>
    </div>
  </div>

  {/* 图例 */}
  <div className="flex justify-center space-x-8 text-sm">
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 bg-blue-500 rounded"></div>
      <span className="text-gray-700">订单数量</span>
    </div>
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 bg-green-600 rounded-full"></div>
      <span className="text-gray-700">风控拒单率</span>
    </div>
  </div>

  <div className="text-right text-sm text-gray-500 mt-6">
    统计周期：Y123579上线日期后到9月30
  </div>
</div>


       
          </div>
        </div>
        
      
      
        {/* 新派单规则效果图表 */}
        <div className="mb-12">
          {/* 整合的内容和图表模块 */}
          <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">派单策略优化</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">已上线</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">以金额作为分单依据，未考虑订单难度及人员能力匹配，导致部分高风险订单被分配至远程或外包，而其<span className="text-blue-600">差错率较总部高出约2～3倍，约100万+/月的损失</span></p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决方法
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">引入订单风险评分机制，将派单从<span className="text-blue-600">"仅按金额"升级为"按风险分数+金额"</span>，确保<span className="text-blue-600">中高风险订单由经验丰富的审核员处理</span>，实现人单匹配最优分配。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">错误率降低<span className="font-medium text-blue-600">15%-20%</span></p>
              </div>
            </div>

               <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-8">
            <h4 className="font-medium text-green-700 mb-3 flex items-center">
              <span className="w-3 h-3 bg-green-600 rounded mr-3"></span>
                            洞察分析
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">现有模型评分已具备初步区分能力，<span className="text-blue-600">风险分数越高的订单数量越少、但风控率越高；</span>随着策略和参数的持续优化，评分将更精准可靠，可作为关键指标，逐步用于驱动规则引擎，<span className="text-blue-600">减少人工介入，实现更高效的风控自动化</span></p>
          </div>
            
            {/* 图表模块 */}
            <div className="mt-8">
              <div className="relative h-80 mb-6 bg-blue-50 rounded-lg p-8 border border-blue-200">
                
                <div className="mx-12 h-full relative">
                  {/* Y轴刻度 */}
                  <div className="absolute left-0 h-full flex flex-col justify-between text-sm text-gray-600">
                    <span>1400</span>
                    <span>1050</span>
                    <span>700</span>
                    <span>350</span>
                    <span>0</span>
                  </div>
                  
                  <div className="absolute right-0 h-full flex flex-col justify-between text-sm text-blue-600">
                    <span>5%</span>
                    <span>3.75%</span>
                    <span>2.5%</span>
                    <span>1.25%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-20 right-12 h-full flex items-end justify-around pb-0">
                    {[
                      { name: '外包一审', before: 1200, after: 1050, beforeRate: 4.0, afterRate: 3.0 },
                      { name: '远程一审', before: 850, after: 900, beforeRate: 3.5, afterRate: 2.8 },
                      { name: '总部二审', before: 520, after: 550, beforeRate: 2.2, afterRate: 1.5 }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center relative">
                        <div className="flex items-end space-x-1">
                          <div className="relative">
                            <div 
                              className="w-20 bg-blue-500 rounded-t"
                              style={{ height: `${(item.before / 1400) * 200}px` }}
                            ></div>
                          </div>
                          <div className="relative">
                            <div 
                              className="w-20 bg-blue-400 rounded-t"
                              style={{ height: `${(item.after / 1400) * 200}px` }}
                            ></div>
                          </div>
                        </div>
                        
                        {/* 问题率点 */}
                        <div 
                          className="absolute w-4 h-4 bg-blue-600 rounded-full border-2 border-white"
                          style={{bottom: `${(item.beforeRate / 5) * 200}px`, left: '30px'}}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-700 bg-white px-2 py-1 rounded whitespace-nowrap">
                            {item.beforeRate}%
                          </div>
                        </div>
                        
                        <div 
                          className="absolute w-4 h-4 bg-blue-400 rounded-full border-2 border-white"
                          style={{bottom: `${(item.afterRate / 5) * 200}px`, right: '30px'}}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-700 bg-white px-2 py-1 rounded whitespace-nowrap">
                            {item.afterRate}%
                          </div>
                        </div>
                        
                        {/* 底部标签 */}
                        <div className="text-center mt-4">
                          <div className="text-sm text-gray-800 font-medium whitespace-nowrap">{item.name}</div>
                          <div className="text-xs text-gray-600 mt-1">{item.before}/{item.after}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 问题率连线 */}
                  <svg className="absolute left-20 right-12 top-0 bottom-8 pointer-events-none" width="100%" height="100%">
                    <path
                      d={`M 16.67% ${100 - (4.0 / 5) * 80}% L 50% ${100 - (3.5 / 5) * 80}% L 83.33% ${100 - (2.2 / 5) * 80}%`}
                      stroke="#3B82F6"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="6,4"
                      opacity="0.8"
                    />
                    <path
                      d={`M 16.67% ${100 - (3.0 / 5) * 80}% L 50% ${100 - (2.8 / 5) * 80}% L 83.33% ${100 - (1.5 / 5) * 80}%`}
                      stroke="#60A5FA"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.8"
                    />
                  </svg>
                </div>
              </div>
              
              <div className="text-center text-base font-medium text-gray-700 mb-6">审核角色</div>
              
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-gray-700">调整前派单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  <span className="text-gray-700">调整后派单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">调整前错误率</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-700">调整后错误率</span>
                </div>
              </div>
              
              <div className="text-right text-sm text-gray-500 mt-6">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>
      

        {/* 出款强制查看标签备注 */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">出款强制查看标签备注</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">已上线</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">在出款操作中，尽管SOP明确要求查看标签备注，<span className="text-blue-600">但仍存在忽视行为，造成15–20%的错误出款，100万+/月的损失</span>。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">将<span className="text-blue-600">查看标签备注设为出款流程中的强制查看环节</span>，否则无法完成审核</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">错误出款影响降低15%-20%</span></p>
              </div>
            </div>

            {/* 错误率对比图表 */}
          {/* 错误率对比图表 */}
<div className="mt-8">
  <div className="relative h-80 mb-6 bg-blue-50 rounded-lg p-8 border border-blue-200">
    <div className="mx-12 h-full relative">
      <div className="absolute left-0 h-full flex flex-col justify-between text-sm text-gray-600">
        <span>30%</span>
        <span>22.5%</span>
        <span>15%</span>
        <span>7.5%</span>
        <span>0%</span>
      </div>

      <div className="absolute left-12 right-12 h-full">
        {[0, 25, 50, 75, 100].map((percent) => (
          <div key={percent} className="absolute w-full border-t border-gray-300" style={{ bottom: `${percent}%` }}></div>
        ))}
      </div>

      <div className="absolute left-20 right-12 h-full flex items-end justify-between pb-0">
        <div className="flex items-center space-x-48 h-full relative">
          {/* 调整前 */}
          <div className="flex flex-col items-center relative h-full justify-end pb-8">
            <div
              className="absolute w-5 h-5 bg-gray-500 rounded-full border-2 border-white"
              style={{ bottom: `${(25 / 30) * 200}px` }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white px-3 py-1 rounded text-xs font-medium whitespace-nowrap">
                25%
              </div>
            </div>
            <div className="text-center mt-4">
              <div className="text-sm text-gray-800 font-medium">调整前</div>
            </div>
          </div>

          {/* 调整后 */}
          <div className="flex flex-col items-center relative h-full justify-end pb-8">
            <div
              className="absolute w-5 h-5 bg-blue-500 rounded-full border-2 border-white"
              style={{ bottom: `${(8 / 30) * 200}px` }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded text-xs font-medium whitespace-nowrap">
                8%
              </div>
            </div>
            <div className="text-center mt-4">
              <div className="text-sm text-gray-800 font-medium">调整后</div>
            </div>
          </div>
        </div>

        {/* 改善指示 - 放在连线中间 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded font-medium" style={{top: '40%'}}>
          错误率下降：↓ 68%
        </div>
      </div>
    </div>
  </div>

  <div className="flex justify-center space-x-8 text-sm">
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
      <span className="text-gray-700">调整前错误率</span>
    </div>
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      <span className="text-gray-700">调整后错误率</span>
    </div>
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 bg-blue-600 rounded"></div>
      <span className="text-gray-700">改善</span>
    </div>
  </div>


              
              <div className="text-right text-sm text-gray-500 mt-6">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};