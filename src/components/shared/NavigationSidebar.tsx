import React from 'react';
import { FileText, BarChart3, Users, AlertTriangle } from 'lucide-react';

interface NavigationItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    id: 'cover',
    title: '封面',
    icon: <FileText className="w-4 h-4" />
  },
  {
    id: 'toc',
    title: '目录',
    icon: <FileText className="w-4 h-4" />
  },
  {
    id: 'org',
    title: '1. 风控组织架构',
    icon: <Users className="w-4 h-4" />
  },
  {
    id: 'data',
    title: '2. 风控整体数据',
    icon: <BarChart3 className="w-4 h-4" />,
    children: [
      { id: 'prevention-data', title: '2.1 防范单量与金额' },
      { id: 'prevention-category', title: '2.2 站点类型占比' },
      { id: 'y4-detail', title: '2.3 Y4明细' },
      { id: 'bdxk-detail', title: '2.4 BD+XK明细' },
      { id: 'y6y9-detail', title: '2.5 Y6+Y9明细' },
      { id: 'sports-overall', title: '2.6 体育整体杀率明细' },
      { id: 'panda-sports', title: '2.7 熊猫体育杀率' },
      { id: 'b-sports', title: '2.8 B系体育杀率明细' },
      { id: 'db-sports', title: '2.9 DB体育杀率明细' },
      { id: 'airplane-data', title: '2.10 飞投数据' }
    ]
  },
  {
    id: 'summary',
    title: '3. 风控工作总结',
    icon: <FileText className="w-4 h-4" />,
    children: [
      { id: 'business-overview', title: '3.0 业务方向及提升策略概览' },
      { id: 'audit-group', title: '3.1 审核组' },
      { id: 'internal-control', title: '3.2 内控组' },
      { id: 'audit-dept', title: '3.3 稽查组' },
      { id: 'system-dept', title: '3.4 系统组' }
    ]
  },
  {
    id: 'risk-review',
    title: '4. B端事故问题汇总',
    icon: <AlertTriangle className="w-4 h-4" />
  }
];

export const NavigationSidebar = () => {
  const [activeItem, setActiveItem] = React.useState('cover');

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    // 这里可以添加滚动到对应章节的逻辑
  };

  const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
    const isActive = activeItem === item.id;
    const hasChildren = item.children && item.children.length > 0;
    
    return (
      <div key={item.id}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
            level === 0 ? 'font-medium' : 'font-normal text-sm ml-4'
          } ${
            isActive 
              ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => handleItemClick(item.id)}
        >
          {level === 0 && item.icon && (
            <div className={`${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
              {item.icon}
            </div>
          )}
          <span className={`${level > 0 ? 'text-sm' : ''}`}>{item.title}</span>
        </div>
        
        {hasChildren && (
          <div className="ml-2 mt-1 space-y-1">
            {item.children!.map(child => renderNavigationItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed left-6 top-24 w-80 hidden xl:block z-40">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 max-h-[calc(100vh-120px)] overflow-y-auto">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-800">目录导航</h3>
        </div>
        
        <div className="space-y-2">
          {navigationItems.map(item => renderNavigationItem(item))}
        </div>
        
        {/* 进度指示器 */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">阅读进度</span>
            <span className="text-sm font-medium text-blue-600">25%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full transition-all duration-300" style={{width: '25%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};