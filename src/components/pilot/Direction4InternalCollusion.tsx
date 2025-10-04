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

      {/* 稽查效果 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">6</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">稽查效果</h4>
              <span className="px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-600 ml-4">持续进行中</span>
            </div>
          </div>
          
          {/* 稽查成果展示 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium text-2xl">3</span>
              </div>
              <div className="text-2xl font-semibold text-blue-600 mb-2">调查案件</div>
              <div className="text-gray-600">100%处置完成</div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium text-2xl">5</span>
              </div>
              <div className="text-2xl font-semibold text-blue-600 mb-2">违规人员</div>
              <div className="text-gray-600">4开除+1持续关注</div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium text-2xl">1</span>
              </div>
              <div className="text-2xl font-semibold text-blue-600 mb-2">买卖号测试</div>
              <div className="text-gray-600">持续推进中</div>
            </div>
          </div>
          
          {/* 稽查时间线 */}
          <div className="mt-8">
            <h5 className="text-lg font-semibold text-gray-800 mb-6">Q2稽查时间线</h5>
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <div className="relative">
                {/* 时间线 */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-600"></div>
                
                <div className="space-y-8">
                  {[
                    { month: '4月份', case: 'YH对外协作', result: '3人即刻开除' },
                    { month: '5月份', case: '账号销售测试', result: '1人持续关注' },
                    { month: '6月份', case: 'YH对外协作', result: '2人即刻开除' }
                  ].map((item, index) => (
                    <div key={index} className="relative pl-16">
                      <div className="absolute left-6 w-4 h-4 rounded-full border-2 border-white bg-blue-600"></div>
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium text-gray-800">{item.month}</div>
                            <div className="text-gray-600 text-sm">{item.case}</div>
                          </div>
                          <div className="px-3 py-1 rounded text-sm font-medium bg-blue-100 text-blue-600">
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
                    场地人员：班次组长管理安全盾，规避检查风险。
远程人员：账号权限收至最低标准。盾由场地管理提报且仅虚拟机使用。居家人员：不会发放U盾、全部放在场地工作人员、统一由场地人员告知验证码；
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 inline-block">已完成排查</span>
                  </td>
                </tr>


                {/* 三方后台账号 */}
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800">三方后台账号</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700 text-sm leading-relaxed">
                    权限修改至仅查看单会员数据，用于日常排查。主管级账号能导出且帐密仅主管查看；外包，远程，一审等较低职位不让使用三方后台。
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 inline-block">已完成排查</span>
                  </td>
                </tr>

                {/* 谷歌账号 */}
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800">谷歌账号</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700 text-sm leading-relaxed">
                    大蚂蚁zimbra：已全员关闭。目前均为zobu888，由人资管理；风控支持部的邮箱均予以保留，用于后续记录查询，如有人员离职，将由对接人接管相关邮箱权限，确保工作连续性；
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-600 inline-block">已完成排查</span>
                  </td>
                </tr>

                {/* Notion账号 */}
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800">Notion账号</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700 text-sm leading-relaxed">
                    1. 空间创建与账号分配

只有管理员有权限：创建 Notion 工作空间和分配账号（邀请成员加入工作空间）

2. 默认权限隔离

每个账号（成员）：只能看到自己创建的页面/链接（Notion 页面）；即使同属一个部门，其他人也默认无权查看（包括子页面）；所有页面默认是私有状态。

3. 访问控制

页面要对他人可见，必须由管理员或页面创建者手动授权，通过：分享页面给指定用户
                    4.定期归档删除
                    需求上线完成后，1个月内删除；
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