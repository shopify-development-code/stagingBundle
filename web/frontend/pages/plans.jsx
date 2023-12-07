import React,{Suspense,lazy} from "react";
import {Frame, Loading} from '@shopify/polaris';

const PricingPlan = lazy(() => import("../components/PricingPlan"));
const plans = () => {
  return (
<Suspense fallback={<Frame>
        <Loading />
      </Frame>}>
    <PricingPlan/>
</Suspense>
 
  )
}

export default plans