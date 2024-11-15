import React, { useState } from "react";
import {
  TextField,
  InlineError,
  Button,
  Text,
  ResourceList,
  InlineStack,
} from "@shopify/polaris";
import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { handleEditFurther } from "../helperFunctions";
import { useAPI } from "../shop";
import { Thumbnail } from "@shopify/polaris";
import { DeleteIcon } from "@shopify/polaris-icons";
import ProductVariantData from "../productVariantData";
import toastNotification from "../commonSections/Toast";
const BundlePickerData = ({
  data,
  page,
  setData,
  temp,
  pickerError,
  checkedIds,
  variantData,
  setCheckedIds,
  loader,
  errorArray,
  setPickerError,
  setVariantData,
  setErrorArray,
  pid,
  setPid,
  DescText,
  PickerType,
  Placeholder,
  Multiple,
  dataUpdateHandler,
}) => {
  const { app } = useAPI();
  const [searchText, setSearchText] = useState("");
  const Shopify = useAppBridge();
  function showOutOfStockError(item) {
    let check;
    for (let index = 0; index < item.variants.length; index++) {
      if (item.variants[index].inventoryQuantity <= 0) {
        check = true;
        break;
      }
    }
    return check;
  }
  function validationHandler(newvalue, index) {
    let indexIsExist = errorArray.indexOf(index);
    if (errorArray.length == 1 && index == indexIsExist) {
      setPickerError([]);
    } else {
      let copyErrorArray = [...errorArray];
      let copyArray = [];
      copyErrorArray.map((item2) => {
        if (item2 != index) {
          copyArray.push(item2);
        }
      });
      setPickerError(copyArray);
    }
  }
  const VariantHandler = (e, item) => {
    const updatedCheckedIds = e
      ? [...checkedIds, item.id]
      : checkedIds.filter((id) => id !== item.id);
    setCheckedIds(updatedCheckedIds);
  };
  const setOk = () => {
    const { bundleDetail } = data;
    const { products } = bundleDetail;
    const getData = variantData.data.filter((item) =>
      checkedIds.includes(item.id)
    );
    if (checkedIds.length === 0) {
      setErrorArray((prev) => [...prev, "uncheckedVariantModal"]);
      return false;
    }
    const updatedProducts = products.map((item) =>
      item.id === pid ? { ...item, variants: getData } : item
    );

    setData({
      ...data,
      bundleDetail: {
        ...bundleDetail,
        products: updatedProducts,
      },
    });

    setCheckedIds([]);
    setVariantData([]);
    setPid("");

    setErrorArray((prev) =>
      prev.filter((error) => error !== "uncheckedVariantModal")
    );
    // document.getElementById(`open-variant-id`).hide();
    Shopify.modal.hide("open-variant-id");
  };
  const ResourcePicker = () => {
    // console.log("Rs picker data....", page);
    let pageData =
      page == "xproduct"
        ? data?.bundleDetail?.xproducts
        : page == "yproduct"
          ? data?.bundleDetail?.yproducts
          : data?.bundleDetail?.products;
    let selectedIds = pageData?.filter((el) => el.id);
    shopify
      .resourcePicker({
        type: PickerType,
        multiple: Multiple,
        action: "select",
        filter: {
          archived: false,
          draft: false,
        },
        query: searchText,
        selectionIds: selectedIds,
      })
      .then((product) => {
        if (product) {
          let obj = { ...data };
          const pageToPropertyMap = {
            xproduct: "xproducts",
            yproduct: "yproducts",
            default: "products",
          };
          // Get the property name based on the 'page' value, default to 'products'
          const property =
            pageToPropertyMap[page] || pageToPropertyMap["default"];
            const updatedArray = product?.map((obj, index) => {
              return {
                ...obj,
                minimumOrder: pageData[index]?.minimumOrder ?? 1,
              };
            });
            if (page == "xproduct" || page == "yproduct") {
              filterXYProductsCommon(updatedArray,property,page);
            }else{
              if (obj && obj.bundleDetail) {
                obj.bundleDetail[property] = updatedArray;
              }
            }
            updatedArray.map((item, index) => {
              obj.bundleDetail.display.productPagesList.push(item.id);
            });
          // }
          setData(obj);
          if (page == "volumeBundle") {
            dataUpdateHandler();
          }
        }
      })
      .catch((err) => console.log(err));
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
  function validationHandler(newvalue, index) {
    let indexIsExist = errorArray.indexOf(index);
    if (errorArray.length == 1 && index == indexIsExist) {
      setPickerError([]);
    } else {
      let copyErrorArray = [...errorArray];
      let copyArray = [];
      copyErrorArray.map((item2) => {
        if (item2 != index) {
          copyArray.push(item2);
        }
      });
      setPickerError(copyArray);
    }
  };
  const filterXYProductsCommon = (array, itemArray) => {
    console.log("check working ",array,itemArray);
    // let array=[...update, ...result2];
    // let finalArray = [];
    // let notification = false;
    // array.forEach((mainItem, index) => {
    //   let itemMatched = itemArray.find((item) => item.id == mainItem.id);
    //   if (!itemMatched) {
    //     finalArray.push(mainItem);
    //   } else {
    //     let filteredVariants = mainItem.variants.filter(
    //       (mainVariant) =>
    //         !itemMatched.variants.some(
    //           (itemVariant) => itemVariant.id == mainVariant.id
    //         )
    //     );
    //     if (filteredVariants.length > 0) {
    //       finalArray.push({ ...mainItem, variants: filteredVariants });
    //     }

    //     if (mainItem.variants.length != filteredVariants.length) {
    //       notification = true;
    //     }
    //   }
    // });

    // if (notification) {
    //   toastNotification(
    //     "warning",
    //     "Same variants of  a product cann't be added in both Buy X and Buy Y !!",
    //     "top"
    //   );
    // }
    // return finalArray;
  };
  return (
    <>
      <Text as="h2" variant="headingSm">
        {DescText}
      </Text>
      <TextField
        inputMode="search"
        size="slim"
        placeholder={`Search ${Placeholder}`}
        value={searchText}
        onChange={(e) => {
          setSearchText(e);
          ResourcePicker();
        }}
        autoComplete="off"
        suffix={
          <Button onClick={ResourcePicker} variant="monochromePlain">
            Browse
          </Button>
        }
      />
      <ResourceList
        resourceName={{
          singular: "product",
          plural: "products",
        }}
        items={
          page == "xproduct"
            ? data?.bundleDetail?.xproducts
            : page == "yproduct"
              ? data?.bundleDetail?.yproducts
              : data?.bundleDetail?.products
        }
        renderItem={(item, Pid, index) => (
          <ResourceList.Item
            id={item.id}
            media={
              <Thumbnail
                source={
                  item?.images?.length
                    ? item?.images[0].originalSrc
                    : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-2_large.png?v=1530129132"
                }
                alt={item?.images?.length ? item?.images[0].altText : ""}
              />
            }
          >
            <InlineStack align="space-between">
              <Text variant="bodyMd" fontWeight="bold" as="h3">
                {item?.title}
              </Text>
              {page == "productBundle" ? (
                <TextField
                  size="slim"
                  label="Minimum orders"
                  type="number"
                  value={item.minimumOrder}
                  onChange={(newvalue) => {
                    validationHandler(newvalue, index);
                    if (newvalue == "" || newvalue < 0) {
                      let update = [...data.bundleDetail.products];
                      update[index].minimumOrder = 0;
                      setData({
                        ...data,
                        bundleDetail: {
                          ...data.bundleDetail,
                          products: [...update],
                        },
                      });
                    } else {
                      if (String(newvalue).length > 1) {
                        newvalue = newvalue.replace(/^0/, "");
                      }
                      let update = [...data.bundleDetail.products];
                      update[index].minimumOrder = newvalue;
                      setData({
                        ...data,
                        bundleDetail: {
                          ...data.bundleDetail,
                          products: [...update],
                        },
                      });
                    }
                  }}
                  autoComplete="off"
                />
              ) : (
                ""
              )}
              <div>
                {PickerType !== "collection" && (
                  <Button
                    variant="plain"
                    onClick={() =>
                      handleEditFurther(
                        item.id,
                        temp.setPid,
                        temp.setAntModal,
                        temp.setLoader,
                        data.bundleDetail.products,
                        temp.setCheckedIds,
                        temp.setVariantData,
                        app,
                        "open-variant-id",
                        Shopify
                      )
                    }
                  >
                    Edit variants
                  </Button>
                )}
                <DeleteIcon
                  onClick={() => removeProductFromList(item, index)}
                  width={20}
                  height={20}
                />
              </div>
            </InlineStack>
          </ResourceList.Item>
        )}
      />
      <Modal id="open-variant-id">
        <ProductVariantData
          checkedIds={checkedIds}
          setCheckedIds={temp.setCheckedIds}
          variantData={variantData}
          loader={loader}
          VariantHandler={VariantHandler}
          errorArray={errorArray}
        />
        <p></p>
        <TitleBar title="Edit Variant">
          <button onClick={setOk}>Save</button>
        </TitleBar>
      </Modal>
      {/* <ui-modal >
        <div>
          <ProductVariantData
            checkedIds={checkedIds}
            setCheckedIds={temp.setCheckedIds}
            variantData={variantData}
            loader={loader}
            VariantHandler={VariantHandler}
            errorArray={errorArray}
          />
        </div>
        <ui-title-bar title="Edit Variant">
          <button onClick={VariantHandler}>Save</button>
        </ui-title-bar>
      </ui-modal> */}
      {/* )} */}
    </>

    // {/* <div className="sd-bundle-ProductListMain">
    // {data.bundleDetail.products.map((item, index) => {
    //   return (
    //     <div key={index}>
    //       <div className="sd-bundle-selectedProductList">
    //         <div className="sd-bundle-image-title">

    //           {/* {
    // modalType=="Collection" ? <img  src={ item?.image ? item?.image?.originalSrc : pic } /> : <img  src={ item?.images ? item?.images[0]?.originalSrc : item ?.src ? item ?.src : pic } alt="photo" />
    // } */}
    //           <div>
    //             <Thumbnail
    //               source={item?.image ? item?.image?.originalSrc : item?.images ? item?.images[0]?.originalSrc : item?.src ? item?.src : pic}
    //               alt=""
    //               size="small"
    //             />
    //           </div>

    //           <div key={index} className="sd-bundle-title-section">
    //             <div className="sd-bundle-title">{item.title}</div>
    //             {
    //               (page == "productBundle" || page == "productMixMatch" || (page == "volumeBundle" && modalType == "Product")) && item.hasOnlyDefaultVariant == false && (
    //                 <div className="sd-bundle-variant">

    //                   <span>
    //                     <Button
    //                       plain
    //                       onClick={() => handleEditFurther(item.id, temp.setPid, temp.setAntModal, temp.setLoader, data.bundleDetail.products, temp.setCheckedIds, temp.setVariantData, app)}
    //                     >
    //                       Edit Further
    //                     </Button>
    //                   </span>
    //                   {showOutOfStockError(item) && (
    //                     <div className="sd-bundle-out-of-stock">few variants are out of stock.</div>)}

    //                 </div>
    //               )
    //               // </div>
    //             }
    //           </div>
    //         </div>

    //         {page == "productBundle" &&
    //           <div className="sd-bundle-quantity">
    //             <TextField
    //               type="number"
    //               label="Minimum order"
    //               onChange={(newvalue) => {

    //                 validationHandler(newvalue, index)
    //                 // data.bundleDetail.products.map((item, index) => {

    //                 if (newvalue == "" || newvalue < 0) {
    //                   let update = [...data.bundleDetail.products];

    //                   update[update?.indexOf(item)].minimumOrder = 0;

    //                   // });
    //                   setSelectedProducts(update);
    //                   setData({ ...data, bundleDetail: { ...data.bundleDetail, products: [...update] } });

    //                 } else {
    //                   if (String(newvalue).length > 1) {
    //                     newvalue = newvalue.replace(/^0/, "");
    //                   }
    //                   let update = [...data.bundleDetail.products];

    //                   update[update?.indexOf(item)].minimumOrder =
    //                     newvalue;

    //                   setData({ ...data, bundleDetail: { ...data.bundleDetail, products: [...update] } });

    //                 }
    //               }}
    //               value={item.minimumOrder}
    //               autoComplete="off"
    //               min="0"
    //             />

    //           </div>
    //         }

    //         <button
    //           className="Polaris-Button Polaris-Button--plain Polaris-Button--iconOnly"
    //           type="button"
    //           onClick={() => removeProductFromList(item, index)}
    //         >
    //           <span className="Polaris-Button__Content">
    //             <span className="Polaris-Button__Icon">
    //               <span className="Polaris-Icon">
    //                 <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--regular Polaris-Text--visuallyHidden"></span>
    //                 <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 8.25a.75.75 0 0 1 .75.75v4.25a.75.75 0 0 1-1.5 0v-4.25a.75.75 0 0 1 .75-.75Z" fill="#5C5F62" /><path d="M9.25 9a.75.75 0 0 0-1.5 0v4.25a.75.75 0 0 0 1.5 0v-4.25Z" fill="#5C5F62" /><path fillRule="evenodd" d="M7.25 5.25a2.75 2.75 0 0 1 5.5 0h3a.75.75 0 0 1 0 1.5h-.75v5.45c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327h-.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.327-.642-.327-1.482-.327-3.162v-5.45h-.75a.75.75 0 0 1 0-1.5h3Zm1.5 0a1.25 1.25 0 1 1 2.5 0h-2.5Zm-2.25 1.5h7v5.45c0 .865-.001 1.423-.036 1.848-.033.408-.09.559-.128.633a1.5 1.5 0 0 1-.655.655c-.074.038-.225.095-.633.128-.425.035-.983.036-1.848.036h-.4c-.865 0-1.423-.001-1.848-.036-.408-.033-.559-.09-.633-.128a1.5 1.5 0 0 1-.656-.655c-.037-.074-.094-.225-.127-.633-.035-.425-.036-.983-.036-1.848v-5.45Z" fill="#5C5F62" /></svg>
    //               </span>
    //             </span>
    //           </span>
    //         </button>
    //       </div>
    //       {page == "productBundle" && errorArray?.includes(index) ? (
    //         <InlineError message=" Minimum Order can't be empty or zero   " />
    //       ) : (
    //         ""
    //       )}
    //       {index !== data.bundleDetail.products.length - 1 ? <Divider /> : ""}
    //     </div>
    //   );
    // })}
    // </div> */}
  );
};
export default BundlePickerData;
