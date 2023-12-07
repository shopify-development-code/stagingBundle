import React ,{useState} from 'react'
import { Button, Card } from 'antd'
import {MediaCard} from '@shopify/polaris';
import {useAPI} from "../components/shop"

import Watermark from './watermark';
import RecommendedApp from './recommendedApp';
import LogoHeader from './logoHeader';
import ContactUs from './contactUs';

const Dashboard = () => {

  const {shop,themeId} = useAPI()
  const [playVideo,setPlayVideo] = useState(false)
function handleOpenCustomization () {
  window.open(
    `https://${shop}/admin/themes/${themeId}/editor?context=apps`
  );
}
  return (
    <>
    <LogoHeader/>
  <div>
         <div className="sd-bundle-MoveToHome-section sd-margin-top">
     
        
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
     
      title="Welcome to Smart Bundles !"
portrait
      description={<><div className='Polaris-Stack Polaris-Stack--vertical Polaris-Stack--spacingTight'>
       <div className='Polaris-Heading'> To activate an app through the theme customizer on Shopify, follow these steps:</div>

       <p>1. Navigate to <strong>Online Store &gt; Themes</strong>  in your Shopify admin.</p>
       <p>2. Locate and click on the theme you wish to modify, then select <strong>Customize</strong>.</p>
       <p>3. Access the <strong>App embeds</strong> tab within the customization options.</p>
       <p>4. Choose the desired app embed for activation, or use the <strong>Search</strong> Search bar to find specific installed apps.</p>
       <p>5. <strong>Activate</strong>Activate the selected app embed by toggling the switch next to it.</p>
        </div> 
        <br />
        <div className='Polaris-Stack Polaris-Stack--vertical Polaris-Stack--spacingTight'>
        <h3 className='Polaris-Heading'>  To incorporate an app block into a product page on Shopify, follow these steps:</h3>

        <p> 1. Go to <strong>Online Store &gt; Themes</strong> in your Shopify admin.</p>
        <p> 2. Locate the theme you wish to modify and click <strong>Customize</strong>.</p>
        <p> 3. Navigate to the specific product page and section where you intend to include the app block.</p>
        <p> 4. Select <strong>"Add block"</strong> from the sidebar.</p>
        <p> 5. In the Apps section of the drop-down menu, choose the desired app block, or use the <strong>Search</strong> bar to find installed apps.</p>
        <p> 6. Optionally, rearrange the block by clicking and dragging the ⋮⋮ icon to another available location on the page.</p>
         <p>   Customize the block using any available settings if needed.</p>
        <p> 7. Save your changes by clicking the <strong>Save</strong> button.</p>
          </div></>}
      size='small'
    >

    
        
    
    </MediaCard>

    
    </Card>
   
 </div>

       <RecommendedApp/>
 

      <Watermark/>
      <ContactUs/>
    </div>
    </>
  )
}

export default Dashboard



