import React, { useEffect, useState } from "react";
import pic from "../../assets/image2.png";
import {
  ArrowLeftOutlined,
  CaretRightOutlined,
  CaretDownOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { useAPI } from "../shop";
import { Button } from "antd";
import { data } from "@shopify/app-bridge/actions/Modal";
import productImg from "../../assets/product.png";

const CustomizationVolumeBundlePreview = ({ data }) => {
  const [selected, setSelected] = useState("first");
  const [quantity, setQuantity] = useState(2);
  const [showMore, setShowMore] = useState(false);
  const { currency } = useAPI();

  const handleSelected = (option) => {
    option != selected ? setSelected(option) : "";
  };

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleMinus = () => {
    quantity > 2 && setQuantity((prev) => prev - 1);
  };

  const textStyle = {
    fontFamily: `${data?.volume?.box?.fontFamily || 'inherit'}`
  };

  useEffect(() => {
    quantity == 2 && setShowMore(false);
  }, [quantity]);

  return (
    <>
      <div
        class="sd-bundle-main-column"
        style={{
          backgroundColor: data?.volume?.box?.backgroundColor,
          borderColor: data?.volume?.box?.borderColor,
          borderRadius: `${data?.volume?.box?.borderRadius}px`,
        }}        
      >
        <div class="sd-bundle-text-detail">
          <h4
            style={{
              ...textStyle,
              color: data?.volume?.title?.color,
              fontSize: `${data?.volume?.title?.fontSize}px`,
              textAlign: data?.volume?.title?.alignment,
              fontWeight: data?.volume?.title?.titleBold,
            }}            
          >
            Volume Bundle
          </h4>
          <p
            style={{
              ...textStyle,
              color: data?.volume?.title?.descriptionColor,
              fontSize: `${data?.volume?.title?.descriptionFontSize}px`,
              textAlign: data?.volume?.title?.alignment,
              fontWeight: data?.volume?.title?.descriptionBold,
            }}            
          >
            Buy and save 5%
          </p>
        </div>
        <div
          class="sd-volume-bundle-detail"
          style={{
            backgroundColor:
              data?.volume?.productDetails?.productDetailsBox?.backgroundColor,
          }}
        >
          {data?.volume?.options?.DiscountBadge?.badgeType == "rightBanner" && (
            <div className="sd-bundle-product-badgeOptions ">
              <svg
                width="91"
                height="24"
                viewBox="0 0 91 24"
                fill="none"
                xmlns="
          http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10L8.63148 0H83.3261L91 10H0Z"
                  fill={
                    data?.volume?.options?.saveDiscount?.backgroundColor
                  }
                />
                <path
                  d="M9 0H83V19C83 21.7614 80.7614 24 78 24H14C11.2386 24 9 21.7614 9 19V0Z"
                  fill={
                    data?.volume?.options?.saveDiscount?.backgroundColor
                  }
                />
              </svg>
              <h4
                style={{
                  ...textStyle,
                  color: data?.volume?.options?.saveDiscount?.color,
                  fontSize: `${data?.volume?.options?.saveDiscount?.fontSize}px`,
                }}                
              >
                {data?.volume?.options?.DiscountBadge?.text}
              </h4>
            </div>
          )}
          <div class="sd-select-radio-with-text">
            <div class="radio">
              <input id="radio-1" name="radio" type="radio" />
              <label
                for="radio-1"
                class="sd-radio-label"
                style={{
                  ...textStyle,
                  color: data?.volume?.options?.color,
                  fontSize: `${data?.volume?.options?.fontSize}px`,
                }}                
              >
                Buy 3 & Save 5%
              </label>
            </div>
            {data?.volume?.options?.DiscountBadge?.badgeType == "options" && (
              <div
                class="sd-percent-badge"
                style={{
                  backgroundColor: data?.volume?.options?.saveDiscount?.backgroundColor,
                  borderRadius: `${data?.volume?.options?.saveDiscount?.borderRadius}px`,
                }}                
              >
                <span
                  style={{
                    ...textStyle,
                    color: data?.volume?.options?.saveDiscount?.color,
                    fontSize: `${data?.volume?.options?.saveDiscount?.fontSize}px`,
                  }}                  
                >
                  {data?.volume?.options?.DiscountBadge?.text}
                </span>
              </div>
            )}
          </div>
        </div>
        <div
          class="sd-volume-bundle-detail"
          style={{
            backgroundColor: data?.volume?.productDetails?.productDetailsBox?.backgroundColor,
          }}          
        >
          {data?.volume?.options?.DiscountBadge?.badgeType == "rightBanner" && (
            <div className="sd-bundle-product-badgeOptions1">
              <svg
                width="91"
                height="24"
                viewBox="0 0 91 24"
                fill="none"
                xmlns="
          http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10L8.63148 0H83.3261L91 10H0Z"
                  fill={
                    data?.volume?.options?.saveDiscount?.backgroundColor
                  }
                />
                <path
                  d="M9 0H83V19C83 21.7614 80.7614 24 78 24H14C11.2386 24 9 21.7614 9 19V0Z"
                  fill={
                    data?.volume?.options?.saveDiscount?.backgroundColor
                  }
                />
              </svg>
              <h4
               style={{
                ...textStyle,
                color: data?.volume?.options?.saveDiscount?.color,
                fontSize: `${data?.volume?.options?.saveDiscount?.fontSize}px`,
              }}              
              >
                {data?.volume?.options?.DiscountBadge?.text}
              </h4>
            </div>
          )}
          <div class="sd-select-radio-with-text">
            <div class="radio">
              <input id="radio-2" name="radio" type="radio" checked />
              <label
                for="radio-2"
                class="sd-radio-label"
                style={{
                  ...textStyle,
                  color: data?.volume?.options?.color,
                  fontSize: `${data?.volume?.options?.fontSize}px`,
                }}                
              >
                Buy 3 & Save 5%
              </label>
            </div>
            {data?.volume?.options?.DiscountBadge?.badgeType == "options" && (
              <div
                class="sd-percent-badge"
                style={{
                  backgroundColor: data?.volume?.options?.saveDiscount?.backgroundColor,
                  borderRadius: `${data?.volume?.options?.saveDiscount?.borderRadius}px`,
                }}                
              >
                <span
                  style={{
                    ...textStyle,
                    color: data?.volume?.options?.saveDiscount?.color,
                    fontSize: `${data?.volume?.options?.saveDiscount?.fontSize}px`,
                  }}                  
                >
                  {data?.volume?.options?.DiscountBadge?.text}
                </span>
              </div>
            )}
          </div>
          <div
            class="sd-bundle-product-detail"
            style={{
              backgroundColor: data?.volume?.productDetails?.productDetailsBox?.backgroundColor,
            }}            
          >
            <div class="sd-bundle-product-inner">
              <div
                class="sd-bundle-product-img"
                style={{
                  borderColor: data?.volume?.productDetails?.image?.borderColor,
                  borderRadius: `${data?.volume?.productDetails?.image?.borderRadius}px`,
                }}                
              >
                <img src={productImg} width="80" height="80" />
              </div>
              <div class="sd-bundle-product-name">
                <h5
                  style={{
                    ...textStyle,
                    color: data?.volume?.productDetails?.title?.color,
                    fontSize: `${data?.volume?.productDetails?.title?.fontSize}px`,
                  }}                  
                >
                  Smart Wireless Charger
                </h5>
                <h4
                  style={{
                    ...textStyle,
                    color: data?.volume?.productDetails?.price?.color,
                    fontSize: `${data?.volume?.productDetails?.price?.fontSize}px`,
                  }}                  
                >
                  Rs. 2500.00
                </h4>
                <div class="sd-bundle-product-select-main">
                  <select
                    style={{
                      ...textStyle,
                      backgroundColor: data?.volume?.productDetails?.variantSelector?.backgroundColor,
                      color: data?.volume?.productDetails?.variantSelector?.color,
                      width: `${data?.volume?.productDetails?.variantSelector?.width}px`,
                    }}                    
                  >
                    <option style={{ ...textStyle }}>Medium</option>
                    <option style={{ ...textStyle }}>Small</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="sd-bundle-product-quantity">
              <h6
               style={{
                ...textStyle,
                color: data?.volume?.productDetails?.quantities?.color,
                fontSize: `${data?.volume?.productDetails?.quantities?.size}px`,
              }}              
              >
                Qty:{" "}
                <span
                  style={{
                    ...textStyle,
                    fontSize: `${data?.volume?.productDetails?.quantities?.size}px`,
                  }}                  
                >
                  1
                </span>
              </h6>
            </div>
          </div>
        </div>

        <div class="sd-product-bundle-total">
          <div class="sd-total-desc">
            <h4
              style={{
                ...textStyle,
                color: data?.volume?.totalSection?.color,
                fontSize: `${data?.volume?.totalSection?.fontSize}px`,
              }}              
            >
              Total
            </h4>
            <p
              style={{
                ...textStyle,
                color: data?.volume?.totalSection?.discountMessage?.color,
                fontSize: `${data?.volume?.totalSection?.discountMessage?.size}px`,
              }}              
            >
              Discount will be applied at checkout
            </p>
          </div>
          <div class="sd-total-amount">
            <h4
              style={{
                ...textStyle,
                color: data?.volume?.totalSection?.finalPrice?.color,
                fontSize: `${data?.volume?.totalSection?.finalPrice?.fontSize}px`,
              }}              
            >
              Rs. 2,375.00
            </h4>
            <h6
              style={{
                ...textStyle,
                color: data?.volume?.totalSection?.originalPrice?.color,
                fontSize: `${data?.volume?.totalSection?.originalPrice?.fontSize}px`,
              }}              
            >
              Rs. 2,500.00
            </h6>
          </div>
        </div>
        <div class="sd-bundle-addto-cart">
          <button
            type="button"
            style={{
              ...textStyle,
              color: data?.volume?.button?.color,
              fontSize: `${data?.volume?.button?.fontSize}px`,
              backgroundColor: data?.volume?.button?.backgroundColor,
              borderColor: data?.volume?.button?.borderColor,
              borderRadius: `${data?.volume?.button?.borderRadius}px`,
            }}            
          >
            {data?.volume?.button?.text_others + " "}
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomizationVolumeBundlePreview;
