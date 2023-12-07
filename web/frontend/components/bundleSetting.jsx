import React, { useEffect, useState } from 'react'
import { Card ,Typography,Input,Skeleton} from 'antd';
import { useAppBridge } from "@shopify/app-bridge-react";
import postApi from './postApi';
import toastNotification from './commonSections/Toast';

const BundleSetting = () => {
  const app = useAppBridge();
  const [spinner,setSpinner] = useState(false)
  const [settingData,setSettingData] = useState({
  shop:"",
  discountLabel:""
  })

  useEffect(()=>{
    getSetting()
  },[])
async function getSetting(){
  setSpinner(true)
  const response = await postApi("/api/admin/getSetting",{},app)
  if(response){
    setSpinner(false)
    if(response.data.status == 200){
    setSettingData(response.data.response)
    }
    else if(response.data.status == 500){
      toastNotification("warning","Something went wrong ! please try again","bottom")
    }
  }
}

async function handleSave(){
  setSpinner(true)
const response = await postApi("/api/admin/saveSetting",settingData,app)
if(response){
  setSpinner(false)
  if(response.data.status == 200){
    toastNotification("success","Save Successfully","bottom")
  }else{
    toastNotification("warning","Something went wrong ! please try again","bottom")
  }
}
}
function handleDiscountLabel(e){
setSettingData({...settingData,discountLabel:e.target.value})
}
  return (
 
     
     <div className='sd-bundle-setting-translation'>
      <div className='sd-bundle-bundle-setting'>
     

      <div className='sd-bundle-setting-box'>
        <Skeleton  loading={spinner}>
        <div className='sd-bundle-setting-left-heading'>
        <Typography.Title
        level={4}
        style={{
          margin: 0,
        }}
      >
        Discount
      </Typography.Title>
        
        </div>
        <div className='sd-bundle-setting-right-heading'>
        <Card className='sd-bundle-subscription-box'>
        <Typography.Title
        level={5}
        style={{
          margin: 0,
        }}
      >
        Discount label
      </Typography.Title>
      <span>
      This label appears on the discounted bundle items in your cart.
      </span>
      <Typography.Title
        level={5}
        style={{
          margin: 0,
        }}
      >
   
       <Input className='sd-setting-discount-prefix'  addonAfter="-XXXXXX" onChange={handleDiscountLabel} value={settingData.discountLabel} />
      </Typography.Title>
             </Card>
          </div>
          </Skeleton>
      </div>

      <div className='sd-bundle-setting-box'>
        <div className='sd-bundle-setting-left-heading'>

        </div>
        <div className='sd-bundle-setting-right-heading'>

          </div>
      </div>
      <div>
      <Skeleton  loading={spinner}>
        
        
        <button onClick={handleSave}>save</button>
      </Skeleton>
      </div>
      </div> 
     

   </div>

  )
}

export default BundleSetting