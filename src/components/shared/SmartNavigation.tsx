import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface NavigationItem {
  id: string;
  title: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  { id: 'cover', title: 'FKZX Q3 REPORT' },
  { id: 'org', title: '1. 组织情况（待更新）' },
  {
    id: 'data',
    title: '2. 数据情况（待更新）',
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
    id: 'fk-summary',
    title: '3. 工作情况',
    children: [
      { id: 'fk-transformation', title: '3.1 FK全局说明' },
      { id: 'fk-system-overview', title: '3.2 FK会员说明' },
      { id: 'internal-control-overview', title: '3.3 FK内控说明' },
      { id: 'agent-control-overview', title: '3.4 FK代理说明' }
    ]
  },
  { id: 'risk-review', title: '4.B端问题汇总（待更新）' }
];

const flattenItems = (items: NavigationItem[]): NavigationItem[] => {
  const result: NavigationItem[] = [];
  items.forEach(item => {
    result.push(item);
    if (item.children) {
      result.push(...item.children);
    }
  });
  return result;
};

export const SmartNavigation = () => {
  const [activeItem, setActiveItem] = useState('cover');
  const flatItems = flattenItems(navigationItems);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = 'cover';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.getAttribute('data-section') || 'cover';
        }
      });

      setActiveItem(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (itemId: string) => {
    const element = document.querySelector(`[data-section="${itemId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getVisibleItems = () => {
    const currentIndex = flatItems.findIndex(item => item.id === activeItem);
    if (currentIndex === -1) return [];

    const visibleItems: Array<{ item: NavigationItem; type: 'prev' | 'current' | 'next' }> = [];

    if (currentIndex > 0) {
      visibleItems.push({ item: flatItems[currentIndex - 1], type: 'prev' });
    }

    visibleItems.push({ item: flatItems[currentIndex], type: 'current' });

    if (currentIndex < flatItems.length - 1) {
      visibleItems.push({ item: flatItems[currentIndex + 1], type: 'next' });
    }

    return visibleItems;
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 w-72 hidden xl:block z-40">
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3">
          <h3 className="text-sm font-bold text-white">章节导航</h3>
        </div>

        <div className="py-2">
          {visibleItems.map(({ item, type }) => (
            <div
              key={item.id}
              className={`
                px-4 py-3 cursor-pointer transition-all duration-200 border-l-4
                ${type === 'current'
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'bg-white border-transparent text-gray-600 hover:bg-gray-50'
                }
              `}
              onClick={() => handleItemClick(item.id)}
            >
              <div className="flex items-center space-x-2">
                {type === 'prev' && <ChevronUp className="w-4 h-4 flex-shrink-0" />}
                {type === 'next' && <ChevronDown className="w-4 h-4 flex-shrink-0" />}
                <span className={`text-sm ${type === 'current' ? 'font-semibold' : 'font-normal'}`}>
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
