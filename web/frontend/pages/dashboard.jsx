import {useState, useCallback} from 'react'
import { Button, Card,Modal } from 'antd'
import {MediaCard,VideoThumbnail} from '@shopify/polaris';
import enableAppGif from "../assets/enableAppGif.gif";
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
 


  return (
    <div>
         <div className="sd-bundle-MoveToHome-section">
     
        
     <div className="sd-bundle-MoveToHome-arrow">

 </div>
 <div className="sd-bundle-commonHeading">Dashboard</div>
</div>
<div>
    <Card
    title= "Can't see Bundles in store front. Activate the Bundle App"
    className='sd-bundle-contact-box'
    extra={<Button>activate</Button>}
    >
       
        <MediaCard
        title="How to enable app from theme customizer?"
        size='small'
      >
        <VideoThumbnail
          videoLength={15}
          thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
          onClick={()=>setOpen(true)}
        
        />
      </MediaCard>
      <MediaCard
      title="How to add app block to product page?"
      size='small'

    >
      <VideoThumbnail
        videoLength={21}
        thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
        onClick={()=>setOpen1(true)}
      />
    </MediaCard>



    
    </Card>
   
 </div>
 <Button type="primary" onClick={() => setOpen(true)}>
       
      </Button>
      <Modal
        footer={null}
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={1200}
      >
      
       <video width="100%" controls  src='https://cdn.shopify.com/videos/c/o/v/e7432e9d283242099a6ba5e653e31e1c.mp4'/>
      </Modal>
      <Modal
        footer={null}
        centered
        open={open1}
        onCancel={() => setOpen1(false)}
        width={1200}
      >
      
       <video width="100%" controls  src='https://cdn.shopify.com/videos/c/o/v/eb22e191ac75405eb12e40c55d64c33f.mp4'/>
      </Modal>
    </div>
  )
}

export default Dashboard



