import React from 'react';
import { OverviewCard } from '../components/pricePage-components/overview-card';
import { AuthComponet } from '../components/pricePage-components/auth-component';
import { ApiPricingComponent } from '../components/pricePage-components/api-pricing';
import TutorialComponet from '../components/pricePage-components/tutorial';
import { EndpointsComponent } from '../components/pricePage-components/endpoint-componet';
import CodeExample from '../components/pricePage-components/code-example';

function Pricing() {
  return (
    <div className='bg-gray-900 min-h-screen py-8'>
      
      <div className='max-w-4xl mx-auto space-y-8'>
        <section id="overview">
          <OverviewCard />
        </section>
        <section id="authentication">
          <AuthComponet />
        </section>
        <section id="endpoints">
          <EndpointsComponent />
        </section>
        <section id="tutorial">
          <TutorialComponet />
        </section>
        <section id="code-examples">
          <CodeExample />
        </section>
        <section id="pricing">
          <ApiPricingComponent />
        </section>
      </div>
    </div>
  );
}

export default Pricing;