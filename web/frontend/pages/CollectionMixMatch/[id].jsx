import React, { useState, useEffect, Fragment } from "react";
import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { useAPI } from "../../components/shop";
import DiscountOptions from "../../components/commonSections/discountOptions";
import BundleStatus from "../../components/commonSections/bundleStatus";
import DisplayOptions from "../../components/commonSections/displayOptions";
import BundlePickerData from "../../components/resourcePickerData/BundlePickerData";
import {
  TextField,
  InlineError,
  Thumbnail,
  Page,
  Text,
  Grid,
  Card,
  BlockStack,
  Button,
} from "@shopify/polaris";
import { AlertBanner, alertCommon } from "../../components/helperFunctions";
import defaultData from "../../components/customization/defaultData.json";
import postApi from "../../components/postApi";
import { useNavigate, useParams } from "react-router-dom";
import toastNotification from "../../components/commonSections/Toast";
import noImg from "../../assets/no-Image.png";
import General from "../../components/bxgy/General";
import CollectionBundlePreview from "../../components/bundles preview/collectionBundlePreview";

const CollectionMixMatch = () => {
  const param = useParams();
  const navigate = useNavigate();
  const app = useAppBridge();
  let headerkey = "Create Collection Mix & Match";
  const [error, setError] = useState("");
  const [errorArray, setErrorArray] = useState([]);
  const [quantityError, setQuantityError] = useState([]);
  const [alert, setAlert] = useState(false);
  const [spinner, setSpinner] = useState(false);
  let [showBanner, setShowBanner] = useState(false);
  let [warningtText, setWariningText] = useState([]);
  const { shop, timeZone, currencyCode } = useAPI();
  const [data, setData] = useState({
    name: "",
    title: "Create Your Bundle & Get Discount",
    description: "",
    shop: "",
    badgeText: "",
    type: "collectionMixMatch",
    status: "active",
    startdate: new Date(),
    endDate: "",
    bundleDetail: {
      products: [],
      display: { productPages: true, bundle: true, productPagesList: [] },
      quantities: [],
      discountType: "percent",
      discountValue: 5,
    },
    customization: [defaultData],
    timeZone: timeZone,
  });
  const temp = {}; //don't delete it
  const getCollectionMixMatchData = async () => {
    let body = { id: param.id };
    setSpinner(true);
    const response = await postApi("/api/admin/editBundle", body, app);
    if (response.status === 200) {
      setData(response.data.response);
      setSpinner(false);
    }
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
    getCustomization();
    if (param.id !== "create") {
      getCollectionMixMatchData();
    }
  }, []);
  const handleDiscountType = (e) => {
    setData({
      ...data,
      bundleDetail: {
        ...data.bundleDetail,
        discountType: e,
      },
    });
  };
  useEffect(() => {
    let update = { ...data };
    if (data.bundleDetail.discountType == "percent") {
      update.bundleDetail.description =
        "Buy products from below collections,Save {discount}";
      if (data.bundleDetail.discountValue > 100) {
        update.bundleDetail.discountValue = 100;
      }
      setData(update);
    } else if (data.bundleDetail.discountType == "fixed") {
      update.bundleDetail.description =
        "Buy products from below collections,Save {discount}";
      setData(update);
    } else if (data.bundleDetail.discountType == "freeShipping") {
      update.bundleDetail.description =
        "Buy products from below collections,Get Free Shipping";
      setData(update);
    } else {
      update.bundleDetail.description = "Buy products from below collections";
      setData(update);
    }
  }, [data.bundleDetail.discountType]);
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
      setError("");
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
      let data2 = update.bundleDetail.display.productPagesList.filter(
        (item) => {
          return item !== value;
        }
      );

      if (data2.length > 0) {
        setData({
          ...data,
          bundleDetail: {
            ...data.bundleDetail,
            display: { ...data.bundleDetail.display, productPagesList: data2 },
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
              productPagesList: data2,
            },
          },
        });
      }
    }
  };
  const handleSave = async () => {
    let alertText = [];
    if (data.bundleDetail.products.length == 0) {
      if (!errorArray.includes("noCollection")) {
        setErrorArray((prev) => [...prev, "noCollection"]);
      }
      flag = false;
      alertText.push("Please add atleast one collection");
    }
    if (
      data.bundleDetail.products.length == 1 &&
      data.bundleDetail.products[0]?.quantity == 1
    ) {
      setError("singleProduct");
      if (!errorArray.includes("singleProduct")) {
        setErrorArray((prev) => [...prev, "singleProduct"]);
      }
      flag = false;
      alertText.push(
        "Number of the required items should be more than 1 if single collection selected."
      );
    }
    let arr = [];
    data.bundleDetail.products.map((item, index) => {
      if (item.quantity < 1) {
        arr.push(index);
      }
    });

    if (arr.length > 0) {
      flag = false;
      setQuantityError(arr);
      alertText.push(`Number of the required items can't be less than 1`);
    }

    if (data.name.trim() == "") {
      if (!errorArray.includes("bundleName")) {
        setErrorArray((prev) => [...prev, "bundleName"]);
      }
      flag = false;
      alertText.push("Please provide name of bundle");
    }

    if (data.bundleDetail.display.productPagesList.length <= 0) {
      flag = false;
      alertText.push(
        "Please select at least one collection from display options"
      );
    }

    if (data.title.trim() == "") {
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
            navigate("/bundle"),
            toastNotification("success", "Saved", "bottom")
          );
        } else {
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
            navigate("/bundle"),
            toastNotification("success", "Update successfully", "bottom")
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
                <Text variant="headingMd">Collection Mix & Match Bundle</Text>
                <Text>Add collections you want your customers to buy from</Text>
                <BundlePickerData
                  page="collectionMixMatch"
                  modalType="Collection"
                  data={data}
                  setData={setData}
                  temp={temp}
                  PickerType={"collection"}
                  Placeholder={"Collections"}
                />
              </Card>
              <Card>
                <Text variant="headingMd">Quantities</Text>
                <Text>
                  Specify how many product your customers should add from each
                  collection to their cart to get the discount
                </Text>
                {data.bundleDetail.products.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <Thumbnail
                        source={item?.image ? item?.image?.originalSrc : noImg}
                        size="small"
                        alt="pic"
                      />
                      <Text>{item.title}</Text>
                      <TextField
                        type="number"
                        label="Number of required items"
                        onChange={(newvalue) => {
                          if (newvalue == "" || newvalue < 0) {
                            let update = [...data.bundleDetail.products];
                            update[index].quantity = 1;
                            setData({
                              ...data,
                              bundleDetail: {
                                ...data.bundleDetail,
                                products: update,
                              },
                            });
                          } else {
                            if (String(newvalue).includes(".") == false) {
                              newvalue = String(newvalue);
                              newvalue = newvalue.replace(/^0/, 1);
                              let update = [...data.bundleDetail.products];
                              update[index].quantity = newvalue;
                              setData({
                                ...data,
                                bundleDetail: {
                                  ...data.bundleDetail,
                                  products: update,
                                },
                              });
                            }
                          }
                        }}
                        value={item?.quantity ?? 1}
                        autoComplete="off"
                        min="0"
                      />
                      <br />
                      {quantityError.includes(index) && (
                        <InlineError message="Quantity required should  be more than 1 if single collection selected Only" />
                      )}
                    </Fragment>
                  );
                })}
              </Card>
              <General
                data={data}
                setData={setData}
                type="collectonMix&Match"
              />
              <DiscountOptions
                page="collectionMixMatch"
                data={data}
                setData={setData}
                discountType={data.bundleDetail.discountType}
                discountValue={data.bundleDetail.discountValue}
                handleDiscountType={handleDiscountType}
                handleDiscountValue={handleDiscountValue}
                errorArray={errorArray}
                currency={currencyCode}
              />
            </BlockStack>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <BlockStack gap="400">
              <BundleStatus data={data} setData={setData} />
              <DisplayOptions
                bundleType="collectionMixMatch"
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
                <CollectionBundlePreview data={data} currency={currencyCode} />
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
export default CollectionMixMatch;
