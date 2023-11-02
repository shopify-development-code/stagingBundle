import React from "react";
import { Card, Avatar, Button} from "antd";
import { MediaCard } from "@shopify/polaris";
import { Redirect } from "@shopify/app-bridge/actions";
import createApp from "@shopify/app-bridge";
const { Meta } = Card;
// const config = {
//   // The client ID provided for your application in the Partner Dashboard.
//   apiKey: process.env.SHOPIFY_API_KEY,
//   // The host of the specific shop that's embedding your app. This value is provided by Shopify as a URL query parameter that's appended to your application URL when your app is loaded inside the Shopify admin.
//   host: new URLSearchParams(location.search).get("host"),
//   forceRedirect: true
// };
const RecommendedApp = () => {
  // console.log(process.env.SHOPIFY_API_KEY)

  // const redirectApp = createApp(config);
  // const redirect = Redirect.create(redirectApp);
  return (
    <Card
      title="Recommended apps & themes "
      className="sd-bundle-contact-box recommended-app-section"
      // extra={<a    onClick={() => {
      //   redirect.dispatch(Redirect.Action.REMOTE, {
      //     url: "https://apps.shopify.com/partners/shine-dezign-infonet",
      //     newContext: true,
      //   })
      // }} >More apps</a>}
    >
      <div className="sd-bundle-meta-card-main">
        <div className="sd-bundle-meta-card">
          <a
            onClick={() => {
              redirect.dispatch(Redirect.Action.REMOTE, {
                url: "https://apps.shopify.com/advanced-pre-order",
                newContext: true,
              });
            }}
          >
            <Meta
              avatar={
                <Avatar
                  shape="square"
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 75, xxl: 75 }}
                  src="https://cdn.shopify.com/app-store/listing_images/23cac5f53ef84a1a64710d72ac393f76/icon/CODB0en_v_QCEAE=.png"
                />
              }
              title="Advanced PreOrder‑Partial Pay"
              description="Enhance customer experience with Pre-Order and Partial Payment"
            />
          </a>
        </div>
        <div className="sd-bundle-meta-card">
          <a
            onClick={() => {
              redirect.dispatch(Redirect.Action.REMOTE, {
                url: "https://apps.shopify.com/advanced-subscription-pro",
                newContext: true,
              });
            }}
          >
            <Meta
              avatar={
                <Avatar
                  shape="square"
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 75, xxl: 75 }}
                  src="https://cdn.shopify.com/app-store/listing_images/afd435f009f75672cc511615763db00d/icon/CMvYtb_vpfsCEAE=.png"
                />
              }
              title="Advanced Subscriptions App"
              description="Offers seamless experience for recurring payments and Orders"
            />
          </a>
        </div>
        <div className="sd-bundle-meta-card">
          <a
            onClick={() => {
              redirect.dispatch(Redirect.Action.REMOTE, {
                url: "https://apps.shopify.com/genie-product-options",
                newContext: true,
              });
            }}
          >
            <Meta
              avatar={
                <Avatar
                  shape="square"
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 75, xxl: 75 }}
                  src="https://cdn.shopify.com/app-store/listing_images/20cd9a3891f8f4e0ccc45ef261a9a23c/icon/COj9t7ba8fwCEAE=.png"
                />
              }
              title="Genie Product Options"
              description="Unlimited number of Product Infinite Options & Variant options"
            />
          </a>
        </div>
        <div className="sd-bundle-meta-card">
          <a
            onClick={() => {
              redirect.dispatch(Redirect.Action.REMOTE, {
                url: "https://apps.shopify.com/advanced-gst",
                newContext: true,
              });
            }}
          >
            <Meta
              avatar={
                <Avatar
                  shape="square"
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 75, xxl: 75 }}
                  src="https://cdn.shopify.com/app-store/listing_images/0cba46a9647ff20ff1c50ecbcd693787/icon/CJGJ1r-oivACEAE=.png"
                />
              }
              title="Advanced Invoices/GST App"
              description="Easy app designed for your businesses all across the globe to automatically generate invoices."
            />
          </a>
        </div>
        <div className="sd-bundle-meta-card-theme">
          <MediaCard
            title="Yuva"
            primaryAction={{
              content: "Learn about getting started",
              onAction: () => {redirect.dispatch(Redirect.Action.REMOTE, {
                url: "https://themes.shopify.com/themes/yuva/styles/amaze",
                newContext: true,
              })},
            }}
            description="Modern yet elegant theme to best showcase your product catalog."
          >
            <img
              alt=""
              width="100%"
              height="100%"
              style={{
                objectFit: "cover",
                objectPosition: "top center",
              }}
              src="https://cdn.shopify.com/theme-store/7lbke6ae9l6wchu6hqml4ilcg5r9.jpg"
            />
          </MediaCard>
       
        </div>
        <div className="sd-bundle-meta-card-theme">
          <MediaCard
            title="Fame"
            primaryAction={{
              content: "Learn about getting started",
              onAction: () => {redirect.dispatch(Redirect.Action.REMOTE, {
                url: "https://themes.shopify.com/themes/fame/styles/dark",
                newContext: true,
              })},
            }}
            description="Powerfully evoking emotion through creativity."
          >
            <img
              alt=""
              width="100%"
              height="100%"
              style={{
                objectFit: "cover",
                objectPosition: "top center",
              }}
              src="https://cdn.shopify.com/theme-store/xtrxektwput93wofkwxiy4o4q0zd.jpg"
            />
          </MediaCard>
         
        </div>
      </div>
    </Card>
  );
};

export default RecommendedApp;
