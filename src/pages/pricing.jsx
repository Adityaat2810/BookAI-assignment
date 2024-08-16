import React from 'react';
import { OverviewCard } from '../components/pricingComponents/overview-card';
import { AuthComponet } from '../components/pricingComponents/auth-component';
import { ApiPricingComponent } from '../components/pricingComponents/api-pricing';
import TutorialComponet from '../components/pricingComponents/tutorial';
import { EndpointsComponent } from '../components/pricingComponents/endpoint-componet';
import CodeExample from '../components/pricingComponents/code-example';

function Pricing() {
  return (
    <div className='bg-gray-900 min-h-screen py-8'>
      <div className='max-w-4xl mx-auto spaceauto space-y-8'>
        <OverviewCard />
        <AuthComponet />
        <EndpointsComponent/>
        <TutorialComponet/>
        <CodeExample/>
        <ApiPricingComponent/>
      </div>
    </div>
  );
}

export default Pricing;