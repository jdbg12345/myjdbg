export interface Section {
  id: string;
  title: string;
  nextTitle?: string;
}

export const sections: Section[] = [
  { id: 'cover', title: '封面', nextTitle: '目录' },
  { id: 'toc', title: '目录', nextTitle: '组织情况' },
  { id: 'org', title: '1. 组织情况', nextTitle: '整体数据' },
  { id: 'data', title: '2. 数据情况', nextTitle: '防范单量与金额' },
  { id: 'prevention-data', title: '2.1 防范单量与金额', nextTitle: '站点类型占比' },
  { id: 'prevention-category', title: '2.2 站点类型占比', nextTitle: 'Y4明细' },
  { id: 'y4-detail', title: '2.3 Y4明细', nextTitle: 'BD+XK明细' },
  { id: 'bdxk-detail', title: '2.4 BD+XK明细', nextTitle: 'Y6+Y9明细' },
  { id: 'y6y9-detail', title: '2.5 Y6+Y9明细', nextTitle: '体育整体杀率明细' },
  { id: 'sports-overall', title: '2.6 体育整体杀率明细', nextTitle: '熊猫体育杀率' },
  { id: 'panda-sports', title: '2.7 熊猫体育杀率', nextTitle: 'B系体育杀率明细' },
  { id: 'b-sports', title: '2.8 B系体育杀率明细', nextTitle: 'DB体育杀率明细' },
  { id: 'db-sports', title: '2.9 DB体育杀率明细', nextTitle: '飞投数据' },
  { id: 'airplane-data', title: '2.10 飞投数据', nextTitle: '工作情况' },
  { id: 'fk-summary', title: '3. 工作情况', nextTitle: 'FK全局说明' },
  { id: 'fk-transformation', title: '3.1 FK全局说明', nextTitle: 'FK会员说明' },
  { id: 'fk-system-overview', title: '3.2 FK会员说明', nextTitle: 'FK内控说明' },
  { id: 'internal-control-overview', title: '3.3 FK内控说明', nextTitle: 'FK代理说明' },
  { id: 'agent-control-overview', title: '3.4 FK代理说明', nextTitle: 'B端问题汇总' },
  { id: 'risk-review', title: '4. B端问题汇总' }
];

export const getSectionInfo = (id: string): Section | undefined => {
  return sections.find(section => section.id === id);
};
