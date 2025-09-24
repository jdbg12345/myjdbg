import React from 'react';
import { Settings, Gamepad2, Users, Target, Puzzle, Dice6 } from 'lucide-react';

export const Direction3SystemStrategies = () => {
  const strategies = [
    {
      icon: <Gamepad2 className="w-6 h-6 text-purple-500" />,
      title: "电子策略",
      description: "电子游戏风控策略",
      items: [
        "电子卡免费旋转拦截",
        "老虎机异常盈利检测",
        "电子游戏套利行为识别"
      ],
      status: "已上线",
      statusColor: "bg-green-100 text-green-700",
      progress: 85
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "真人策略",
      description: "真人游戏风控策略",
      items: [
        "真人算牌风险检测",
        "百家乐对打识别",
        "真人游戏异常胜率监控"
      ],
      status: "开发中",
      statusColor: "bg-yellow-100 text-yellow-700",
      progress: 60
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: "体育策略",
      description: "体育投注风控策略",
      items: [
        "体育对打风险检测",
        "野鸡赛事风险识别",
        "优势赔率套利监控"
      ],
      status: "开发中",
      statusColor: "bg-yellow-100 text-yellow-700",
      progress: 45
    },
    {
      icon: <Dice6 className="w-6 h-6 text-purple-500" />,
      title: "彩票策略",
      description: "彩票游戏风控策略",
      items: [
        "彩票全包套利检测",
        "彩票异常盈利监控",
        "彩票投注模式分析"
      ],
      status: "方案中",
      statusColor: "bg-gray-100 text-gray-700",
      progress: 20
    },
    {
      icon: <Puzzle className="w-6 h-6 text-purple-500" />,
      title: "棋牌策略",
      description: "棋牌游戏风控策略",
      items: [
        "牌坊风险防范",
        "棋牌对打检测",
        "棋牌异常操作监控"
      ],
      status: "已上线",
      statusColor: "bg-green-100 text-green-700",
      progress: 90
    }
  ];

  return (
    <div className="bg-white rounded-lg p-8 mb-8 border border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
          <Settings className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800">方向3：系统审核策略的维度缺失</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {strategies.map((strategy, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-purple-200">
            <div className="flex items-center space-x-3 mb-4">
              {strategy.icon}
              <h4 className="text-lg font-bold text-gray-800">{strategy.title}</h4>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-sm font-semibold text-purple-700 mb-2">策略内容</div>
                <div className="text-xs text-purple-600 space-y-1">
                  {strategy.items.map((item, itemIndex) => (
                    <div key={itemIndex}>• {item}</div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <div className="text-sm font-semibold text-purple-700 mb-2">进度状态</div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${strategy.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-semibold text-purple-600">{strategy.progress}%</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${strategy.statusColor}`}>
                  {strategy.status}
                </span>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs font-semibold text-gray-700 mb-1">预期收益</div>
                <div className="text-xs text-gray-600">
                  拦截率达到90%+，有效防范{strategy.description.replace('风控策略', '')}作弊行为
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-purple-50 rounded-lg p-6">
        <div className="text-center">
          <h4 className="text-xl font-bold text-purple-800 mb-4">整体策略覆盖目标</h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <div className="text-2xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-purple-700">风控策略数量</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <div className="text-2xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-sm text-purple-700">子策略特征</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <div className="text-2xl font-bold text-purple-600 mb-2">90%+</div>
              <div className="text-sm text-purple-700">目标拦截率</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};