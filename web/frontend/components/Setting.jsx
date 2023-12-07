
import React from 'react'
import { Card,Tabs} from "antd";

import BundleSetting from '../components/bundleSetting';
import Translation from '../components/translation';

import Watermark from '../components/watermark';
import ContactUs from '../components/contactUs';
import LogoHeader from '../components/logoHeader';


const Setting = () => {

  const items = [
    {
      key: '1',
      label: `Bundle Settings`,
      children: <div> 
        <BundleSetting/>
    </div>
    },
    {
      key: '2',
      label: `Translation`,
      children: <div>
         <Translation/>
      </div>,
    },
 
  ];

  const onChange = (key) => {
  };

  return (
    <>
    <LogoHeader/>
    <div className='sd-bundle-setting-container sd-margin-top'>
        <div className="sd-bundle-MoveToHome-section">
     
        
     <div className="sd-bundle-MoveToHome-arrow">


 </div>
 <div className="sd-bundle-commonHeading">Setting</div>


</div>
        <Card className='sd-bundle-setting-card-box'
        >
   
     

<Tabs defaultActiveKey="1" items={items} onChange={onChange}  />

           
        </Card>
        <Watermark/>
        <ContactUs/>
    </div>
    </>
  )
}

export default Setting;