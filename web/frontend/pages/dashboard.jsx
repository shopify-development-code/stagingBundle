import React from 'react'
import { Button, Card } from 'antd'
import {MediaCard,VideoThumbnail} from '@shopify/polaris';
import enableAppGif from "../assets/enableAppGif.gif";
const Dashboard = () => {
  return (
    <div>
         <div className="sd-bundle-MoveToHome-section">
     
        
     <div className="sd-bundle-MoveToHome-arrow">
     {/* <Popconfirm
title="Discard Bundle"
onConfirm={() => navigate("/")}
description="Are you sure to discard this bundle?"
okText="Yes"
cancelText="No"
> */}
 
{/* </Popconfirm> */}



 </div>
 <div className="sd-bundle-commonHeading">Dashboard</div>
</div>
<div>
    <Card
    title= "Can't see Bundles in store front. Activate the Bundle App"
    className='sd-bundle-contact-box'
    extra={<Button>activate</Button>}
    >
       {/* <div>

      <div>How to enable app from theme customizer?</div>
      <video width='100%' src="https://cdn.shopify.com/videos/c/o/v/e7432e9d283242099a6ba5e653e31e1c.mp4" type="video/mp4" controls></video>
   
       </div> */}
    
    </Card>
    
 </div>

    </div>
  )
}

export default Dashboard