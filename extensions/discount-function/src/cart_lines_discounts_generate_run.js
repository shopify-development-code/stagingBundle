import {
  DiscountClass,
  OrderDiscountSelectionStrategy,
  ProductDiscountSelectionStrategy,
} from "../generated/api";

/**
 * @typedef {import("../generated/api").CartInput} RunInput
 * @typedef {import("../generated/api").CartLinesDiscountsGenerateRunResult} CartLinesDiscountsGenerateRunResult
 */

/**
 * @param {RunInput} input
 * @returns {CartLinesDiscountsGenerateRunResult}
 */

export function cartLinesDiscountsGenerateRun(input) {
  if (!input.cart.lines) {
    return { operations: [] };
  }
  let dummydata = {
    _id: {
      $oid: "691c359ba797164d7fdeda11",
    },
    shop: "pallavitestingstore.myshopify.com",
    type: "productBundle",
    name: "Product Bundle",
    description: "",
    badgeText: "",
    title: "Product Bundle",
    status: "active",
    currencyCode: "Rs. {{amount}}",
    bundleDetail: {
      discountType: "percent",
      discountValue: "25",
      discountCombination: [
        "shippingDiscounts",
        "orderDiscounts",
        "productDiscounts",
      ],
      products: [
        {
          availablePublicationCount: 3,
          createdAt: "2025-06-11T09:13:42Z",
          descriptionHtml: "",
          handle: "the-collection-snowboard-oxygen",
          hasOnlyDefaultVariant: true,
          id: "gid://shopify/Product/7871796871344",
          images: [
            {
              id: "gid://shopify/MediaImage/28497436868784",
              altText:
                "Top and bottom view of a snowboard. The top view shows a stylized scene of trees, mountains, sky and\n        a sun in red colours. The bottom view has blue wavy lines in the background with the text “Oxygen” in a\n        stylized script typeface.",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_d624f226-0a89-4fe1-b333-0d1548b43c06.jpg?v=1749633224",
            },
          ],
          options: [
            {
              id: "gid://shopify/ProductOption/10203479081136",
              name: "Title",
              position: 1,
              values: ["Default Title"],
            },
          ],
          productType: "snowboard",
          publishedAt: "2025-06-11T09:13:44Z",
          tags: ["Accessory", "Sport", "Winter"],
          templateSuffix: null,
          title: "The Collection Snowboard: Oxygen",
          totalInventory: 50,
          totalVariants: 1,
          tracksInventory: true,
          updatedAt: "2025-11-18T06:17:12Z",
          variants: [
            {
              availableForSale: true,
              barcode: null,
              compareAtPrice: null,
              createdAt: "2025-06-11T09:13:42Z",
              displayName: "The Collection Snowboard: Oxygen - Default Title",
              fulfillmentService: {
                id: "gid://shopify/FulfillmentService/manual",
                inventoryManagement: false,
                productBased: true,
                serviceName: "Manual",
                type: "MANUAL",
              },
              id: "gid://shopify/ProductVariant/44509563060400",
              inventoryItem: {
                __typename: "InventoryItem",
                id: "gid://shopify/InventoryItem/46597432377520",
              },
              inventoryManagement: "SHOPIFY",
              inventoryPolicy: "DENY",
              inventoryQuantity: 50,
              position: 1,
              price: "1025.00",
              product: {
                __typename: "Product",
                id: "gid://shopify/Product/7871796871344",
              },
              requiresShipping: true,
              selectedOptions: [
                {
                  __typename: "SelectedOption",
                  value: "Default Title",
                },
              ],
              sku: null,
              taxable: true,
              title: "Default Title",
              updatedAt: "2025-06-11T09:13:42Z",
              weight: 0,
              weightUnit: "KILOGRAMS",
            },
          ],
          vendor: "Hydrogen Vendor",
          status: "ACTIVE",
          minimumOrder: 1,
          required: false,
          multiItemSelect: false,
        },
        {
          availablePublicationCount: 3,
          createdAt: "2025-06-11T09:13:42Z",
          descriptionHtml:
            "This <b>PREMIUM</b> <i>snowboard</i> is so <b>SUPER</b><i>DUPER</i> awesome!",
          handle: "the-complete-snowboard",
          hasOnlyDefaultVariant: false,
          id: "gid://shopify/Product/7871796707504",
          images: [
            {
              id: "gid://shopify/MediaImage/28497436672176",
              altText:
                "Top and bottom view of a snowboard. The top view shows abstract circles and lines in shades of\n          teal. The bottom view shows abstract circles and lines in shades of purple and blue with the text “SHOPIFY”\n          in a sans serif typeface on top.",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1749633223",
            },
          ],
          options: [
            {
              id: "gid://shopify/ProductOption/10203478950064",
              name: "Color",
              position: 1,
              values: ["Ice", "Dawn", "Powder", "Electric", "Sunset"],
            },
          ],
          productType: "snowboard",
          publishedAt: "2025-06-11T09:13:42Z",
          tags: ["Premium", "Snow", "Snowboard", "Sport", "Winter"],
          templateSuffix: null,
          title: "The Complete Snowboard",
          totalInventory: 50,
          totalVariants: 5,
          tracksInventory: true,
          updatedAt: "2025-11-18T06:17:12Z",
          variants: [
            {
              id: "gid://shopify/ProductVariant/44509562699952",
              title: "Ice",
              price: "699.95",
              inventory_quantity: 10,
              src: "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1749633223",
            },
            {
              id: "gid://shopify/ProductVariant/44509562732720",
              title: "Dawn",
              price: "699.95",
              inventory_quantity: 10,
              src: "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1749633223",
            },
          ],
          vendor: "Snowboard Vendor",
          status: "ACTIVE",
          minimumOrder: 1,
          required: false,
          multiItemSelect: false,
        },
      ],
      display: {
        productPages: true,
        popUp: false,
        bundle: false,
        productPagesList: [
          "gid://shopify/Product/7871796871344",
          "gid://shopify/Product/7871796707504",
        ],
      },
    },
    startdate: "",
    endDate: "",
    timeZone: "America/New_York",
    createdAt: {
      $date: "2025-11-18T09:00:11.315Z",
    },
    updatedAt: {
      $date: "2025-11-28T08:40:40.441Z",
    },
    __v: 0,
  };
  function filterBundles(
    cartLines,
    BUNDLE_DATA,
    pId,
    vId,
    collId,
    quantity,
    SD_BUNDLE_ID,
    UNIQUE_ID
  ) {
    return BUNDLE_DATA?.filter((bundle) => {
      const { _id, shop, name, title, bundleDetail, description } = bundle;

      const products = bundleDetail?.products || [];

      switch (bundle.type) {
        case "productBundle": {
          const currentBundleId = SD_BUNDLE_ID; // full bundle group id
          const currentUniqueCode = UNIQUE_ID // last 6 chars

          // ------------------------------------------------
          // 1. Validate the entire bundle (all items must be present)
          // ------------------------------------------------
          const bundleIsValid = products.every((req) => {
            const totalQty = cartLines.reduce((sum, line) => {
              // Extract bundle + code for this cart line
              const lineBundleId = line?.UNIQUE_CODE?.value?.slice(0, -6);
              const lineUniqueCode = line?.UNIQUE_CODE?.value?.slice(-6);

              // Only count items from THIS bundle group
              const isSameBundle =
                lineBundleId === currentBundleId &&
                lineUniqueCode === currentUniqueCode;

              if (!isSameBundle) return sum;

              // Product matches?
              if (line.merchandise.product.id !== req.id) return sum;

              // Variant matches?
              const variantMatches = req.variants?.some(
                (v) => v.id === line.merchandise.id
              );
              if (!variantMatches) return sum;

              return sum + line.quantity;
            }, 0);

            return totalQty >= (req.minimumOrder || 1);
          });

          if (!bundleIsValid) {
            return false; // entire bundle invalid
          }

          // ------------------------------------------------
          // 2. Validate THIS specific product + variant
          // ------------------------------------------------
          const productMatch = products.some((prd) => {
            if (prd.id !== pId) return false;

            const variantMatches = prd.variants?.some((v) => v.id === vId);
            if (!variantMatches) return false;

            return quantity >= (prd.minimumOrder || 1);
          });

          return productMatch;
        }

        case "volumeBundle": {
          const type = bundleDetail?.discountedProductType;

          if (type === "specific_product") {
            return products.some(
              (prd) =>
                prd.id === pId &&
                prd.variants?.some((variant) => variant.id === vId)
            );
          }

          if (type === "all_products") return true;

          if (type === "collection") {
            return products.some((prd) => collId.includes(prd.collectionId));
          }

          return false;
        }

        case "bxgy": {
          const xMatched = bundleDetail?.xproducts?.some(
            (prd) =>
              prd.id === pId &&
              prd.variants?.some((variant) => variant.id === vId) &&
              quantity >= prd?.minimumOrder
          );

          const yMatched = bundleDetail?.yproducts?.some(
            (prd) =>
              prd.id === pId &&
              prd.variants?.some((variant) => variant.id === vId) &&
              quantity >= prd?.minimumOrder
          );

          return xMatched || yMatched;
        }

        case "collectionMixMatch": {
          return products.some((prd) => collId.includes(prd.collectionId));
        }

        case "productMixMatch": {
          return products.some(
            (prd) =>
              prd.id === pId &&
              prd.variants?.some((variant) => variant.id === vId) &&
              quantity >= prd?.minimumOrder
          );
        }

        case "fbt": {
          const main = bundleDetail?.mainProducts?.some(
            (prd) =>
              prd.id === pId &&
              prd.variants?.some((variant) => variant.id === vId) &&
              quantity >= prd?.minimumOrder
          );

          const offered = bundleDetail?.offeredProducts?.some(
            (prd) =>
              prd.id === pId &&
              prd.variants?.some((variant) => variant.id === vId) &&
              quantity >= prd?.minimumOrder
          );

          const all = bundleDetail?.discountedProductType === "all_products";

          return main || offered || all;
        }

        default:
          return false;
      }
    });
  }

  const hasProductDiscountClass = input.discount.discountClasses.includes(
    DiscountClass.Product
  );

  if (!hasProductDiscountClass) {
    return { operations: [] };
  }
  const hasOrderDiscountClass = input.discount.discountClasses.includes(
    DiscountClass.Order
  );

  // if (!hasOrderDiscountClass) {
  //   return { operations: [] };
  // }
  if (input.shop?.metafield) {
    const payload = input?.shop?.metafield?.jsonValue;
    const candidates = [];

    // Process each cart line
    for (const line of input.cart.lines) {
      const { id, cost, quantity, merchandise, UNIQUE_CODE } = line;
      const SD_BUNDLE_ID = UNIQUE_CODE?.value?.slice(0, -6);
      const UNIQUE_ID = UNIQUE_CODE?.value?.slice(-6);

      console.log(SD_BUNDLE_ID, UNIQUE_ID);
      // Skip if not a product variant
      if (merchandise.__typename !== "ProductVariant") {
        continue;
      }
      const pId = merchandise.product.id;
      const vId = merchandise.id;
      console.log(id, "=>", "pId", pId, "vId", vId);
      // Check if variant is in target list
      const filteredBundles = filterBundles(
        input.cart.lines,
        payload,
        pId,
        vId,
        [],
        quantity,
        SD_BUNDLE_ID,
        UNIQUE_ID
      );
      console.log("filteredBundles", filteredBundles?.length);
      filteredBundles?.map((bundle, index) => {
        const { _id, shop, name, title, type, bundleDetail } =
          bundle;
        console.log(index, "==>", name, " ", type,);

        // PRODUCT BUNDLE
        if (type === "productBundle") {
          console.log(
            "discountType:",
            bundleDetail?.discountType,
            ",",
            "discountValue:",
            bundleDetail?.discountValue 
          );
          if (
            bundleDetail?.discountType === "percent" ||
            bundleDetail?.discountType === "fixed"
          ) {
              const isPercent = bundleDetail?.discountType === "percent";

              const discountValue = isPercent
                ? { percentage: { value: bundleDetail?.discountValue } }
                : { fixedAmount: { amount: bundleDetail?.discountValue } };

              const message = isPercent
                ? `${name} ${bundleDetail?.discountValue}% Off`
                : `${name} ₹${bundleDetail?.discountValue} Off`;

              candidates.push({
                value: discountValue,
                targets: [
                  {
                    cartLine: { id: id },
                  },
                ],
                message,
              });
            
          }
        }

        // VOLUME BUNDLE
        if (type === "volumeBundle") {
          [...(bundleDetail?.discountOptions || [])]
            .reverse()
            .forEach((option, index) => {
              console.log(
                "quantity:",
                option?.quantity,
                ",",
                "type:",
                option?.quantity,
                ",",
                option?.type,
                ",",
                "value:",
                option.value
              );

              if (option.type === "percent" || option.type === "fixed") {
                if (quantity >= option.quantity) {
                  const isPercent = option.type === "percent";

                  const discountValue = isPercent
                    ? { percentage: { value: option.value } }
                    : { fixedAmount: { amount: option.value } };

                  const message = isPercent
                    ? `${name} ${option.value}% Off`
                    : `${name} ₹${option.value} Off`;

                  candidates.push({
                    value: discountValue,
                    targets: [
                      {
                        cartLine: { id: id },
                      },
                    ],
                    message,
                  });
                }
              }
            });
        }

        // COLLECTION MIX MATCH
        if (type === "collectionMixMatch") {
        }

        // BXGY
        if (type === "bxgy") {
          // console.log("discountType", bundleDetail?.discountType);
          // console.log("discountValue", bundleDetail?.discountValue);
          // console.log("xproducts", bundleDetail?.xproducts);
          // console.log("yproducts", bundleDetail?.yproducts);
        }

        // PRODUCT MIX MATCH
        if (type === "productMixMatch") {
        }

        // FBT (Frequently Bought Together)
        if (type === "fbt") {
        }
      });
    }
    if (candidates.length === 0) {
      return { operations: [] };
    }

    return {
      operations: [
        {
          productDiscountsAdd: {
            candidates,
            selectionStrategy: ProductDiscountSelectionStrategy.All,
          },
        },
        // {
        //   orderDiscountsAdd: {
        //     candidates: [
        //       {
        //         message: "10% OFF ORDER",
        //         targets: [
        //           {
        //             orderSubtotal: {
        //               excludedCartLineIds: [],
        //             },
        //           },
        //         ],
        //         value: {
        //           percentage: {
        //             value: 10,
        //           },
        //         },
        //       },
        //     ],
        //     selectionStrategy: OrderDiscountSelectionStrategy.First,
        //   },
        // },
      ],
    };
  } else {
    return NO_CHANGES;
  }
}
