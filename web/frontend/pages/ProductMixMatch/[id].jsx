import React, { useEffect, useState } from "react";
import { Col, Row, Button, Input, Divider, Modal, Select, Spin } from "antd";
import MoveToHomePage from "../../components/commonSections/MoveToHomePage";
import toastNotification from "../../components/commonSections/Toast";
import AlertSection from "../../components/commonSections/AlertSection";
// import BoatLoader from "../../components/BoatLoader";
import BundlePickerData from "../../components/resourcePickerData/BundlePickerData";
import { useAppBridge } from "@shopify/app-bridge-react";
import CreateBundleModal from "../../components/createBundleModal";
import { useAPI } from "../../components/shop";
import defaultData from "../../components/customization/defaultData.json";
import BundleStatus from "../../components/commonSections/bundleStatus";
import DateTime from "../../components/commonSections/dateTime";
import DeleteSave from "../../components/commonSections/deleteSave";
import { TextField, InlineError } from "@shopify/polaris";
import ProductVariantData from "../../components/productVariantData";
import { Thumbnail } from "@shopify/polaris";
import { useNavigate, useParams } from "react-router-dom";
import postApi from "../../components/postApi";
import { alertCommon } from "../../components/helperFunctions";
import General from "../../components/bxgy/General";
import DisplayOptions from "../../components/commonSections/displayOptions";
import e from "cors";
import { BuyPlanAlert } from "../../components/commonSections/buyPlansAlert";
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
  const [searchValue, setSearchValue] = useState("");
  const [variantData, setVariantData] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);
  const [antModal, setAntModal] = useState(false);
  const [pickerError, setPickerError] = useState([]);
  const [myModal, setMyModal] = useState(false);
  const app = useAppBridge();
  const [selectedDiscountIndex, setSelectedDiscountIndex] = useState(0);
  const [selectedPlacement, setSelectedPlacement] = useState({
    productPage: true,
    bundlePage: false,
  });
  const [plan, setPlan] = useState("");
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
      // console.log("test......................",response);
      
      setData((prevData) => ({
        ...prevData,
        customization: [response.data.response],
      }));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCustomization()
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

  const handleSearchInput = (e) => {
    const { value } = e.target;
    if (value) {
      setMyModal(true);
      setSearchValue(value);
    } else {
      setSearchValue("");
    }
  };

  const handleBrowseProducts = async () => {
    setMyModal(true);
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
      // console.log("enter in save function");
      let alertText = [];
      let flag = true;

      if (data.bundleDetail.products.length < 2) {
        flag = false;
        alertText.push("Minimum  products for bundle  is 2.");
      } else if (
        data.bundleDetail.products.length <
          data.bundleDetail.discountOptions[
            data.bundleDetail.discountOptions.length - 1
          ].quantity &&
        data.bundleDetail.multiItemSelection.enable === false
      ) {
        flag = false;
        alertText.push(
          `Please select number of products which is equal to or greater than ${data.bundleDetail.discountOptions[data.bundleDetail.discountOptions.length - 1].quantity}, Otherwise enable multi select option`
        );
      }

      if (data.bundleDetail.display.productPagesList.length <= 0) {
        flag = false;
        alertText.push(
          "Please select at least one product from display options"
        );
      }

      if (data.name.trim() == "") {
        flag = false;
        alertText.push("Please provide name of bundle");
      }

      if (data.title.trim() == "") {
        flag = false;
        alertText.push("Please provide title of bundle");
      }
      // if (data.startdate == "") {
      //   if (!errorArray.includes("startdate")) {
      //     setErrorArray((prev) => [...prev, "startdate"]);
      //   }
      //   flag = false;
      //   alertText.push("Please select start date & time");
      // }
      if (errorArray.length != 0) {
        // console.log("enter in flag false section------->>>>>>------>>>>>");
        flag = false;
        alertText.push("Options quantities must be in increasing order");
      }
      if (
        data.bundleDetail.multiItemSelection.enable == true &&
        data.bundleDetail.multiProductsArray.multiProductArray.length == 0
      ) {
        // console.log("enter in new functions");
        flag = false;
        alertText.push(
          `You have enabled multi select option but not selected any product, Please select at least one product`
        );
      }
      if (
        data.bundleDetail.requiredItem.enable == true &&
        data.bundleDetail.requiredProductsArray.requiredProductArray.length == 0
      ) {
        // console.log("enter in requiredItem functions");
        flag = false;
        alertText.push(
          `You have enabled required item option but not selected any product, Please select at least one product`
        );
      }
      if (flag == false) {
        alertCommon(setAlert, alertText, "critical", false);
      }

      if (flag == true) {
        setSpinner(true);
        setErrorArray("");
        setPickerError([]);
        // console.log("enter in else section=====-----=====------=====>>>>>>>>>");
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
  }

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

  const handleDiscountDescription = (e, index) => {
    let update = { ...data };
    update.bundleDetail.discountOptions[index].description = e.target.value;
    setData(update);
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
  }

  const handleAddDiscountOption = () => {
    let update = { ...data };
    // console.log("check the control of option button==========>>>>>>>>>>.................",update.bundleDetail.discountOptions.length);
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
  const setCancel = () => {
    setVariantData([]);
    setCheckedIds([]);
    setPid("");
    let copy = [...errorArray];
    copy.splice(copy.indexOf("uncheckedVariantModal"), 1);
    setErrorArray(copy);
    setAntModal(false);
  };

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

  const handleCheck = (e) => {
    let update = { ...data };
    update.bundleDetail[`${e.target.id}`].enable = e.target.checked;
    setData(update);
    //  console.log("datat=", data.bundleDetail.requiredItem, data.bundleDetail.multiItemSelection, data)
  };

  const handleRequiredProducts = (e, item) => {
    // console.log(e.target.checked, item.required, data.bundleDetail.products)

    let key = "products";
    let bundleProduct = data.bundleDetail.products;
    let index = bundleProduct.findIndex((e) => e.id === item.id);
    if (e.target.checked) {
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
    // console.log(e.target.checked, item.id, data.bundleDetail.products)
    let key = "products";
    let bundleProduct = data.bundleDetail.products;
    let index = bundleProduct.findIndex((e) => e.id === item.id);
    if (e.target.checked) {
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
  // const handlePlacementsSelection = (e, type) =>{
  //     if(type==="productPage"){
  //       setSelectedPlacement({...selectedPlacement,productPage:e.target.checked});
  //     }
  //     if(type==="bundlePage"){
  //       setSelectedPlacement({...selectedPlacement,bundlePage:e.target.checked});
  //     }
  //   }

  const handleDisplayOptions = (e) => {
    // console.log("check name of option:::::::::::::::::::::::::::::::>",e.target.name);
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

  useEffect(() => {
    calculateMrp();

    setEndPrice(parseFloat(calculateFinalPrice()).toFixed(2));
  }, [arr]);

  useEffect(() => {
    if (param.id !== "create") {
      getBundleData();
    }
  }, []);

  return (
    <Spin spinning={spinner} size="large">
      <div className="Polaris-Page Polaris-Page--fullWidth">
        <MoveToHomePage data={headerkey} />

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
                Add product you want to sell
              </div>
              <div className="sd-bundle-search">
                <input
                  type="text"
                  placeholder="Search products"
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
                page="productMixMatch"
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
                page={"productMixMatch"}
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
                    <p>Option {index + 1}</p>
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
                          // min={item.quantity}
                          autoComplete="off"
                          min={2}
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
                            // {
                            //   value: "price",
                            //   label: "Set Price",
                            // },
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
                      </div>
                    </Col>
                    {(data.bundleDetail.discountOptions[index].type ===
                      "percent" ||
                      data.bundleDetail.discountOptions[index].type ===
                        "fixed") && (
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
                            min={1}
                            // max={100}
                          />
                        </div>
                      </Col>
                    )}
                  </Row>
                  {/* <br /> */}

                  {/* <span className="sd-bundle-Disclaimer-common">
                  Use discount to show the discount value
                </span> */}
                  {/* <br /> */}

                  {/* {data.bundleDetail.discountOptions.length == index + 1 && (
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
                )} */}
                  <Divider />
                </div>
              ))}
              {data.bundleDetail.discountOptions.length >= 3 ? (
                <Button
                  size="large"
                  disabled={true}
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
              {/* <Button size="large" disabled={disableAddOptions} onClick={handleAddDiscountOption}>
              Add Another Option
            </Button> */}
            </div>

            <General data={data} setData={setData} errorArray={errorArray} />

            {/* <div className="sd-bundle-bundleSection-common sd-bundle-createBundleNamingSection">
              <div className="sd-bundle-bundleSection-heading-common">
                Placements
              </div>
              <div className="sd-bundle-plainText-common">
                Choose where to display this bundle and preview the options to see which one you prefer.
              </div>
              <div>
                <div>
                  <input 
                    type="checkbox" 
                    onChange={(e)=>{handlePlacementsSelection(e,"productPage")}}
                    checked={selectedPlacement.productPage===true}
                  />
                  <label>Included products page</label>
                </div>
                <div>
                  <input 
                    type="checkbox" 
                    onChange={(e)=>{handlePlacementsSelection(e,"bundlePage")}}
                    checked={selectedPlacement.bundlePage===true}
                  />
                  <label>Bundles page</label>
                </div>
              </div>
              {selectedPlacement.productPage===true && 
                <div>
                  <hr/>
                  <div>Included products page</div>
                  <div>Select the included products page on which the bundle will be displayed.</div>
                  {data?.bundleDetail?.products?.map((item,index)=>{
                    return(
                      <div><input type="checkbox" />{item.title}</div>
                    )
                  })
                  }
                </div>
              }
            </div> */}

            {/* <DiscountOptions
              discountType={data.bundleDetail.discountType}
              discountValue={data.bundleDetail.discountValue}
              handleDiscountType={handleDiscountType}
              handleDiscountValue={handleDiscountValue}
              currency={currencyCode}
            /> */}

            <div className="sd-bundle-bundleSection-common">
              <p className="sd-bundle-bundleSection-heading-common">
                Required products
              </p>
              <p className="sd-bundle-plainText-common">
                If you need to force some products of the bundle to be selected,
                activate this option and then check the products that should be
                considered as required in this bundle.
              </p>
              <div className="sd-bundle-toggle-end-time">
                <input
                  type="checkbox"
                  checked={data.bundleDetail.requiredItem.enable}
                  id="requiredItem"
                  onChange={(e) => {
                    handleCheck(e);
                  }}
                />
                <label for="requiredItem">Enable required products</label>
                {data.bundleDetail.requiredItem.enable && (
                  <div className="sd-bundle-ProductListMain">
                    {data.bundleDetail.products.map((item, index) => {
                      return (
                        <>
                          <div
                            key={index}
                            className="sd-bundle-selectedProductList"
                          >
                            <div className="sd-bundle-image-title">
                              <div>
                                <input
                                  type="checkbox"
                                  checked={item.required}
                                  onChange={(e) => {
                                    handleRequiredProducts(e, item);
                                  }}
                                />
                              </div>
                              <div>
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
                              </div>

                              <div
                                key={index}
                                className="sd-bundle-title-section"
                              >
                                <div className="sd-bundle-title">
                                  {item.title}
                                </div>
                              </div>
                            </div>
                          </div>

                          {index !== data.bundleDetail.products.length - 1 ? (
                            <Divider />
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="sd-bundle-bundleSection-common">
              <p className="sd-bundle-bundleSection-heading-common">
                Multi selection options
              </p>
              <p className="sd-bundle-plainText-common">
                If you need to allow some products to be selected multiple time
                in the bundle, activate this option and then check the products
                that multiple items of them can be selected in this bundle.
              </p>
              <div className="sd-bundle-toggle-end-time">
                <input
                  type="checkbox"
                  checked={data.bundleDetail.multiItemSelection.enable}
                  id="multiItemSelection"
                  onChange={(e) => {
                    handleCheck(e);
                  }}
                />
                <label for="multiItemSelection">
                  Enable selecting multiple items
                </label>
                {data.bundleDetail.multiItemSelection.enable && (
                  <div className="sd-bundle-ProductListMain">
                    {data.bundleDetail.products.map((item, index) => {
                      return (
                        <>
                          <div
                            key={index}
                            className="sd-bundle-selectedProductList"
                          >
                            <div className="sd-bundle-image-title">
                              <div>
                                <input
                                  type="checkbox"
                                  checked={item.multiItemSelect}
                                  onChange={(e) => {
                                    handleMultiProductsSelection(e, item);
                                  }}
                                />
                              </div>
                              <div>
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
                              </div>

                              <div
                                key={index}
                                className="sd-bundle-title-section"
                              >
                                <div className="sd-bundle-title">
                                  {item.title}
                                </div>
                              </div>
                            </div>
                          </div>

                          {index !== data.bundleDetail.products.length - 1 ? (
                            <Divider />
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            {/* <DateTime data={data} setData={setData} errorArray={errorArray} /> */}
            <DeleteSave handleSave={handleSave} />
          </div>

          <div className="sd-bundle-productBundle-rightSection Polaris-Layout__Section Polaris-Layout__Section--secondary">
            <BundleStatus data={data} setData={setData} />

            <DisplayOptions
              bundleType="prupductMixMatch"
              display={data.bundleDetail.display}
              handleDisplayOptions={handleDisplayOptions}
              displayPageOptions={data.bundleDetail.display.productPages}
              handleDisplayPageOptions={handleDisplayPageOptions}
              products={data.bundleDetail.products}
              data={data}
            />

            <ProductMixMatchPreview
              data={data}
              currency={currencyCode}
              mrp={mrp}
              endPrice={endPrice}
              showPrice={showPrice}
              // handleVariantChoice={handleVariantChoice}
              bundleType={"productMixMatch"}
              errorArray={errorArray}
              discountIndex={selectedDiscountIndex}
            />
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
  );
};

export default ProductMixMatch;
