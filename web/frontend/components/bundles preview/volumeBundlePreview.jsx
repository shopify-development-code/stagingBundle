import React, { useEffect, useState } from "react";
import pic from "../../assets/image2.png";
import EmptyPreview from "../commonSections/emptyPreview";
import { Button, Tooltip } from "antd";
import { showAmountWithCurrency } from "../showCurrencyFormat";

const VolumeBundlePreview = ({
  data,
  sumData,
  endPriceData,
  handleVariantChoice,
  showPrice,
  currency,
  discountTypes,
}) => {
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(2);
  const [showMore, setShowMore] = useState(false);
  const [mrp, setMrp] = useState(0);
  const [endPrice, setEndPrice] = useState(0);
  const [arr, setArr] = useState([]);
  const [discountType, setDiscountType] = useState(discountTypes);
  const fontFamily = {
    fontFamily: data?.customization?.[0]?.volume?.box?.fontFamily || "inherit",
  };
  const [selectedOption, setSelectedOption] = useState("option0");
  const handleSelected = (option) => {
    option != selected ? setSelected(option) : "";
  };

  useEffect(() => {
    quantity == 2 && setShowMore(false);
  }, [quantity]);

  const handleOptionChange = (e, index) => {
    setSelectedOption(e.target.value);
    setDiscountType(data.bundleDetail?.discountOptions[index].type);
  };

  return (
    <>
      {data?.bundleDetail?.discountedProductType == "all_products" ||
      data?.bundleDetail?.products.length > 0 ? (
        <div
          className="sd-bundle-main-column"
          style={{
            backgroundColor:
              data?.customization?.[0]?.volume?.box?.backgroundColor,
            borderColor: data?.customization?.[0]?.volume?.box?.borderColor,
            borderRadius: `${data?.customization?.[0]?.volume?.box?.borderRadius}px`,
          }}
        >
          <div className="sd-bundle-text-detail">
            <h4
              style={{
                ...fontFamily,
                color: data?.customization?.[0]?.volume?.title?.color,
                fontSize: `${data?.customization?.[0]?.volume?.title?.fontSize}px`,
                textAlign: data?.customization?.[0]?.volume?.title?.alignment,
                fontWeight: data?.customization?.[0]?.volume?.title?.titleBold,
              }}
            >
              {data.title}
            </h4>
            <p
              style={{
                ...fontFamily,
                color:
                  data?.customization?.[0]?.volume?.title?.descriptionColor,
                fontSize: `${data?.customization?.[0]?.volume?.title?.descriptionFontSize}px`,
                textAlign: data?.customization?.[0]?.volume?.title?.alignment,
                fontWeight:
                  data?.customization?.[0]?.volume?.title?.descriptionBold,
              }}
            >
              {data?.description}
            </p>
          </div>
          {data?.bundleDetail?.discountOptions?.map((item, index) => (
            <div
              className="sd-volume-bundle-detail"
              style={{
                backgroundColor:
                  data?.customization[0]?.volume?.productDetails
                    ?.productDetailsBox?.backgroundColor || "white",
              }}
            >
              {item?.badgeText != "" && item?.badgeText != undefined && (
                <div class="style_badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <path
                      d="M8 0L0 8H8V0Z"
                      fill={`${data?.customization[0]?.volume?.options?.saveDiscount?.backgroundColor}`}
                    ></path>
                    <path d="M8 0L0 8H8V0Z" fill="black" opacity="0.2"></path>
                  </svg>
                  <span
                    style={{
                      backgroundColor:
                        data?.customization[0]?.volume?.options?.saveDiscount?.backgroundColor,
                    }}
                  >
                    {item?.badgeText}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <path
                      d="M0 0L8 8H0V0Z"
                      fill={`${data?.customization[0]?.volume?.options?.saveDiscount?.backgroundColor}`}
                    ></path>
                    <path d="M0 0L8 8H0V0Z" fill="black" opacity="0.2"></path>
                  </svg>
                </div>
              )}
              <div className="sd-select-radio-with-text">
                <div className="radio">
                  <input
                    id={"radio" + index}
                    name="radio"
                    type="radio"
                    value={"option" + index}
                    checked={selectedOption === "option" + index}
                    onChange={(e) => handleOptionChange(e, index)}
                  />
                  <label
                    htmlFor={"radio" + index}
                    className="sd-radio-label"
                    onClick={() => handleSelected(index)}
                    style={{
                      ...fontFamily,
                      color: data?.customization?.[0]?.volume?.options?.color,
                      fontSize: `${data?.customization?.[0]?.volume?.options?.fontSize}px`,
                    }}
                  >
                    {item?.description ==
                      `Buy ${item?.quantity} & Save {discount}` ||
                    item?.description ==
                      `Buy ${item?.quantity}+ & Save {discount}` ? (
                      <>
                        <span style={{ ...fontFamily }}>
                          Buy{" "}
                          {index ===
                            data?.bundleDetail?.discountOptions?.length - 1 &&
                          data?.bundleDetail?.allowDiscountOnIncrease === true
                            ? item.quantity + "+"
                            : item.quantity}{" "}
                          & Save{" "}
                        </span>
                        <span style={{ ...fontFamily }}>
                          {item?.type == "fixed" || item?.type == "price"
                            ? " "
                            : ""}
                        </span>
                        <span style={{ ...fontFamily }}>
                          {item.type == "percent"
                            ? item.value
                            : item.type == "fixed"
                              ? showAmountWithCurrency(item.value,currency)
                              : null}
                        </span>
                        <span style={{ ...fontFamily }}>
                          {item.type == "percent" ? "%" : ""}
                        </span>
                      </>
                    ) : (
                      item.description
                    )}
                  </label>
                </div>
              </div>
              {selected == index && (
                <div className="sd-bundle-product-detail">
                  <div className="sd-bundle-product-inner">
                    <div
                      className="sd-bundle-product-img"
                      style={{
                        borderColor:
                          data?.customization?.[0]?.volume?.productDetails
                            ?.image?.borderColor,
                        borderRadius: `${data?.customization?.[0]?.volume?.productDetails?.image?.borderRadius}px`,
                      }}
                    >
                      <img
                        src={
                          data.bundleDetail.discountedProductType ==
                          "collection"
                            ? data.bundleDetail?.products[0]?.image?.originalSrc
                            : data.bundleDetail.discountedProductType ==
                                "all_products"
                              ? pic
                              : data.bundleDetail.discountedProductType ==
                                  "all_products"
                                ? pic
                                : data.bundleDetail.products[0].images
                                  ? data.bundleDetail.discountedProductType ==
                                    "all_products"
                                    ? pic
                                    : data.bundleDetail?.products[0]?.images[0]
                                        ?.originalSrc
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
                            data?.customization?.[0]?.volume?.productDetails
                              ?.title?.color,
                          fontSize: `${data?.customization?.[0]?.volume?.productDetails?.title?.fontSize}px`,
                        }}
                      >
                        {data.bundleDetail.discountedProductType ==
                          "all_products" ||
                        data.bundleDetail.discountedProductType == "collection"
                          ? "Sample Product"
                          : data.bundleDetail.products[0]?.title}
                      </h5>
                      <h4
                        style={{
                          ...fontFamily,
                          color:
                            data?.customization?.[0]?.volume?.productDetails
                              ?.price?.color,
                          fontSize: `${data?.customization?.[0]?.volume?.productDetails?.price?.fontSize}px`,
                        }}
                      >
                        {data.bundleDetail.discountedProductType ==
                          "all_products" ||
                        data.bundleDetail.discountedProductType == "collection"
                          ? showAmountWithCurrency(50, currency)
                          : showPrice[index]
                            ? showAmountWithCurrency(showPrice[index], currency)
                            : showAmountWithCurrency(
                                data.bundleDetail.products[0]?.variants[0]
                                  ?.price,
                                currency
                              )}
                      </h4>
                      {data.bundleDetail.products[0]?.variants?.length > 1 &&
                      data.bundleDetail.discountedProductType ==
                        "specific_product" ? (
                        <div className="sd-bundle-product-select-main">
                          {Array.from({ length: item.quantity }).map(
                            (emptyItem, idx) => {
                              return (
                                (idx <= 1 || showMore) && (
                                  <select
                                    style={{
                                      ...fontFamily,
                                      backgroundColor:
                                        data?.customization?.[0]?.volume
                                          ?.productDetails?.variantSelector
                                          ?.backgroundColor,
                                      color:
                                        data?.customization?.[0]?.volume
                                          ?.productDetails?.variantSelector
                                          ?.color,
                                      width: `${data?.customization?.[0]?.volume?.productDetails?.variantSelector?.width}px`,
                                    }}
                                    onChange={(e, main) =>
                                      handleVariantChoice(e, index, idx)
                                    }
                                  >
                                    {data.bundleDetail.products[0].variants.map(
                                      (sub, ind) => {
                                        return (
                                          <option
                                            style={{ ...fontFamily }}
                                            value={sub.price}
                                            data-varindex="3"
                                          >
                                            {sub.title}
                                          </option>
                                        );
                                      }
                                    )}
                                  </select>
                                )
                              );
                            }
                          )}
                          {item.quantity > 2 && (
                            <div>
                              <Button
                                style={{ ...fontFamily }}
                                type="link"
                                className="sd-volume-showMoreLess"
                                onClick={() => setShowMore(!showMore)}
                              >
                                {showMore ? "Show Less" : "Show More"}
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
                          data?.customization?.[0]?.volume?.productDetails
                            ?.quantities?.color,
                        fontSize: `${data?.customization?.[0]?.volume?.productDetails?.quantities?.size}px`,
                      }}
                    >
                      Qty:{" "}
                      <span
                        style={{
                          ...fontFamily,
                          fontSize: `${data?.customization?.[0]?.volume?.productDetails?.quantities?.size}px`,
                        }}
                      >
                        {item?.quantity}
                      </span>
                    </h6>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="sd-product-bundle-total">
            <div className="sd-total-desc">
              <h4
                style={{
                  ...fontFamily,
                  color: data?.customization?.[0]?.volume?.totalSection?.color,
                  fontSize: `${data?.customization?.[0]?.volume?.totalSection?.fontSize}px`,
                }}
              >
                {data?.customization?.[0]?.volume?.totalSection?.text}
              </h4>
              <p
                style={{
                  ...fontFamily,
                  color:
                    data?.customization?.[0]?.volume?.totalSection
                      ?.discountMessage?.color,
                  fontSize: `${data?.customization?.[0]?.volume?.totalSection?.discountMessage?.size}px`,
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
                    data?.customization?.[0]?.volume?.totalSection?.finalPrice
                      ?.color,
                  fontSize: `${data?.customization?.[0]?.volume?.totalSection?.finalPrice?.fontSize}px`,
                }}
              >
                {data.bundleDetail?.discountOptions[selected].type ==
                  "freeShipping" ||
                data.bundleDetail?.discountOptions[selected].type ==
                  "noDiscount"
                  ? showAmountWithCurrency(sumData[selected], currency)
                  : showAmountWithCurrency(endPriceData[selected], currency)}
              </h4>
              {data.bundleDetail?.discountOptions[selected].type !=
                "freeShipping" &&
                data.bundleDetail?.discountOptions[selected].type !=
                  "noDiscount" && (
                  <h6
                    style={{
                      ...fontFamily,
                      color:
                        data?.customization?.[0]?.volume?.totalSection
                          ?.originalPrice?.color,
                      fontSize: `${data?.customization?.[0]?.volume?.totalSection?.originalPrice?.fontSize}px`,
                    }}
                  >
                    {showAmountWithCurrency(sumData[selected], currency)}
                  </h6>
                )}
            </div>
          </div>
          <div className="sd-bundle-addto-cart">
            <button
              style={{
                ...fontFamily,
                color: data?.customization?.[0]?.volume?.button?.color,
                fontSize: `${data?.customization?.[0]?.volume?.button?.fontSize}px`,
                backgroundColor:
                  data?.customization?.[0]?.volume?.button?.backgroundColor,
                borderColor:
                  data?.customization?.[0]?.volume?.button?.borderColor,
                borderRadius: `${data?.customization?.[0]?.volume?.button?.borderRadius}px`,
              }}
            >
              {" "}
              {data?.customization?.[0]?.volume?.button?.text_others + " "}
            </button>
          </div>
        </div>
      ) : (
        <EmptyPreview type={data?.bundleDetail?.discountedProductType} />
      )}
    </>
  );
};

export default VolumeBundlePreview;
