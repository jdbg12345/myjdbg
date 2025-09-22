import React from 'react';
import { CoverPage } from './components/CoverPage';
import { TableOfContents } from './components/TableOfContents';
import { OrganizationalStructure } from './components/OrganizationalStructure';
import { OverallData } from './components/OverallData';
import { QuarterlyPreventionData } from './components/QuarterlyPreventionData';
import { QuarterlyPreventionCategory } from './components/QuarterlyPreventionCategory';
import { Y4SiteDetail } from './components/Y4SiteDetail';
import { BDXKSiteDetail } from './components/BDXKSiteDetail';
import { Y6Y9SiteDetail } from './components/Y6Y9SiteDetail';
import { SportsOverallKillRate } from './components/SportsOverallKillRate';
import { PandaSportsKillRate } from './components/PandaSportsKillRate';
import { BSportsKillRate } from './components/BSportsKillRate';
import { DBSportsKillRate } from './components/DBSportsKillRate';
import { AirplaneData } from './components/AirplaneData';
import { BusinessOverview } from './components/BusinessOverview';
import { AuditGroup } from './components/AuditGroup';
import { InternalControlOverview } from './components/InternalControlOverview';
import { AuditDepartmentOverview } from './components/AuditDepartmentOverview';
import { SystemDepartmentOverview } from './components/SystemDepartmentOverview';
import { SummaryOverview } from './components/SummaryOverview';
import { RiskWarning } from './components/RiskWarning';
import { SystemReview } from './components/SystemReview';
import { SystemDispatch } from './components/SystemDispatch';
import { ManualReview } from './components/ManualReview';
import { InternalControlSampling } from './components/InternalControlSampling';
import { PlatformReconciliation } from './components/PlatformReconciliation';
import { InternalSecurityControl } from './components/InternalSecurityControl';
import { AgentCommissionControl } from './components/AgentCommissionControl';
import { RiskReview } from './components/RiskReview';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-5">
        <CoverPage />
        <TableOfContents />
        
        {/* 1. 风控组织架构 */}
        <OrganizationalStructure />
        
        {/* 2. 风控整体数据 */}
        <OverallData />
        
        {/* 2.1 第三季度防范单量与金额 */}
        <QuarterlyPreventionData />
        
        {/* 2.2 第三季度防范金（各大类型占比） */}
        <QuarterlyPreventionCategory />
        
        {/* 2.3 第三季度防范金（Y4明细） */}
        <Y4SiteDetail />
        
        {/* 2.4 第三季度防范金（BD+XK明细） */}
        <BDXKSiteDetail />
        
        {/* 2.5 第三季度防范金（Y6+Y9明细） */}
        <Y6Y9SiteDetail />
        
        {/* 2.6 体育整体杀率明细 */}
        <SportsOverallKillRate />
        
        {/* 2.7 熊猫体育杀率明细 */}
        <PandaSportsKillRate />
        
        {/* 2.8 B系体育杀率明细 */}
        <BSportsKillRate />
        
        {/* 2.9 DB体育杀率明细 */}
        <DBSportsKillRate />
        
        {/* 2.9 飞机数据 */}
        <AirplaneData />
        
        {/* 3. 风控工作总结 */}
        {/* 3.0 业务方向及提升策略概览 */}
        <BusinessOverview />
        {/* 3.1 审核组 */}
        <AuditGroup />
        {/* 3.2 内控组 */}
        <InternalControlOverview />
        {/* 3.3 稽查组 */}
        <AuditDepartmentOverview />
        {/* 3.4 系统组 */}
        <SystemDepartmentOverview />
        
        {/* 系统组详细页面 - 会员风控详细内容 */}
        <SummaryOverview />
        <RiskWarning />
        <SystemReview />
        <SystemDispatch />
        <ManualReview />
        <InternalControlSampling />
        <PlatformReconciliation />
        <InternalSecurityControl />
        <AgentCommissionControl />
        
        
        {/* 4. 事故问题汇总 */}
        <RiskReview />
      </div>
    </div>
  );
}

export default App;