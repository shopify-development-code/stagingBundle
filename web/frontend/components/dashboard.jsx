import React ,{useState,Suspense,lazy} from 'react'
import { Button, Card } from 'antd'
import {MediaCard,VideoThumbnail} from '@shopify/polaris';
import {useAPI} from "../components/shop"

const Watermark = lazy(() => import('./watermark'));
const RecommendedApp = lazy(() => import('./recommendedApp'));
const Dashboard = () => {

  const {shop,themeId} = useAPI()
  const [playVideo,setPlayVideo] = useState(false)
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
     
      title="Welcome to Smart Bundles !"
portrait
      description="This video provides a step-by-step guide on activating App Block and enabling your app's functionality in your store. Follow along to easily set up and enhance your app's performance."
      // popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
      size='small'
    >

     {
      playVideo == true ?
      <iframe loading='lazy' width="100%" height="600" src="https://cdn.shopify.com/videos/c/o/v/6d748a8aa914485b9c9635c4c9020949.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      :  <VideoThumbnail
       
        videoLength={35}
        thumbnailUrl="https://cdn.shopify.com/s/files/1/0801/7264/6691/files/MicrosoftTeams-image_3.png?v=1695627080"
        onClick={() => setPlayVideo(true)}
      />
      
     }
        
    
    </MediaCard>

    
    </Card>
   
 </div>

<Suspense fallback={<div></div>}>
       <RecommendedApp/>
       </Suspense>
<Suspense fallback={<div></div>}>
      <Watermark/>
</Suspense>

    </div>
  
  )
}

export default Dashboard



