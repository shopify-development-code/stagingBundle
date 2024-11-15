import React, { Children, useEffect, useState } from "react";
import {
  SaveBar,
  TitleBar,
  useAppBridge,
  Modal,
} from "@shopify/app-bridge-react";
import {
  Banner,
  BlockStack,
  Button,
  Card,
  Checkbox,
  Collapsible,
  Grid,
  InlineStack,
  Page,
  Popover,
  RadioButton,
  ResourceList,
  Select,
  Text,
  TextField,
  Thumbnail,
} from "@shopify/polaris";
import { useNavigate, useParams } from "react-router-dom";
import defaultData from "../../components/customization/defaultData.json";
import { useAPI } from "../../components/shop";
import { DeleteIcon, DisabledIcon, SearchIcon } from "@shopify/polaris-icons";
import General from "../../components/bxgy/General";
import ProductBundlePreview from "../../components/bundles preview/productBundlePreview";
import DiscountOptions from "../../components/commonSections/discountOptions";
import BundleStatus from "../../components/commonSections/bundleStatus";
import DisplayOptions from "../../components/commonSections/displayOptions";
import postApi from "../../components/postApi";
import {
  AlertBanner,
} from "../../components/helperFunctions";
import toastNotification from "../../components/commonSections/Toast";
import BundlePickerData from "../../components/resourcePickerData/BundlePickerData";

