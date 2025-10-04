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
import { InternalControlOverview } from './components/InternalControlOverview';
import { AgentControlOverview } from './components/AgentControlOverview';
import { EndPage } from './components/EndPage';

        {/* 3.2 FK变化说明 */}
        <div data-section="fk-system-overview">
          <FKSystemOverview />
        </div>
        
        {/* 3.3 内控风控说明 */}
        <div data-section="internal-control-overview">
          <InternalControlOverview />
        </div>
        
        {/* 3.4 代理风控说明 */}
        <div data-section="agent-control-overview">
          <AgentControlOverview />
        </div>

        {/* 结束页 */}
        <div data-section="end-page">
          <EndPage />
        </div>