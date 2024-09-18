import Title from "antd/es/typography/Title";
import pic from "../../assets/image2.png";
import { PlusOutlined } from "@ant-design/icons";
import productImg from "../../assets/product.png";

const CustomizationProductMixMatchPreview = ({ data }) => {
  console.log("check data ****", data);
  return (
    <>
      {/* <div
        className="sd-bundle-bundleSection-common sd-bundle-productBundle-preview"
        style={{
          backgroundColor: data.productMixMatch.box.backgroundColor,
          borderColor: data.productMixMatch.box.borderColor,
          borderRadius: data.productMixMatch.box.borderRadius + "px",
          border:
            data.productMixMatch.box.thickness +
            "px solid" +
            data.buyXgetY.box.borderColor,
        }}
      >
        {data.productMixMatch.button.position == "top" && (
          <button
            disabled
            style={{
              color: data.productMixMatch.button.color,
              fontSize: data.productMixMatch.button.fontSize + "px",
              backgroundColor: data.productMixMatch.button.backgroundColor,
            }}
          >
            Add selected to cart
          </button>
        )}

        <div
          className="sd-bundlematch_heading"
          style={{
            color: data.productMixMatch.title.color,
            fontSize: data.productMixMatch.title.fontSize + "px",
            textAlign: data.productMixMatch.title.alignment,
            fontWeight: data.productMixMatch.title.titleBold,
          }}
        >
          new product mix and match test test
        </div>

        <div
          style={{
            color: data.productMixMatch.title.descriptionColor,
            fontSize: data.productMixMatch.title.descriptionFontSize + "px",
            fontWeight: data.productMixMatch.title.descriptionBold,
          }}
        >
          At least 2 items should be selected
        </div>
        <hr />
        <div className="productMixMatchHeadBorder centerIntem">
          2+items|50% off
        </div>
        <div>
          <p>You have selected 2 items</p>
          <p>50% discount is applied on the selected products.</p>
        </div>
        <hr />
        <div>
          <div className="design sd_bundle_ sd_bundle_thumbnailImg_multiple">
            <div className="designChildDiv sd_bundle_thumbnailImg">
              <img
                style={{
                  border: "1px solid white",
                  borderColor:
                    data.productMixMatch.productDetails.image.borderColor,
                  borderRadius:
                    data.productMixMatch.productDetails.image.borderRadius +
                    "px",
                }}
                src={pic}
                width={50}
              />
            </div>
            <div
              className=" sd-bundle-svg-common"
              style={{
                background:
                  data.productMixMatch.productDetails.plusBackgroundColor,
                fontSize:
                  data.productMixMatch.productDetails.plusfontSize + "px",
              }}
            >
              <PlusOutlined
                style={{ color: data.productMixMatch.productDetails.plusColor }}
              />
            </div>
            <div className="designChildDiv sd_bundle_thumbnailImg">
              <img
                style={{
                  border: "1px solid white",
                  borderColor:
                    data.productMixMatch.productDetails.image.borderColor,
                  borderRadius:
                    data.productMixMatch.productDetails.image.borderRadius +
                    "px",
                }}
                src={pic}
                width={50}
              />
            </div>
          </div>

          <div className="sd-preview-wrapper-common sd-productBundle-preview-specific">
            <div className="design sd_bundle_producQuantity">
              <div className="designChildDiv">
                <input type="checkbox" checked />
                <label>All products</label>
              </div>
              <div
                className="sd-bundle-showQuantity"
                style={{
                  color: data.productMixMatch.productDetails.quantities.color,
                  backgroundColor:
                    data.productMixMatch.productDetails.quantities
                      .backgroundColor,
                  borderColor:
                    data.productMixMatch.productDetails.quantities.borderColor,
                }}
              >
                2X{" "}
              </div>
            </div>
            <hr />
            <div>
              <div className="design designChildDiv designChildDiv_main">
                <div>
                  <input type="checkbox" checked />
                </div>
                <div className="design">
                  <div className="designChildDiv sd_bundle_thumbnailImg">
                    <img
                      style={{
                        border: "1px solid white",
                        borderColor:
                          data.productMixMatch.productDetails.image.borderColor,
                        borderRadius:
                          data.productMixMatch.productDetails.image
                            .borderRadius + "px",
                      }}
                      src={pic}
                      width={50}
                    />
                  </div>
                  <div className="designChildDiv">
                    <p
                      style={{
                        color: data.productMixMatch.productDetails.title.color,
                        fontSize:
                          data.productMixMatch.productDetails.title.fontSize +
                          "px",
                      }}
                    >
                      Daisy Dress
                    </p>

                    <p
                      style={{
                        color: data.productMixMatch.productDetails.price.color,
                        fontSize:
                          data.productMixMatch.productDetails.price.fontSize +
                          "px",
                      }}
                    >
                      Rs. 550.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="designChildDiv">
              <select
                style={{
                  backgroundColor:
                    data.productMixMatch.productDetails.variantSelector
                      .backgroundColor,
                  color:
                    data.productMixMatch.productDetails.variantSelector.color,
                  borderColor:
                    data.productMixMatch.productDetails.variantSelector
                      .borderColor,
                }}
                disabled
              >
                <option>Select Variant</option>
              </select>
            </div>
            <hr />
            <div>
              <div className="design designChildDiv designChildDiv_main">
                <div>
                  <input type="checkbox" checked />
                </div>
                <div className="design">
                  <div className="designChildDiv sd_bundle_thumbnailImg">
                    <img
                      style={{
                        border: "1px solid white",
                        borderColor:
                          data.productMixMatch.productDetails.image.borderColor,
                        borderRadius:
                          data.productMixMatch.productDetails.image
                            .borderRadius + "px",
                      }}
                      src={pic}
                      width={50}
                    />
                  </div>
                  <div className="designChildDiv">
                    <p
                      style={{
                        color: data.productMixMatch.productDetails.title.color,
                        fontSize:
                          data.productMixMatch.productDetails.title.fontSize +
                          "px",
                      }}
                    >
                      Aliam Skirt
                    </p>

                    <p
                      style={{
                        color: data.productMixMatch.productDetails.price.color,
                        fontSize:
                          data.productMixMatch.productDetails.price.fontSize +
                          "px",
                      }}
                    >
                      Rs. 560.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="designChildDiv">
              <select
                style={{
                  backgroundColor:
                    data.productMixMatch.productDetails.variantSelector
                      .backgroundColor,
                  color:
                    data.productMixMatch.productDetails.variantSelector.color,
                  borderColor:
                    data.productMixMatch.productDetails.variantSelector
                      .borderColor,
                }}
                disabled
              >
                <option>Select Variant</option>
              </select>
            </div>
          </div>
          <div
            className="design productMixMatchBGColor "
            style={{
              backgroundColor:
                data.productMixMatch.totalSection.backgroundColor,
            }}
          >
            <div
              className="designChildDiv"
              style={{
                color: data.productMixMatch.totalSection.color,
                fontSize: data.productMixMatch.totalSection.fontSize + "px",
              }}
            >
              Total
            </div>
            <div className="design designChildDiv">
              <div
                style={{
                  color: data.productMixMatch.totalSection.originalPrice.color,
                  fontSize:
                    data.productMixMatch.totalSection.originalPrice.fontSize +
                    "px",
                }}
              >
                <del>Rs. 1,070.00</del>
              </div>
              <div
                style={{
                  color: data.productMixMatch.totalSection.finalPrice.color,
                  fontSize:
                    data.productMixMatch.totalSection.finalPrice.fontSize +
                    "px",
                }}
              >
                Rs. 535.00
              </div>
            </div>
          </div>
          <div>
            {data.productMixMatch.button.position == "bottom" && (
              <button
                className="add_select_cartbtn"
                disabled
                style={{
                  color: data.productMixMatch.button.color,
                  fontSize: data.productMixMatch.button.fontSize + "px",
                  backgroundColor: data.productMixMatch.button.backgroundColor,
                }}
              >
                Add selected to cart
              </button>
            )}
          </div>
        </div>
      </div> */}

      <div
        class="sd-bundle-main-column"
        style={{
          backgroundColor: data.productMixMatch.box.backgroundColor,
          borderColor: data.productMixMatch.box.borderColor,
          borderRadius: data.productMixMatch.box.borderRadius + "px",
          border:
            data.productMixMatch.box.thickness +
            "px solid" +
            data.buyXgetY.box.borderColor,
        }}
      >
        <div class="sd-bundle-text-detail">
          <h4
            style={{
              color: data.productMixMatch.title.color,
              fontSize: data.productMixMatch.title.fontSize + "px",
              textAlign: data.productMixMatch.title.alignment,
              fontWeight: data.productMixMatch.title.titleBold,
            }}
          >
            Product Mix & Match Bundle
          </h4>
          <p
            style={{
              color: data.productMixMatch.title.descriptionColor,
              fontSize: data.productMixMatch.title.descriptionFontSize + "px",
              fontWeight: data.productMixMatch.title.descriptionBold,
              textAlign: data.productMixMatch.title.alignment,
            }}
          >
            Buy this bundle and save more!
          </p>
        </div>

        <div class="sd-show-selected-items-row">
          <div class="sd-show-items">
            <span class="active">2 items|5% off</span>
            <span>3 items|5% off</span>
            <span>5 items|5% off</span>
          </div>
          <div class="sd-have-selected">
            <h5> You have selected 2 items</h5>
            <p>5% discount is applied on the selected products.</p>
          </div>
          <div class="sd-show-selected-product-item">
            <div
              class="sd-selected-product-itemImg"
              style={{
                border: "1px solid white",
                borderColor:
                  data.productMixMatch.productDetails.image.borderColor,
                borderRadius:
                  data.productMixMatch.productDetails.image.borderRadius + "px",
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
                  fill={data.productMixMatch.productDetails.plusColor}
                />
              </svg>
            </div>
            <div
              class="sd-selected-product-itemImg"
              style={{
                border: "1px solid white",
                borderColor:
                  data.productMixMatch.productDetails.image.borderColor,
                borderRadius:
                  data.productMixMatch.productDetails.image.borderRadius + "px",
              }}
            >
              <img src={productImg} alt="" />
            </div>
          </div>
        </div>

        <div class="sd-select-all-product">
          <div class="sd-checkbox-wrapper-21">
            <label class="sd-control sd-control--checkbox">
              All Product
              <input type="checkbox" checked />
              <div class="sd-control-indicator"></div>
            </label>
          </div>
          <div class="sd-bundle-product-quantity">
            <h6
              style={{
                color: data.productMixMatch.productDetails.quantities.color,
              }}
            >
              Qty: <span>2</span>
            </h6>
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
            <div
              class="sd-bundle-product-img"
              style={{
                border: "1px solid white",
                borderColor:
                  data.productMixMatch.productDetails.image.borderColor,
                borderRadius:
                  data.productMixMatch.productDetails.image.borderRadius + "px",
              }}
            >
              <img src={productImg} width="80" height="80" />
            </div>
            <div class="sd-bundle-product-name">
              <h5
                style={{
                  color: data.productMixMatch.productDetails.title.color,
                  fontSize:
                    data.productMixMatch.productDetails.title.fontSize + "px",
                }}
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  color: data.productMixMatch.productDetails.price.color,
                  fontSize:
                    data.productMixMatch.productDetails.price.fontSize + "px",
                }}
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  backgroundColor:
                    data.productMixMatch.productDetails.variantSelector
                      .backgroundColor,
                  color:
                    data.productMixMatch.productDetails.variantSelector.color,
                  borderColor:
                    data.productMixMatch.productDetails.variantSelector
                      .borderColor,
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
                color: data.productMixMatch.productDetails.quantities.color,
              }}
            >
              Qty: <span>1</span>
            </h6>
          </div>
        </div>

        <div class="sd-bundle-product-detail">
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
                borderColor:
                  data.productMixMatch.productDetails.image.borderColor,
                borderRadius:
                  data.productMixMatch.productDetails.image.borderRadius + "px",
              }}
            >
              <img src={productImg} width="80" height="80" />
            </div>
            <div class="sd-bundle-product-name">
              <h5
                style={{
                  color: data.productMixMatch.productDetails.title.color,
                  fontSize:
                    data.productMixMatch.productDetails.title.fontSize + "px",
                }}
              >
                Smart Wireless Charger
              </h5>
              <h4
                style={{
                  color: data.productMixMatch.productDetails.price.color,
                  fontSize:
                    data.productMixMatch.productDetails.price.fontSize + "px",
                }}
              >
                Rs. 2500.00
              </h4>
              <select
                style={{
                  backgroundColor:
                    data.productMixMatch.productDetails.variantSelector
                      .backgroundColor,
                  color:
                    data.productMixMatch.productDetails.variantSelector.color,
                  borderColor:
                    data.productMixMatch.productDetails.variantSelector
                      .borderColor,
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
                color: data.productMixMatch.productDetails.quantities.color,
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
                color: data.productMixMatch.totalSection.color,
                fontSize: data.productMixMatch.totalSection.fontSize + "px",
              }}
            >
              Total
            </h4>
            <p
              style={{
                color: data.productMixMatch.title.descriptionColor,
              }}
            >
              Discount will be applied at checkout
            </p>
          </div>
          <div class="sd-total-amount">
            <h4
              style={{
                color: data.productMixMatch.totalSection.finalPrice.color,
                fontSize:
                  data.productMixMatch.totalSection.finalPrice.fontSize + "px",
              }}
            >
              Rs. 4,750.00
            </h4>
            <h6
              style={{
                color: data.productMixMatch.totalSection.originalPrice.color,
                fontSize:
                  data.productMixMatch.totalSection.originalPrice.fontSize +
                  "px",
              }}
            >
              Rs. 5000.00
            </h6>
          </div>
        </div>
        <div class="sd-bundle-addto-cart">
          <button
            style={{
              color: data.productMixMatch.button.color,
              fontSize: data.productMixMatch.button.fontSize + "px",
              backgroundColor: data.productMixMatch.button.backgroundColor,
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
