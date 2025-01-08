import React, { useCallback, useEffect, useState } from "react";
import {
  ArrowLeftOutlined,
  CaretRightOutlined,
  CaretDownOutlined,
  AppstoreAddOutlined,
  AntDesignOutlined,
  BoxPlotOutlined,
  FileTextOutlined,
  CalculatorOutlined,
  DatabaseOutlined,
  PicCenterOutlined,
  LinkOutlined,
  EditOutlined,
  TransactionOutlined,
} from "@ant-design/icons";

import {  Select, Tabs, Grid } from "@shopify/polaris";
import { Button, Divider, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import Design from "./Design";
import Box from "./Box";
import Theme from "./Theme";
import Title from "./Title";
import ProductDetails from "./ProductDetails";
import TotalSection from "./TotalSection";
import ButtonSection from "./ButtonSection";
import Options from "./Options";
import CollectionDetails from "./CollectionDetails";
import DiscountBadge from "./DiscountBadge";
import CustomizationProductBundlePreview from "./CustomizationProductBundlePreview";
import CustomizationVolumeBundlePreview from "./CustomizationVolumeBundlePreview";
import CustomizationCollectionBundlePreview from "./CustomizationCollectionBundlePreview";
import CustomizationProductMixMatchPreview from "./CustomizationProductMixMatchPreview";
import CustomizationPopUpPreview from "./CustomizationPopupPreview";
import CustomizationBuyXgetY from "./CustomizationBuyXgetY";
import defaultData from "./defaultData.json";
import postApi from "../postApi";
import { useAppBridge } from "@shopify/app-bridge-react";
import toastNotification from "../commonSections/Toast";
import { Text } from "@shopify/polaris";
import { LockIcon } from "@shopify/polaris-icons";
import CustomizationFBt from "./CustomizationFBTPreview";
import Swal from "sweetalert2";
import OrderOverview from "./OrderOverview";
import OptionalBadges from "./optionalBadges";
import ModalBox from "../modalBox";
const CustomizationEditor = (props) => {
  const app = useAppBridge();
  const navigate = useNavigate();
  const [displayOption, setDisplayOption] = useState("productPages");
  const [spinner, setSpinner] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [bundleOption, setBundleOption] = useState("bundle");
  const [customOption, setCustomOption] = useState("Box");
  const [onLoad, setOnload] = useState(false);
  const [bundleType, setBundleType] = useState("");

  const [selected, setSelected] = useState("bundle");
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    ...(props.bundleOption === "frequentlyBoughtTogether"
      ? [
          {
            id: "design-1",
            content: "Design",
            panelID: "Design",
          },
        ]
      : []),
    {
      id: "box-1",
      content: "Box",
      panelID: "Box",
    },
    {
      id: "title-1",
      content: "Title",
      panelID: "Title",
    },
    ...(props.bundleOption === "collection"
      ? [
          {
            id: "collectionDetails-1",
            content: "Collection Details",
            panelID: "collectionDetails",
          },
          {
            id: "discountBadge-1",
            content: "Discount Badge",
            panelID: "DiscountBadge",
          },
        ]
      : [
          {
            id: "productDetails-1",
            content: "Product Details",
            panelID: "productDetails",
          },
        ]),
    {
      id: "button-1",
      content: "Button",
      panelID: "Button",
    },
    ...(props.bundleOption === "productMixMatch"
      ? [
          {
            id: "order-1",
            content: "Order Overview",
            panelID: "OrderOverview",
          },
        ]
      : []),
    ...(props.bundleOption !== "collection"
      ? [
          {
            id: "totalSection-1",
            content: "Total Section",
            panelID: "Total_section",
          },
        ]
      : []),
    ...(props.bundleOption === "buyXgetY"
      ? [
          {
            id: "discountBadge-2",
            content: "Discount Badge",
            panelID: "DiscountBadge",
          },
        ]
      : []),
    ...(props.bundleOption === "volume"
      ? [
          {
            id: "options-1",
            content: "Options & Badges",
            panelID: "Options",
          },
        ]
      : []),
    ...(props.bundleOption === "bundle"
      ? [
          {
            id: "optional-Badge",
            content: "Optional Badge",
            panelID: "OptionalBadge",
          },
        ]
      : []),
    ...(props.bundleOption === "frequentlyBoughtTogether"
      ? [
          {
            id: "optional-Badge",
            content: "Optional Badge",
            panelID: "OptionalBadge",
          },
        ]
      : []),
  ];

  const handleSelectChange = (value) => {
    setSelectedTab(0);
    setSelected(value);
    if (
      value == "productMixMatch" &&
      props.plansData.data.data.plan == "free"
    ) {
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
    } else if (
      (value == "buyXgetY" &&
        props.plansData.data.data.plan != "standard") ||
      (value == "frequentlyBoughtTogether" &&
        props.plansData.data.data.plan != "standard")
    ) {
      Swal.fire({
        title: 'Upgrade to "Standard" Plan',
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
    }else{
      handleBundleOption(value);
    }
  };

  const options = [
    { label: "Product Bundle", value: "bundle" },
    { label: "Volume Bundle", value: "volume" },
    { label: "Collection mix & match Bundle", value: "collection" },
    { label: "Product mix & match Bundle", value: "productMixMatch" },
    { label: "Buy X Get Y Bundle", value: "buyXgetY" },
    { label: "Frequently Bought Together", value: "frequentlyBoughtTogether" },
  ];

  const handleCustomizeSave = async () => {
      setSpinner(true);
      const response = await postApi(
        "/api/admin/updateCustomization",
        props.data,
        app
      );
      if (response.data.status == 200) {
        setSpinner(false);
        // toastNotification("success", "Save Successfully", "bottom");
        app.toast.show("Save Successfully");

      } else {
        setSpinner(false);
        // toastNotification(
        //   "success",
        //   "Something went wrong ! Please try again",
        //   "bottom"
        // );
        app.toast.show("Something went wrong ! Please try again");

      }

  };

  const popUpAlertFun = () => {
    Swal.fire({
      title: 'Upgrade to "Standard" Plan',
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
  };

  // const handleDisplayOption = (e) => {
  //   if (e.target.value == "productPages") {
  //     setDisplayOption(e.target.value);
  //     props.setBundleOption("bundle");
  //   } else if (e.target.value == "popUp") {
  //     setDisplayOption(e.target.value);
  //     props.setBundleOption("popUp");
  //     setCustomOption("Box");
  //   }
  // };

  const handleBundleOption = (bundleName) => {
    if (props.bundleOption != bundleName) {
      props.setBundleOption(bundleName);
      bundleName == "collection" ||
      bundleName == "bundle" ||
      bundleName == "volume" ||
      bundleName == "productMixMatch" ||
      bundleName == "buyXgetY"
        ? setCustomOption("Box")
        : "";
      if (bundleName == "frequentlyBoughtTogether") {
        setCustomOption("Design");
      }
    }
  };

  const openModalFun = () => {
    setIsModalOpen(true);
 

  };

  const handleCustomOption = (selectedTabIndex, clickedOption) => {
    setSelectedTab(selectedTabIndex);
    setOnload(false);
    // if (props.bundleOption !== "frequentlyBoughtTogether") {
    setCustomOption((prevCustomOption) => {
      return prevCustomOption !== clickedOption
        ? clickedOption
        : prevCustomOption;
    });
    // } else {
    //   setCustomOption("Box");
    // }
  };
const handleClose=()=>{
  setIsModalOpen(false); 
}
const handleOk=()=>{
    setIsModalOpen(false);
  props.handlleCloseModal();
  
}
  // const leftSideSectionCommon = (type) => {
  //   return (
  //     <div className="sd-bundle-listItem-wrapper">
  //       {type === "frequentlyBoughtTogether" ? (
  //         <div className="sd-bundle-listItem-common sd-bundle-listItem-sub sd-option-active">
  //           <AntDesignOutlined />
  //           <p>Design</p>
  //         </div>
  //       ) : (
  //         <>
  //           <div
  //             className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${
  //               customOption == "Box" ? "sd-option-active" : ""
  //             }`}
  //             onClick={() => handleCustomOption("Box")}
  //           >
  //             <BoxPlotOutlined />
  //             <p>Box</p>
  //           </div>
  //           <div
  //             className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${
  //               customOption == "Title" ? "sd-option-active" : ""
  //             }`}
  //             onClick={() => handleCustomOption("Title")}
  //           >
  //             <FileTextOutlined />
  //             <p>Title</p>
  //           </div>
  //           <div
  //             className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${
  //               customOption == "Button" ? "sd-option-active" : ""
  //             }`}
  //             onClick={() => handleCustomOption("Button")}
  //           >
  //             <LinkOutlined />
  //             <p>Button</p>
  //           </div>

  //           {props.bundleOption != "collection" && (
  //             <div
  //               className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${
  //                 customOption == "productDetails" ? "sd-option-active" : ""
  //               }`}
  //               onClick={() => handleCustomOption("productDetails")}
  //             >
  //               <DatabaseOutlined />
  //               <p>Product Details</p>
  //             </div>
  //           )}

  //           {props.bundleOption == "collection" && (
  //             <div
  //               className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${
  //                 customOption == "collectionDetails" ? "sd-option-active" : ""
  //               }`}
  //               onClick={() => handleCustomOption("collectionDetails")}
  //             >
  //               <DatabaseOutlined />
  //               <p>Collection Details</p>
  //             </div>
  //           )}

  //           {props.bundleOption == "volume" && (
  //             <div
  //               className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${
  //                 customOption == "Options" ? "sd-option-active" : ""
  //               }`}
  //               onClick={() => handleCustomOption("Options")}
  //             >
  //               <DatabaseOutlined />
  //               <p>Options</p>
  //             </div>
  //           )}
  //           {props.bundleOption != "collection" && (
  //             <div
  //               className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${
  //                 customOption == "Total_section" ? "sd-option-active" : ""
  //               }`}
  //               onClick={() => handleCustomOption("Total_section")}
  //             >
  //               <CalculatorOutlined />
  //               <p>Total Section</p>
  //             </div>
  //           )}

  //           {(props.bundleOption == "collection" ||
  //             props.bundleOption == "buyXgetY") && (
  //             <div
  //               className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${
  //                 customOption == "DiscountBadge" ? "sd-option-active" : ""
  //               }`}
  //               onClick={() => handleCustomOption("DiscountBadge")}
  //             >
  //               <TransactionOutlined />
  //               <p>Discount Badge</p>
  //             </div>
  //           )}
  //         </>
  //       )}
  //     </div>
  //   );
  // };
  return (
    <Spin spinning={spinner} size="large">
      <div className="sd-bundle-customizationBundle-wrapper">
        <div className="sd-bundle-customizationBundle-topbar">
          <div>
            <Button className="sd-bundle-backArrow" onClick={openModalFun}>
              <ArrowLeftOutlined />
            </Button>

            {isModalOpen && <ModalBox status={isModalOpen}  handleClose={handleClose} handleOk={handleOk}/>}
           
          </div>
          {/* <div className="sd-bundle-backArrow" onClick={()=>navigate('/')}><ArrowLeftOutlined/></div> */}
          <div className="sd-bundle-selectSection">
            <Select
              options={options}
              onChange={(e) => handleSelectChange(e)}
              value={selected}
            />
            {/* <p>Displays:</p>
            <select value={displayOption} onChange={handleDisplayOption}>
              <option className="option" value="productPages">
                Product Pages
              </option> */}
            {/* <option className="option" value="popUp">
              Pop Up
            </option> */}
            {/* </select> */}
          </div>
          <Button className="sd-bundle-backArrow" onClick={handleCustomizeSave}>
            Save
          </Button>
        </div>
        {/* <Divider /> */}
        <div className="sd-bundle-mainContent-wrapper">
          {/* <div className="sd-bundle-leftSider">
            <p className="sd-bundle-displayOption-section">
              {displayOption.replace(/([a-z])([A-Z])/g, "$1 $2")}
            </p>
            <Divider />

            {displayOption == "productPages" ? (
              <div className="sd-bundle-bundleList-section">
                <div
                  className={`sd-bundle-listItem-common sd-bundle-listItem  ${props.bundleOption == "bundle" ? "sd-active" : ""
                    }`}
                  onClick={() => handleBundleOption("bundle")}
                >
                  {" "}
                  {props.bundleOption == "bundle" ? (
                    <CaretDownOutlined />
                  ) : (
                    <CaretRightOutlined />
                  )}
                  <AppstoreAddOutlined />
                  <p>Bundle</p>
                </div>
                {props.bundleOption == "bundle" ? leftSideSectionCommon() : ""}
                <div
                  className={`sd-bundle-listItem-common sd-bundle-listItem  ${props.bundleOption == "volume" ? "sd-active" : ""
                    }`}
                  onClick={() => handleBundleOption("volume")}
                >
                  {props.bundleOption == "volume" ? (
                    <CaretDownOutlined />
                  ) : (
                    <CaretRightOutlined />
                  )}
                  <AppstoreAddOutlined />
                  <p>Volume Discount</p>
                </div>
                {props.bundleOption == "volume" ? leftSideSectionCommon() : ""}
                <div
                  className={`sd-bundle-listItem-common sd-bundle-listItem  ${props.bundleOption == "collection" ? "sd-active" : ""
                    }`}
                  onClick={() => handleBundleOption("collection")}
                >
                  {props.bundleOption == "collection" ? (
                    <CaretDownOutlined />
                  ) : (
                    <CaretRightOutlined />
                  )}
                  <AppstoreAddOutlined />
                  <p>Collections Mix & Match</p>
                </div>
                {props.bundleOption == "collection"
                  ? leftSideSectionCommon()
                  : ""}
                {props?.plansData?.data?.data?.plan == "standard" ?
                  <div
                    className={`sd-bundle-listItem-common sd-bundle-listItem  ${props.bundleOption == "buyXgetY" ? "sd-active" : ""
                      }`}
                    onClick={() => handleBundleOption("buyXgetY")}
                  >
                    {props.bundleOption == "buyXgetY" ? (
                      <CaretDownOutlined />
                    ) : (
                      <CaretRightOutlined />
                    )}
                    <AppstoreAddOutlined />
                    <p>Buy X get Y</p>
                  </div>
                  :
                  <div className={`sd-bundle-listItem-common sd-bundle-listItem`} onClick={popUpAlertFun}>
                    <CaretRightOutlined />
                    <AppstoreAddOutlined />
                    <Text>Buy X get Y <LockIcon className="sd-bundle-premium2" /></Text>

                  </div>
                }

                {props.bundleOption == "buyXgetY"
                  ? leftSideSectionCommon()
                  : ""}

                {props?.plansData?.data?.data?.plan == "standard" ?
                  <div
                    className={`sd-bundle-listItem-common sd-bundle-listItem  ${props.bundleOption == "productMixMatch" ? "sd-active" : ""
                      }`}
                    onClick={() => handleBundleOption("productMixMatch")}
                  >
                    {props.bundleOption == "productMixMatch" ? (
                      <CaretDownOutlined />
                    ) : (
                      <CaretRightOutlined />
                    )}
                    <AppstoreAddOutlined />
                    <p>Product Mix & Match</p>
                  </div>
                  :
                  <>
                    <div className={`sd-bundle-listItem-common sd-bundle-listItem`} onClick={popUpAlertFun}>
                      <CaretRightOutlined />
                      <AppstoreAddOutlined />
                      <Text>Product Mix & Match <LockIcon className="sd-bundle-premium2" /></Text>
                    </div>
                  </>
                }

                {props.bundleOption == "productMixMatch"
                  ? leftSideSectionCommon()
                  : ""}

                {props?.plansData?.data?.data?.plan == "standard" ?
                  <div
                    className={`sd-bundle-listItem-common sd-bundle-listItem  ${props.bundleOption == "frequentlyBoughtTogether" ? "sd-active" : ""
                      }`}
                    onClick={() => {
                      handleBundleOption("frequentlyBoughtTogether")
                      setCustomOption("Design")
                    }}
                  >
                    {props.bundleOption == "frequentlyBoughtTogether" ? (
                      <CaretDownOutlined />
                    ) : (
                      <CaretRightOutlined />
                    )}
                    <AppstoreAddOutlined />
                    <p>Frequently Bought Together</p>
                  </div>
                  :
                  <div className={`sd-bundle-listItem-common sd-bundle-listItem`} onClick={popUpAlertFun}>
                    <CaretRightOutlined />
                    <AppstoreAddOutlined />
                    <Text>Frequently Bought Together <LockIcon className="sd-bundle-premium2" /></Text>
                  </div>
                }
                {props.bundleOption == "frequentlyBoughtTogether"
                  ? leftSideSectionCommon("frequentlyBoughtTogether")
                  : ""}
              </div>

            ) : displayOption == "popUp" ? (
              <div className="sd-bundle-bundleList-section">
                <div className="sd-bundle-listItem-common sd-bundle-listItem">
                  <CaretRightOutlined />

                  <AppstoreAddOutlined />
                  <p>Bundle</p>
                </div>
                {leftSideSectionCommon()}
              </div>
            ) : (
              ""
            )}
          </div> */}

          {displayOption == "productPages" ? (
            <div className="sd-bundle-centerContent">
              {props.bundleOption == "bundle" && (
                <CustomizationProductBundlePreview data={props.data} />
              )}
              {props.bundleOption == "volume" && (
                <CustomizationVolumeBundlePreview data={props.data} />
              )}
              {props.bundleOption == "collection" && (
                <CustomizationCollectionBundlePreview data={props.data} />
              )}
              {props.bundleOption == "buyXgetY" && (
                <CustomizationBuyXgetY data={props.data} />
              )}
              {props.bundleOption == "frequentlyBoughtTogether" && (
                <CustomizationFBt data={props.data} />
              )}
              {props.bundleOption == "productMixMatch" && (
                <CustomizationProductMixMatchPreview data={props.data} />
              )}
            </div>
          ) : displayOption == "popUp" ? (
            <div className="sd-bundle-centerContent">
              <CustomizationPopUpPreview data={props.data} />
            </div>
          ) : (
            ""
          )}
          <div className="sd-bundle-rightSider">
            {/* {
 onLoad  ? 
   <div className="sd-bundle-info-wrapper">
  <div className="sd-bundle-info"><EditOutlined/>customize your bundles</div>
  <p className="sd-bundle-text">Select a section in the  sidebar  to start.</p>
</div>
: */}
            <Tabs
              tabs={tabs}
              selected={selectedTab}
              onSelect={(e) => handleCustomOption(e, tabs[e].panelID)}
            />
            {/* 
            <p className="sd-bundle-customOption-title-section">
              {customOption == "productDetails"
                ? "Product Details"
                : customOption == "Total_section"
                  ? "Total Section"
                  : customOption}
            </p> */}
            <Divider />

            {/* <div className="sd-bundle-editSection-wrappper">
            {customOption == "Design" && bundleOption=="bundle" ? 
              <Design
                bundleOption={props.bundleOption}
                data={props.data}
                setData={props.setData}
              />
              :""
            }
            {customOption == "Theme" && (
              <Theme
                bundleOption={props.bundleOption}
                data={props.data}
                setData={props.setData}
              />
            )}

            
            {customOption == "Box" && (
              <Box
                bundleOption={props.bundleOption}
                data={props.data}
                setData={props.setData}
              />
            )}
            {customOption == "Title" && (
              <Title
                bundleOption={props.bundleOption}
                data={props.data}
                setData={props.setData}
              />
            )}
            {customOption == "Details" && (
              <ProductDetails
                bundleOption={props.bundleOption}
                data={props.data}
                setData={props.setData}
              />
            )}
            {customOption == "Total_section" && (
              <TotalSection
                bundleOption={props.bundleOption}
                data={props.data}
                setData={props.setData}
              />
            )}
            {customOption == "Button" && (
              <ButtonSection
                bundleOption={props.bundleOption}
                data={props.data}
                setData={props.setData}
              />
            )}
            {customOption == "Options" && (
              <Options
                bundleOption={props.bundleOption}
                data={props.data}
                setData={props.setData}
              />
            )}
            {customOption == "DiscountBadge" && (
              <DiscountBadge
                bundleOption={props.bundleOption}
                data={props.data}
                setData={props.setData}
              />
            )}
          </div> */}

            {displayOption == "productPages" ? (
              <div className="sd-bundle-editSection-wrappper">
                {customOption === "Design" ? (
                  <Design
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption === "OptionalBadge" ? (
                  <OptionalBadges
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption == "Theme" ? (
                  <Theme
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption == "Box" ? (
                  <Box
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption == "Title" ? (
                  <Title
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption == "productDetails" &&
                  (props.bundleOption == "bundle" ||
                    props.bundleOption == "volume" ||
                    props.bundleOption == "buyXgetY" ||
                    props.bundleOption == "productMixMatch" ||
                    props.bundleOption == "frequentlyBoughtTogether") ? (
                  <ProductDetails
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption == "collectionDetails" &&
                  props.bundleOption == "collection" ? (
                  <CollectionDetails
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption == "Total_section" &&
                  (props.bundleOption == "bundle" ||
                    props.bundleOption == "volume" ||
                    props.bundleOption == "buyXgetY" ||
                    props.bundleOption == "productMixMatch" ||
                    props.bundleOption == "frequentlyBoughtTogether") ? (
                  <TotalSection
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption == "Button" ? (
                  <ButtonSection
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption == "Options" &&
                  props.bundleOption == "volume" ? (
                  <Options
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : (customOption == "DiscountBadge" &&
                    props.bundleOption == "collection") ||
                  props.bundleOption == "buyXgetY" ? (
                  <DiscountBadge
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption == "OrderOverview" &&
                  props.bundleOption == "productMixMatch" ? (
                  <OrderOverview
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : (
                  ""
                )}
              </div>
            ) : displayOption == "popUp" ? (
              <div className="sd-bundle-editSection-wrappper">
                {customOption == "Box" ? (
                  <Box
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption == "Title" ? (
                  <Title
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption == "productDetails" ? (
                  <ProductDetails
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption == "Total_section" ? (
                  <TotalSection
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : customOption == "Button" ? (
                  <ButtonSection
                    bundleOption={props.bundleOption}
                    data={props.data}
                    setData={props.setData}
                    displayOption={displayOption}
                  />
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default CustomizationEditor;
