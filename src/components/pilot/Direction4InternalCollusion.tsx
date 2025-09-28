import React from 'react';

export const Direction4InternalCollusion = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">方向3</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">内控问题-内外串联</h2>
        </div>
      </div>


      {/* 风控标签和备注独立权限 */}
      <div className="mb-12">
        {/* 整合的内容模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">标</span>
            </div>
              <h4 className="text-xl font-bold text-gray-800">风控标签和备注独立权限</h4>
            </div>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">已上线</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">风控标签和备注权限未独立管理，大部分部门均可查看，敏感信息易泄露，存在潜在公司损失风险</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">风控类标签备注独立权限</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">减少被泄露风险</p>
            </div>
          </div>
        </div>
    
      </div>


      
      {/* 2. 会员禁用流程升级 */}
      <div className="mb-8">
        {/* 整合的内容模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">禁</span>
            </div>
              <h4 className="text-xl font-bold text-gray-800">会员禁用流程升级</h4>
            </div>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">已上线</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">当前会员禁用流程单人即可操作，权限管理不够精细，缺乏分级审批机制，存在高V用户误禁及权限滥用风险</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">建立基于玩家等级的会员禁用分级审批机制，高V玩家的启禁用操作需提供审批人的 U 盾或谷歌验证码验证</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">彻底解决禁用滥用问题</p>
            </div>
          </div>
          
          {/* VIP等级审批流程示意图 */}
          <div className="mt-8">
            <h5 className="text-lg font-bold text-gray-800 mb-4">VIP等级审批流程示意图</h5>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="text-center">
                  <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 mb-2">
                    <div className="text-green-700 font-bold">VIP 0-3</div>
                    <div className="text-sm text-green-600">普通会员</div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">单人审批即可</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4 mb-2">
                    <div className="text-yellow-700 font-bold">VIP 4-6</div>
                    <div className="text-sm text-yellow-600">中级会员</div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">需主管审批</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 mb-2">
                    <div className="text-red-700 font-bold">VIP 7+</div>
                    <div className="text-sm text-red-600">高级会员</div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">需U盾/谷歌验证</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
      
      {/* 敏感高危参数修改监控 */}
      <div className="mb-12">
        {/* 整合的内容模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">参</span>
            </div>
              <h4 className="text-xl font-bold text-gray-800">敏感高危参数修改监控</h4>
            </div>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-600">试运行</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">高危参数（如代理佣金、存提费率、场馆费率、VIP体系）缺乏实时监控与审计，存在被误操作、滥用或配置异常导致的重大风险。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">一些影响到收益的关键参数的修改会触发实时触发</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">减少被泄露风险</p>
            </div>
          </div>
        </div>
    
      </div>

         {/* 关联查询使用密文查询 */}
      <div className="mb-12">
        {/* 整合的内容模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">密</span>
            </div>
              <h4 className="text-xl font-bold text-gray-800">关联查询使用密文查询</h4>
            </div>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-600">试运行</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">高危参数（如代理佣金、存提费率、场馆费率、VIP体系）缺乏实时监控与审计，存在被误操作、滥用或配置异常导致的重大风险。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">一些影响到收益的关键参数的修改会触发实时触发</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">减少被泄露风险</p>
            </div>
          </div>
        </div>
    
      </div>
      
      {/* 风控策略参数变化机制 */}
      <div className="mb-8">
        {/* 整合的内容和图表模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">参</span>
            </div>
              <h4 className="text-xl font-bold text-gray-800">风控策略参数变化机制</h4>
            </div>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-600">方案中</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">风控策略参数固定，易被外部摸清规律或内外勾结泄露，已经存在被故意规避和绕过的风险，且缺乏动态调整机制。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">建立动态参数调整机制，使表面显示参数与实际执行参数不完全一致，从而增加外界预测难度并降低泄漏风险。</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">策略参数泄漏风险降低</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};