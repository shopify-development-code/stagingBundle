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
  const textStyle = {
    fontFamily:  `${data.buyXgetY.box.fontFamily}`
  };
  return (
    <>
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
              ...textStyle,
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
              ...textStyle,
              color: data.buyXgetY.title.descriptionColor,
              fontSize: data.buyXgetY.title.descriptionFontSize + "px",
              fontWeight: data.buyXgetY.title.descriptionBold,
              textAlign: data.buyXgetY.title.alignment,
            }}
          >
            Buy two product get one free
          </p>
        </div>

        <div
          class="sd-bundle-product-detail"
          style={{
            backgroundColor:
              data.buyXgetY.productDetails.productDetailsBox.backgroundColor,
          }}
        >
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
                  ...textStyle,
                  color: data.buyXgetY.productDetails.title.color,
                  fontSize: data.buyXgetY.productDetails.title.fontSize + "px",
                }}
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  ...textStyle,
                  color: data.buyXgetY.productDetails.price.color,
                  fontSize: data.buyXgetY.productDetails.price.fontSize + "px",
                }}
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  ...textStyle,
                  backgroundColor:
                    data.buyXgetY.productDetails.variantSelector
                      .backgroundColor,
                  color: data.buyXgetY.productDetails.variantSelector.color,
                  width:
                    data.buyXgetY.productDetails.variantSelector.width + "px",
                }}
              >
                <option style={{...textStyle,}}>Medium</option>
                <option style={{...textStyle,}}>Small</option>
              </select>
            </div>
          </div>
          <div class="sd-bundle-product-quantity">
            <h6
              style={{
                ...textStyle,
                color: data.buyXgetY.productDetails.quantities.color,
                fontSize: data.buyXgetY.productDetails.quantities.size + "px"
              }}
            >
              Qty: <span style={{...textStyle,fontSize: data.buyXgetY.productDetails.quantities.size + "px"}}>1</span>
            </h6>
          </div>
        </div>

        <div
          class="sd-bundle-product-detail"
          style={{
            backgroundColor:
              data.buyXgetY.productDetails.productDetailsBox.backgroundColor,
          }}
        >
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
                  ...textStyle,
                  color: data.buyXgetY.productDetails.title.color,
                  fontSize: data.buyXgetY.productDetails.title.fontSize + "px",
                }}
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  ...textStyle,
                  color: data.buyXgetY.productDetails.price.color,
                  fontSize: data.buyXgetY.productDetails.price.fontSize + "px",
                }}
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  ...textStyle,
                  backgroundColor:
                    data.buyXgetY.productDetails.variantSelector
                      .backgroundColor,
                  color: data.buyXgetY.productDetails.variantSelector.color,
                  width:
                    data.buyXgetY.productDetails.variantSelector.width + "px",
                }}
              >
                <option style={{...textStyle,}}>Medium</option>
                <option style={{...textStyle,}}>Small</option>
              </select>
            </div>
          </div>
          <div class="sd-bundle-product-quantity">
            <h6
              style={{
                ...textStyle,
                color: data.buyXgetY.productDetails.quantities.color,
                fontSize: data.buyXgetY.productDetails.quantities.size + "px"
              }}
            >
              Qty: <span style={{...textStyle,fontSize: data.buyXgetY.productDetails.quantities.size + "px"}}>1</span>
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

        <div
          class="sd-bundle-product-detail"
          style={{
            backgroundColor:
              data.buyXgetY.productDetails.productDetailsBox.backgroundColor,
          }}
        >
          {data.buyXgetY.DiscountBadge.badgeType == "leftBanner" ? (
            <div className="sd-bundle-product-badge left-badge ">
              <div
                className="open-badge"
                style={{
                  background: data.buyXgetY.DiscountBadge.backgroundColor,
                }}
              ></div>
              <h4
                style={{
                  ...textStyle,
                  color: data.buyXgetY.DiscountBadge.color,
                  fontSize: data.buyXgetY.DiscountBadge.fontSize + "px",
                }}
              >
                {data.buyXgetY.DiscountBadge.text}
              </h4>
            </div>
          ) : (
            <div className="sd-bundle-product-badge ">
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
                  fill={data.buyXgetY.DiscountBadge.backgroundColor}
                />
                <path
                  d="M9 0H83V19C83 21.7614 80.7614 24 78 24H14C11.2386 24 9 21.7614 9 19V0Z"
                  fill={data.buyXgetY.DiscountBadge.backgroundColor}
                />
              </svg>
              <h4
                style={{
                  ...textStyle,
                  color: data.buyXgetY.DiscountBadge.color,
                  fontSize: data.buyXgetY.DiscountBadge.fontSize + "px",
                }}
              >
                {data.buyXgetY.DiscountBadge.text}
              </h4>
            </div>
          )}
          {/* <div className="sd-bundle-product-badge left-badge ">
        <svg width="75" height="30" viewBox="0 0 75 30" fill="none" xmlns="
          http://www.w3.org/2000/svg">
          <path d="M0 30H75V5C75 2.23858 72.7614 0 70 0H5C2.23858 0 0 2.23858 0 5V30Z" fill="#F4383B"/>
          </svg>
          <h4>50% Off</h4>
        </div> */}

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
                  ...textStyle,
                  color: data.buyXgetY.productDetails.title.color,
                  fontSize: data.buyXgetY.productDetails.title.fontSize + "px",
                }}
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  ...textStyle,
                  color: data.buyXgetY.productDetails.price.color,
                  fontSize: data.buyXgetY.productDetails.price.fontSize + "px",
                }}
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  ...textStyle,
                  backgroundColor:
                    data.buyXgetY.productDetails.variantSelector
                      .backgroundColor,
                  color: data.buyXgetY.productDetails.variantSelector.color,
                  width:
                    data.buyXgetY.productDetails.variantSelector.width + "px",
                }}
              >
                <option style={{...textStyle,}}>Medium</option>
                <option style={{...textStyle,}}>Small</option>
              </select>
            </div>
          </div>
          <div class="sd-bundle-product-quantity">
            <h6
              style={{
                ...textStyle,
                color: data.buyXgetY.productDetails.quantities.color,
                fontSize: data.buyXgetY.productDetails.quantities.size + "px"
              }}
            >
              Qty: <span style={{...textStyle,fontSize: data.buyXgetY.productDetails.quantities.size + "px"}}>1</span>
            </h6>
          </div>
        </div>
        <div class="sd-product-bundle-total">
          <div class="sd-total-desc">
            <h4
              style={{
                ...textStyle,
                color: data.buyXgetY.totalSection.color,
                fontSize: data.buyXgetY.totalSection.fontSize + "px",
              }}
            >
              Total
            </h4>
            <p
              style={{
                ...textStyle,
                color: data.buyXgetY.totalSection.discountMessage.color,
                fontSize: data.buyXgetY.totalSection.discountMessage.size + "px"
              }}
            >
              Discount will be applied at checkout
            </p>
          </div>
          <div class="sd-total-amount">
            <h4
              style={{
                ...textStyle,
                color: data.buyXgetY.totalSection.finalPrice.color,
                fontSize: data.buyXgetY.totalSection.finalPrice.fontSize + "px",
              }}
            >
              Rs. 5,000.00
            </h4>
            <h6
              style={{
                ...textStyle,
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
              ...textStyle,
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
