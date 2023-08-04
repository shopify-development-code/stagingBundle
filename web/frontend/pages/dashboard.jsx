import React from 'react'
import { Button, Card } from 'antd'


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

    </Card>
 </div>

    </div>
  )
}

export default Dashboard