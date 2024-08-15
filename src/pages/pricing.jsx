import React from 'react';
import { OverviewCard } from '../components/pricingComponents/overview-card';
import { AuthComponet } from '../components/pricingComponents/auth-component';

function Pricing() {
  return (
    <div className='bg-gray-900 min-h-screen py-8'>
      <div className='max-w-4xl mx-auto spaceauto space-y-8'>
        <OverviewCard />
        <AuthComponet />
      </div>
    </div>
  );
}

export default Pricing;