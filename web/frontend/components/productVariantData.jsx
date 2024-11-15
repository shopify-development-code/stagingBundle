import React, { Fragment } from "react";
import {
  Thumbnail,
  InlineError,
  Spinner,
  Text,
  InlineStack,
  BlockStack,
  Bleed,
  Checkbox,
} from "@shopify/polaris";
import noImg from "../assets/no-Image.png";
const ProductVariantData = (props) => {
  return ( 
    <>
      {props.variantData?.data?.length > 0 && (
        props.variantData.data.map((item,index) => {
          return (
            // <Spinner accessibilityLabel="Small spinner example" size="small">
              <Fragment key={index}>
                <BlockStack  align="center">
                  
                  <InlineStack gap={2000}>
                  <Checkbox
                    onChange={(e)=>props.VariantHandler(e,item)}
                    id={index}
                    value={item.id}
                    checked={props.checkedIds.includes(item.id) ? true : false}
                  />
                  <Thumbnail
                    source={item.src || noImg}
                    size="small"
                    alt="pic"
                  />
                  <Text>{item.title}</Text>
                  <Text>{item.inventory_quantity} in stock</Text>
                  <Text>Rs {item.price}</Text>
                  </InlineStack>
                </BlockStack>
                {props.variantData.data.length - 1 !== item.id ? <hr /> : null}
              </Fragment>
            // </Spinner>
          );
        })
      )}
    </>
  );
};
export default ProductVariantData;
