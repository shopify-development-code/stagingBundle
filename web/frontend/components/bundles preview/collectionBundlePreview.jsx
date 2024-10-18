import React from "react";
// import { useAPI} from "../shop"
import { Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { showAmountWithCurrency } from "../showCurrencyFormat";
import pic from "../../assets/image2.png";
import EmptyPreview from "../commonSections/emptyPreview";

const CollectionBundlePreview = ({ data, currency }) => {
  // console.log("test test", data);
  const fontFamily = {
    fontFamily: data?.customization?.[0]?.collectionMixMatch?.box?.fontFamily || 'inherit',
  };  

  return (
    <div className="sd-bundle-bundleSection-common">
      <div className="sd-bundle-bundleSection-heading-common">Preview</div>
      {data.bundleDetail.products.length > 0 ? (
        <div
          className="sd-collection-main-column "
          style={{
            backgroundColor: data?.customization?.[0]?.collectionMixMatch?.box?.backgroundColor,
            borderRadius: `${data?.customization?.[0]?.collectionMixMatch?.box?.borderRadius}px`,
            borderColor: data?.customization?.[0]?.collectionMixMatch?.box?.borderColor,
          }}          
        >
          {(data?.badgeText !== "" && data?.badgeText !== undefined) &&
            ((data?.bundleDetail?.discountType === "percent" ||
              data?.bundleDetail?.discountType === "fixed") && (
          <span
            className="sd-badges-part"
            style={{
              ...fontFamily,
              color: data?.customization?.[0]?.collectionMixMatch?.DiscountBadge?.color,
              backgroundColor: data?.customization?.[0]?.collectionMixMatch?.DiscountBadge?.backgroundColor,
              fontSize: `${data?.customization?.[0]?.collectionMixMatch?.DiscountBadge?.fontSize}px`
            }}            
          >
            {data?.badgeText}
          </span>
          ))}
          <div
            className={`sd-bundle-text-detail ${((data?.badgeText != "" && data?.badgeText != undefined) && (data?.bundleDetail?.discountType === "percent" ||
              data?.bundleDetail?.discountType === "fixed") )? "extra-padding" : ""}`}
            style={{
              textAlign: data?.customization?.[0]?.collectionMixMatch?.title?.alignment
            }}            
          >
            <h4
              style={{
                ...fontFamily,
                color: data?.customization?.[0]?.collectionMixMatch?.title?.color,
                fontSize: `${data?.customization?.[0]?.collectionMixMatch?.title?.fontSize}px`,
                fontWeight: data?.customization?.[0]?.collectionMixMatch?.title?.titleBold
              }}              
            >
              {data?.title}{" "}
            </h4>
            <p
              style={{
                ...fontFamily,
                color: data?.customization?.[0]?.collectionMixMatch?.title?.descriptionColor,
                fontSize: `${data?.customization?.[0]?.collectionMixMatch?.title?.descriptionFontSize}px`,
                textAlign: data?.customization?.[0]?.collectionMixMatch?.title?.alignment,
                fontWeight: data?.customization?.[0]?.collectionMixMatch?.title?.descriptionBold
              }}              
            >
              {data?.description}
            </p>
          </div>
          {data?.bundleDetail?.products?.map((item, index) => {
            return (
              <>
                <div
                  className="sd-bundle-product-detail create-bundle-discount"
                  style={{
                    backgroundColor: data?.customization?.[0]?.collectionMixMatch?.collectionDetails?.collectionDetailsBox?.backgroundColor
                  }}                  
                >
                  <div className="sd-bundle-product-inner">
                    <div
                      className="sd-bundle-product-img"
                      style={{
                        borderColor: data?.customization?.[0]?.collectionMixMatch?.collectionDetails?.imageBorderColor,
                        borderRadius: `${data?.customization?.[0]?.collectionMixMatch?.collectionDetails?.imageBorderRadius}px`
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
                          ...fontFamily,
                          color: data?.customization?.[0]?.collectionMixMatch?.collectionDetails?.title?.color,
                          fontSize: `${data?.customization?.[0]?.collectionMixMatch?.collectionDetails?.title?.fontSize}px`
                        }}                        
                      >
                        {" "}
                        {item.title} Collection
                      </h5>
                      <p
                        style={{
                          ...fontFamily,
                          color: data?.customization?.[0]?.collectionMixMatch?.collectionDetails?.description?.color,
                          fontSize: `${data?.customization?.[0]?.collectionMixMatch?.collectionDetails?.description?.fontSize}px`
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
                          data?.customization?.[0]?.collectionMixMatch?.collectionDetails?.plus?.color
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
                ...fontFamily,
                color: data?.customization?.[0]?.collectionMixMatch?.button?.color,
                backgroundColor: data?.customization?.[0]?.collectionMixMatch?.button?.backgroundColor,
                fontSize: `${data?.customization?.[0]?.collectionMixMatch?.button?.fontSize }px`,
                borderColor: data?.customization?.[0]?.collectionMixMatch?.button?.borderColor,
                borderRadius: `${data?.customization?.[0]?.collectionMixMatch?.button?.borderRadius}px`
              }}
              
            >
              {data?.customization?.[0]?.collectionMixMatch?.button?.text_others}
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