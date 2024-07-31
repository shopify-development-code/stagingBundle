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
  const [plansData,setPlanData] = useState();
  // const [data, setData] = useState(defaultData["bundle"]);
  const [data, setData] = useState({
    bundle:defaultData["bundle"],
    volume:defaultData["volume"],
    collection:defaultData["collectionMixMatch"],
    popUp:defaultData["popUp"],
    productMixMatch:defaultData["productMixMatch"],
    buyXgetY:defaultData["buyXgetY"],
    });

    async function getCustomizationData(){
      setSpinner(true)
      const response = await postApi("/api/admin/getCustomization",{},app)
      const plans = await postApi("/api/admin/getPlans",{},app)
      if(plans.data.status == 200){
        setPlanData(plans)
      }
      if(response.data.status == 200){
        setSpinner(false)
        console.log("check response=====>>>>",response.data.response.buyXgetY);
        setData({bundle:response.data.response.bundle,
          volume:response.data.response.volume,
          collection:response.data.response.collectionMixMatch,
          productMixMatch:response.data.response.productMixMatch,
          popUp:response.data.response.popUp,
          buyXgetY:response.data.response.buyXgetY
        })
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
          plansData = {plansData}
          setBundleOption={setBundleOption}
          />
        </Spin>
      </Suspense>
    </>
  );
};
export default BundleCustomization;
