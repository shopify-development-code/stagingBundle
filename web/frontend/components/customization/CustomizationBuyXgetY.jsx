import React, { useState } from "react";
import { Icon } from "@shopify/polaris";
import { useAPI } from "../shop";
// import pic from   './image.jpg';
import { PlusOutlined } from "@ant-design/icons";
import pic from "../../assets/image2.png";
import productImg from "../../assets/product.png";

const CustomizationBuyXgetY = ({ data }) => {
  const { currency } = useAPI();
  const discount = 40;
  console.log("hello check bxgy", data);
  return (
    <>
      {/* <div
        className="sd-preview-wrapper-common sd-productCustom-preview"
        style={{
          backgroundColor: data?.buyXgetY?.box?.backgroundColor,
          border:
            data?.buyXgetY?.box?.thickness +
            "px solid" +
            data?.buyXgetY?.box?.borderColor,
          borderRadius: data?.buyXgetY?.box?.borderRadius + "px",
        }}
      >
        {data?.buyXgetY?.button?.position == "top" && (
          <div className="bxgy_productT_Cart-bottom">
            <button
              style={{
                color: data?.buyXgetY?.button?.color,
                fontSize: data?.buyXgetY?.button?.fontSize + "px",
                backgroundColor: data?.buyXgetY?.button?.backgroundColor,
              }}
            >
              Add to Cart
            </button>
          </div>
        )}
        <h5
          style={{
            color: data?.buyXgetY?.title?.color,
            fontSize: data?.buyXgetY?.title?.fontSize + "px",
            fontWeight: data?.buyXgetY?.title?.titleBold,
            textAlign: data?.buyXgetY?.title?.alignment,
          }}
        >
          Bundle Title
        </h5>
        <p
          style={{
            color: data.buyXgetY.title.descriptionColor,
            fontSize: data.buyXgetY.title.descriptionFontSize + "px",
            fontWeight: data.buyXgetY.title.descriptionBold,
            textAlign: data.buyXgetY.title.alignment,
          }}
        >
          Bundle description
        </p>
        <div className="bxgy_productsListing_main">
          <div className="bxgy_products_listing">
            <div
              style={{
                borderColor: data.buyXgetY.productDetails.image.borderColor,
                borderRadius:
                  data.buyXgetY.productDetails.image.borderRadius + "px",
              }}
              className="bxgy_product_listingImg"
            >
              <img
                style={{
                  borderRadius:
                    data.buyXgetY.productDetails.image.borderRadius + "px",
                }}
                src="https://cdn.shopify.com/s/files/1/0801/7264/6691/files/dummyImage.jpg?v=1700561335"
              ></img>
            </div>
            <div className="bxgy_product_listingText">
              <h6
                style={{
                  color: data.buyXgetY.productDetails.title.color,
                  fontSize: data.buyXgetY.productDetails.title.fontSize + "px",
                }}
              >
                Sample product
              </h6>

              <span
                className="bundle-price"
                style={{
                  color: data.buyXgetY.productDetails.price.color,
                  fontSize: data.buyXgetY.productDetails.price.fontSize + "px",
                }}
              >
                $5666
              </span>
            </div>
            <div
              style={{
                color: data.buyXgetY.productDetails.quantities.color,
                backgroundColor:
                  data.buyXgetY.productDetails.quantities.backgroundColor,
                borderColor:
                  data.buyXgetY.productDetails.quantities.borderColor,
              }}
              className="bxgy_product_listingClose"
            >
              <h3
                style={{ color: data.buyXgetY.productDetails.quantities.color }}
              >
                5X
              </h3>
            </div>
          </div>

          <div className="bxgy_productsListing_Column">
            <div className="bxgy_products_listing">
              <div
                style={{
                  borderColor: data.buyXgetY.productDetails.image.borderColor,
                  borderRadius:
                    data.buyXgetY.productDetails.image.borderRadius + "px",
                }}
                className="bxgy_product_listingImg"
              >
                <img
                  style={{
                    borderRadius:
                      data.buyXgetY.productDetails.image.borderRadius + "px",
                  }}
                  src="https://cdn.shopify.com/s/files/1/0801/7264/6691/files/dummyImage.jpg?v=1700561335"
                ></img>
              </div>
              <div className="bxgy_product_listingText">
                <h6
                  style={{
                    color: data.buyXgetY.productDetails.title.color,
                    fontSize:
                      data.buyXgetY.productDetails.title.fontSize + "px",
                  }}
                >
                  Sample product
                </h6>

                <span
                  className="bundle-price"
                  style={{
                    color: data.buyXgetY.productDetails.price.color,
                    fontSize:
                      data.buyXgetY.productDetails.price.fontSize + "px",
                  }}
                >
                  $5666
                </span>
              </div>
              <div
                style={{
                  color: data.buyXgetY.productDetails.quantities.color,
                  backgroundColor:
                    data.buyXgetY.productDetails.quantities.backgroundColor,
                  borderColor:
                    data.buyXgetY.productDetails.quantities.borderColor,
                }}
                className="bxgy_product_listingClose"
              >
                <h3
                  style={{
                    color: data.buyXgetY.productDetails.quantities.color,
                  }}
                >
                  5X
                </h3>
              </div>
            </div>

            <div className="bxgy_product_variant_main">
              <div className="bxgy_product_variant">
                <h6
                  style={{
                    color: data.buyXgetY.productDetails.variantSelector.color,
                  }}
                >
                  1
                </h6>
                <div className="bxgy_selected_field">
                  <select
                    style={{
                      backgroundColor:
                        data.buyXgetY.productDetails.variantSelector
                          .backgroundColor,
                      color: data.buyXgetY.productDetails.variantSelector.color,
                    }}
                    className="selectpicker"
                  >
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                  </select>
                </div>
              </div>
              <div className="bxgy_product_variant">
                <h6
                  style={{
                    color: data.buyXgetY.productDetails.variantSelector.color,
                  }}
                >
                  2
                </h6>
                <div className="bxgy_selected_field">
                  <select
                    style={{
                      backgroundColor:
                        data.buyXgetY.productDetails.variantSelector
                          .backgroundColor,
                      color: data.buyXgetY.productDetails.variantSelector.color,
                    }}
                    className="selectpicker"
                  >
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                  </select>
                </div>
              </div>
              <div className="bxgy_product_variant">
                <h6
                  style={{
                    color: data.buyXgetY.productDetails.variantSelector.color,
                  }}
                >
                  3
                </h6>
                <div className="bxgy_selected_field">
                  <select
                    style={{
                      backgroundColor:
                        data.buyXgetY.productDetails.variantSelector
                          .backgroundColor,
                      color: data.buyXgetY.productDetails.variantSelector.color,
                    }}
                    className="selectpicker"
                  >
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="sd-bundle-svg-common"
          style={{
            background: data.buyXgetY.productDetails.plusBackgroundColor,
          }}
        >
          <PlusOutlined
            style={{ color: data.buyXgetY.productDetails.plusColor }}
          />
        </div>

        <div className="bxgy_productsListing_main">
          {data.buyXgetY.DiscountBadge.badgeType == "rightBanner" ? (
            <div
              className="bxgy_productDiscount_badges"
              style={{
                background: data.buyXgetY.DiscountBadge.backgroundColor,
              }}
            >
              <h5
                style={{
                  color: data.buyXgetY.DiscountBadge.color,
                  fontSize: data.buyXgetY.DiscountBadge.fontSize + "px",
                }}
              >
                {data.buyXgetY.DiscountBadge.text}
              </h5>
            </div>
          ) : data.buyXgetY.DiscountBadge.badgeType == "leftBanner" ? (
            <div
              className="bxgy_productDiscount_badges left"
              style={{
                background: data.buyXgetY.DiscountBadge.backgroundColor,
              }}
            >
              <h5
                style={{
                  color: data.buyXgetY.DiscountBadge.color,
                  fontSize: data.buyXgetY.DiscountBadge.fontSize + "px",
                }}
              >
                {data.buyXgetY.DiscountBadge.text}
              </h5>
            </div>
          ) : data.buyXgetY.DiscountBadge.badgeType == "ribbon" ? (
            <div
              style={{
                background: data.buyXgetY.DiscountBadge.backgroundColor,
              }}
              className="dis-ribbon"
            >
              <span
                style={{
                  color: data.buyXgetY.DiscountBadge.color,
                  fontSize: data.buyXgetY.DiscountBadge.fontSize + "px",
                }}
              >
                {data.buyXgetY.DiscountBadge.text}
              </span>
            </div>
          ) : null}

          <div className="bxgy_products_listing second">
            <div
              style={{
                borderColor: data.buyXgetY.productDetails.image.borderColor,
                borderRadius:
                  data.buyXgetY.productDetails.image.borderRadius + "px",
              }}
              className="bxgy_product_listingImg"
            >
              <img
                style={{
                  borderRadius:
                    data.buyXgetY.productDetails.image.borderRadius + "px",
                }}
                src="https://cdn.shopify.com/s/files/1/0801/7264/6691/files/dummyImage.jpg?v=1700561335"
              ></img>
            </div>
            <div className="bxgy_product_listingText">
              <h6
                style={{
                  color: data.buyXgetY.productDetails.title.color,
                  fontSize: data.buyXgetY.productDetails.title.fontSize + "px",
                }}
              >
                Sample product
              </h6>

              <span
                className="bundle-price"
                style={{
                  color: data.buyXgetY.productDetails.price.color,
                  fontSize: data.buyXgetY.productDetails.price.fontSize + "px",
                }}
              >
                $5666
              </span>
            </div>
            <div
              style={{
                color: data.buyXgetY.productDetails.quantities.color,
                backgroundColor:
                  data.buyXgetY.productDetails.quantities.backgroundColor,
                borderColor:
                  data.buyXgetY.productDetails.quantities.borderColor,
              }}
              className="bxgy_product_listingClose"
            >
              <h3
                style={{ color: data.buyXgetY.productDetails.quantities.color }}
              >
                5X
              </h3>
            </div>
          </div>

          <div className="bxgy_productsListing_Column">
            <div className="bxgy_product_variant_main">
              <div className="bxgy_product_variant">
                <h6
                  style={{
                    color: data.buyXgetY.productDetails.variantSelector.color,
                  }}
                >
                  1
                </h6>
                <div className="bxgy_selected_field">
                  <select
                    style={{
                      backgroundColor:
                        data.buyXgetY.productDetails.variantSelector
                          .backgroundColor,
                      color: data.buyXgetY.productDetails.variantSelector.color,
                    }}
                    className="selectpicker"
                  >
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                  </select>
                </div>
              </div>
              <div className="bxgy_product_variant">
                <h6
                  style={{
                    color: data.buyXgetY.productDetails.variantSelector.color,
                  }}
                >
                  2
                </h6>
                <div className="bxgy_selected_field">
                  <select
                    style={{
                      backgroundColor:
                        data.buyXgetY.productDetails.variantSelector
                          .backgroundColor,
                      color: data.buyXgetY.productDetails.variantSelector.color,
                    }}
                    className="selectpicker"
                  >
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                  </select>
                </div>
              </div>
              <div className="bxgy_product_variant">
                <h6
                  style={{
                    color: data.buyXgetY.productDetails.variantSelector.color,
                  }}
                >
                  3
                </h6>
                <div className="bxgy_selected_field">
                  <select
                    style={{
                      backgroundColor:
                        data.buyXgetY.productDetails.variantSelector
                          .backgroundColor,
                      color: data.buyXgetY.productDetails.variantSelector.color,
                    }}
                    className="selectpicker"
                  >
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="bxgy_products_listing second">
            <div
              style={{
                borderColor: data.buyXgetY.productDetails.image.borderColor,
                borderRadius:
                  data.buyXgetY.productDetails.image.borderRadius + "px",
              }}
              className="bxgy_product_listingImg"
            >
              <img
                style={{
                  borderRadius:
                    data.buyXgetY.productDetails.image.borderRadius + "px",
                }}
                src="https://cdn.shopify.com/s/files/1/0801/7264/6691/files/dummyImage.jpg?v=1700561335"
              ></img>
            </div>
            <div className="bxgy_product_listingText">
              <h6
                style={{
                  color: data.buyXgetY.productDetails.title.color,
                  fontSize: data.buyXgetY.productDetails.title.fontSize + "px",
                }}
              >
                Sample product
              </h6>

              <span
                className="bundle-price"
                style={{
                  color: data.buyXgetY.productDetails.price.color,
                  fontSize: data.buyXgetY.productDetails.price.fontSize + "px",
                }}
              >
                $5666
              </span>
            </div>
            <div
              style={{
                color: data.buyXgetY.productDetails.quantities.color,
                backgroundColor:
                  data.buyXgetY.productDetails.quantities.backgroundColor,
                borderColor:
                  data.buyXgetY.productDetails.quantities.borderColor,
              }}
              className="bxgy_product_listingClose"
            >
              <h3
                style={{ color: data.buyXgetY.productDetails.quantities.color }}
              >
                5X
              </h3>
            </div>
          </div>
          <div className="bxgy_productsListing_Column">
            <div className="bxgy_product_variant_main">
              <div className="bxgy_product_variant">
                <h6
                  style={{
                    color: data.buyXgetY.productDetails.variantSelector.color,
                  }}
                >
                  1
                </h6>
                <div className="bxgy_selected_field">
                  <select
                    style={{
                      backgroundColor:
                        data.buyXgetY.productDetails.variantSelector
                          .backgroundColor,
                      color: data.buyXgetY.productDetails.variantSelector.color,
                    }}
                    className="selectpicker"
                  >
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                  </select>
                </div>
              </div>
              <div className="bxgy_product_variant">
                <h6
                  style={{
                    color: data.buyXgetY.productDetails.variantSelector.color,
                  }}
                >
                  2
                </h6>
                <div className="bxgy_selected_field">
                  <select
                    style={{
                      backgroundColor:
                        data.buyXgetY.productDetails.variantSelector
                          .backgroundColor,
                      color: data.buyXgetY.productDetails.variantSelector.color,
                    }}
                    className="selectpicker"
                  >
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                  </select>
                </div>
              </div>
              <div className="bxgy_product_variant">
                <h6
                  style={{
                    color: data.buyXgetY.productDetails.variantSelector.color,
                  }}
                >
                  3
                </h6>
                <div className="bxgy_selected_field">
                  <select
                    style={{
                      backgroundColor:
                        data.buyXgetY.productDetails.variantSelector
                          .backgroundColor,
                      color: data.buyXgetY.productDetails.variantSelector.color,
                    }}
                    className="selectpicker"
                  >
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                    <option>Select Variant</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bxgy_productTotal"
          style={{ backgroundColor: data.buyXgetY.totalSection.background }}
        >
          <div className="bxgy_productTotal_text">
            <h4
              style={{
                color: data.buyXgetY.totalSection.color,
                fontSize: data.buyXgetY.totalSection.fontSize + "px",
              }}
            >
              Total
            </h4>
          </div>
          <div className="bxgy_productTotal_price">
            <h3
              style={{
                color: data.buyXgetY.totalSection.originalPrice.color,
                fontSize:
                  data.buyXgetY.totalSection.originalPrice.fontSize + "px",
              }}
            >
              $567
            </h3>
            <span
              style={{
                color: data.buyXgetY.totalSection.finalPrice.color,
                fontSize: data.buyXgetY.totalSection.finalPrice.fontSize + "px",
              }}
            >
              $8787
            </span>
          </div>
        </div>
        {data.buyXgetY.button.position == "bottom" && (
          <div className="bxgy_productT_Cart">
            <button
              style={{
                color: data.buyXgetY.button.color,
                fontSize: data.buyXgetY.button.fontSize + "px",
                backgroundColor: data.buyXgetY.button.backgroundColor,
              }}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div> */}
      <div
        class="sd-bundle-main-column"
        style={{
          backgroundColor: data?.buyXgetY?.box?.backgroundColor,
          border:
            data?.buyXgetY?.box?.thickness +
            "px solid" +
            data?.buyXgetY?.box?.borderColor,
          borderRadius: data?.buyXgetY?.box?.borderRadius + "px",
        }}
      >
        <div class="sd-bundle-text-detail">
          <h4
            style={{
              color: data?.buyXgetY?.title?.color,
              fontSize: data?.buyXgetY?.title?.fontSize + "px",
              fontWeight: data?.buyXgetY?.title?.titleBold,
              textAlign: data?.buyXgetY?.title?.alignment,
            }}
          >
            Buy X get Y
          </h4>
          <p
            style={{
              color: data.buyXgetY.title.descriptionColor,
              fontSize: data.buyXgetY.title.descriptionFontSize + "px",
              fontWeight: data.buyXgetY.title.descriptionBold,
              textAlign: data.buyXgetY.title.alignment,
            }}
          >
            Buy two product get one free
          </p>
        </div>

        <div class="sd-bundle-product-detail">
          <div class="sd-bundle-product-inner">
            <div
              class="sd-bundle-product-img"
              style={{
                borderColor: data.buyXgetY.productDetails.image.borderColor,
                borderRadius:
                  data.buyXgetY.productDetails.image.borderRadius + "px",
              }}
            >
              <img src={productImg} width="80" height="80" />
            </div>
            <div class="sd-bundle-product-name">
              <h5
                style={{
                  color: data.buyXgetY.productDetails.title.color,
                  fontSize: data.buyXgetY.productDetails.title.fontSize + "px",
                }}
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  color: data.buyXgetY.productDetails.price.color,
                  fontSize: data.buyXgetY.productDetails.price.fontSize + "px",
                }}
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  backgroundColor:
                    data.buyXgetY.productDetails.variantSelector
                      .backgroundColor,
                  color: data.buyXgetY.productDetails.variantSelector.color,
                }}
              >
                <option>Medium</option>
                <option>Small</option>
              </select>
            </div>
          </div>
          <div class="sd-bundle-product-quantity">
            <h6
              style={{
                color: data.buyXgetY.productDetails.quantities.color,
              }}
            >
              Qty: <span>1</span>
            </h6>
          </div>
        </div>

        <div class="sd-bundle-product-detail">
          <div class="sd-bundle-product-inner">
            <div
              class="sd-bundle-product-img"
              style={{
                borderColor: data.buyXgetY.productDetails.image.borderColor,
                borderRadius:
                  data.buyXgetY.productDetails.image.borderRadius + "px",
              }}
            >
              <img src={productImg} width="80" height="80" />
            </div>
            <div class="sd-bundle-product-name">
              <h5
                style={{
                  color: data.buyXgetY.productDetails.title.color,
                  fontSize: data.buyXgetY.productDetails.title.fontSize + "px",
                }}
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  color: data.buyXgetY.productDetails.price.color,
                  fontSize: data.buyXgetY.productDetails.price.fontSize + "px",
                }}
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  backgroundColor:
                    data.buyXgetY.productDetails.variantSelector
                      .backgroundColor,
                  color: data.buyXgetY.productDetails.variantSelector.color,
                }}
              >
                <option>Medium</option>
                <option>Small</option>
              </select>
            </div>
          </div>
          <div class="sd-bundle-product-quantity">
            <h6
              style={{
                color: data.buyXgetY.productDetails.quantities.color,
              }}
            >
              Qty: <span>1</span>
            </h6>
          </div>
        </div>
        <div class="sd-add-bundle">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
              fill={data.buyXgetY.productDetails.plusColor}
            />
          </svg>
        </div>
        <div class="sd-bundle-product-detail">
          <div class="sd-bundle-product-inner">
            <div
              class="sd-bundle-product-img"
              style={{
                borderColor: data.buyXgetY.productDetails.image.borderColor,
                borderRadius:
                  data.buyXgetY.productDetails.image.borderRadius + "px",
              }}
            >
              <img src={productImg} width="80" height="80" />
            </div>
            <div class="sd-bundle-product-name">
              <h5
                style={{
                  color: data.buyXgetY.productDetails.title.color,
                  fontSize: data.buyXgetY.productDetails.title.fontSize + "px",
                }}
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  color: data.buyXgetY.productDetails.price.color,
                  fontSize: data.buyXgetY.productDetails.price.fontSize + "px",
                }}
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  backgroundColor:
                    data.buyXgetY.productDetails.variantSelector
                      .backgroundColor,
                  color: data.buyXgetY.productDetails.variantSelector.color,
                }}
              >
                <option>Medium</option>
                <option>Small</option>
              </select>
            </div>
          </div>
          <div class="sd-bundle-product-quantity">
            <h6
              style={{
                color: data.buyXgetY.productDetails.quantities.color,
              }}
            >
              Qty: <span>1</span>
            </h6>
          </div>
        </div>
        <div class="sd-product-bundle-total">
          <div class="sd-total-desc">
            <h4
              style={{
                color: data.buyXgetY.totalSection.color,
                fontSize: data.buyXgetY.totalSection.fontSize + "px",
              }}
            >
              Total
            </h4>
            <p
              style={{
                color: data.buyXgetY.title.descriptionColor,
              }}
            >
              Discount will be applied at checkout
            </p>
          </div>
          <div class="sd-total-amount">
            <h4
              style={{
                color: data.buyXgetY.totalSection.finalPrice.color,
                fontSize: data.buyXgetY.totalSection.finalPrice.fontSize + "px",
              }}
            >
              Rs. 5,000.00
            </h4>
            <h6
              style={{
                color: data.buyXgetY.totalSection.originalPrice.color,
                fontSize:
                  data.buyXgetY.totalSection.originalPrice.fontSize + "px",
              }}
            >
              Rs. 7500.00
            </h6>
          </div>
        </div>
        <div class="sd-bundle-addto-cart">
          <button
            style={{
              color: data.buyXgetY.button.color,
              fontSize: data.buyXgetY.button.fontSize + "px",
              backgroundColor: data.buyXgetY.button.backgroundColor,
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomizationBuyXgetY;
