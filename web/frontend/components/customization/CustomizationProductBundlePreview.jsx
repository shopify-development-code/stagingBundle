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
  const textStyle = {
    fontFamily: `${data?.bundle?.box?.fontFamily || 'inherit'}`
  };
  return (
    <>
      <div
        class="sd-bundle-main-column"
        style={{
          backgroundColor: data?.bundle?.box?.backgroundColor,
          borderColor: data?.bundle?.box?.borderColor,
          borderRadius: `${data?.bundle?.box?.borderRadius}px`,
        }}
      >
          <div
            className="sd-badges-part"
            style={{
              backgroundColor: data?.bundle?.optionalBadge?.background,
            }}
          >
            <span
              style={{
                ...textStyle,
                color: data?.bundle?.optionalBadge?.color,
                fontSize: `${data?.bundle?.optionalBadge?.fontSize}px`,
              }}
            >
              5% Off
            </span>
          </div>
        <div
          className={`sd-bundle-text-detail ${data?.bundle?.optionalBadge?.enable ? "extra-padding" : ""}`}
        >
          <h4
            style={{
              ...textStyle,
              color: data?.bundle?.title?.color,
              fontSize: `${data?.bundle?.title?.fontSize}px`,
              textAlign: data?.bundle?.title?.alignment,
              fontWeight: data?.bundle?.title?.titleBold,
            }}            
          >
            Products Bundle
          </h4>
          <p
            style={{
              ...textStyle,
              color: data?.bundle?.title?.descriptionColor,
              fontSize: `${data?.bundle?.title?.descriptionFontSize}px`,
              textAlign: data?.bundle?.title?.alignment,
              fontWeight: data?.bundle?.title?.descriptionBold,
            }}            
          >
            Buy this bundle and save 5%
          </p>
        </div>

        <div
          class="sd-bundle-product-detail"
          style={{
            backgroundColor: data?.bundle?.productDetails?.productDetailsBox?.backgroundColor,
          }}          
        >
          <div class="sd-bundle-product-inner">
            <div
              class="sd-bundle-product-img"
              style={{
                borderColor: data?.bundle?.productDetails?.image?.borderColor,
                borderRadius: `${data?.bundle?.productDetails?.image?.borderRadius}px`,
              }}              
            >
              <img src={productImg} width="80" height="80" />
            </div>
            <div class="sd-bundle-product-name">
              <h5
                style={{
                  ...textStyle,
                  color: data?.bundle?.productDetails?.title?.color,
                  fontSize: `${data?.bundle?.productDetails?.title?.fontSize}px`,
                }}                
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  ...textStyle,
                  color: data?.bundle?.productDetails?.price?.color,
                  fontSize: `${data?.bundle?.productDetails?.price?.fontSize}px`,
                }}                
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  ...textStyle,
                  backgroundColor: data?.bundle?.productDetails?.variantSelector?.backgroundColor,
                  color: data?.bundle?.productDetails?.variantSelector?.color,
                  width: `${data?.bundle?.productDetails?.variantSelector?.width}px`,
                }}                
              >
                <option style={{ ...textStyle }}>Medium</option>
                <option style={{ ...textStyle }}>Small</option>
              </select>
            </div>
          </div>
          <div class="sd-bundle-product-quantity">
            <h6
              style={{
                ...textStyle,
                color: data?.bundle?.productDetails?.quantities?.color,
                fontSize: `${data?.bundle?.productDetails?.quantities?.size}px`,
              }}              
            >
              Qty:{" "}
              <span
                style={{
                  ...textStyle,
                  fontSize: `${data?.bundle?.productDetails?.quantities?.size}px`,
                }}                
              >
                1
              </span>
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
              fill={data?.bundle?.productDetails?.plusColor}
            />
          </svg>
        </div>
        <div
          class="sd-bundle-product-detail"
          style={{
            backgroundColor: data?.bundle?.productDetails?.productDetailsBox?.backgroundColor,
          }}          
        >
          <div class="sd-bundle-product-inner">
            <div
              class="sd-bundle-product-img"
              style={{
                borderColor: data?.bundle?.productDetails?.image?.borderColor,
                borderRadius: `${data?.bundle?.productDetails?.image?.borderRadius}px`,
              }}              
            >
              <img src={productImg} width="80" height="80" />
            </div>
            <div class="sd-bundle-product-name">
              <h5
                style={{
                  ...textStyle,
                  color: data?.bundle?.productDetails?.title?.color,
                  fontSize: `${data?.bundle?.productDetails?.title?.fontSize}px`,
                }}                
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  ...textStyle,
                  color: data?.bundle?.productDetails?.price?.color,
                  fontSize: `${data?.bundle?.productDetails?.price?.fontSize}px`,
                }}                
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  ...textStyle,
                  backgroundColor: data?.bundle?.productDetails?.variantSelector?.backgroundColor,
                  color: data?.bundle?.productDetails?.variantSelector?.color,
                  width: `${data?.bundle?.productDetails?.variantSelector?.width}px`,
                }}                
              >
                <option style={{ ...textStyle }}>Medium</option>
                <option style={{ ...textStyle }}>Small</option>
              </select>
            </div>
          </div>
          <div class="sd-bundle-product-quantity">
            <h6
              style={{
                ...textStyle,
                color: data?.bundle?.productDetails?.quantities?.color,
                fontSize: `${data?.bundle?.productDetails?.quantities?.size}px`,
              }}              
            >
              Qty:{" "}
              <span
                style={{
                  ...textStyle,
                  fontSize: `${data?.bundle?.productDetails?.quantities?.size}px`,
                }}                
              >
                1
              </span>
            </h6>
          </div>
        </div>
        <div class="sd-product-bundle-total">
          <div class="sd-total-desc">
            <h4
              style={{
                ...textStyle,
                color: data?.bundle?.totalSection?.color,
                fontSize: `${data?.bundle?.totalSection?.fontSize}px`,
              }}              
            >
              Total
            </h4>
            <p
              style={{
                ...textStyle,
                color: data?.bundle?.totalSection?.discountMessage?.color,
                fontSize: `${data?.bundle?.totalSection?.discountMessage?.size}px`,
              }}              
            >
              Discount will be applied at checkout
            </p>
          </div>
          <div class="sd-total-amount">
            <h4
              style={{
                ...textStyle,
                color: data?.bundle?.totalSection?.finalPrice?.color,
                fontSize: `${data?.bundle?.totalSection?.finalPrice?.fontSize}px`,
              }}              
            >
              Rs. 4,750.00
            </h4>
            <h6
              style={{
                ...textStyle,
                color: data?.bundle?.totalSection?.originalPrice?.color,
                fontSize: `${data?.bundle?.totalSection?.originalPrice?.fontSize}px`,
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
              ...textStyle,
              color: data?.bundle?.button?.color,
              fontSize: `${data?.bundle?.button?.fontSize}px`,
              backgroundColor: data?.bundle?.button?.backgroundColor,
              borderColor: data?.bundle?.button?.borderColor,
              borderRadius: `${data?.bundle?.button?.borderRadius}px`,
            }}            
          >
            {data?.bundle?.button?.text_others}
          </button>
        </div>
      </div>
    </>
  );
};
export default CustomizationProductBundlePreview;
