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

  useEffect(() => {
    quantity == 2 && setShowMore(false);
  }, [quantity]);

  return (
    <>
      {/* <div
        className="sd-volume-preview-specific sd-preview-wrapper-common"
        style={{
          backgroundColor: data["volume"]["box"]["backgroundColor"],
          borderColor: data["volume"]["box"]["borderColor"],
          borderRadius: data["volume"]["box"]["borderRadius"] + "px",
        }}
      >
        <div
          className="sd-preview-title-common"
          style={{
            color: data["volume"]["title"]["color"],
            fontSize: data["volume"]["title"]["fontSize"] + "px",
            textAlign: data["volume"]["title"]["alignment"],
            fontWeight: data["volume"]["title"]["titleBold"],
          }}
        >
          Volume Discount
        </div>
        <div
          className="sd-preview-title-common"
          style={{
            color: data["volume"]["title"]["descriptionColor"],
            fontSize: data["volume"]["title"]["descriptionFontSize"] + "px",
            textAlign: data["volume"]["title"]["alignment"],
            fontWeight: data["volume"]["title"]["descriptionBold"],
          }}
        >
          Volume Discount Description
        </div>
        <div className="sd-volume-preview-option-section">
          <div className="sd-volume-preview-option-wrapper">
            <div
              className={
                selected == "first"
                  ? "sd-volume-preview-option-headline"
                  : "sd-volume-preview-option-headline sd-option-cursor-hover"
              }
              onClick={() => handleSelected("first")}
            >
              <div
                className="sd-option-titleSection"
                style={{
                  color: data["volume"]["options"]["color"],
                  fontSize: data["volume"]["options"]["fontSize"] + "px",
                }}
              >
                <div style={{ color: data["volume"]["options"]["iconColor"] }}>
                  <input
                    type="radio"
                    name="option"
                    value="first"
                    checked={selected == "first"}
                  />
                </div>
                <p>Buy 2 & Get 10% Discount</p>{" "}
              </div>
              <div
                className="sd-option-badgeSection"
                style={{
                  backgroundColor:
                    data["volume"]["options"]["saveDiscount"][
                      "backgroundColor"
                    ],
                  color: data["volume"]["options"]["saveDiscount"]["color"],
                  borderRadius:
                    data["volume"]["options"]["saveDiscount"]["borderRadius"] +
                    "px",
                  fontSize:
                    data["volume"]["options"]["saveDiscount"]["fontSize"] +
                    "px",
                }}
              >
                Save {currency} 50
              </div>
            </div>
            {selected == "first" && (
              <>
                <div className="sd-preview-data-section-common sd-volume-preview-data-section">
                  <div className="sd-bundle-custom-center-imgTitlePrice-wrapper">
                    <div className="sd-custom-image-container">
                      <img
                        src={pic}
                        style={{
                          borderColor:
                            data["volume"]["productDetails"]["image"][
                              "borderColor"
                            ],
                          borderRadius:
                            data["volume"]["productDetails"]["image"][
                              "borderRadius"
                            ] + "px",
                        }}
                      />
                    </div>
                    <div className="sd-bundle-title-price">
                      <div
                        style={{
                          color:
                            data["volume"]["productDetails"]["title"]["color"],
                          fontSize:
                            data["volume"]["productDetails"]["title"][
                              "fontSize"
                            ] + "px",
                        }}
                      >
                        Product Name
                      </div>

                      <div
                        style={{
                          color:
                            data["volume"]["productDetails"]["price"]["color"],
                          fontSize:
                            data["volume"]["productDetails"]["price"][
                              "fontSize"
                            ] + "px",
                        }}
                      >
                        {currency} 500
                      </div>
                    </div>
                  </div>
                  <div
                    className="sd-bundle-showQuantity"
                    style={{
                      color:
                        data["volume"]["productDetails"]["quantities"]["color"],
                      backgroundColor:
                        data["volume"]["productDetails"]["quantities"][
                          "backgroundColor"
                        ],
                    }}
                  >
                    2X{" "}
                  </div>
                </div>
                <div className="sd-preview-variant-selection-common">
                  <p
                    style={{
                      color:
                        data["volume"]["productDetails"]["variantSelector"][
                          "color"
                        ],
                    }}
                  >
                    1
                  </p>
                  <select
                    style={{
                      backgroundColor:
                        data["volume"]["productDetails"]["variantSelector"][
                          "backgroundColor"
                        ],
                      color:
                        data["volume"]["productDetails"]["variantSelector"][
                          "color"
                        ],
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
                    style={{
                      color:
                        data["volume"]["productDetails"]["variantSelector"][
                          "color"
                        ],
                    }}
                  >
                    2
                  </p>
                  <select
                    style={{
                      backgroundColor:
                        data["volume"]["productDetails"]["variantSelector"][
                          "backgroundColor"
                        ],
                      color:
                        data["volume"]["productDetails"]["variantSelector"][
                          "color"
                        ],
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
              </>
            )}
          </div>

          <div className="sd-volume-preview-option-wrapper">
            <div
              className={
                selected == "second"
                  ? "sd-volume-preview-option-headline"
                  : "sd-volume-preview-option-headline sd-option-cursor-hover"
              }
              onClick={() => handleSelected("second")}
            >
              {" "}
              <div
                className="sd-option-titleSection"
                style={{
                  color: data["volume"]["options"]["color"],
                  fontSize: data["volume"]["options"]["fontSize"] + "px",
                }}
              >
                <div style={{ color: data["volume"]["options"]["iconColor"] }}>
                  <input
                    type="radio"
                    name="option"
                    value="second"
                    checked={selected == "second"}
                  />
                </div>
                <p>Buy 2+ & Get 10% Discount</p>{" "}
              </div>
              <div
                className="sd-option-badgeSection"
                style={{
                  backgroundColor:
                    data["volume"]["options"]["saveDiscount"][
                      "backgroundColor"
                    ],
                  color: data["volume"]["options"]["saveDiscount"]["color"],
                  borderRadius:
                    data["volume"]["options"]["saveDiscount"]["borderRadius"] +
                    "px",
                  fontSize:
                    data["volume"]["options"]["saveDiscount"]["fontSize"] +
                    "px",
                }}
              >
                Save {currency} 50{" "}
              </div>
            </div>

            {selected == "second" && (
              <>
                <div className="sd-preview-data-section-common sd-volume-preview-data-section">
                  <div className="sd-bundle-custom-center-imgTitlePrice-wrapper">
                    <div className="sd-custom-image-container">
                      <img
                        src={pic}
                        style={{
                          borderColor:
                            data["volume"]["productDetails"]["image"][
                              "borderColor"
                            ],
                          borderRadius:
                            data["volume"]["productDetails"]["image"][
                              "borderRadius"
                            ] + "px",
                        }}
                      />
                    </div>
                    <div className="sd-bundle-title-price">
                      <div
                        style={{
                          color:
                            data["volume"]["productDetails"]["title"]["color"],
                          fontSize:
                            data["volume"]["productDetails"]["title"][
                              "fontSize"
                            ] + "px",
                        }}
                      >
                        Product Name
                      </div>

                      <div
                        style={{
                          color:
                            data["volume"]["productDetails"]["price"]["color"],
                          fontSize:
                            data["volume"]["productDetails"]["price"][
                              "fontSize"
                            ] + "px",
                        }}
                      >
                        {currency} 500
                      </div>
                    </div>
                  </div>
                  <div
                    className="sd-bundle-showQuantity"
                    style={{
                      color:
                        data["volume"]["productDetails"]["quantities"]["color"],
                      backgroundColor:
                        data["volume"]["productDetails"]["quantities"][
                          "backgroundColor"
                        ],
                    }}
                  >
                    2X{" "}
                  </div>
                </div>

                {Array.from({ length: quantity }).map((item, index) => {
                  return (
                    (index <= 1 || showMore) && (
                      <div className="sd-preview-variant-selection-common">
                        <p
                          style={{
                            color:
                              data["volume"]["productDetails"][
                                "variantSelector"
                              ]["color"],
                          }}
                        >
                          {index + 1}
                        </p>
                        <select
                          style={{
                            backgroundColor:
                              data["volume"]["productDetails"][
                                "variantSelector"
                              ]["backgroundColor"],
                            color:
                              data["volume"]["productDetails"][
                                "variantSelector"
                              ]["color"],
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
                    )
                  );
                })}
                {quantity > 2 && (
                  <div>
                    {" "}
                    <Button
                      type="link"
                      className="sd-volume-showMoreLess"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {" "}
                      {showMore ? "Show Less" : "Show More"}
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>

          <div
            className="sd-bundle-total-common"
            style={{
              color: data["volume"]["totalSection"]["color"],
              backgroundColor:
                data["volume"]["totalSection"]["backgroundColor"],
              fontSize: data["volume"]["totalSection"]["fontSize"] + "px",
            }}
          >
            {data["volume"]["totalSection"]["text"]}
            <div className="sd-bundle-customization-total-common">
              <span
                className="sd-bundle-mrp-price"
                style={{
                  color:
                    data["volume"]["totalSection"]["originalPrice"]["color"],
                  fontSize:
                    data["volume"]["totalSection"]["originalPrice"][
                      "fontSize"
                    ] + "px",
                }}
              >
                <del>{currency} 1000 </del>
              </span>
              <span
                className="sd-bundle-real-price"
                style={{
                  color: data["volume"]["totalSection"]["finalPrice"]["color"],
                  fontSize:
                    data["volume"]["totalSection"]["finalPrice"]["fontSize"] +
                    "px",
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
              color: data["volume"]["button"]["color"],
              fontSize: data["volume"]["button"]["fontSize"] + "px",
              backgroundColor: data["volume"]["button"]["backgroundColor"],
            }}
          >
            {data["volume"]["button"]["text_others"] + " "}
          </button>
        </div>
      </div> */}
      <div
        class="sd-bundle-main-column"
        style={{
          backgroundColor: data["volume"]["box"]["backgroundColor"],
          borderColor: data["volume"]["box"]["borderColor"],
          borderRadius: data["volume"]["box"]["borderRadius"] + "px",
        }}
      >
        <div class="sd-bundle-text-detail">
          <h4
            style={{
              color: data["volume"]["title"]["color"],
              fontSize: data["volume"]["title"]["fontSize"] + "px",
              textAlign: data["volume"]["title"]["alignment"],
              fontWeight: data["volume"]["title"]["titleBold"],
            }}
          >
            Volume Bundle
          </h4>
          <p
            style={{
              color: data["volume"]["title"]["descriptionColor"],
              fontSize: data["volume"]["title"]["descriptionFontSize"] + "px",
              textAlign: data["volume"]["title"]["alignment"],
              fontWeight: data["volume"]["title"]["descriptionBold"],
            }}
          >
            Buy and save 5%
          </p>
        </div>
        <div class="sd-volume-bundle-detail">
          <div class="sd-select-radio-with-text">
            <div class="radio">
              <input id="radio-1" name="radio" type="radio" />
              <label
                for="radio-1"
                class="sd-radio-label"
                style={{
                  color: data["volume"]["options"]["color"],
                  fontSize: data["volume"]["options"]["fontSize"] + "px",
                }}
              >
                Buy 3 & Save 5%
              </label>
            </div>
            <div class="sd-percent-badge">
              <span
                style={{
                  backgroundColor:
                    data["volume"]["options"]["saveDiscount"][
                      "backgroundColor"
                    ],
                  color: data["volume"]["options"]["saveDiscount"]["color"],
                  borderRadius:
                    data["volume"]["options"]["saveDiscount"]["borderRadius"] +
                    "px",
                  fontSize:
                    data["volume"]["options"]["saveDiscount"]["fontSize"] +
                    "px",
                }}
              >
                5% off
              </span>
            </div>
          </div>
        </div>
        <div class="sd-volume-bundle-detail">
          <div class="sd-select-radio-with-text">
            <div class="radio">
              <input id="radio-2" name="radio" type="radio" checked />
              <label
                for="radio-2"
                class="sd-radio-label"
                style={{
                  color: data["volume"]["options"]["color"],
                  fontSize: data["volume"]["options"]["fontSize"] + "px",
                }}
              >
                Buy 3 & Save 5%
              </label>
            </div>
            <div class="sd-percent-badge">
              <span
                style={{
                  backgroundColor:
                    data["volume"]["options"]["saveDiscount"][
                      "backgroundColor"
                    ],
                  color: data["volume"]["options"]["saveDiscount"]["color"],
                  borderRadius:
                    data["volume"]["options"]["saveDiscount"]["borderRadius"] +
                    "px",
                  fontSize:
                    data["volume"]["options"]["saveDiscount"]["fontSize"] +
                    "px",
                }}
              >
                5% off
              </span>
            </div>
          </div>
          <div class="sd-bundle-product-detail">
            <div class="sd-bundle-product-inner">
              <div
                class="sd-bundle-product-img"
                style={{
                  borderColor:
                    data["volume"]["productDetails"]["image"]["borderColor"],
                  borderRadius:
                    data["volume"]["productDetails"]["image"]["borderRadius"] +
                    "px",
                }}
              >
                <img src={productImg} width="80" height="80" />
              </div>
              <div class="sd-bundle-product-name">
                <h5
                  style={{
                    color: data["volume"]["productDetails"]["title"]["color"],
                    fontSize:
                      data["volume"]["productDetails"]["title"]["fontSize"] +
                      "px",
                  }}
                >
                  Smart Wireless Charger
                </h5>
                <h4
                  style={{
                    color: data["volume"]["productDetails"]["price"]["color"],
                    fontSize:
                      data["volume"]["productDetails"]["price"]["fontSize"] +
                      "px",
                  }}
                >
                  Rs. 2500.00
                </h4>
                <div class="sd-bundle-product-select-main">
                  <select
                    style={{
                      backgroundColor:
                        data["volume"]["productDetails"]["variantSelector"][
                          "backgroundColor"
                        ],
                      color:
                        data["volume"]["productDetails"]["variantSelector"][
                          "color"
                        ],
                    }}
                  >
                    <option>Medium</option>
                    <option>Small</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="sd-bundle-product-quantity">
              <h6
                style={{
                  color:
                    data["volume"]["productDetails"]["quantities"]["color"],
                }}
              >
                Qty: <span>1</span>
              </h6>
            </div>
          </div>
        </div>

        <div class="sd-product-bundle-total">
          <div class="sd-total-desc">
            <h4
              style={{
                color: data["volume"]["totalSection"]["color"],
                fontSize: data["volume"]["totalSection"]["fontSize"] + "px",
              }}
            >
              Total
            </h4>
            <p
              style={{
                color: data["volume"]["title"]["descriptionColor"],
              }}
            >
              Discount will be applied at checkout
            </p>
          </div>
          <div class="sd-total-amount">
            <h4
              style={{
                color: data["volume"]["totalSection"]["finalPrice"]["color"],
                fontSize:
                  data["volume"]["totalSection"]["finalPrice"]["fontSize"] +
                  "px",
              }}
            >
              Rs. 2,375.00
            </h4>
            <h6
              style={{
                color: data["volume"]["totalSection"]["originalPrice"]["color"],
                fontSize:
                  data["volume"]["totalSection"]["originalPrice"]["fontSize"] +
                  "px",
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
              color: data["volume"]["button"]["color"],
              fontSize: data["volume"]["button"]["fontSize"] + "px",
              backgroundColor: data["volume"]["button"]["backgroundColor"],
            }}
          >
            {data["volume"]["button"]["text_others"] + " "}
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomizationVolumeBundlePreview;
