import React from 'react';

export const Direction1PersonnelCapability = () => {
  return (
    <>
    <h3 className="text-xl font-semibold text-gray-800">审核机制变革</h3>     
     {/* 云盾分数分布图表 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">1</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">玩家云盾分数</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">已上线</span>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">Y1、2、3、5、7、9</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">FK体系缺一个统一的量化标准</span>，如分数来衡量风险程度，在多方协作和系统交互中，就难以高效、一致地执行判断和决策</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">依托风控策略与标签对各项指标进行赋分</span>，构建风控评分体系；<span className="text-blue-600">为每笔订单/每位玩家生成风险分数</span>，实现风险量化管理</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">风控体系是从<span className="text-blue-600">「人工驱动」向「系统驱动」</span>转变的最核心基础</p>
              </div>
            </div>

          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-8">
            <h4 className="font-medium text-green-700 mb-4 flex items-center">
              <span className="w-3 h-3 bg-green-600 rounded mr-3"></span>
              洞察分析
            </h4>

            <div className="space-y-3">
              <div className="bg-white border-l-4 border-blue-500 p-3 rounded">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-800">1、核心发现：</span>风险分数越高，订单数量越少，但风控率相应提高，<span className="font-bold text-blue-600">现有模型评分已具备初步的区分能力</span>
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-500 p-3 rounded">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-800">2、未来价值：</span>随着策略和参数的持续优化，评分将更精准可靠，<span className="font-bold text-green-600">可作为关键指标，用于驱动规则引擎，减少人工介入，实现更高效的风控自动化</span>。
                </p>
              </div>
            </div>
          </div>

        {/* 云盾分数分布图表 */}
<div className="mt-8">
  <div className="relative mb-6 bg-blue-50 rounded-lg p-6 border border-blue-200">
    {/* 图表区域 */}
    <div className="flex justify-center">
      <div className="relative" style={{ width: '800px', height: '320px' }}>
        {/* 左侧数量刻度 */}
        <div className="absolute left-0 h-full flex flex-col justify-between text-sm text-gray-600" style={{ width: '60px' }}>
          <span>160000</span>
          <span>120000</span>
          <span>80000</span>
          <span>40000</span>
          <span>0</span>
        </div>

        {/* 右侧百分比刻度 */}
        <div className="absolute right-0 h-full flex flex-col justify-between text-sm text-blue-600" style={{ width: '60px' }}>
          <span>20%</span>
          <span>15%</span>
          <span>10%</span>
          <span>5%</span>
          <span>0%</span>
        </div>

        {/* 图表主区域 */}
        <div className="absolute" style={{ left: '60px', right: '60px', top: 0, bottom: 0 }}>
          {/* 背景横线 */}
          {[0, 25, 50, 75, 100].map((percent) => (
            <div
              key={percent}
              className="absolute w-full border-t border-gray-300"
              style={{ bottom: `${percent}%` }}
            ></div>
          ))}

          {/* 柱状体和绿点 */}
          {[
            { name: "1-100分（55.46%）", count: 140916, rate: 2.57 },
            { name: "101-200分（35.25%）", count: 89585, rate: 3.64 },
            { name: "201-300分（7.51%）", count: 19092, rate: 5.57 },
            { name: "301-400分（1.54%）", count: 3923, rate: 9.81 },
            { name: "401-及以上（0.25%）", count: 634, rate: 17.03 },
          ].map((item, index) => {
            const maxCount = 160000;
            const maxRate = 20;
            const totalBars = 5;
            const chartWidth = 680;
            const chartHeight = 320;

            const barHeight = (item.count / maxCount) * chartHeight;
            const greenBottom = (item.rate / maxRate) * chartHeight;

            const barWidth = 80;
            const spacing = chartWidth / totalBars;
            const centerX = spacing * index + spacing / 2;

            return (
              <div key={index}>
                {/* 柱状图 */}
                <div
                  className="absolute bg-blue-500 rounded-t"
                  style={{
                    height: `${barHeight}px`,
                    width: `${barWidth}px`,
                    bottom: 0,
                    left: `${centerX - barWidth / 2}px`
                  }}
                ></div>

                {/* 风控拒单率点 */}
                <div
                  className="absolute w-4 h-4 bg-green-600 rounded-full border-2 border-white z-10"
                  style={{
                    bottom: `${greenBottom}px`,
                    left: `${centerX}px`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-green-700 bg-white px-2 py-1 rounded whitespace-nowrap">
                    {item.rate}%
                  </div>
                </div>
              </div>
            );
          })}

          {/* 风控拒单率连线 */}
          <svg className="absolute inset-0 pointer-events-none z-20" width="680" height="320">
            <polyline
              fill="none"
              stroke="#16a34a"
              strokeWidth="2"
              points={
                [
                  { rate: 2.57, index: 0 },
                  { rate: 3.64, index: 1 },
                  { rate: 5.57, index: 2 },
                  { rate: 9.81, index: 3 },
                  { rate: 17.03, index: 4 }
                ].map(({ rate, index }) => {
                  const totalBars = 5;
                  const chartWidth = 680;
                  const chartHeight = 320;
                  const spacing = chartWidth / totalBars;
                  const x = spacing * index + spacing / 2;
                  const y = chartHeight - (rate / 20) * chartHeight;
                  return `${x},${y}`;
                }).join(" ")
              }
            />
          </svg>
        </div>
      </div>
    </div>

    {/* X轴标签（图表外） */}
    <div className="flex justify-center mt-3">
      <div className="relative" style={{ width: '680px', height: '40px', marginLeft: '0px' }}>
        {[
          "1-100分\n(55.46%)",
          "101-200分\n(35.25%)",
          "201-300分\n(7.51%)",
          "301-400分\n(1.54%)",
          "401-及以上\n(0.25%)",
        ].map((label, index) => {
          const totalBars = 5;
          const chartWidth = 680;
          const spacing = chartWidth / totalBars;
          const centerX = spacing * index + spacing / 2;

          return (
            <div
              key={index}
              className="absolute text-center"
              style={{
                left: `${centerX}px`,
                transform: 'translateX(-50%)',
                width: '80px'
              }}
            >
              <div className="text-xs text-gray-800 font-medium whitespace-pre-line leading-tight">
                {label}
              </div>
            </div>
          );
        })}
      </div>
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
    统计周期：Y1、2、3、5、7、9上线日期后到9月30，试运行周期～10天
  </div>
</div>


       
          </div>
        </div>
        
      
      
        {/* 新派单规则效果图表 */}
        <div className="mb-8">
          {/* 整合的内容和图表模块 */}
          <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">派单策略优化</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">已上线</span>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">Y1、2、3、5、7、9</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">以金额作为分单依据，未考虑订单难度及人员能力匹配，导致部分高风险订单被分配至远程或外包，而其<span className="text-blue-600">差错率较总部高出约2～3倍</span></p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决方法
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">引入风险评分，将派单从<span className="text-blue-600">"仅按金额"升级为"按风险分数+金额"</span>，确保<span className="text-blue-600">中高风险订单由经验丰富的审核员处理</span>，实现人单匹配最优分配。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">合适订单给到合适的人审核，提升整体审核质量</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-8">
              <h4 className="font-medium text-green-700 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-600 rounded mr-3"></span>
                  洞察分析
              </h4>

              <div className="space-y-3">
                <div className="bg-white border-l-4 border-green-500 p-3 rounded">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-semibold text-gray-800">第一阶段调整：</span>通过派单机制的调整，整体实现了外包和远程等低效渠道订单量的<span className="font-bold text-green-600">显著压缩</span>，符合预期；但远程和外包的单量虽然有所减少，难度也有所降低，但其错误率却上升，暴露出能力不足和责任心缺失的问题，同时也存在潜在的管理安全隐患。为此，后续应加强人员培训、优化淘汰机制，并强化过程管控，<span className="font-bold text-red-600">逐步减少外包远程比重，最终实现能够随时剔除</span>
                  </p>
              
                </div>

                  <div className="bg-white border-l-4 border-blue-500 p-3 rounded">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-semibold text-gray-800">1、总部一审：</span>订单量由 <span className="font-bold text-blue-600">25,161</span> 单增长至 <span className="font-bold text-blue-600">135,259</span> 单，提升了 <span className="font-bold text-green-600">437.57%</span>；审核错误率由 <span className="font-bold">0.67%</span> 降至 <span className="font-bold">0.49%</span>，下降了 <span className="font-bold text-green-600">26.69%</span>，审核质量显著提升，符合预期。
                  </p>
                </div>
                
                <div className="bg-white border-l-4 border-blue-500 p-3 rounded">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-semibold text-gray-800">2、外包一审：</span>订单量由 <span className="font-bold text-blue-600">66,423</span> 单降至 <span className="font-bold text-blue-600">24,511</span> 单，下降了 <span className="font-bold text-green-600">63.10%</span>；审核错误率由 <span className="font-bold">1.07%</span> 降至 <span className="font-bold">1.39%</span>，上升了 <span className="font-bold text-red-600">29.97%</span>，不符合预期。
                  </p>
                 
                </div>

                <div className="bg-white border-l-4 border-blue-500 p-3 rounded">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-semibold text-gray-800">3、远程一审：</span>订单量由 <span className="font-bold text-blue-600">82,733</span> 单降至 <span className="font-bold text-blue-600">29,431</span> 单，下降了 <span className="font-bold text-green-600">64.44%</span>；审核错误率由 <span className="font-bold">0.82%</span> 降至 <span className="font-bold">0.95%</span>，上升了 <span className="font-bold text-red-600">15.88%</span>，不符合预期。
                  </p>
                </div>

                 <div className="bg-white border-l-4 border-green-500 p-3 rounded">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-semibold text-gray-800">第二阶段调整：</span>通过数据分析发现，风控用户主要集中在低V值和低金额特征群体，这些用户在派单时通常优先分配远程和外包任务。然而，由于其能力、态度及考核监管方面的不足，导致审核质量未得到有效提升；<span className="font-bold text-green-600">后续针对这些特征的订单进行分配权重进一步调整；</span>
                  </p>             
                </div>
                
              </div>
          </div>
            
            {/* 图表模块 */}
            <div className="mt-8">
              <div className="relative mb-6 bg-blue-50 rounded-lg p-6 border border-blue-200">

                {/* 图表区域 */}
                <div className="flex justify-center">
                  <div className="relative" style={{ width: '800px', height: '320px' }}>
                    {/* Y轴刻度 */}
                    <div className="absolute left-0 h-full flex flex-col justify-between text-sm text-gray-600" style={{ width: '60px' }}>
                      <span>160000</span>
                      <span>120000</span>
                      <span>80000</span>
                      <span>40000</span>
                      <span>0</span>
                    </div>

                    <div className="absolute right-0 h-full flex flex-col justify-between text-sm text-blue-600" style={{ width: '60px' }}>
                      <span>2%</span>
                      <span>1.5%</span>
                      <span>1%</span>
                      <span>0.5%</span>
                      <span>0%</span>
                    </div>

                    {/* 图表主区域 */}
                    <div className="absolute" style={{ left: '60px', right: '60px', top: 0, bottom: 0 }}>
                      {/* 背景横线 */}
                      {[0, 25, 50, 75, 100].map((percent) => (
                        <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                      ))}

                      {/* 柱状图和数据点 */}
                      {[
                        { name: '外包一审', before: 66423, after: 24511, beforeRate: 1.07, afterRate: 1.39 },
                        { name: '远程一审', before: 82773, after: 29431, beforeRate: 0.82, afterRate: 0.95 },
                        { name: '总部一审', before: 25161, after: 135259, beforeRate: 0.67, afterRate: 0.49},
                      ].map((item, index) => {
                        const maxCount = 160000;
                        const maxRate = 2;
                        const totalGroups = 4;
                        const chartWidth = 680;
                        const chartHeight = 320;
                        const barHeightBefore = (item.before / maxCount) * chartHeight;
                        const barHeightAfter = (item.after / maxCount) * chartHeight;
                        const rateBottomBefore = (item.beforeRate / maxRate) * chartHeight;
                        const rateBottomAfter = (item.afterRate / maxRate) * chartHeight;

                        const barWidth = 40;
                        const spacing = chartWidth / totalGroups;
                        const groupCenterX = spacing * index + spacing / 2;
                        const barSpacing = 4;

                        return (
                        <div key={index}>
                          {/* 调整前柱状图 */}
                          <div
                            className="absolute bg-blue-500 rounded-t"
                            style={{
                              height: `${barHeightBefore}px`,
                              width: `${barWidth}px`,
                              bottom: 0,
                              left: `${groupCenterX - barWidth - barSpacing / 2}px`
                            }}
                          ></div>

                          {/* 调整后柱状图 */}
                          <div
                            className="absolute bg-blue-400 rounded-t"
                            style={{
                              height: `${barHeightAfter}px`,
                              width: `${barWidth}px`,
                              bottom: 0,
                              left: `${groupCenterX + barSpacing / 2}px`
                            }}
                          ></div>

                          {/* 调整前错误率点 */}
                          <div
                            className="absolute w-4 h-4 bg-blue-600 rounded-full border-2 border-white z-10"
                            style={{
                              bottom: `${rateBottomBefore}px`,
                              left: `${groupCenterX - barWidth / 2 - barSpacing / 2}px`,
                              transform: 'translateX(-50%)'
                            }}
                          >
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-700 bg-white px-2 py-1 rounded whitespace-nowrap">
                              {item.beforeRate}%
                            </div>
                          </div>

                          {/* 调整后错误率点 */}
                          <div
                            className="absolute w-4 h-4 bg-blue-400 rounded-full border-2 border-white z-10"
                            style={{
                              bottom: `${rateBottomAfter}px`,
                              left: `${groupCenterX + barWidth / 2 + barSpacing / 2}px`,
                              transform: 'translateX(-50%)'
                            }}
                          >
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-700 bg-white px-2 py-1 rounded whitespace-nowrap">
                              {item.afterRate}%
                            </div>
                          </div>

                        </div>
                      )})}

                      {/* 问题率连线 */}
                      <svg className="absolute inset-0 pointer-events-none z-20" width="680" height="320">
                        {/* 调整前连线 */}
                        <polyline
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          strokeDasharray="6,4"
                          opacity="0.8"
                          points={[
                            { rate: 1.07, index: 0 },
                            { rate: 0.82, index: 1 },
                            { rate: 0.67, index: 2 }
                          ].map(({ rate, index }) => {
                            const totalGroups = 4;
                            const chartWidth = 680;
                            const chartHeight = 320;
                            const spacing = chartWidth / totalGroups;
                            const groupCenterX = spacing * index + spacing / 2;
                            const barWidth = 40;
                            const barSpacing = 4;
                            const x = groupCenterX - barWidth / 2 - barSpacing / 2;
                            const y = chartHeight - (rate / 2) * chartHeight;
                            return `${x},${y}`;
                          }).join(" ")}
                        />
                        {/* 调整后连线 */}
                        <polyline
                          fill="none"
                          stroke="#60A5FA"
                          strokeWidth="3"
                          opacity="0.8"
                          points={[
                            { rate: 1.39, index: 0 },
                            { rate: 0.95, index: 1 },
                            { rate: 0.49, index: 2 }
                          ].map(({ rate, index }) => {
                            const totalGroups = 4;
                            const chartWidth = 680;
                            const chartHeight = 320;
                            const spacing = chartWidth / totalGroups;
                            const groupCenterX = spacing * index + spacing / 2;
                            const barWidth = 40;
                            const barSpacing = 4;
                            const x = groupCenterX + barWidth / 2 + barSpacing / 2;
                            const y = chartHeight - (rate / 2) * chartHeight;
                            return `${x},${y}`;
                          }).join(" ")}
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* X轴标签（图表外） */}
                <div className="flex justify-center mt-3">
                  <div className="relative" style={{ width: '680px', height: '45px', marginLeft: '0px' }}>
                    {[
                      { name: '外包一审', before: 66423, after: 24511 },
                      { name: '远程一审', before: 82773, after: 29431 },
                      { name: '总部一审', before: 25161, after: 135259 },
                    ].map((item, index) => {
                      const totalGroups = 4;
                      const chartWidth = 680;
                      const spacing = chartWidth / totalGroups;
                      const groupCenterX = spacing * index + spacing / 2;

                      return (
                        <div
                          key={index}
                          className="absolute text-center"
                          style={{
                            left: `${groupCenterX}px`,
                            transform: 'translateX(-50%)',
                            width: '160px'
                          }}
                        >
                          <div className="text-sm text-gray-800 font-medium whitespace-nowrap">{item.name}</div>
                          <div className="text-xs text-gray-600 mt-1">{item.before}/{item.after}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
                            
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
              
              <div className="text-right text-sm text-gray-500 mt-6">统计周期：Y1、2、3、5、7、9上线日期后到9月30，试运行周期～10天
</div>
            </div>
          </div>
        </div>
      

        {/* 出款强制查看标签备注 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">3</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">出款强制查看标签备注</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">已上线</span>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">Y</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">在出款操作中，尽管SOP明确要求查看标签备注，<span className="text-blue-600">但仍存在忽视行为，错误出款中占比15–20%</span></p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">将<span className="text-blue-600">查看标签备注设为出款流程中的强制查看环节</span>，否则无法完成审核</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">避免不看标签及备注出款的行为</span></p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};