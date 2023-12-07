
import React,{Suspense,lazy} from "react";
const CreateBundle = lazy(() => import("../components/bundle/bundle"));
import {Frame, Loading} from '@shopify/polaris';

const Bundle = () => {
  return (
 
<Suspense fallback={<Frame>
        <Loading />
      </Frame>}>
      <CreateBundle/>
</Suspense>
  
  )
}

export default Bundle