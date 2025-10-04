import React from 'react';

export const Direction4InternalCollusion = () => {
  return (
    <>
      {/* 风控标签和备注独立权限 */}
      <div className="mb-12">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">风控标签和备注独立权限</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">已上线</span>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">Y</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                核心问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">风控的标签和备注权限未独立管理，大部分部门均可查看，敏感信息易泄露</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                解决策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">1、风控的标签备注独立权限</p>
              <p className="text-gray-700 text-sm leading-relaxed">2、同时，部门进行各类套利场景统计，标签明确化便于部门清晰复盘带来的市场动向明确，同时针对常规，特殊，特殊频发案例进行培训手册纳入提高新人成长，完成闭环</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                预期收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">降低敏感信息被泄露风险</p>
            </div>
            
          </div>
        </div>
      </div>

      {/* 会员禁用流程升级 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">会员启禁用流程升级</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600 ml-4">开发中</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                核心问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">当前会员禁用流程由单人操作完成，缺乏线上分级审批机制，<span className="text-blue-600">存在高V被误禁，及问题用户被违规启用的风险 </span></p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                解决策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">1、建立<span className="text-blue-600">基于会员等级的禁用/启用分级审批机制，高V的启禁用操作需提供审批人的U盾或谷歌验证码验证</span></p>
              <p className="text-gray-700 text-sm leading-relaxed">2、同时，针对高v已禁用用户排查是否存判断异常问题，作业处理有问题人员排查，核心提升审核正确率，减少高v禁用人数</p>
              
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                预期收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">彻底解决启禁用违规操作问题</p>
            </div>
          </div>
          
          {/* VIP等级审批流程示意图 */}
          <div className="mt-8">
            <h5 className="text-lg font-semibold text-gray-800 mb-6">VIP不同等级的启禁流程<span className="text-blue-600">支持后台自定义配置：下图为示例</span></h5>
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-6 mb-4">
                    <div className="text-blue-800 font-medium text-lg">VIP 0-2</div>
                    <div className="text-sm text-blue-700">普通会员</div>
                  </div>
                  <div className="text-sm text-gray-700 font-medium">单人审批即可操作</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-6 mb-4">
                    <div className="text-blue-800 font-medium text-lg">VIP 3-5</div>
                    <div className="text-sm text-blue-700">中级会员</div>
                  </div>
                  <div className="text-sm text-gray-700 font-medium">需主管的U盾码才可操作</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-6 mb-4">
                    <div className="text-blue-800 font-medium text-lg">VIP 6+</div>
                    <div className="text-sm text-blue-700">高级会员</div>
                  </div>
                  <div className="text-sm text-gray-700 font-medium">需负责人/CEO的谷歌验证码才可操作</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 敏感高危参数修改监控 */}
      <div className="mb-12">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">敏感高危参数修改监控</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">已上线</span>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">Y、B</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                核心问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">高危参数<span className="text-blue-600">（如代理佣金、存提费率、场馆费率、VIP体系）缺乏实时监控</span>，存在被误操作、滥用或配置异常导致的重大风险。</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                解决策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">1、一些关键参数的修改会触发实时预警，并有人专门跟进处理</p>
              <p className="text-gray-700 text-sm leading-relaxed">2、权限梳理： 各角色权限进行梳理，分化功能，达到权限层级分明，如风控标签查看进行上下级优化展示，达到信息安全把控目的</p>

            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                预期收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">降低异常操作导致的重大损失风险</p>
            </div>
          </div>
        </div>
      </div>

      {/* 敏感查询使用密文查询 */}
      <div className="mb-12">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">敏感查询使用密文查询</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600 ml-4">开发中</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                核心问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">部分关键查询参数以<span className="text-blue-600">玩家明文（姓名、银行卡号、虚拟货币地址等）直接操作，存在敏感信息泄露风险</span></p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                解决策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">支持<span className="text-blue-600">密文查询</span></p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                预期收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">降低敏感信息被泄露风险</p>
            </div>
          </div>
        </div>
      </div>

      {/* 风控策略参数变化机制 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">5</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">风控策略参数变化机制</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-gray-100 text-gray-600 ml-4">开发中</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                核心问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">现有<span className="text-blue-600">风控策略参数固定，易被外部摸清规律或通过内外勾结泄露</span>；市场上已出现针对该规律<span className="text-blue-600">故意规避和绕过的套利提款行为</span></p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                解决策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">建立<span className="text-blue-600">动态参数调整机制</span>，使<span className="text-blue-600">表面显示参数与实际执行参数不完全一致</span>，从而增加外界预测难度并降低内外勾结被泄漏风险。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-3"></span>
                预期收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed"><span className="text-blue-600">提升风控整体拦截效果</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 稽查成果 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">6</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">稽查成果</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">持续进行中</span>
            </div>
          </div>
          
          {/* 稽查成果详细内容 */}
          <div className="space-y-8">

            {/* 1️⃣ 调查成果总览 */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-xl p-8 border-2 border-blue-300 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">1️⃣</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800">调查成果总览</h4>
              </div>

              {/* 调查案件总数 */}
              <div className="bg-white rounded-lg p-6 mb-6 border-2 border-blue-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-semibold text-gray-800">调查案件总数</h5>
                  <div className="text-5xl font-bold text-blue-600">5</div>
                </div>
                <div className="grid grid-cols-5 gap-3 mt-4">
                  <div className="bg-blue-50 rounded p-3 text-center border border-blue-200">
                    <div className="text-xs text-gray-600 mb-1">账号销售测试</div>
                    <div className="text-sm font-semibold text-blue-600">✓</div>
                  </div>
                  <div className="bg-blue-50 rounded p-3 text-center border border-blue-200">
                    <div className="text-xs text-gray-600 mb-1">YH对外协作</div>
                    <div className="text-sm font-semibold text-blue-600">✓</div>
                  </div>
                  <div className="bg-blue-50 rounded p-3 text-center border border-blue-200">
                    <div className="text-xs text-gray-600 mb-1">内部泄密与钓鱼执法</div>
                    <div className="text-sm font-semibold text-blue-600">✓</div>
                  </div>
                  <div className="bg-blue-50 rounded p-3 text-center border border-blue-200">
                    <div className="text-xs text-gray-600 mb-1">安插外部测试</div>
                    <div className="text-sm font-semibold text-blue-600">✓</div>
                  </div>
                  <div className="bg-blue-50 rounded p-3 text-center border border-blue-200">
                    <div className="text-xs text-gray-600 mb-1">内部违规人员调查</div>
                    <div className="text-sm font-semibold text-blue-600">✓</div>
                  </div>
                </div>
              </div>

              {/* 违规人员处置 */}
              <div className="bg-white rounded-lg p-6 mb-6 border-2 border-orange-200 shadow-sm">
                <h5 className="text-lg font-semibold text-gray-800 mb-4">违规人员处置</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">开除</span>
                      <span className="text-3xl font-bold text-red-600">6人</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-2">8月份YH对外协作6人</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">查获并处置</span>
                      <span className="text-3xl font-bold text-orange-600">23人</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-2">内部泄密/钓鱼执法</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">特殊处理</span>
                      <span className="text-3xl font-bold text-purple-600">1人</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-2">Ge*，不发奖金与底薪，ZG介入</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">持续关注</span>
                      <span className="text-3xl font-bold text-green-600">1个</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-2">V1账号（账号销售测试）</div>
                  </div>
                </div>
              </div>

              {/* 买卖号测试 */}
              <div className="bg-white rounded-lg p-6 border-2 border-yellow-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-semibold text-gray-800">买卖号测试：持续推进</h5>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700">进行中</span>
                </div>

                <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-200">
                  <h6 className="font-semibold text-yellow-800 mb-3">最新前置要求：</h6>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white rounded p-3 border border-yellow-300">
                      <span className="text-yellow-600 font-bold mr-2">①</span>
                      <span className="text-gray-700"><span className="font-semibold text-yellow-700">V4以上</span>且注册时间<span className="font-semibold">&gt;6个月</span></span>
                    </div>
                    <div className="bg-white rounded p-3 border border-yellow-300">
                      <span className="text-yellow-600 font-bold mr-2">②</span>
                      <span className="text-gray-700">负盈利<span className="font-semibold text-yellow-700">20w++</span></span>
                    </div>
                    <div className="bg-white rounded p-3 border border-yellow-300">
                      <span className="text-yellow-600 font-bold mr-2">③</span>
                      <span className="text-gray-700"><span className="font-semibold text-yellow-700">IP干净</span>且已完成实名</span>
                    </div>
                    <div className="bg-white rounded p-3 border border-yellow-300">
                      <span className="text-yellow-600 font-bold mr-2">④</span>
                      <span className="text-gray-700">无<span className="font-semibold text-yellow-700">任何标签</span>的优势账号</span>
                    </div>
                  </div>
                  <div className="bg-white rounded p-3 border-2 border-yellow-300">
                    <span className="font-semibold text-yellow-700">原因：</span>
                    <span className="text-gray-700 text-sm">存款和活动优势大，出款容易，高V和负盈利可避开FK严查</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2️⃣ 详细案件记录 */}
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-xl p-8 border-2 border-gray-300 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">2️⃣</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800">详细案件记录</h4>
              </div>

              {/* 表格 */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-700">
                      <th className="border border-gray-600 px-4 py-3 text-left text-white font-semibold text-sm">月份</th>
                      <th className="border border-gray-600 px-4 py-3 text-left text-white font-semibold text-sm">案件类型</th>
                      <th className="border border-gray-600 px-4 py-3 text-left text-white font-semibold text-sm">涉及人员</th>
                      <th className="border border-gray-600 px-4 py-3 text-left text-white font-semibold text-sm">违规行为</th>
                      <th className="border border-gray-600 px-4 py-3 text-left text-white font-semibold text-sm">处置结果</th>
                      <th className="border border-gray-600 px-4 py-3 text-left text-white font-semibold text-sm">备注</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 7月份 - 账号销售测试 */}
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-4 font-semibold text-blue-600 bg-blue-50">7月份</td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700">账号销售测试</td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700">
                        <div className="space-y-1">
                          <div>• Rob*****V7（等级V7）</div>
                          <div>• 另售出1个V1账号</div>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700 text-sm">
                        <div className="space-y-2">
                          <div>按计划卖至外部团队，跟踪记录操作手法。</div>
                          <div className="text-orange-600">V1账号因等级过低未被使用。</div>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700 text-sm">
                        <div className="space-y-1">
                          <div>✓ 已同步BM防范</div>
                          <div>⚠ V1账号持续关注</div>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700 text-sm">
                        <div className="bg-yellow-50 rounded p-2 border border-yellow-200">
                          <div className="font-semibold text-yellow-700 mb-1">买卖号前置要求：</div>
                          <div className="space-y-1 text-xs">
                            <div>① V4+ 且注册&gt;6个月</div>
                            <div>② 负盈利20w++</div>
                            <div>③ IP干净+实名</div>
                            <div>④ 无标签账号</div>
                          </div>
                          <div className="mt-2 text-xs text-gray-600">原因：存款/活动优势大，出款容易，高V+负盈利可避开FK严查。</div>
                        </div>
                      </td>
                    </tr>

                    {/* 8月份 - YH对外协作 */}
                    <tr className="hover:bg-orange-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-4 font-semibold text-orange-600 bg-orange-50">8月份</td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700">YH对外协作</td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700 text-sm">
                        <div className="space-y-1">
                          <div>• 583** Iva****</div>
                          <div>• 536** Waf*****</div>
                          <div>• 555** Sub****</div>
                          <div>• 584** Mak****</div>
                          <div>• Ysah****</div>
                          <div>• Uby******</div>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700">与外部合作，协助查询账号备注内容并外发</td>
                      <td className="border border-gray-300 px-4 py-4">
                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-600 inline-block">即刻开除</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-4 text-center text-gray-400">—</td>
                    </tr>

                    {/* 2-9月 - 内部泄密/钓鱼执法 */}
                    <tr className="hover:bg-red-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-4 font-semibold text-red-600 bg-red-50">2-9月</td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700">内部泄密/钓鱼执法</td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700">
                        <div className="space-y-2">
                          <div className="font-semibold text-red-600">共计23人</div>
                          <div className="text-sm">其中8-9月14人</div>
                          <div className="text-sm text-orange-600">YH占90%</div>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700 text-sm">
                        <div className="space-y-2">
                          <div>内部员工协助外部团队查询备注信息</div>
                          <div className="bg-blue-50 rounded p-2 border border-blue-200">
                            <span className="font-semibold text-blue-600">价格：</span>每条10U
                          </div>
                          <div>JC全员投入钓鱼执法</div>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-4">
                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-600 inline-block">全部查获，逐一处置</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700 text-sm">
                        <div className="bg-purple-50 rounded p-2 border border-purple-200">
                          <div className="font-semibold text-purple-600 mb-1">内幕信息：</div>
                          <div className="space-y-1 text-xs">
                            <div>• 外部套利团队部分为GS离职人员</div>
                            <div>• 含JS与FK出身的老油条</div>
                            <div>• 熟悉BC行业流程</div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* 7-9月 - 安插外部测试 */}
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-4 font-semibold text-indigo-600 bg-indigo-50">7-9月</td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700">安插外部测试</td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700">安插人员加入套利团队</td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700 text-sm">
                        <div className="space-y-2">
                          <div>支付学习费<span className="font-semibold text-blue-600">1500U</span></div>
                          <div>以借用他人账号进行手法学习</div>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700">
                        <div className="space-y-1 text-sm">
                          <div>✓ 获取投注套利手法</div>
                          <div>✓ 获取出黑款模式</div>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-4">
                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 inline-block">持续推进，收集中</span>
                      </td>
                    </tr>

                    {/* 8月份 - 内部违规人员调查 */}
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-4 font-semibold text-purple-600 bg-purple-50">8月份</td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700">内部违规人员调查</td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700">
                        <div className="space-y-1 text-sm">
                          <div><span className="font-semibold">英文名：</span>Ge*</div>
                          <div><span className="font-semibold">验证码：</span>TJ0**</div>
                          <div><span className="font-semibold">入职：</span>2025/4/28</div>
                          <div><span className="font-semibold">最后在岗：</span>2025/8/21</div>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700 text-sm">
                        <div className="space-y-2">
                          <div>与代理、会员同伙</div>
                          <div className="text-red-600">因出款纠纷报复悬赏GS宿舍地址</div>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-4 text-gray-700 text-sm">
                        <div className="space-y-1">
                          <div className="text-red-600 font-semibold">不发放奖金和底薪</div>
                          <div className="text-blue-600 font-semibold">ZG已介入处理</div>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-4 text-center text-gray-400">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 内控业务培训 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">7</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">内控业务支持</h4>
            </div>
          </div>

          {/* 回群组专项进展 */}
          <div className="mb-8">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-base font-semibold text-gray-800">1. 回群组专项进展</h5>
                <span className="px-3 py-1 rounded text-sm font-semibold bg-blue-100 text-blue-600">持续进行中</span>
              </div>

              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-800">内容：</span>
                    <span className="text-gray-700">承接全部FK&WH咨询，<span className="font-bold text-green-600">缓解一线出单人员的压力</span></span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-800">进度：</span>
                    <span className="text-gray-700">按二季度目标，三季度已完成覆盖24小时，目前回群组共计<span className="font-bold text-blue-600">29人</span>，<span className="font-bold text-blue-600">4名</span>新人在学习中，<span className="font-bold text-green-600">25人</span>排班制全面覆盖，后续保持团队持续进行运作。</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 培训组业务进展 */}
          <div className="mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-base font-semibold text-gray-800">2. 培训组业务进展</h5>
                <span className="px-3 py-1 rounded text-sm font-semibold bg-blue-100 text-blue-600">持续进行中</span>
              </div>

              {/* NO1. 新人入职培训 */}
              <div className="mb-6">
                <div className="bg-white rounded-lg p-5 border border-blue-100 mb-4">
                  <h6 className="font-semibold text-gray-800 mb-3 text-sm">NO1. 新人入职培训</h6>

                  <div className="space-y-3">
                     <div className="bg-blue-50 rounded p-3">
                      <div className="text-sm">
                        <span className="font-semibold text-gray-800">目标：</span>
                        <span className="text-gray-700">通过平均培训周期8-15天的课程快速让新人可以上手工作</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded p-3 text-center">
                        <div className="text-xs text-gray-600 mb-1">第三季度培训</div>
                        <div className="text-2xl font-bold text-blue-600">36人</div>
                        <div className="text-xs text-gray-600 mt-1">内控22人 | 一审12人 | 系统2人</div>
                      </div>
                      <div className="bg-gray-50 rounded p-3 text-center">
                        <div className="text-xs text-gray-600 mb-1">第二季度培训</div>
                        <div className="text-2xl font-bold text-gray-600">40人</div>
                        <div className="text-xs text-gray-600 mt-1">对比参考</div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded p-3 border border-green-200">
                      <div className="text-sm text-gray-700">
                        现在新人培训流程已经稳步进行，三季度在二季度基础上做了一些细项及课件优化
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* NO2. 在岗人员业务培训 */}
              <div>
                <div className="bg-white rounded-lg p-5 border border-blue-100">
                  <h6 className="font-semibold text-gray-800 mb-3 text-sm">NO2. 在岗人员业务培训</h6>

                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded p-3">
                      <div className="text-sm">
                        <span className="font-semibold text-gray-800">目标：</span>
                        <span className="text-gray-700">提升末尾人员 / 质检高频错误点提升 / 业务知识点更新培训 / 等</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded p-4 text-center">
                        <div className="text-xs text-gray-600 mb-1">开设课程数量</div>
                        <div className="text-3xl font-bold text-blue-600">4场</div>
                        <div className="text-xs text-gray-600 mt-1">在岗人员培训</div>
                      </div>
                      <div className="bg-green-50 rounded p-4 text-center border border-green-200">
                        <div className="text-xs text-gray-600 mb-1">培训总人数</div>
                        <div className="text-3xl font-bold text-green-600">244人</div>
                        <div className="text-xs text-gray-600 mt-1">Q3累计</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 信息安全管理&应急管理方案 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">8</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">信息安全管理</h4>
            </div>
          </div>

          {/* 安全措施表格 */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600">
                  <th className="border border-blue-700 px-6 py-4 text-left text-white font-semibold text-base w-1/4">条目</th>
                  <th className="border border-blue-700 px-6 py-4 text-left text-white font-semibold text-base w-1/2">处理方案</th>
                  <th className="border border-blue-700 px-6 py-4 text-center text-white font-semibold text-base w-1/4">状态</th>
                </tr>
              </thead>
              <tbody>
        

                {/* 纸飞机安全 */}
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800">纸飞机安全设置</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700 text-sm leading-relaxed">
                    纸飞机安全设置及使用，全部按照公司标准落实执行
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 inline-block">已完成排查</span>
                  </td>
                </tr>

                {/* 护照管理 */}
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800">护照集中保管</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700 text-sm leading-relaxed">
                    场地人员护照全部交由公司保存
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 inline-block">已完成排查</span>
                  </td>
                </tr>

                {/* 文档加密 */}
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800">文档安全管理</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700 text-sm leading-relaxed">
                    所有文档按照标准进行脱敏并加密使用
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 inline-block">已完成排查</span>
                  </td>
                </tr>

                {/* Zoom会议安全 */}
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800">Zoom会议安全规范</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700 text-sm leading-relaxed">
                    zoom会议严格按照公司要求设置，<span className="font-semibold text-red-600">禁止录屏录音</span>
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 inline-block">已完成排查</span>
                  </td>
                </tr>

                 {/* U盾管理 */}
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800">U盾管理制度</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700 text-sm leading-relaxed">
                    <div className="space-y-2">
                      <div><span className="font-semibold text-blue-600">场地人员：</span>班次组长管理安全盾，规避检查风险。</div>
                      <div><span className="font-semibold text-blue-600">远程人员：</span>账号权限收至最低标准。盾由场地管理提报且仅虚拟机使用。</div>
                      <div><span className="font-semibold text-blue-600">居家人员：</span>不会发放U盾、全部放在场地工作人员、统一由场地人员告知验证码。</div>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 inline-block">已完成排查</span>
                  </td>
                </tr>


                {/* 三方后台账号 */}
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800">三方后台账号</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700 text-sm leading-relaxed">
                    <div className="space-y-2">
                      <div>• 权限修改至仅查看单会员数据，用于日常排查</div>
                      <div>• <span className="font-semibold text-blue-600">主管级账号：</span>能导出且帐密仅主管查看</div>
                      <div>• <span className="font-semibold text-blue-600">外包、远程、一审等较低职位：</span>不让使用三方后台</div>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 inline-block">已完成排查</span>
                  </td>
                </tr>

                {/* 谷歌账号 */}
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800">谷歌账号</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700 text-sm leading-relaxed">
                    <div className="space-y-2">
                      <div>• <span className="font-semibold text-blue-600">大蚂蚁zimbra：</span>已全员关闭</div>
                      <div>• <span className="font-semibold text-blue-600">目前邮箱：</span>均为zobu888，由人资管理</div>
                      <div>• <span className="font-semibold text-blue-600">风控支持部邮箱：</span>均予以保留，用于后续记录查询</div>
                      <div>• <span className="font-semibold text-blue-600">人员离职处理：</span>由对接人接管相关邮箱权限，确保工作连续性</div>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 inline-block">已完成排查</span>
                  </td>
                </tr>

                {/* Notion账号 */}
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800">Notion账号</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700 text-sm leading-relaxed">
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-blue-600 mb-1">1. 空间创建与账号分配</div>
                        <div className="pl-4">• 只有管理员有权限创建 Notion 工作空间和分配账号（邀请成员加入工作空间）</div>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-600 mb-1">2. 默认权限隔离</div>
                        <div className="pl-4">• 每个账号（成员）只能看到自己创建的页面/链接（Notion 页面）</div>
                        <div className="pl-4">• 即使同属一个部门，其他人也默认无权查看（包括子页面）</div>
                        <div className="pl-4">• 所有页面默认是私有状态</div>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-600 mb-1">3. 访问控制</div>
                        <div className="pl-4">• 页面要对他人可见，必须由管理员或页面创建者手动授权，通过分享页面给指定用户</div>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-600 mb-1">4. 定期归档删除</div>
                        <div className="pl-4">• 需求上线完成后，1个月内删除</div>
                      </div>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 inline-block">已完成排查</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </>
  );
};