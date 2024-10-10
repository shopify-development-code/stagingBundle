import Title from "antd/es/typography/Title";
import pic from "../../assets/image2.png";
import { PlusOutlined } from "@ant-design/icons";
import productImg from "../../assets/product.png";

const CustomizationProductMixMatchPreview = ({ data }) => {
  console.log("check data ****", data);
  const textStyle = {
    fontFamily: `${data?.productMixMatch?.box?.fontFamily || 'inherit'}`
  };
  
  return (
    <>
      <div
        class="sd-bundle-main-column"
        style={{
          backgroundColor: data?.productMixMatch?.box?.backgroundColor,
          borderColor: data?.productMixMatch?.box?.borderColor,
          borderRadius: `${data?.productMixMatch?.box?.borderRadius }px`,
          border: `${data?.productMixMatch?.box?.thickness }px solid ${data?.buyXgetY?.box?.borderColor || 'transparent'}`
        }}        
      >
        <div class="sd-bundle-text-detail">
          <h4
            style={{
              ...textStyle,
              color: data?.productMixMatch?.title?.color,
              fontSize: `${data?.productMixMatch?.title?.fontSize || 16}px`,
              textAlign: data?.productMixMatch?.title?.alignment,
              fontWeight: data?.productMixMatch?.title?.titleBold
            }}            
          >
            Product Mix & Match Bundle
          </h4>
          <p
            style={{
              ...textStyle,
              color: data?.productMixMatch?.title?.descriptionColor,
              fontSize: `${data?.productMixMatch?.title?.descriptionFontSize || 16}px`,
              fontWeight: data?.productMixMatch?.title?.descriptionBold,
              textAlign: data?.productMixMatch?.title?.alignment
            }}            
          >
            Buy this bundle and save more!
          </p>
        </div>

        <div class="sd-show-selected-items-row">
          <div class="sd-show-items">
            <span class="active" style={{ ...textStyle }}>
              2 items|5% off
            </span>
            <span style={{ ...textStyle }}>3 items|5% off</span>
            <span style={{ ...textStyle }}>5 items|5% off</span>
          </div>
          <div class="sd-have-selected">
            <h5
              style={{
                ...textStyle,
                fontSize: `${data?.productMixMatch?.orderOverview?.selectedText?.fontSize || 16}px`,
                color: data?.productMixMatch?.orderOverview?.selectedText?.color,
                textAlign: data?.productMixMatch?.orderOverview?.alignment
              }}              
            >
              You have selected 2 items
            </h5>
            <p
              style={{
                ...textStyle,
                fontSize: `${data?.productMixMatch?.orderOverview?.discountText?.fontSize || 16}px`,
                color: data?.productMixMatch?.orderOverview?.discountText?.color,
                textAlign: data?.productMixMatch?.orderOverview?.alignment
              }}              
            >
              5% discount is applied on the selected products.
            </p>
          </div>
          <div class="sd-show-selected-product-item">
            <div
              class="sd-selected-product-itemImg"
              style={{
                border: "1px solid white",
                borderColor: data?.productMixMatch?.productDetails?.image?.borderColor,
                borderRadius: `${data?.productMixMatch?.productDetails?.image?.borderRadius }px`
              }}              
            >
              <img src={productImg} alt="" />
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
                  fill={data?.productMixMatch?.productDetails?.plusColor}
                />
              </svg>
            </div>
            <div
              class="sd-selected-product-itemImg"
              style={{
                border: "1px solid",
                borderColor: data?.productMixMatch?.productDetails?.image?.borderColor,
                borderRadius: `${data?.productMixMatch?.productDetails?.image?.borderRadius }px`
              }}              
            >
              <img src={productImg} alt="" />
            </div>
          </div>
        </div>

        <div class="sd-select-all-product">
          <div class="sd-checkbox-wrapper-21">
            <label
              class="sd-control sd-control--checkbox"
              style={{
                ...textStyle,
                color: data?.productMixMatch?.productDetails?.productDetailsBox?.allProductColor
              }}              
            >
              All Product
              <input type="checkbox" checked />
              <div class="sd-control-indicator"></div>
            </label>
          </div>
          <div class="sd-bundle-product-quantity">
            <h6
              style={{
                ...textStyle,
                color: data?.productMixMatch?.productDetails?.quantities?.color,
                fontSize: `${data?.productMixMatch?.productDetails?.quantities?.size || 16}px`
              }}              
            >
              Qty:{" "}
              <span
               style={{
                ...textStyle,
                fontSize: `${data?.productMixMatch?.productDetails?.quantities?.size || 16}px`
              }}              
              >
                2
              </span>
            </h6>
          </div>
        </div>

        <div
          class="sd-bundle-product-detail"
          style={{
            backgroundColor: data?.productMixMatch?.productDetails?.productDetailsBox?.backgroundColor 
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
                border: "1px solid white",
                borderColor: data?.productMixMatch?.productDetails?.image?.borderColor,
                borderRadius: `${data?.productMixMatch?.productDetails?.image?.borderRadius }px`
              }}              
            >
              <img src={productImg} width="80" height="80" />
            </div>
            <div class="sd-bundle-product-name">
              <h5
               style={{
                ...textStyle,
                color: data?.productMixMatch?.productDetails?.title?.color,
                fontSize: `${data?.productMixMatch?.productDetails?.title?.fontSize || 16}px`
              }}              
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  ...textStyle,
                  color: data?.productMixMatch?.productDetails?.price?.color,
                  fontSize: `${data?.productMixMatch?.productDetails?.price?.fontSize || 16}px`
                }}                
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  ...textStyle,
                  backgroundColor: data?.productMixMatch?.productDetails?.variantSelector?.backgroundColor ,
                  color: data?.productMixMatch?.productDetails?.variantSelector?.color,
                  borderColor: data?.productMixMatch?.productDetails?.variantSelector?.borderColor ,
                  width: `${data?.productMixMatch?.productDetails?.variantSelector?.width || 100}px`
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
                color: data?.productMixMatch?.productDetails?.quantities?.color,
                fontSize: `${data?.productMixMatch?.productDetails?.quantities?.size || 16}px`
              }}              
            >
              Qty:{" "}
              <span
                style={{
                  ...textStyle,
                  fontSize: `${data?.productMixMatch?.productDetails?.quantities?.size || 16}px`
                }}                
              >
                1
              </span>
            </h6>
          </div>
        </div>

        <div
          class="sd-bundle-product-detail"
          style={{
            backgroundColor: data?.productMixMatch?.productDetails?.productDetailsBox?.backgroundColor 
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
                border: "1px solid white",
                borderColor: data?.productMixMatch?.productDetails?.image?.borderColor,
                borderRadius: `${data?.productMixMatch?.productDetails?.image?.borderRadius }px`
              }}              
            >
              <img src={productImg} width="80" height="80" />
            </div>
            <div class="sd-bundle-product-name">
              <h5
                style={{
                  ...textStyle,
                  color: data?.productMixMatch?.productDetails?.title?.color,
                  fontSize: `${data?.productMixMatch?.productDetails?.title?.fontSize || 16}px`
                }}                 
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  ...textStyle,
                  color: data?.productMixMatch?.productDetails?.price?.color || 'inherit',
                  fontSize: `${data?.productMixMatch?.productDetails?.price?.fontSize || 15}px`
                }}                
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  ...textStyle,
                  backgroundColor:
                    data.productMixMatch?.productDetails?.variantSelector?.backgroundColor,
                  color:
                    data.productMixMatch?.productDetails?.variantSelector?.color,
                  borderColor:
                    data.productMixMatch?.productDetails?.variantSelector?.borderColor,
                  width:
                    (data.productMixMatch?.productDetails?.variantSelector?.width ?? 0) + "px",
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
                color: data.productMixMatch?.productDetails?.quantities?.color,
                fontSize: (data.productMixMatch?.productDetails?.quantities?.size ?? 0) + "px"
              }}              
            >
              Qty:{" "}
              <span
                style={{
                  ...textStyle,
                  fontSize: (data.productMixMatch?.productDetails?.quantities?.size ?? 0) + "px",
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
                color: data.productMixMatch?.totalSection?.color,
                fontSize: (data.productMixMatch?.totalSection?.fontSize ?? 0) + "px"
              }}              
            >
              Total
            </h4>
            <p
              style={{
                ...textStyle,
                color: data.productMixMatch?.totalSection?.discountMessage?.color,
                fontSize: (data.productMixMatch?.totalSection?.discountMessage?.size ?? 0) + "px"
              }} 
            >
              Discount will be applied at checkout
            </p>
          </div>
          <div class="sd-total-amount">
            <h4
              style={{
                ...textStyle,
                color: data.productMixMatch?.totalSection?.finalPrice?.color,
                fontSize: (data.productMixMatch?.totalSection?.finalPrice?.fontSize ?? 0) + "px",
              }}              
            >
              Rs. 4,750.00
            </h4>
            <h6
              style={{
                ...textStyle,
                color: data.productMixMatch?.totalSection?.originalPrice?.color,
                fontSize: (data.productMixMatch?.totalSection?.originalPrice?.fontSize ?? 0) + "px"
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
              color: data.productMixMatch?.totalSection?.originalPrice?.color,
              fontSize: (data.productMixMatch?.totalSection?.originalPrice?.fontSize ?? 0) + "px"
            }}            
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default CustomizationProductMixMatchPreview;
