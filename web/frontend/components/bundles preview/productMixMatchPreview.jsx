import { Fragment, useEffect, useState } from "react";
import { showAmountWithCurrency } from "../showCurrencyFormat";
import { PlusOutlined } from "@ant-design/icons";
import EmptyPreview from "../commonSections/emptyPreview";
import pic from "../../assets/image2.png";

const ProductMixMatchPreview = ({
  data,
  mrp,
  endPrice,
  currency,
  discountIndex,
}) => {
  let freeShipping = "Free Shipping";
  // console.log("cfdh", data);
  const fontSize = {
    fontFamily: data?.customization[0]?.productMixMatch?.box?.fontFamily || 'inherit',
  };
  return (
    <div className="sd-bundle-bundleSection-common">
      <div className="sd-bundle-bundleSection-heading-common">Preview</div>
      {data.bundleDetail.products.length > 0 ? (
        <div
          className="sd-bundle-main-column"
          style={{
            backgroundColor: data.customization[0]?.productMixMatch?.box?.backgroundColor,
            borderColor: data.customization[0]?.productMixMatch?.box?.borderColor,
            borderRadius: (data.customization[0]?.productMixMatch?.box?.borderRadius ?? 0) + "px",
          }}   
        >
          <div className="sd-bundle-text-detail">
            <h4
             style={{
              ...fontSize,
              color: data.customization[0]?.productMixMatch?.title?.color ?? 'black',
              fontSize: (data.customization[0]?.productMixMatch?.title?.fontSize ?? 14) + "px", 
              textAlign: data.customization[0]?.productMixMatch?.title?.alignment,
              fontWeight: data.customization[0]?.productMixMatch?.title?.titleBold || 'normal',
            }}
            >
              {data.title}
            </h4>
            <p
              style={{
                ...fontSize,
                color: data.customization[0]?.productMixMatch?.title?.descriptionColor ?? 'black',
                fontSize: (data.customization[0]?.productMixMatch?.title?.descriptionFontSize ?? 14) + "px",
                fontWeight: data.customization[0]?.productMixMatch?.title?.descriptionBold || 'normal',
              }}              
            >
              {data.description}
            </p>
          </div>

          <div className="sd-show-selected-items-row">
            <div className="sd-show-items">
              {data.bundleDetail.discountOptions.map((item, index) => {
                return (
                  <>
                    {item.type === "freeShipping" ? (
                      <>
                        {item.quantity == data.bundleDetail.products.length ||
                        (index ===
                          data.bundleDetail.discountOptions.length - 1 &&
                          data.bundleDetail.products.length >=
                            item.quantity) ? (
                          <span style={{ ...fontSize }} className="active">
                            {item.quantity}
                            {index ===
                              data.bundleDetail.discountOptions.length - 1 &&
                              "+"}{" "}
                            items|{freeShipping}
                          </span>
                        ) : (
                          <span style={{ ...fontSize }}>
                            {item.quantity}
                            {index ===
                              data.bundleDetail.discountOptions.length - 1 &&
                              "+"}{" "}
                            items|{freeShipping}
                          </span>
                        )}
                      </>
                    ) : item.type === "fixed" ? (
                      <>
                        {item.quantity == data.bundleDetail.products.length ||
                        (index ===
                          data.bundleDetail.discountOptions.length - 1 &&
                          data.bundleDetail.products.length >=
                            item.quantity) ? (
                          <span style={{ ...fontSize }} className="active">
                            {item.quantity}
                            {index ===
                              data.bundleDetail.discountOptions.length - 1 &&
                              "+"}{" "}
                            items| -
                            {showAmountWithCurrency(item.value, currency)} off
                          </span>
                        ) : (
                          <span style={{ ...fontSize }}>
                            {item.quantity}
                            {index ===
                              data.bundleDetail.discountOptions.length - 1 &&
                              "+"}{" "}
                            items| -
                            {showAmountWithCurrency(item.value, currency)} off
                          </span>
                        )}
                      </>
                    ) : item.type === "noDiscount" ? (
                      <>
                        {item.quantity == data.bundleDetail.products.length ||
                        (index ===
                          data.bundleDetail.discountOptions.length - 1 &&
                          data.bundleDetail.products.length >=
                            item.quantity) ? (
                          <span style={{ ...fontSize }} className="active">
                            {item.quantity}
                            {index ===
                              data.bundleDetail.discountOptions.length - 1 &&
                              "+"}{" "}
                            items
                          </span>
                        ) : (
                          <span style={{ ...fontSize }}>
                            {item.quantity}
                            {index ===
                              data.bundleDetail.discountOptions.length - 1 &&
                              "+"}{" "}
                            items
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        {item.quantity == data.bundleDetail.products.length ||
                        (index ===
                          data.bundleDetail.discountOptions.length - 1 &&
                          data.bundleDetail.products.length >=
                            item.quantity) ? (
                          <span style={{ ...fontSize }} className="active">
                            {item.quantity}
                            {index ===
                              data.bundleDetail.discountOptions.length - 1 &&
                              "+"}{" "}
                            items|{item.value}% off
                          </span>
                        ) : (
                          <span style={{ ...fontSize }}>
                            {item.quantity}
                            {index ===
                              data.bundleDetail.discountOptions.length - 1 &&
                              "+"}{" "}
                            items|{item.value}% off
                          </span>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="sd-have-selected">
              {data?.bundleDetail?.products?.length >=
              data.bundleDetail.discountOptions[0]?.quantity ? (
                <>
                  <h5
                    style={{
                      ...fontSize,
                      fontSize: (data.customization[0]?.productMixMatch?.orderOverview?.selectedText?.fontSize ?? 14) + "px",
                      color: data.customization[0]?.productMixMatch?.orderOverview?.selectedText?.color ?? 'black', 
                      textAlign: data.customization[0]?.productMixMatch?.orderOverview?.alignment ?? 'center',
                    }}
                    
                  >
                    You have selected {data?.bundleDetail?.products?.length}{" "}
                    items
                  </h5>
                  <>
                    {data.bundleDetail.discountOptions.map((item, index) => {
                      return (
                        <>
                          {item.type === "freeShipping" ? (
                            <>
                              {item.quantity ==
                                data.bundleDetail.products.length ||
                              (index ===
                                data.bundleDetail.discountOptions.length - 1 &&
                                data.bundleDetail.products.length >=
                                  item.quantity) ? (
                                <p style={{
                                  ...fontSize,
                                  fontSize: (data.customization[0]?.productMixMatch?.orderOverview?.discountText?.fontSize ?? 14) + "px", 
                                  color: data.customization[0]?.productMixMatch?.orderOverview?.discountText?.color ?? 'black', 
                                  textAlign: data.customization[0]?.productMixMatch?.orderOverview?.alignment ?? 'center',
                                }}
                                >
                                  100% {freeShipping} discount is applied on the
                                  selected products.
                                </p>
                              ) : (
                                ""
                              )}
                            </>
                          ) : item.type === "fixed" ? (
                            <>
                              {item.quantity ==
                                data.bundleDetail.products.length ||
                              (index ===
                                data.bundleDetail.discountOptions.length - 1 &&
                                data.bundleDetail.products.length >=
                                  item.quantity) ? (
                                <p style={{
                                  ...fontSize,
                                  fontSize: (data.customization[0]?.productMixMatch?.orderOverview?.discountText?.fontSize ?? 14) + "px",
                                  color: data.customization[0]?.productMixMatch?.orderOverview?.discountText?.color ?? 'black',
                                  textAlign: data.customization[0]?.productMixMatch?.orderOverview?.alignment ?? 'center',
                                }}
                                >
                                  -
                                  {showAmountWithCurrency(item.value, currency)}{" "}
                                  discount is applied on the selected products.
                                </p>
                              ) : (
                                ""
                              )}
                            </>
                          ) : item.type === "noDiscount" ? (
                            <>
                              {item.quantity ==
                                data.bundleDetail.products.length ||
                              (index ===
                                data.bundleDetail.discountOptions.length - 1 &&
                                data.bundleDetail.products.length >=
                                  item.quantity) ? (
                                <p style={{
                                  ...fontSize,
                                  fontSize: (data.customization[0]?.productMixMatch?.orderOverview?.discountText?.fontSize ?? 14) + "px", 
                                  color: data.customization[0]?.productMixMatch?.orderOverview?.discountText?.color ?? 'black',
                                  textAlign: data.customization[0]?.productMixMatch?.orderOverview?.alignment ?? 'center',
                                }}
                                >
                                  discount is applied on the selected products.
                                </p>
                              ) : (
                                ""
                              )}
                            </>
                          ) : (
                            <>
                              {item.quantity ==
                                data.bundleDetail.products.length ||
                              (index ===
                                data.bundleDetail.discountOptions.length - 1 &&
                                data.bundleDetail.products.length >=
                                  item.quantity) ? (
                                <p style={{
                                  ...fontSize,
                                  fontSize: (data.customization[0]?.productMixMatch?.orderOverview?.discountText?.fontSize ?? 14) + "px",
                                  color: data.customization[0]?.productMixMatch?.orderOverview?.discountText?.color ?? 'black', 
                                  textAlign: data.customization[0]?.productMixMatch?.orderOverview?.alignment ?? 'center', 
                                }}
                                >
                                  {item?.value}% discount is applied on the
                                  selected products.
                                </p>
                              ) : (
                                ""
                              )}
                            </>
                          )}
                        </>
                      );
                    })}
                  </>
                </>
              ) : (
                <div>
                  <p
                    style={{
                      ...fontSize,
                      fontSize: (data.customization[0]?.productMixMatch?.orderOverview?.selectedText?.fontSize ?? 14) + "px",
                      color: data.customization[0]?.productMixMatch?.orderOverview?.selectedText?.color ?? 'black',
                      textAlign: data.customization[0]?.productMixMatch?.orderOverview?.alignment ?? 'center',
                    }}
                    
                  >
                    You have selected {data?.bundleDetail?.products?.length}{" "}
                    items
                  </p>
                  <p
                    style={{
                      ...fontSize,
                      fontSize: (data.customization[0]?.productMixMatch?.orderOverview?.discountText?.fontSize ?? 14) + "px",
                      color: data.customization[0]?.productMixMatch?.orderOverview?.discountText?.color ?? 'black', 
                      textAlign: data.customization[0]?.productMixMatch?.orderOverview?.alignment ?? 'center',
                    }}
                  >
                    Select at least{" "}
                    {data.bundleDetail.discountOptions[discountIndex].quantity}{" "}
                    items to apply the discount.
                  </p>
                </div>
              )}
            </div>
            <div className="sd-show-selected-product-item">
              {data?.bundleDetail?.products?.length > 0 &&
                data?.bundleDetail?.products?.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <div
                        className="sd-selected-product-itemImg"
                        style={{
                          border: "1px solid white",
                          borderColor: data.customization[0]?.productMixMatch?.productDetails?.image?.borderColor ?? 'transparent', 
                          borderRadius: (data.customization[0]?.productMixMatch?.productDetails?.image?.borderRadius ?? 10) + "px",
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
                      {index !== data?.bundleDetail?.products?.length - 1 && (
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
                              fill={data.customization[0]?.productMixMatch?.productDetails?.plusColor}
                            />
                          </svg>
                        </div>
                      )}
                    </Fragment>
                  );
                })}
            </div>
          </div>

          <div className="sd-select-all-product">
            <div className="sd-checkbox-wrapper-21">
              <label
                className="sd-control sd-control--checkbox"
                style={{
                  ...fontSize,
                  color: data.customization[0]?.productMixMatch?.productDetails?.productDetailsBox?.allProductColor ?? 'inherit',
                }}                
              >
                All Product
                <input type="checkbox" checked />
                <div className="sd-control-indicator"></div>
              </label>
            </div>
            <div className="sd-bundle-product-quantity">
              <h6
                style={{
                  ...fontSize,
                  color: data.customization[0]?.productMixMatch?.productDetails?.quantities?.color ?? 'inherit',
                  fontSize: (data.customization[0]?.productMixMatch?.productDetails?.quantities?.size ?? 14) + "px",
                }}
              >
                Qty:{" "}
                <span
                  style={{
                    ...fontSize,
                    fontSize: (data.customization[0]?.productMixMatch?.productDetails?.quantities?.size ?? 14) + "px"
                  }}                  
                >
                  {data?.bundleDetail?.products?.length}
                </span>
              </h6>
            </div>
          </div>

          {data?.bundleDetail?.products?.length > 0 &&
            data?.bundleDetail?.products?.map((item) => {
              return (
                <div
                  className="sd-bundle-product-detail"
                  style={{
                    backgroundColor: data.customization[0]?.productMixMatch?.productDetails?.productDetailsBox?.backgroundColor ?? 'transparent'
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
                        borderColor: data.customization[0]?.productMixMatch?.productDetails?.image?.borderColor ?? 'transparent', 
                        borderRadius: (data.customization[0]?.productMixMatch?.productDetails?.image?.borderRadius ?? 10) + "px"
                      }}                      
                    >
                      <img
                        src={
                          item?.images[0]?.originalSrc
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
                          ...fontSize,
                          color: data.customization[0]?.productMixMatch?.productDetails?.title?.color ?? 'inherit',
                          fontSize: (data.customization[0]?.productMixMatch?.productDetails?.title?.fontSize ?? 14) + "px",
                        }}                        
                      >
                        {item?.title}
                      </h5>
                      <h4
                       style={{
                        ...fontSize,
                        color: data.customization[0]?.productMixMatch?.productDetails?.price?.color ?? 'inherit', 
                        fontSize: (data.customization[0]?.productMixMatch?.productDetails?.price?.fontSize ?? 14) + "px"
                      }}                      
                      >
                        {showAmountWithCurrency(
                          item?.variants[0]?.price,
                          currency
                        )}
                      </h4>
                      <select
                        style={{
                          ...fontSize,
                          backgroundColor: data.customization[0]?.productMixMatch?.productDetails?.variantSelector?.backgroundColor ?? 'transparent', 
                          color: data.customization[0]?.productMixMatch?.productDetails?.variantSelector?.color ?? 'inherit', 
                          borderColor: data.customization[0]?.productMixMatch?.productDetails?.variantSelector?.borderColor ?? 'transparent',
                          width: (data.customization[0]?.productMixMatch?.productDetails?.variantSelector?.width ?? 200) + "px", 
                        }}
                        
                      >
                        <option style={{ ...fontSize }}>Medium</option>
                        <option style={{ ...fontSize }}>Small</option>
                      </select>
                    </div>
                  </div>
                  <div className="sd-bundle-product-quantity">
                    <h6
                      style={{
                        ...fontSize,
                        color: data.customization[0]?.productMixMatch?.productDetails?.quantities?.color ?? 'inherit', 
                        fontSize: (data.customization[0]?.productMixMatch?.productDetails?.quantities?.size ?? 14) + "px"
                      }}                      
                    >
                      Qty:{" "}
                      <span
                        style={{
                          ...fontSize,
                          fontSize: (data.customization[0]?.productMixMatch?.productDetails?.quantities?.size ?? 0) + "px"
                        }}                        
                      >
                        1
                      </span>
                    </h6>
                  </div>
                </div>
              );
            })}

          <div className="sd-product-bundle-total">
            <div className="sd-total-desc">
              <h4
                style={{
                  ...fontSize,
                  color: data.customization[0]?.productMixMatch?.totalSection?.color ?? 'inherit',
                  fontSize: (data.customization[0]?.productMixMatch?.totalSection?.fontSize ?? 0) + "px", 
                }}                
              >
                Total
              </h4>
              <p
                style={{
                  ...fontSize,
                  color: data.customization[0]?.productMixMatch?.totalSection?.discountMessage?.color ?? data.customization[0]?.productMixMatch?.title?.descriptionColor ?? 'inherit', // Defaults to 'inherit' if both are undefined
                  fontSize: (data.customization[0]?.productMixMatch?.totalSection?.discountMessage?.size ?? 14) + "px", // Defaults to 0 if size is undefined
                }}                
              >
                Discount will be applied at checkout
              </p>
            </div>
            <div className="sd-total-amount">
              {data.bundleDetail.discountOptions[discountIndex].type ===
                "freeShipping" ||
              data.bundleDetail.discountOptions[discountIndex].type ===
                "noDiscount" ||
              data.bundleDetail.products.length < 2 ? (
                <h4
                style={{
                  ...fontSize,
                  color: data.customization[0]?.productMixMatch?.totalSection?.finalPrice?.color ?? 'inherit', // Defaults to 'inherit' if color is undefined
                  fontSize: (data.customization[0]?.productMixMatch?.totalSection?.finalPrice?.fontSize ?? 14) + "px", // Defaults to 0 if fontSize is undefined
                }}                
                >
                  {showAmountWithCurrency(mrp, currency)}
                </h4>
              ) : (
                <>
                  <h4
                    style={{
                      ...fontSize,
                      color: data.customization[0]?.productMixMatch?.totalSection?.finalPrice?.color ?? 'inherit', // Defaults to 'inherit' if color is undefined
                      fontSize: (data.customization[0]?.productMixMatch?.totalSection?.finalPrice?.fontSize ?? 14) + "px", // Defaults to 0 if fontSize is undefined
                    }}                    
                  >
                    {showAmountWithCurrency(endPrice, currency)}
                  </h4>
                  <h6
                    style={{
                      ...fontSize,
                      color: data.customization[0]?.productMixMatch?.totalSection?.originalPrice?.color ?? 'inherit', // Defaults to 'inherit' if color is undefined
                      fontSize: (data.customization[0]?.productMixMatch?.totalSection?.originalPrice?.fontSize ?? 0) + "px", // Defaults to 0 if fontSize is undefined
                    }}                    
                  >
                    {showAmountWithCurrency(mrp, currency)}
                  </h6>
                </>
              )}
            </div>
          </div>
          <div className="sd-bundle-addto-cart">
            <button
              style={{
                ...fontSize,
                color: data.customization[0]?.productMixMatch?.button?.color ?? 'inherit',
                fontSize: (data.customization[0]?.productMixMatch?.button?.fontSize ?? 14) + "px", 
                backgroundColor: data.customization[0]?.productMixMatch?.button?.backgroundColor ?? 'transparent', 
                borderColor: data.customization[0]?.productMixMatch?.button?.borderColor ?? 'transparent', 
                borderRadius: (data.customization[0]?.productMixMatch?.button?.borderRadius ?? 30) + "px",
              }}              
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <EmptyPreview type={""} />
      )}
    </div>
  );
};

export default ProductMixMatchPreview;
