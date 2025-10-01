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
        
        {/* 3. FK工作情况 */}
        {/* 3.1 FK整体说明 */}
        <div data-section="fk-transformation">
          <FKTransformationRhythm />
        </div>
        
        {/* 3.2 FK变化说明 */}
        <div data-section="fk-system-overview">
          <FKSystemOverview />
        </div>
        
        {/* 3.3 FK试点成果 */}
        <div data-section="pilot-results">
          <PilotResults />
        </div>
        
        {/* 3.3.1 方向1：审核问题-质量较差 */}
        <div data-section="pilot-direction1">
        </div>
        
        {/* 3.3.2 方向2：系统问题-支持不够 */}
        <div data-section="pilot-direction2">
        </div>
        
        {/* 3.3.3 方向3：内控问题-违规行为 */}
        <div data-section="pilot-direction3">
        </div>
        
        {/* 4. B端事故问题汇总 */}
        <div data-section="risk-review">
          <RiskReview />
        </div>
      </div>
    </div>
  );
}

export default App;