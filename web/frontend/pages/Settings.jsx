
import React,{Suspense,lazy} from "react";
const Setting = lazy(() => import("../components/Setting"));

import { Spin } from "antd";
const Settings = () => {
  return (
    <Suspense fallback={<Spin className="sd-lazy-loader"  spinning/>}>

      <Setting/>
    </Suspense>

   
  )
}

export default Settings