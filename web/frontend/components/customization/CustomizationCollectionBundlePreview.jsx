import React from "react";
import { useAPI } from "../shop";
import { Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import pic from "../../assets/image2.png";
import productImg from "../../assets/product.png";
const CustomizationCollectionBundlePreview = ({ data }) => {
  const { currency } = useAPI();
  console.log("dfsdfadsfsdafaadsafds", data.collection.title);

  return (
    <>
      {/* <div
        className="sd-collection-customise-preview sd-preview-wrapper-common"
        style={{
          backgroundColor: data["collection"]["box"]["backgroundColor"],
          borderRadius: data["collection"]["box"]["borderRadius"] + "px",
          borderColor: data["collection"]["box"]["borderColor"],
        }}
      >
        <div
          className="sd-collection-discount-badge"
          style={{
            color: data["collection"]["DiscountBadge"]["color"],
            backgroundColor:
              data["collection"]["DiscountBadge"]["backgroundColor"],
            fontSize: data["collection"]["DiscountBadge"]["fontSize"] + "px",
            borderTopLeftRadius:
              data["collection"]["box"]["borderRadius"] + "px",
          }}
        >
          {data["collection"]["DiscountBadge"]["text"]}
        </div>

        <div className="sd-collection-main-section">
          <div
            className="sd-collection-customise-titleSection"
            style={{ textAlign: data["collection"]["title"]["alignment"] }}
          >
            <p
              className="sd-collection-customise-titleNaming"
              style={{
                color: data["collection"]["title"]["color"],
                fontSize: data["collection"]["title"]["fontSize"] + "px",
                fontWeight: data["collection"]["title"]["titleBold"],
              }}
            >
              Create Your Bundle & Get Discount
            </p>
            <p
              className="sd-collection-customise-description"
              style={{
                color: data["collection"]["title"]["descriptionColor"],
                fontSize:
                  data["collection"]["title"]["descriptionFontSize"] + "px",
                fontWeight: data["collection"]["title"]["descriptionBold"],
              }}
            >
              Buy products from these collections and save
            </p>
          </div>
          <div
            style={{
              backgroundColor:
                data["collection"]["theme"] == "dark" ? "#FFFFFF" : null,
            }}
          >
            <Divider />
          </div>

          <div className="sd-selected-collection">
            <div className="sd-selected-collection-data">
              <div>
                <p
                  style={{
                    color:
                      data["collection"]["collectionDetails"]["title"]["color"],
                    fontSize:
                      data["collection"]["collectionDetails"]["title"][
                        "fontSize"
                      ] + "px",
                  }}
                >
                  Collection Name
                </p>
                <p
                  style={{
                    color:
                      data["collection"]["collectionDetails"]["description"][
                        "color"
                      ],
                    fontSize:
                      data["collection"]["collectionDetails"]["description"][
                        "fontSize"
                      ] + "px",
                  }}
                >
                  Add 2 items from collection collection collection
                </p>{" "}
              </div>
            </div>
            <div className="sd-selected-collection-img">
              <img
                src={pic}
                style={{
                  borderColor:
                    data["collection"]["collectionDetails"]["imageBorderColor"],
                }}
              />
            </div>
          </div>
          <div
            className="sd-bundle-svg-common"
            style={{
              backgroundColor:
                data["collection"]["collectionDetails"]["plus"][
                  "backgroundColor"
                ],
            }}
          >
            <PlusOutlined
              style={{
                color: data["collection"]["collectionDetails"]["plus"]["color"],
              }}
            />
          </div>

          <div className="sd-selected-collection">
            <div className="sd-selected-collection-data">
              <div>
                <p
                  style={{
                    color:
                      data["collection"]["collectionDetails"]["title"]["color"],
                    fontSize:
                      data["collection"]["collectionDetails"]["title"][
                        "fontSize"
                      ] + "px",
                  }}
                >
                  Collection Name
                </p>
                <p
                  style={{
                    color:
                      data["collection"]["collectionDetails"]["description"][
                        "color"
                      ],
                    fontSize:
                      data["collection"]["collectionDetails"]["description"][
                        "fontSize"
                      ] + "px",
                  }}
                >
                  Add 2 items from collection collection collection
                </p>{" "}
              </div>
            </div>
            <div className="sd-selected-collection-img">
              <img
                src={pic}
                style={{
                  borderColor:
                    data["collection"]["collectionDetails"]["imageBorderColor"],
                }}
              />
            </div>
          </div>
          <button
            type="button"
            className="sd-addToCart-button"
            style={{
              backgroundColor: data["collection"]["button"]["backgroundColor"],
              color: data["collection"]["button"]["color"],
              fontSize: data["collection"]["button"]["fontSize"] + "px",
            }}
          >
            {data["collection"]["button"]["text_others"]}
          </button>
        </div>
      </div> */}

      <div
        class="sd-bundle-main-column sd-collection-main-column"
        style={{
          backgroundColor: data["collection"]["box"]["backgroundColor"],
          borderRadius: data["collection"]["box"]["borderRadius"] + "px",
          borderColor: data["collection"]["box"]["borderColor"],
        }}
      >
        <span
          class="sd-badges-part"
          style={{
            color: data["collection"]["DiscountBadge"]["color"],
            backgroundColor:
              data["collection"]["DiscountBadge"]["backgroundColor"],
            fontSize: data["collection"]["DiscountBadge"]["fontSize"] + "px",
          }}
        >
          Grab the deal!
        </span>
        <div class="sd-bundle-text-detail">
          <h4
            style={{
              color: data["collection"]["title"]["color"],
              fontSize: data["collection"]["title"]["fontSize"] + "px",
              fontWeight: data["collection"]["title"]["titleBold"],
              textAlign: data["collection"]["title"]["alignment"],
            }}
          >
            Create Your Bundle & Get Discount
          </h4>
          <p
            style={{
              color: data["collection"]["title"]["descriptionColor"],
              fontSize:
                data["collection"]["title"]["descriptionFontSize"] + "px",
              fontWeight: data["collection"]["title"]["descriptionBold"],
              textAlign: data["collection"]["title"]["alignment"],
            }}
          >
            Buy products from below collections,Save Rs. 99off
          </p>
        </div>

        <div
          class="sd-bundle-product-detail create-bundle-discount"
          style={{
            backgroundColor:
              data.collection.collectionDetails.collectionDetailsBox
                .backgroundColor,
          }}
        >
          <div class="sd-bundle-product-inner">
            <div
              class="sd-bundle-product-img"
              style={{
                borderColor:
                  data["collection"]["collectionDetails"]["imageBorderColor"],
              }}
            >
              <img src={productImg} width="80" height="80" />
            </div>
            <div class="sd-bundle-product-name">
              <h5
                style={{
                  color:
                    data["collection"]["collectionDetails"]["title"]["color"],
                  fontSize:
                    data["collection"]["collectionDetails"]["title"][
                      "fontSize"
                    ] + "px",
                }}
              >
                Wireless collection
              </h5>
              <p
                style={{
                  color:
                    data["collection"]["collectionDetails"]["description"][
                      "color"
                    ],
                  fontSize:
                    data["collection"]["collectionDetails"]["description"][
                      "fontSize"
                    ] + "px",
                }}
              >
                Add 1 items from wireless collection
              </p>
            </div>
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
              fill={data["collection"]["collectionDetails"]["plus"]["color"]}
            />
          </svg>
        </div>
        <div
          class="sd-bundle-product-detail create-bundle-discount"
          style={{
            backgroundColor:
              data.collection.collectionDetails.collectionDetailsBox
                .backgroundColor,
          }}
        >
          <div class="sd-bundle-product-inner">
            <div
              class="sd-bundle-product-img"
              style={{
                borderColor:
                  data["collection"]["collectionDetails"]["imageBorderColor"],
              }}
            >
              <img src={productImg} width="80" height="80" />
            </div>
            <div class="sd-bundle-product-name">
              <h5
                style={{
                  color:
                    data["collection"]["collectionDetails"]["title"]["color"],
                  fontSize:
                    data["collection"]["collectionDetails"]["title"][
                      "fontSize"
                    ] + "px",
                }}
              >
                Wireless collection
              </h5>
              <p
                style={{
                  color:
                    data["collection"]["collectionDetails"]["description"][
                      "color"
                    ],
                  fontSize:
                    data["collection"]["collectionDetails"]["description"][
                      "fontSize"
                    ] + "px",
                }}
              >
                Add 1 items from wireless collection
              </p>
            </div>
          </div>
        </div>
        <div class="sd-bundle-addto-cart">
          <button
            style={{
              backgroundColor: data["collection"]["button"]["backgroundColor"],
              color: data["collection"]["button"]["color"],
              fontSize: data["collection"]["button"]["fontSize"] + "px",
            }}
          >
            {data["collection"]["button"]["text_others"]}
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomizationCollectionBundlePreview;
