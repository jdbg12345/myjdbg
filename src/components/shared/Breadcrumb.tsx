import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface NavigationItem {
  id: string;
  title: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  { id: 'cover', title: 'FKZX Q3 REPORT' },
  { id: 'org', title: '1. 组织情况' },
  {
    id: 'data',
    title: '2. 数据情况',
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
  }
];

const findItemPath = (items: NavigationItem[], targetId: string, path: NavigationItem[] = []): NavigationItem[] | null => {
  for (const item of items) {
    const currentPath = [...path, item];

    if (item.id === targetId) {
      return currentPath;
    }

    if (item.children) {
      const result = findItemPath(item.children, targetId, currentPath);
      if (result) return result;
    }
  }

  return null;
};

export const Breadcrumb = () => {
  const [activeItem, setActiveItem] = useState('cover');

  useEffect(() => {
    const handleScroll = () => {
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const breadcrumbPath = findItemPath(navigationItems, activeItem) || [];

  if (breadcrumbPath.length === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm z-50 print:relative print:bg-white">
      <div className="max-w-7xl mx-auto px-5 py-3">
        <div className="flex items-center space-x-2 text-sm">
          {breadcrumbPath.map((item, index) => (
            <React.Fragment key={item.id}>
              {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
              <span
                className={`
                  ${index === breadcrumbPath.length - 1
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600'
                  }
                `}
              >
                {item.title}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
