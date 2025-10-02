import React from 'react';

export const Direction3SystemStrategies = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-8 border border-blue-200 shadow-md">
      {/* 系统审核策略 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
        <div className="bg-blue-50 rounded-lg p-8 mb-8 border border-blue-200">
           <div className="flex items-center space-x-3 mb-6">
             <h3 className="text-xl font-semibold text-gray-800">系统审核策略</h3>
           </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-medium flex-shrink-0">+1</div>
              <div>
                <h4 className="font-medium text-gray-800 text-base mb-2"><span className="text-blue-600">精准策略</span>：按游戏类型提取并建模典型套利特征</h4>
                <p className="text-sm text-gray-600">如电子卡免费、真人对打、体育打水、彩票全包、棋牌移分等</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-medium flex-shrink-0">+2</div>
              <div>
                <h4 className="font-medium text-gray-800 text-base mb-2"><span className="text-blue-600">防御策略</span>：基于套利特征构建兜底式组合识别策略</h4>
                <p className="text-sm text-gray-600">如玩家/代理的关联、红利金额/比例、流水比例、存款比例等</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-medium flex-shrink-0">+3</div>
              <div>
                <h4 className="font-medium text-gray-800 text-base mb-2"><span className="text-blue-600">基础建设</span>：打通Y/B跨站点及B/C端系统链路</h4>
                <p className="text-sm text-gray-600">实现数据与策略协同，提升审核的准确性与时效性，降低直接出款错误</p>
              </div>
            </div>
          </div>
        </div>
    
        {/* 1. 电子策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">1.1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">电子策略</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600">Y/B：已上线</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-sm leading-relaxed">卡免费是最典型的<span className="text-blue-600">套利或藏分</span>手段。目前系统在自动出款及人工审核环节中对此识别不足</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-sm leading-relaxed">系统提款策略增加电子卡免费的策略模型</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-sm leading-relaxed">拦截率：95%+</p>
              </div>
            </div>

                   <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-8">
            <h4 className="font-medium text-green-700 mb-3 flex items-center">
              <span className="w-3 h-3 bg-green-600 rounded mr-3"></span>
              洞察分析
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">现有模型已具备初步拦截能力；<span className="text-blue-600">随机样本100单中，52单经人工复核确有问题，其中17单定位为“跨平台对压”；9单拒付、43单放行，但是存在警告、扣款出款、出款禁用等不同程度处理；</span>另外的48单，有对打、机器等行为痕迹，但是占比及金额较低，所以FK实际暂时不处理；<span className="text-blue-600">后续需要继续迭代，目标准确率在80%；</span></p>
          </div>
            
            {/* 电子策略图表 */}
            <div className="mt-8">
              <div className="relative h-80 mb-6 bg-blue-50 rounded-lg p-8 border border-blue-200">
                
                <div className="mx-12 h-full relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-sm text-gray-600">
                    <span>500</span>
                    <span>375</span>
                    <span>250</span>
                    <span>125</span>
                    <span>0</span>
                  </div>
                  
                  <div className="absolute right-0 h-full flex flex-col justify-between text-sm text-blue-600">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-8">
                    <div className="flex flex-col items-center relative">
                      <div className="w-20 bg-blue-500 rounded-t" style={{ height: '200px' }}></div>
                      
                      {/* 准确率数据点 */}
                      <div 
                        className="absolute w-5 h-5 bg-blue-600 rounded-full border-2 border-white"
                        style={{top: `${100 - 25 - 10}%`, left: '50%', transform: 'translateX(-50%)'}}
                      >
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium whitespace-nowrap">
                          25%
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <div className="text-sm text-gray-600 mt-1">400单 (25%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-gray-700">拦截订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">准确率</span>
                </div>
              </div>
              
              <div className="text-right text-sm text-gray-500 mt-6">统计周期：2025-04-01 ~ 2025-06-30</div>
            </div>
          </div>
        </div>

        {/* 2. 真人策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">1.2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">真人策略</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600">Y：已上线</span>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">突破：B/C端系统打通，解决实效性极差、无法跨商户、风控无联动等关键问题</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">对打、机器下注和算牌</span>等是最常见的套利及作弊手段。当前系统在自动出款和人工审核环节对此识别不足</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-sm leading-relaxed">系统提款策略增加真人对打、机器下注、算牌的策略模型</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-sm leading-relaxed">识别准确率：80%+；（DB跨站点对打）</p>
              </div>
            </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-8">
            <h4 className="font-medium text-green-700 mb-3 flex items-center">
              <span className="w-3 h-3 bg-green-600 rounded mr-3"></span>
                洞察分析
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">1、现有模型已具备初步拦截能力；<span className="text-blue-600">随机样本100单中，52单经人工复核确有问题，其中17单定位为“跨平台对压”；9单拒付、43单放行，但是存在警告、扣款出款、出款禁用等不同程度处理；</span>另外的48单，有对打、机器等行为痕迹，但是占比及金额较低，所以FK实际暂时不处理；<span className="text-blue-600">后续需要继续迭代，目标准确率在80%；</span></p>

            <p className="text-gray-700 text-sm leading-relaxed">2、<span className="text-blue-600">随机样本100单中，52单经人工复核确有问题，其中17单定位为“跨平台对压”；9单拒付、43单放行，但是存在警告、扣款出款、出款禁用等不同程度处理；</span>另外的48单，有对打、机器等行为痕迹，但是占比及金额较低，所以FK实际暂时不处理；<span className="text-blue-600">后续需要继续迭代，目标准确率在80%；</span></p>
            <p className="text-gray-700 text-sm leading-relaxed">3、另外的48单，有对打、机器等行为痕迹，但是占比及金额较低，所以FK实际暂时不处理；<span className="text-blue-600">后续需要继续迭代，目标准确率在80%；</span></p>
                  
          </div>
            
            {/* 真人策略图表 */}
            <div className="mt-8">
              <div className="relative h-80 mb-6 bg-blue-50 rounded-lg p-8 border border-blue-200">
                          
                <div className="mx-12 h-full relative">
                  <div className="absolute left-0 h-full flex flex-col justify-between text-sm text-gray-600">
                    <span>150</span>
                    <span>100</span>
                    <span>50</span>
                    <span>0</span>
                  </div>
                  
                  <div className="absolute right-0 h-full flex flex-col justify-between text-sm text-blue-600">
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full">
                    {[0, 25, 50, 75, 100].map((percent) => (
                      <div key={percent} className="absolute w-full border-t border-gray-300" style={{bottom: `${percent}%`}}></div>
                    ))}
                  </div>
                  
                  <div className="absolute left-12 right-12 h-full flex items-end justify-center pb-0">
                    <div className="flex flex-col items-center relative">
                      <div className="w-20 bg-blue-500 rounded-t" style={{ height: `${(100 / 150) * 250}px` }}></div>
                      
                      {/* 准确率数据点 */}
                      <div 
                        className="absolute w-5 h-5 bg-blue-600 rounded-full border-2 border-white"
                        style={{bottom: `${(52 / 75) * 250}px`, left: '50%', transform: 'translateX(-50%)'}}
                      >
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium whitespace-nowrap">
                          52%
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <div className="text-sm text-gray-600 mt-1">随机抽取100单</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-gray-700">拦截订单数</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">准确率</span>
                </div>
              </div>
              
              <div className="text-right text-sm text-gray-500 mt-6">统计周期：2025年9月17日至9月30日期间，随机选取了100笔命了该风控策略的提款订单</div>
            </div>
          </div>
        </div>

        {/* 3. 体育策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">1.3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">体育策略</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600">开发中</span>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">突破：B/C端系统打通，解决实效性极差、无法跨商户、风控无联动等关键问题</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">打水、协议球、卡危险球、出货、蛇货、拉赛、机器下注</span>等是最常见的套利与作弊手段。当前系统在自动出款与人工审核环节对此类行为的识别尚不充分，尤其是体育赛类场景复杂、多变，对审核人员经验依赖高，导致漏判与误判并存，带来较大风控盲区与损失风险</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-sm leading-relaxed">通过<span className="text-blue-600">联动B端系统，引入百家赔、危险球</span>等关键外部数据，构建针对性的特征识别策略，实现对异常行为更高时效的预警与拦截，全面提升对体育类套利与作弊行为的识别与防控能力。</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-sm leading-relaxed">识别准确率：70%+</p>
              </div>
            </div>
        
          </div>
        </div>

        {/* 4. 棋牌策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">1.4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">棋牌策略</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600">开发中</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">移分</span>等是最常见的套利及作弊手段。当前系统在自动出款和人工审核环节对此识别不足，存在较多遗漏 </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-sm leading-relaxed">建立棋牌游戏异常行为识别机制</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-sm leading-relaxed">识别准确率：60%+</p>
              </div>
            </div>
            </div>
        </div>

        {/* 5. 彩票策略 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">1.5</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">彩票策略</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600">开发中</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">核心问题</h5>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">全包行为</span>等是最常见的套利与作弊手段；目前系统在自动出款及人工审核环节中对此识别不足，仍存在较多遗漏</span></p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">解决策略</h5>
                <p className="text-gray-700 text-sm leading-relaxed">针对对全包行为进行预警和拦截</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-medium text-blue-700 mb-2 text-sm">预期收益</h5>
                <p className="text-gray-700 text-sm leading-relaxed">识别准确率：90%+</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      

      {/* 风控工具集合 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">

        <div className="bg-blue-50 rounded-lg p-8 mb-8 border border-blue-200">
           <div className="flex items-center space-x-3 mb-6">
             <h3 className="text-xl font-semibold text-gray-800">风控工具集合</h3>
           </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-medium flex-shrink-0">+1</div>
              <div>
                <h4 className="font-medium text-gray-800 text-base mb-2"><span className="text-blue-600">一键查询</span>：按游戏类型提取并建模典型套利特征</h4>
                <p className="text-sm text-gray-600">如电子卡免费、真人对打、体育打水、彩票全包、棋牌移分等</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-medium flex-shrink-0">+2</div>
              <div>
                <h4 className="font-medium text-gray-800 text-base mb-2"><span className="text-blue-600">实时返回</span>：基于套利特征构建兜底式组合识别策略</h4>
                <p className="text-sm text-gray-600">如玩家/代理的关联、红利金额/比例、流水比例、存款比例等</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-medium flex-shrink-0">+3</div>
              <div>
                <h4 className="font-medium text-gray-800 text-base mb-2"><span className="text-blue-600">降低门槛</span>：打通Y/B跨站点及B/C端系统链路</h4>
                <p className="text-sm text-gray-600">实现数据与策略协同，提升审核的准确性与时效性，降低直接出款错误</p>
              </div>
            </div>
          </div>
        </div>
       
        {/* 1. 关联下注工具 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">2.1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">关联下注工具</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">已上线</span>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">突破：实现跨 Y+B 全站点的核心关联特征打通，解决了绝大多数关联识别难题</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <div className="text-gray-700 text-sm leading-relaxed space-y-2">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><span className="font-medium">依赖个人经验</span>：完全依靠人工基于个人经验发掘关联下注（如对打），操作效率低，新人门槛高</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><span className="font-medium">成本高风险大</span>：曾需要10人+团队从后台导出数据并在本地处理风控算法，不仅人力成本高，也存在安全隐患</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">提供面向<span className="text-blue-600">真人、彩票及体育（开发中）</span>等多类游戏的<span className="text-blue-600">一键跨站点</span>"关联下注查询\"工具，支持基于核心关联特征<span className="text-blue-600">（IP、设备指纹、虚拟币地址、姓名、手机号、注册域名等）</span>的数据聚合与可视化展示，快速生成完整的关联链路与下注明细</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">关联</span>在日常风控中占比极高，该工具可<span className="text-blue-600">一键筛选</span>并展示所有关联用户的下注行为，极大增强风险识别能力，<span className="text-blue-600">不仅提升风控效率，更是摆脱对人的经验依赖</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 体育打水工具 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">2.2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">体育打水工具</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600">已上线</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
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
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">通过B端百家赔率数据构建体育打水查询工具</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
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
          <div className="bg-white rounded-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">2.3</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">提款流水工具</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600">待开发</span>
              </div>
              <div className="text-blue-600 font-medium text-sm bg-blue-50 px-4 py-2 rounded border border-blue-200">
                目前该问题在技术层面反馈，暂时无法实现彻底解决，需进一步讨论，如何能够支持？
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <div className="text-gray-700 text-sm leading-relaxed space-y-2">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><span className="font-medium text-blue-600">系统计算错误</span>：长期以来，系统在审核流水计算中存在多类错误，如<span className="text-blue-600">锁定场馆流水重复计算、场馆红利多计一次提款流水、用户输光后流水未自动达标</span>等；这些问题导致因流水计算错误而误拒用户提款</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><span className="font-medium text-blue-600">人工计算错误</span>：由于系统计算流水不可用，风控人员只能依赖手动计算。但由于规则复杂，且涉及到多个页面及数据，实际执行存在较大差异，不仅耗时繁琐，还导致<span className="text-blue-600">每月约1万笔订单因流水错误引发出款错误问题</span></span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><span className="font-medium text-blue-600">用户体验落后</span>：流水咨询形成<span className="text-blue-600">冗长的沟通链路</span>（如，用户-客服-运营-风控-运营-客服-用户），消耗大量时间，运行效率极低，用户体验明显落后</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
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
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">每月约<span className="text-blue-600">5%的错误出款源于此，影响约30+万/月</span>；<span className="text-blue-600">运行效率提升</span>；对其行业做法，<span className="text-blue-600">改善用户体验</span></p>
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
                      { platform: "尊龙凯时（AG）", display: "提款提示：暂未完成流水XX USDT，提款可能被拒绝" },
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
      </div>

      {/* 极端异常预防 */}
      <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">

        <div className="bg-blue-50 rounded-lg p-8 mb-8 border border-blue-200">
           <div className="flex items-center space-x-3 mb-6">
             <h3 className="text-xl font-semibold text-gray-800">极端异常预防</h3>
           </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-medium flex-shrink-0">+1</div>
              <div>
                <h4 className="font-medium text-gray-800 text-base mb-2"><span className="text-blue-600">一键查询</span>：按游戏类型提取并建模典型套利特征</h4>
                <p className="text-sm text-gray-600">如电子卡免费、真人对打、体育打水、彩票全包、棋牌移分等</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-medium flex-shrink-0">+2</div>
              <div>
                <h4 className="font-medium text-gray-800 text-base mb-2"><span className="text-blue-600">实时返回</span>：基于套利特征构建兜底式组合识别策略</h4>
                <p className="text-sm text-gray-600">如玩家/代理的关联、红利金额/比例、流水比例、存款比例等</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-medium flex-shrink-0">+3</div>
              <div>
                <h4 className="font-medium text-gray-800 text-base mb-2"><span className="text-blue-600">降低门槛</span>：打通Y/B跨站点及B/C端系统链路</h4>
                <p className="text-sm text-gray-600">实现数据与策略协同，提升审核的准确性与时效性，降低直接出款错误</p>
              </div>
            </div>
          </div>
        </div>   
        
        {/* 中心钱包多钱 */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">1</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">中心钱包多钱</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600 ml-4">开发中</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">出现用户钱包异常变动的极端情况，如<span className="text-blue-600">无存款、无盈利却发起提款</span>，但目前系统缺乏针对该类行为的监控，一旦发生损失可能巨大</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">建立钱包帐变异常预警机制，实时监控资金流动</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">预防极端情况，尽早发现</p>
              </div>
            </div>
          </div>
        </div>

        {/* 场馆钱包多钱 */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">2</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">场馆钱包多钱</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600 ml-4">开发中</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">近期<span className="text-blue-600">出现多次场馆钱包多钱情况</span>，但是C端缺少对此情况的监控，一旦发生损失可能巨大</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">建立<span className="text-blue-600">场馆资金异常</span>监控机制，预警异常资金变动</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">受限于转账钱包模式和注单延迟，目前策略最多可在<span className="text-blue-600">多钱情况发生后约15–30分钟内发现异常</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* 盈利监控预警 */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">3</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">盈利监控预警</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">已上线</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">针对盈利类监控不完整，无法做到全方位、及时性的发现潜在问题</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">已覆盖<span className="text-blue-600">场馆、游戏、单笔、长期</span>等<span className="text-blue-600">日、周、月</span>的盈利进行监控</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">可第一时间进行预警，然后由专人跟进处理</p>
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
                  <span className="text-white font-medium text-sm">4</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">沉睡用户活跃</h4>
                <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600 ml-4">开发中</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  核心问题
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">长期沉睡用户突然活跃，可能<span className="text-blue-600">存在账号被盗或异常操作风险</span></p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  解决策略
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">建立沉睡用户活跃预警机制，监控异常登录和操作行为</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                  预期收益
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">有效防范账号盗用/违规风险</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};