import React, { Fragment, useEffect, useState } from "react";
import toastNotification from "../../components/commonSections/Toast";
import BundlePickerData from "../../components/resourcePickerData/BundlePickerData";
import { TitleBar, useAppBridge, Modal } from "@shopify/app-bridge-react";
import { useAPI } from "../../components/shop";
import defaultData from "../../components/customization/defaultData.json";
import BundleStatus from "../../components/commonSections/bundleStatus";
import {
  TextField,
  InlineError,
  Grid,
  Page,
  BlockStack,
  Button,
  Card,
  Text,
  Select,
  InlineGrid,
  Divider,
  Checkbox,
  InlineStack,
} from "@shopify/polaris";
import { Thumbnail } from "@shopify/polaris";
import { useNavigate, useParams } from "react-router-dom";
import postApi from "../../components/postApi";
import { AlertBanner, alertCommon } from "../../components/helperFunctions";
import General from "../../components/bxgy/General";
import DisplayOptions from "../../components/commonSections/displayOptions";
import Swal from "sweetalert2";
import ProductMixMatchPreview from "../../components/bundles preview/productMixMatchPreview";

const ProductMixMatch = () => {
  let headerkey = "Create Product Mix & Match Bundle";
  const navigate = useNavigate();
  const param = useParams();
  const [alert, setAlert] = useState({ state: false, message: [], status: "" });
  const [spinner, setSpinner] = useState(false);
  const { shop, timeZone, currencyCode } = useAPI();
  const [errorArray, setErrorArray] = useState([]);
  const [endPrice, setEndPrice] = useState(0);
  const [mrp, setMrp] = useState(0);
  const [showPrice, setShowPrice] = useState({});
  const [arr, setArr] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const [endPriceData, setEndPriceData] = useState([]);
  const [error, setError] = useState("");
  const [sumData, setSumData] = useState([]);
  const [multiProductArray, setMultiProductArray] = useState([]);
  const [requiredProductArray, setRequiredProductArray] = useState([]);
  const [data, setData] = useState({
    shop: shop,
    type: "productMixMatch",
    name: "",
    title: "",
    description: "",
    status: "active",
    startdate: "",
    endDate: "",
    currencyCode: currencyCode,
    bundleDetail: {
      products: [],
      discountedProductType: "specific_product",
      discountOptions: [
        {
          quantity: 2,
          type: "percent",
          value: 5,
          // description: "Buy 2 & Save {discount}",
        },
      ],
      allowDiscountOnIncrease: false,
      display: {
        productPages: true,
        popUp: false,
        bundle: false,
        productPagesList: [],
      },
      requiredItem: {
        enable: false,
      },
      multiItemSelection: {
        enable: false,
      },
      multiProductsArray: {
        multiProductArray: [],
      },
      requiredProductsArray: {
        requiredProductArray: [],
      },
    },
    customization: [defaultData],
    timeZone: timeZone,
  });
  const [pid, setPid] = useState("");
  const [loader, setLoader] = useState(false);
  const [variantData, setVariantData] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);
  const [antModal, setAntModal] = useState(false);
  const [pickerError, setPickerError] = useState([]);
  const app = useAppBridge();
  const [selectedDiscountIndex, setSelectedDiscountIndex] = useState(0);
  const [plan, setPlan] = useState("");
  let [showBanner, setShowBanner] = useState(false);
  let [warningtText, setWariningText] = useState([]);
  const temp = {
    setPid,
    setAntModal,
    setLoader,
    setCheckedIds,
    setVariantData,
  };
  const [disableAddOptions, setDisableAddOptions] = useState(false);
  const getPlans = async () => {
    const planResponse = await postApi("/api/admin/getPlans", data, app);
    setPlan(planResponse?.data?.data?.plan);
  };
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
  useEffect(() => {
    getCustomization();
    getPlans();
  }, []);
  useEffect(() => {
    data.bundleDetail.discountOptions.map((item, index) => {
      {
        item.type === "freeShipping" ? (
          <>
            {(item.quantity == data.bundleDetail.products.length ||
              (index === data.bundleDetail.discountOptions.length - 1 &&
                data.bundleDetail.products.length >= item.quantity)) &&
              setSelectedDiscountIndex(index)}
          </>
        ) : item.type === "fixed" ? (
          <>
            {(item.quantity == data.bundleDetail.products.length ||
              (index === data.bundleDetail.discountOptions.length - 1 &&
                data.bundleDetail.products.length >= item.quantity)) &&
              setSelectedDiscountIndex(index)}
          </>
        ) : item.type === "noDiscount" ? (
          <>
            {(item.quantity == data.bundleDetail.products.length ||
              (index === data.bundleDetail.discountOptions.length - 1 &&
                data.bundleDetail.products.length >= item.quantity)) &&
              setSelectedDiscountIndex(index)}
          </>
        ) : (
          <>
            {(item.quantity == data.bundleDetail.products.length ||
              (index === data.bundleDetail.discountOptions.length - 1 &&
                data.bundleDetail.products.length >= item.quantity)) &&
              setSelectedDiscountIndex(index)}
          </>
        );
      }
    });
  }, [data]);
  const getBundleData = async () => {
    let body = { id: param.id };
    setSpinner(true);
    const response = await postApi("/api/admin/editBundle", body, app);
    if (response.status === 200) {
      setData(response.data.response);
      setSpinner(false);
    }
  };
  const handleSave = async () => {
    if (plan == "free") {
      Swal.fire({
        title: 'Upgrade to "Basic" Plan',
        text: "Do you want to continue",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Get Plan",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#59da7c",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/plans");
        }
      });
    } else {
      let alertText = [];
      if (data.bundleDetail.products.length < 2) {
        alertText.push("Minimum  products for bundle  is 2.");
      } else if (
        data.bundleDetail.products.length <
          data.bundleDetail.discountOptions[
            data.bundleDetail.discountOptions.length - 1
          ].quantity &&
        data.bundleDetail.multiItemSelection.enable === false
      ) {
        alertText.push(
          `Please select number of products which is equal to or greater than ${data.bundleDetail.discountOptions[data.bundleDetail.discountOptions.length - 1].quantity}, Otherwise enable multi select option`
        );
      }

      if (data.bundleDetail.display.productPagesList.length <= 0) {
        alertText.push(
          "Please select at least one product from display options"
        );
      }

      if (data.name.trim() == "") {
        alertText.push("Please provide name of bundle");
      }

      if (data.title.trim() == "") {
        alertText.push("Please provide title of bundle");
      }
      if (errorArray.length != 0) {
        alertText.push("Options quantities must be in increasing order");
      }
      if (
        data.bundleDetail.multiItemSelection.enable == true &&
        data.bundleDetail.multiProductsArray.multiProductArray.length == 0
      ) {
        alertText.push(
          `You have enabled multi select option but not selected any product, Please select at least one product`
        );
      }
      if (
        data.bundleDetail.requiredItem.enable == true &&
        data.bundleDetail.requiredProductsArray.requiredProductArray.length == 0
      ) {
        alertText.push(
          `You have enabled required item option but not selected any product, Please select at least one product`
        );
      }
      setWariningText(alertText);
      const showBanner = alertText.length > 0;
      setShowBanner(showBanner);
      if (!showBanner) {
        setSpinner(true);
        setErrorArray("");
        setPickerError([]);
        if (param.id == "create") {
          try {
            const response = await postApi(
              "/api/admin/createBundle",
              data,
              app
            );
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
    }
  };
  function calculateFinalPrice() {
    let finalPrice = 0;

    if (data.bundleDetail.products.length < 2) {
      finalPrice = calculateMrp();
    } else {
      if (
        data.bundleDetail.discountOptions[selectedDiscountIndex].type ==
        "percent"
      ) {
        if (
          data.bundleDetail.discountOptions[selectedDiscountIndex].value > 100
        ) {
          finalPrice = 0;
        } else {
          finalPrice =
            calculateMrp() -
            calculateMrp() *
              (data.bundleDetail.discountOptions[selectedDiscountIndex].value /
                100);
        }
      } else if (
        data.bundleDetail.discountOptions[selectedDiscountIndex].type == "fixed"
      ) {
        if (
          parseFloat(
            data.bundleDetail.discountOptions[selectedDiscountIndex].value
          ) > calculateMrp()
        ) {
          finalPrice = selectedDiscountIndex;
        } else {
          finalPrice =
            calculateMrp() -
            data.bundleDetail.discountOptions[selectedDiscountIndex].value;
        }
      } else if (
        data.bundleDetail.discountOptions[selectedDiscountIndex].type == "price"
      ) {
        if (
          data.bundleDetail.discountOptions[selectedDiscountIndex].value >
          calculateMrp()
        ) {
          finalPrice = calculateMrp();
        } else {
          finalPrice =
            data.bundleDetail.discountOptions[selectedDiscountIndex].value;
        }
      } else if (
        data.bundleDetail.discountOptions[selectedDiscountIndex].type ==
          "freeShipping" ||
        data.bundleDetail.discountOptions[selectedDiscountIndex].type ==
          "noDiscount"
      ) {
        finalPrice = calculateMrp();
      }
    }
    return finalPrice;
  };
  useEffect(() => {
    let newArray = [];
    if (data.bundleDetail.products.length > 0) {
      data.bundleDetail.products.map((item, index) => {
        newArray.push(
          Array.from(
            { length: item.minimumOrder },
            (x, itemIndex) => item.variants[0].price
          )
        );
      });
      // console.log('hello test ====>',newArray);
      setArr(newArray);
    } else {
      setArr([]);
    }
  }, [data]);
  const handleDeleteDiscountOption = (index) => {
    let update = { ...data };
    if (update.bundleDetail.discountOptions.length <= 2) {
      setDisableAddOptions(false);
    }
    let lengthOfData = update.bundleDetail.discountOptions.length;
    update.bundleDetail.discountOptions.splice(index, 1);
    if (lengthOfData > 2) {
      removeOptionErrHandler(lengthOfData - 1);
      if (index > 0) {
        removeValidationHandler(
          update.bundleDetail.discountOptions[index - 1].quantity,
          update.bundleDetail.discountOptions,
          index - 1
        );
      } else if (index == 0) {
        removeValidationHandler(
          update.bundleDetail.discountOptions[index + 1].quantity,
          update.bundleDetail.discountOptions,
          index + 1
        );
      }
    } else {
      setErrorArray([]);
    }
    setData(update);
    // console.log("delete data successfully");

    let update2 = [...priceData];
    update2.splice(index, 1);
    setPriceData(update2);
    // console.log("update priceData successfully");

    let update3 = [...sumData];
    update3.splice(index, 1);
    setSumData(update3);
    // console.log("update sumData successfully");

    let newUpdate = [...endPriceData];
    newUpdate.splice(index, 1);
    setEndPriceData(newUpdate);
    // console.log("update endPriceData successfully");
    setSelectedDiscountIndex(data.bundleDetail.discountOptions.length - 1);
  };
  const removeOptionErrHandler = (deletedIndex) => {
    let copy = [...errorArray];

    if (errorArray.includes(`increasingOrder${deletedIndex}`) == true) {
      copy.splice(copy.indexOf(`increasingOrder${deletedIndex}`), 1);
      setErrorArray([...copy]);
    }
  };
  const removeValidationHandler = (newvalue, update, currentIndex) => {
    let copy = [...errorArray];
    let duplicates = [];
    let array = [];
    let isAscending = false;

    update.map((items, updateIndex) => {
      array.push(items.quantity);
    });
    array.forEach(function (value, index, array) {
      if (
        array.indexOf(value, index + 1) !== -1 &&
        duplicates.indexOf(value) === -1
      ) {
        duplicates.push(value);
      }
    });
    // console.log("dfgdhgfdsghfg dshcgfyjdsgyfgdygfjgfy yyjg", array, duplicates);
    if (duplicates.length == 0) {
      for (let i = 0; i < update.length - 1; i++) {
        if (update[i].quantity > update[i + 1].quantity) {
          isAscending = false;
          return;
        }
      }
      isAscending = true;
    }
    if (duplicates.length == 0 && isAscending == true) {
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
  const handleDiscountQuantity = (newvalue, index) => {
    if (newvalue == "" || newvalue <= 1) {
    } else if (newvalue != "" && newvalue != 0) {
      // console.log("else......");
      let update = { ...data };
      update.bundleDetail.discountOptions[index].quantity = parseInt(newvalue);

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
      setData(update);
    }
  };
  const handleDiscountType = (value, index) => {
    let update = { ...data };
    update.bundleDetail.discountOptions[index].type = value;
    setData(update);

    if (
      value == "percent" &&
      data.bundleDetail.discountOptions[index].value > 100
    ) {
      update.bundleDetail.discountOptions[index].value = 100;
      setData(update);
      let newUpdate = [...endPriceData];
      newUpdate.splice(index, 1, calculateFinalPrice(index, sumData));
      setEndPriceData(newUpdate);
    } else {
      let newUpdate = [...endPriceData];
      newUpdate.splice(index, 1, calculateFinalPrice(index, sumData));
      setEndPriceData(newUpdate);
    }
  };
  const handleDiscountValue = (newvalue, index) => {
    if (newvalue == "" || newvalue <= 0) {
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
        newvalue = newvalue.replace(/^0/, "");
        let update = { ...data };
        update.bundleDetail.discountOptions[index].value = newvalue;

        let newUpdate = [...endPriceData];
        newUpdate.splice(index, 1, calculateFinalPrice(index, sumData));
        setEndPriceData(newUpdate);
        setData(update);
      }
    }
  };
  function calculateMrp() {
    if (arr.length > 0) {
      let sum = 0;
      arr?.map((item) => {
        item.map((sub) => {
          sum += parseFloat(sub);
        });
      });
      setMrp(parseFloat(sum).toFixed(2));
      return parseFloat(sum.toFixed(2));
      // }else{
      //   setMrp(parseFloat(sum).toFixed(2));
      //   return parseFloat(sum.toFixed(2));
    }
  };
  const handleAddDiscountOption = () => {
    let update = { ...data };
    if (update.bundleDetail.discountOptions.length >= 2) {
      setDisableAddOptions(true);
    }
    update.bundleDetail.discountOptions.push({
      quantity:
        parseInt(
          update.bundleDetail.discountOptions[
            update.bundleDetail.discountOptions.length - 1
          ].quantity
        ) + 1,
      type: "percent",
      value: 5,
      // description: `Buy ${
      //   parseInt(
      //     update.bundleDetail.discountOptions[
      //       update.bundleDetail.discountOptions.length - 1
      //     ].quantity
      //   ) + 1
      // } & Save {discount}`,
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
  const handleCheck = (e, id) => {
    let update = { ...data };
    update.bundleDetail[`${id}`].enable = e;
    setData(update);
  };
  const handleRequiredProducts = (e, item) => {
    let key = "products";
    let bundleProduct = data.bundleDetail.products;
    let index = bundleProduct.findIndex((e) => e.id === item.id);
    if (e) {
      bundleProduct[index] = { ...bundleProduct[index], required: true };
      setData({
        ...data,
        bundleDetail: { ...data.bundleDetail, [key]: bundleProduct },
      });
      let copy = [...requiredProductArray];
      copy.push(bundleProduct[index]);
      setRequiredProductArray(copy);
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          requiredProductsArray: {
            ...data.bundleDetail.requiredProductsArray,
            requiredProductArray: [...copy],
          },
        },
      });
    } else {
      bundleProduct[index] = { ...bundleProduct[index], required: false };
      setData({
        ...data,
        bundleDetail: { ...data.bundleDetail, [key]: bundleProduct },
      });
      let copy = [...requiredProductArray];
      copy.splice(requiredProductArray.indexOf(bundleProduct[index]), 1);
      setRequiredProductArray(copy);
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          requiredProductsArray: {
            ...data.bundleDetail.requiredProductsArray,
            requiredProductArray: [...copy],
          },
        },
      });
    }
    // console.log("requiredProducts finally", "bundle product", data.bundleDetail.products)
  };
  const handleMultiProductsSelection = (e, item) => {
    let key = "products";
    let bundleProduct = data.bundleDetail.products;
    let index = bundleProduct.findIndex((e) => e.id === item.id);
    if (e) {
      bundleProduct[index] = { ...bundleProduct[index], multiItemSelect: true };
      setData({
        ...data,
        bundleDetail: { ...data.bundleDetail, [key]: bundleProduct },
      });
      let copy = [...multiProductArray];
      copy.push(bundleProduct[index]);
      setMultiProductArray(copy);
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          multiProductsArray: {
            ...data.bundleDetail.multiProductsArray,
            multiProductArray: [...copy],
          },
        },
      });
      // console.log("push selected products in array.................",bundleProduct[index]);
    } else {
      bundleProduct[index] = {
        ...bundleProduct[index],
        multiItemSelect: false,
      };
      setData({
        ...data,
        bundleDetail: { ...data.bundleDetail, [key]: bundleProduct },
      });
      let copy = [...multiProductArray];
      copy.splice(multiProductArray.indexOf(bundleProduct[index]), 1);
      setMultiProductArray(copy);
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          multiProductsArray: {
            ...data.bundleDetail.multiProductsArray,
            multiProductArray: [...copy],
          },
        },
      });
    }
    // console.log("multiProductsSelectionProducts finally", "bundle product", data.bundleDetail.products)
  };
  const handleDisplayOptions = (e, name) => {
    if (e) {
      if (name == "productPages") {
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
            display: { ...data.bundleDetail.display, [name]: true },
          },
        });
      }
    } else {
      if (name == "productPages") {
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
            display: { ...data.bundleDetail.display, [name]: false },
          },
        });
      }
    }
  };
  const handleDisplayPageOptions = (e, value) => {
    if (e) {
      let update = { ...data };
      if (update.bundleDetail.display?.productPagesList.length < 1) {
        update.bundleDetail.display = {
          ...update.bundleDetail.display,
          productPages: true,
          productPagesList: [value],
        };
        setData(update);
      } else {
        update.bundleDetail.display.productPagesList = [
          ...update.bundleDetail.display.productPagesList,
          value,
        ];
        setData(update);
      }
    } else {
      let update = { ...data };
      let temp = update.bundleDetail.display.productPagesList.filter((item) => {
        return item !== value;
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
  useEffect(() => {
    calculateMrp();

    setEndPrice(parseFloat(calculateFinalPrice()).toFixed(2));
  }, [arr]);
  useEffect(() => {
    if (param.id !== "create") {
      getBundleData();
    }
  }, []);
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
        <AlertBanner
          showBanner={showBanner}
          alertText={warningtText}
          setShowBanner={setShowBanner}
        />
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <BlockStack gap="400">
              <Card>
                <Text variant="headingMd">Product Mix & Match Bundle</Text>
                <BundlePickerData
                  DescText={"Add product you want to sell"}
                  PickerType={"product"}
                  page="productMixMatch"
                  data={data}
                  setData={setData}
                  temp={temp}
                  errorArray={pickerError}
                  Multiple={true}
                  setPriceData={setPriceData}
                  Placeholder={"Products"}
                />
              </Card>
              <Card>
                <Text variant="headingMd">Discount Options</Text>
                {data.bundleDetail.discountOptions.map((item, index) => (
                  <Fragment key={index}>
                    <Text>Option {index + 1}</Text>
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
                      <InlineGrid InlineGrid gap={400} columns={3}>
                        <TextField
                          label="Required items"
                          type="number"
                          onChange={(newvalue) =>
                            handleDiscountQuantity(newvalue, index)
                          }
                          value={item.quantity}
                          autoComplete="off"
                          min={2}
                        />
                        {errorArray.includes(`minimumQuantity${index}`) && (
                          <InlineError message="Minimum quantity must be 2 " />
                        )}
                        {errorArray.includes(`increasingOrder${index}`) && (
                          <InlineError message="Options quantities must be in increasing order " />
                        )}
                        <Select
                          label="Discount Type"
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
                              value: "freeShipping",
                              label: "Free Shipping",
                            },
                            {
                              value: "noDiscount",
                              label: "No Discount",
                            },
                          ]}
                        />
                        {(data.bundleDetail.discountOptions[index].type ===
                          "percent" ||
                          data.bundleDetail.discountOptions[index].type ===
                            "fixed") && (
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
                        )}
                      </InlineGrid>
                      <Divider />
                    </BlockStack>
                    <br />
                  </Fragment>
                ))}
                {data.bundleDetail.discountOptions.length >= 3 ? (
                  <Button
                    size="large"
                    disabled
                    variant="tertiary"
                    onClick={handleAddDiscountOption}
                  >
                    Add Another Option
                  </Button>
                ) : (
                  <Button
                    size="large"
                    disabled={false}
                    onClick={handleAddDiscountOption}
                  >
                    Add Another Option
                  </Button>
                )}
              </Card>

              <General data={data} setData={setData} errorArray={errorArray} />

              <Card>
                <Text variant="headingMd">Required products</Text>
                <Text>
                  If you need to force some products of the bundle to be
                  selected, activate this option and then check the products
                  that should be considered as required in this bundle.
                </Text>
                <BlockStack gap={300}>
                  <Checkbox
                    id="requiredItem"
                    checked={data.bundleDetail.requiredItem.enable}
                    onChange={(e, id) => {
                      handleCheck(e, id);
                    }}
                    label="Enable required products"
                  />
                  {data.bundleDetail.requiredItem.enable && (
                    <>
                      {data.bundleDetail.products.map((item, index) => {
                        return (
                          <Fragment key={index}>
                            <Divider />
                            <InlineStack gap={100} wrap={true}>
                              <Checkbox
                                checked={item.required}
                                onChange={(e) => {
                                  handleRequiredProducts(e, item);
                                }}
                              />
                              <Thumbnail
                                source={
                                  item?.image
                                    ? item?.image?.originalSrc
                                    : item?.images
                                      ? item?.images[0]?.originalSrc
                                      : item?.src
                                        ? item?.src
                                        : pic
                                }
                                alt=""
                                size="small"
                              />
                              <Text>{item.title}</Text>
                            </InlineStack>
                          </Fragment>
                        );
                      })}
                    </>
                  )}
                </BlockStack>
              </Card>
              <Card>
                <Text variant="headingMd">Multi selection options</Text>
                <Text>
                  If you need to allow some products to be selected multiple
                  time in the bundle, activate this option and then check the
                  products that multiple items of them can be selected in this
                  bundle.
                </Text>
                <BlockStack gap={300}>
                  <Checkbox
                    id="multiItemSelection"
                    checked={data.bundleDetail.multiItemSelection.enable}
                    onChange={(e, id) => {
                      handleCheck(e, id);
                    }}
                    label="Enable selecting multiple items"
                  />
                  {data.bundleDetail.multiItemSelection.enable && (
                    <>
                      {data.bundleDetail.products.map((item, index) => {
                        return (
                          <Fragment key={index}>
                            <Divider />
                            <InlineStack gap={100} wrap={true}>
                              <Checkbox
                                checked={item.multiItemSelect}
                                onChange={(e) => {
                                  handleMultiProductsSelection(e, item);
                                }}
                              />
                              <Thumbnail
                                source={
                                  item?.image
                                    ? item?.image?.originalSrc
                                    : item?.images
                                      ? item?.images[0]?.originalSrc
                                      : item?.src
                                        ? item?.src
                                        : pic
                                }
                                alt=""
                                size="small"
                              />
                              <Text>{item.title}</Text>
                            </InlineStack>
                          </Fragment>
                        );
                      })}
                    </>
                  )}
                </BlockStack>
              </Card>
            </BlockStack>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <BlockStack gap={400}>
              <BundleStatus data={data} setData={setData} />
              <DisplayOptions
                bundleType="productMixMatch"
                display={data.bundleDetail.display}
                handleDisplayOptions={handleDisplayOptions}
                displayPageOptions={data.bundleDetail.display.productPages}
                handleDisplayPageOptions={handleDisplayPageOptions}
                products={data.bundleDetail.products}
                data={data}
              />
              <Card sectioned>
                <Text as="h2" variant="headingSm">
                  Preview
                </Text>
                <ProductMixMatchPreview
                  data={data}
                  currency={currencyCode}
                  mrp={mrp}
                  endPrice={endPrice}
                  showPrice={showPrice}
                  bundleType={"productMixMatch"}
                  errorArray={errorArray}
                  discountIndex={selectedDiscountIndex}
                />
              </Card>
            </BlockStack>
          </Grid.Cell>
        </Grid>
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

export default ProductMixMatch;
