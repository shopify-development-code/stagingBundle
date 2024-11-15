import React, { Fragment, useEffect, useState } from "react";
import BundleStatus from "../../components/commonSections/bundleStatus";
import DisplayOptions from "../../components/commonSections/displayOptions";
import BundlePickerData from "../../components/resourcePickerData/BundlePickerData";
import {
  AlertBanner,
} from "../../components/helperFunctions";
import { useAPI } from "../../components/shop";
import { alertCommon } from "../../components/helperFunctions";
import General from "../../components/bxgy/General";
import defaultData from "../../components/customization/defaultData.json";
import {
  TextField,
  InlineError,
  Page,
  Text,
  Card,
  RadioButton,
  Grid,
  Select,
  Button,
  BlockStack,
  InlineGrid,
  Divider,
} from "@shopify/polaris";
import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import postApi from "../../components/postApi";
import { useNavigate, useParams } from "react-router-dom";
import toastNotification from "../../components/commonSections/Toast";
import VolumeBundlePreview from "../../components/bundles preview/volumeBundlePreview";
const VolumeBundle = () => {
  const navigate = useNavigate();
  const app = useAppBridge();
  const param = useParams();
  const [antModal, setAntModal] = useState(false);
  const [showPrice, setShowPrice] = useState({});
  const [priceData, setPriceData] = useState([]);
  const [sumData, setSumData] = useState([]);
  const [endPriceData, setEndPriceData] = useState([]);
  const [pid, setPid] = useState("");
  const [loader, setLoader] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]);
  const [errorArray, setErrorArray] = useState([]);
  const [variantData, setVariantData] = useState([]);
  let [showBanner, setShowBanner] = useState(false);
  let [warningtText, setWariningText] = useState([]);
  const [alert, setAlert] = useState({ state: false, message: [], status: "" });
  const [spinner, setSpinner] = useState(false);
  const [discountType, setDiscountType] = useState("percent");
  const [pickerType, setPickerType] = useState("product");
  const [placeholder, setPlaceHolder] = useState("Products");
  const { shop, timeZone, currencyCode } = useAPI();
  const Multiple = false;
  const [error, setError] = useState("");
  let headerkey = "Create Volume Bundle";
  let DescText =
    "Choose a particular product, a collection, or all your products to apply the volume discount.";
  const [data, setData] = useState({
    name: "",
    title: "",
    description: "",
    shop: "",
    type: "volumeBundle",
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
          badgeText: "",
          description: "Buy 2 & Save {discount}",
        },
      ],
      allowDiscountOnIncrease: false,
      display: {
        productPages: true,
        bundle: false,
        productPagesList: [],
      },
    },
    customization: [defaultData],
    timeZone: timeZone,
  });
  async function getCustomization() {
    try {
      const response = await postApi(
        "/api/admin/getCustomization",
        { shop: shop },
        app
      );
      setData((prevData) => ({
        ...prevData,
        customization: [response.data.response],
      }));
    } catch (error) {
      console.log(error);
    }
  };
  const getVolumeBundleData = async () => {
    let body = { id: param.id };

    const response = await postApi("/api/admin/editBundle", body, app);
    if (response.status === 200) {
      setData(response.data.response);
      // setVariantData(response.data.response.bundleDetail.products[0].variants)
      getPreviewData(response.data.response);
      setSpinner(false);
    }
  };
  useEffect(() => {
    // setSpinner(true);
    getCustomization();
    if (param.id !== "create") {
      getVolumeBundleData();
    } else {
      // setSpinner(false);
    }
  }, []);
  function getPreviewData(data) {
    let priceArray = [];
    let sumArray = [];
    let endPriceArray = [];

    data.bundleDetail.discountOptions.map((item, index) => {
      let temp = Array.from({ length: item.quantity }, (x, itemIndex) =>
        data.bundleDetail.discountedProductType == "specific_product"
          ? data.bundleDetail.products[0]?.variants[0].price
          : 50
      );
      priceArray.push(temp);
      sumArray.push(calculateMrp(temp));
      let finalPrice = 0;

      if (data.bundleDetail.discountOptions[index].type == "percent") {
        if (data.bundleDetail.discountOptions[index].value > 100) {
          finalPrice = 0;
        } else {
          let discountedPrice =
            parseFloat(sumArray[index]) -
            parseFloat(sumArray[index]) *
              (data.bundleDetail.discountOptions[index].value / 100);
          finalPrice = discountedPrice;
        }
      } else if (data.bundleDetail.discountOptions[index]?.type == "fixed") {
        if (parseFloat(data.bundleDetail.discountValue) > sumArray[index]) {
          finalPrice = 0;
        } else {
          finalPrice =
            parseFloat(sumArray[index]) -
            data.bundleDetail.discountOptions[index].value;
        }
      } else if (data.bundleDetail.discountOptions[index]?.type == "price") {
        if (
          data.bundleDetail.discountOptions[index].value >
          parseFloat(sumArray[index])
        ) {
          finalPrice = parseFloat(sumArray[index]);
        } else {
          finalPrice = parseFloat(
            data.bundleDetail.discountOptions[index].value
          );
        }
      } else if (
        data.bundleDetail.discountOptions[index]?.discountType ==
          "freeShipping" ||
        data.bundleDetail.discountOptions[index]?.discountType == "noDiscount"
      ) {
        finalPrice = parseFloat(sumArray[index]);
      }
      endPriceArray.push(finalPrice);
    });

    setPriceData(priceArray);
    setSumData(sumArray);
    setEndPriceData(endPriceArray);
  };
  const handleDiscountProductType = (e, value) => {
    if (value == "all_products") {
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          discountedProductType: "all_products",
          display: { productPages: true },
          products: [],
        },
      });
      setPickerType(value);
      let priceArray = [];
      let sumArray = [];
      let endPriceArray = [];

      data.bundleDetail.discountOptions.map((item, index) => {
        let temp = Array.from({ length: item.quantity }, (x, itemIndex) => 50);
        priceArray.push(temp);
        sumArray.push(calculateMrp(temp));
        endPriceArray.push(calculateFinalPrice(index, sumArray));
      });
      setPriceData(priceArray);
      setSumData(sumArray);
      setEndPriceData(endPriceArray);
    } else if (value == "collection") {
      setShowPrice({});
      setPickerType(value);
      setPlaceHolder("Collections");
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          discountedProductType: "collection",
          display: { productPages: true, id: "", productPagesList: [] },
          products: [],
        },
      });
    } else if (value == "specific_product") {
      setPickerType("product");
      setPlaceHolder("Products");
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          discountedProductType: "specific_product",
          display: {
            productPages: true,
            bundle: false,
            id: "",
            productPagesList: [],
          },
          products: [],
        },
      });
    }
  };
  const removeOptionErrHandler = (deletedIndex) => {
    let copy = [...errorArray];
    if (errorArray.includes(`increasingOrder${deletedIndex}`) == true) {
      copy.splice(copy.indexOf(`increasingOrder${deletedIndex}`), 1);
      setErrorArray([...copy]);
    }
  };
  const handleDiscountQuantity = (newvalue, e, index) => {
    if (newvalue == "" || newvalue <= 1) {
    } else if (newvalue != "" && newvalue != 0) {
      let update = { ...data };
      update.bundleDetail.discountOptions[index].quantity = newvalue;
      if (
        data.bundleDetail?.discountOptions[index + 1] &&
        parseInt(newvalue) >=
          parseInt(data.bundleDetail?.discountOptions[index + 1].quantity)
      ) {
        if (errorArray.includes(`increasingOrder${index}`) == false) {
          setErrorArray([...errorArray, `increasingOrder${index}`]);
        }
      } else if (
        index > 0 &&
        parseInt(newvalue) <=
          parseInt(data.bundleDetail?.discountOptions[index - 1].quantity)
      ) {
        if (errorArray.includes(`increasingOrder${index}`) == false) {
          setErrorArray([...errorArray, `increasingOrder${index}`]);
        }
      } else if (
        data.bundleDetail?.discountOptions[index + 1] &&
        parseInt(newvalue) <
          parseInt(data.bundleDetail?.discountOptions[index + 1]?.quantity)
      ) {
        removeValidationHandler(
          newvalue,
          update.bundleDetail.discountOptions,
          index
        );
      } else if (
        parseInt(newvalue) >
        parseInt(data.bundleDetail?.discountOptions[index - 1]?.quantity)
      ) {
        removeValidationHandler(
          newvalue,
          update.bundleDetail.discountOptions,
          index
        );
      }

      if (
        !(
          data.bundleDetail.discountedProductType == "specific_product" &&
          data.bundleDetail.products.length == 0
        )
      ) {
        let totalQuantity =
          priceData[index].length -
          data.bundleDetail.discountOptions[index].quantity;
        console.log("Qauntity Of Products....", sumData);
        let newArr = [...priceData];
        newArr[index].push(
          data?.bundleDetail?.discountedProductType != "specific_product"
            ? 50
            : data?.bundleDetail?.products[0]?.variants[0]?.price
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
        let newUpdate = [endPriceData];
        newUpdate.splice(index, 1, calculateFinalPrice(index, update2));
        setEndPriceData(newUpdate);
      }
      setData(update);
    }
  };
  const removeValidationHandler = (newvalue, update, currentIndex) => {
    let copy = [...errorArray];
    let duplicates = [];
    let array = [];
    let isAscending = false;

    update.map((items, updateIndex) => {
      array.push(Number(items.quantity));
    });
    array.forEach(function (value, index, array) {
      if (
        array.indexOf(value, index + 1) !== -1 &&
        duplicates.indexOf(value) === -1
      ) {
        duplicates.push(value);
      }
    });
    if (duplicates.length == 0 && update.length > 1) {
      for (let i = 0; i < update.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          return false;
        }
      }
      isAscending = true;
    }
    if (isAscending == true) {
      update.map((item, updateIndex) => {
        if (errorArray.includes(`increasingOrder${updateIndex}`) == true) {
          copy.splice(copy.indexOf(`increasingOrder${updateIndex}`), 1);
        }
        if (errorArray.includes(`increasingOrder${currentIndex}`) == true) {
          copy.splice(copy.indexOf(`increasingOrder${currentIndex}`), 1);
        }
        setErrorArray([...copy]);
      });
    }
  };
  const handleDiscountType = (value, index) => {
    let update = { ...data };
    update.bundleDetail.discountOptions[index].type = value;
    setData(update);
    setDiscountType(value);
    if (value == "freeShipping") {
      update.bundleDetail.discountOptions[index].description =
        `Buy ${update.bundleDetail.discountOptions[index].quantity} & Get Free Shipping`;
      setData(update);
    } else if (value == "noDiscount") {
      update.bundleDetail.discountOptions[index].description =
        `Buy ${update.bundleDetail.discountOptions[index].quantity} items`;
      setData(update);
    } else {
      if (
        value == "percent" &&
        update.bundleDetail.discountOptions[index].value > 100
      ) {
        update.bundleDetail.discountOptions[index].value = 100;
        setData(update);
      }
      update.bundleDetail.discountOptions[index].description =
        `Buy ${update.bundleDetail.discountOptions[index].quantity} & Save {discount}`;
      setData(update);
    }
    let newUpdate = [...endPriceData];
    newUpdate.splice(index, 1, calculateFinalPrice(index, sumData));
    setEndPriceData(newUpdate);
  };
  const handleDiscountValue = (newvalue, index) => {
    if (newvalue == "" || newvalue < 1) {
      let update = { ...data };
      update.bundleDetail.discountOptions[index].value = 1;

      let newUpdate = [...endPriceData];
      newUpdate.splice(index, 1, calculateFinalPrice(index, sumData));
      setEndPriceData(newUpdate);

      setData(update);
    } else {
      setError("");
      if (
        !(
          data.bundleDetail.discountOptions[index].type == "percent" &&
          newvalue > 100
        )
      ) {
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
    update.bundleDetail.discountOptions[index].description = e;
    setData(update);
  };
  const handleDiscountBadge = (e, index) => {
    let update = { ...data };
    update.bundleDetail.discountOptions[index].badgeText = e;
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
    removeValidationHandler(
      update.bundleDetail.discountOptions[
        update.bundleDetail.discountOptions.length - 1
      ].quantity,
      update.bundleDetail.discountOptions,
      update.bundleDetail.discountOptions.length - 1
    );
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
    let lengthOfData = update.bundleDetail.discountOptions.length;
    update.bundleDetail.discountOptions.splice(index, 1);
    if (lengthOfData > 1) {
      removeOptionErrHandler(lengthOfData - 1);
      if (index > 0) {
        removeValidationHandler(
          update.bundleDetail.discountOptions[index - 1].quantity,
          update.bundleDetail.discountOptions,
          index - 1
        );
      } else if (index == 0) {
        removeValidationHandler(
          update.bundleDetail.discountOptions[index].quantity,
          update.bundleDetail.discountOptions,
          index + 1
        );
      }
    } else {
      setErrorArray([]);
    }
    setData(update);

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
  const temp = {
    setPid,
    setAntModal,
    setLoader,
    setCheckedIds,
    setVariantData,
  };
  const handleDisplayOptions = (e, name) => {
    if (e) {
      if (data.bundleDetail.discountedProductType == "specific_product") {
        setData({
          ...data,
          bundleDetail: {
            ...data.bundleDetail,
            display: { ...data.bundleDetail.display, [name]: true },
          },
        });
      } else if (data.bundleDetail.products.length > 0) {
        setData({
          ...data,
          bundleDetail: {
            ...data.bundleDetail,
            display: { ...data.bundleDetail.display, [name]: true },
          },
        });
      }
    } else {
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          display: { ...data.bundleDetail.display, [name]: false },
        },
      });
    }
  };
  function calculateMrp(arr) {
    let sum = 0;

    arr?.map((item) => {
      sum += parseFloat(item);
    });
    return parseFloat(sum.toFixed(2));
  };
  function calculateFinalPrice(index, sumArray) {
    let finalPrice = 0;

    if (data.bundleDetail.discountOptions[index].type == "percent") {
      if (data.bundleDetail.discountOptions[index].value > 100) {
        finalPrice = 0;
      } else {
        finalPrice =
          parseFloat(sumArray[index]) -
          parseFloat(sumArray[index]) *
            (data.bundleDetail.discountOptions[index].value / 100);
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
  };
  const handleVariantChoice = (e, main, index) => {
    let newArr = [...priceData];
    setShowPrice({ ...showPrice, [main]: e.target.value });
    newArr[main].splice(index, 1, e.target.value);
    setPriceData(newArr);
    let update = [...sumData];
    update.splice(main, 1, calculateMrp(newArr[main]));
    setSumData(update);
    let newUpdate = [...endPriceData];
    newUpdate.splice(main, 1, calculateFinalPrice(main, update));
    setEndPriceData(newUpdate);
  };
  const handleDelete = async () => {
    let body = {
      id: param.id,
    };
    const response = await postApi("/api/admin/deleteBundle", body, app);
    if (response.data.status == 200) {
      navigate("/bundle");
      toastNotification("success", "Deleted", "bottom");
    } else {
      toastNotification(
        "error ",
        "something went wrong! please try again",
        "bottom"
      );
    }
  };
  const handleSave = async () => {
    let alertText = [];
    if (
      data.bundleDetail.products.length < 1 &&
      data.bundleDetail.discountedProductType == "specific_product"
    ) {
      alertText.push("Please select product for bundle.");
    }
    if (data.bundleDetail.display.productPages == false) {
      alertText.push("Please enable product page from display options");
    }
    if (
      data.bundleDetail.products.length < 1 &&
      data.bundleDetail.discountedProductType == "collection"
    ) {
      alertText.push("Please select collection for bundle.");
    }
    if (data.name.trim() == "") {
      alertText.push("Please provide name of bundle");
    } 
    if (data.title.trim() == "") {
      alertText.push("Please provide title of bundle");
    } else {
      data.title.trim();
    }
    if (errorArray.length != 0) {
      alertText.push("Options quantities must be in increasing order");
    }
    setWariningText(alertText);
    const showBanner = alertText.length > 0;
    setShowBanner(showBanner);
    if (!showBanner) {
      if (param.id == "create") {
        setSpinner(true);
        const response = await postApi("/api/admin/createBundle", data, app);
        if (response.data.status === 200) {
          return (
            setSpinner(false),
            toastNotification("success", "Saved", "bottom"),
            navigate("/bundle")
          );
        } else {
          setSpinner(false);
          return alertCommon(
            setAlert,
            ["Something went wrong"],
            "warning",
            false
          );
        }
      } else {
        setSpinner(true);
        const response = await postApi("/api/admin/updateBundle", data, app);
        if (response.data.status === 200) {
          return (
            setSpinner(false),
            toastNotification("success", "Update successfully", "bottom"),
            navigate("/bundle")
          );
        } else {
          setSpinner(false);

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
  const dataUpdateHandler = () => {
    let priceArray = [];
    let sumArray = [];
    let endPriceArray = [];

    data.bundleDetail.discountOptions.map((item, index) => {
      let temp = Array.from({ length: item.quantity }, (x, itemIndex) =>
        data.bundleDetail.discountedProductType == "specific_product"
          ? data.bundleDetail.products[0].variants[0].price
          : 50
      );
      priceArray.push(temp);
      sumArray.push(calculateMrp(temp));
      endPriceArray.push(calculateFinalPrice(index, sumArray));
    });
    setPriceData(priceArray);
    setSumData(sumArray);
    setEndPriceData(endPriceArray);
  };
  return (
    <>
      <Page
        title={headerkey}
        primaryAction={
          <Button onClick={handleSave} variant="primary">
            Save
          </Button>
        }
        secondaryActions={
          param.id !== "create" && (
            <Button onClick={handleDelete} variant="primary" tone="critical">
              Delete
            </Button>
          )
        }
        backAction={{ onAction: () => shopify.modal.show("my-modal") }}
      >
        <BlockStack gap="200">
          <AlertBanner
            showBanner={showBanner}
            alertText={warningtText}
            setShowBanner={setShowBanner}
          />
          <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <BlockStack gap="400">
                <Card>
                  <Text variant="headingMd">Discounted Products</Text>
                  <div>
                    <RadioButton
                      label="All Products"
                      type="radio"
                      id="all_products"
                      name="discountProductType"
                      value="all_products"
                      checked={
                        data.bundleDetail.discountedProductType ==
                        "all_products"
                      }
                      onChange={(e, value) =>
                        handleDiscountProductType(e, value)
                      }
                    />
                  </div>
                  <div>
                    <RadioButton
                      label="A Collection"
                      type="radio"
                      id="collection"
                      name="discountProductType"
                      value="collection"
                      checked={
                        data.bundleDetail.discountedProductType == "collection"
                      }
                      onChange={(e, value) =>
                        handleDiscountProductType(e, value)
                      }
                    />
                  </div>
                  <div>
                    <RadioButton
                      label="A Specific Product"
                      type="radio"
                      id="specific_product"
                      name="discountProductType"
                      value="specific_product"
                      checked={
                        data.bundleDetail.discountedProductType ==
                        "specific_product"
                      }
                      onChange={(e, value) =>
                        handleDiscountProductType(e, value)
                      }
                    />
                  </div>
                  {data.bundleDetail.discountedProductType !=
                    "all_products" && (
                    <BundlePickerData
                      page="volumeBundle"
                      data={data}
                      setData={setData}
                      temp={temp}
                      errorArray={errorArray}
                      DescText={DescText}
                      PickerType={pickerType}
                      Placeholder={placeholder}
                      Multiple={Multiple}
                      setPriceData={setPriceData}
                      dataUpdateHandler={dataUpdateHandler}
                    />
                  )}
                </Card>
                <Card>
                  <Text as="h2" variant="headingSm">
                    Discount Options
                  </Text>
                  {data.bundleDetail.discountOptions.map((item, index) => (
                    <Fragment key={index}>
                      <Text variant="headingSm" as="h6">
                        Option {index + 1}
                      </Text>
                      {data.bundleDetail.discountOptions.length > 1 && (
                        <BlockStack inlineAlign="end">
                          <Button
                            tone="critical"
                            onClick={() => handleDeleteDiscountOption(index)}
                          >
                            DELETE
                          </Button>
                        </BlockStack>
                      )}
                      <BlockStack gap={500}>
                        <InlineGrid gap={400} columns={3}>
                          <TextField
                            label="Required items"
                            type="number"
                            onChange={(newvalue, e) =>
                              handleDiscountQuantity(newvalue, e, index)
                            }
                            value={item.quantity}
                            autoComplete="off"
                            min={1}
                          />
                          {errorArray.includes(`increasingOrder${index}`) && (
                            <InlineError message="Options quantities must be in increasing order " />
                          )}
                          <Select
                            label="Discount Type"
                            value={
                              data.bundleDetail.discountOptions[index].type
                            }
                            style={{
                              width: "100%",
                            }}
                            onChange={(value) =>
                              handleDiscountType(value, index)
                            }
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
                                value: "freeShipping",
                                label: "Free Shipping",
                              },
                              {
                                value: "noDiscount",
                                label: "No Discount",
                              },
                            ]}
                          />
                          {data.bundleDetail.discountOptions[index].type ===
                            "percent" ||
                          data.bundleDetail.discountOptions[index].type ===
                            "fixed" ? (
                            <TextField
                              type="number"
                              label="Discount value"
                              onChange={(newvalue) =>
                                handleDiscountValue(newvalue, index)
                              }
                              value={item.value}
                              autoComplete="off"
                              min={1}
                            />
                          ) : (
                            <TextField
                              label="Discount value"
                              type="number"
                              disabled
                              value={0}
                            />
                          )}
                        </InlineGrid>
                        <InlineGrid gap={400} columns={2}>
                          <TextField
                            label="Description"
                            value={item.description}
                            placeholder="Buy"
                            onChange={(e) =>
                              handleDiscountDescription(e, index)
                            }
                            helpText={
                              (data.bundleDetail?.discountOptions[index]
                                ?.type == "fixed" ||
                                data.bundleDetail?.discountOptions[index]
                                  ?.type == "percent") &&
                              "Use {discount} to show the discount value"
                            }
                          />
                          <TextField
                            label="Badge"
                            placeholder="Type the badge message..."
                            value={item.badgeText}
                            onChange={(e) => handleDiscountBadge(e, index)}
                          />
                        </InlineGrid>
                        <Divider />
                      </BlockStack>
                      <br />
                    </Fragment>
                  ))}
                  <Button size="large" onClick={handleAddDiscountOption}>
                    Add Another Option
                  </Button>
                </Card>
                <General data={data} setData={setData} errorArray={errorArray}/>
              </BlockStack>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <BlockStack gap="400">
                <BundleStatus data={data} setData={setData} />
                <DisplayOptions
                  bundleType="volume"
                  discountedProductType={
                    data.bundleDetail.discountedProductType
                  }
                  title={data.bundleDetail.products[0]?.title}
                  display={data.bundleDetail.display}
                  handleDisplayOptions={handleDisplayOptions}
                  products={data.bundleDetail.products}
                  data={data}
                />
                <Card sectioned>
                  <Text as="h2" variant="headingSm">
                    Preview
                  </Text>
                  <VolumeBundlePreview
                    data={data}
                    setData={setData}
                    currency={currencyCode}
                    discountTypes={discountType}
                    sumData={sumData}
                    allowDiscountOnIncrease={
                      data.bundleDetail.allowDiscountOnIncrease
                    }
                    endPriceData={endPriceData}
                    handleVariantChoice={handleVariantChoice}
                    showPrice={showPrice}
                  />
                </Card>
              </BlockStack>
            </Grid.Cell>
          </Grid>
        </BlockStack>
      </Page>
      <Modal variant="base" id="my-modal">
        <Page>
          <Text as="p">Are you sure you want to exit ?</Text>
        </Page>
        <TitleBar title="Exit confirmation">
          <button onClick={() => navigate("/bundle")} variant="primary">
            Confirm
          </button>
          <button onClick={() => shopify.modal.hide("my-modal")}>Cancel</button>
        </TitleBar>
      </Modal>
    </>
  );
};
export default VolumeBundle;
