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
          <div className="space-y-6">

            {/* 7月份 */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-20 h-10 bg-blue-600 rounded flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">7月份</span>
                </div>
                <h5 className="text-lg font-semibold text-gray-800">卖出账号测试</h5>
              </div>
              <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
                <div><span className="font-semibold text-blue-600">卖出账号：</span>Rob*****V7，按照计划成功卖至外部团队，而后根据其操作手法进行了记录（总结在第10页）。并同步了对应BM，做好防范措施。</div>
              </div>
            </div>

            {/* 8月份 */}
            <div className="bg-gradient-to-r from-orange-50 to-white rounded-lg p-6 border border-orange-200">
              <div className="flex items-center mb-4">
                <div className="w-20 h-10 bg-orange-600 rounded flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">8月份</span>
                </div>
                <h5 className="text-lg font-semibold text-gray-800">账号备注泄露事件</h5>
              </div>
              <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
                <div>
                  <span className="font-semibold text-orange-600">账号备注内容：</span>YH 6人: 583** Iva****、536** Waf*****、555** Sub****、584** Mak****、Ysah****、Uby******与外部合作，协助查询账号备注内容后外发。
                </div>
                <div>
                  <span className="font-semibold text-red-600">处置结果：</span>即刻开除。
                </div>
              </div>
            </div>

            {/* 监控录屏 */}
            <div className="bg-gradient-to-r from-red-50 to-white rounded-lg p-6 border border-red-200">
              <div className="flex items-center mb-4">
                <div className="w-28 h-10 bg-red-600 rounded flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">监控录屏</span>
                </div>
                <h5 className="text-lg font-semibold text-gray-800">钓鱼执法成果</h5>
              </div>
              <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
                <div>通过安插在外部套利团队的员工得知，查询账号备注信息一个可得<span className="font-semibold text-blue-600">10U</span>，在7月得知外部团队已获得大量GS内部人员的协助，此后JC内部调动人员，全员投入钓鱼执法和查询录屏。</div>
                <div className="bg-white rounded p-3 border border-red-200">
                  <span className="font-semibold text-red-600">2-9月份总计：</span><span className="text-2xl font-bold text-red-600 mx-2">23名</span>违规人员
                </div>
                <div className="bg-white rounded p-3 border border-red-200">
                  <span className="font-semibold text-red-600">8-9月份：</span>共有<span className="text-2xl font-bold text-red-600 mx-2">14名</span>GS员工被逮获（<span className="font-semibold">YH占90%</span>）
                </div>
              </div>
            </div>

            {/* 内幕信息 */}
            <div className="bg-gradient-to-r from-purple-50 to-white rounded-lg p-6 border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="w-28 h-10 bg-purple-600 rounded flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">内幕信息</span>
                </div>
                <h5 className="text-lg font-semibold text-gray-800">外部套利团队情况</h5>
              </div>
              <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
                <div>外部套利团队里部分是从咱<span className="font-semibold text-blue-600">GS离职出去的</span>。其团队中有<span className="font-semibold text-purple-600">JS出身和FK出身的老油条</span>，熟悉BC行业所有细节流程。</div>
                <div className="bg-white rounded p-3 border border-purple-200">
                  <div className="font-semibold text-purple-600 mb-2">近几个月主要业务：</div>
                  <div className="space-y-1 pl-4">
                    <div>• 查询账号备注信息</div>
                    <div>• 协助出黑款业务</div>
                    <div>• 买号业务已暂缓（因针对账号的要求较高）</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 已卖出V1账号 */}
            <div className="bg-gradient-to-r from-green-50 to-white rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-32 h-10 bg-green-600 rounded flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">已卖出V1账号</span>
                </div>
                <h5 className="text-lg font-semibold text-gray-800">测试结果</h5>
              </div>
              <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
                <div>对方于外部群发布大量收取账号，主动与其联系并出售了<span className="font-semibold text-blue-600">1个账号（7月份）</span>。但之后并无任何存提甚至投注行为直至今日。</div>
                <div className="bg-white rounded p-3 border border-green-200">
                  <span className="font-semibold text-green-600">试探性询问后得知：</span>账号等级较低不好操作，新的买号要求是更高等级的号。但<span className="font-semibold text-red-600">高V的号市场上几乎买不到</span>。
                </div>
              </div>
            </div>

            {/* 安插人员加入套利团队 */}
            <div className="bg-gradient-to-r from-indigo-50 to-white rounded-lg p-6 border border-indigo-200">
              <div className="flex items-center mb-4">
                <div className="w-40 h-10 bg-indigo-600 rounded flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-sm">安插人员学习手法</span>
                </div>
                <h5 className="text-lg font-semibold text-gray-800">渗透调查</h5>
              </div>
              <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
                <div>与其取得信任后介绍了"朋友"给他并向他学习，收费<span className="font-semibold text-blue-600">1,500U</span>，但为避免受骗，前期告知借用他人的账号来实验，不提款。</div>
                <div className="bg-white rounded p-3 border border-indigo-200">
                  <span className="font-semibold text-indigo-600">目的：</span>要知道手法而不是被FK。并得知其投注手法。
                </div>
              </div>
            </div>

            {/* 买卖号前置要求 */}
            <div className="bg-gradient-to-r from-yellow-50 to-white rounded-lg p-6 border border-yellow-300">
              <div className="flex items-center mb-4">
                <div className="w-40 h-10 bg-yellow-600 rounded flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">买卖号前置要求</span>
                </div>
                <h5 className="text-lg font-semibold text-gray-800">最新要求标准</h5>
              </div>
              <div className="pl-6 space-y-4">
                <div className="bg-white rounded-lg p-4 border-2 border-yellow-300">
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="flex items-start">
                      <span className="text-yellow-600 font-bold mr-2">①</span>
                      <span className="text-gray-700"><span className="font-semibold text-yellow-600">V4以上</span>且注册时间超过<span className="font-semibold">6个月</span></span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-600 font-bold mr-2">②</span>
                      <span className="text-gray-700">负盈利<span className="font-semibold text-yellow-600">20w++</span></span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-600 font-bold mr-2">③</span>
                      <span className="text-gray-700"><span className="font-semibold text-yellow-600">IP干净</span>且已通过前期实名的用户</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-600 font-bold mr-2">④</span>
                      <span className="text-gray-700">没有被打上<span className="font-semibold text-yellow-600">任何标签</span>的优势账号</span>
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded p-3 border border-yellow-200">
                    <div className="font-semibold text-yellow-700 mb-1">原因：</div>
                    <div className="text-sm text-gray-700">存款和活动优势较大，出款容易，加上高V和负盈利的记录，可避开FK严查。</div>
                  </div>
                </div>
                <div className="bg-red-50 rounded p-3 border border-red-200">
                  <span className="font-semibold text-red-600">注：</span>暂无渠道收购以上要求的账号
                </div>
              </div>
            </div>

            {/* 出黑款业务 */}
            <div className="bg-gradient-to-r from-pink-50 to-white rounded-lg p-6 border border-pink-200">
              <div className="flex items-center mb-4">
                <div className="w-32 h-10 bg-pink-600 rounded flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">出黑款业务</span>
                </div>
                <h5 className="text-lg font-semibold text-gray-800">替代方案</h5>
              </div>
              <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
                <div>若账号并不满足以上要求，团队亦可协助出款业务，但<span className="font-semibold text-red-600">并非100%成功</span>，但凡成功即收取<span className="font-semibold text-pink-600">最高50%费用</span>（分多笔操作）。</div>
                <div className="bg-white rounded p-3 border border-pink-200">
                  <span className="font-semibold text-pink-600">要求：</span>账号内必须要有<span className="font-semibold">较高的余额</span>。
                </div>
              </div>
            </div>

            {/* 结论分析 */}
            <div className="bg-gradient-to-r from-gray-100 to-white rounded-lg p-6 border-2 border-gray-400">
              <div className="flex items-center mb-4">
                <div className="w-28 h-10 bg-gray-700 rounded flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">结论分析</span>
                </div>
                <h5 className="text-lg font-semibold text-gray-800">JC建议调整方案</h5>
              </div>
              <div className="pl-6 space-y-4">
                <div className="bg-white rounded p-4 border border-gray-300">
                  <div className="font-semibold text-gray-700 mb-2">针对该账号的行为分析：</div>
                  <div className="text-gray-700 leading-relaxed pl-4">
                    <div>• 主要都是以投注手法试图套利，考验FK的机制和能力</div>
                    <div>• 其次是各类的福利奖金优势大</div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
                  <div className="font-semibold text-blue-700 mb-3">若要彻底杜绝买卖号行为实属困难，JC的建议调整如下：</div>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3 border border-blue-200">
                      <span className="font-semibold text-blue-600">① 福利调整：</span>
                      <span className="text-gray-700">各类福利彩金适当减少/提高倍数和更多限制</span>
                    </div>
                    <div className="bg-white rounded p-3 border border-blue-200">
                      <span className="font-semibold text-blue-600">② 新增流程：</span>
                      <span className="text-gray-700">每当FK审批出款之时但凡觉得有异常的账号，出款前同步至WH，由WH去联系会员核实基础信息是否为本人，核实无误后才给予出款，减少被套利团队钻漏洞。</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ③ 其它特殊工作事项 */}
            <div className="bg-gradient-to-r from-red-50 to-white rounded-lg p-6 border-2 border-red-300">
              <div className="flex items-center mb-4">
                <div className="w-48 h-10 bg-red-600 rounded flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">③ 其它特殊工作事项</span>
                </div>
                <h5 className="text-lg font-semibold text-gray-800">悬赏事件调查</h5>
              </div>
              <div className="pl-6 space-y-4">
                <div className="bg-white rounded-lg p-4 border-2 border-red-200">
                  <div className="font-semibold text-red-600 mb-3">调查结果：</div>
                  <div className="text-gray-700 mb-3">根据该名称初步判断为GS内部人员，最终联系到所负责的部长Mil得知：</div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-red-50 rounded p-2 border border-red-200">
                      <span className="font-semibold text-gray-700">英文名：</span><span className="text-red-600">Ge*</span>
                    </div>
                    <div className="bg-red-50 rounded p-2 border border-red-200">
                      <span className="font-semibold text-gray-700">验证码：</span><span className="text-red-600">TJ0**</span>
                    </div>
                    <div className="bg-red-50 rounded p-2 border border-red-200">
                      <span className="font-semibold text-gray-700">入职日期：</span>2025年4月28日
                    </div>
                    <div className="bg-red-50 rounded p-2 border border-red-200">
                      <span className="font-semibold text-gray-700">最后在岗日期：</span>2025年8月21日
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
                  <div className="font-semibold text-orange-600 mb-2">原因：</div>
                  <div className="text-gray-700">Ge*所发展代理因FK不予出款，最终出本金扣3w盈利，扣除盈利后伙同代理、会员报复悬赏。</div>
                  <div className="bg-orange-50 rounded p-3 mt-2 border border-orange-200">
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold">资金流水：</span>存：21,450 / 提：51,007.00
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                  <div className="font-semibold text-purple-600 mb-2">处理：</div>
                  <div className="text-gray-700 space-y-2">
                    <div>事发后认为这个同事是和代理、会员一伙的。套公司佣金，被扣盈利后举报GS宿舍。</div>
                    <div>所以决定<span className="font-semibold text-red-600">不发未发放的奖金和底薪</span>，最终导致这个员工继续悬赏GS宿舍地址。</div>
                    <div className="bg-purple-50 rounded p-2 border border-purple-200">
                      <span className="font-semibold text-purple-600">后续跟进：</span>Mil上级已经安排<span className="font-semibold text-blue-600">ZG介入处理</span>。
                    </div>
                  </div>
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