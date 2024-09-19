import React, { useState, useEffect } from "react";
import EmptyPreview from "../commonSections/emptyPreview";
import { showAmountWithCurrency } from "../showCurrencyFormat";
import { useAPI } from "../shop";

const BXGYBundlePreview = ({
  data,
  currency,
  mrp,
  endPrice,
  showPrice,
  handleVariantChoice,
}) => {
  console.log("trest df wtedgf eydtyu", data);
  const { shop, timeZone, currencyCode } = useAPI();
  return (
    <div className="sd-bundle-bundleSection-common sd-bundle-productBundle-preview first-previewCard">
      <div className="sd-bundle-bundleSection-heading-common">Preview</div>
      {data.bundleDetail.xproducts.length &&
      data.bundleDetail.yproducts.length > 0 ? (
        <div
          className="sd-bundle-main-column"
          style={{
            backgroundColor: data.customization[0].buyXgetY.box.backgroundColor,
            border:
              data.customization[0].buyXgetY.box.thickness +
              "px solid" +
              data.customization[0].buyXgetY.box.borderColor,
            borderRadius:
              data.customization[0].buyXgetY.box.borderRadius + "px",
          }}
        >
          <div className="sd-bundle-text-detail">
            <h4
              style={{
                color: data.customization[0].buyXgetY.title.color,
                fontSize: data.customization[0].buyXgetY.title.fontSize + "px",
                fontWeight: data.customization[0].buyXgetY.title.titleBold,
                textAlign: data.customization[0].buyXgetY.title.alignment,
              }}
            >
              {data.title}
            </h4>
            <p
              style={{
                color: data.customization[0].buyXgetY.title.descriptionColor,
                fontSize:
                  data.customization[0].buyXgetY.title.descriptionFontSize +
                  "px",
                fontWeight:
                  data.customization[0].buyXgetY.title.descriptionBold,
                textAlign: data.customization[0].buyXgetY.title.alignment,
              }}
            >
              {data.description}
            </p>
          </div>

          {data.bundleDetail.xproducts.map((item, index) => {
            return (
              <div className="sd-bundle-product-detail">
                <div className="sd-bundle-product-inner">
                  <div
                    className="sd-bundle-product-img"
                    style={{
                      borderColor:
                        data.customization[0].buyXgetY.productDetails.image
                          .borderColor,
                      borderRadius:
                        data.customization[0].buyXgetY.productDetails.image
                          .borderRadius + "px",
                    }}
                  >
                    <img
                      src={
                        item?.images[0]?.originalSrc
                          ? item?.images[0]?.originalSrc
                          : "https://cdn.shopify.com/s/files/1/0801/7264/6691/files/dummyImage.jpg?v=1700561335"
                      }
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="sd-bundle-product-name">
                    <h5
                      style={{
                        color:
                          data.customization[0].buyXgetY.productDetails.title
                            .color,
                        fontSize:
                          data.customization[0].buyXgetY.productDetails.title
                            .fontSize + "px",
                      }}
                    >
                      {item.title}
                    </h5>
                    <h4
                      style={{
                        color:
                          data.customization[0].buyXgetY.productDetails.price
                            .color,
                        fontSize:
                          data.customization[0].buyXgetY.productDetails.price
                            .fontSize + "px",
                      }}
                    >
                      {" "}
                      {showPrice[index]
                        ? showAmountWithCurrency(showPrice[index], currency)
                        : showAmountWithCurrency(
                            item.variants[0]?.price,
                            currency
                          )}
                    </h4>
                    {item.variants.length > 1 && (
                      <>
                        {Array.from({ length: item.minimumOrder }).map(
                          (emptyItem, index) => {
                            return (
                              <select
                                disabled
                                style={{
                                  backgroundColor:
                                    data.customization[0].buyXgetY
                                      .productDetails.variantSelector
                                      .backgroundColor,
                                  color:
                                    data.customization[0].buyXgetY
                                      .productDetails.variantSelector.color,
                                }}
                              >
                                {item.variants.map((vItem, i) => {
                                  return <option key={i}>{vItem.title}</option>;
                                })}
                              </select>
                            );
                          }
                        )}
                      </>
                    )}
                  </div>
                </div>
                <div className="sd-bundle-product-quantity">
                  <h6
                    style={{
                      color:
                        data.customization[0].buyXgetY.productDetails.quantities
                          .color,
                    }}
                  >
                    Qty: <span>{item.minimumOrder}</span>
                  </h6>
                </div>
              </div>
            );
          })}

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
                fill="#5F5F5F"
              />
            </svg>
          </div>

          {data.bundleDetail.yproducts.map((item, index) => {
            return (
              <div className="sd-bundle-product-detail">
                {data.customization[0].buyXgetY.DiscountBadge.badgeType ==
                "leftBanner" ? (
                  <div className="sd-bundle-product-badge left-badge ">
                    <div
                      className="open-badge"
                      style={{
                        background:
                          data.customization[0].buyXgetY.DiscountBadge
                            .backgroundColor,
                      }}
                    ></div>
                    <h4
                      style={{
                        color:
                          data.customization[0].buyXgetY.DiscountBadge.color,
                        fontSize:
                          data.customization[0].buyXgetY.DiscountBadge
                            .fontSize + "px",
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
                    </h4>
                  </div>
                ) : (
                  <div className="sd-bundle-product-badge ">
                    <svg
                      width="91"
                      height="24"
                      viewBox="0 0 91 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 10L8.63148 0H83.3261L91 10H0Z"
                        fill={
                          data.customization[0].buyXgetY.DiscountBadge
                            .backgroundColor
                        }
                      />
                      <path
                        d="M9 0H83V19C83 21.7614 80.7614 24 78 24H14C11.2386 24 9 21.7614 9 19V0Z"
                        fill={
                          data.customization[0].buyXgetY.DiscountBadge
                            .backgroundColor
                        }
                      />
                    </svg>
                    <h4
                      style={{
                        color:
                          data.customization[0].buyXgetY.DiscountBadge.color,
                        fontSize:
                          data.customization[0].buyXgetY.DiscountBadge
                            .fontSize + "px",
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
                    </h4>
                  </div>
                )}
                <div className="sd-bundle-product-inner">
                  <div
                    className="sd-bundle-product-img"
                    style={{
                      borderColor:
                        data.customization[0].buyXgetY.productDetails.image
                          .borderColor,
                      borderRadius:
                        data.customization[0].buyXgetY.productDetails.image
                          .borderRadius + "px",
                    }}
                  >
                    <img
                      src={
                        item?.images[0]?.originalSrc
                          ? item?.images[0]?.originalSrc
                          : "https://cdn.shopify.com/s/files/1/0801/7264/6691/files/dummyImage.jpg?v=1700561335"
                      }
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="sd-bundle-product-name">
                    <h5
                      style={{
                        color:
                          data.customization[0].buyXgetY.productDetails.title
                            .color,
                        fontSize:
                          data.customization[0].buyXgetY.productDetails.title
                            .fontSize + "px",
                      }}
                    >
                      {item.title}
                    </h5>
                    <h4
                      style={{
                        color:
                          data.customization[0].buyXgetY.productDetails.price
                            .color,
                        fontSize:
                          data.customization[0].buyXgetY.productDetails.price
                            .fontSize + "px",
                      }}
                    >
                      {showPrice[index]
                        ? showAmountWithCurrency(showPrice[index], currency)
                        : showAmountWithCurrency(
                            item.variants[0]?.price,
                            currency
                          )}
                    </h4>
                    {item.variants.length > 1 && (
                      <>
                        {Array.from({ length: item.minimumOrder }).map(
                          (emptyItem, index) => {
                            return (
                              <select
                                disabled
                                style={{
                                  backgroundColor:
                                    data.customization[0].buyXgetY
                                      .productDetails.variantSelector
                                      .backgroundColor,
                                  color:
                                    data.customization[0].buyXgetY
                                      .productDetails.variantSelector.color,
                                }}
                              >
                                {item.variants.map((vItem, i) => {
                                  return <option key={i}>{vItem.title}</option>;
                                })}
                              </select>
                            );
                          }
                        )}
                      </>
                    )}
                  </div>
                </div>
                <div className="sd-bundle-product-quantity">
                  <h6
                    style={{
                      color:
                        data.customization[0].buyXgetY.productDetails.quantities
                          .color,
                    }}
                  >
                    Qty: <span>{item.minimumOrder}</span>
                  </h6>
                </div>
              </div>
            );
          })}

          <div className="sd-product-bundle-total">
            <div className="sd-total-desc">
              <h4
                style={{
                  color: data.customization[0].buyXgetY.totalSection.color,
                  fontSize:
                    data.customization[0].buyXgetY.totalSection.fontSize + "px",
                }}
              >
                Total
              </h4>
              <p
                style={{
                  color: data.customization[0].buyXgetY.title.descriptionColor,
                }}
              >
                Discount will be applied at checkout
              </p>
            </div>
            <div className="sd-total-amount">
              <h4
                style={{
                  color:
                    data.customization[0].buyXgetY.totalSection.finalPrice
                      .color,
                  fontSize:
                    data.customization[0].buyXgetY.totalSection.finalPrice
                      .fontSize + "px",
                }}
              >
                {" "}
                {currencyCode.replace(/{{.*?}}/g, "") + endPrice}{" "}
              </h4>
              <h6
                style={{
                  color:
                    data.customization[0].buyXgetY.totalSection.originalPrice
                      .color,
                  fontSize:
                    data.customization[0].buyXgetY.totalSection.originalPrice
                      .fontSize + "px",
                }}
              >
                {currencyCode.replace(/{{.*?}}/g, "") + mrp}{" "}
              </h6>
            </div>
          </div>
          <div className="sd-bundle-addto-cart">
            <button
              style={{
                color: data.customization[0].buyXgetY.button.color,
                fontSize: data.customization[0].buyXgetY.button.fontSize + "px",
                backgroundColor:
                  data.customization[0].buyXgetY.button.backgroundColor,
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

export default BXGYBundlePreview;
