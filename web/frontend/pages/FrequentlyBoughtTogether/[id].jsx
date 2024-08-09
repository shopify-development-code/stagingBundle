import {useEffect,useState} from 'react'
import MoveToHomePage from '../../components/commonSections/MoveToHomePage';
import DiscountOptions from "../../components/commonSections/discountOptions";
import MainProducts from '../../components/fbt/mainProducts';
import OfferedProducts from '../../components/fbt/offeredProducts';
import { useAPI } from '../../components/shop';
import defaultData from "../../components/customization/defaultData.json";
import General from '../../components/bxgy/General';
import BundleStatus from '../../components/commonSections/bundleStatus';
import DeleteSave from '../../components/commonSections/deleteSave';
import { useNavigate, useParams } from "react-router-dom";
import postApi from '../../components/postApi';
import { useAppBridge } from "@shopify/app-bridge-react";
import toastNotification from '../../components/commonSections/Toast';
import { Spin } from 'antd';
import FBTBundlePreview from '../../components/preview/fbtBundlePreview';
import { alertCommon } from '../../components/helperFunctions';
import AlertSection from '../../components/commonSections/AlertSection';
const FrequentlyBoughtTogether = () => {
  const navigate = useNavigate();
  const param = useParams();
  const app = useAppBridge();

  let headerkey = "Frequently Bought Together"
  const { shop, timeZone, currencyCode } = useAPI();
  const [errorArray, setErrorArray] = useState([]);
  const [endPrice, setEndPrice] = useState(0);
  const [showPrice, setShowPrice] = useState({});
  const [mrp, setMrp] = useState(0);
  const [spinner,setSpinner] = useState(false);
  const [priceData, setPriceData] = useState([]);
  const [sumData, setSumData] = useState([]);
  const [endPriceData, setEndPriceData] = useState([]);
  const [arr, setArr] = useState([]);
  const [data,setData] = useState({
      shop: shop,
      type: "fbt",
      name: "",
      title: "Bundle title",
      description:"Bundle description",
      status: "active",
      startdate: "",
      endDate: "",
      currencyCode: currencyCode,
      bundleDetail: {
        discountedProductType: "specific_product",
        discountType: "percent",
        discountValue: 5,
        mainProducts: [],
        offeredProducts: [],    
      },
      customization: [defaultData] ,
      timeZone:timeZone
  })
  const [alert, setAlert] = useState({ state: false, message: [], status: "" });
  
  let [mainProductLength, setMainProductLength] = useState(0);
  let [selectedProducts,setSelectedProducts] = useState([]);
  let [customizeData,setCustomizeData] =useState([]);

  let getCustomizeData = async() =>{
    const planResponse = await postApi("/api/admin/getPlans", data, app);
    if(planResponse?.data?.data?.plan != "standard"){
      navigate('/plans')
    }else{
      const response = await postApi("/api/admin/getCustomization",{},app)
      setCustomizeData(response.data.response.frequentlyBoughtTogether);
    }
  }
  useEffect(()=>{
    getCustomizeData();
  },[]);
  useEffect(()=>{
    setSelectedProducts([...data.bundleDetail.mainProducts,...data.bundleDetail.offeredProducts])
  },[data]);

 
  // [item.variants[0].price]
  useEffect(()=>{
    let newArray = [];
    if(selectedProducts.length>0){
      selectedProducts.map((item,index)=>{
        newArray.push(Array.from(
          { length: 1 },
          (x, itemIndex) => item.variants[0].price
        ));
      });
      // console.log('hello test ====>',newArray);
      setArr(newArray);
    }else{
      setArr([]);
    }
  },[selectedProducts]);

  // console.log('hello test array====>',showPrice);

  useEffect(()=>{
    setMainProductLength(data.bundleDetail.mainProducts.length)
  },[data.bundleDetail.mainProducts])

  const handleDiscountProductType = (e) => {
    // console.log('eeeeee',e);
    if (e.target.value == "all_products") {
      // setShowPrice({});
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          discountedProductType: "all_products",
          display: { productPages: true },
          products: [],
        },
      });

    }else if (e.target.value == "specific_product") {
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          discountedProductType: "specific_product",
          display: { productPages: false, bundle: false, id: "" },
          products: [],
        },
      });
    }
  };

  const handleDiscountType = (e) => {
    setData({
      ...data,
      bundleDetail: {
        ...data.bundleDetail,
        discountType: e.target.value,
      },
    });
  };

  const handleDiscountValue = (newvalue) => {
    if (newvalue == "" || newvalue < 0) {
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          discountValue: 0,
        },
      });
    } else {
      newvalue = String(newvalue);
      // if (String(newvalue).length > 1) {
      newvalue = newvalue.replace(/^0/, "");
      // }

      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          discountValue: newvalue,
        },
      });
    }
  };

  const getBundleData = async () => {
    let body = { id: param.id };
    setSpinner(true);
    const response = await postApi("/api/admin/editBundle", body, app);
    if (response.status === 200) {
      
      setData(response.data.response);
      setSpinner(false);
    }
  };

  useEffect(() => {
    if (param.id !== "create") {
      getBundleData();
    }else{
      // console.log("else")
    }
  }, []);
  


  const handleSave = async () => {
    let alertText = [];
    let flag = true;   

if(data.bundleDetail.discountedProductType=='specific_product'){
    if ( data.bundleDetail.mainProducts.length < 1) {
      flag = false;
     alertText.push(
        "Add a product to Main product."
      );
    }
    if(data.bundleDetail.offeredProducts.length > 3){
      flag = false;
      alertText.push(
         "Maximum number of offered products  allowed is 3."
       );
    }
    if(data.bundleDetail.offeredProducts.length < 1){
      flag = false;
      alertText.push(
         "Add at least 1 offered product"
       );
    }
  }
    if (data.name.trim() == "") {
      if (!errorArray.includes("bundleName")) {
        setErrorArray((prev) => [...prev, "bundleName"]);
      }

      flag = false;
      alertText.push("Please provide name of bundle");
    }
    if (data.title.trim() == "") {
      if (!errorArray.includes("bundleTitle")) {
        setErrorArray((prev) => [...prev, "bundleTitle"]);
      }
      flag = false;
      alertText.push("Please provide title of bundle");
    }

    if (flag == false) {      
      alertCommon(setAlert, alertText, "critical", false);
    }

    if (flag == true) {
      setSpinner(true);
      setErrorArray("");

      if (param.id == "create") {
        try {
          
          const response = await postApi("/api/admin/createBundle", data, app);
          if (response.data.status === 200) {
            return (
              toastNotification("success", "Saved", "bottom"),
              navigate("/bundle")
            );
          } else {
            return alertCommon(
              setAlert,
              ["Something went wrong"],
              "warning",
              false
            );
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        const response = await postApi("/api/admin/updateBundle", data, app);
        if (response.data.status === 200) {
          return (
            toastNotification("success", "Update successfully", "bottom"),
            navigate("/bundle")
          );
        } else {
          return alertCommon(
            setAlert,
            ["Something went wrong"],
            "warning",
            false
          );
        }
      }
    }
  };

  function calculateFinalPrice() {
    let finalPrice = 0;

    if (selectedProducts.length < 2) {
      finalPrice = calculateMrp();
    } else {
      if (data.bundleDetail.discountType == "percent") {
        if (data.bundleDetail.discountValue > 100) {
          finalPrice = 0;
        } else {
          finalPrice =
            calculateMrp() -
            calculateMrp() * (data.bundleDetail.discountValue / 100);
        }
      } else
       if (data.bundleDetail.discountType == "fixed") {
        if (parseFloat(data.bundleDetail.discountValue) > calculateMrp()) {
          finalPrice = 0;
        } else {
          finalPrice = calculateMrp() - data.bundleDetail.discountValue;
        }
      } else if (data.bundleDetail.discountType == "price") {
        if (data.bundleDetail.discountValue > calculateMrp()) {
          finalPrice = calculateMrp();
        } else {
          finalPrice = data.bundleDetail.discountValue;
        }
      } else if (
        data.bundleDetail.discountType == "freeShipping" ||
        data.bundleDetail.discountType == "noDiscount"
      ) {
        finalPrice = calculateMrp();
      }
    }
    // console.log('hello check final price****',finalPrice);
    return finalPrice;
  }

  function calculateMrp() {
    // console.log("check array length",arr.length);
    if(arr.length>0){
      let sum = 0;
      arr?.map((item) => {
        item.map((sub) => {
          sum += parseFloat(sub);
        });
      });
      setMrp(parseFloat(sum).toFixed(2));
      return parseFloat(sum.toFixed(2));
    }
  }

  // console.log("hello check mrp =====>",mrp);
  useEffect(() => {
    calculateMrp();
    setEndPrice(parseFloat(calculateFinalPrice()).toFixed(2));
  }, [arr]);

  return (
    <Spin spinning={spinner}>
    <div className="Polaris-Page Polaris-Page--fullWidth">
        <MoveToHomePage data={headerkey}/>
        {alert.state == true && (
          <AlertSection
            message={alert.message}
            setAlert={setAlert}
            status={alert.status}
          />
        )}
        <div className="sd-bundle-wrapper-common">
        
        <div className="sd-bundle-left-section-common">
              <div className="sd-bundle-bundleSection-common  sd-bundle-volumeBundle-browseSection">
                  <div className="sd-bundle-bundleSection-heading-common">
                      FBT type{" "}
                  </div>
                  <div className="sd-bundle-browseItem">
                      <input
                          type="radio"
                          id="all"
                          name="fbtProductType"
                          value="all_products"
                          checked={
                              data.bundleDetail.discountedProductType == "all_products"
                          }
                          onChange={handleDiscountProductType}
                      />
                      <label htmlFor="all">All Products</label>
                  </div>
                  <div className="sd-bundle-browseItem">
                      <input
                          type="radio"
                          id="specific_product"
                          name="fbtProductType"
                          value="specific_product"
                          checked={
                              data.bundleDetail.discountedProductType == "specific_product"
                          }
                          onChange={handleDiscountProductType}
                      />
                      <label htmlFor="specific_product">A Specific Product</label>
                  </div>
              </div>
            {data.bundleDetail.discountedProductType==='specific_product' &&
            <>
              <MainProducts data={data} setData={setData} type={"MainProduct"}/>
              <OfferedProducts data={data} setData={setData}  mainProductsLength={mainProductLength}/>
            </>
            }
            <DiscountOptions
              discountType={data.bundleDetail.discountType}
              discountValue={data.bundleDetail.discountValue}
              handleDiscountType={handleDiscountType}
              handleDiscountValue={handleDiscountValue}
              currency={currencyCode}
            />
            <General data={data} setData={setData} errorArray={errorArray} type="FrequentlyBoughtTogether"/>
        </div>
        <div className="sd-bundle-productBundle-rightSection Polaris-Layout__Section Polaris-Layout__Section--secondary">
            <BundleStatus data={data} setData={setData} />
             <FBTBundlePreview 
              data={data}
              currency={currencyCode}
              mrp={mrp}
              endPrice={endPrice}
              showPrice={showPrice}
              // bundleType={"productBundle"}
              errorArray={errorArray}
              customizeData = {customizeData}
              // handleVariantChoice={handleVariantChoice}
             />
        </div>
        </div>
        <div className='sd-bundle-wrapper-common'>

        <DeleteSave 
        handleSave={handleSave}
        />
        </div>
        </div>
        </Spin>
  )
}

export default FrequentlyBoughtTogether ;