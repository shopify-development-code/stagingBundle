import { useEffect, useState } from "react";
import {
  Card,
  Button,
  Input,
  Modal,
  Table,
  Dropdown,
  Space,
  Switch,

} from "antd";
import {
  SearchOutlined,
  UnorderedListOutlined,
  TagsOutlined,
  PercentageOutlined,
  DownOutlined,
  EllipsisOutlined
} from "@ant-design/icons";
import { useNavigate } from "@shopify/app-bridge-react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { useAPI } from "../shop";
import postApi from "../postApi";
import {  Thumbnail } from "@shopify/polaris";
import toastNotification from "../commonSections/Toast";
import { Icon } from "@shopify/polaris";
import {
  CircleAlertMajor
} from '@shopify/polaris-icons';
import "./bundle.css";
import {Tooltip } from '@shopify/polaris';
import BoatLoader from "../BoatLoader";
import allProductsImg from "../../assets/all_products.png"
import noProductImg from "../../assets/NoProductImage.png"
const CreateBundle = () => {
  const { shop, currency, currencyCode } = useAPI();
  const app = useAppBridge();
  const [dashboardData, setDashboardData] = useState([]);
  const [allSearchTerm, setAllSearchTerm] = useState("");
  const navigate = useNavigate();
  const [activeTabKey2, setActiveTabKey2] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [actionId, setActionId] = useState([]);
  async function getBundle() {
    setLoader(true);
    const response = await postApi("/api/admin/getBundle", { shop: shop }, app);
    if (response.data.status === 200) {
      setDashboardData(response.data.response);
      setLoader(false);
    } else if (response.data.status === 503) {
      toastNotification(
        "danger",
        "Something went wrong! please try again",
        "bottom"
      );
      setLoader(false);
    }
  }



  useEffect(() => {
    getBundle();
  }, []);

  const handleUpdateStatus = async (e, id) => {
    setLoader(true);
    let data = {
      id: id,
      status: e === true ? "active" : "draft",
    };
    const response = await postApi("api/admin/updateStatus", data, app);

    if (response.data.status === 200) {
      await getBundle();
      toastNotification("success", "status updated successfully", "bottom");
    }
  };

  const handleSearchBundle = (e) => {
    const { value } = e.target;
    setAllSearchTerm(value);
  };

  const allSearchData = dashboardData.filter((item) => {
    return item.name.includes(allSearchTerm);
  });

  const handleEditBundle = async (id, type) => {
    if (type == "productBundle") {
      navigate(`/ProductBundle/${id}`);
    } else if (type == "volumeBundle") {
      navigate(`/VolumeBundle/${id}`);
    } else {
      navigate(`/CollectionMixMatch/${id}`);
    }
  };

  async function handleActionDelete() {
    setLoader(true);
    if (actionId.length) {
      let data = {
        id: actionId,
      };
      let response = await postApi("/api/admin/actionDelete", data, app);
      if (response.data.status == 200) {
        return (
          toastNotification("success", "Successfully deleted !", "bottom"),
          await getBundle(),
          setActionId([])
        );
      } else if (response.data.status == 503) {
        return (
          getBundle(),
          await toastNotification(
            "warning",
            "Something went wrong ! please try again",
            "bottom"
          )
        );
      }
    }
  }
  async function handleActionActive() {
    setLoader(true);
    if (actionId.length) {
      let data = {
        id: actionId,
        status: "active",
      };
      let response = await postApi("/api/admin/actionStatus", data, app);
      if (response.data.status == 200) {
        return (
          await getBundle(),
          toastNotification("success", "Successfully Active !", "bottom"),
          setActionId([])
        );
      } else if (response.data.status == 503) {
        return (
          await getBundle(),
          toastNotification(
            "warning",
            "Something went wrong ! please try again",
            "bottom"
          )
        );
      }
    }
  }
  async function handleActionDraft() {
    setLoader(true);
    if (actionId.length) {
      let data = {
        id: actionId,
        status: "draft",
      };
      let response = await postApi("/api/admin/actionStatus", data, app);
      if (response.data.status == 200) {
        return (
          await getBundle(),
          toastNotification("success", "Successfully Draft !",  'bottom'),
          setActionId([])
        );
      } else if (response.data.status == 503) {
        return (
          await getBundle(),
          toastNotification(
            "warning",
            "Something went wrong ! please try again",
            'bottom'
          )
        );
      }
    }
  }

  function  showOutOfStockError(item){
    let check ;
   
    for (let index = 0; index < item.bundleDetail.products.length; index++) {
      for (let i = 0; i < item.bundleDetail.products[index].variants.length; i++) {
       if(item.bundleDetail.products[index].variants[i].inventoryQuantity <= 0){
        check = true;
        break;
       }
        
      }
      
    }
return check;
  }

  const items = [
    {
      label: <a onClick={handleActionDelete}>Delete</a>,
      key: "0",
    },
    {
      label: <a onClick={handleActionActive}>Set as active</a>,
      key: "1",
    },
    {
      label: <a onClick={handleActionDraft}>Set as draft</a>,
      key: "2",
    },
  ];

  const columns = [
    {
      title: "Bundle ",
      dataIndex: "bundle",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Discount",
      dataIndex: "discount",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Performance",
      dataIndex: "performance",
    },
  ];

  let mainData = [];
  if (allSearchTerm.length > 0) {
    mainData = allSearchData;
  } else {
    mainData = dashboardData;
  }
  const data = mainData.map((item, index) => ({
 
    key: item._id,
    // bundle:<div><img src={item.bundleDetail.products[0]?.images ? item.bundleDetail.products[0]?.images[0].originalSrc : item.bundleDetail.products[0]?.image ? item.bundleDetail.products[0]?.image.originalSrc : ""} alt="" srcset="" /></div>,
    bundle: (

      <div className="sd-bundle-dashboard-img-box">
          {  ( item.bundleDetail.discountedProductType == "all_products"  ?<Thumbnail
   source={
     allProductsImg
   }
   size="small"
   alt="products thumbnails"
 />: null)}
        {item.bundleDetail.products.slice(0,3).map((ele,index) => {
          return (
            <div key={index} className="sd-bundle-dashboard-img">
              {/* <img src={ele?.images ? ele.images[0].originalSrc : ele?.image ? ele.image.originalSrc:""} alt="" /> */}
              <Thumbnail
                source={
                  ele.images
                    ? ele?.images[0]?.originalSrc !== "" ? ele.images[0].originalSrc : noProductImg
                    : ele?.image 
                    ? ele?.image?.originalSrc !== "" ? ele.image.originalSrc : noProductImg 
                    : noProductImg
                }
                size="small"
                alt="products thumbnails"
              />
             
            </div>
          );
        })}
          {
    item.bundleDetail.products.length > 3 ? <div className="sd-bundle-more-item"><EllipsisOutlined /></div> : null
   }
      </div>
    ),
    name: (
      <a  className="sd-bundle-list-name"
        onClick={() => {
          handleEditBundle(item._id, item.type);
        }}
      >
        {item.name}
        {item.type == "productBundle" || (item.type == "volumeBundle" && item.bundleDetail.discountedProductType == "specific_product") ?
       
        showOutOfStockError(item)  && (


          <Tooltip  preferredPosition="mostSpace" content="This bundled product is out of stock">
          <Icon
                source={CircleAlertMajor}
                color="red"
              />
        </Tooltip>
         
            
      
       )
   


        :""}
      </a>
      
    ),
    
    // discount:item.type == "productBundle" ? item.bundleDetail.discountType == "percent" : `${item.bundleDetail.discountValue}% off` : item.bundleDetail.discountType == "fixed" ? `${item.bundleDetail.discountValue}% off` ,
    discount:
      item.type == "productBundle"
        ? item.bundleDetail.discountType == "percent"
          ? `${item.bundleDetail.discountValue}% off`
          : item.bundleDetail.discountType == "fixed"
          ? `Rs.${item.bundleDetail.discountValue} off`
          : item.bundleDetail.discountType == "price"
          ? `Fixed Rs.${item.bundleDetail.discountValue} `
          : item.bundleDetail.discountType == "freeShipping"
          ? "Free Shipping"
          : item.bundleDetail.discountType == "noDiscount"
          ? "No Discount"
          : null
        : item.type == "volumeBundle"
        ? `${item.bundleDetail.discountOptions.length} Options`
        : item.type == "collectionMixMatch"
        ? item.bundleDetail.discountType == "percent"
          ? `${item.bundleDetail.discountValue}% off`
          : item.bundleDetail.discountType == "fixed"
          ? `Rs.${item.bundleDetail.discountValue} off`
          : item.bundleDetail.discountType == "price"
          ? `Fixed Rs.${item.bundleDetail.discountValue} `
          : item.bundleDetail.discountType == "freeShipping"
          ? "Free Shipping"
          : item.bundleDetail.discountType == "noDiscount"
          ? "No Discount"
          : null
        : null,
    status: (
      <div>
        <Switch
          defaultChecked
          checked={item.status == "active" ? true : false}
          onChange={(e) => handleUpdateStatus(e, item._id)}
        />
      </div>
    ),
    // :<div>
    //     <Select
    //   value={item.status}
    //   style={{ width: 120 }}
    //   bordered={false}
    //   className="sd-dashboard-status"
    //   options={[
    //     { value: 'active', label: 'Active' },
    //     { value: 'draft', label: 'Draft' },

    //   ]}
    //   onChange={(e)=>handleUpdateStatus(e,item._id)}
    // />
    // </div>,

    type: item.type,
    performance: item.analytics.bundleSold+" " +"Sold" ,
  }));

  let activeDashboard = dashboardData.filter((e) => e.status == "active");
  const searchActiveData = activeDashboard.filter((item) => {
    return item.name.includes(allSearchTerm);
  });
  let activeMainData = [];
  if (allSearchTerm.length > 0) {
    activeMainData = searchActiveData;
  } else {
    activeMainData = activeDashboard;
  }
  const activeData = activeMainData.map((item, index) => ({
    key: index,
    bundle:  (
      <div className="sd-bundle-dashboard-img-box">
          {  ( item.bundleDetail.discountedProductType == "all_products"  ?<Thumbnail
   source={
     allProductsImg
   }
   size="small"
   alt="products thumbnails"
 />: null)}
        {item.bundleDetail.products.slice(0,3).map((ele,index) => {
          return (
            <div key={index} className="sd-bundle-dashboard-img">
              {/* <img src={ele?.images ? ele.images[0].originalSrc : ele?.image ? ele.image.originalSrc:""} alt="" /> */}
              <Thumbnail
               source={
                ele.images
                  ? ele?.images[0]?.originalSrc !== "" ? ele.images[0].originalSrc : noProductImg
                  : ele?.image 
                  ? ele?.image?.originalSrc !== "" ? ele.image.originalSrc : noProductImg 
                  : noProductImg
              }
                size="small"
                alt="products thumbnails"
              />
             
            </div>
          );
        })}
          {
    item.bundleDetail.products.length > 3 ? <div className="sd-bundle-more-item"><EllipsisOutlined /></div> : null
   }
      </div>
    ),
    name: (
      <a
         className="sd-bundle-list-name"
        onClick={() => {
          handleEditBundle(item._id, item.type);
        }}
      >
        {item.name}
        {item.type == "productBundle" || (item.type == "volumeBundle" && item.bundleDetail.discountedProductType == "specific_product") ?
       
       showOutOfStockError(item)  && (


         <Tooltip  preferredPosition="mostSpace" content="This bundled product is out of stock">
         <Icon
               source={CircleAlertMajor}
               color="red"
             />
       </Tooltip>
        
           
     
      )
  


       :""}
      </a>
    ),
    discount: item.type == "productBundle"
    ? item.bundleDetail.discountType == "percent"
      ? `${item.bundleDetail.discountValue}% off`
      : item.bundleDetail.discountType == "fixed"
      ? `Rs.${item.bundleDetail.discountValue} off`
      : item.bundleDetail.discountType == "price"
      ? `Fixed Rs.${item.bundleDetail.discountValue} `
      : item.bundleDetail.discountType == "freeShipping"
      ? "Free Shipping"
      : item.bundleDetail.discountType == "noDiscount"
      ? "No Discount"
      : null
    : item.type == "volumeBundle"
    ? `${item.bundleDetail.discountOptions.length} Options`
    : item.type == "collectionMixMatch"
    ? item.bundleDetail.discountType == "percent"
      ? `${item.bundleDetail.discountValue}% off`
      : item.bundleDetail.discountType == "fixed"
      ? `Rs.${item.bundleDetail.discountValue} off`
      : item.bundleDetail.discountType == "price"
      ? `Fixed Rs.${item.bundleDetail.discountValue} `
      : item.bundleDetail.discountType == "freeShipping"
      ? "Free Shipping"
      : item.bundleDetail.discountType == "noDiscount"
      ? "No Discount"
      : null
    : null,
    status: (
      <div>
        <Switch
          defaultChecked
          checked={item.status == "active" ? true : false}
          onChange={(e) => handleUpdateStatus(e, item._id)}
        />
      </div>
    ),
    type: item.type,
    performance: item.analytics.bundleSold +" "+ "Sold",
  }));

  let draftDashboard = dashboardData.filter((e) => e.status == "draft");
  const searchDraftData = dashboardData.filter((item) => {
    return item.name.includes(allSearchTerm);
  });
  let DraftMainData = [];
  if (allSearchTerm.length > 0) {
    DraftMainData = searchDraftData;
  } else {
    DraftMainData = draftDashboard;
  }
  const draftData = DraftMainData.map((item, index) => ({
    key: index,
    bundle:  (
      <div className="sd-bundle-dashboard-img-box">
        {  ( item.bundleDetail.discountedProductType == "all_products"  ?<Thumbnail
   source={
     allProductsImg
   }
   size="small"
   alt="products thumbnails"
 />: null)}
        {item.bundleDetail.products.slice(0,3).map((ele,index) => {
          return (
            <div key={index} className="sd-bundle-dashboard-img">
              {/* <img src={ele?.images ? ele.images[0].originalSrc : ele?.image ? ele.image.originalSrc:""} alt="" /> */}
              <Thumbnail
                 source={
                  ele.images
                    ? ele?.images[0]?.originalSrc !== "" ? ele.images[0].originalSrc : noProductImg
                    : ele?.image 
                    ? ele?.image?.originalSrc !== "" ? ele.image.originalSrc : noProductImg 
                    : noProductImg
                }
                size="small"
                alt="products thumbnails"
              />
             
            </div>
          );
        })}
          {
    (item.bundleDetail.products.length > 3 ? <div className="sd-bundle-more-item"><EllipsisOutlined /></div> : null)
     
    
   }
      </div>
    ),
    name: (
      <a className="sd-bundle-list-name"
        onClick={() => {
          handleEditBundle(item._id, item.type);
        }}
      >
        {item.name}
        {item.type == "productBundle" || (item.type == "volumeBundle" && item.bundleDetail.discountedProductType == "specific_product") ?
       
       showOutOfStockError(item)  && (


         <Tooltip  preferredPosition="mostSpace" content="This bundled product is out of stock">
         <Icon
               source={CircleAlertMajor}
               color="red"
             />
       </Tooltip>
        
           
     
      )
  


       :""}
      </a>
    ),
    discount: item.type == "productBundle"
    ? item.bundleDetail.discountType == "percent"
      ? `${item.bundleDetail.discountValue}% off`
      : item.bundleDetail.discountType == "fixed"
      ? `Rs.${item.bundleDetail.discountValue} off`
      : item.bundleDetail.discountType == "price"
      ? `Fixed Rs.${item.bundleDetail.discountValue} `
      : item.bundleDetail.discountType == "freeShipping"
      ? "Free Shipping"
      : item.bundleDetail.discountType == "noDiscount"
      ? "No Discount"
      : null
    : item.type == "volumeBundle"
    ? `${item.bundleDetail.discountOptions.length} Options`
    : item.type == "collectionMixMatch"
    ? item.bundleDetail.discountType == "percent"
      ? `${item.bundleDetail.discountValue}% off`
      : item.bundleDetail.discountType == "fixed"
      ? `Rs.${item.bundleDetail.discountValue} off`
      : item.bundleDetail.discountType == "price"
      ? `Fixed Rs.${item.bundleDetail.discountValue} `
      : item.bundleDetail.discountType == "freeShipping"
      ? "Free Shipping"
      : item.bundleDetail.discountType == "noDiscount"
      ? "No Discount"
      : null
    : null,
    status: (
      <div>
        <Switch
          defaultChecked
          checked={item.status == "active" ? true : false}
          onChange={(e) => handleUpdateStatus(e, item._id)}
        />
      </div>
    ),
    type: item.type,
    performance: item.analytics.bundleSold +" "+ "Sold",
  }));

  function SearchBox() {
    return (
      <div>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          allowClear={true}
          onChange={handleSearchBundle}
          value={allSearchTerm}
        />
      </div>
    );
  }

  const onTab2Change = (key) => {
    setActionId([]);
    setActiveTabKey2(key);
  };

  const tabListNoTitle = [
    {
      key: "all",
      tab: "All",
    },
    {
      key: "active",
      tab: "Active",
    },
    {
      key: "draft",
      tab: "Draft",
    },
  ];

  const handleSelected = (e) => {
    setActionId(e);
    //   if(e.length){
    //  setShowAction(true)
    //   }else{
    //     setShowAction(false)
    //   }
  };
  const contentListNoTitle = {
    all: (
      <div>
     
        {SearchBox()}
        <div>
          <Table
            loading={{
              spinning :loader,
              indicator:<BoatLoader/>
            }}
            // loading={loader}
            
            rowSelection={{
              type: "checkbox",
              selectedRowKeys: actionId,
              onChange: (e) => handleSelected(e),

              // ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            pagination={{
              defaultPageSize:6,
              hideOnSinglePage:true,

            }}
          />
        </div>
      </div>
    ),
    active: (
      <div>
                {SearchBox()}

        <div>
          <Table
            loading={{
              spinning :loader,
              indicator:<BoatLoader/>
            }}
            rowSelection={{
              type: "checkbox",
              selectedRowKeys: actionId,
              onChange: (e) => handleSelected(e),
            }}
            columns={columns}
            dataSource={activeData}
            pagination={{
              defaultPageSize:6,
              hideOnSinglePage:true,
              
            }}
          />
        </div>
      </div>
    ),
    draft: (
      <div>
               {SearchBox()}

        <div>
          <Table
             loading={{
              spinning :loader,
              indicator:<BoatLoader/>
            }}
            rowSelection={{
              type: "checkbox",
              selectedRowKeys: actionId,
              onChange: (e) => handleSelected(e),
            }}
            columns={columns}
            dataSource={draftData}
            pagination={{
              defaultPageSize:6,
              hideOnSinglePage:true,
              
            }}
          />
        </div>
      </div>
    ),
  };

  const handleShowModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="sd-bundle-dashboard-container">
      <div className="sd-bundle-dashboard-fixed-header">
        <div className="sd-bundle-dashboard-heading">Bundles</div>
        <div>
          <Button onClick={handleShowModal}>Create Bundle</Button>
        </div>
      </div>
      {/* <Card
       title="Dashboard"
       className="sd-bundle-dashboard-fixed-header"
      extra={<Button onClick={handleShowModal}>Create Bundle</Button>}
      
      > */}

      <div className="sd-bundle-card-data-box">
        <Card
          className="sd-bundle-dashboard-tab-box"
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey2}
          onTabChange={onTab2Change}
          tabBarExtraContent={
            actionId.length && (
              <div>
                {" "}
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Action
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            )
          }
        >
          {contentListNoTitle[activeTabKey2]}
        </Card>
      </div>

      {/* </Card> */}
      <Modal
        className="sd-bundle-modal sd-bundle-modal-bundles-listing"
        title="Create Bundle"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="sd-bundle-select-bundle">
          <div
            className="sd-bundle-choose-bundle"
            onClick={() => navigate("/ProductBundle/create")}
          >
            <Card
              title="Bundle"
              style={{
                width: 300,
              }}
            >
              <p className="sd-bundle-icon">
                <UnorderedListOutlined />
              </p>
              <p>
                Offer a discount when a customer buys some fixed products
                together. (Combo product option is available)
              </p>
              <br />
              <p>Example: Buy x + y to get 20% off.</p>
            </Card>
          </div>
          <div
            className="sd-bundle-choose-volume-discount"
            onClick={() => navigate("/VolumeBundle/create")}
          >
            <Card
              title="Volume Discount"
              style={{
                width: 300,
              }}
            >
              <p className="sd-bundle-volumeDiscount-icon">
                <PercentageOutlined />
              </p>
              <p>
                Offer a discount when a customer buys several instances of the
                same product.
              </p>
              <br />
              <p>Example: BOGO, Buy 3 items of X to get 20% off.</p>
            </Card>
          </div>
          <div
            className="sd-bundle-choose-collectionMixAndMatch"
            onClick={() => navigate("/collectionMixMatch/create")}
          >
            <Card
              title="Collection Mix & Match"
              style={{
                width: 300,
              }}
            >
              <p className="sd-bundle-collectionMix-Icon">
                <TagsOutlined />
              </p>
              <p>
                Offer a discount when a customer buys specified numbers of
                products from specified collections.
              </p>
              <br />
              <p>
                Example: Buy 4 items from collection X and 2 from collection Y
                to get $30 off.
              </p>
            </Card>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateBundle;