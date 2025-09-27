@@ .. @@
 import React from 'react';
-import { EssentialProblemsAndSolutions } from './EssentialProblemsAndSolutions';
 import { SystemTransformationRhythm } from './SystemTransformationRhythm';
+import { FKSystemOverview } from './FKSystemOverview';
 import { PilotResultsPresentation } from './PilotResultsPresentation';

 export const BusinessOverview = () => {
@@ .. @@
       </div>

-      {/* 一、体系变革节奏 */}
+      {/* 一、FK变革节奏 */}
       <SystemTransformationRhythm />
       
-      {/* 二、试点成果说明 */}
+      {/* 二、FK体系概览 */}
+      <FKSystemOverview />
+      
+      {/* 三、试点成果说明 */}
       <PilotResultsPresentation />