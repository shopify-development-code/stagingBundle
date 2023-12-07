import React,{Suspense,lazy} from "react";
import {Frame, Loading} from '@shopify/polaris';

const Dashboard = lazy(() => import("../components/dashboard"));

export default function HomePage() {
 return (


<Suspense fallback={<Frame>
        <Loading />
      </Frame>}>
<Dashboard/>
</Suspense>


  );
}
