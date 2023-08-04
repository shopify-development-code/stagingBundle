import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Col,
    Row,
    Divider
  } from "antd";
const Customization =()=>{

const navigate=useNavigate();

    return(
        <div className="sd-bundle-customization-wrapper">
       <div className="sd-bundle-customization-title">Customization</div>
       <div className="sd-bundle-customization-section">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="test">
        <Col className="gutter-row" span={8}>
          <div  className="sd-bundle-customization-sub-section">
            <p className="sd-bundle-bundleSection-heading-common">Design</p>
            <p>
            You can customize different design types of bundles in different displays and change the colors, typography and other items in accordance with your shop design.

            </p>
            
          </div>
        </Col>
        <Col className="gutter-row" span={16}>
            <div className="sd-bundle-customization-sub-section">
          <div className="sd-bundle-customization-card">
          <p className="sd-bundle-bundleSection-heading-common">Design</p>
          <p>
            You can customize different design types of bundles in different displays and change the colors, typography and other items in accordance with your shop design.
            </p>
           
           <Button  onClick={()=>navigate("/bundleCustomization")}>Customize</Button>
        </div>
    </div>
        </Col>  
      
      </Row>
    </div>

<Divider/>
    {/* <div className="sd-bundle-customization-section">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="test">
        <Col className="gutter-row" span={8}>
          <div  className="sd-bundle-customization-sub-section">
            <p className="sd-bundle-bundleSection-heading-common">Bundles Priority</p>
            <p>
            Customize the order of the bundles on the Product Page and Bundles Page according to the bundles priority.
            </p>
            
          </div>
        </Col>
        <Col className="gutter-row" span={16}>
            <div className="sd-bundle-customization-sub-section">
          <div className="sd-bundle-customization-card">
          <p className="sd-bundle-bundleSection-heading-common">Bundles Page</p>
          <p>
          Customize the priority of the bundles displayed on the bundles page, and you can display important bundles at the top of the screen.
            </p>
           
           <Button>Customize</Button>
        </div>
    </div>

    <div className="sd-bundle-customization-sub-section">
          <div className="sd-bundle-customization-card">
          <p className="sd-bundle-bundleSection-heading-common">Products Page</p>
          <p>
          From the list of products that have bundles, select the product you want and customize the priority in which the bundles are displayed on the page of that product.
            </p>
           
           <Button>Customize</Button>
        </div>
    </div>
        </Col>
      
      </Row>
    </div> */}



</div>
    )
}
export  default  Customization;