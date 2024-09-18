import React, { useState } from "react";
import { Icon } from "@shopify/polaris";
import { useAPI } from "../shop";
// import pic from   './image.jpg';
import { PlusOutlined } from "@ant-design/icons";
import pic from "../../assets/image2.png";
import productImg from "../../assets/product.png";

const CustomizationProductBundlePreview = ({ data }) => {
  const { currency } = useAPI();
  const discount = 40;
  console.log("datata", data);
  return (
    <>
      {/* <div
        className="sd-preview-wrapper-common sd-productCustom-preview"
        style={{
          backgroundColor: data.bundle.box.backgroundColor,
          borderColor: data.bundle.box.borderColor,
          borderRadius: `${data.bundle.box.borderRadius}px`,
        }}
      >
        <div
          className="sd-preview-title-common"
          style={{
            color: data.bundle.title.color,
            fontSize: data.bundle.title.fontSize + "px",
            textAlign: data.bundle.title.alignment,
            fontWeight: data.bundle.title.titleBold,
          }}
        >
          Bundle
        </div>
        <div
          className="sd-preview-title-common"
          style={{
            color: data.bundle.title.descriptionColor,
            fontSize: data.bundle.title.descriptionFontSize + "px",
            textAlign: data.bundle.title.alignment,
            fontWeight: data.bundle.title.descriptionBold,
          }}
        >
          Bundle Description
        </div>
        <div className="sd-preview-data-section-common">
          <div className="sd-bundle-custom-center-imgTitlePrice-wrapper">
            <div className="sd-custom-image-container">
              <img
                src={pic}
                style={{
                  borderColor: data.bundle.productDetails.image.borderColor,
                  borderRadius:
                    data.bundle.productDetails.image.borderRadius + "px",
                }}
              />
            </div>
            <div className="sd-bundle-title-price">
              <div
                style={{
                  color: data.bundle.productDetails.title.color,
                  fontSize: data.bundle.productDetails.title.fontSize + "px",
                }}
              >
                Product Name
              </div>

              <div
                className="bundle-price"
                style={{
                  color: data.bundle.productDetails.price.color,
                  fontSize: data.bundle.productDetails.price.fontSize + "px",
                }}
              >
                Rs. 500
              </div>
            </div>
          </div>
          <div
            className="sd-bundle-showQuantity"
            style={{
              color: data.bundle.productDetails.quantities.color,
              backgroundColor:
                data.bundle.productDetails.quantities.backgroundColor,
            }}
          >
            2X{" "}
          </div>
        </div>

        <div className="sd-preview-variant-selection-common">
          <p
            style={{ color: data.bundle.productDetails.variantSelector.color }}
          >
            1
          </p>
          <select
            style={{
              backgroundColor:
                data.bundle.productDetails.variantSelector.backgroundColor,
              color: data.bundle.productDetails.variantSelector.color,
            }}
          >
            <option value="select"> Select Variant </option>

            <option value="one" data-varindex="3">
              variant one
            </option>
            <option value="two" data-varindex="3">
              variant two
            </option>
          </select>
        </div>

        <div className="sd-preview-variant-selection-common">
          <p
            style={{ color: data.bundle.productDetails.variantSelector.color }}
          >
            2
          </p>
          <select
            style={{
              backgroundColor:
                data.bundle.productDetails.variantSelector.backgroundColor,
              color: data.bundle.productDetails.variantSelector.color,
            }}
          >
            <option value="select"> Select Variant </option>

            <option value="one" data-varindex="3">
              variant one
            </option>
            <option value="two" data-varindex="3">
              variant two
            </option>
          </select>
        </div>

        <div
          className="sd-bundle-svg-common"
          style={{ background: data.bundle.productDetails.plusBackgroundColor }}
        >
          <PlusOutlined
            style={{ color: data.bundle.productDetails.plusColor }}
          />
        </div>

        <div className="sd-preview-data-section-common">
          <div className="sd-bundle-custom-center-imgTitlePrice-wrapper">
            <div className="sd-custom-image-container">
              <img
                src={pic}
                style={{
                  borderColor: data.bundle.productDetails.image.borderColor,
                  borderRadius:
                    data.bundle.productDetails.image.borderRadius + "px",
                }}
              />
            </div>
            <div className="sd-bundle-title-price">
              <div
                style={{
                  color: data.bundle.productDetails.title.color,
                  fontSize: data.bundle.productDetails.title.fontSize + "px",
                }}
              >
                Product Name
              </div>

              <div
                className="bundle-price"
                style={{
                  color: data.bundle.productDetails.price.color,
                  fontSize: data.bundle.productDetails.price.fontSize + "px",
                }}
              >
                Rs. 500
              </div>
            </div>
          </div>
        </div>

        <br />

        <div
          className="sd-bundle-total-common"
          style={{
            color: data.bundle.totalSection.color,
            backgroundColor: data.bundle.totalSection.backgroundColor,
            fontSize: data.bundle.totalSection.fontSize + "px",
          }}
        >
          <p>{data.bundle.totalSection.text}</p>
          <div className="sd-bundle-customization-total-common">
            <span
              className="sd-bundle-mrp-price"
              style={{
                color: data.bundle.totalSection.originalPrice.color,
                fontSize:
                  data.bundle.totalSection.originalPrice.fontSize + "px",
              }}
            >
              <del>{currency} 1000 </del>
            </span>
            <span
              className="sd-bundle-real-price"
              style={{
                color: data.bundle.totalSection.finalPrice.color,
                fontSize: data.bundle.totalSection.finalPrice.fontSize + "px",
              }}
            >
              {currency} 600
            </span>
          </div>
        </div>
        <button
          type="button"
          className="sd-addToCart-button"
          style={{
            color: data.bundle.button.color,
            fontSize: data.bundle.button.fontSize + "px",
            backgroundColor: data.bundle.button.backgroundColor,
          }}
        >
          {data.bundle.button.text_others}
        </button>
      </div> */}
      <div
        class="sd-bundle-main-column"
        style={{
          backgroundColor: data.bundle.box.backgroundColor,
          borderColor: data.bundle.box.borderColor,
          borderRadius: `${data.bundle.box.borderRadius}px`,
        }}
      >
        <div class="sd-bundle-text-detail">
          <h4
            style={{
              color: data.bundle.title.color,
              fontSize: data.bundle.title.fontSize + "px",
              textAlign: data.bundle.title.alignment,
              fontWeight: data.bundle.title.titleBold,
            }}
          >
            Products Bundle
          </h4>
          <p
            style={{
              color: data.bundle.title.descriptionColor,
              fontSize: data.bundle.title.descriptionFontSize + "px",
              textAlign: data.bundle.title.alignment,
              fontWeight: data.bundle.title.descriptionBold,
            }}
          >
            Buy this bundle and save 5%
          </p>
        </div>

        <div class="sd-bundle-product-detail">
          <div class="sd-bundle-product-inner">
            <div
              class="sd-bundle-product-img"
              style={{
                borderColor: data.bundle.productDetails.image.borderColor,
                borderRadius:
                  data.bundle.productDetails.image.borderRadius + "px",
              }}
            >
              <img src={productImg} width="80" height="80" />
            </div>
            <div class="sd-bundle-product-name">
              <h5
                style={{
                  color: data.bundle.productDetails.title.color,
                  fontSize: data.bundle.productDetails.title.fontSize + "px",
                }}
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  color: data.bundle.productDetails.price.color,
                  fontSize: data.bundle.productDetails.price.fontSize + "px",
                }}
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  backgroundColor:
                    data.bundle.productDetails.variantSelector.backgroundColor,
                  color: data.bundle.productDetails.variantSelector.color,
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
                color: data.bundle.productDetails.quantities.color,
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
            style={{
              color: data.bundle.productDetails.plusColor,
            }}
          >
            <path
              d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
              fill={data.bundle.productDetails.plusColor}
            />
          </svg>
        </div>
        <div class="sd-bundle-product-detail">
          <div class="sd-bundle-product-inner">
            <div
              class="sd-bundle-product-img"
              style={{
                borderColor: data.bundle.productDetails.image.borderColor,
                borderRadius:
                  data.bundle.productDetails.image.borderRadius + "px",
              }}
            >
              <img src={productImg} width="80" height="80" />
            </div>
            <div class="sd-bundle-product-name">
              <h5
                style={{
                  color: data.bundle.productDetails.title.color,
                  fontSize: data.bundle.productDetails.title.fontSize + "px",
                }}
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  color: data.bundle.productDetails.price.color,
                  fontSize: data.bundle.productDetails.price.fontSize + "px",
                }}
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  backgroundColor:
                    data.bundle.productDetails.variantSelector.backgroundColor,
                  color: data.bundle.productDetails.variantSelector.color,
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
                color: data.bundle.productDetails.quantities.color,
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
                color: data.bundle.totalSection.color,
                fontSize: data.bundle.totalSection.fontSize + "px",
              }}
            >
              Total
            </h4>
            <p
              style={{
                color: data.bundle.title.descriptionColor,
              }}
            >
              Discount will be applied at checkout
            </p>
          </div>
          <div class="sd-total-amount">
            <h4
              style={{
                color: data.bundle.totalSection.finalPrice.color,
                fontSize: data.bundle.totalSection.finalPrice.fontSize + "px",
              }}
            >
              Rs. 4,750.00
            </h4>
            <h6
              style={{
                color: data.bundle.totalSection.originalPrice.color,
                fontSize:
                  data.bundle.totalSection.originalPrice.fontSize + "px",
              }}
            >
              Rs. 5,000.00
            </h6>
          </div>
        </div>
        <div class="sd-bundle-addto-cart">
          <button
            type="button"
            style={{
              color: data.bundle.button.color,
              fontSize: data.bundle.button.fontSize + "px",
              backgroundColor: data.bundle.button.backgroundColor,
            }}
          >
            {data.bundle.button.text_others}
          </button>
        </div>
      </div>
    </>
  );
};
export default CustomizationProductBundlePreview;
