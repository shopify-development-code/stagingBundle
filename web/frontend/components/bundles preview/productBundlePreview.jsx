import EmptyPreview from "../commonSections/emptyPreview";
import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import pic from "../../assets/image2.png";
import "swiper/css";
import "swiper/css/navigation";
import { showAmountWithCurrency } from "../showCurrencyFormat";

const ProductBundlePreview = ({
  data,
  currency,
  mrp,
  endPrice,
  showPrice,
  handleVariantChoice,
  bundleType,
}) => {
  const [display, setDisplay] = useState("productPage");
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(1);

  const [showMore, setShowMore] = useState(true);
  const [popUp, setPopUp] = useState(false);
  const [popUpItem, setPopUpItem] = useState({});
  const [selectedItemIndex, setSelectedItemIndex] = useState("");
  const [seeMoreIndex, setSeeMoreIndex] = useState(0);
  const [Move, setMove] = useState("");
  const fontFamily = {
    fontFamily: data?.customization[0]?.bundle?.box?.fontFamily || 'inherit',
  };
  const handlePopUp = (item, index) => {
    setPopUp(true);
    setPopUpItem({ ...item });
    setSelectedItemIndex(index);
  };

  const setOk = () => {
    setPopUpItem("");
    setSelectedItemIndex("");
    setPopUp(false);
  };

  const setCancel = () => {
    setPopUpItem("");
    setSelectedItemIndex("");
    setPopUp(false);
  };

  const handleLeftCarousel = () => {
    if (left > 0) {
      setLeft(left - 1);
      setRight(right - 1);
      setMove(Move + 100);
    }
  };
  const handleRightCarousel = () => {
    if (right < data.bundleDetail.products.length - 1) {
      setLeft(left + 1);
      setRight(right + 1);
      setMove(Move - 100);
    }
  };

  const handleSeeMore = (mainindex) => {
    // setSeeMoreIndex(mainindex)
    if (showMore == true && seeMoreIndex == mainindex) {
      setShowMore(false);
      setSeeMoreIndex(mainindex);
    } else {
      setShowMore(true);
      setSeeMoreIndex(mainindex);
    }
  };
  // console.log("working success", data);

  return (
    <div className="sd-bundle-bundleSection-common">
      <div className="sd-bundle-bundleSection-heading-common">Preview</div>
      {data?.bundleDetail?.products?.length > 0 ? (
        <div
          className="sd-bundle-main-column"
          style={{
            backgroundColor: data?.customization[0]?.bundle?.box?.backgroundColor,
            borderColor: data?.customization[0]?.bundle?.box?.borderColor,
            borderRadius: data?.customization[0]?.bundle?.box?.borderRadius + "px",
          }}
        >{(data?.bundleDetail?.discountType == "percent" ||data?.bundleDetail?.discountType == "fixed")&&
          (data?.customization[0]?.bundle?.optionalBadge?.enable == true) && (
            <div
              className="sd-badges-part"
              style={{
                backgroundColor:
                  data?.customization[0]?.bundle?.optionalBadge?.background,
              }}
            >
              <span
                style={{
                  ...fontFamily,
                  color: data?.customization[0]?.bundle?.optionalBadge?.color,
                  fontSize:
                    data?.customization[0]?.bundle?.optionalBadge?.fontSize + "px",
                }}
              >
                {data?.bundleDetail?.discountType === "percent"
                  ? `${data?.bundleDetail?.discountValue}% off`
                  : data?.bundleDetail?.discountType === "fixed"
                    ? `${showAmountWithCurrency(data?.bundleDetail?.discountValue, currency)} off`
                    : null}
              </span>
            </div>
          )
        }
          <div className={`sd-bundle-text-detail ${data?.customization[0]?.bundle?.optionalBadge?.enable == true ? 'extra-padding' : ''}`}>
            <h4
              style={{
                ...fontFamily,
                color: data?.customization[0]?.bundle?.title?.color,
                fontSize: data?.customization[0]?.bundle?.title?.fontSize + "px",
                textAlign: data?.customization[0]?.bundle?.title?.alignment,
                fontWeight: data?.customization[0]?.bundle?.title?.titleBold,
              }}
            >
              {data?.title}
            </h4>
            <p
              style={{
                ...fontFamily,
                color: data?.customization[0]?.bundle?.title?.descriptionColor,
                fontSize:
                  data?.customization[0]?.bundle?.title?.descriptionFontSize + "px",
                textAlign: data?.customization[0]?.bundle?.title?.alignment,
                fontWeight: data?.customization[0]?.bundle?.title?.descriptionBold,
              }}
            >
              {data?.description}
            </p>
          </div>
          {data?.bundleDetail?.products?.map((item, mainindex) => {
            return (
              <>
                <div
                  key={mainindex}
                  className="sd-bundle-product-detail"
                  style={{
                    backgroundColor:
                      data?.customization[0]?.bundle?.productDetails
                        ?.productDetailsBox?.backgroundColor,
                  }}
                >
                  <div className="sd-bundle-product-inner">
                    <div
                      className="sd-bundle-product-img"
                      style={{
                        borderColor:
                          data?.customization[0]?.bundle?.productDetails?.image
                            ?.borderColor,
                        borderRadius:
                          data?.customization[0]?.bundle?.productDetails?.image
                            ?.borderRadius + "px",
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
                          ...fontFamily,
                          color:
                            data?.customization[0]?.bundle?.productDetails?.title
                              ?.color,
                          fontSize:
                            data?.customization[0]?.bundle?.productDetails?.title
                              ?.fontSize + "px",
                        }}
                      >
                        {item?.title}
                      </h5>
                      <h4
                        style={{
                          ...fontFamily,
                          color:
                            data?.customization[0]?.bundle?.productDetails?.price
                              ?.color,
                          fontSize:
                            data?.customization[0]?.bundle?.productDetails?.price
                              ?.fontSize + "px",
                        }}
                      >
                        {showPrice[mainindex]
                          ? showAmountWithCurrency(
                              showPrice[mainindex],
                              currency
                            )
                          : showAmountWithCurrency(
                              item?.variants[0]?.price,
                              currency
                            )}
                      </h4>
                      {item?.variants?.length > 1 ? (
                        <div className="sd-bundle-product-select-main">
                          {Array.from({ length: item?.minimumOrder })?.map(
                            (emptyItem, index) => {
                              return (
                                (index <= 1 ||
                                  (showMore && mainindex == seeMoreIndex)) && (
                                  <>
                                    <select
                                      style={{
                                        ...fontFamily,
                                        backgroundColor:
                                          data?.customization[0]?.bundle
                                            ?.productDetails?.variantSelector
                                            ?.backgroundColor,
                                        color:
                                          data?.customization[0]?.bundle
                                            ?.productDetails?.variantSelector
                                            ?.color,
                                        width:
                                          data?.customization[0]?.bundle
                                            ?.productDetails?.variantSelector
                                            ?.width + "px",
                                      }}
                                      onChange={(e, main) =>
                                        handleVariantChoice(e, mainindex, index)
                                      }
                                    >
                                      <option
                                        style={{ ...fontFamily }}
                                        value={item?.variants[0]?.price}
                                      >
                                        {" "}
                                        Select Variant{" "}
                                      </option>

                                      {item?.variants?.map((sub, ind) => {
                                        return (
                                          <option
                                            style={{ ...fontFamily }}
                                            value={sub?.price}
                                            data-varindex="3"
                                          >
                                            {sub?.title}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </>
                                )
                              );
                            }
                          )}

                          {item?.minimumOrder > 2 && (
                            <div>
                              {" "}
                              <Button
                                type="link"
                                className="sd-volume-showMoreLess"
                                onClick={() => handleSeeMore(mainindex)}
                              >
                                {" "}
                                {showMore && mainindex == seeMoreIndex
                                  ? "Show Less"
                                  : "Show More"}
                              </Button>
                            </div>
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="sd-bundle-product-quantity">
                    <h6
                      style={{
                        ...fontFamily,
                        color:
                          data?.customization[0]?.bundle?.productDetails?.quantities
                            ?.color,
                        fontSize:
                          data?.customization[0]?.bundle?.productDetails?.quantities
                            .size + "px",
                      }}
                    >
                      Qty:{" "}
                      <span
                        style={{
                          ...fontFamily,
                          fontSize:
                            data?.customization[0]?.bundle?.productDetails
                              ?.quantities?.size + "px",
                        }}
                      >
                        {item?.minimumOrder}
                      </span>
                    </h6>
                  </div>
                </div>
                {data?.bundleDetail?.products?.indexOf(item) !=
                data?.bundleDetail?.products?.length - 1 ? (
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
                          data?.customization[0]?.bundle?.productDetails?.plusColor
                        }
                      />
                    </svg>
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
          <div className="sd-product-bundle-total">
            <div className="sd-total-desc">
              <h4
                style={{
                  ...fontFamily,
                  color: data?.customization[0]?.bundle?.totalSection?.color,
                  fontSize:
                    data?.customization[0]?.bundle?.totalSection?.fontSize + "px",
                }}
              >
                {data?.customization[0]?.bundle?.totalSection?.text}
              </h4>
              <p
                style={{
                  ...fontFamily,
                  color:
                    data?.customization[0]?.bundle?.totalSection?.discountMessage
                      ?.color,
                  fontSize:
                    data?.customization[0]?.bundle?.totalSection?.discountMessage
                      ?.size + "px",
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
                    data?.customization[0]?.bundle?.totalSection?.finalPrice?.color,
                  fontSize:
                    data?.customization[0]?.bundle?.totalSection?.finalPrice
                      ?.fontSize + "px",
                }}
              >
                {showAmountWithCurrency(endPrice, currency)}
              </h4>
              {data.bundleDetail.discountType != "freeShipping" &&
                data.bundleDetail.discountType != "noDiscount" && (
                  <h6
                    style={{
                      ...fontFamily,
                      color:
                        data?.customization[0]?.bundle?.totalSection?.originalPrice
                          ?.color,
                      fontSize:
                        data?.customization[0]?.bundle?.totalSection?.originalPrice
                          ?.fontSize + "px",
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
                color: data?.customization[0]?.bundle?.button?.color,
                fontSize: data?.customization[0]?.bundle?.button?.fontSize + "px",
                backgroundColor:
                  data?.customization[0]?.bundle?.button?.backgroundColor,
                borderColor: data?.customization[0]?.bundle?.button?.borderColor,
                borderRadius:
                  data?.customization[0]?.bundle?.button?.borderRadius + "px",
              }}
            >
              {" "}
              {data?.customization[0]?.bundle?.button?.text_others}
            </button>
          </div>
        </div>
      ) : (
        <EmptyPreview type={""} />
      )}
    </div>
  );
};

export default ProductBundlePreview;
