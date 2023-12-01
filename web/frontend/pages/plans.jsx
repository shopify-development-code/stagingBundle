import React,{Suspense,lazy} from "react";
import { Spin } from "antd";

const PricingPlan = lazy(() => import("../components/PricingPlan"));
const plans = () => {
  return (
<Suspense fallback={<Spin className="sd-lazy-loader"  spinning/>}>
    <PricingPlan/>
</Suspense>
 
  )
}

export default plans