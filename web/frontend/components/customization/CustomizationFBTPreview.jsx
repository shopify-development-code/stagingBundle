import { Button } from "antd";
import pic from "../../assets/image2.png";
import { PlusOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { Fragment } from "react";
import productImg from "../../assets/product.png";

const CustomizationFBt = ({ data }) => {
  const textStyle = {
    fontFamily: `${data?.frequentlyBoughtTogether?.box?.fontFamily || 'inherit'}`,
};


  return (
    <>
      {data?.frequentlyBoughtTogether?.design === "modern" ? (
        <div
          className="sd-bundle-main-column"
          style={{
            backgroundColor: data?.frequentlyBoughtTogether?.box?.backgroundColor,
            borderColor: data?.frequentlyBoughtTogether?.box?.borderColor,
            borderRadius: `${data?.frequentlyBoughtTogether?.box?.borderRadius || 12}px`,
        }}
        >
            <div
              className="sd-badges-part"
              style={{
                backgroundColor: data?.frequentlyBoughtTogether?.optionalBadge?.background,
            }}            
            >
              <span
               style={{
                ...textStyle,
                color: data?.frequentlyBoughtTogether?.optionalBadge?.color,
                fontSize: `${data?.frequentlyBoughtTogether?.optionalBadge?.fontSize || 12}px`,
            }}            
              >
                5% Off
              </span>
            </div>
              {/* <div className="sd-bundle-text-detail"> */}
          <div className={`sd-bundle-text-detail extra-padding`}>
            <h4
              style={{
                ...textStyle,
                color: data?.frequentlyBoughtTogether?.title?.color,
                fontSize: `${data?.frequentlyBoughtTogether?.title?.fontSize || 12}px`,
                textAlign: data?.frequentlyBoughtTogether?.title?.alignment,
                fontWeight: data?.frequentlyBoughtTogether?.title?.titleBold,
            }}            
            >
              Frequently bought together
            </h4>
            <p
              style={{
                ...textStyle,
                color: data?.frequentlyBoughtTogether?.title?.descriptionColor,
                fontSize: `${data?.frequentlyBoughtTogether?.title?.descriptionFontSize || 12}px`,
                fontWeight: data?.frequentlyBoughtTogether?.title?.descriptionBold,
                textAlign: data?.frequentlyBoughtTogether?.title?.alignment,
            }}            
            >
              Buy and save 5%
            </p>
          </div>

          <div
            className="sd-bundle-product-detail"
            style={{
              backgroundColor: data?.frequentlyBoughtTogether?.productDetails?.productDetailsBox?.backgroundColor,
          }}          
          >
            <div className="sd-bundle-product-inner">
              <div className="checkbox-wrapper-18">
                <div className="round">
                  <input type="checkbox" id="checkbox-18" defaultChecked />
                  <label htmlFor="checkbox-18"></label>
                </div>
              </div>
              <div
                className="sd-bundle-product-img"
                style={{
                  borderColor: data?.frequentlyBoughtTogether?.productDetails?.image?.borderColor,
                  borderRadius: `${data?.frequentlyBoughtTogether?.productDetails?.image?.borderRadius || 12}px`,
              }}              
              >
                <img src={productImg} width="80" height="80" />
              </div>
              <div className="sd-bundle-product-name">
                <h5
                  style={{
                    ...textStyle,
                    color: data?.frequentlyBoughtTogether?.productDetails?.title?.color,
                    fontSize: `${data?.frequentlyBoughtTogether?.productDetails?.title?.fontSize || 12}px`,
                }}                
                >
                  Smart Wireless Charger
                </h5>
                <h4
                  style={{
                    ...textStyle,
                    color: data?.frequentlyBoughtTogether?.productDetails?.price?.color,
                    fontSize: `${data?.frequentlyBoughtTogether?.productDetails?.price?.fontSize || 12}px`,
                }}                
                >
                  {" "}
                  Rs. 2500.00
                </h4>
                <select
                  style={{
                    ...textStyle,
                    backgroundColor: data?.frequentlyBoughtTogether?.productDetails?.variantSelector?.backgroundColor,
                    color: data?.frequentlyBoughtTogether?.productDetails?.variantSelector?.color,
                    width: `${data?.frequentlyBoughtTogether?.productDetails?.variantSelector?.width || 160}px`,
                }}                
                >
                  <option style={{ ...textStyle }}>Medium</option>
                  <option style={{ ...textStyle }}>Small</option>
                </select>
              </div>
            </div>
            <div className="sd-bundle-product-quantity">
              <h6
                style={{
                  ...textStyle,
                  color: data?.frequentlyBoughtTogether?.productDetails?.quantities?.color,
                  fontSize: `${data?.frequentlyBoughtTogether?.productDetails?.quantities?.size || 12}px`,
              }}              
              >
                Qty:{" "}
                <span
                  style={{
                    ...textStyle,
                    fontSize: `${data?.frequentlyBoughtTogether?.productDetails?.quantities?.size || 12}px`,
                }}                
                >
                  1
                </span>
              </h6>
            </div>
          </div>
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
                fill={data?.frequentlyBoughtTogether?.productDetails?.plusColor}
              />
            </svg>
          </div>
          <div
            className="sd-bundle-product-detail"
            style={{
              backgroundColor: data?.frequentlyBoughtTogether?.productDetails?.productDetailsBox?.backgroundColor,
          }}          
          >
            <div className="sd-bundle-product-inner">
              <div className="checkbox-wrapper-18">
                <div className="round">
                  <input type="checkbox" id="checkbox-19" defaultChecked />
                  <label htmlFor="checkbox-19"></label>
                </div>
              </div>
              <div
                className="sd-bundle-product-img"
                style={{
                  borderColor: data?.frequentlyBoughtTogether?.productDetails?.image?.borderColor,
                  borderRadius: `${data?.frequentlyBoughtTogether?.productDetails?.image?.borderRadius || 12}px`,
              }}              
              >
                <img src={productImg} width="80" height="80" />
              </div>
              <div className="sd-bundle-product-name">
                <h5
                 style={{
                  ...textStyle,
                  color: data?.frequentlyBoughtTogether?.productDetails?.title?.color,
                  fontSize: `${data?.frequentlyBoughtTogether?.productDetails?.title?.fontSize || 12}px`,
              }}              
                >
                  Smart Wireless Charger
                </h5>
                <h4
                  style={{
                    ...textStyle,
                    color: data?.frequentlyBoughtTogether?.productDetails?.price?.color,
                    fontSize: `${data?.frequentlyBoughtTogether?.productDetails?.price?.fontSize || 12}px`,
                }}
                >
                  {" "}
                  Rs. 2500.00
                </h4>
                <select
                  style={{
                    ...textStyle,
                    backgroundColor: data?.frequentlyBoughtTogether?.productDetails?.variantSelector?.backgroundColor,
                    color: data?.frequentlyBoughtTogether?.productDetails?.variantSelector?.color,
                    width: `${data?.frequentlyBoughtTogether?.productDetails?.variantSelector?.width || 160}px`,
                }}                
                >
                  <option style={{ ...textStyle }}>Medium</option>
                  <option style={{ ...textStyle }}>Small</option>
                </select>
              </div>
            </div>
            <div className="sd-bundle-product-quantity">
              <h6
               style={{
                ...textStyle,
                color: data?.frequentlyBoughtTogether?.productDetails?.quantities?.color,
                fontSize: `${data?.frequentlyBoughtTogether?.productDetails?.quantities?.size || 12}px`,
            }}
              >
                Qty:{" "}
                <span
                  style={{
                    ...textStyle,
                    fontSize: `${data?.frequentlyBoughtTogether?.productDetails?.quantities?.size || 12}px`,
                }}                
                >
                  1
                </span>
              </h6>
            </div>
          </div>
          <div className="sd-product-bundle-total">
            <div className="sd-total-desc">
              <h4
                style={{
                  ...textStyle,
                  color: data?.frequentlyBoughtTogether?.totalSection?.color,
                  fontSize: `${data?.frequentlyBoughtTogether?.totalSection?.fontSize || 12}px`,
              }}              
              >
                Total
              </h4>
              <p
                style={{
                  ...textStyle,
                  color: data?.frequentlyBoughtTogether?.totalSection?.discountMessage?.color,
                  fontSize: `${data?.frequentlyBoughtTogether?.totalSection?.discountMessage?.size || 12}px`,
              }}              
              >
                Discount will be applied at checkout
              </p>
            </div>
            <div className="sd-total-amount">
              <h4
                style={{
                  ...textStyle,
                  color: data?.frequentlyBoughtTogether?.totalSection?.finalPrice?.color,
                  fontSize: `${data?.frequentlyBoughtTogether?.totalSection?.finalPrice?.fontSize || 12}px`,
              }}              
              >
                Rs. 4750.00
              </h4>
              <h6
               style={{
                ...textStyle,
                color: data?.frequentlyBoughtTogether?.totalSection?.originalPrice?.color,
                fontSize: `${data?.frequentlyBoughtTogether?.totalSection?.originalPrice?.fontSize || 12}px`,
            }}            
              >
                Rs. 5000.00
              </h6>
            </div>
          </div>
          <div className="sd-bundle-addto-cart">
            <button
              style={{
                ...textStyle,
                color: data?.frequentlyBoughtTogether?.button?.color,
                fontSize: `${data?.frequentlyBoughtTogether?.button?.fontSize || 12}px`,
                backgroundColor: data?.frequentlyBoughtTogether?.button?.backgroundColor,
                borderColor: data?.frequentlyBoughtTogether?.button?.borderColor,
                borderRadius: `${data?.frequentlyBoughtTogether?.button?.borderRadius || 12}px`,
            }}            
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div
          className="sd-bundle-main-column"
          style={{
            backgroundColor: data?.frequentlyBoughtTogether?.box?.backgroundColor,
            borderColor: data?.frequentlyBoughtTogether?.box?.borderColor,
            borderRadius: `${data?.frequentlyBoughtTogether?.box?.borderRadius || 12}px`,
        }}        
        >
            <div
              className="sd-badges-part"
              style={{
                backgroundColor: data?.frequentlyBoughtTogether?.optionalBadge?.background,
            }}            
            >
              <span
                style={{
                  ...textStyle,
                  color: data?.frequentlyBoughtTogether?.optionalBadge?.color,
                  fontSize: `${data?.frequentlyBoughtTogether?.optionalBadge?.fontSize || 12}px`,
              }}              
              >
                5% Off
              </span>
            </div>
           <div className={`sd-bundle-text-detail extra-padding`}>
            <h4
              style={{
                ...textStyle,
                color: data?.frequentlyBoughtTogether?.title?.color,
                fontSize: `${data?.frequentlyBoughtTogether?.title?.fontSize || 12}px`,
                textAlign: data?.frequentlyBoughtTogether?.title?.alignment,
                fontWeight: data?.frequentlyBoughtTogether?.title?.titleBold,
            }}            
            >
              Frequently bought together
            </h4>
            <p
              style={{
                ...textStyle,
                color: data?.frequentlyBoughtTogether?.title?.descriptionColor,
                fontSize: `${data?.frequentlyBoughtTogether?.title?.descriptionFontSize || 12}px`,
                fontWeight: data?.frequentlyBoughtTogether?.title?.descriptionBold,
                textAlign: data?.frequentlyBoughtTogether?.title?.alignment,
            }}            
            >
              Buy and save 5%
            </p>
            <div className="sd-show-selected-product-item">
              <div
                className="sd-bundle-product-img"
                style={{
                  borderColor: data?.frequentlyBoughtTogether?.productDetails?.image?.borderColor,
                  borderRadius: `${data?.frequentlyBoughtTogether?.productDetails?.image?.borderRadius || 12}px`,
              }}              
              >
                <img src={productImg} width="80" height="80" />
              </div>
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
                    fill={data?.frequentlyBoughtTogether?.productDetails?.plusColor}
                  />
                </svg>
              </div>
              <div
                className="sd-bundle-product-img"
                style={{
                  borderColor: data?.frequentlyBoughtTogether?.productDetails?.image?.borderColor,
                  borderRadius: `${data?.frequentlyBoughtTogether?.productDetails?.image?.borderRadius || 12}px`,
              }}              
              >
                <img src={productImg} width="80" height="80" />
              </div>
            </div>
          </div>

          <div
            className="sd-bundle-product-detail"
            style={{
              backgroundColor: data?.frequentlyBoughtTogether?.productDetails?.productDetailsBox?.backgroundColor,
          }}          
          >
            <div className="sd-bundle-product-inner">
              <div className="checkbox-wrapper-18">
                <div className="round">
                  <input type="checkbox" id="checkbox-18" defaultChecked />
                  <label htmlFor="checkbox-18"></label>
                </div>
              </div>

              <div className="sd-bundle-product-name">
                <h5
                  style={{
                    ...textStyle,
                    color: data?.frequentlyBoughtTogether?.productDetails?.title?.color,
                    fontSize: `${data?.frequentlyBoughtTogether?.productDetails?.title?.fontSize || 12}px`,
                }}                
                >
                  Smart Wireless Charger
                </h5>
                <h4
                 style={{
                  ...textStyle,
                  color: data?.frequentlyBoughtTogether?.productDetails?.price?.color,
                  fontSize: `${data?.frequentlyBoughtTogether?.productDetails?.price?.fontSize || 12}px`,
              }}              
                >
                  Rs. 2500.00
                </h4>
                <select
                  style={{
                    ...textStyle,
                    backgroundColor: data?.frequentlyBoughtTogether?.productDetails?.variantSelector?.backgroundColor,
                    color: data?.frequentlyBoughtTogether?.productDetails?.variantSelector?.color,
                    width: `${data?.frequentlyBoughtTogether?.productDetails?.variantSelector?.width || 160}px`,
                }}                
                >
                  <option style={{ ...textStyle }}>Medium</option>
                  <option style={{ ...textStyle }}>Small</option>
                </select>
              </div>
            </div>
            <div className="sd-bundle-product-quantity">
              <h6
                style={{
                  ...textStyle,
                  color: data?.frequentlyBoughtTogether?.productDetails?.quantities?.color,
                  fontSize: `${data?.frequentlyBoughtTogether?.productDetails?.quantities?.size || 12}px`,
              }}              
              >
                Qty:{" "}
                <span
                  style={{
                    ...textStyle,
                    fontSize: `${data?.frequentlyBoughtTogether?.productDetails?.quantities?.size || 12}px`,
                }}                
                >
                  1
                </span>
              </h6>
            </div>
          </div>
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
                fill={data?.frequentlyBoughtTogether?.productDetails?.plusColor}
              />
            </svg>
          </div>
          <div
            className="sd-bundle-product-detail"
            style={{
              backgroundColor: data?.frequentlyBoughtTogether?.productDetails?.productDetailsBox?.backgroundColor,
            }}            
          >
            <div className="sd-bundle-product-inner">
              <div className="checkbox-wrapper-18">
                <div className="round">
                  <input type="checkbox" id="checkbox-19" defaultChecked />
                  <label htmlFor="checkbox-19"></label>
                </div>
              </div>
              <div className="sd-bundle-product-name">
                <h5
                  style={{
                    ...textStyle,
                    color: data?.frequentlyBoughtTogether?.productDetails?.title?.color,
                    fontSize: (data?.frequentlyBoughtTogether?.productDetails?.title?.fontSize || 12) + "px",
                  }}                  
                >
                  Smart Wireless Charger
                </h5>
                <h4
                  style={{
                    ...textStyle,
                    color: data?.frequentlyBoughtTogether?.productDetails?.price?.color,
                    fontSize: (data?.frequentlyBoughtTogether?.productDetails?.price?.fontSize || 12) + "px",
                  }}                  
                >
                  Rs. 2500.00
                </h4>
                <select
                  style={{
                    ...textStyle,
                    backgroundColor: data?.frequentlyBoughtTogether?.productDetails?.variantSelector?.backgroundColor,
                    color: data?.frequentlyBoughtTogether?.productDetails?.variantSelector?.color,
                    width: (data?.frequentlyBoughtTogether?.productDetails?.variantSelector?.width || 160) + "px",
                  }}                  
                >
                  <option style={{ ...textStyle }}>Medium</option>
                  <option style={{ ...textStyle }}>Small</option>
                </select>
              </div>
            </div>
            <div className="sd-bundle-product-quantity">
              <h6
                style={{
                  ...textStyle,
                  color: data?.frequentlyBoughtTogether?.productDetails?.quantities?.color,
                  fontSize: (data?.frequentlyBoughtTogether?.productDetails?.quantities?.size || 12) + "px",
                }}                
              >
                Qty:{" "}
                <span
                  style={{
                    ...textStyle,
                    fontSize: (data?.frequentlyBoughtTogether?.productDetails?.quantities?.size || 12) + "px",
                  }}                  
                >
                  1
                </span>
              </h6>
            </div>
          </div>
          <div className="sd-product-bundle-total">
            <div className="sd-total-desc">
              <h4
                style={{
                  ...textStyle,
                  color: data?.frequentlyBoughtTogether?.totalSection?.color,
                  fontSize: (data?.frequentlyBoughtTogether?.totalSection?.fontSize || 12) + "px",
                }}                
              >
                Total
              </h4>
              <p
                style={{
                  ...textStyle,
                  color: data?.frequentlyBoughtTogether?.totalSection?.discountMessage?.color,
                  fontSize: (data?.frequentlyBoughtTogether?.totalSection?.discountMessage?.size || 12) + "px",
                }}                
              >
                Discount will be applied at checkout
              </p>
            </div>
            <div className="sd-total-amount">
              <h4
                style={{
                  ...textStyle,
                  color: data?.frequentlyBoughtTogether?.totalSection?.finalPrice?.color,
                  fontSize: (data?.frequentlyBoughtTogether?.totalSection?.finalPrice?.fontSize || 12) + "px",
                }}                
              >
                Rs. 4,750.00
              </h4>
              <h6
                style={{
                  ...textStyle,
                  color: data?.frequentlyBoughtTogether?.totalSection?.originalPrice?.color,
                  fontSize: (data?.frequentlyBoughtTogether?.totalSection?.originalPrice?.fontSize || 12) + "px",
                }}                
              >
                Rs. 5,000.00
              </h6>
            </div>
          </div>
          <div className="sd-bundle-addto-cart">
            <button
              style={{
                ...textStyle,
                color: data?.frequentlyBoughtTogether?.button?.color,
                fontSize: (data?.frequentlyBoughtTogether?.button?.fontSize || 12) + "px",
                backgroundColor: data?.frequentlyBoughtTogether?.button?.backgroundColor,
                borderColor: data?.frequentlyBoughtTogether?.button?.borderColor,
                borderRadius: (data?.frequentlyBoughtTogether?.button?.borderRadius || 12) + "px",
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
