import React ,{useState} from 'react'
import { Button, Card } from 'antd'
import {MediaCard} from '@shopify/polaris';
import {useAPI} from "../components/shop"
import { useAppBridge } from '@shopify/app-bridge-react';
import Watermark from './watermark';
import RecommendedApp from './recommendedApp';
import LogoHeader from './logoHeader';
import ContactUs from './contactUs';

const Dashboard = () => {
const app= useAppBridge();
const shop= app.config.shop;
  const {themeId} = useAPI()
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
      description={<>
        <div className='Polaris-Stack Polaris-Stack--vertical Polaris-Stack--spacingTight'>
          <div className='sd-dashboard-Polaris-Heading'>
            To activate an app through the theme customizer on Shopify, follow these steps:
          </div>
      
          <ol className="sd-dashboard-custom-list">
            <li>Navigate to <strong>Online Store &gt; Themes</strong> in your Shopify admin.</li>
            <li>Locate and click on the theme you wish to modify, then select <strong>Customize</strong>.</li>
            <li>Access the <strong>App embeds</strong> tab within the customization options.</li>
            <li>Choose the desired app embed for activation, or use the <strong>Search</strong> bar to find specific installed apps.</li>
            <li><strong>Activate</strong> the selected app embed by toggling the switch next to it.</li>
          </ol>
        </div>
        <br />
        <div className='Polaris-Stack Polaris-Stack--vertical Polaris-Stack--spacingTight'>
          <h3 className='sd-dashboard-Polaris-Heading'>
            To incorporate an app block into a product page on Shopify, follow these steps:
          </h3>
      
          <ol className="sd-dashboard-custom-list">
            <li>Go to <strong>Online Store &gt; Themes</strong> in your Shopify admin.</li>
            <li>Locate the theme you wish to modify and click <strong>Customize</strong>.</li>
            <li>Navigate to the specific product page and section where you intend to include the app block.</li>
            <li>Select <strong>"Add block"</strong> from the sidebar.</li>
            <li>In the Apps section of the drop-down menu, choose the desired app block, or use the <strong>Search</strong> bar to find installed apps.</li>
            <li>Optionally, rearrange the block by clicking and dragging the ⋮⋮ icon to another available location on the page.</li>
            <li>Customize the block using any available settings if needed.</li>
            <li>Save your changes by clicking the <strong>Save</strong> button.</li>
          </ol>
        </div>
      </>}
      size='medium'
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



