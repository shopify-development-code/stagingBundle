import {useState} from 'react'
import { Button, Card,Modal } from 'antd'
import {MediaCard,VideoThumbnail} from '@shopify/polaris';
import {useAPI} from "../components/shop"
import thumbnail1 from "../assets/enableAppThumbs.png"
import thumbnail2 from "../assets/addProductThumbs.png"
const Dashboard = () => {
  const {shop,themeId} = useAPI()
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

function handleOpenCustomization () {
  window.open(
    `https://${shop}/admin/themes/${themeId}/editor?context=apps`
  );
}
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
    extra={<Button onClick={handleOpenCustomization}>Activate</Button>}
    >
       
        <MediaCard
        title="How to enable app from theme customizer?"
        description={<div>
          <li>1. From your Shopify admin, go to <strong>Online Store</strong>  &gt; <strong>Themes</strong> .</li>
          <li>2. Find the theme that you want to edit, and then click <strong>Customize</strong> .</li>
          <li>3. Click the <strong>App embeds</strong> tab.</li>
          <li>4. Select the app embed that you want to activate or click the <strong>Search</strong> bar and enter a search term to search through your installed apps.</li>
          <li>5. Beside the app embed that you want to activate, click the toggle to activate it.</li>
        </div>}
        size='small'
      >
        <VideoThumbnail
          videoLength={15}
          thumbnailUrl={thumbnail1}
          onClick={()=>setOpen(true)}
        
        />
      </MediaCard>
      <MediaCard
      title="How to add app block to product page?"
      description={<div>
        <li>1. From your Shopify admin, go to <strong>Online Store</strong>  &gt; <strong>Themes</strong> .</li>
        <li>2. Find the theme that you want to edit, and then click <strong>Customize</strong> .</li>
        <li>3. Navigate to the product page and section where you want to add the app block.</li>
        <li>4. On the sidebar, click <strong>Add block</strong>.</li>
        <li>5. From the drop-down menu, in the <strong>Apps</strong> section, select the app block that you want to add to the section or click the <strong>Search</strong> bar and enter a search term to search through your installed apps.</li>
        <li>6. Optional: Click and drag the ⋮⋮ icon to move the block to another available location on the page. You can also customize the block using any available settings.</li>
        <li>7. Click <strong>Save..</strong></li>
        
      </div>}
      size='small'

    >
      <VideoThumbnail
        videoLength={21}
        thumbnailUrl={thumbnail2}
        onClick={()=>setOpen1(true)}
      />
    </MediaCard>



    
    </Card>
   
 </div>

      <Modal
      className='sd-bundle-video-modal'
        footer={null}
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={1200}
      >
      
       <video width="100%" controls name="media" >
        <source  src='https://cdn.shopify.com/videos/c/o/v/e7432e9d283242099a6ba5e653e31e1c.mp4' type="video/mp4"/>
       </video>
      </Modal>
      <Modal
      className='sd-bundle-video-modal'
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



