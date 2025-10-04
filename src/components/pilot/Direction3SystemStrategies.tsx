import React from 'react';
import { AlertTriangle, Calendar } from 'lucide-react';

export const Direction3SystemStrategies = () => {
  const incidentData = [
    {
      date: '7月6日 ~ 7月8日',
      venue: 'DBTY',
      incident: 'VS-PANDA独家机制漏洞',
      description: 'VS-PANDA独家欧洲篮球联赛被一堆同一天批量在异常区域注册的新账号套利，B端判定数据商问题并立即下架等待优化',
      cause: '机制漏洞',
      impact: '29.22w',
      status: '后续暂时无发现异常',
      statusColor: 'bg-blue-100 text-blue-600'
    },
    {
      date: '7月29日 ~ 8月22日',
      venue: 'DBTY',
      incident: '总进球4-6异常赔率1.07以上',
      description: '90分钟需要进两颗球才会输，有些80几分钟需要进3颗球才会',
      cause: '赔率数据漏洞',
      impact: '226.42w',
      status: '后续暂时无发现异常',
      statusColor: 'bg-blue-100 text-blue-600'
    },
    {
      date: '9月5日',
      venue: 'DBTY',
      incident: '体育盘口赔率错误',
      description: '世界杯2026南美洲资格赛，阿根廷 V 委内瑞拉，除了角球、罚牌以外，所有滚球盘口都出现错误，直接与竞品严重夹盘溢出',
      cause: '赔率数据漏洞',
      impact: '23.08w',
      status: '8月尾开始校验数据发现异常盘口异常',
      statusColor: 'bg-yellow-100 text-yellow-600'
    },
    {
      date: '9月14日',
      venue: 'DBTY',
      incident: '体育盘口赔率错误',
      description: '日本J2联赛，山形山神v富山胜利，大小盘口出现滚球盘口赔率异常，直接与竞品和自身盘口严重夹盘溢出',
      cause: '赔率数据漏洞',
      impact: '60.58w',
      status: '8月尾开始校验数据发现异常盘口异常',
      statusColor: 'bg-yellow-100 text-yellow-600'
    },
    {
      date: '9月19日',
      venue: 'DBTY',
      incident: '事件源延迟下发',
      description: '乌克兰杯被批量异常账号卡进球。事件源是TV延迟导致',
      cause: '数据源延迟',
      impact: '13.01w',
      status: '后续暂时无发现异常',
      statusColor: 'bg-blue-100 text-blue-600'
    },
    {
      date: '9月21日',
      venue: 'DBTY',
      incident: '体育盘口赔率错误',
      description: '西班牙足协乙级联赛，两场比赛滚球独赢赔率出现严重异常，导致账号投注后能直接提前结算套利。数据商异常断连，进球后未推送新赔率，导致赔率仍然是0-0时的赔率',
      cause: '赔率数据漏洞',
      impact: '36.19w',
      status: '8月尾开始校验数据发现异常盘口异常',
      statusColor: 'bg-yellow-100 text-yellow-600'
    },
    {
      date: '9月24日',
      venue: 'DBTY',
      incident: '体育盘口赔率错误',
      description: '意大利杯，AC米兰V 莱切，滚球出现严重错误大小盘口3/3.5开成2.5/3。人为疏忽导致',
      cause: '人为疏忽',
      impact: '12.37w',
      status: '后续校验数据出现盘口异常',
      statusColor: 'bg-yellow-100 text-yellow-600'
    },
    {
      date: '9月25日',
      venue: 'DBTY',
      incident: 'VS-PANDA进球事件延迟下发',
      description: 'VS-PANDA进球事件 VS-PANDA独家EAFC24，5场赛事出现进球事件延迟下发。数据商事件延迟下发导致',
      cause: '系统漏洞',
      impact: '65.70w',
      status: '后续暂时无发现异常',
      statusColor: 'bg-blue-100 text-blue-600'
    }
  ];

  const totalIncidents = incidentData.length;
  const totalImpact = incidentData.reduce((sum, item) => {
    const impact = parseFloat(item.impact.replace('w', ''));
    return sum + impact;
  }, 0);
  const venueCount = [...new Set(incidentData.map(item => item.venue))].length;

  return (
    <>
      <h3 className="text-xl font-semibold text-gray-800">系统审核策略</h3>
      {/* 1. 电子策略 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">电子策略</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600">已上线</span>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600">Y、B</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">卡免费</span>是最典型的<span className="text-blue-600">套利或藏分</span>手段。目前系统在自动出款及人工审核环节中对此无识别</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-sm leading-relaxed">系统提款策略增加电子卡免费的策略模型</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-sm leading-relaxed">拦截率：90%+</p>
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
                  <span className="font-semibold text-gray-800">1、不含PG：</span>随机样本<span className="font-bold text-blue-600">100</span>单中，<span className="font-bold text-green-600">90</span>单是符合电子卡免费的行为，现有模型已具备<span className="font-bold text-green-600">极高的拦截能力</span>。
                </p>
              </div>

              <div className="bg-white border-l-4 border-yellow-500 p-3 rounded">
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  <span className="font-semibold text-gray-800">2、包含PG：</span>随机样本<span className="font-bold text-blue-600">100</span>单中，<span className="font-bold text-green-600">45</span>单是符合电子卡免费的行为；另外的<span className="font-bold text-red-600">55</span>单，经过注单数据回溯，发现PG电子在《麻将来了》游戏中，存在下注一次却触发多次旋转的现象，但这种注单结构与免费旋转相同；同时，大量用户在下注命中后，出现多次旋转之间停顿超过<span className="font-bold text-red-600">2分钟</span>的反常行为，导致系统误判为卡免费行为，进而被拦截。
                </p>
                <p className="text-sm text-blue-700 font-medium">
                  → 后续需要针对PG电子特殊场景进行特征识别的重新设计，提升系统的识别精度。
                </p>
              </div>

              <div className="bg-white border-l-4 border-gray-400 p-3 rounded">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-800">备注：</span>卡免费行为和提款被风控并不完全相等，风控主要需要考虑是否存在实际影响，比如是否涉及红利申请等。然而，出现这种行为的用户确实属于异常用户，因为正常用户通常不会做出这种操作。
                </p>
              </div>
            </div>

            </div>

            {/* 电子策略图表 */}
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-6">
                {/* 第一个图表：不含PG */}
                <div className="relative bg-blue-50 rounded-lg p-6 border border-blue-200">
                  
                  {/* 图表区域 */}
                  <div className="mx-8 h-64 relative">
                    <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-600">
                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                      <span>25</span>
                      <span>0</span>
                    </div>

                    <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-blue-600">
                      <span>100%</span>
                      <span>75%</span>
                      <span>50%</span>
                      <span>25%</span>
                      <span>0%</span>
                    </div>

                    <div className="absolute left-8 right-8 h-full">
                      {[0, 25, 50, 75, 100].map((percent) => (
                        <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                      ))}
                    </div>

                    <div className="absolute left-8 right-8 bottom-0 top-0 flex items-end justify-center">
                      <div className="flex flex-col items-center relative">
                        <div className="bg-blue-500 rounded-t" style={{ height: `${(100 / 100) * 256}px`, width: '80px' }}></div>

                        {/* 准确率数据点 */}
                        <div
                          className="absolute w-4 h-4 bg-green-600 rounded-full border-2 border-white z-10"
                          style={{bottom: `${(90 / 100) * 256}px`, left: '50%', transform: 'translateX(-50%)'}}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                            90%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* X轴标签（图表外） */}
                  <div className="mx-8 mt-3 text-center">
                    <div className="text-sm text-gray-600">100单（不含PG）</div>
                  </div>
                </div>

                {/* 第二个图表：包含PG */}
                <div className="relative bg-blue-50 rounded-lg p-6 border border-blue-200">
                  {/* 图表区域 */}
                  <div className="mx-8 h-64 relative">
                    <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-600">
                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                      <span>25</span>
                      <span>0</span>
                    </div>

                    <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-blue-600">
                      <span>100%</span>
                      <span>75%</span>
                      <span>50%</span>
                      <span>25%</span>
                      <span>0%</span>
                    </div>

                    <div className="absolute left-8 right-8 h-full">
                      {[0, 25, 50, 75, 100].map((percent) => (
                        <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                      ))}
                    </div>

                    <div className="absolute left-8 right-8 bottom-0 top-0 flex items-end justify-center">
                      <div className="flex flex-col items-center relative">
                        <div className="bg-blue-500 rounded-t" style={{ height: `${(100 / 100) * 256}px`, width: '80px' }}></div>

                        {/* 准确率数据点 */}
                        <div
                          className="absolute w-4 h-4 bg-green-600 rounded-full border-2 border-white z-10"
                          style={{bottom: `${(45 / 100) * 256}px`, left: '50%', transform: 'translateX(-50%)'}}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                            45%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* X轴标签（图表外） */}
                  <div className="mx-8 mt-3 text-center">
                    <div className="text-sm text-gray-600">100单（包含PG）</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-8 text-sm mt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-gray-700">拦截订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">准确率</span>
                </div>
              </div>

              <div className="text-right text-sm text-gray-500 mt-4">统计口径：2025年9月20日以后至9月30日期间，随机选取了100笔命中了该风控策略的提款订单</div>
            </div>
        </div>
      </div>

      {/* 2. 真人策略 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">真人策略</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600">已上线</span>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600">Y</span>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">突破：B/C端系统打通，解决实效性极差、无法跨商户、风控无联动等关键问题</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">对打、机器下注和算牌</span>等是最常见的套利及作弊手段。当前系统在自动出款和人工审核环节对此识别不足</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-sm leading-relaxed">系统提款策略增加真人对打、机器下注、算牌的策略模型</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-sm leading-relaxed">识别准确率：80%+</p>
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
                  <span className="font-semibold text-gray-800">1、整体表现：</span>现有模型已具备初步拦截能力；随机样本<span className="font-bold text-blue-600">100</span>单中，<span className="font-bold text-green-600">52</span>单经人工复核确有问题，其中<span className="font-bold text-red-600">9</span>单拒付、<span className="font-bold text-yellow-600">43</span>单虽放行，存在警告、扣款出款、出款禁用等不同程度处理。
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-500 p-3 rounded">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-800">2、重点突破：</span>其中<span className="font-bold text-green-600">17</span>单定位为“<span className="font-bold text-green-600">跨平台对压</span>”，是过往很难发现的高价值问题。
                </p>
              </div>

              <div className="bg-white border-l-4 border-gray-400 p-3 rounded">
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  <span className="font-semibold text-gray-800">3、待优化：</span>另外的<span className="font-bold text-blue-600">48</span>单，有对打、机器等行为痕迹，但是占比及金额较低，所以FK实际暂时不处理。
                </p>
                <p className="text-sm text-green-700 font-medium">
                  → 后续需要继续迭代，目标准确率在<span className="font-bold">80%</span>。
                </p>
              </div>

               <div className="bg-white border-l-4 border-gray-400 p-3 rounded">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-800">备注：</span>真人对打/算牌/机器等行为和提款被风控并不完全相等，风控主要需要考虑是否存在实际影响，比如是否涉及红利申请、输赢情况等。然而，出现这种行为的用户确实属于异常用户，因为正常用户通常不会做出这种操作。
                </p>
              </div>
              
            </div>

          </div>
            
            {/* 真人策略图表 */}
            <div className="mt-8">
              <div className="relative mb-6 bg-blue-50 rounded-lg p-6 border border-blue-200">

                {/* 图表区域 */}
                <div className="mx-12 h-80 relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-sm text-gray-600">
                    <span>120</span>
                    <span>90</span>
                    <span>60</span>
                    <span>30</span>
                    <span>0</span>
                  </div>
                  
                  <div className="absolute right-0 h-full flex flex-col justify-between text-sm text-blue-600">
                    <span>60%</span>
                    <span>45%</span>
                    <span>30%</span>
                    <span>15%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 bottom-0 top-0 flex items-end justify-center">
                    <div className="flex flex-col items-center relative">
                      <div className="bg-blue-500 rounded-t" style={{ height: `${(100 / 150) * 320}px`, width: '80px' }}></div>

                      {/* 准确率数据点 */}
                      <div
                        className="absolute w-4 h-4 bg-green-600 rounded-full border-2 border-white z-10"
                        style={{bottom: `${(52 / 75) * 320}px`, left: '50%', transform: 'translateX(-50%)'}}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                          52%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* X轴标签（图表外） */}
                <div className="mx-12 mt-3 text-center">
                  <div className="text-sm text-gray-600">100</div>
                </div>
              </div>

              <div className="flex justify-center space-x-8 text-sm mt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-gray-700">拦截订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">准确率</span>
                </div>
              </div>

              <div className="text-right text-sm text-gray-500 mt-4">统计口径：2025年9月17日至9月30日期间，随机选取了100笔命中了该风控策略的提款订单</div>
            </div>
        </div>
      </div>

      {/* 3. 体育策略 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">体育策略</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600">开发中</span>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">突破：B/C端系统打通，解决实效性极差、无法跨商户、风控无联动等关键问题</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">打水、协议球、卡危险球、出货、蛇货、拉赛、机器下注</span>等是最常见的套利与作弊手段。当前系统在自动出款与人工审核环节对此类行为的识别尚不充分，尤其是体育赛类场景复杂、多变，对审核人员经验依赖高，导致漏判与误判并存，带来较大风控盲区与损失风险</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-sm leading-relaxed">通过<span className="text-blue-600">联动B端系统，引入百家赔、危险球</span>等关键外部数据，构建针对性的特征识别策略，实现对异常行为更高时效的预警与拦截，全面提升对体育类套利与作弊行为的识别与防控能力。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-sm leading-relaxed">识别准确率：70%+</p>
              </div>
            </div>
        </div>
      </div>

      {/* 4. 棋牌策略 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">棋牌策略</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600">开发中</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">移分</span>等是最常见的套利及作弊手段。当前系统在自动出款和人工审核环节对此识别不足，存在较多遗漏 </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-sm leading-relaxed">建立棋牌游戏异常行为识别机制</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-sm leading-relaxed">识别准确率：60%+</p>
              </div>
            </div>
        </div>
      </div>

      {/* 5. 彩票策略 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">5</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">彩票策略</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600">开发中</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">全包行为</span>是最常见的套利与作弊手段；目前系统在自动出款及人工审核环节中对此无识别</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-sm leading-relaxed">针对对<span className="text-blue-600">全包行为特征</span>进行预警和拦截</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-sm leading-relaxed">识别准确率：80%+</p>
              </div>
            </div>
        </div>
      </div>

      {/* 1. 风控工具集合 */}

      <h3 className="text-xl font-semibold text-gray-800">风控工具集合</h3>

      {/* 1. 关联下注工具 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">关联下注工具</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">已上线</span>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">突破：实现跨 Y+B 全站点的核心关联特征打通，解决了绝大多数关联识别难题</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <div className="text-gray-700 text-sm leading-relaxed space-y-2">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><span className="font-medium">依赖个人经验</span>：完全依靠人工基于经验发掘关联下注（如对打、批量套利），操作效率低，新人门槛高</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><span className="font-medium">成本高风险大</span>：曾需要10人+团队从后台导出数据并在本地处理风控算法，不仅人力成本高，也存在安全隐患</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  提供面向<span className="text-blue-600">真人、彩票及体育（开发中）</span>等多类游戏的<span className="text-blue-600">一键跨站点    </span>关联下注查询工具，支持基于核心关联特征<span className="text-blue-600">（IP、设备指纹、虚拟币地址、姓名、手机号、注册域名等）</span>的数据聚合与可视化展示，快速生成完整的关联链路与下注明细</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">关联</span>在风控中占比极高，该工具可<span className="text-blue-600">一键筛选</span>并展示所有跨站点的关联用户的下注行为，<span className="text-blue-600">不仅提升风控效率，更是摆脱对人的经验依赖</span></p>
              </div>
            </div>
        </div>
      </div>

      {/* 2. 体育打水工具 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">体育打水工具</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600">已上线</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <div className="text-gray-700 text-sm leading-relaxed space-y-2">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><span className="font-medium">人工效率低</span>：目前依赖人工进行多平台对比，耗时费力，效率极低</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><span className="font-medium">无法全覆盖</span>：人工非标操作，无法实现全面及时的覆盖</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">通过B端百家赔数据构建打水查询工具</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">节省成本，提升效率</p>
              </div>
            </div>
        </div>
      </div>

      {/* 3. 提款流水工具 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">3</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">提款流水工具</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600">待开发</span>
              </div>
              <div className="text-blue-600 font-medium text-sm bg-blue-50 px-4 py-2 rounded border border-blue-200">
                目前该问题在技术层面反馈，暂时无法实现彻底解决，需进一步讨论
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <div className="text-gray-700 text-sm leading-relaxed space-y-2">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><span className="font-medium text-blue-600">系统计算错误</span>：长期以来，系统在审核流水计算中存在多类错误，如<span className="text-blue-600">锁定场馆流水重复计算、场馆红利多计一次提款流水、用户输光后流水未自动达标</span>等；</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><span className="font-medium text-blue-600">人工计算错误</span>：由于系统计算流水不可用，风控人员<span className="text-blue-600">只能依赖手动计算</span>。但由于规则复杂且涉及多个页面和数据，实际操作中差异较大，<span className="text-red-600">既耗时繁琐，又导致每月约1万笔订单（约占5%）因流水错误引发出款损失，金额约为50万元</span></span>
            
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><span className="font-medium text-blue-600">用户体验落后</span>：流水咨询形成<span className="text-blue-600">冗长的沟通链路（用户-客服-运营-风控-运营-客服-用户）</span>，<span className="text-red-600">消耗大量时间，运行效率极低，用户体验明显落后</span></span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <div className="text-gray-700 text-sm leading-relaxed space-y-1">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded flex items-center justify-center font-medium text-xs mr-3 mt-1 flex-shrink-0">1</div>
                    <span><span className="font-medium text-blue-600">阶段1-》解决系统流水错误</span>：修复系统计算错误（锁定场馆流水重复计算、场馆红利多计一次提款流水、用户输光后提款流水未自动达标等）</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded flex items-center justify-center font-medium text-xs mr-3 mt-1 flex-shrink-0">2</div>
                    <span><span className="font-medium text-blue-600">阶段2-》后端流水查询工具</span>：在后台提供全新的流水查询工具（已有的当前不可用）</span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded flex items-center justify-center font-medium text-xs mr-3 mt-1 flex-shrink-0">3</div>
                    <span><span className="font-medium text-blue-600">阶段3-》前端直接展示流水</span>：用户在前端直接查看流水情况，目前大部分竞品已实现此体验，彻底解决这个多余过程</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">降低错误率</span>；<span className="text-blue-600">提升运行效率</span>；对其行业做法，<span className="text-blue-600">改善用户体验</span></p>
              </div>
            </div>
            
            {/* 调研情况表格 */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold text-gray-800 mb-6">调研情况</h5>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden border border-blue-200">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="p-4 text-left font-medium">平台</th>
                      <th className="p-4 text-left font-medium">前端提款流水展示</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { platform: "开云（KY）", display: "用户无法在前端得知提款所需流水以及已完成流水；后台也无法直接查看，需要人工手动计算", highlight: true },
                      { platform: "尊龙凯时（AG）", display: "提款提示：暂未完成流水XX USDT，提款可能被拒绝</span>" },
                      { platform: "金宝博（188）", display: "提款提示：账户尚未满足流水要求\；可实时查看\"可提款金额\"和\"未完成流水\"，回传速度极快" },
                      { platform: "万博（ManbetX）", display: "提款界面直接显示：还需完成 XX元；（并有显示不同场馆流水及剩余差额）" },
                      { platform: "竞博（IM）", display: "提款界面直接显示：可提现金额" },
                      { platform: "易游（M6)", display: "提款界面直接显示：还需完成XX元投注额" },
                      { platform: "雷竞技（Raybet）", display: "提款界面直接提示：需完成XX元投注" },
                      { platform: "竞技宝（JJB）", display: "提款界面显示：还需XX元流水；流水满足后显示\"可提余额\"与\"账户余额\"" }
                    ].map((row, index) => (
                      <tr key={index} className={`border-b border-gray-100 ${row.highlight ? 'bg-blue-50' : ''}`}>
                        <td className={`p-4 font-medium ${row.highlight ? 'text-blue-700' : 'text-blue-600'}`}>{row.platform}</td>
                        <td className={`p-4 ${row.highlight ? 'text-blue-700 font-medium' : 'text-gray-700'}`}>{row.display}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>

      {/* 异常情况监控 */}
      <h3 className="text-xl font-semibold text-gray-800">异常情况监控</h3>
      
      {/* 中心钱包多钱 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">1</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">中心钱包多钱</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600 ml-4">开发中</span>
                <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600 ml-4">C端</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">出现用户钱包异常变动的极端情况，如<span className="text-blue-600">无存款、无盈利却发起提款</span>，但目前系统缺乏针对该类行为的监控，一旦发生损失可能巨大</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">建立钱包帐变异常预警机制，实时监控资金流动</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">预防极端情况，尽早发现</p>
              </div>
            </div>
        </div>
      </div>

         
      {/* 沉睡用户活跃 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">2</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">沉睡用户活跃</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600 ml-4">开发中</span>
                <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600 ml-4">C端</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">长期沉睡用户突然活跃，可能<span className="text-blue-600">存在账号被盗或异常操作风险</span></p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">建立沉睡用户活跃预警机制，监控异常登录和操作行为</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">有效防范账号盗用/违规风险</p>
              </div>
            </div>
        </div>
      </div>
      
      {/* 场馆钱包多钱 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">3</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">场馆钱包多钱</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600 ml-4">开发中</span>
                <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600 ml-4">B端</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">近期<span className="text-blue-600">出现多次场馆钱包多钱情况</span>，但是C端缺少对此情况的监控，一旦发生损失可能巨大</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">建立<span className="text-blue-600">场馆资金异常</span>监控机制，预警异常资金变动</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">受限于转账钱包模式和注单延迟，目前策略最多可在<span className="text-blue-600">多钱情况发生后约15–30分钟内发现异常</span></p>
              </div>
            </div>
        </div>
      </div>

      {/* 杀率监控预警 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">4</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">杀率监控预警</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">已上线</span>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">B端</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">针对盈利类监控不完整，无法做到全方位、及时性的发现潜在问题</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">已覆盖<span className="text-blue-600">场馆、游戏、单笔、长期</span>等<span className="text-blue-600">日、周、月</span>的盈利进行监控</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">第一时间预警，然后由专人跟进处理</p>
              </div>
            </div>
        </div>
      </div>

      {/* 体育赔率预警 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">5</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">赔率监控预警</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">开发中</span>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">DB体育</span>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">世界杯前重点推进优化</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                 <p className="text-gray-700 text-sm leading-relaxed">B端可能存在<span className="text-blue-600">赔率溢出、内部玩法错配、盘口方向错误/盘口错开、赔率更新慢</span>等问题。虽然赔率异常或错误是小概率事件，但一旦发生，可能严重影响<span className="text-blue-600">用户体验、平台信任度和平台利益</span>。依靠人工方式来发现这些问题，存在反应迟缓、覆盖不全的问题，且一些错误可能已经造成损失，却未能及时发现</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">降低赔率类异常导致的损失，平推动B端<span className="text-blue-600">提升数据商质量；</span>给出明确<span className="text-blue-600">赔率错误类型及规则</span>，在关键环节——如<span className="text-blue-600">任意盘口变化后的第一单、结算前的再次校验及提款拦截——实施全方位监控与预警</span>，确保每个步骤的准确性和及时性。</p>
                
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">第一时间预警，然后由专人跟进处理</p>
              </div>
            </div>
     

      {/* Q3事故统计概览 */}
      <div className="mt-12 mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">Q3事故统计概览</h4>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-3">{totalIncidents}</div>
              <div className="text-gray-600 font-medium text-lg">事故总数</div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
              <div className="text-4xl font-bold text-red-600 mb-3">{totalImpact.toFixed(1)}w</div>
              <div className="text-gray-600 font-medium text-lg">总影响金额</div>
            </div>

          </div>
        </div>
      </div>

      {/* 事故详细记录 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">事故详细记录</h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold w-32">日期</th>
                  <th className="p-4 text-left font-semibold w-24">场馆</th>
                  <th className="p-4 text-left font-semibold w-40">异常事件</th>
                  <th className="p-4 text-left font-semibold">问题描述</th>
                  <th className="p-4 text-center font-semibold w-24 whitespace-nowrap">问题原因</th>
                  <th className="p-4 text-center font-semibold w-24 whitespace-nowrap">问题影响</th>
                </tr>
              </thead>
              <tbody>
                {incidentData.map((incident, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="p-4 font-semibold text-blue-600 whitespace-nowrap">{incident.date}</td>
                    <td className="p-4 font-semibold">{incident.venue}</td>
                    <td className="p-4 font-semibold">{incident.incident}</td>
                    <td className="p-4 text-gray-700">{incident.description}</td>
                    <td className="p-4 text-center whitespace-nowrap">
                      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-600">
                        {incident.cause}
                      </span>
                    </td>
                    <td className="p-4 text-center font-bold text-red-600 whitespace-nowrap">{incident.impact}</td>
              
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
         
        </div>         
      </div>
    </>
  );
};