import React, { useEffect, useState } from "react";
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
import { LockMajor } from "@shopify/polaris-icons";
import CustomizationFBt from "./CustomizationFBTPreview";
import Swal from 'sweetalert2'

const CustomizationEditor = (props) => {
  const app = useAppBridge();
  const navigate = useNavigate();
  const [displayOption, setDisplayOption] = useState("productPages");
  const [spinner, setSpinner] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState(false);

  // const [bundleOption, setBundleOption] = useState("bundle");
  const [customOption, setCustomOption] = useState("Box");
  const [onLoad, setOnload] = useState(false);
  const [bundleType, setBundleType] = useState("");

  const handleCustomizeSave = async () => {
    setSpinner(true);
    const response = await postApi(
      "/api/admin/updateCustomization",
      props.data,
      app
    );
    if (response.data.status == 200) {
      setSpinner(false);
      toastNotification("success", "Save Successfully", "bottom");
    } else {
      setSpinner(false);
      toastNotification(
        "success",
        "Something went wrong ! Please try again",
        "bottom"
      );
    }
  };
  console.log("jfehedjfjkdhfjhdhfjdshfjk", props.data);

  const popUpAlertFun = () => {
    Swal.fire({
      title: 'Upgrade to "Standard" Plan',
      text: 'Do you want to continue',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Get Plan',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#59da7c"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/plans')
      }
    });
  }
  const handleDisplayOption = (e) => {
    if (e.target.value == "productPages") {
      setDisplayOption(e.target.value);
      props.setBundleOption("bundle");
      // props.setData(defaultData["bundle"])   1
    } else if (e.target.value == "popUp") {
      setDisplayOption(e.target.value);
      props.setBundleOption("popUp");
      setCustomOption("Box");
      // props.setData(defaultData["popUp"]) 2
    }
  };

  const handleBundleOption = (bundleName) => {
    if (props.bundleOption != bundleName) {
      props.setBundleOption(bundleName);
      // props.setData(defaultData[bundleName]);
      bundleName == "collection" ||
        bundleName == "bundle" ||
        bundleName == "volume" ||
        bundleName == "buyXgetY" ||
        bundleName == "productMixMatch" ||
        bundleName == "frequentlyBoughtTogether"
        ? setCustomOption("Box")
        : "";
    }
  };

  const handleCustomOption = (clickedOption) => {
    setOnload(false);
    customOption != clickedOption ? setCustomOption(clickedOption) : "";
  };

  const leftSideSectionCommon = (type) => {
    return (
      <div className="sd-bundle-listItem-wrapper">
        {/* {bundleOption != "collection" &&<div className="sd-bundle-listItem-common sd-bundle-listItem-sub" onClick={()=>handleCustomOption("Design")}><AntDesignOutlined /><p>Design</p></div> } */}
        {/* { displayOption !="popUp" && <div
          className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${customOption == "Theme"?"sd-option-active":""}`}
          onClick={() => handleCustomOption("Theme")}
        >
          <PicCenterOutlined />
          <p>Theme</p>
        </div>} */}
        {type === 'frequentlyBoughtTogether' ?
          <div className="sd-bundle-listItem-common sd-bundle-listItem-sub sd-option-active">
            <AntDesignOutlined />
            <p>Design</p>
          </div>
          :
          <>
            <div
              className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${customOption == "Box" ? "sd-option-active" : ""
                }`}
              onClick={() => handleCustomOption("Box")}
            >
              <BoxPlotOutlined />
              <p>Box</p>
            </div>
            <div
              className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${customOption == "Title" ? "sd-option-active" : ""
                }`}
              onClick={() => handleCustomOption("Title")}
            >
              <FileTextOutlined />
              <p>Title</p>
            </div>
            <div
              className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${customOption == "Button" ? "sd-option-active" : ""
                }`}
              onClick={() => handleCustomOption("Button")}
            >
              <LinkOutlined />
              <p>Button</p>
            </div>

            {props.bundleOption != "collection" && (
              <div
                className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${customOption == "productDetails" ? "sd-option-active" : ""
                  }`}
                onClick={() => handleCustomOption("productDetails")}
              >
                <DatabaseOutlined />
                <p>Product Details</p>
              </div>
            )}

            {props.bundleOption == "collection" && (
              <div
                className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${customOption == "collectionDetails" ? "sd-option-active" : ""
                  }`}
                onClick={() => handleCustomOption("collectionDetails")}
              >
                <DatabaseOutlined />
                <p>Collection Details</p>
              </div>
            )}

            {props.bundleOption == "volume" && (
              <div
                className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${customOption == "Options" ? "sd-option-active" : ""
                  }`}
                onClick={() => handleCustomOption("Options")}
              >
                <DatabaseOutlined />
                <p>Options</p>
              </div>
            )}
            {props.bundleOption != "collection" && (
              <div
                className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${customOption == "Total_section" ? "sd-option-active" : ""
                  }`}
                onClick={() => handleCustomOption("Total_section")}
              >
                <CalculatorOutlined />
                <p>Total Section</p>
              </div>
            )}

            {(props.bundleOption == "collection" || props.bundleOption == "buyXgetY") && (
              <div
                className={`sd-bundle-listItem-common sd-bundle-listItem-sub ${customOption == "DiscountBadge" ? "sd-option-active" : ""
                  }`}
                onClick={() => handleCustomOption("DiscountBadge")}
              >
                <TransactionOutlined />
                <p>Discount Badge</p>
              </div>
            )}
          </>
        }
      </div>
    );
  };
  return (
    <Spin spinning={spinner} size="large">
      <div className="sd-bundle-customizationBundle-wrapper">
        <div className="sd-bundle-customizationBundle-topbar">
          <div>
            <Button
              className="sd-bundle-backArrow"
              onClick={() => navigate("/customization")}
            >
              <ArrowLeftOutlined />
            </Button>
          </div>
          {/* <div className="sd-bundle-backArrow" onClick={()=>navigate('/')}><ArrowLeftOutlined/></div> */}
          <div className="sd-bundle-selectSection">
            <p>Displays:</p>
            <select value={displayOption} onChange={handleDisplayOption}>
              <option className="option" value="productPages">
                Product Pages
              </option>
              {/* <option className="option" value="popUp">
              Pop Up
            </option> */}

            </select>
          </div>
          <Button className="sd-bundle-backArrow" onClick={handleCustomizeSave}>Save</Button>
        </div>
        {/* <Divider /> */}
        <div className="sd-bundle-mainContent-wrapper">
          <div className="sd-bundle-leftSider">
            <p className="sd-bundle-displayOption-section">
              {displayOption.replace(/([a-z])([A-Z])/g, "$1 $2")}
              {/* {displayOption} */}
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
                    <Text>Buy X get Y <LockMajor className="sd-bundle-premium2" /></Text>

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
                      <Text>Product Mix & Match <LockMajor className="sd-bundle-premium2" /></Text>
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
                    <Text>Frequently Bought Together <LockMajor className="sd-bundle-premium2" /></Text>
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
          </div>

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
            <p className="sd-bundle-customOption-title-section">

              {customOption == "productDetails" ? "Product Details" : customOption == "Total_section" ? "Total Section" : customOption}
            </p>
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
                {customOption == "Design" && props.bundleOption == "frequentlyBoughtTogether" ? (
                  <Design
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
                    props.bundleOption == "productMixMatch") ? (
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
                    props.bundleOption == "productMixMatch") ? (
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
                ) : customOption == "DiscountBadge" &&
                  props.bundleOption == "collection" || props.bundleOption == "buyXgetY" ? (
                  <DiscountBadge
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
