import React, { useState, useEffect } from 'react';
import { FileText, BarChart3, Users, AlertTriangle, ChevronDown, ChevronRight } from 'lucide-react';

interface NavigationItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    id: 'cover',
    title: 'FKZX Q3 Report',
    icon: <FileText className="w-4 h-4" />
  },
  {
    id: 'org',
    title: '1. FK组织情况',
    icon: <Users className="w-4 h-4" />
  },
  {
    id: 'data',
    title: '2. FK数据情况',
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
    title: '3. FK工作总结',
    icon: <FileText className="w-4 h-4" />,
    children: [
      { id: 'fk-transformation', title: '3.1 FK整体说明' },
      { id: 'fk-system-overview', title: '3.2 FK体系概览' },
      { id: 'pilot-results', title: '3.3 FK试点成果', children: [
        { id: 'pilot-direction1', title: '方向1：审核问题-质量较差' },
        { id: 'pilot-direction2', title: '方向2：系统问题-支持不够' },
        { id: 'pilot-direction3', title: '方向3：内控问题-内外串联' }
      ]},
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
  const [activeItem, setActiveItem] = useState('cover');
  const [expandedItems, setExpandedItems] = useState<string[]>(['data', 'summary']);
  const [readingProgress, setReadingProgress] = useState(0);

  // 计算阅读进度
  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.round((scrollTop / docHeight) * 100);
      setReadingProgress(Math.min(progress, 100));
    };

    const handleScroll = () => {
      calculateProgress();
      
      // 检测当前可见的章节
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = 'cover';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.getAttribute('data-section') || 'cover';
        }
      });
      
      setActiveItem(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    calculateProgress();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (itemId: string) => {
    const element = document.querySelector(`[data-section="${itemId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
    const isActive = activeItem === item.id;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    
    return (
      <div key={item.id}>
        <div
          className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
            level === 0 ? 'font-medium' : 'font-normal text-sm ml-4'
          } ${
            isActive 
              ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => handleItemClick(item.id)}
        >
          <div className="flex items-center space-x-3">
            {level === 0 && item.icon && (
              <div className={`${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                {item.icon}
              </div>
            )}
            <span className={`${level > 0 ? 'text-sm' : ''}`}>{item.title}</span>
          </div>
          
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpanded(item.id);
              }}
              className="p-1 hover:bg-gray-200 rounded"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
          )}
        </div>
        
        {hasChildren && isExpanded && (
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
          <h3 className="text-lg font-bold text-gray-800">目录</h3>
        </div>
        
        <div className="space-y-2">
          {navigationItems.map(item => renderNavigationItem(item))}
        </div>
        
      </div>
    </div>
  );
};