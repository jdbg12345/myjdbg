import React from 'react';
import { NavigationSidebar } from './components/shared/NavigationSidebar';
import { CoverPage } from './components/CoverPage';
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
import { FKTransformationRhythm } from './components/FKTransformationRhythm';
import { FKSystemOverview } from './components/FKSystemOverview';
import { PilotResults } from './components/PilotResults';
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
      <NavigationSidebar />
      <div className="max-w-7xl mx-auto p-5">
        {/* 封面 */}
        <div data-section="cover">
          <CoverPage />
        </div>
        
        {/* 1. FK组织情况 */}
        <div data-section="org">
          <OrganizationalStructure />
        </div>
        
        {/* 2. FK数据情况 */}
        <div data-section="data">
          <OverallData />
        </div>
        
        {/* 2.1 第三季度防范单量与金额 */}
        <div data-section="prevention-data">
          <QuarterlyPreventionData />
        </div>
        
        {/* 2.2 第三季度防范金（各大类型占比） */}
        <div data-section="prevention-category">
          <QuarterlyPreventionCategory />
        </div>
        
        {/* 2.3 第三季度防范金（Y4明细） */}
        <div data-section="y4-detail">
          <Y4SiteDetail />
        </div>
        
        {/* 2.4 第三季度防范金（BD+XK明细） */}
        <div data-section="bdxk-detail">
          <BDXKSiteDetail />
        </div>
        
        {/* 2.5 第三季度防范金（Y6+Y9明细） */}
        <div data-section="y6y9-detail">
          <Y6Y9SiteDetail />
        </div>
        
        {/* 2.6 体育整体杀率明细 */}
        <div data-section="sports-overall">
          <SportsOverallKillRate />
        </div>
        
        {/* 2.7 熊猫体育杀率明细 */}
        <div data-section="panda-sports">
          <PandaSportsKillRate />
        </div>
        
        {/* 2.8 B系体育杀率明细 */}
        <div data-section="b-sports">
          <BSportsKillRate />
        </div>
        
        {/* 2.9 DB体育杀率明细 */}
        <div data-section="db-sports">
          <DBSportsKillRate />
        </div>
        
        {/* 2.9 飞机数据 */}
        <div data-section="airplane-data">
          <AirplaneData />
        </div>
        
        {/* 3. FK工作总结 */}
        {/* 3.1 FK整体说明 */}
        <div data-section="fk-transformation">
          <FKTransformationRhythm />
        </div>
        
        {/* 3.2 FK能力概览 */}
        <div data-section="fk-system-overview">
          <FKSystemOverview />
        </div>
        
        {/* 3.3 FK试点成果 */}
        <div data-section="pilot-results">
          <PilotResults />
        </div>
        
        {/* 3.1 审核组 */}
        <div data-section="audit-group">
          <AuditGroup />
        </div>
        {/* 3.2 内控组 */}
        <div data-section="internal-control">
          <InternalControlOverview />
        </div>
        {/* 3.3 稽查组 */}
        <div data-section="audit-dept">
          <AuditDepartmentOverview />
        </div>
        {/* 3.4 系统组 */}
        <div data-section="system-dept">
          <SystemDepartmentOverview />
        </div>
        
        {/* 系统组详细页面 - 会员风控详细内容 */}
        <div data-section="summary-overview">
          <SummaryOverview />
        </div>
        <div data-section="risk-warning">
          <RiskWarning />
        </div>
        <div data-section="system-review">
          <SystemReview />
        </div>
        <div data-section="system-dispatch">
          <SystemDispatch />
        </div>
        <div data-section="manual-review">
          <ManualReview />
        </div>
        <div data-section="internal-control-sampling">
          <InternalControlSampling />
        </div>
        <div data-section="platform-reconciliation">
          <PlatformReconciliation />
        </div>
        <div data-section="internal-security-control">
          <InternalSecurityControl />
        </div>
        <div data-section="agent-commission-control">
          <AgentCommissionControl />
        </div>
        
        
        {/* 4. 事故问题汇总 */}
        <div data-section="risk-review">
          <RiskReview />
        </div>
      </div>
    </div>
  );
}

export default App;