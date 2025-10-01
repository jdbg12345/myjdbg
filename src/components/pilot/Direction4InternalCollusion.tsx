import React from 'react';

export const Direction4InternalCollusion = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-8 border border-blue-200 shadow-md">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">方向3</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">优化【内控问题-违规行为】</h2>
        </div>
      </div>

      {/* 风控标签和备注独立权限 */}
      <div className="mb-12">
        <div className="bg-white rounded-xl p-8 mb-8 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">3.1</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">风控标签和备注独立权限</h4>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 ml-4 shadow-sm">已上线</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                核心问题
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold">风控的标签和备注权限未独立管理，大部分部门均可查看，敏感信息易泄露</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                解决策略
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold">风控的标签备注独立权限</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                预期收益
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold">降低敏感信息被泄露风险</p>
            </div>
          </div>
        </div>
      </div>

      {/* 会员禁用流程升级 */}
      <div className="mb-8">
        <div className="bg-white rounded-xl p-8 mb-8 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">3.2</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">会员启禁用流程升级</h4>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-600 ml-4 shadow-sm">开发中</span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 ml-4 shadow-sm">开发中</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                核心问题
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold">当前会员禁用流程由单人操作完成，缺乏线上分级审批机制，存在高V被误禁，及问题用户被违规启用的风险。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                解决策略
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold">建立基于会员等级的禁用/启用分级审批机制，高V的启禁用操作需提供审批人的U盾或谷歌验证码验证</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                预期收益
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold">彻底解决启禁用违规操作问题</p>
            </div>
          </div>
          
          {/* VIP等级审批流程示意图 */}
          <div className="mt-8">
            <h5 className="text-xl font-bold text-gray-800 mb-6">VIP不同等级的启禁流程支持后台自定义配置：下图为示例。</h5>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-400 rounded-xl p-6 mb-4 shadow-md">
                    <div className="text-green-800 font-bold text-lg">VIP 0-2</div>
                    <div className="text-sm text-green-700 font-medium">普通会员</div>
                  </div>
                  <div className="text-sm text-gray-700 font-semibold">单人审批即可操作</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-400 rounded-xl p-6 mb-4 shadow-md">
                    <div className="text-yellow-800 font-bold text-lg">VIP 3-5</div>
                    <div className="text-sm text-yellow-700 font-medium">中级会员</div>
                  </div>
                  <div className="text-sm text-gray-700 font-semibold">需主管的U盾码才可操作</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-400 rounded-xl p-6 mb-4 shadow-md">
                    <div className="text-red-800 font-bold text-lg">VIP 6+</div>
                    <div className="text-sm text-red-700 font-medium">高级会员</div>
                  </div>
                  <div className="text-sm text-gray-700 font-semibold">需负责人/CEO的谷歌验证码才可操作</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 敏感高危参数修改监控 */}
      <div className="mb-12">
        <div className="bg-white rounded-xl p-8 mb-8 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">3.3</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">敏感高危参数修改监控</h4>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 ml-4 shadow-sm">已上线</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3 shadow-sm"></span>
                核心问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">高危参数（如代理佣金、存提费率、场馆费率、VIP体系）缺乏实时监控与审计，存在被误操作、滥用或配置异常导致的重大风险。</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 shadow-sm"></span>
                解决策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">一些关键参数的修改会触发实时预警，并有人专门跟进处理</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 shadow-sm"></span>
                预期收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">降低异常操作导致的重大损失风险</p>
            </div>
          </div>
        </div>
      </div>

      {/* 敏感查询使用密文查询 */}
      <div className="mb-12">
        <div className="bg-white rounded-xl p-8 mb-8 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">3.4</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">敏感查询使用密文查询</h4>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-600 ml-4 shadow-sm">开发中</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3 shadow-sm"></span>
                核心问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">部分关键查询参数以玩家明文（姓名、银行卡号、虚拟货币地址等）直接操作，存在敏感信息泄露风险。</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 shadow-sm"></span>
                解决策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">支持密文查询</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 shadow-sm"></span>
                预期收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">降低敏感信息被泄露风险</p>
            </div>
          </div>
        </div>
      </div>

      {/* 风控策略参数变化机制 */}
      <div className="mb-8">
        <div className="bg-white rounded-xl p-8 mb-8 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">3.5</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">风控策略参数变化机制</h4>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-600 ml-4 shadow-sm">开发中</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3 shadow-sm"></span>
                核心问题
              </h4>
              <p className="text-gray-700 text-base leading-relaxed font-semibold">现有<span className="text-blue-600">风控策略参数固定，易被外部摸清规律或通过内外勾结泄露</span>；市场上已出现针对该规律<span className="text-blue-600">故意规避和绕过的套利提款行为</span></p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 shadow-sm"></span>
                解决策略
              </h4>
              <p className="text-gray-700 text-base leading-relaxed font-semibold">建立<span className="text-blue-600">动态参数调整机制</span>，使<span className="text-blue-600">表面显示参数与实际执行参数不完全一致</span>，从而增加外界预测难度并降低内外勾结被泄漏风险。</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 shadow-sm"></span>
                预期收益
              </h4>
              <p className="text-gray-700 text-base leading-relaxed font-semibold"><span className="text-blue-600">提升风控整体拦截效果</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 稽查效果 */}
      <div className="mb-8">
        <div className="bg-white rounded-xl p-8 mb-8 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">3.6</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">稽查效果</h4>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 ml-4 shadow-sm">已上线</span>
            </div>
          </div>
          
          {/* 稽查成果展示 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center border border-blue-200 shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">调查案件</div>
              <div className="text-gray-600 font-medium">100%处置完成</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center border border-green-200 shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-white font-bold text-2xl">5</span>
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">违规人员</div>
              <div className="text-gray-600 font-medium">4开除+1持续关注</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center border border-orange-200 shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-2">买卖号测试</div>
              <div className="text-gray-600 font-medium">持续推进中</div>
            </div>
          </div>
          
          {/* 稽查时间线 */}
          <div className="mt-8">
            <h5 className="text-xl font-bold text-gray-800 mb-6">Q2稽查时间线</h5>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="relative">
                {/* 时间线 */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600"></div>
                
                <div className="space-y-8">
                  {[
                    { month: '4月份', case: 'YH对外协作', result: '3人即刻开除', color: 'red' },
                    { month: '5月份', case: '账号销售测试', result: '1人持续关注', color: 'yellow' },
                    { month: '6月份', case: 'YH对外协作', result: '2人即刻开除', color: 'red' }
                  ].map((item, index) => (
                    <div key={index} className="relative pl-16">
                      <div className={`absolute left-6 w-4 h-4 rounded-full border-2 border-white shadow-md ${
                        item.color === 'red' ? 'bg-red-500' : 
                        item.color === 'yellow' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-bold text-gray-800">{item.month}</div>
                            <div className="text-gray-600 text-sm">{item.case}</div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            item.color === 'red' ? 'bg-red-100 text-red-600' :
                            item.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'
                          }`}>
                            {item.result}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};