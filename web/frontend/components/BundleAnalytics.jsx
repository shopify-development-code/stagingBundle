
import React, { useState, useEffect } from 'react'
import { Card, Tabs, Col, Row, Table, Skeleton } from 'antd'
import postApi from '../components/postApi'
import { useAppBridge } from '@shopify/app-bridge-react'
import { Icon, Thumbnail } from "@shopify/polaris";
import { Button } from '@shopify/polaris'
import { useAPI } from '../components/shop'
import noProductImg from "../assets/NoProductImage.png"
import { showAmountWithCurrency } from '../components/showCurrencyFormat'
import { ChartVerticalFilledIcon, CartSaleIcon, LightbulbIcon, ViewIcon } from '@shopify/polaris-icons';
import Watermark from '../components/watermark'
import ContactUs from '../components/contactUs'
import allProductsImg from "../assets/all_products.png";
import LogoHeader from '../components/logoHeader'
const BundleAnalytics = () => {

  const { currencyCode } = useAPI()
  const [spinner, setSpinner] = useState(false)
  const [analyticsData, setAnalyticsData] = useState([])
  const [salesValue, setSalesValue] = useState(0)
  const [soldBundle, setSoldBundle] = useState(0)
  const [bundleClicks, setBundleClicks] = useState(0)
  const [bundleViews, setBundleViews] = useState(0)
  const [btnDisabled, setBtnDisabled] = useState(false)
  const app = useAppBridge();

  async function getBundleAnalyticsData() {
    setSpinner(true)
    setBtnDisabled(true)
    const response = await postApi("/api/admin/getAnalyticsData", {}, app);
    if (response.data.status == 200) {
      setSpinner(false)
      setBtnDisabled(false)

      let data = response.data.response
      // console.log("data", data)
      bundleclickSum(data)
      bundleViewSum(data)
      bundleSalesSum(data)
      bundleSoldSum(data)
      setAnalyticsData(data)

    } else if (response.data.status == 500) {
      setSpinner(false)
      setBtnDisabled(false)


    }

  }
  function bundleSoldSum(data) {
    let sum = 0;
    data.forEach((number) => {
      sum += number.analytics.bundleSold;
    });
    setSoldBundle(sum)
  }
  function bundleSalesSum(data) {
    let sum = 0;
    data.forEach((number) => {
      sum += number.analytics.bundleSalesValue;
    });
    setSalesValue(sum)
  }
  function bundleclickSum(data) {
    let sum = 0;
    data.forEach((number) => {
      sum += number.analytics.bundleClick;
    });
    setBundleClicks(sum)
  }
  function bundleViewSum(data) {
    let sum = 0;
    data.forEach((number) => {
      sum += number.analytics.bundleViews;
    });
    setBundleViews(sum)
  }
  useEffect(() => {
    getBundleAnalyticsData()
  }, [])

  const handleAnalyticsReload = () => {
    getBundleAnalyticsData()
  }


  const onChange = (key) => {
  };

  const data = analyticsData.map((item, index) => ({

    bundle: (
      <div key={index} className="sd-bundle-dashboard-img-box">
        {item.bundleDetail.discountedProductType == "all_products" ? (
          <Thumbnail
            source={allProductsImg}
            size="small"
            alt="products thumbnails"
          />
        ) : null}
        {(item.type == "bxgy"
          ? [...item.bundleDetail.xproducts, ...item.bundleDetail.yproducts]
          : item.type == "fbt" &&  item.bundleDetail?.discountedProductType == "specific_product"
            ? [
                ...item.bundleDetail?.mainProducts,
                ...item.bundleDetail?.offeredProducts,
              ]
            : item.bundleDetail?.products
        )?.slice(0,3).map((ele, index) => {
          return (
            <div key={index} className="sd-bundle-dashboard-img">
              {/* <img src={ele?.images ? ele.images[0].originalSrc : ele?.image ? ele.image.originalSrc:""} alt="" /> */}
              <Thumbnail
                key={index}
                source={
                  ele.images
                    ? ele?.images[0]?.originalSrc !== "" ? ele.images[0]?.originalSrc : noProductImg
                    : ele?.image
                      ? ele?.image?.originalSrc !== "" ? ele.image?.originalSrc : noProductImg
                      : noProductImg
                }
                size="small"
                alt="products thumbnails"
              />
            </div>
          );
        })}{" "}
      </div>),
    bundleName: (<a key={index} className="sd-bundle-list-name">
      {item.name}

    </a>),
    status: (
      <div key={index}>
        {item.status == "active" ? <div className='sd-analytics-status-active'>Active</div> : <div className='sd-analytics-status-draft'>Draft</div>}
        {/* <Switch
    defaultChecked
    checked={item.status == "active" ? true : false}
   
  /> */}
      </div>
    ),
    salesValue: (<div key={index} className='sd-analytics-salesValues-div'>
      {/* {currencyCode}{item.analytics.bundleSalesValue} */}
      {showAmountWithCurrency(item.analytics.bundleSalesValue, currencyCode)}
    </div>),
    SalesNumber: (<div key={index} className='sd-analytics-salesNumber-div'>{item.analytics.bundleSold}</div>),
    Clicks: (<div key={index} className='sd-analytics-click-div'>{item.analytics.bundleClick}</div>),
    Views: (<div key={index} className='sd-analytics-views-div'>{item.analytics.bundleViews}</div>)

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
      title: "Sales value",
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

  const orderColumns = [
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
                <Skeleton loading={spinner} paragraph={{ rows: 1 }} title={false} >
                  <p>
                    {showAmountWithCurrency(salesValue, currencyCode)}
                  </p>
                </Skeleton>
              </div>
              <div className='sd-bundle-card-inner-icon'>
                <Icon
                  source={ChartVerticalFilledIcon}
                  color="base"
                />
              </div>
            </div>



          </Card>
        </Col>
        <Col span={6}>
          <Card className='sd-bundle-analytics-card-box' bordered={true}>
            <div className='sd-bundle-card-inner-main'>
              <div className='sd-bundle-card-inner-content'>
                <h3>Number of sold bundles</h3>
                <Skeleton loading={spinner} paragraph={{ rows: 1 }} title={false} >

                  <p>{soldBundle}</p>
                </Skeleton>

              </div>
              <div className='sd-bundle-card-inner-icon'>
                <Icon
                  source={CartSaleIcon}
                  color="base"
                />
              </div>
            </div>

          </Card>
        </Col>
        <Col span={6}>
          <Card className='sd-bundle-analytics-card-box' bordered={true}>
            <div className='sd-bundle-card-inner-main'>
              <div className='sd-bundle-card-inner-content'>
                <h3>Bundles clicks</h3>
                <Skeleton loading={spinner} paragraph={{ rows: 1 }} title={false} >

                  <p>{bundleClicks}</p>
                </Skeleton >

              </div>
              <div className='sd-bundle-card-inner-icon'>
                <Icon
                  source={LightbulbIcon}
                  color="base"
                />
              </div>
            </div>

          </Card>
        </Col>
        <Col span={6}>
          <Card className='sd-bundle-analytics-card-box' bordered={true}>
            <div className='sd-bundle-card-inner-main'>
              <div className='sd-bundle-card-inner-content'>
                <h3>Bundles views</h3>
                <Skeleton loading={spinner} paragraph={{ rows: 1 }} title={false} >

                  <p> {bundleViews}</p>
                </Skeleton  >

              </div>
              <div className='sd-bundle-card-inner-icon'>
                <Icon
                  source={ViewIcon}
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
            <Skeleton className='sd-bundle-skeleton-pd' loading={spinner} paragraph={{ rows: 15, width: "100%" }} title={false}  >

              <Table
                columns={columns}
                dataSource={data}
              />
            </Skeleton  >

          </Card>
        </div>
      </div>
    }


  ];




  return (



    <div>
      <LogoHeader />
      <div className="sd-bundle-MoveToHome-section sd-margin-top">


        <div className="sd-bundle-MoveToHome-arrow">


        </div>
        <div className="sd-bundle-commonHeading">Analytics</div>
      </div>

      <div className='sd-bundle-analytics-tab-box'>
        <Button disabled={btnDisabled} onClick={handleAnalyticsReload}>Reload</Button>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />


      </div>
      <Watermark />
      <ContactUs />
    </div>
  )
}

export default BundleAnalytics