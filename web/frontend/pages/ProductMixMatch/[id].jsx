import React, {useState} from 'react'
import { Col, Row, Button, Input, Divider, Modal, Select,Spin } from "antd";
import { useAPI } from "../../components/shop";
import CreateBundleModal from "../../components/createBundleModal";
import BundleNameTitle from "../../components/commonSections/bundleNameTitle";
import MoveToHomePage from "../../components/commonSections/MoveToHomePage";
import BundleStatus from "../../components/commonSections/bundleStatus";
import BundlePickerData from "../../components/resourcePickerData/BundlePickerData";
import DisplayOptions from "../../components/commonSections/displayOptions";
import ProductVariantData from "../../components/productVariantData";
import { TextField, InlineError } from "@shopify/polaris";
import BoatLoader from "../../components/BoatLoader";
import AlertSection from "../../components/commonSections/AlertSection";
import defaultData from "../../components/customization/defaultData.json";
import DateTime from "../../components/commonSections/dateTime";
import DeleteSave from "../../components/commonSections/deleteSave";
export default function ProductMixMatch() {
    const [spinner, setSpinner] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [myModal, setMyModal] = useState(false);
    const [alert, setAlert] = useState({ state: false, message: [], status: "" });
    const [pickerError, setPickerError] = useState([]);
    const [pid, setPid] = useState("");
    const [loader, setLoader] = useState(false);
    const [antModal, setAntModal] = useState(false);
    const [variantData, setVariantData] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);
  const { shop, timeZone, currencyCode } = useAPI();
  const [errorArray, setErrorArray] = useState([]);
  const [error, setError] = useState("");
  const [priceData, setPriceData] = useState([]);
  const [endPriceData, setEndPriceData] = useState([]);
  const [sumData, setSumData] = useState([]);
    const [data, setData] = useState({
        name: "",
        title: "",
        shop: "",
        type: "productMixMatch",
        status: "active",
        startdate: "",
        endDate: "",
        bundleDetail: {
            products: [],
            discountedProductType: "specific_product",
            discountOptions: [
              {
                quantity: 2,
                type: "percent",
                value: 5,
                description: "Buy 2 & Save {discount}",
              },
            ],
            allowDiscountOnIncrease: false,
            display: { productPages: false,
               bundle: false,
               
                productPagesList: [],
               },
          },
        customization: [defaultData] ,
        timeZone:timeZone
      });
