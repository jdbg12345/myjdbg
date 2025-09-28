import React from 'react';

export const Direction3SystemStrategies = () => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">方向2</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">系统问题-支持不够</h2>
        </div>
      </div>
      <p className="text-gray-700 mb-8 leading-relaxed">
        目前系统的策略主要集中在防御型，而非套利及作弊识别类型，导致直接出款错误，以及转人工后缺乏强有力的风险提醒。
      </p>

      {/* 风控套利理解概览 */}
      <div className="bg-blue-50 rounded-lg p-8 mb-8 border border-blue-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">风控套利理解概览</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <h4 className="text-lg font-bold text-blue-700">游戏典型套利</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              按照每个游戏的典型套利手法进行精准拦截，如电子卡免费、真人算牌、体育打水、彩票全包等特定游戏场景的套利行为识别
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 border-l-4 border-green-600">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <h4 className="text-lg font-bold text-green-700">特征组合兜底</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              不考虑具体游戏类型，通过多维度特征组合（如投注模式、时间规律、金额分布等）进行兜底判定，捕获未知套利手法
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 border-l-4 border-orange-600">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <h4 className="text-lg font-bold text-orange-700">多维度覆盖</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              覆盖线上线下红利套利、活动套利、代理佣金套利等多个维度，构建全方位的风控防护体系
            </p>
          </div>
        </div>
      </div>
    
      {/* 1. 电子策略 */}
      <div className="mb-12">
        {/* 整合的内容和图表模块 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">电</span>
            </div>
              <h4 className="text-xl font-bold text-gray-800">电子策略</h4>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">已上线</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                问题
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">电子游戏卡免费旋转等套利行为难以识别，系统缺乏有效的电子游戏异常行为监控机制</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                策略
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">建立电子游戏异常行为识别机制，重点监控卡免费旋转等套利行为</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                收益
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">电子卡免费策略拦截率达到25%，有效防范套利行为，显著提升电子游戏风控能力</p>
            </div>
          </div>
        
          {/* 电子策略图表 */}
          <div className="mt-8">
          <div className="relative h-96 mb-6 bg-gray-50 rounded-lg p-8">
            <div className="absolute left-2 top-1/3 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-600">
              拦截订单数
            </div>
            <div className="absolute right-2 top-2/3 transform -translate-y-1/2 rotate-90 text-xs font-medium text-orange-600">
              准确率 (%)
            </div>
            
            <div className="mx-12 h-full relative">
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500">
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>
              
              <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-orange-500">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
              
              <div className="