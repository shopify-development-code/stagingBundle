import React from "react";
// import { useAPI} from "../shop"
import { Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { showAmountWithCurrency } from "../showCurrencyFormat";
import pic from "../../assets/image2.png";
import EmptyPreview from "../commonSections/emptyPreview";

const CollectionBundlePreview = ({ data, currency }) => {
  console.log("test test", data);

  return (
    <div className="sd-bundle-bundleSection-common">
      <div className="sd-bundle-bundleSection-heading-common">Preview</div>
      {data.bundleDetail.products.length > 0 ? (
        <div
          className="sd-collection-main-column"
          style={{
            backgroundColor:
              data.customization[0].collectionMixMatch.box.backgroundColor,
            borderRadius:
              data.customization[0].collectionMixMatch.box.borderRadius + "px",
            borderColor:
              data.customization[0].collectionMixMatch.box.borderColor,
          }}
        >
          <span
            className="sd-badges-part"
            style={{
              color:
                data.customization[0].collectionMixMatch.DiscountBadge.color,
              backgroundColor:
                data.customization[0].collectionMixMatch.DiscountBadge
                  .backgroundColor,
              fontSize:
                data.customization[0].collectionMixMatch.DiscountBadge
                  .fontSize + "px",
            }}
          >
            {data.customization[0].collectionMixMatch.DiscountBadge.text}
          </span>
          <div
            className="sd-bundle-text-detail"
            style={{
              textAlign:
                data.customization[0].collectionMixMatch.title.alignment,
            }}
          >
            <h4
              style={{
                color: data.customization[0].collectionMixMatch.title.color,
                fontSize:
                  data.customization[0].collectionMixMatch.title.fontSize +
                  "px",
                fontWeight:
                  data.customization[0].collectionMixMatch.title.titleBold,
              }}
            >
              {data.title}{" "}
            </h4>
            {data.bundleDetail.description ==
            "Buy products from below collections,Save {discount}" ? (
              <p
                style={{
                  color:
                    data.customization[0].collectionMixMatch.title.description
                      .color,
                  fontSize:
                    data.customization[0].collectionMixMatch.title.description
                      .fontSize + "px",
                  textAlign:
                    data.customization[0].collectionMixMatch.title.alignment,
                  fontWeight:
                    data.customization[0].collectionMixMatch.title
                      .descriptionBold,
                }}
              >
                <span>Buy products from below collections,Save </span>
                <span>
                  {data.bundleDetail.discountType == "fixed"
                    ? showAmountWithCurrency(
                        parseFloat(data.bundleDetail.discountValue).toFixed(2),
                        currency
                      )
                    : ""}
                </span>
                <span>
                  {data.bundleDetail.discountType == "percent" &&
                    data.bundleDetail.discountValue}
                </span>
                <span>
                  {data.bundleDetail.discountType == "percent" ? "%" : ""}
                </span>
              </p>
            ) : (
              data.bundleDetail.description
            )}
          </div>
          {data.bundleDetail.products.map((item, index) => {
            return (
              <>
                <div className="sd-bundle-product-detail create-bundle-discount">
                  <div className="sd-bundle-product-inner">
                    <div
                      className="sd-bundle-product-img"
                      style={{
                        borderColor:
                          data.customization[0].collectionMixMatch
                            .collectionDetails.imageBorderColor,
                      }}
                    >
                      <img
                        src={item?.image ? item?.image?.originalSrc : pic}
                        width="80"
                        height="80"
                      />
                    </div>
                    <div className="sd-bundle-product-name">
                      <h5
                        style={{
                          color:
                            data.customization[0].collectionMixMatch
                              .collectionDetails.title.color,
                          fontSize:
                            data.customization[0].collectionMixMatch
                              .collectionDetails.title.fontSize + "px",
                        }}
                      >
                        {" "}
                        {item.title} Collection
                      </h5>
                      <p
                        style={{
                          color:
                            data.customization[0].collectionMixMatch
                              .collectionDetails.description.color,
                          fontSize:
                            data.customization[0].collectionMixMatch
                              .collectionDetails.description.fontSize + "px",
                        }}
                      >
                        Add {item.quantity} items from {item.title} collection
                      </p>
                    </div>
                  </div>
                </div>
                {index !== data.bundleDetail.products.length - 1 && (
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
                        fill={
                          data.customization[0].collectionMixMatch
                            .collectionDetails.plus.color
                        }
                      />
                    </svg>
                  </div>
                )}
              </>
            );
          })}
          <div className="sd-bundle-addto-cart">
            <button
              style={{
                color: data.customization[0].collectionMixMatch.button.color,
                backgroundColor:
                  data.customization[0].collectionMixMatch.button
                    .backgroundColor,
                fontSize:
                  data.customization[0].collectionMixMatch.button.fontSize +
                  "px",
              }}
            >
              {data.customization[0].collectionMixMatch.button.text_others}
            </button>
          </div>
        </div>
      ) : (
        <EmptyPreview type="collection" />
      )}
    </div>
  );
};

export default CollectionBundlePreview;
