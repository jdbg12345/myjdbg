import React from 'react';
import { BusinessHeader } from './business/BusinessHeader';
import { BusinessDirections } from './business/BusinessDirections';
import { ImprovementStrategies } from './business/ImprovementStrategies';
import { ExpectedBenefits } from './business/ExpectedBenefits';
import { ImplementationPlan } from './business/ImplementationPlan';

export const BusinessOverview = () => {
  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      <BusinessHeader />
      <BusinessDirections />
      <ImprovementStrategies />
      <ExpectedBenefits />
      <ImplementationPlan />
      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX</div>
      </div>
    </div>
  );
};