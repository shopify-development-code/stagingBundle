import { Button } from "antd";
import pic from "../../assets/image2.png";
import { PlusOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { Fragment } from "react";
import productImg from "../../assets/product.png";

const CustomizationFBt = ({ data }) => {
  const textStyle = {
    fontFamily: `${data.frequentlyBoughtTogether.box.fontFamily}`,
  };

  return (
    <>
      {data?.frequentlyBoughtTogether?.design === "modern" ? (
        <div
          class="sd-bundle-main-column"
          style={{
            backgroundColor: data.frequentlyBoughtTogether.box.backgroundColor,
            borderColor: data.frequentlyBoughtTogether.box.borderColor,
            borderRadius: data.frequentlyBoughtTogether.box.borderRadius + "px",
          }}
        >
          {data.frequentlyBoughtTogether.optionalBadge.enable == true && (
            <div
              className="sd-badges-part"
              style={{
                backgroundColor:
                  data["frequentlyBoughtTogether"]["optionalBadge"][
                    "background"
                  ],
              }}
            >
              <span
                style={{
                  ...textStyle,
                  color:
                    data["frequentlyBoughtTogether"]["optionalBadge"]["color"],
                  fontSize:
                    data["frequentlyBoughtTogether"]["optionalBadge"][
                      "fontSize"
                    ] + "px",
                }}
              >
                {data.frequentlyBoughtTogether.optionalBadge.text}
              </span>
            </div>
          )}
          {/* <div class="sd-bundle-text-detail"> */}
          <div className={`sd-bundle-text-detail ${data.frequentlyBoughtTogether.optionalBadge.enable == true ? 'extra-padding' : ' '}`}>
            <h4
              style={{
                ...textStyle,
                color: data.frequentlyBoughtTogether.title.color,
                fontSize: data.frequentlyBoughtTogether.title.fontSize + "px",
                textAlign: data.frequentlyBoughtTogether.title.alignment,
                fontWeight: data.frequentlyBoughtTogether.title.titleBold,
              }}
            >
              Frequently bought together
            </h4>
            <p
              style={{
                ...textStyle,
                color: data.frequentlyBoughtTogether.title.descriptionColor,
                fontSize:
                  data.frequentlyBoughtTogether.title.descriptionFontSize +
                  "px",
                fontWeight: data.frequentlyBoughtTogether.title.descriptionBold,
                textAlign: data.frequentlyBoughtTogether.title.alignment,
              }}
            >
              Buy and save 5%
            </p>
          </div>

          <div
            class="sd-bundle-product-detail"
            style={{
              backgroundColor:
                data.frequentlyBoughtTogether.productDetails.productDetailsBox
                  .backgroundColor,
            }}
          >
            <div class="sd-bundle-product-inner">
              <div class="checkbox-wrapper-18">
                <div class="round">
                  <input type="checkbox" id="checkbox-18" checked />
                  <label for="checkbox-18"></label>
                </div>
              </div>
              <div
                class="sd-bundle-product-img"
                style={{
                  borderColor:
                    data.frequentlyBoughtTogether.productDetails.image
                      .borderColor,
                  borderRadius:
                    data.frequentlyBoughtTogether.productDetails.image
                      .borderRadius + "px",
                }}
              >
                <img src={productImg} width="80" height="80" />
              </div>
              <div class="sd-bundle-product-name">
                <h5
                  style={{
                    ...textStyle,
                    color:
                      data.frequentlyBoughtTogether.productDetails.title.color,
                    fontSize:
                      data.frequentlyBoughtTogether.productDetails.title
                        .fontSize + "px",
                  }}
                >
                  Smart Wireless Charger
                </h5>
                <h4
                  style={{
                    ...textStyle,
                    color:
                      data.frequentlyBoughtTogether.productDetails.price.color,
                    fontSize:
                      data.frequentlyBoughtTogether.productDetails.price
                        .fontSize + "px",
                  }}
                >
                  {" "}
                  Rs. 2500.00
                </h4>
                <select
                  style={{
                    ...textStyle,
                    backgroundColor:
                      data.frequentlyBoughtTogether.productDetails
                        .variantSelector.backgroundColor,
                    color:
                      data.frequentlyBoughtTogether.productDetails
                        .variantSelector.color,
                    width:
                      data.frequentlyBoughtTogether.productDetails
                        .variantSelector.width + "px",
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
                  color:
                    data.frequentlyBoughtTogether.productDetails.quantities
                      .color,
                  fontSize:
                    data.frequentlyBoughtTogether.productDetails.quantities
                      .size + "px",
                }}
              >
                Qty:{" "}
                <span
                  style={{
                    ...textStyle,
                    fontSize:
                      data.frequentlyBoughtTogether.productDetails.quantities
                        .size + "px",
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
                fill={data.frequentlyBoughtTogether.productDetails.plusColor}
              />
            </svg>
          </div>
          <div
            class="sd-bundle-product-detail"
            style={{
              backgroundColor:
                data.frequentlyBoughtTogether.productDetails.productDetailsBox
                  .backgroundColor,
            }}
          >
            <div class="sd-bundle-product-inner">
              <div class="checkbox-wrapper-18">
                <div class="round">
                  <input type="checkbox" id="checkbox-19" checked />
                  <label for="checkbox-19"></label>
                </div>
              </div>
              <div
                class="sd-bundle-product-img"
                style={{
                  borderColor:
                    data.frequentlyBoughtTogether.productDetails.image
                      .borderColor,
                  borderRadius:
                    data.frequentlyBoughtTogether.productDetails.image
                      .borderRadius + "px",
                }}
              >
                <img src={productImg} width="80" height="80" />
              </div>
              <div class="sd-bundle-product-name">
                <h5
                  style={{
                    ...textStyle,
                    color:
                      data.frequentlyBoughtTogether.productDetails.title.color,
                    fontSize:
                      data.frequentlyBoughtTogether.productDetails.title
                        .fontSize + "px",
                  }}
                >
                  Smart Wireless Charger
                </h5>
                <h4
                  style={{
                    ...textStyle,
                    color:
                      data.frequentlyBoughtTogether.productDetails.price.color,
                    fontSize:
                      data.frequentlyBoughtTogether.productDetails.price
                        .fontSize + "px",
                  }}
                >
                  {" "}
                  Rs. 2500.00
                </h4>
                <select
                  style={{
                    ...textStyle,
                    backgroundColor:
                      data.frequentlyBoughtTogether.productDetails
                        .variantSelector.backgroundColor,
                    color:
                      data.frequentlyBoughtTogether.productDetails
                        .variantSelector.color,
                    width:
                      data.frequentlyBoughtTogether.productDetails
                        .variantSelector.width + "px",
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
                  color:
                    data.frequentlyBoughtTogether.productDetails.quantities
                      .color,
                  fontSize:
                    data.frequentlyBoughtTogether.productDetails.quantities
                      .size + "px",
                }}
              >
                Qty:{" "}
                <span
                  style={{
                    ...textStyle,
                    fontSize:
                      data.frequentlyBoughtTogether.productDetails.quantities
                        .size + "px",
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
                  color: data.frequentlyBoughtTogether.totalSection.color,
                  fontSize:
                    data.frequentlyBoughtTogether.totalSection.fontSize + "px",
                }}
              >
                Total
              </h4>
              <p
                style={{
                  ...textStyle,
                  color:
                    data.frequentlyBoughtTogether.totalSection.discountMessage
                      .color,
                  fontSize:
                    data.frequentlyBoughtTogether.totalSection.discountMessage
                      .size + "px",
                }}
              >
                Discount will be applied at checkout
              </p>
            </div>
            <div class="sd-total-amount">
              <h4
                style={{
                  ...textStyle,
                  color:
                    data.frequentlyBoughtTogether.totalSection.finalPrice.color,
                  fontSize:
                    data.frequentlyBoughtTogether.totalSection.finalPrice
                      .fontSize + "px",
                }}
              >
                Rs. 4750.00
              </h4>
              <h6
                style={{
                  ...textStyle,
                  color:
                    data.frequentlyBoughtTogether.totalSection.originalPrice
                      .color,
                  fontSize:
                    data.frequentlyBoughtTogether.totalSection.originalPrice
                      .fontSize + "px",
                }}
              >
                Rs. 5000.00
              </h6>
            </div>
          </div>
          <div class="sd-bundle-addto-cart">
            <button
              style={{
                ...textStyle,
                color: data.frequentlyBoughtTogether.button.color,
                fontSize: data.frequentlyBoughtTogether.button.fontSize + "px",
                backgroundColor:
                  data.frequentlyBoughtTogether.button.backgroundColor,
                borderColor: data.frequentlyBoughtTogether.button.borderColor,
                borderRadius: data.frequentlyBoughtTogether.button.borderRadius + "px",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div
          class="sd-bundle-main-column"
          style={{
            backgroundColor: data.frequentlyBoughtTogether.box.backgroundColor,
            borderColor: data.frequentlyBoughtTogether.box.borderColor,
            borderRadius: data.frequentlyBoughtTogether.box.borderRadius + "px",
          }}
        >
          {data.frequentlyBoughtTogether.optionalBadge.enable == true && (
            <div
              className="sd-badges-part"
              style={{
                backgroundColor:
                  data["frequentlyBoughtTogether"]["optionalBadge"][
                    "background"
                  ],
              }}
            >
              <span
                style={{
                  ...textStyle,
                  color:
                    data["frequentlyBoughtTogether"]["optionalBadge"]["color"],
                  fontSize:
                    data["frequentlyBoughtTogether"]["optionalBadge"][
                      "fontSize"
                    ] + "px",
                }}
              >
                {data.frequentlyBoughtTogether.optionalBadge.text}
              </span>
            </div>
          )}
           <div className={`sd-bundle-text-detail ${data.frequentlyBoughtTogether.optionalBadge.enable == true ? 'extra-padding' : ''}`}>
            <h4
              style={{
                ...textStyle,
                color: data.frequentlyBoughtTogether.title.color,
                fontSize: data.frequentlyBoughtTogether.title.fontSize + "px",
                textAlign: data.frequentlyBoughtTogether.title.alignment,
                fontWeight: data.frequentlyBoughtTogether.title.titleBold,
              }}
            >
              Frequently bought together
            </h4>
            <p
              style={{
                ...textStyle,
                color: data.frequentlyBoughtTogether.title.descriptionColor,
                fontSize:
                  data.frequentlyBoughtTogether.title.descriptionFontSize +
                  "px",
                fontWeight: data.frequentlyBoughtTogether.title.descriptionBold,
                textAlign: data.frequentlyBoughtTogether.title.alignment,
              }}
            >
              Buy and save 5%
            </p>
            <div class="sd-show-selected-product-item">
              <div
                class="sd-bundle-product-img"
                style={{
                  borderColor:
                    data.frequentlyBoughtTogether.productDetails.image
                      .borderColor,
                  borderRadius:
                    data.frequentlyBoughtTogether.productDetails.image
                      .borderRadius + "px",
                }}
              >
                <img src={productImg} width="80" height="80" />
              </div>
              <div class="plus-selectedIcon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
                    fill={data.frequentlyBoughtTogether.productDetails.plusColor}
                  />
                </svg>
              </div>
              <div
                class="sd-bundle-product-img"
                style={{
                  borderColor:
                    data.frequentlyBoughtTogether.productDetails.image
                      .borderColor,
                  borderRadius:
                    data.frequentlyBoughtTogether.productDetails.image
                      .borderRadius + "px",
                }}
              >
                <img src={productImg} width="80" height="80" />
              </div>
            </div>
          </div>

          <div
            class="sd-bundle-product-detail"
            style={{
              backgroundColor:
                data.frequentlyBoughtTogether.productDetails.productDetailsBox
                  .backgroundColor,
            }}
          >
            <div class="sd-bundle-product-inner">
              <div class="checkbox-wrapper-18">
                <div class="round">
                  <input type="checkbox" id="checkbox-18" checked />
                  <label for="checkbox-18"></label>
                </div>
              </div>

              <div class="sd-bundle-product-name">
                <h5
                  style={{
                    ...textStyle,
                    color:
                      data.frequentlyBoughtTogether.productDetails.title.color,
                    fontSize:
                      data.frequentlyBoughtTogether.productDetails.title
                        .fontSize + "px",
                  }}
                >
                  Smart Wireless Charger
                </h5>
                <h4
                  style={{
                    ...textStyle,
                    color:
                      data.frequentlyBoughtTogether.productDetails.price.color,
                    fontSize:
                      data.frequentlyBoughtTogether.productDetails.price
                        .fontSize + "px",
                  }}
                >
                  Rs. 2500.00
                </h4>
                <select
                  style={{
                    ...textStyle,
                    backgroundColor:
                      data.frequentlyBoughtTogether.productDetails
                        .variantSelector.backgroundColor,
                    color:
                      data.frequentlyBoughtTogether.productDetails
                        .variantSelector.color,
                    width:
                      data.frequentlyBoughtTogether.productDetails
                        .variantSelector.width + "px",
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
                  color:
                    data.frequentlyBoughtTogether.productDetails.quantities
                      .color,
                  fontSize:
                    data.frequentlyBoughtTogether.productDetails.quantities
                      .size + "px",
                }}
              >
                Qty:{" "}
                <span
                  style={{
                    ...textStyle,
                    fontSize:
                      data.frequentlyBoughtTogether.productDetails.quantities
                        .size + "px",
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
                fill={data.frequentlyBoughtTogether.productDetails.plusColor}
              />
            </svg>
          </div>
          <div
            class="sd-bundle-product-detail"
            style={{
              backgroundColor:
                data.frequentlyBoughtTogether.productDetails.productDetailsBox
                  .backgroundColor,
            }}
          >
            <div class="sd-bundle-product-inner">
              <div class="checkbox-wrapper-18">
                <div class="round">
                  <input type="checkbox" id="checkbox-19" checked />
                  <label for="checkbox-19"></label>
                </div>
              </div>
              <div class="sd-bundle-product-name">
                <h5
                  style={{
                    ...textStyle,
                    color:
                      data.frequentlyBoughtTogether.productDetails.title.color,
                    fontSize:
                      data.frequentlyBoughtTogether.productDetails.title
                        .fontSize + "px",
                  }}
                >
                  Smart Wireless Charger
                </h5>
                <h4
                  style={{
                    ...textStyle,
                    color:
                      data.frequentlyBoughtTogether.productDetails.price.color,
                    fontSize:
                      data.frequentlyBoughtTogether.productDetails.price
                        .fontSize + "px",
                  }}
                >
                  Rs. 2500.00
                </h4>
                <select
                  style={{
                    ...textStyle,
                    backgroundColor:
                      data.frequentlyBoughtTogether.productDetails
                        .variantSelector.backgroundColor,
                    color:
                      data.frequentlyBoughtTogether.productDetails
                        .variantSelector.color,
                    width:
                      data.frequentlyBoughtTogether.productDetails
                        .variantSelector.width + "px",
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
                  color:
                    data.frequentlyBoughtTogether.productDetails.quantities
                      .color,
                  fontSize:
                    data.frequentlyBoughtTogether.productDetails.quantities
                      .size + "px",
                }}
              >
                Qty:{" "}
                <span
                  style={{
                    ...textStyle,
                    fontSize:
                      data.frequentlyBoughtTogether.productDetails.quantities
                        .size + "px",
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
                  color: data.frequentlyBoughtTogether.totalSection.color,
                  fontSize:
                    data.frequentlyBoughtTogether.totalSection.fontSize + "px",
                }}
              >
                Total
              </h4>
              <p
                style={{
                  ...textStyle,
                  color:
                    data.frequentlyBoughtTogether.totalSection.discountMessage
                      .color,
                  fontSize:
                    data.frequentlyBoughtTogether.totalSection.discountMessage
                      .size + "px",
                }}
              >
                Discount will be applied at checkout
              </p>
            </div>
            <div class="sd-total-amount">
              <h4
                style={{
                  ...textStyle,
                  color:
                    data.frequentlyBoughtTogether.totalSection.finalPrice.color,
                  fontSize:
                    data.frequentlyBoughtTogether.totalSection.finalPrice
                      .fontSize + "px",
                }}
              >
                Rs. 4,750.00
              </h4>
              <h6
                style={{
                  ...textStyle,
                  color:
                    data.frequentlyBoughtTogether.totalSection.originalPrice
                      .color,
                  fontSize:
                    data.frequentlyBoughtTogether.totalSection.originalPrice
                      .fontSize + "px",
                }}
              >
                Rs. 5,000.00
              </h6>
            </div>
          </div>
          <div class="sd-bundle-addto-cart">
            <button
              style={{
                ...textStyle,
                color: data.frequentlyBoughtTogether.button.color,
                fontSize: data.frequentlyBoughtTogether.button.fontSize + "px",
                backgroundColor:
                  data.frequentlyBoughtTogether.button.backgroundColor,
                borderColor: data.frequentlyBoughtTogether.button.borderColor,
                borderRadius: data.frequentlyBoughtTogether.button.borderRadius +"px",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomizationFBt;
