import React, { useEffect, useState,Suspense,lazy } from "react";
// import CustomizationEditor from "../components/customization/CustomizationEditor";
const CustomizationEditor = lazy(() => import("../components/customization/CustomizationEditor"));

import defaultData from "../components/customization/defaultData.json";
import { Fullscreen } from "@shopify/app-bridge/actions";
import { useAppBridge } from "@shopify/app-bridge-react";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";
import postApi from "../components/postApi";
const BundleCustomization = () => {
  const app = useAppBridge();
 const params = useLocation()
  const fullscreen = Fullscreen.create(app);
  // const [fullScreen, setFullScreen] = useState(false);

  const [bundleOption, setBundleOption] = useState("bundle");
  const [spinner,setSpinner] = useState(false)
  // const [data, setData] = useState(defaultData["bundle"]);
  const [data, setData] = useState({
    bundle:defaultData["bundle"],
    volume:defaultData["volume"],
    collection:defaultData["collectionMixMatch"],
    popUp:defaultData["popUp"],
    });

    async function getCustomizationData(){
      setSpinner(true)
      const response = await postApi("/api/admin/getCustomization",{},app)
      if(response.data.status == 200){
        setSpinner(false)
        
         setData({bundle:response.data.response.bundle,
                  volume:response.data.response.volume,
                   collection:response.data.response.collectionMixMatch,
                  popUp:response.data.response.popUp})
      }
    }
useEffect(()=>{
getCustomizationData()
},[])

useEffect(() => {
  if(params.pathname == "/bundleCustomization"){

    fullscreen.dispatch(Fullscreen.Action.ENTER);
  }
  // setFullScreen(true);

}, [])

  return (
    <>
    <Suspense fallback={<Spin className="sd-lazy-loader"  spinning/>}>
    <Spin
    spinning={spinner}
    size="large"
    >

        <CustomizationEditor
          data={data}
          setData={setData}
          bundleOption={bundleOption}
          setBundleOption={setBundleOption}
          />
        </Spin>
          </Suspense>
         </>
  );
};
export default BundleCustomization;
