
import React,{Suspense,lazy} from "react";
import { Spin } from "antd";

const BundleAnalytics = lazy(() => import("../components/BundleAnalytics"));
const Analytics = () => {
  return (
<Suspense fallback={<Spin className="sd-lazy-loader"  spinning/>}>

      <BundleAnalytics/>
      </Suspense>
  )
}

export default Analytics