import React ,{useState} from 'react'
// import { Button, Card } from 'antd'
import {Banner, BlockStack, Box, Button, Card, InlineGrid, Layout, List, Page, Text} from '@shopify/polaris';
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

   
<Page
title='Dashboard'

>
 
<BlockStack gap="400">
<Banner tone='info'  title="Can't see Bundles in store front ?">
<InlineGrid columns="1fr auto">

       <p>Click the button and Activate the Bundle App</p>
       <Button
       variant='primary'
       tone='success'
      size='slim'
           onClick={handleOpenCustomization}
            accessibilityLabel="activate"
          >Activate</Button>
</InlineGrid>
          </Banner>
          <Card>
      <Text as="h2" variant="headingLg">
      Welcome to Smart Bundles !
      </Text>
      <Box paddingBlockEnd="200">

      <Text as="h2" variant="bodyMd">
      To activate an app through the theme customizer on Shopify, follow these steps:
      </Text>
      </Box>
      <Box paddingBlockEnd="200">
          <List>
            <List.Item>Navigate to <strong>Online Store &gt; Themes</strong>  in your Shopify admin.</List.Item>
            <List.Item>Locate and click on the theme you wish to modify, then select <strong>Customize</strong>.</List.Item>
            <List.Item>Access the <strong>App embeds</strong> tab within the customization options.</List.Item>
            <List.Item>Choose the desired app embed for activation, or use the <strong>Search</strong> Search bar to find specific installed apps.</List.Item>
            <List.Item><strong>Activate</strong> the selected app embed by toggling the switch next to it.</List.Item>

          </List>
        </Box>
        <Box paddingBlockEnd="200">

<Text as="h2" variant="bodyMd">
To incorporate an app block into a product page on Shopify, follow these steps:
</Text>
</Box>
      <Box paddingBlockEnd="200">
          <List>
            <List.Item> Go to <strong>Online Store &gt; Themes</strong> in your Shopify admin.</List.Item>
            <List.Item>Locate the theme you wish to modify and click <strong>Customize</strong>.</List.Item>
            <List.Item>Navigate to the specific product page and section where you intend to include the app block.</List.Item>
            <List.Item>Select <strong>"Add block"</strong> from the sidebar.</List.Item>
            <List.Item>In the Apps section of the drop-down menu, choose the desired app block, or use the <strong>Search</strong> bar to find installed apps.</List.Item>
            <List.Item>Optionally, rearrange the block by clicking and dragging the ⋮⋮ icon to another available location on the page.
         Customize the block using any available settings if needed.</List.Item>
            <List.Item> Save your changes by clicking the <strong>Save</strong> button.</List.Item>

          </List>
        </Box>
    </Card>
          </BlockStack>
         

</Page>
  )
}

export default Dashboard



