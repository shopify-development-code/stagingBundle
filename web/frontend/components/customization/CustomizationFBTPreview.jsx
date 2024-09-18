import { Button } from "antd";
import pic from "../../assets/image2.png";
import { PlusOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { Fragment } from "react";
import productImg from "../../assets/product.png";

const CustomizationFBt = ({ data }) => {
  let dummyProductsArray = [
    { name: "Blue Gem Stone", price: 500 },
    { name: "Fog Spray", price: 200 },
    { name: "Dark Chocolate", price: 100 },
    { name: "Denim Shirt", price: 400 },
  ];

  let dummyTotalCartHtml = (
    <div>
      <div className="fbt-bundle-total-common">
        <div>Total</div>
        <div className="fbt-bundle-customization-total-common">
          {" "}
          <del>Rs. 1200.00</del> <span> Rs. 1,055.00 </span>{" "}
        </div>
      </div>
      <Button className="sd_inputButton fbt-addto-cart-button">
        Add selected to cart
      </Button>
    </div>
  );

  return (
    <>
      {/* <div className="sd_frequency_moderndesign_mainColumn">
        {data?.frequentlyBoughtTogether?.design === "classic" ? (
          <>
            <div className="sd-preview-wrapper-common sd-productCustom-preview fbt-customization-specific">
              <p>Frequently bought together</p>
              <div className="designClassic">
                {dummyProductsArray.map((item, index) => (
                  <>
                    <div
                      key={index}
                      className="designChildDiv sd_bundle_thumbnailImg"
                    >
                      <img src={pic} />
                    </div>

                    {index != dummyProductsArray.length - 1 && (
                      <div className="iconDesign">
                        <PlusOutlined />
                      </div>
                    )}
                  </>
                ))}
              </div>

              <div className="sd-preview-wrapper-common sd-productBundle-preview-specific">
                {dummyProductsArray.map((item, index) => (
                  <div
                    className="customization-fbt-classic-item-container"
                    key={index}
                  >
                    <div className="customization-fbt-classic-item">
                      <div>
                        <input type="checkbox" checked readOnly />
                      </div>
                      <div className="customization-fbt-classic-item-titlePrice">
                        <p>{item?.name}</p>
                        <p>Rs. {item.price}</p>
                      </div>
                    </div>
                    <div className="sd_selectd_vertical">
                      <select disabled>
                        <option>Select Variant</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              {dummyTotalCartHtml}
            </div>
          </>
        ) : (
          <>
            <div className="sd-preview-wrapper-common sd-productCustom-preview fbt-customization-specific">
              <p>Frequently bought together</p>
              <div>
                {dummyProductsArray.map((item, index) => (
                  <Fragment key={index}>
                    <div className="design designChildDiv sd-productCustom-previewBottom">
                      <div className="designChildDiv">
                        <input type="checkbox" checked readOnly />
                      </div>
                      <div className="designChildDiv sd_bundle_thumbnailImg">
                        <img src={pic} width={95} />
                      </div>
                      <div>
                        <p>{item.name}</p>
                        <p>Rs.{item.price}</p>
                      </div>
                    </div>
                    <div className="sd_selectd_vertical">
                      <select disabled>
                        <option>Select Variant</option>
                      </select>
                    </div>
                  </Fragment>
                ))}
                {dummyTotalCartHtml}
              </div>
            </div>
          </>
        )}
      </div> */}

      {data?.frequentlyBoughtTogether?.design === "modern" ? (
        <div class="sd-bundle-main-column">
          <div class="sd-bundle-text-detail">
            <h4>Frequently bought together</h4>
            <p>Buy and save 5%</p>
          </div>

          <div class="sd-bundle-product-detail">
            <div class="sd-bundle-product-inner">
              <div class="checkbox-wrapper-18">
                <div class="round">
                  <input type="checkbox" id="checkbox-18" />
                  <label for="checkbox-18"></label>
                </div>
              </div>
              <div class="sd-bundle-product-img">
                <img src={productImg} width="80" height="80" />
              </div>
              <div class="sd-bundle-product-name">
                <h5>Smart Wireless Charger</h5>
                <h4>Rs. 2500.00</h4>
                <select disabled>
                  <option>Medium</option>
                  <option>Small</option>
                </select>
              </div>
            </div>
            <div class="sd-bundle-product-quantity">
              <h6>
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
                fill="#5F5F5F"
              />
            </svg>
          </div>
          <div class="sd-bundle-product-detail">
            <div class="sd-bundle-product-inner">
              <div class="checkbox-wrapper-18">
                <div class="round">
                  <input type="checkbox" id="checkbox-19" checked />
                  <label for="checkbox-19"></label>
                </div>
              </div>
              <div class="sd-bundle-product-img">
                <img src={productImg} width="80" height="80" />
              </div>
              <div class="sd-bundle-product-name">
                <h5>Smart Wireless Charger</h5>
                <h4>Rs. 2500.00</h4>
                <select disabled>
                  <option>Medium</option>
                  <option>Small</option>
                </select>
              </div>
            </div>
            <div class="sd-bundle-product-quantity">
              <h6>
                Qty: <span>1</span>
              </h6>
            </div>
          </div>
          <div class="sd-product-bundle-total">
            <div class="sd-total-desc">
              <h4>Total</h4>
              <p>Discount will be applied at checkout</p>
            </div>
            <div class="sd-total-amount">
              <h4>Rs. 4750.00</h4>
              <h6>Rs. 5000.00</h6>
            </div>
          </div>
          <div class="sd-bundle-addto-cart">
            <button>Add to Cart</button>
          </div>
        </div>
      ) : (
        <div class="sd-bundle-main-column">
          <div class="sd-bundle-text-detail">
            <h4>Frequently bought together</h4>
            <p>Buy and save 5%</p>
            <div class="sd-show-selected-product-item">
              <div class="sd-bundle-product-img">
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
                    fill="#5F5F5F"
                  />
                </svg>
              </div>
              <div class="sd-bundle-product-img">
                <img src={productImg} width="80" height="80" />
              </div>
            </div>
          </div>

          <div class="sd-bundle-product-detail">
            <div class="sd-bundle-product-inner">
              <div class="checkbox-wrapper-18">
                <div class="round">
                  <input type="checkbox" id="checkbox-18" checked />
                  <label for="checkbox-18"></label>
                </div>
              </div>

              <div class="sd-bundle-product-name">
                <h5>Smart Wireless Charger</h5>
                <h4>Rs. 2500.00</h4>
                <select disabled>
                  <option>Medium</option>
                  <option>Small</option>
                </select>
              </div>
            </div>
            <div class="sd-bundle-product-quantity">
              <h6>
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
                fill="#5F5F5F"
              />
            </svg>
          </div>
          <div class="sd-bundle-product-detail">
            <div class="sd-bundle-product-inner">
              <div class="checkbox-wrapper-18">
                <div class="round">
                  <input type="checkbox" id="checkbox-19" checked />
                  <label for="checkbox-19"></label>
                </div>
              </div>
              <div class="sd-bundle-product-name">
                <h5>Smart Wireless Charger</h5>
                <h4>Rs. 2500.00</h4>
                <select disabled>
                  <option>Medium</option>
                  <option>Small</option>
                </select>
              </div>
            </div>
            <div class="sd-bundle-product-quantity">
              <h6>
                Qty: <span>1</span>
              </h6>
            </div>
          </div>
          <div class="sd-product-bundle-total">
            <div class="sd-total-desc">
              <h4>Total</h4>
              <p>Discount will be applied at checkout</p>
            </div>
            <div class="sd-total-amount">
              <h4>Rs. 4,750.00</h4>
              <h6>Rs. 5,000.00</h6>
            </div>
          </div>
          <div class="sd-bundle-addto-cart">
            <button>Add to Cart</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomizationFBt;
