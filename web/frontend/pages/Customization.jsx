import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Fullscreen } from "@shopify/app-bridge/actions";
import { useAppBridge } from "@shopify/app-bridge-react";
import Watermark from "../components/watermark";
import {
    Button,
    Col,
    Row,
    Divider
  } from "antd";
import ContactUs from "../components/contactUs";
import LogoHeader from "../components/logoHeader";

const Customization =()=>{
const app = useAppBridge();

  const params = useLocation()
  const fullscreen = Fullscreen.create(app);
const navigate=useNavigate();

useEffect(() => {
  if(params.pathname == "/customization"){

    fullscreen.dispatch(Fullscreen.Action.EXIT);
  }
 

}, [])
    return(
      <>
      <LogoHeader/>
        <div className="sd-bundle-customization-wrapper sd-margin-top">
       <div className="sd-bundle-customization-title">Customization</div>
       <div className="sd-bundle-customization-section">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="test">
        <Col className="gutter-row" span={8}>
          <div  className="sd-bundle-customization-sub-section">
            <p className="sd-bundle-bundleSection-heading-common">Design</p>
            <p>
           
You have the option to customize various design types for your bundles in different displays. This includes the ability to change colors, typography, and other elements to match your shop's design.

            </p>
            
          </div>
        </Col>
        <Col className="gutter-row" span={16}>
            <div className="sd-bundle-customization-sub-section">
          <div className="sd-bundle-customization-card">
          <p className="sd-bundle-bundleSection-heading-common">Design</p>
          <p>
          To access the customization screen, simply click on the "Customization" button. This will take you to the interface where you can personalize your bundles' appearance.
            </p>
           
           <Button  onClick={()=>navigate("/bundleCustomization")}>Customize</Button>
        </div>
    </div>
        </Col>  
      
      </Row>
    </div>

<Divider/>
   


<Watermark/>
<ContactUs/>
</div>
</>
    )
}
export  default  Customization;