// console.log(data)
      const handleBrowseProducts = async () => {
        setMyModal(true);
      };

      const handleSearchInput = (e) => {
        const { value } = e.target;
        if (value) {
          setMyModal(true);
          setSearchValue(value);
        } else {
          setSearchValue("");
        }
      };


      const removeProductFromList = (item, index) => {
        let update = [...data.bundleDetail.products];
        update.splice(update.indexOf(item), 1);
        let copy = [...data.bundleDetail.display.productPagesList];
    
        let copy2 = copy.filter((item2) => item2 != item.id);
    
        if (update.length > 0 && copy2.length == 0) {
          setData({
            ...data,
            bundleDetail: {
              ...data.bundleDetail,
              products: update,
              display: {
                ...data.bundleDetail.display,
                productPages: false,
                productPagesList: copy2,
              },
            },
          });
        } else if (update.length == 0) {
          setData({
            ...data,
            bundleDetail: {
              ...data.bundleDetail,
              products: update,
              display: {
                ...data.bundleDetail.display,
                productPages: true,
                productPagesList: copy2,
              },
            },
          });
        } else {
          setData({
            ...data,
            bundleDetail: {
              ...data.bundleDetail,
              products: update,
              display: { ...data.bundleDetail.display, productPagesList: copy2 },
            },
          });
        }
        let copyErrorArray = [...pickerError];
        let copyArray = [];
        copyErrorArray.map((item2) => {
          if (item2 >= index) {
            copyArray.push(item2 - 1);
          }
        });
        setPickerError(copyArray);
      };

      const temp = {
        setPid,
        setAntModal,
        setLoader,
        setCheckedIds,
        setVariantData,
      };

      function calculateFinalPrice(index, sumArray) {
        let finalPrice = 0;
    
        if (data.bundleDetail.discountOptions[index].type == "percent") {
          if (data.bundleDetail.discountOptions[index].value > 100) {
            finalPrice = 0;
          } else {
            finalPrice =  parseFloat(sumArray[index]) -parseFloat(sumArray[index]) * (data.bundleDetail.discountOptions[index].value / 100);
          }
        } else if (data.bundleDetail.discountOptions[index].type == "fixed") {
          if (parseFloat(data.bundleDetail.discountValue) > sumArray[index]) {
            finalPrice = 0;
          } else {
            finalPrice =
              parseFloat(sumArray[index]) -
              data.bundleDetail.discountOptions[index].value;
          }
        } else if (data.bundleDetail.discountOptions[index].type == "price") {
          if (
            data.bundleDetail.discountOptions[index].value >
            parseFloat(sumArray[index])
          ) {
            finalPrice = parseFloat(sumArray[index]);
          } else {
            finalPrice = parseFloat(data.bundleDetail.discountOptions[index].value);
          }
        } else if (
          data.bundleDetail.discountOptions[index].discountType == "freeShipping" ||
          data.bundleDetail.discountOptions[index].discountType == "noDiscount"
        ) {
          finalPrice = parseFloat(sumArray[index]);
        }
        return finalPrice.toFixed(2);
      }

      
      const setOk = () => {
        let getData = variantData.data.filter(
          (item) => checkedIds.indexOf(item.id) != -1
        );
        if (checkedIds.length > 0) {
          let update = [...data.bundleDetail.products];
          let update2 = update.map((item) => {
            if (item.id == pid) {
              item.variants = getData;
            }
            return item;
          });
          setData({
            ...data,
            bundleDetail: {
              ...data.bundleDetail,
              products: update2,
            },
          });
          setCheckedIds([]);
          setVariantData([]);
          setPid("");
          let copy = [...errorArray];
          copy.splice(copy.indexOf("uncheckedVariantModal"), 1);
          setErrorArray(copy);
    
          setAntModal(false);
        } else if (checkedIds.length == 0) {
          setErrorArray([...errorArray, "uncheckedVariantModal"]);
    
          return false;
        }
      };
    
      const setCancel = () => {
        setVariantData([]);
        setCheckedIds([]);
        setPid("");
        let copy = [...errorArray];
        copy.splice(copy.indexOf("uncheckedVariantModal"), 1);
        setErrorArray(copy);
        setAntModal(false);
      };

      const handleDiscountQuantity = (newvalue, index) => {
        if (newvalue != "" ){
         if (parseInt(newvalue) < 2){
           if(errorArray.includes(`minimumQuantity${index}`)==false) {
     
           let copy = [...errorArray];
           if (errorArray.includes(`increasingOrder${index}`)) {
             copy.splice(copy.indexOf[`increasingOrder${index}`], 1);
           }
           setErrorArray([...copy, `minimumQuantity${index}`]);    
         } 
       }
         else if (
           (data.bundleDetail?.discountOptions[index + 1] &&
             parseInt(newvalue) >= parseInt(data.bundleDetail?.discountOptions[index + 1].quantity)) 
         ) {
           if(errorArray.includes(`increasingOrder${index}`)==false && parseInt(newvalue) >= 2){
             let copy = [...errorArray];
           if (errorArray.includes(`minimumQuantity${index}`)) {
             copy.splice(copy.indexOf[`minimumQuantity${index}`], 1);
           }
           setErrorArray([...copy, `increasingOrder${index}`]);
         }
         }
         else if( index > 0 && parseInt(newvalue) <= parseInt(data.bundleDetail?.discountOptions[index-1].quantity)){
           if(errorArray.includes(`increasingOrder${index}`)==false){
           let copy = [...errorArray];
           if (errorArray.includes(`minimumQuantity${index}`)) {
             copy.splice(copy.indexOf[`minimumQuantity${index}`], 1);
           }
           setErrorArray([...errorArray, `increasingOrder${index}`]);
            }
         }
         else if (String(newvalue).includes(".") == false) {
           let copy = [...errorArray];
           if (errorArray.includes(`minimumQuantity${index}`)) {
             copy.splice(copy.indexOf[`minimumQuantity${index}`], 1);
           }
       
           if (errorArray.includes(`increasingOrder${index}`)) {
             copy.splice(copy.indexOf[`increasingOrder${index}`], 1);
           }
       
           setErrorArray(copy);
         }
           let update = { ...data };
           update.bundleDetail.discountOptions[index].quantity = newvalue;
     
           if (
             !(
               data.bundleDetail.discountedProductType == "specific_product" &&
               data.bundleDetail.products.length == 0
             )
           ) {
             let newArr = [...priceData];
             newArr[index].push(
               data.bundleDetail.discountedProductType != "specific_product"
                 ? 50
                 : data.bundleDetail.products[0]?.variants[0]?.price
             );
             setPriceData(newArr);
     
             let update2 = [...sumData];
             update2.splice(
               index,
               1,
               (
                 parseFloat(update2[index]) +
                 parseFloat(
                   data.bundleDetail.discountedProductType != "specific_product"
                     ? 50
                     : data.bundleDetail.products[0]?.variants[0]?.price
                 )
               ).toFixed(2)
             );
             setSumData(update2);
     
             let newUpdate = [...endPriceData];
             newUpdate.splice(index, 1, calculateFinalPrice(index, update2));
             setEndPriceData(newUpdate);
           }
     
           setData(update);
         }
       };
     
       const handleDiscountType = (value, index) => {
         let update = { ...data };
         update.bundleDetail.discountOptions[index].type = value;
         setData(update);
     
         let newUpdate = [...endPriceData];
         newUpdate.splice(index, 1, calculateFinalPrice(index, sumData));
         setEndPriceData(newUpdate);
       };
     
       const handleDiscountValue = (newvalue, index) => {
         if (newvalue == "" || newvalue < 0) {
           let update = { ...data };
           update.bundleDetail.discountOptions[index].value = 0;
     
           let newUpdate = [...endPriceData];
           newUpdate.splice(index, 1, calculateFinalPrice(index, sumData));
           setEndPriceData(newUpdate);
     
           setData(update);
         } else {
           setError("");
           if (!(data.bundleDetail.discountOptions[index].type=="percent" &&   newvalue > 100) ) {
             newvalue = String(newvalue);
             // if (String(newvalue).length > 1) {
             newvalue = newvalue.replace(/^0/, "");
             // }
             let update = { ...data };
             update.bundleDetail.discountOptions[index].value = newvalue;
     
             let newUpdate = [...endPriceData];
             newUpdate.splice(index, 1, calculateFinalPrice(index, sumData));
             setEndPriceData(newUpdate);
     
             setData(update);
           }
         }
       };

      const handleDiscountDescription = (e, index) => {
        let update = { ...data };
        update.bundleDetail.discountOptions[index].description = e.target.value;
        setData(update);
      };
    
      const handleAddDiscountOption = () => {
        let update = { ...data };
        update.bundleDetail.discountOptions.push({
          quantity:
            parseInt(
              update.bundleDetail.discountOptions[
                update.bundleDetail.discountOptions.length - 1
              ].quantity
            ) + 1,
          type: "percent",
          value: 5,
          description: `Buy ${
            parseInt(
              update.bundleDetail.discountOptions[
                update.bundleDetail.discountOptions.length - 1
              ].quantity
            ) + 1
          } & Save {discount}`,
        });
        setData(update);
    
        if (
          data.bundleDetail.products[0] ||
          data.bundleDetail.discountedProductType == "all_products"
        ) {
         
          let dummy = Array.from(
            {
              length:
                update.bundleDetail.discountOptions[
                  update.bundleDetail.discountOptions.length - 1
                ].quantity,
            },
            (x, itemIndex) =>
              data.bundleDetail.discountedProductType == "specific_product"
                ? data.bundleDetail.products[0].variants[0].price
                : 50
          );
    
          let calculatedPrice = calculateMrp(dummy);
          setPriceData([...priceData, dummy]);
          setSumData([...sumData, calculatedPrice]);
          setEndPriceData([
            ...endPriceData,
            (calculatedPrice - (calculatedPrice * 5) / 100).toFixed(2),
          ]);
        }
      };
    
      const handleDeleteDiscountOption = (index) => {
        let update = { ...data };
        update.bundleDetail.discountOptions.splice(index, 1);
        setData(update);
    
       setErrorArray([])
        
    
        let update2 = [...priceData];
        update2.splice(index, 1);
        setPriceData(update2);
    
        let update3 = [...sumData];
        update3.splice(index, 1);
        setSumData(update3);
    
        let newUpdate = [...endPriceData];
        newUpdate.splice(index, 1);
        setEndPriceData(newUpdate);
      };

      const handleAllowDiscount = (e) => {
        if (e.target.checked) {
          let update = { ...data };
          update.bundleDetail.discountOptions[
            update.bundleDetail.discountOptions.length - 1
          ].description = `Buy ${
            update.bundleDetail.discountOptions[
              update.bundleDetail.discountOptions.length - 1
            ].quantity
          }+ & Save {discount}`;
          update.bundleDetail.allowDiscountOnIncrease = true;
    
          setData(update);
        } else {
          let update = { ...data };
          update.bundleDetail.discountOptions[
            update.bundleDetail.discountOptions.length - 1
          ].description = `Buy ${
            update.bundleDetail.discountOptions[
              update.bundleDetail.discountOptions.length - 1
            ].quantity
          } & Save {discount}`;
          update.bundleDetail.allowDiscountOnIncrease = false;
    
          setData(update);
        }
      };
     
      const handleSave = async () => {
        let alertText = [];
        let flag = true;
    
        let search2 = [];
        data.bundleDetail.products.map((item, index) => {
          if (item.minimumOrder < 1 || item.minimumOrder == "") {
            search2.push(index);
          }
        });
    
        if (search2.length > 0 || data.bundleDetail.products.length < 2) {
          flag = false;
          setPickerError(search2);
          alertText.push(
            "Minimum  products for bundle  is 2  & Minimum Order for each product  can not be empty  or less than 1 ."
          );
        }
    
        if (data.name == "") {
          if (!errorArray.includes("bundleName")) {
            setErrorArray((prev) => [...prev, "bundleName"]);
          }
    
          flag = false;
          alertText.push("Please provide name of bundle");
        }
        if (data.title == "") {
          if (!errorArray.includes("bundleTitle")) {
            setErrorArray((prev) => [...prev, "bundleTitle"]);
          }
          flag = false;
          alertText.push("Please provide title of bundle");
        }
        
        if (data.startdate == "") {
          if (!errorArray.includes("startdate")) {
            setErrorArray((prev) => [...prev, "startdate"]);
          }
          flag = false;
          alertText.push("Please select start date & time");
        }
        if (flag == false) {
          alertCommon(setAlert, alertText, "critical", false);
        }
    
        if (flag == true) {
          setSpinner(true);
          setErrorArray("");
          setPickerError([]);
          if (param.id == "create") {
            const response = await postApi("/api/admin/createBundle", data, app);
            if (response.data.status === 200) {
              return toastNotification("success", "Saved", "bottom"), navigate("/bundle");
            } else {
              return alertCommon(
                setAlert,
                ["Something went wrong"],
                "warning",
                false
              );
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

      const handleDisplayOptions = (e) => {
        if (e.target.checked) {
          if (e.target.name == "productPages") {
            let arr = [];
            data.bundleDetail.products.map((item) => {
              arr.push(item.id);
            });
    
            setData({
              ...data,
              bundleDetail: {
                ...data.bundleDetail,
                display: {
                  ...data.bundleDetail.display,
                  productPages: true,
                  productPagesList: [...arr],
                },
              },
            });
          } else {
            setData({
              ...data,
              bundleDetail: {
                ...data.bundleDetail,
                display: { ...data.bundleDetail.display, [e.target.name]: true },
              },
            });
          }
        } else {
          if (e.target.name == "productPages") {
            setData({
              ...data,
              bundleDetail: {
                ...data.bundleDetail,
                display: {
                  ...data.bundleDetail.display,
                  productPages: false,
                  productPagesList: [],
                },
              },
            });
          } else {
            setData({
              ...data,
              bundleDetail: {
                ...data.bundleDetail,
                display: { ...data.bundleDetail.display, [e.target.name]: false },
              },
            });
          }
        }
      };
    
      const handleDisplayPageOptions = (e) => {
        if (e.target.checked) {
          // setData([...data,e.target.value])
          let update = { ...data };
    
          if (update.bundleDetail.display?.productPagesList.length < 1) {
            update.bundleDetail.display = {
              ...update.bundleDetail.display,
              productPages: true,
              productPagesList: [e.target.value],
            };
    
            setData(update);
          } else {
            update.bundleDetail.display.productPagesList = [
              ...update.bundleDetail.display.productPagesList,
              e.target.value,
            ];
            setData(update);
          }
        } else {
          let update = { ...data };
          let temp = update.bundleDetail.display.productPagesList.filter((item) => {
            return item !== e.target.value;
          });
    
          if (temp.length > 0) {
            setData({
              ...data,
              bundleDetail: {
                ...data.bundleDetail,
                display: { ...data.bundleDetail.display, productPagesList: temp },
              },
            });
          } else {
            setData({
              ...data,
              bundleDetail: {
                ...data.bundleDetail,
                display: {
                  ...update.bundleDetail.display,
                  productPages: false,
                  productPagesList: temp,
                },
              },
            });
          }
        }
      };
  return (
    <Spin spinning={spinner}
    indicator={<BoatLoader/>} size="large">
      <div className="Polaris-Page Polaris-Page--fullWidth">
        <MoveToHomePage data={data} />

        {alert.state == true && (
          <AlertSection
            message={alert.message}
            setAlert={setAlert}
            status={alert.status}
          />
        )}

        <div className="sd-bundle-wrapper-common">
          <div className="sd-bundle-left-section-common">
            <div className="sd-bundle-bundleSection-common sd-bundle-productBundleSearchSection">
              <div className="sd-bundle-bundleSection-heading-common">
                Product Mix & Match Bundle{" "}
              </div>

              <div className="sd-bundle-plainText-common">
              Add products your customers can build their bundle from
              </div>
            <div className="sd-bundle-search">
                <input
                  type="text"
                  placeholder="search products"
                   onChange={handleSearchInput}
                  className="sd-bundle-search-box-common"
                  value={searchValue}
                />
                <button
                  type="button"
                  onClick={handleBrowseProducts}
                  className="sd-bundle-search-button-common"
                >
                  Browse
                </button>
            </div>
              <BundlePickerData
                page="productBundle"
                modalType=""
                data={data}
                setData={setData}
                temp={temp}
                errorArray={pickerError}
                removeProductFromList={removeProductFromList}
              />
            </div>

            {myModal && (
              <CreateBundleModal
                open={myModal}
                setOpen={setMyModal}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                page={"productBundle"}
                modalType="Product"
                setData={setData}
                data={data}
              />
            )}


            <div className="sd-bundle-bundleSection-common sd-bundle-volumeBundle-discountOptions">
                <div className="sd-bundle-bundleSection-heading-common">
                  {" "}
                  Discount Options{" "}
                </div>
                {data.bundleDetail.discountOptions.map((item, index) => (
                  <div key={index} className="sd-volume-discount-option">
                    <div
                      className="sd-bundle-volume-discount-option-topbar"
                      style={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <p>option{index + 1}</p>
                      {data.bundleDetail.discountOptions.length > 1 && (
                        <Button
                          danger
                          onClick={() => handleDeleteDiscountOption(index)}
                        >
                          DELETE
                        </Button>
                      )}
                    </div>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                      <Col className="gutter-row" span={8}>
                        <div>
                          <p>Required items</p>
                          <TextField
                            type="number"
                            // label="Minimum order"
                            // placeholder="set minimum order  for item"
                            onChange={(newvalue) =>
                              handleDiscountQuantity(newvalue, index)
                            }
                            value={item.quantity}
                            autoComplete="off"
                            // min={2}
                          />
                          {errorArray.includes(`minimumQuantity${index}`) && (
                            <InlineError message="Minimum quantity must be 2 " />
                          )}
                          {errorArray.includes(`increasingOrder${index}`) && (
                            <InlineError message="Options quantities must be in increasing order " />
                          )}
                        </div>
                      </Col>
                      <Col className="gutter-row" span={8}>
                        <div>
                          <p>Discount Type</p>
                          <Select
                            value={data.bundleDetail.discountOptions[index].type}
                            style={{
                              width: "100%",
                            }}
                            onChange={(value) => handleDiscountType(value, index)}
                            options={[
                              {
                                value: "fixed",
                                label: "Fixed Discount",
                              },
                              {
                                value: "percent",
                                label: "Percentage Discount",
                              },
                              {
                                value: "price",
                                label: "Set Price",
                              },
                              // {
                              //   value: "freeShipping",
                              //   label: "Free Shipping",
                              // },
                              {
                                value: "noDiscount",
                                label: "No Discount",
                              },
                            ]}
                          />
                        </div>
                      </Col>
                      <Col className="gutter-row" span={8}>
                        <div>
                          <p>Discount value</p>
                          <TextField
                            type="number"
                            // label="Minimum order"
                            // placeholder="set minimum order  for item"
                            onChange={(newvalue) =>
                              handleDiscountValue(newvalue, index)
                            }
                            value={item.value}
                            autoComplete="off"
                            min="0"
                          />
                          
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <p>Description</p>
                    <Input
                      placeholder="Buy"
                      value={item.description}
                      onChange={(e) => handleDiscountDescription(e, index)}
                    />
                    <span className="sd-bundle-Disclaimer-common">
                      Use discount to show the discount value
                    </span>
                    <br />


                  
                    {data.bundleDetail.discountOptions.length == index + 1 && (
                      <div className="sd-bundle-volumeBundle-allowDiscount">
                        <input
                          type="checkbox"
                          id="discountOptionCheckbox"
                          name=""
                          value={data.bundleDetail.allowDiscount}
                          onChange={handleAllowDiscount}
                        />
                        <label htmlFor="discountOptionCheckbox">
                          Allow this discount to be applied on more items than the
                          required numbers
                        </label>
                      </div>
                    )} 
                    <Divider />
                  </div>
                ))}
                <Button size="large" onClick={handleAddDiscountOption}>
                  Add Another Option
                </Button>
            </div> 

            <BundleNameTitle
              data={data}
              setData={setData}
              errorArray={errorArray}
            />

            <DateTime data={data} setData={setData} errorArray={errorArray} />

            {/* <DeleteSave handleSave={handleSave} /> */}
          </div>

        <div className="sd-bundle-productBundle-rightSection Polaris-Layout__Section Polaris-Layout__Section--secondary">
            <BundleStatus data={data} setData={setData} />
        
            <DisplayOptions
              bundleType="productBundle"
              display={data.bundleDetail.display}
              handleDisplayOptions={handleDisplayOptions}
              displayPageOptions={data.bundleDetail.display.productPages}
              handleDisplayPageOptions={handleDisplayPageOptions}
              products={data.bundleDetail.products}
            />
     
           {/*  <ProductBundlePreview
              data={data}
              currency={currencyCode}
              mrp={mrp}
              endPrice={endPrice}
              showPrice={showPrice}
              handleVariantChoice={handleVariantChoice}
              bundleType={"productBundle"}
              errorArray={errorArray}
            /> */}
        </div>
    </div>

        {/* below code is for the modal opening on click of Edit Further  */}
         {antModal && (
          <Modal
            title="Select Variant Options  for Bundle Modal"
            open={antModal}
            onOk={setOk}
            onCancel={setCancel}
            className="sd-bundle-modal sd-bundle-modal-variant"
            // width={1000}
          >
            <ProductVariantData
              checkedIds={checkedIds}
              setCheckedIds={setCheckedIds}
              variantData={variantData}
              loader={loader}
              errorArray={errorArray}
            />
          </Modal>
        )} 
      </div>
    </Spin>
  )
}
