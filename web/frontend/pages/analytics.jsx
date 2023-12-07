
import React,{Suspense,lazy} from "react";
import {Frame, Loading} from '@shopify/polaris';

const BundleAnalytics = lazy(() => import("../components/BundleAnalytics"));
const Analytics = () => {
  return (
<Suspense fallback={<Frame>
        <Loading />
      </Frame>}>

      <BundleAnalytics/>
      </Suspense>
  )
}

export default Analytics