const CreateBundle = () => {
  const { shop, timeZone, currencyCode } = useAPI();
  const navigate = useNavigate();
  const app = useAppBridge();
  const [mrp, setMrp] = useState(0);
  const [searchText, setSearchText] = useState("");
  const param = useParams();
  const [endPrice, setEndPrice] = useState(0);
  const [showPrice, setShowPrice] = useState({});
  const [errorArray, setErrorArray] = useState([]);
  let headerkey = "Create Product Bundle";
  let DescText = "Add product you want to sell";
  const [pid, setPid] = useState("");
  const [loader, setLoader] = useState(false);
  const [pickerError, setPickerError] = useState([]);
  const [alert, setAlert] = useState({ state: false, message: [], status: "" });
  const [arr, setArr] = useState([]);
  const [variantData, setVariantData] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);
  const [antModal, setAntModal] = useState(false);
  let [showBanner, setShowBanner] = useState(false);
  let [warningtText, setWariningText] = useState([]);
  const [data, setData] = useState({
    shop: shop,
    type: "productBundle",
    name: "",
    title: "",
    description: "",
    badgeText: "",
    status: "active",
    startdate: "",
    endDate: "",
    currencyCode: currencyCode,
    bundleDetail: {
      discountType: "percent",
      discountValue: 5,
      products: [],
      display: {
        productPages: true,
        popUp: false,
        bundle: false,
        productPagesList: [],
      },
    },
    customization: [defaultData],
    timeZone: timeZone,
  });
  const temp = {
    setPid,
    setAntModal,
    setLoader,
    setCheckedIds,
    setVariantData,
  };
  const getBundleData = async () => {
    let body = { id: param.id };
    // setSpinner(true);
    const response = await postApi("/api/admin/editBundle", body, app);
    if (response.status === 200) {
      setData(response.data.response);
      // setSpinner(false);
    }
  };
  useEffect(() => {
    if (param.id !== "create") {
      getBundleData();
    }
  }, []);
  const handleVariantChoice = (e, main, index) => {
    let newArr = [...arr];

    setShowPrice({ ...showPrice, [main]: e.target.value });
    newArr[main].splice(index, 1, e.target.value);

    setArr(newArr);
  };
  const handleDiscountType = (e) => {
    if (e == "percent" && data.bundleDetail.discountValue > 100) {
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          discountType: e,
          discountValue: 100,
        },
      });
    } else {
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          discountType: e,
        },
      });
    }
  };
  const handleDiscountValue = (newvalue) => {
    if (newvalue == "" || newvalue < 0) {
      setData({
        ...data,
        bundleDetail: {
          ...data.bundleDetail,
          discountValue: 1,
        },
      });
    } else {
      newvalue = String(newvalue);

      newvalue = newvalue.replace(/^0/, 1);
      if (data.bundleDetail.discountType == "percent" && newvalue > 100) {
        setData({
          ...data,
          bundleDetail: {
            ...data.bundleDetail,
            discountValue: 100,
          },
        });
      } else {
        setData({
          ...data,
          bundleDetail: {
            ...data.bundleDetail,
            discountValue: newvalue,
          },
        });
      }
    }
  };
  function calculateFinalPrice() {
    let finalPrice = 0;

    if (data.bundleDetail.products.length < 2) {
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
      } else if (data.bundleDetail.discountType == "fixed") {
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
    return finalPrice;
  }
  function calculateMrp() {
    let sum = 0;

    arr?.map((item) => {
      item.map((sub) => {
        sum += parseFloat(sub);
      });
    });

    setMrp(parseFloat(sum).toFixed(2));
    return parseFloat(sum.toFixed(2));
  }
  const handleDisplayOptions = (e, name) => {
    if (e == true) {
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
    if (e == true) {
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
  const handleSave = async () => {
    let alertText = [];
    let invalidOrders = [];

    // Check minimum order conditions
    data.bundleDetail.products.forEach((item, index) => {
      if (item.minimumOrder < 1 || item.minimumOrder === "") {
        invalidOrders.push(index);
      }
    });

    // Check for at least one product in productPagesList
    if (data.bundleDetail.display.productPagesList.length === 0) {
      setShowBanner(true);
      alertText.push("Please select at least one product from display options");
    }

    // Check bundle product conditions
    if (invalidOrders.length > 0 || data.bundleDetail.products.length < 2) {
      setPickerError(invalidOrders);
      setShowBanner(true);
      alertText.push(
        "Minimum products for bundle is 2 & Minimum Order for each product cannot be empty or less than 1."
      );
    }

    // Check bundle name
    if (data.name.trim() === "") {
      if (!errorArray.includes("bundleName")) {
        setErrorArray((prev) => [...prev, "bundleName"]);
      }
      setShowBanner(true);
      alertText.push("Please provide the name of the bundle");
    }

    // Check bundle title
    if (data.title.trim() === "") {
      if (!errorArray.includes("bundleTitle")) {
        setErrorArray((prev) => [...prev, "bundleTitle"]);
      }
      setShowBanner(true);
      alertText.push("Please provide the title of the bundle");
    }
    setWariningText(alertText);
    // Determine whether to show the banner
    const showBanner = alertText.length > 0;
    setShowBanner(showBanner);
    // console.log("Should show banner:", showBanner);

    if (!showBanner) {
      // Clear errors before proceeding
      setErrorArray([]);
      setPickerError([]);

      // API call for creating or updating the bundle
      const endpoint =
        param.id === "create"
          ? "/api/admin/createBundle"
          : "/api/admin/updateBundle";
      const response = await postApi(endpoint, data, app);

      if (response.data.status === 200) {
        const successMessage =
          param.id === "create" ? "Saved" : "Updated successfully";
        toastNotification("success", successMessage, "bottom");
        navigate("/bundle");
      } else {
        alertCommon(setAlert, ["Something went wrong"], "warning", false);
      }
    }
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
  useEffect(() => {
    setEndPrice(parseFloat(calculateFinalPrice()).toFixed(2));
  }, [arr, data.bundleDetail.discountType, data.bundleDetail.discountValue]);
  useEffect(() => {
    let dummyArray = [];
    data.bundleDetail.products.map((item, mainindex) => {
      dummyArray.push(
        Array.from(
          { length: item.minimumOrder },
          (x, itemIndex) => item.variants[0].price
        )
      );
    });
    setArr(dummyArray);
    setShowPrice({});
  }, [data.bundleDetail.products]);
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
                <BundlePickerData
                  page={"productBundle"}
                  temp={temp}
                  pickerError={pickerError}
                  antModal={antModal}
                  setData={setData}
                  data={data}
                  pid={pid}
                  setPid={setPid}
                  checkedIds={checkedIds}
                  variantData={variantData}
                  setCheckedIds={setCheckedIds}
                  loader={loader}
                  errorArray={errorArray}
                  setPickerError={setPickerError}
                  setVariantData={setVariantData}
                  setAntModal={setAntModal}
                  setErrorArray={setErrorArray}
                  DescText={DescText}
                  PickerType={"product"}
                  Multiple={true}
                  Placeholder={"Products"}
                />
              </Card>
              {/* General Card  */}
              <General data={data} setData={setData} />
              {/* Discount Card  */}
              <DiscountOptions
                discountType={data.bundleDetail.discountType}
                discountValue={data.bundleDetail.discountValue}
                handleDiscountType={handleDiscountType}
                handleDiscountValue={handleDiscountValue}
                currency={currencyCode}
              />
            </BlockStack>
          </Grid.Cell>
          {/* Second Column  */}
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <BlockStack gap="400">
              {/* Bundle Status Card  */}
              <BundleStatus data={data} setData={setData} />
              {/* Display Option Card  */}
              <DisplayOptions
                bundleType="productBundle"
                display={data.bundleDetail.display}
                handleDisplayOptions={handleDisplayOptions}
                displayPageOptions={data.bundleDetail.display.productPages}
                handleDisplayPageOptions={handleDisplayPageOptions}
                products={data.bundleDetail.products}
                data={data}
              />
              {/* Preview Bundle Card  */}
              <Card sectioned>
                <Text as="h2" variant="headingSm">
                  Preview
                </Text>
                <ProductBundlePreview
                  data={data}
                  currency={currencyCode}
                  mrp={mrp}
                  endPrice={endPrice}
                  showPrice={showPrice}
                  handleVariantChoice={handleVariantChoice}
                  bundleType={"productBundle"}
                  errorArray={errorArray}
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
export default CreateBundle;
