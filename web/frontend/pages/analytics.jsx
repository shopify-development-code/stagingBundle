import React, {useState, useEffect } from 'react'
import { Card,Tabs, Col, Row,Table,Spin,Switch } from 'antd'
import postApi from '../components/postApi'
import { useAppBridge } from '@shopify/app-bridge-react'
import BoatLoader from '../components/BoatLoader'
import { Icon, Thumbnail } from "@shopify/polaris";
import { Button } from '@shopify/polaris'
import { useAPI } from '../components/shop'

import {AnalyticsMajor,QuickSaleMajor,BehaviorMajor,ViewMajor} from '@shopify/polaris-icons';
const Analytics = () => {

  const {currencyCode} = useAPI()
  const [spinner,setSpinner] = useState(false) 
const [analyticsData,setAnalyticsData] = useState([])
const [salesValue,setSalesValue] = useState(0)
const [soldBundle,setSoldBundle] = useState(0)
const [bundleClicks,setBundleClicks] = useState(0)
const [bundleViews,setBundleViews] = useState(0)
  const app = useAppBridge();

async function getBundleAnalyticsData(){
  setSpinner(true)
  const response = await postApi("/api/admin/getAnalyticsData", {}, app);
 if(response.data.status == 200){
  setSpinner(false)
  let data = response.data.response
  bundleclickSum(data)
  bundleViewSum(data)
  bundleSalesSum(data)
  bundleSoldSum(data)
  setAnalyticsData(data)
 
 }else if(response.data.status == 500){
  setSpinner(false)

 }

}
function bundleSoldSum(data){
  let sum = 0;
  data.forEach((number) => {
    sum += number.analytics.bundleSold;
  });
  setSoldBundle(sum)
}
function bundleSalesSum(data){
  let sum = 0;
  data.forEach((number) => {
    sum += number.analytics.bundleSalesValue;
  });
  setSalesValue(sum)
}
function bundleclickSum(data){
  let sum = 0;
  data.forEach((number) => {
    sum += number.analytics.bundleClick;
  });
  setBundleClicks(sum)
}
function bundleViewSum(data){
  let sum = 0;
  data.forEach((number) => {
    sum += number.analytics.bundleViews;
  });
  setBundleViews(sum)
}
useEffect(() => {
  getBundleAnalyticsData()
}, [])

const handleAnalyticsReload = ()=>{
  getBundleAnalyticsData()
}


    const onChange = (key) => {
      };

      const data = analyticsData.map((item, index) => ({
        
        bundle:( <div className="sd-bundle-dashboard-img-box">
        {item.bundleDetail.products.map((ele) => {
          return (
            <div className="sd-bundle-dashboard-img">
              {/* <img src={ele?.images ? ele.images[0].originalSrc : ele?.image ? ele.image.originalSrc:""} alt="" /> */}
              <Thumbnail
                source={
                  ele?.images
                    ? ele.images[0]?.originalSrc
                    : ele?.image
                    ? ele.image?.originalSrc
                    : ""
                }
                size="small"
                alt="products thumbnails"
              />
            </div>
          );
        })}{" "}
      </div>),
      bundleName :(  <a  className="sd-bundle-list-name">
      {item.name}
      
    </a>),
status:(
  <div>
    {item.status == "active" ? <div className='sd-analytics-status-active'>Active</div> : <div className='sd-analytics-status-draft'>Draft</div>}
  {/* <Switch
    defaultChecked
    checked={item.status == "active" ? true : false}
   
  /> */}
</div>
),
salesValue:(<div className='sd-analytics-salesValues-div'>{currencyCode}{item.analytics.bundleSalesValue}</div>),
SalesNumber:(<div className='sd-analytics-salesNumber-div'>{item.analytics.bundleSold}</div>),
Clicks:(<div className='sd-analytics-click-div'>{item.analytics.bundleClick}</div>),
Views:(<div className='sd-analytics-views-div'>{item.analytics.bundleViews}</div>)

      }))

      const columns = [
        {
          title: "Bundle items ",
          dataIndex: "bundle",
        },
        {
          title: "Name",
          dataIndex: "bundleName",
        },
        {
          title: "Status",
          dataIndex: "status",
        },
        {
          title: "sales value",
          dataIndex: "salesValue",
        },
        {
          title: "Sales number",
          dataIndex: "SalesNumber",
        },
        {
            title: "Clicks",
            dataIndex: "Clicks",
          },
          {
            title: "Views",
            dataIndex: "Views",
          },
      ];

      const orderColumns =[
        {
            title: "Order",
            dataIndex: "order",
          },
          {
            title: "Order date",
            dataIndex: "orderDate",
          },
          {
            title: "Customer",
            dataIndex: "customer",
          },
          {
            title: "Items",
            dataIndex: "items",
          },
          {
            title: "Bundle's total sales",
            dataIndex: "bundleTotalsales	",
          },
          {
              title: "Order's total sales",
              dataIndex: "OrderTotalSales",
            },
          
      ]

      
      const items = [
        {
          key: '1',
          label: `On Bundle`,
          children: <div className='sd-bundle-analytics-card-boxMain'> <Row gutter={16}>
          <Col span={6}>
            <Card className='sd-bundle-analytics-card-box' bordered={true}>
              <div className='sd-bundle-card-inner-main'>
              <div className='sd-bundle-card-inner-content'>
              <h3>Sales value on bundles</h3>
              <p> {currencyCode} {salesValue} </p>
              </div>
              <div className='sd-bundle-card-inner-icon'>
              <Icon
              source={AnalyticsMajor}
             color="base"
              />
              </div>
              </div>
           
            
          
            </Card>
          </Col>
          <Col span={6}>
            <Card  className='sd-bundle-analytics-card-box'  bordered={true}>
            <div className='sd-bundle-card-inner-main'>
            <div className='sd-bundle-card-inner-content'>
              <h3>Number of sold bundles</h3>
             <p>{soldBundle}</p> 
              </div>
              <div className='sd-bundle-card-inner-icon'>
              <Icon
  source={QuickSaleMajor}
  color="base"
/>
              </div>
              </div>
             
            </Card>
          </Col>
          <Col span={6}>
            <Card className='sd-bundle-analytics-card-box'  bordered={true}>
            <div className='sd-bundle-card-inner-main'>
            <div className='sd-bundle-card-inner-content'>
              <h3>Bundles clicks</h3>
              <p>{bundleClicks}</p>
              </div>
              <div className='sd-bundle-card-inner-icon'>
              <Icon
  source={BehaviorMajor}
  color="base"
/>
              </div>
              </div>
              
            </Card>
          </Col>
          <Col span={6}>
            <Card className='sd-bundle-analytics-card-box'  bordered={true}>
            <div className='sd-bundle-card-inner-main'>
            <div className='sd-bundle-card-inner-content'>
              <h3>Bundles views</h3>
             <p> {bundleViews}</p>
              </div>
              <div className='sd-bundle-card-inner-icon'>
              <Icon
  source={ViewMajor}
  color="base"
/>
              </div>
              </div>
             
            </Card>
          </Col>
        </Row>  
        <div className="sd-bundle-card-data-box">
        <Card
          className="sd-bundle-analytics-data-box"
        >
                  
           <Table
             columns={columns}
             dataSource={data}
           />
        
        </Card>
      </div>
        </div>
        },
      //   {
      //     key: '2',
      //     label: `On Order`,
      //     children: <div>
      //        <Row gutter={16}>
      //     <Col span={12}>
      //       <Card className='sd-bundle-analytics-card-box' title="Number of orders that include bundles" bordered={true}>
      //        Rs.0
      //       </Card>
      //     </Col>
      //     <Col span={12}>
      //       <Card  className='sd-bundle-analytics-card-box' title="Number of bundles" bordered={true}>
      //        0
      //       </Card>
      //     </Col>
          
      //   </Row>
      //   <div className="sd-bundle-card-data-box">
      //   <Card
      //     className="sd-bundle-analytics-data-box"
      //   >
                  
      //      <Table
      //        columns={orderColumns}
      //       //  dataSource={data}
      //      />
        
      //   </Card>
      // </div>
      //     </div>,
      //   },
     
      ];

      

       
  return (
    <Spin spinning={spinner}
    indicator={<BoatLoader/>}
    size="large"> 
    <div>
         <div className="sd-bundle-MoveToHome-section">
     
        
     <div className="sd-bundle-MoveToHome-arrow">


 </div>
 <div className="sd-bundle-commonHeading">Analytics</div>
</div>

 <div className='sd-bundle-analytics-tab-box'>
  <Button onClick={handleAnalyticsReload}>Reload</Button>
<Tabs defaultActiveKey="1" items={items} onChange={onChange}  />


</div>
    </div>
    </Spin>
  )
}

export default Analytics