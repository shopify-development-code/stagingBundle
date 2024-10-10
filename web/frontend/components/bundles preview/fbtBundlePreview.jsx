import { Button, Checkbox } from "antd";
import pic from "../../assets/image2.png";
import { PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { Fragment, useEffect, useState } from "react";
import { showAmountWithCurrency } from "../showCurrencyFormat";
import EmptyPreview from "../commonSections/emptyPreview";
import { useAPI } from "../shop";

const FBTBundlePreview = ({ data, mrp, endPrice, currency }) => {
  let [allProducts, setAllProducts] = useState([]);
  let [mrpForAllProductsType, setMrpForAllProductsType] = useState(0);
  let [finalPriceForAllProductsType, setFinalPriceForAllProductsType] =
    useState(0);
  const { shop, timeZone, currencyCode } = useAPI();
  let dummyPricesForAllProductsType = [500, 100, 100, 100];
  let designOption = data?.customization[0]?.frequentlyBoughtTogether?.design;

  useEffect(() => {
    setAllProducts([
      ...data.bundleDetail.mainProducts,
      ...data.bundleDetail.offeredProducts,
    ]);
    if (data.bundleDetail.discountedProductType == "all_products") {
      let mrp = calculateMrpForAllProductsType();
      calculateFinalPriceForAllProductsType(mrp);
    }
  }, [data]);
  const fontFamily = {
    fontFamily: data?.customization[0]?.frequentlyBoughtTogether?.box?.fontFamily || 'inherit',
  };

  const calculateMrpForAllProductsType = () => {
    let sum = 0;
    dummyPricesForAllProductsType.forEach((item) => {
      sum += item;
    });
    setMrpForAllProductsType(sum);
    return sum;
  };

  function calculateFinalPriceForAllProductsType(mrp) {
    let finalPrice = 0;

    if (data.bundleDetail.discountType == "percent") {
      if (data.bundleDetail.discountValue > 100) {
        finalPrice = 0;
      } else {
        finalPrice = mrp - mrp * (data.bundleDetail.discountValue / 100);
      }
    } else if (data.bundleDetail.discountType == "fixed") {
      if (parseFloat(data.bundleDetail.discountValue) > mrp) {
        finalPrice = 0;
      } else {
        finalPrice = mrp - data.bundleDetail.discountValue;
      }
    } else if (data.bundleDetail.discountType == "price") {
      if (data.bundleDetail.discountValue > mrp) {
        finalPrice = mrp;
      } else {
        finalPrice = data.bundleDetail.discountValue;
      }
    } else if (
      data.bundleDetail.discountType == "freeShipping" ||
      data.bundleDetail.discountType == "noDiscount"
    ) {
      finalPrice = mrp;
    }

    setFinalPriceForAllProductsType(finalPrice);
    return finalPrice;
  }
  // console.log("hello check final price****", dummyPricesForAllProductsType);
  return (
    <>
      {designOption == "modern" ? (
        <div className="sd-bundle-bundleSection-common">
          <div className="sd-bundle-bundleSection-heading-common">
            Modern Preview
          </div>
          {allProducts.length > 0 &&
          data.bundleDetail.discountedProductType == "specific_product" ? (
            <div
              className="sd-bundle-main-column"
              style={{
                backgroundColor: data.customization[0]?.frequentlyBoughtTogether?.box?.backgroundColor,
                borderColor: data.customization[0]?.frequentlyBoughtTogether?.box?.borderColor,
                borderRadius: (data.customization[0]?.frequentlyBoughtTogether?.box?.borderRadius) + "px",
              }}              
            >
              {(data.bundleDetail.discountType === "percent" ||
                data.bundleDetail.discountType === "fixed") &&
                data?.customization[0]?.frequentlyBoughtTogether?.optionalBadge
                  ?.enable && (
                  <div
                    className="sd-badges-part"
                    style={{
                      backgroundColor: data.customization[0]?.frequentlyBoughtTogether?.optionalBadge?.background,
                    }}                    
                  >
                    <span
                      style={{
                        ...fontFamily,
                        color: data.customization[0]?.frequentlyBoughtTogether?.optionalBadge?.color ,
                        fontSize: `${data.customization[0]?.frequentlyBoughtTogether?.optionalBadge?.fontSize }px`,
                      }}                      
                    >
                      {data.bundleDetail.discountType === "free"
                        ? "Free"
                        : data.bundleDetail.discountType === "fixed"
                          ? currencyCode.replace(/{{.*?}}/g, "") +
                            data.bundleDetail.discountValue +
                            " off"
                          : data.bundleDetail.discountType === "percent"
                            ? data.bundleDetail.discountValue + "% off"
                            : null}
                    </span>
                  </div>
                )}

              <div
                className={`sd-bundle-text-detail ${data.customization[0]?.frequentlyBoughtTogether?.optionalBadge?.enable === true ? "extra-padding" : ""}`}
              >
                <h4
                  style={{
                    ...fontFamily,
                    color: data.customization[0]?.frequentlyBoughtTogether?.title?.color ,
                    fontSize: (data.customization[0]?.frequentlyBoughtTogether?.title?.fontSize) + "px", 
                    textAlign: data.customization[0]?.frequentlyBoughtTogether?.title?.alignment ?? 'left', 
                    fontWeight: data.customization[0]?.frequentlyBoughtTogether?.title?.titleBold ?? 'normal',
                  }}                  
                >
                  {data?.title}
                </h4>
                <p
                  style={{
                    ...fontFamily,
                    color: data.customization[0]?.frequentlyBoughtTogether?.title?.descriptionColor ,
                    fontSize: (data.customization[0]?.frequentlyBoughtTogether?.title?.descriptionFontSize) + "px",
                    fontWeight: data.customization[0]?.frequentlyBoughtTogether?.title?.descriptionBold,
                    textAlign: data.customization[0]?.frequentlyBoughtTogether?.title?.alignment,
                  }}                  
                >
                  {data?.description}
                </p>
              </div>

              {allProducts.map((item, index) => (
                <Fragment key={index}>
                  <div
                    className="sd-bundle-product-detail"
                    style={{
                      backgroundColor: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.productDetailsBox?.backgroundColor
                    }}                    
                  >
                    <div className="sd-bundle-product-inner">
                      <div className="checkbox-wrapper-18">
                        <div className="round">
                          <input type="checkbox" id="checkbox-18" checked />
                          <label for="checkbox-18"></label>
                        </div>
                      </div>
                      <div
                        className="sd-bundle-product-img"
                        style={{
                          borderColor: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.image?.borderColor ,
                          borderRadius: (data.customization[0]?.frequentlyBoughtTogether?.productDetails?.image?.borderRadius ) + "px", 
                        }}                        
                      >
                        <img
                          src={
                            item?.images?.length > 0
                              ? item?.images[0]?.originalSrc
                              : pic
                          }
                          width="80"
                          height="80"
                        />
                      </div>
                      <div className="sd-bundle-product-name">
                        <h5
                          style={{
                            ...fontFamily,
                            color: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.title?.color ,
                            fontSize: (data.customization[0]?.frequentlyBoughtTogether?.productDetails?.title?.fontSize) + "px",
                          }}                          
                        >
                          {item.title}
                        </h5>
                        <h4
                          style={{
                            ...fontFamily,
                            color: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.price?.color , 
                            fontSize: (data.customization[0]?.frequentlyBoughtTogether?.productDetails?.price?.fontSize) + "px", 
                          }}                          
                        >
                          {showAmountWithCurrency(
                            item.variants[0]?.price,
                            currency
                          )}
                        </h4>
                        <select
                          style={{
                            ...fontFamily,
                            backgroundColor: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.variantSelector?.backgroundColor ,
                            color: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.variantSelector?.color,
                            width: (data.customization[0]?.frequentlyBoughtTogether?.productDetails?.variantSelector?.width) + "px",
                          }}                          
                          disabled
                        >
                          <option style={{ ...fontFamily }}>Medium</option>
                          <option style={{ ...fontFamily }}>Small</option>
                        </select>
                      </div>
                    </div>
                    <div className="sd-bundle-product-quantity">
                      <h6
                        style={{
                          ...fontFamily,
                          color: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.quantities?.color,
                          fontSize: (data.customization[0]?.frequentlyBoughtTogether?.productDetails?.quantities?.size) + "px",
                        }}                        
                      >
                        Qty:{" "}
                        <span
                          style={{
                            ...fontFamily,
                            fontSize: (data.customization[0]?.frequentlyBoughtTogether?.productDetails?.quantities?.size) + "px", 
                          }}                          
                        >
                          1
                        </span>
                      </h6>
                    </div>
                  </div>
                  {allProducts.indexOf(item) != allProducts.length - 1 ? (
                    <div className="sd-add-bundle">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
                          fill={data.customization[0]?.frequentlyBoughtTogether?.productDetails?.plusColor || "black" }
                        />
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </Fragment>
              ))}

              <div className="sd-product-bundle-total">
                <div className="sd-total-desc">
                  <h4
                    style={{
                      ...fontFamily,
                      color: data.customization[0]?.frequentlyBoughtTogether?.totalSection?.color,
                      fontSize: (data.customization[0]?.frequentlyBoughtTogether?.totalSection?.fontSize) + "px",
                    }}                    
                  >
                    Total
                  </h4>
                  <p
                    style={{
                      ...fontFamily,
                      color: data.customization[0]?.frequentlyBoughtTogether?.totalSection?.discountMessage?.color ,
                      fontSize: (data.customization[0]?.frequentlyBoughtTogether?.totalSection?.discountMessage?.size ) + "px",
                    }}                    
                  >
                    Discount will be applied at checkout
                  </p>
                </div>
                <div className="sd-total-amount">
                  <h4
                    style={{
                      ...fontFamily,
                      color: data.customization[0]?.frequentlyBoughtTogether?.totalSection?.finalPrice?.color ,
                      fontSize: (data.customization[0]?.frequentlyBoughtTogether?.totalSection?.finalPrice?.fontSize ) + "px",
                    }}                    
                  >
                    {showAmountWithCurrency(endPrice, currency)}{" "}
                  </h4>
                  {(data.bundleDetail.discountType == "percent" ||
                    data.bundleDetail.discountType == "fixed") && (
                    <h6
                    style={{
                      ...fontFamily,
                      color: data.customization[0]?.frequentlyBoughtTogether?.totalSection?.originalPrice?.color , 
                      fontSize: (data.customization[0]?.frequentlyBoughtTogether?.totalSection?.originalPrice?.fontSize ) + "px", 
                    }}                    
                    >
                      {showAmountWithCurrency(mrp, currency)}
                    </h6>
                  )}
                </div>
              </div>
              {data.bundleDetail.discountType == "freeShipping" ? (
                <div className="sd-bundle-freeShipping">
                  <div className="sd-bundle-freeShipping-icon">
                    <ShoppingCartOutlined />
                  </div>

                  <div
                    className="sd-bundle-freeShipping-text"
                    style={{ ...fontFamily }}
                  >
                    Get Free Shipping
                  </div>
                </div>
              ) : (
                " "
              )}
              <div className="sd-bundle-addto-cart">
                <button
                  style={{
                    ...fontFamily,
                    color: data.customization[0]?.frequentlyBoughtTogether?.button?.color ,
                    fontSize: (data.customization[0]?.frequentlyBoughtTogether?.button?.fontSize ) + "px",
                    backgroundColor: data.customization[0]?.frequentlyBoughtTogether?.button?.backgroundColor ,
                    borderColor: data.customization[0]?.frequentlyBoughtTogether?.button?.borderColor,
                    borderRadius: (data.customization[0]?.frequentlyBoughtTogether?.button?.borderRadius) + "px"
                  }}                  
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ) : allProducts.length == 0 &&
            data.bundleDetail.discountedProductType == "specific_product" ? (
            <EmptyPreview type={""} />
          ) : (
            <div
              className="sd-bundle-main-column"
              style={{
                backgroundColor: data.customization[0]?.frequentlyBoughtTogether?.box?.backgroundColor,
                borderColor: data.customization[0]?.frequentlyBoughtTogether?.box?.borderColor,
                borderRadius: (data.customization[0]?.frequentlyBoughtTogether?.box?.borderRadius ) + "px",
              }}              
            >
              {(data.bundleDetail.discountType === "percent" ||
                data.bundleDetail.discountType === "fixed") &&
                data?.customization[0]?.frequentlyBoughtTogether?.optionalBadge
                  .enable && (
                  <div
                    className="sd-badges-part"
                    style={{
                      backgroundColor: data.customization[0]?.frequentlyBoughtTogether?.optionalBadge?.background,
                    }}                    
                  >
                    <span
                      style={{
                        ...fontFamily,
                        color: data.customization[0]?.frequentlyBoughtTogether?.optionalBadge?.color,
                        fontSize: `${data.customization[0]?.frequentlyBoughtTogether?.optionalBadge?.fontSize}px`,
                      }}                      
                    >
                      {data.bundleDetail.discountType === "free"
                        ? "Free"
                        : data.bundleDetail.discountType === "fixed"
                          ? currencyCode.replace(/{{.*?}}/g, "") +
                            data.bundleDetail.discountValue +
                            " off"
                          : data.bundleDetail.discountType === "percent"
                            ? data.bundleDetail.discountValue + "% off"
                            : null}
                    </span>
                  </div>
                )}
              <div
               className={`sd-bundle-text-detail ${data.customization[0]?.frequentlyBoughtTogether?.optionalBadge?.enable ? "extra-padding" : ""}`}
              >
                <h4
                 style={{
                  ...fontFamily,
                  color: data.customization[0]?.frequentlyBoughtTogether?.title?.color,
                  fontSize: `${data.customization[0]?.frequentlyBoughtTogether?.title?.fontSize}px`,
                  textAlign: data.customization[0]?.frequentlyBoughtTogether?.title?.alignment,
                  fontWeight: data.customization[0]?.frequentlyBoughtTogether?.title?.titleBold,
                }}                
                >
                  {data?.title}
                </h4>
                <p
                  style={{
                    ...fontFamily,
                    color: data.customization[0]?.frequentlyBoughtTogether?.title?.descriptionColor,
                    fontSize: `${data.customization[0]?.frequentlyBoughtTogether?.title?.descriptionFontSize}px`,
                    fontWeight: data.customization[0]?.frequentlyBoughtTogether?.title?.descriptionBold,
                    textAlign: data.customization[0]?.frequentlyBoughtTogether?.title?.alignment,
                  }}                  
                >
                  {data?.description}
                </p>
              </div>
              {dummyPricesForAllProductsType.map((element, index) => (
                <Fragment key={index}>
                  <div
                    className="sd-bundle-product-detail"
                    style={{
                      backgroundColor: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.productDetailsBox?.backgroundColor,
                    }}                    
                  >
                    <div className="sd-bundle-product-inner">
                      <div className="checkbox-wrapper-18">
                        <div className="round">
                          <input type="checkbox" id="checkbox-18" checked />
                          <label for="checkbox-18"></label>
                        </div>
                      </div>
                      <div
                        className="sd-bundle-product-img"
                        style={{
                          borderColor: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.image?.borderColor,
                          borderRadius: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.image?.borderRadius + "px",
                        }}                        
                      >
                        <img src={pic} width="80" height="80" />
                      </div>
                      <div className="sd-bundle-product-name">
                        <h5
                          style={{
                            ...fontFamily,
                            color: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.title?.color,
                            fontSize: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.title?.fontSize + "px",
                          }}                          
                        >
                          {index == 0
                            ? "Main Product"
                            : `Offered Product ${index}`}
                        </h5>
                        <h4
                          style={{
                            ...fontFamily,
                            color: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.price?.color,
                            fontSize: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.price?.fontSize + "px",
                          }}                          
                        >
                          {showAmountWithCurrency(
                            dummyPricesForAllProductsType[index],
                            currency
                          )}
                        </h4>
                        <select
                          style={{
                            ...fontFamily,
                            backgroundColor:
                              data.customization[0]?.frequentlyBoughtTogether?.productDetails?.variantSelector?.backgroundColor,
                            color:
                              data.customization[0]?.frequentlyBoughtTogether?.productDetails?.variantSelector?.color,
                            width:
                              data.customization[0]?.frequentlyBoughtTogether?.productDetails?.variantSelector?.width + "px",
                          }}                          
                          disabled
                        >
                          <option style={{ ...fontFamily }}>Medium</option>
                          <option style={{ ...fontFamily }}>Small</option>
                        </select>
                      </div>
                    </div>
                    <div className="sd-bundle-product-quantity">
                      <h6
                        style={{
                          ...fontFamily,
                          color:
                            data.customization[0]?.frequentlyBoughtTogether?.productDetails?.quantities?.color,
                          fontSize:
                            data.customization[0]?.frequentlyBoughtTogether?.productDetails?.quantities?.size + "px",
                        }}                        
                      >
                        Qty:{" "}
                        <span
                          style={{
                            ...fontFamily,
                            fontSize:
                              data.customization[0]?.frequentlyBoughtTogether?.productDetails?.quantities?.size + "px",
                          }}                          
                        >
                          1
                        </span>
                      </h6>
                    </div>
                  </div>
                  {index != dummyPricesForAllProductsType.length - 1 ? (
                    <div className="sd-add-bundle">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
                          fill={
                            data.customization[0]?.frequentlyBoughtTogether?.productDetails?.plusColor || "black"
                          }                          
                        />
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </Fragment>
              ))}

              <div className="sd-product-bundle-total">
                <div className="sd-total-desc">
                  <h4
                    style={{
                      ...fontFamily,
                      color: data.customization[0]?.frequentlyBoughtTogether?.totalSection?.color,
                      fontSize: data.customization[0]?.frequentlyBoughtTogether?.totalSection?.fontSize + "px",
                    }}                    
                  >
                    {" "}
                    Total
                  </h4>
                  <p
                    style={{
                      ...fontFamily,
                      color: data.customization[0]?.frequentlyBoughtTogether?.totalSection?.discountMessage?.color,
                      fontSize: data.customization[0]?.frequentlyBoughtTogether?.totalSection?.discountMessage?.size + "px",
                    }}                    
                  >
                    Discount will be applied at checkout
                  </p>
                </div>
                <div className="sd-total-amount">
                  <h4
                    style={{
                      ...fontFamily,
                      color: data.customization[0]?.frequentlyBoughtTogether?.totalSection?.finalPrice?.color,
                      fontSize: data.customization[0]?.frequentlyBoughtTogether?.totalSection?.finalPrice?.fontSize + "px",
                    }}                    
                  >
                    {" "}
                    {showAmountWithCurrency(
                      finalPriceForAllProductsType,
                      currency
                    )}
                  </h4>
                  {(data.bundleDetail.discountType == "percent" ||
                    data.bundleDetail.discountType == "fixed") && (
                    <h6
                    style={{
                      ...fontFamily,
                      color: data.customization[0]?.frequentlyBoughtTogether?.totalSection?.originalPrice?.color,
                      fontSize: data.customization[0]?.frequentlyBoughtTogether?.totalSection?.originalPrice?.fontSize + "px",
                    }}                    
                    >
                      {showAmountWithCurrency(mrpForAllProductsType, currency)}
                    </h6>
                  )}
                </div>
              </div>
              {data.bundleDetail.discountType == "freeShipping" ? (
                <div className="sd-bundle-freeShipping">
                  <div className="sd-bundle-freeShipping-icon">
                    <ShoppingCartOutlined />
                  </div>

                  <div
                    className="sd-bundle-freeShipping-text"
                    style={{ ...fontFamily }}
                  >
                    Get Free Shipping
                  </div>
                </div>
              ) : (
                " "
              )}
              <div className="sd-bundle-addto-cart">
                <button
                 style={{
                  ...fontFamily,
                  color: data.customization[0]?.frequentlyBoughtTogether?.button?.color,
                  fontSize: data.customization[0]?.frequentlyBoughtTogether?.button?.fontSize + "px",
                  backgroundColor: data.customization[0]?.frequentlyBoughtTogether?.button?.backgroundColor,
                  borderColor: data.customization[0]?.frequentlyBoughtTogether?.button?.borderColor,
                  borderRadius: data.customization[0]?.frequentlyBoughtTogether?.button?.borderRadius + "px",
                }}                
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="sd-bundle-bundleSection-common">
          <div className="sd-bundle-bundleSection-heading-common">
            Classic Preview
          </div>
          {allProducts.length > 0 &&
          data.bundleDetail.discountedProductType == "specific_product" ? (
            <div
              className="sd-bundle-main-column"
              style={{
                backgroundColor: data.customization[0]?.frequentlyBoughtTogether?.box?.backgroundColor,
                borderColor: data.customization[0]?.frequentlyBoughtTogether?.box?.borderColor,
                borderRadius: data.customization[0]?.frequentlyBoughtTogether?.box?.borderRadius + "px",
              }}              
            >
              {(data.bundleDetail.discountType === "percent" ||
                data.bundleDetail.discountType === "fixed") &&
                data.customization[0]?.frequentlyBoughtTogether?.optionalBadge?.enable && (
                  <div
                    className="sd-badges-part"
                    style={{
                      backgroundColor:
                        data.customization[0]?.frequentlyBoughtTogether?.optionalBadge?.background,
                    }}                    
                  >
                    <span
                      style={{
                        ...fontFamily,
                        color: data.customization[0]?.frequentlyBoughtTogether?.optionalBadge?.color,
                        fontSize: `${data.customization[0]?.frequentlyBoughtTogether?.optionalBadge?.color?.fontSize}px`,
                      }}                      
                    >
                      {data.bundleDetail.discountType === "free"
                        ? "Free"
                        : data.bundleDetail.discountType === "fixed"
                          ? currencyCode.replace(/{{.*?}}/g, "") +
                            data.bundleDetail.discountValue +
                            " off"
                          : data.bundleDetail.discountType === "percent"
                            ? data.bundleDetail.discountValue + "% off"
                            : null}
                    </span>
                  </div>
                )}
              <div
                className={`sd-bundle-text-detail ${
                  data.customization[0]?.frequentlyBoughtTogether?.optionalBadge?.enable ? "extra-padding" : ""
                }`}                
              >
                <h4
                  style={{
                    ...fontFamily,
                    color: data.customization[0]?.frequentlyBoughtTogether?.title?.color,
                    fontSize: data.customization[0]?.frequentlyBoughtTogether?.title?.fontSize + "px",
                    textAlign: data.customization[0]?.frequentlyBoughtTogether?.title?.alignment,
                    fontWeight: data.customization[0]?.frequentlyBoughtTogether?.title?.titleBold,
                  }}                  
                >
                  {data?.title}
                </h4>
                <p
                  style={{
                    ...fontFamily,
                    color: data.customization[0]?.frequentlyBoughtTogether?.title?.descriptionColor,
                    fontSize: data.customization[0]?.frequentlyBoughtTogether?.title?.descriptionFontSize + "px",
                    fontWeight: data.customization[0]?.frequentlyBoughtTogether?.title?.descriptionBold,
                    textAlign: data.customization[0]?.frequentlyBoughtTogether?.title?.alignment,
                  }}                  
                >
                  {data?.description}
                </p>
                <div className="sd-show-selected-product-item">
                  {allProducts?.length > 0 &&
                    allProducts?.map((item, index) => {
                      return (
                        <Fragment key={index}>
                          <div
                            className="sd-selected-product-itemImg"
                            style={{
                              borderColor: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.image?.borderColor,
                              borderRadius: data.customization[0]?.frequentlyBoughtTogether?.productDetails?.image?.borderRadius + "px",
                            }}                            
                          >
                            <img
                              src={
                                item?.images[0]?.originalSrc
                                  ? item?.images[0]?.originalSrc
                                  : pic
                              }
                              alt=""
                            />
                          </div>
                          {index !== allProducts?.length - 1 && (
                            <div className="plus-selectedIcon">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
                                  fill={
                                    data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.plusColor
                                }                                
                                />
                              </svg>
                            </div>
                          )}
                        </Fragment>
                      );
                    })}
                </div>
              </div>

              {allProducts.map((item, index) => (
                <Fragment key={index}>
                  <div
                    className="sd-bundle-product-detail"
                    style={{
                      backgroundColor:
                          data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.productDetailsBox?.backgroundColor,
                  }}                  
                  >
                    <div className="sd-bundle-product-inner">
                      <div className="checkbox-wrapper-18">
                        <div className="round">
                          <input type="checkbox" id="checkbox-18" checked />
                          <label for="checkbox-18"></label>
                        </div>
                      </div>
                      <div className="sd-bundle-product-name">
                        <h5
                          style={{
                            ...fontFamily,
                            color:
                                data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.title?.color,
                            fontSize:
                                `${data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.title?.fontSize || 0}px`,
                        }}                        
                        >
                          {item.title}
                        </h5>
                        <h4
                          style={{
                            ...fontFamily,
                            color:
                                data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.price?.color,
                            fontSize:
                                `${data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.price?.fontSize || 0}px`,
                        }}                        
                        >
                          {showAmountWithCurrency(
                            item.variants[0]?.price,
                            currency
                          )}
                        </h4>
                        <select
                          style={{
                            ...fontFamily,
                            backgroundColor:
                                data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.variantSelector?.backgroundColor,
                            color:
                                data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.variantSelector?.color,
                            width:
                                `${data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.variantSelector?.width || 0}px`,
                        }}                        
                          disabled
                        >
                          <option style={{ ...fontFamily }}>Medium</option>
                          <option style={{ ...fontFamily }}>Small</option>
                        </select>
                      </div>
                    </div>
                    <div className="sd-bundle-product-quantity">
                      <h6
                        style={{
                          ...fontFamily,
                          color:
                              data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.quantities?.color,
                          fontSize:
                              `${data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.quantities?.size || 0}px`,
                      }}                      
                      >
                        Qty:{" "}
                        <span
                          style={{
                            ...fontFamily,
                            fontSize:
                                `${data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.quantities?.size || 0}px`,
                        }}                        
                        >
                          1
                        </span>
                      </h6>
                    </div>
                  </div>
                  {allProducts.indexOf(item) != allProducts.length - 1 ? (
                    <div className="sd-add-bundle">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
                          fill={
                            data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.plusColor || "black"
                        }                        
                        />
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </Fragment>
              ))}

              <div className="sd-product-bundle-total">
                <div className="sd-total-desc">
                  <h4
                    style={{
                      ...fontFamily,
                      color:
                          data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.color,
                      fontSize:
                          `${data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.fontSize || 0}px`,
                  }}                  
                  >
                    Total
                  </h4>
                  <p
                   style={{
                    ...fontFamily,
                    color:
                        data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.discountMessage?.color,
                    fontSize:
                        `${data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.discountMessage?.size || 0}px`,
                }}                
                  >
                    Discount will be applied at checkout
                  </p>
                </div>
                <div className="sd-total-amount">
                  <h4
                   style={{
                    ...fontFamily,
                    color:
                        data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.finalPrice?.color,
                    fontSize:
                        `${data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.finalPrice?.fontSize || 0}px`,
                }}                
                  >
                    {showAmountWithCurrency(endPrice, currency)}{" "}
                  </h4>
                  {(data.bundleDetail.discountType == "percent" ||
                    data.bundleDetail.discountType == "fixed") && (
                    <h6
                    style={{
                      ...fontFamily,
                      color:
                          data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.originalPrice?.color,
                      fontSize:
                          `${data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.originalPrice?.fontSize || 0}px`,
                  }}                  
                    >
                      {showAmountWithCurrency(mrp, currency)}
                    </h6>
                  )}
                </div>
              </div>
              {data.bundleDetail.discountType == "freeShipping" ? (
                <div className="sd-bundle-freeShipping">
                  <div className="sd-bundle-freeShipping-icon">
                    <ShoppingCartOutlined />
                  </div>

                  <div
                    className="sd-bundle-freeShipping-text"
                    style={{ ...fontFamily }}
                  >
                    Get Free Shipping
                  </div>
                </div>
              ) : (
                " "
              )}
              <div className="sd-bundle-addto-cart">
                <button
                  style={{
                    ...fontFamily,
                    color:
                        data?.customization?.[0]?.frequentlyBoughtTogether?.button?.color,
                    fontSize:
                        `${data?.customization?.[0]?.frequentlyBoughtTogether?.button?.fontSize || 0}px`,
                    backgroundColor:
                        data?.customization?.[0]?.frequentlyBoughtTogether?.button?.backgroundColor,
                    borderColor:
                        data?.customization?.[0]?.frequentlyBoughtTogether?.button?.borderColor,
                    borderRadius:
                        `${data?.customization?.[0]?.frequentlyBoughtTogether?.button?.borderRadius || 0}px`,
                }}                
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ) : allProducts.length == 0 &&
            data.bundleDetail.discountedProductType == "specific_product" ? (
            <EmptyPreview type={""} />
          ) : (
            <div
              className="sd-bundle-main-column"
              style={{
                backgroundColor:
                    data?.customization?.[0]?.frequentlyBoughtTogether?.box?.backgroundColor,
                borderColor:
                    data?.customization?.[0]?.frequentlyBoughtTogether?.box?.borderColor,
                borderRadius:
                    `${data?.customization?.[0]?.frequentlyBoughtTogether?.box?.borderRadius || 0}px`,
            }}            
            >
              {(data.bundleDetail.discountType === "percent" ||
                data.bundleDetail.discountType === "fixed") &&
                data?.customization[0]?.frequentlyBoughtTogether?.optionalBadge
                  ?.enable && (
                  <div
                    className="sd-badges-part"
                    style={{
                      backgroundColor:
                          data?.customization?.[0]?.frequentlyBoughtTogether?.optionalBadge?.background,
                  }}                  
                  >
                    <span
                      style={{
                        ...fontFamily,
                        color:
                            data?.customization?.[0]?.frequentlyBoughtTogether?.optionalBadge?.color,
                        fontSize: `${data?.customization?.[0]?.frequentlyBoughtTogether?.optionalBadge?.fontSize || 0}px`,
                    }}                    
                    >
                      {data.bundleDetail.discountType === "free"
                        ? "Free"
                        : data.bundleDetail.discountType === "fixed"
                          ? currencyCode.replace(/{{.*?}}/g, "") +
                            data.bundleDetail.discountValue +
                            " off"
                          : data.bundleDetail.discountType === "percent"
                            ? data.bundleDetail.discountValue + "% off"
                            : null}
                    </span>
                  </div>
                )}
              <div
                className={`sd-bundle-text-detail ${data?.customization?.[0]?.frequentlyBoughtTogether?.optionalBadge?.enable ? "extra-padding" : ""}`}
              >
                <h4
                  style={{
                    ...fontFamily,
                    color:
                        data?.customization?.[0]?.frequentlyBoughtTogether?.title?.color,
                    fontSize:
                        `${data?.customization?.[0]?.frequentlyBoughtTogether?.title?.fontSize || 0}px`,
                    textAlign:
                        data?.customization?.[0]?.frequentlyBoughtTogether?.title?.alignment,
                    fontWeight:
                        data?.customization?.[0]?.frequentlyBoughtTogether?.title?.titleBold,
                }}                
                >
                  {data?.title}
                </h4>
                <p
                 style={{
                  ...fontFamily,
                  color:
                      data?.customization?.[0]?.frequentlyBoughtTogether?.title?.descriptionColor,
                  fontSize:
                      `${data?.customization?.[0]?.frequentlyBoughtTogether?.title?.descriptionFontSize || 0}px`,
                  fontWeight:
                      data?.customization?.[0]?.frequentlyBoughtTogether?.title?.descriptionBold,
                  textAlign:
                      data?.customization?.[0]?.frequentlyBoughtTogether?.title?.alignment,
              }}              
                >
                  {data?.description}
                </p>
                <div className="sd-show-selected-product-item">
                  {dummyPricesForAllProductsType?.length > 0 &&
                    dummyPricesForAllProductsType?.map((item, index) => {
                      return (
                        <Fragment key={index}>
                          <div
                            className="sd-selected-product-itemImg"
                            style={{
                              borderColor:
                                  data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.image?.borderColor,
                              borderRadius:
                                  `${data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.image?.borderRadius || 0}px`,
                          }}                          
                          >
                            <img src={pic} width={80} height={80} />
                          </div>
                          {index !==
                            dummyPricesForAllProductsType?.length - 1 && (
                            <div className="plus-selectedIcon">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
                                  fill={
                                    data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.plusColor
                                }                                
                                />
                              </svg>
                            </div>
                          )}
                        </Fragment>
                      );
                    })}
                </div>
              </div>

              {dummyPricesForAllProductsType.map((item, index) => (
                <Fragment key={index}>
                  <div
                    className="sd-bundle-product-detail"
                    style={{
                      backgroundColor:
                          data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.productDetailsBox?.backgroundColor,
                  }}                  
                  >
                    <div className="sd-bundle-product-inner">
                      <div className="checkbox-wrapper-18">
                        <div className="round">
                          <input type="checkbox" id="checkbox-18" checked />
                          <label for="checkbox-18"></label>
                        </div>
                      </div>
                      <div className="sd-bundle-product-name">
                        <h5
                          style={{
                            ...fontFamily,
                            color:
                                data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.title?.color,
                            fontSize:
                                `${data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.title?.fontSize || 0}px`,
                        }}                        
                        >
                          {index == 0
                            ? "Main Product"
                            : `Offered Product ${index}`}
                        </h5>
                        <h4
                          style={{
                            ...fontFamily,
                            color:
                                data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.price?.color,
                            fontSize:
                                `${data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.price?.fontSize || 0}px`,
                        }}                        
                        >
                          {showAmountWithCurrency(
                            dummyPricesForAllProductsType[index],
                            currency
                          )}
                        </h4>
                        <select
                          style={{
                            ...fontFamily,
                            backgroundColor:
                                data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.variantSelector?.backgroundColor,
                            color:
                                data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.variantSelector?.color,
                            width:
                                `${data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.variantSelector?.width || 0}px`,
                        }}                        
                          disabled
                        >
                          <option style={{ ...fontFamily }}>Medium</option>
                          <option style={{ ...fontFamily }}>Small</option>
                        </select>
                      </div>
                    </div>
                    <div className="sd-bundle-product-quantity">
                      <h6
                        style={{
                          ...fontFamily,
                          color:
                              data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.quantities?.color,
                          fontSize:
                              `${data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.quantities?.size || 0}px`,
                      }}                      
                      >
                        Qty:{" "}
                        <span
                          style={{
                            ...fontFamily,
                            fontSize:
                                `${data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.quantities?.size || 0}px`,
                        }}                        
                        >
                          1
                        </span>
                      </h6>
                    </div>
                  </div>
                  {index != dummyPricesForAllProductsType.length - 1 ? (
                    <div className="sd-add-bundle">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
                          fill={
                            data?.customization?.[0]?.frequentlyBoughtTogether?.productDetails?.plusColor || "black"
                        }                        
                        />
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </Fragment>
              ))}

              <div className="sd-product-bundle-total">
                <div className="sd-total-desc">
                  <h4
                    style={{
                      ...fontFamily,
                      color:
                          data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.color,
                      fontSize:
                          `${data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.fontSize || 0}px`,
                  }}                  
                  >
                    Total
                  </h4>
                  <p
                    style={{
                      ...fontFamily,
                      color:
                          data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.discountMessage?.color,
                      fontSize:
                          `${data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.discountMessage?.size || 0}px`,
                  }}                  
                  >
                    Discount will be applied at checkout
                  </p>
                </div>
                <div className="sd-total-amount">
                  <h4
                    style={{
                      ...fontFamily,
                      color:
                          data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.finalPrice?.color,
                      fontSize:
                          `${data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.finalPrice?.fontSize || 0}px`,
                  }}                  
                  >
                    {" "}
                    {showAmountWithCurrency(
                      finalPriceForAllProductsType,
                      currency
                    )}
                  </h4>
                  {(data.bundleDetail.discountType == "percent" ||
                    data.bundleDetail.discountType == "fixed") && (
                    <h6
                    style={{
                      ...fontFamily,
                      color:
                          data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.originalPrice?.color,
                      fontSize:
                          `${data?.customization?.[0]?.frequentlyBoughtTogether?.totalSection?.originalPrice?.fontSize || 0}px`,
                  }}                  
                    >
                      {showAmountWithCurrency(mrpForAllProductsType, currency)}
                    </h6>
                  )}
                </div>
              </div>
              {data.bundleDetail.discountType == "freeShipping" ? (
                <div className="sd-bundle-freeShipping">
                  <div className="sd-bundle-freeShipping-icon">
                    <ShoppingCartOutlined />
                  </div>

                  <div
                    className="sd-bundle-freeShipping-text"
                    style={{ ...fontFamily }}
                  >
                    Get Free Shipping
                  </div>
                </div>
              ) : (
                " "
              )}
              <div className="sd-bundle-addto-cart">
                <button
                  style={{
                    ...fontFamily,
                    color:
                        data?.customization?.[0]?.frequentlyBoughtTogether?.button?.color,
                    fontSize:
                        `${data?.customization?.[0]?.frequentlyBoughtTogether?.button?.fontSize || 0}px`,
                    backgroundColor:
                        data?.customization?.[0]?.frequentlyBoughtTogether?.button?.backgroundColor,
                    borderColor:
                        data?.customization?.[0]?.frequentlyBoughtTogether?.button?.borderColor,
                    borderRadius:
                        `${data?.customization?.[0]?.frequentlyBoughtTogether?.button?.borderRadius || 0}px`,
                }}                
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FBTBundlePreview;
