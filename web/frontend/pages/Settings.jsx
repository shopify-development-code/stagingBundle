
import React,{Suspense,lazy} from "react";
const Setting = lazy(() => import("../components/Setting"));
import {Frame, Loading} from '@shopify/polaris';

const Settings = () => {
  return (
    <Suspense fallback={<Frame>
      <Loading />
    </Frame>}>

      <Setting/>
    </Suspense>

   
  )
}

export default Settings