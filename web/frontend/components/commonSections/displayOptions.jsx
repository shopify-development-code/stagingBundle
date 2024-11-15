import React, { Fragment, useEffect, useState } from "react";
import { Card, Text, Checkbox } from "@shopify/polaris";

const DisplayOptions = (props) => {
  return (
    <>
      <Card sectioned>
        <Text as="h2" variant="headingSm">
          Display Options
        </Text>
        <Text as="p" variant="bodyXs">
          check page options where you want to display bundle
        </Text>

        <Checkbox
          label={
            props?.bundleType == "volume"
              ? `${props?.discountedProductType=="collection" ? "Collection Page" : "Product Page" }
              ${
                props?.discountedProductType == "all_products"
                  ? "(all)"
                  : props?.title
                    ? `(${props?.title})`
                    : "()"
              }`
              : props?.bundleType == "collectionMixMatch"
                ? "product pages of below collections"
                : "Product pages"
          }
          name=""
          value={
            props.discountedProductType == "all_products"
              ? true
              : props.display.productPages
          }
          onChange={
            props.discountedProductType == "all_products"
              ? ""
              : (e) => {
                  props.handleDisplayOptions(e, "productPages");
                }
          }
          checked={props.display.productPages}
        />
        {props.bundleType == "productBundle" ||
        props.bundleType == "productMixMatch" ||
        props.bundleType == "collectionMixMatch" ? (
          <div
            className={
              props.products.length > 0
                ? "sd-bundle-productPage-selection"
                : null
            }
          >
            {props?.products.map((item, ind) => {
              return (
                <Fragment key={ind}>
                  <Checkbox
                    label={item.title}
                    id={ind}
                    value={item.id}
                    onChange={(e) => props.handleDisplayPageOptions(e, item.id)}
                    checked={props.display.productPagesList.includes(item.id)}
                  />
                  <br />
                </Fragment>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </Card>
    </>
  );
};
export default DisplayOptions;
