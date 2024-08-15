import React from 'react';
import { OverviewCard } from '../components/pricingComponents/overview-card';
import { AuthComponet } from '../components/pricingComponents/auth-component';
import { ApiPricingComponent } from '../components/pricingComponents/api-pricing';

function Pricing() {
  return (
    <div className='bg-gray-900 min-h-screen py-8'>
      <div className='max-w-4xl mx-auto spaceauto space-y-8'>
        <OverviewCard />
        <AuthComponet />
        <ApiPricingComponent/>
      </div>
    </div>
  );
}

export default Pricing;