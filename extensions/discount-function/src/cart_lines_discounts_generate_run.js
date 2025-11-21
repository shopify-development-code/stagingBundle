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
  const BUNDLE_DATA = [
    {
      _id: "691c359ba797164d7fdeda11",
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
            createdAt: "2025-06-11T09:13:43Z",
            descriptionHtml: "",
            handle: "the-collection-snowboard-liquid",
            hasOnlyDefaultVariant: true,
            id: "gid://shopify/Product/7871797002416",
            images: [
              {
                id: "gid://shopify/MediaImage/28497437032624",
                altText:
                  "Top and bottom view of a snowboard. The top view shows a stylized scene of water, trees, mountains,\n        sky and a moon in blue colours. The bottom view has a blue liquid, drippy background with the text “liquid” in\n        a stylized script typeface.",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1749633224",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203479212208",
                name: "Title",
                position: 1,
                values: ["Default Title"],
              },
            ],
            productType: "snowboard",
            publishedAt: "2025-06-11T09:13:44Z",
            tags: ["Accessory", "Sport", "Winter"],
            templateSuffix: null,
            title: "The Collection Snowboard: Liquid",
            totalInventory: 50,
            totalVariants: 1,
            tracksInventory: true,
            updatedAt: "2025-11-18T06:17:13Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:43Z",
                displayName: "The Collection Snowboard: Liquid - Default Title",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509563191472",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432508592",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 50,
                position: 1,
                price: "749.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871797002416",
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
                updatedAt: "2025-06-11T09:13:43Z",
                weight: 0,
                weightUnit: "KILOGRAMS",
              },
            ],
            vendor: "Hydrogen Vendor",
            status: "ACTIVE",
            minimumOrder: "1",
            required: false,
            multiItemSelect: false,
          },
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
        ],
        display: {
          productPages: true,
          popUp: false,
          bundle: false,
          productPagesList: [
            "gid://shopify/Product/7871797002416",
            "gid://shopify/Product/7871796871344",
          ],
        },
      },
      startdate: "",
      endDate: "",
      timeZone: "America/New_York",
      createdAt: "2025-11-18T09:00:11.315Z",
      updatedAt: "2025-11-21T06:48:10.074Z",
      __v: 0,
    },
    {
      _id: "691c6f9e1ac2e80fd7aec97c",
      shop: "pallavitestingstore.myshopify.com",
      type: "bxgy",
      name: "Create Buy X get Y",
      description: "Create Buy X get Y Create Buy X get Y",
      title: "Create Buy X get Y",
      status: "active",
      currencyCode: "Rs. {{amount}}",
      bundleDetail: {
        discountType: "free",
        discountValue: 5,
        discountCombination: [
          "productDiscounts",
          "orderDiscounts",
          "shippingDiscounts",
        ],
        xproducts: [
          {
            availablePublicationCount: 3,
            createdAt: "2025-06-11T09:13:43Z",
            descriptionHtml: "",
            handle: "the-collection-snowboard-liquid",
            hasOnlyDefaultVariant: true,
            id: "gid://shopify/Product/7871797002416",
            images: [
              {
                id: "gid://shopify/MediaImage/28497437032624",
                altText:
                  "Top and bottom view of a snowboard. The top view shows a stylized scene of water, trees, mountains,\n        sky and a moon in blue colours. The bottom view has a blue liquid, drippy background with the text “liquid” in\n        a stylized script typeface.",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1749633224",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203479212208",
                name: "Title",
                position: 1,
                values: ["Default Title"],
              },
            ],
            productType: "snowboard",
            publishedAt: "2025-06-11T09:13:44Z",
            tags: ["Accessory", "Sport", "Winter"],
            templateSuffix: null,
            title: "The Collection Snowboard: Liquid",
            totalInventory: 50,
            totalVariants: 1,
            tracksInventory: true,
            updatedAt: "2025-11-18T06:17:13Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:43Z",
                displayName: "The Collection Snowboard: Liquid - Default Title",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509563191472",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432508592",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 50,
                position: 1,
                price: "749.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871797002416",
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
                updatedAt: "2025-06-11T09:13:43Z",
                weight: 0,
                weightUnit: "KILOGRAMS",
              },
            ],
            vendor: "Hydrogen Vendor",
            status: "ACTIVE",
            minimumOrder: 1,
          },
        ],
        yproducts: [
          {
            availablePublicationCount: 3,
            createdAt: "2025-06-11T09:13:41Z",
            descriptionHtml: "",
            handle: "the-inventory-not-tracked-snowboard",
            hasOnlyDefaultVariant: true,
            id: "gid://shopify/Product/7871796478128",
            images: [
              {
                id: "gid://shopify/MediaImage/28497436410032",
                altText:
                  "Top and bottom view of a snowboard. The top view shows a centred hexagonal logo for Hydrogen that\n          appears to radiate outwards, as well as some overlapping hexagons at the bottom. The bottom view shows an\n          abstract angular grid in purples.",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/snowboard_purple_hydrogen.png?v=1749633223",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203478687920",
                name: "Title",
                position: 1,
                values: ["Default Title"],
              },
            ],
            productType: "snowboard",
            publishedAt: "2025-06-11T09:13:42Z",
            tags: ["Accessory", "Sport", "Winter"],
            templateSuffix: null,
            title: "The Inventory Not Tracked Snowboard",
            totalInventory: 0,
            totalVariants: 1,
            tracksInventory: false,
            updatedAt: "2025-11-18T06:17:11Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:41Z",
                displayName:
                  "The Inventory Not Tracked Snowboard - Default Title",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509562372272",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597431689392",
                },
                inventoryManagement: "NOT_MANAGED",
                inventoryPolicy: "DENY",
                inventoryQuantity: 0,
                position: 1,
                price: "949.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796478128",
                },
                requiresShipping: true,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "Default Title",
                  },
                ],
                sku: "sku-untracked-1",
                taxable: true,
                title: "Default Title",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 0,
                weightUnit: "KILOGRAMS",
              },
            ],
            vendor: "pallavitestingstore",
            status: "ACTIVE",
            minimumOrder: 1,
          },
        ],
        display: {
          productPages: true,
          popUp: false,
          bundle: false,
          productPagesList: [
            "gid://shopify/Product/7871797002416",
            "gid://shopify/Product/7871796478128",
          ],
        },
      },
      startdate: "",
      endDate: "",
      timeZone: "America/New_York",
      createdAt: "2025-11-18T13:07:42.530Z",
      updatedAt: "2025-11-21T06:48:14.095Z",
      __v: 0,
    },
    {
      _id: "691d9797ba9de3b61aba5597",
      shop: "pallavitestingstore.myshopify.com",
      type: "volumeBundle",
      name: "VolumeSpecific Product",
      description: "Volume Bundle",
      title: "Volume Bundle",
      status: "active",
      bundleDetail: {
        products: [
          {
            availablePublicationCount: 3,
            createdAt: "2025-06-11T09:13:43Z",
            descriptionHtml: "",
            handle: "the-collection-snowboard-liquid",
            hasOnlyDefaultVariant: true,
            id: "gid://shopify/Product/7871797002416",
            images: [
              {
                id: "gid://shopify/MediaImage/28497437032624",
                altText:
                  "Top and bottom view of a snowboard. The top view shows a stylized scene of water, trees, mountains,\n        sky and a moon in blue colours. The bottom view has a blue liquid, drippy background with the text “liquid” in\n        a stylized script typeface.",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1749633224",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203479212208",
                name: "Title",
                position: 1,
                values: ["Default Title"],
              },
            ],
            productType: "snowboard",
            publishedAt: "2025-06-11T09:13:44Z",
            tags: ["Accessory", "Sport", "Winter"],
            templateSuffix: null,
            title: "The Collection Snowboard: Liquid",
            totalInventory: 50,
            totalVariants: 1,
            tracksInventory: true,
            updatedAt: "2025-11-18T06:17:13Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:43Z",
                displayName: "The Collection Snowboard: Liquid - Default Title",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509563191472",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432508592",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 50,
                position: 1,
                price: "749.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871797002416",
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
                updatedAt: "2025-06-11T09:13:43Z",
                weight: 0,
                weightUnit: "KILOGRAMS",
              },
            ],
            vendor: "Hydrogen Vendor",
            status: "ACTIVE",
          },
        ],
        discountedProductType: "specific_product",
        discountOptions: [
          {
            quantity: 2,
            type: "percent",
            value: "25",
            badgeText: "",
            description: "Buy 2 & Save {discount}",
          },
          {
            quantity: 3,
            type: "percent",
            value: "50",
            description: "Buy 3 & Save {discount}",
          },
        ],
        discountCombination: [
          "productDiscounts",
          "orderDiscounts",
          "shippingDiscounts",
        ],
        allowDiscountOnIncrease: false,
        display: {
          productPages: true,
          bundle: false,
          id: "",
          productPagesList: ["gid://shopify/Product/7871797002416"],
        },
      },
      startdate: "",
      endDate: "",
      timeZone: "America/New_York",
      createdAt: "2025-11-19T10:10:31.435Z",
      updatedAt: "2025-11-21T06:48:17.299Z",
      __v: 0,
    },
    {
      _id: "691ed4df5290efcb91068b20",
      shop: "pallavitestingstore.myshopify.com",
      type: "productMixMatch",
      name: "Product Mix & Match Bundle",
      description: "Product Mix & Match Bundle",
      title: "Product Mix & Match Bundle",
      status: "active",
      currencyCode: "Rs. {{amount}}",
      bundleDetail: {
        products: [
          {
            availablePublicationCount: 3,
            createdAt: "2025-06-11T09:13:42Z",
            descriptionHtml: "",
            handle: "the-collection-snowboard-hydrogen",
            hasOnlyDefaultVariant: true,
            id: "gid://shopify/Product/7871796576432",
            images: [
              {
                id: "gid://shopify/MediaImage/28497436508336",
                altText:
                  "Top and bottom view of a snowboard. The top view shows stylized hydrogen bonds and the bottom view\n        shows “H2” in a brush script typeface.",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1749633223",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203478786224",
                name: "Title",
                position: 1,
                values: ["Default Title"],
              },
            ],
            productType: "snowboard",
            publishedAt: "2025-06-11T09:13:43Z",
            tags: ["Accessory", "Sport", "Winter"],
            templateSuffix: null,
            title: "The Collection Snowboard: Hydrogen",
            totalInventory: 44,
            totalVariants: 1,
            tracksInventory: true,
            updatedAt: "2025-11-20T10:52:45Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName:
                  "The Collection Snowboard: Hydrogen - Default Title",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509562568880",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597431886000",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 44,
                position: 1,
                price: "600.00",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796576432",
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
                updatedAt: "2025-11-20T10:52:45Z",
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
            createdAt: "2025-06-11T09:13:43Z",
            descriptionHtml: "",
            handle: "the-collection-snowboard-liquid",
            hasOnlyDefaultVariant: true,
            id: "gid://shopify/Product/7871797002416",
            images: [
              {
                id: "gid://shopify/MediaImage/28497437032624",
                altText:
                  "Top and bottom view of a snowboard. The top view shows a stylized scene of water, trees, mountains,\n        sky and a moon in blue colours. The bottom view has a blue liquid, drippy background with the text “liquid” in\n        a stylized script typeface.",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1749633224",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203479212208",
                name: "Title",
                position: 1,
                values: ["Default Title"],
              },
            ],
            productType: "snowboard",
            publishedAt: "2025-06-11T09:13:44Z",
            tags: ["Accessory", "Sport", "Winter"],
            templateSuffix: null,
            title: "The Collection Snowboard: Liquid",
            totalInventory: 47,
            totalVariants: 1,
            tracksInventory: true,
            updatedAt: "2025-11-20T10:52:45Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:43Z",
                displayName: "The Collection Snowboard: Liquid - Default Title",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509563191472",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432508592",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 47,
                position: 1,
                price: "749.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871797002416",
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
                updatedAt: "2025-11-20T10:52:45Z",
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
            createdAt: "2025-06-11T09:15:18Z",
            descriptionHtml: "description plann",
            handle: "first",
            hasOnlyDefaultVariant: false,
            id: "gid://shopify/Product/7871797297328",
            images: [],
            options: [
              {
                id: "gid://shopify/ProductOption/10203479507120",
                name: "Title",
                position: 1,
                values: ["tier1"],
              },
            ],
            productType: "sd-membership",
            publishedAt: "2025-06-11T09:15:19Z",
            tags: [],
            templateSuffix: null,
            title: "first",
            totalInventory: 0,
            totalVariants: 1,
            tracksInventory: false,
            updatedAt: "2025-11-18T06:17:13Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:15:18Z",
                displayName: "first - tier1",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509563584688",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432901808",
                },
                inventoryManagement: "NOT_MANAGED",
                inventoryPolicy: "DENY",
                inventoryQuantity: -24,
                position: 1,
                price: "23.00",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871797297328",
                },
                requiresShipping: true,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "tier1",
                  },
                ],
                sku: "sd-membership-plan:tier1",
                taxable: false,
                title: "tier1",
                updatedAt: "2025-07-21T01:00:25Z",
                weight: 0,
                weightUnit: "KILOGRAMS",
              },
            ],
            vendor: "Membership Product",
            status: "ACTIVE",
            minimumOrder: 1,
            required: false,
            multiItemSelect: false,
          },
          {
            availablePublicationCount: 3,
            createdAt: "2025-06-11T09:13:41Z",
            descriptionHtml: "This is a gift card for the store",
            handle: "gift-card",
            hasOnlyDefaultVariant: false,
            id: "gid://shopify/Product/7871796510896",
            images: [
              {
                id: "gid://shopify/MediaImage/28497436442800",
                altText: "Gift card that shows text: Generated data gift card",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/gift_card.png?v=1749633223",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203478720688",
                name: "Denominations",
                position: 1,
                values: ["$10", "$25", "$50", "$100"],
              },
            ],
            productType: "giftcard",
            publishedAt: "2025-06-11T09:13:42Z",
            tags: [],
            templateSuffix: null,
            title: "Gift Card",
            totalInventory: 0,
            totalVariants: 4,
            tracksInventory: false,
            updatedAt: "2025-11-18T06:17:11Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "Gift Card - $10",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/gift_card",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Gift Card",
                  type: "GIFT_CARD",
                },
                id: "gid://shopify/ProductVariant/44509562405040",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597431722160",
                },
                inventoryManagement: "NOT_MANAGED",
                inventoryPolicy: "DENY",
                inventoryQuantity: 0,
                position: 1,
                price: "10.00",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796510896",
                },
                requiresShipping: false,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "$10",
                  },
                ],
                sku: null,
                taxable: false,
                title: "$10",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 0,
                weightUnit: "KILOGRAMS",
              },
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "Gift Card - $25",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/gift_card",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Gift Card",
                  type: "GIFT_CARD",
                },
                id: "gid://shopify/ProductVariant/44509562437808",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597431754928",
                },
                inventoryManagement: "NOT_MANAGED",
                inventoryPolicy: "DENY",
                inventoryQuantity: 0,
                position: 2,
                price: "25.00",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796510896",
                },
                requiresShipping: false,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "$25",
                  },
                ],
                sku: null,
                taxable: false,
                title: "$25",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 0,
                weightUnit: "KILOGRAMS",
              },
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "Gift Card - $50",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/gift_card",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Gift Card",
                  type: "GIFT_CARD",
                },
                id: "gid://shopify/ProductVariant/44509562470576",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597431787696",
                },
                inventoryManagement: "NOT_MANAGED",
                inventoryPolicy: "DENY",
                inventoryQuantity: 0,
                position: 3,
                price: "50.00",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796510896",
                },
                requiresShipping: false,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "$50",
                  },
                ],
                sku: null,
                taxable: false,
                title: "$50",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 0,
                weightUnit: "KILOGRAMS",
              },
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "Gift Card - $100",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/gift_card",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Gift Card",
                  type: "GIFT_CARD",
                },
                id: "gid://shopify/ProductVariant/44509562503344",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597431820464",
                },
                inventoryManagement: "NOT_MANAGED",
                inventoryPolicy: "DENY",
                inventoryQuantity: 0,
                position: 4,
                price: "100.00",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796510896",
                },
                requiresShipping: false,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "$100",
                  },
                ],
                sku: null,
                taxable: false,
                title: "$100",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 0,
                weightUnit: "KILOGRAMS",
              },
            ],
            vendor: "Snowboard Vendor",
            status: "ACTIVE",
            minimumOrder: 1,
            required: false,
            multiItemSelect: false,
          },
          {
            availablePublicationCount: 3,
            createdAt: "2025-06-11T09:13:42Z",
            descriptionHtml: "",
            handle: "selling-plans-ski-wax",
            hasOnlyDefaultVariant: false,
            id: "gid://shopify/Product/7871796740272",
            images: [
              {
                id: "gid://shopify/MediaImage/28497436606640",
                altText: "A bar of golden yellow wax",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/snowboard_wax.png?v=1749633223",
              },
              {
                id: "gid://shopify/MediaImage/28497436770480",
                altText: "A bar of purple wax",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/wax-special.png?v=1749633223",
              },
              {
                id: "gid://shopify/MediaImage/28497436836016",
                altText: "a small cube of wax",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/sample-normal-wax.png?v=1749633224",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203478884528",
                name: "Title",
                position: 1,
                values: [
                  "Selling Plans Ski Wax",
                  "Special Selling Plans Ski Wax",
                  "Sample Selling Plans Ski Wax",
                ],
              },
            ],
            productType: "accessories",
            publishedAt: "2025-06-11T09:13:42Z",
            tags: ["Accessory", "Sport", "Winter"],
            templateSuffix: null,
            title: "Selling Plans Ski Wax",
            totalInventory: 30,
            totalVariants: 3,
            tracksInventory: true,
            updatedAt: "2025-11-18T06:17:12Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "Selling Plans Ski Wax - Selling Plans Ski Wax",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509562962096",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432279216",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 10,
                position: 1,
                price: "24.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796740272",
                },
                requiresShipping: true,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "Selling Plans Ski Wax",
                  },
                ],
                sku: null,
                taxable: true,
                title: "Selling Plans Ski Wax",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 2,
                weightUnit: "OUNCES",
              },
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName:
                  "Selling Plans Ski Wax - Special Selling Plans Ski Wax",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509562994864",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432311984",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 10,
                position: 2,
                price: "49.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796740272",
                },
                requiresShipping: true,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "Special Selling Plans Ski Wax",
                  },
                ],
                sku: null,
                taxable: true,
                title: "Special Selling Plans Ski Wax",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 2.5,
                weightUnit: "OUNCES",
              },
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName:
                  "Selling Plans Ski Wax - Sample Selling Plans Ski Wax",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509563027632",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432344752",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 10,
                position: 3,
                price: "9.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796740272",
                },
                requiresShipping: true,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "Sample Selling Plans Ski Wax",
                  },
                ],
                sku: null,
                taxable: true,
                title: "Sample Selling Plans Ski Wax",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 0.5,
                weightUnit: "OUNCES",
              },
            ],
            vendor: "pallavitestingstore",
            status: "ACTIVE",
            minimumOrder: 1,
            required: false,
            multiItemSelect: false,
          },
          {
            availablePublicationCount: 3,
            createdAt: "2025-06-11T09:13:42Z",
            descriptionHtml: "",
            handle: "the-3p-fulfilled-snowboard",
            hasOnlyDefaultVariant: true,
            id: "gid://shopify/Product/7871796969648",
            images: [
              {
                id: "gid://shopify/MediaImage/28497436967088",
                altText:
                  "Top and bottom view of a snowboard. The top view shows 7 stacked hexagons and the bottom view\n          shows a small, centred hexagonal logo for Hydrogen.",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_b9e0da7f-db89-4d41-83f0-7f417b02831d.jpg?v=1749633224",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203479179440",
                name: "Title",
                position: 1,
                values: ["Default Title"],
              },
            ],
            productType: "snowboard",
            publishedAt: "2025-06-11T09:13:43Z",
            tags: ["Accessory", "Sport", "Winter"],
            templateSuffix: null,
            title: "The 3p Fulfilled Snowboard",
            totalInventory: 20,
            totalVariants: 1,
            tracksInventory: true,
            updatedAt: "2025-11-18T06:17:13Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:43Z",
                displayName: "The 3p Fulfilled Snowboard - Default Title",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509563158704",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432475824",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 20,
                position: 1,
                price: "2629.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796969648",
                },
                requiresShipping: true,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "Default Title",
                  },
                ],
                sku: "sku-hosted-1",
                taxable: true,
                title: "Default Title",
                updatedAt: "2025-06-11T09:13:45Z",
                weight: 0,
                weightUnit: "KILOGRAMS",
              },
            ],
            vendor: "pallavitestingstore",
            status: "ACTIVE",
            minimumOrder: 1,
            required: false,
            multiItemSelect: false,
          },
          {
            availablePublicationCount: 3,
            createdAt: "2025-06-11T09:13:42Z",
            descriptionHtml: "",
            handle: "the-compare-at-price-snowboard",
            hasOnlyDefaultVariant: true,
            id: "gid://shopify/Product/7871796609200",
            images: [
              {
                id: "gid://shopify/MediaImage/28497436573872",
                altText:
                  "Top and bottom view of a snowboard. The top view shows pixelated clouds, with the top-most one being\n        the shape of the Shopify bag logo. The bottom view has a pixelated cloudy sky with blue, pink and purple\n        colours.",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/snowboard_sky.png?v=1749633224",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203478818992",
                name: "Title",
                position: 1,
                values: ["Default Title"],
              },
            ],
            productType: "snowboard",
            publishedAt: "2025-06-11T09:13:42Z",
            tags: ["Accessory", "Sport", "Winter"],
            templateSuffix: null,
            title: "The Compare at Price Snowboard",
            totalInventory: 10,
            totalVariants: 1,
            tracksInventory: true,
            updatedAt: "2025-11-18T06:17:12Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: "885.95",
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "The Compare at Price Snowboard - Default Title",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509562601648",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597431918768",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 10,
                position: 1,
                price: "785.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796609200",
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
            vendor: "pallavitestingstore",
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
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "The Complete Snowboard - Ice",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509562699952",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432115376",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 10,
                position: 1,
                price: "699.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796707504",
                },
                requiresShipping: true,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "Ice",
                  },
                ],
                sku: null,
                taxable: true,
                title: "Ice",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 10,
                weightUnit: "POUNDS",
              },
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "The Complete Snowboard - Dawn",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509562732720",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432148144",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 10,
                position: 2,
                price: "699.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796707504",
                },
                requiresShipping: true,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "Dawn",
                  },
                ],
                sku: null,
                taxable: true,
                title: "Dawn",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 10,
                weightUnit: "POUNDS",
              },
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "The Complete Snowboard - Powder",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509562798256",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432180912",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 10,
                position: 3,
                price: "699.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796707504",
                },
                requiresShipping: true,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "Powder",
                  },
                ],
                sku: null,
                taxable: true,
                title: "Powder",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 10,
                weightUnit: "POUNDS",
              },
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "The Complete Snowboard - Electric",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509562831024",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432213680",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 10,
                position: 4,
                price: "699.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796707504",
                },
                requiresShipping: true,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "Electric",
                  },
                ],
                sku: null,
                taxable: true,
                title: "Electric",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 10,
                weightUnit: "POUNDS",
              },
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "The Complete Snowboard - Sunset",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509562896560",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432246448",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 10,
                position: 5,
                price: "699.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796707504",
                },
                requiresShipping: true,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "Sunset",
                  },
                ],
                sku: null,
                taxable: true,
                title: "Sunset",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 10,
                weightUnit: "POUNDS",
              },
            ],
            vendor: "Snowboard Vendor",
            status: "ACTIVE",
            minimumOrder: 1,
            required: false,
            multiItemSelect: false,
          },
          {
            availablePublicationCount: 3,
            createdAt: "2025-06-11T09:13:41Z",
            descriptionHtml: "",
            handle: "the-inventory-not-tracked-snowboard",
            hasOnlyDefaultVariant: true,
            id: "gid://shopify/Product/7871796478128",
            images: [
              {
                id: "gid://shopify/MediaImage/28497436410032",
                altText:
                  "Top and bottom view of a snowboard. The top view shows a centred hexagonal logo for Hydrogen that\n          appears to radiate outwards, as well as some overlapping hexagons at the bottom. The bottom view shows an\n          abstract angular grid in purples.",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/snowboard_purple_hydrogen.png?v=1749633223",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203478687920",
                name: "Title",
                position: 1,
                values: ["Default Title"],
              },
            ],
            productType: "snowboard",
            publishedAt: "2025-06-11T09:13:42Z",
            tags: ["Accessory", "Sport", "Winter"],
            templateSuffix: null,
            title: "The Inventory Not Tracked Snowboard",
            totalInventory: 0,
            totalVariants: 1,
            tracksInventory: false,
            updatedAt: "2025-11-18T06:17:11Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:41Z",
                displayName:
                  "The Inventory Not Tracked Snowboard - Default Title",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509562372272",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597431689392",
                },
                inventoryManagement: "NOT_MANAGED",
                inventoryPolicy: "DENY",
                inventoryQuantity: 0,
                position: 1,
                price: "949.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796478128",
                },
                requiresShipping: true,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "Default Title",
                  },
                ],
                sku: "sku-untracked-1",
                taxable: true,
                title: "Default Title",
                updatedAt: "2025-06-11T09:13:42Z",
                weight: 0,
                weightUnit: "KILOGRAMS",
              },
            ],
            vendor: "pallavitestingstore",
            status: "ACTIVE",
            minimumOrder: 1,
            required: false,
            multiItemSelect: false,
          },
          {
            availablePublicationCount: 3,
            createdAt: "2025-06-11T09:13:42Z",
            descriptionHtml: "",
            handle: "the-multi-location-snowboard",
            hasOnlyDefaultVariant: true,
            id: "gid://shopify/Product/7871796904112",
            images: [
              {
                id: "gid://shopify/MediaImage/28497436901552",
                altText:
                  "Top and bottom view of a snowboard. The top view shows a pixelated Shopify bag logo and a\n        pixelated character reviewing a clipboard with a questioning expression with a bright green-blue background.\n        The bottom view is a pattern of many pixel characters with a bright green-blue background.",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_0a4e9096-021a-4c1e-8750-24b233166a12.jpg?v=1749633224",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203479113904",
                name: "Title",
                position: 1,
                values: ["Default Title"],
              },
            ],
            productType: "snowboard",
            publishedAt: "2025-06-11T09:13:43Z",
            tags: ["Premium", "Snow", "Snowboard", "Sport", "Winter"],
            templateSuffix: null,
            title: "The Multi-location Snowboard",
            totalInventory: 99,
            totalVariants: 1,
            tracksInventory: true,
            updatedAt: "2025-11-20T11:04:11Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "The Multi-location Snowboard - Default Title",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509563093168",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432410288",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 99,
                position: 1,
                price: "729.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796904112",
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
                updatedAt: "2025-11-20T11:04:11Z",
                weight: 0,
                weightUnit: "KILOGRAMS",
              },
            ],
            vendor: "pallavitestingstore",
            status: "ACTIVE",
            minimumOrder: 1,
            required: false,
            multiItemSelect: false,
          },
          {
            availablePublicationCount: 3,
            createdAt: "2025-06-11T09:13:42Z",
            descriptionHtml: "",
            handle: "the-multi-managed-snowboard",
            hasOnlyDefaultVariant: true,
            id: "gid://shopify/Product/7871796936880",
            images: [
              {
                id: "gid://shopify/MediaImage/28497436934320",
                altText:
                  "Top and bottom view of a snowboard. The top view shows an illustration with varied outlined shapes\n        in black. The bottom view shows a black box character with an H pointing, and surrounded by black outlined\n        illustrative elements.",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_9129b69a-0c7b-4f66-b6cf-c4222f18028a.jpg?v=1749633224",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203479146672",
                name: "Title",
                position: 1,
                values: ["Default Title"],
              },
            ],
            productType: "snowboard",
            publishedAt: "2025-06-11T09:13:43Z",
            tags: ["Premium", "Snow", "Snowboard", "Sport", "Winter"],
            templateSuffix: null,
            title: "The Multi-managed Snowboard",
            totalInventory: 94,
            totalVariants: 1,
            tracksInventory: true,
            updatedAt: "2025-11-20T11:03:16Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:43Z",
                displayName: "The Multi-managed Snowboard - Default Title",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509563125936",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432443056",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 94,
                position: 1,
                price: "629.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796936880",
                },
                requiresShipping: true,
                selectedOptions: [
                  {
                    __typename: "SelectedOption",
                    value: "Default Title",
                  },
                ],
                sku: "sku-managed-1",
                taxable: true,
                title: "Default Title",
                updatedAt: "2025-11-20T11:03:16Z",
                weight: 0,
                weightUnit: "KILOGRAMS",
              },
            ],
            vendor: "Multi-managed Vendor",
            status: "ACTIVE",
            minimumOrder: 1,
            required: false,
            multiItemSelect: false,
          },
          {
            availablePublicationCount: 3,
            createdAt: "2025-06-11T09:13:42Z",
            descriptionHtml: "",
            handle: "the-out-of-stock-snowboard",
            hasOnlyDefaultVariant: true,
            id: "gid://shopify/Product/7871796805808",
            images: [
              {
                id: "gid://shopify/MediaImage/28497436704944",
                altText:
                  "Top and bottom view of a snowboard. The top view shows a toggle at the top in shades of blue and\n        yellow. The bottom view shows an abstract illustration of toggles in blues and yellows.",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_f44a9605-cd62-464d-b095-d45cdaa0d0d7.jpg?v=1749633223",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203479015600",
                name: "Title",
                position: 1,
                values: ["Default Title"],
              },
            ],
            productType: "snowboard",
            publishedAt: "2025-06-11T09:13:42Z",
            tags: ["Accessory", "Sport", "Winter"],
            templateSuffix: null,
            title: "The Out of Stock Snowboard",
            totalInventory: 0,
            totalVariants: 1,
            tracksInventory: true,
            updatedAt: "2025-11-18T06:17:12Z",
            variants: [
              {
                availableForSale: false,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "The Out of Stock Snowboard - Default Title",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509562765488",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432017072",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 0,
                position: 1,
                price: "885.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796805808",
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
            vendor: "pallavitestingstore",
            status: "ACTIVE",
            minimumOrder: 1,
            required: false,
            multiItemSelect: false,
          },
          {
            availablePublicationCount: 3,
            createdAt: "2025-06-11T09:13:42Z",
            descriptionHtml: "",
            handle: "the-videographer-snowboard",
            hasOnlyDefaultVariant: true,
            id: "gid://shopify/Product/7871796543664",
            images: [
              {
                id: "gid://shopify/MediaImage/28497436475568",
                altText:
                  "The top and bottom view of a snowboard. The top has view is turquoise and black with graphics of\n        trees. The bottom view is turquoise with the word hydrogen written in cursive.",
                originalSrc:
                  "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main.jpg?v=1749633223",
              },
            ],
            options: [
              {
                id: "gid://shopify/ProductOption/10203478753456",
                name: "Title",
                position: 1,
                values: ["Default Title"],
              },
            ],
            productType: "snowboard",
            publishedAt: "2025-06-11T09:13:42Z",
            tags: [],
            templateSuffix: null,
            title: "The Videographer Snowboard",
            totalInventory: 50,
            totalVariants: 1,
            tracksInventory: true,
            updatedAt: "2025-11-18T06:17:11Z",
            variants: [
              {
                availableForSale: true,
                barcode: null,
                compareAtPrice: null,
                createdAt: "2025-06-11T09:13:42Z",
                displayName: "The Videographer Snowboard - Default Title",
                fulfillmentService: {
                  id: "gid://shopify/FulfillmentService/manual",
                  inventoryManagement: false,
                  productBased: true,
                  serviceName: "Manual",
                  type: "MANUAL",
                },
                id: "gid://shopify/ProductVariant/44509562863792",
                inventoryItem: {
                  __typename: "InventoryItem",
                  id: "gid://shopify/InventoryItem/46597432049840",
                },
                inventoryManagement: "SHOPIFY",
                inventoryPolicy: "DENY",
                inventoryQuantity: 50,
                position: 1,
                price: "885.95",
                product: {
                  __typename: "Product",
                  id: "gid://shopify/Product/7871796543664",
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
            vendor: "pallavitestingstore",
            status: "ACTIVE",
            minimumOrder: 1,
            required: false,
            multiItemSelect: false,
          },
        ],
        discountedProductType: "specific_product",
        discountOptions: [
          {
            quantity: 2,
            type: "percent",
            value: "25",
          },
          {
            quantity: 3,
            type: "percent",
            value: "50",
          },
          {
            quantity: 4,
            type: "percent",
            value: "75",
          },
        ],
        discountCombination: [
          "productDiscounts",
          "orderDiscounts",
          "shippingDiscounts",
        ],
        allowDiscountOnIncrease: false,
        display: {
          productPages: true,
          popUp: false,
          bundle: false,
          productPagesList: [
            "gid://shopify/Product/7871796576432",
            "gid://shopify/Product/7871797002416",
            "gid://shopify/Product/7871796871344",
            "gid://shopify/Product/7871797297328",
            "gid://shopify/Product/7871796510896",
            "gid://shopify/Product/7871796740272",
            "gid://shopify/Product/7871796969648",
            "gid://shopify/Product/7871796609200",
            "gid://shopify/Product/7871796707504",
            "gid://shopify/Product/7871796478128",
            "gid://shopify/Product/7871796904112",
            "gid://shopify/Product/7871796936880",
            "gid://shopify/Product/7871796805808",
            "gid://shopify/Product/7871796543664",
          ],
        },
        requiredItem: {
          enable: true,
        },
        multiItemSelection: {
          enable: true,
        },
        multiProductsArray: {
          multiProductArray: [
            {
              availablePublicationCount: 3,
              createdAt: "2025-06-11T09:13:42Z",
              descriptionHtml: "",
              handle: "the-collection-snowboard-hydrogen",
              hasOnlyDefaultVariant: true,
              id: "gid://shopify/Product/7871796576432",
              images: [
                {
                  id: "gid://shopify/MediaImage/28497436508336",
                  altText:
                    "Top and bottom view of a snowboard. The top view shows stylized hydrogen bonds and the bottom view\n        shows “H2” in a brush script typeface.",
                  originalSrc:
                    "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1749633223",
                },
              ],
              options: [
                {
                  id: "gid://shopify/ProductOption/10203478786224",
                  name: "Title",
                  position: 1,
                  values: ["Default Title"],
                },
              ],
              productType: "snowboard",
              publishedAt: "2025-06-11T09:13:43Z",
              tags: ["Accessory", "Sport", "Winter"],
              templateSuffix: null,
              title: "The Collection Snowboard: Hydrogen",
              totalInventory: 50,
              totalVariants: 1,
              tracksInventory: true,
              updatedAt: "2025-11-18T06:17:11Z",
              variants: [
                {
                  availableForSale: true,
                  barcode: null,
                  compareAtPrice: null,
                  createdAt: "2025-06-11T09:13:42Z",
                  displayName:
                    "The Collection Snowboard: Hydrogen - Default Title",
                  fulfillmentService: {
                    id: "gid://shopify/FulfillmentService/manual",
                    inventoryManagement: false,
                    productBased: true,
                    serviceName: "Manual",
                    type: "MANUAL",
                  },
                  id: "gid://shopify/ProductVariant/44509562568880",
                  inventoryItem: {
                    __typename: "InventoryItem",
                    id: "gid://shopify/InventoryItem/46597431886000",
                  },
                  inventoryManagement: "SHOPIFY",
                  inventoryPolicy: "DENY",
                  inventoryQuantity: 50,
                  position: 1,
                  price: "600.00",
                  product: {
                    __typename: "Product",
                    id: "gid://shopify/Product/7871796576432",
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
              required: true,
              multiItemSelect: true,
            },
          ],
        },
        requiredProductsArray: {
          requiredProductArray: [
            {
              availablePublicationCount: 3,
              createdAt: "2025-06-11T09:13:42Z",
              descriptionHtml: "",
              handle: "the-collection-snowboard-hydrogen",
              hasOnlyDefaultVariant: true,
              id: "gid://shopify/Product/7871796576432",
              images: [
                {
                  id: "gid://shopify/MediaImage/28497436508336",
                  altText:
                    "Top and bottom view of a snowboard. The top view shows stylized hydrogen bonds and the bottom view\n        shows “H2” in a brush script typeface.",
                  originalSrc:
                    "https://cdn.shopify.com/s/files/1/0690/2084/4208/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1749633223",
                },
              ],
              options: [
                {
                  id: "gid://shopify/ProductOption/10203478786224",
                  name: "Title",
                  position: 1,
                  values: ["Default Title"],
                },
              ],
              productType: "snowboard",
              publishedAt: "2025-06-11T09:13:43Z",
              tags: ["Accessory", "Sport", "Winter"],
              templateSuffix: null,
              title: "The Collection Snowboard: Hydrogen",
              totalInventory: 50,
              totalVariants: 1,
              tracksInventory: true,
              updatedAt: "2025-11-18T06:17:11Z",
              variants: [
                {
                  availableForSale: true,
                  barcode: null,
                  compareAtPrice: null,
                  createdAt: "2025-06-11T09:13:42Z",
                  displayName:
                    "The Collection Snowboard: Hydrogen - Default Title",
                  fulfillmentService: {
                    id: "gid://shopify/FulfillmentService/manual",
                    inventoryManagement: false,
                    productBased: true,
                    serviceName: "Manual",
                    type: "MANUAL",
                  },
                  id: "gid://shopify/ProductVariant/44509562568880",
                  inventoryItem: {
                    __typename: "InventoryItem",
                    id: "gid://shopify/InventoryItem/46597431886000",
                  },
                  inventoryManagement: "SHOPIFY",
                  inventoryPolicy: "DENY",
                  inventoryQuantity: 50,
                  position: 1,
                  price: "600.00",
                  product: {
                    __typename: "Product",
                    id: "gid://shopify/Product/7871796576432",
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
              required: true,
              multiItemSelect: false,
            },
          ],
        },
      },
      startdate: "",
      endDate: "",
      timeZone: "America/New_York",
      createdAt: "2025-11-20T08:44:15.435Z",
      updatedAt: "2025-11-21T04:34:19.831Z",
      __v: 0,
    },
    {
      _id: "691eed585290efcb91068b31",
      shop: "pallavitestingstore.myshopify.com",
      type: "volumeBundle",
      name: "Volume AllProducts",
      description: "Volume Bundle",
      title: "Volume Bundle 2",
      status: "active",
      bundleDetail: {
        products: [],
        discountedProductType: "all_products",
        discountOptions: [
          {
            quantity: "3",
            type: "percent",
            value: "49",
            badgeText: "",
            description: "Buy 2 & Save {discount}",
          },
          {
            quantity: "5",
            type: "percent",
            value: "80",
            description: "Buy 6 & Save {discount}",
          },
        ],
        discountCombination: [
          "productDiscounts",
          "orderDiscounts",
          "shippingDiscounts",
        ],
        allowDiscountOnIncrease: false,
        display: {
          productPages: true,
        },
      },
      startdate: "",
      endDate: "",
      timeZone: "America/New_York",
      createdAt: "2025-11-20T10:28:40.295Z",
      updatedAt: "2025-11-21T05:35:23.645Z",
      __v: 0,
    },
  ];

  function filterBundles(pId, collId) {
    return BUNDLE_DATA?.filter((bundle) => {
      const detail = bundle.bundleDetail;
      const products = detail?.products || [];

      switch (bundle.type) {
        case "volumeBundle": {
          const type = detail?.discountedProductType;

          if (type === "specific_product") {
            return products.some((prd) => prd.id === pId);
          }

          if (type === "all_products") return true;

          if (type === "collection") {
            return products.some((prd) => collId.includes(prd.collectionId));
          }

          return false;
        }

        case "productBundle": {
          return products.some((prd) => prd.id === pId);
        }

        case "bxgy": {
          return (
            detail?.xproducts?.some((prd) => prd.id === pId) ||
            detail?.yproducts?.some((prd) => prd.id === pId)
          );
        }

        case "collectionMixMatch": {
          return products.some((prd) => collId.includes(prd.collectionId));
        }

        case "productMixMatch": {
          return products.some((prd) => prd.id === pId);
        }

        case "fbt": {
          const main = detail?.mainProducts?.some((prd) => prd.id === pId);
          const offered = detail?.offeredProducts?.some(
            (prd) => prd.id === pId
          );
          const all = detail?.discountedProductType === "all_products";

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

  const candidates = [];

  // Process each cart line
  for (const line of input.cart.lines) {
    
    // Skip if not a product variant
    if (line.merchandise.__typename !== "ProductVariant") {
      continue;
    }
    const pId = line.merchandise.product.id;
    console.log(line.id, "=>", "pId", pId);
    // Check if variant is in target list
    const filteredBundles = filterBundles(pId, []);
    console.log("filteredBundles", filteredBundles?.length);
    filteredBundles?.map((bundle, index) => {
      console.log(index, "==>", bundle.name, " ", bundle.type);
      const detail = bundle?.bundleDetail;
      // PRODUCT BUNDLE
      if (bundle.type === "productBundle") {
        console.log(
          "discountType:",
          detail?.discountType,
          ",",
          "discountValue:",
          detail?.discountValue
        );
        console.log();
      }

      // VOLUME BUNDLE
      if (bundle.type === "volumeBundle") {
        [...(detail?.discountOptions || [])]
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
              if (line.quantity >= option.quantity) {
                const isPercent = option.type === "percent";

                const discountValue = isPercent
                  ? { percentage: { value: option.value } }
                  : { fixedAmount: { amount: option.value } };

                const message = isPercent
                  ? `${bundle.name} ${option.value}% Off`
                  : `${bundle.name} ₹${option.value} Off`;

                candidates.push({
                  value: discountValue,
                  targets: [
                    {
                      cartLine: { id: line.id },
                    },
                  ],
                  message,
                });
              }
            }
          });
      }

      // COLLECTION MIX MATCH
      if (bundle.type === "collectionMixMatch") {
      }

      // BXGY
      if (bundle.type === "bxgy") {
        // console.log("discountType", detail?.discountType);
        // console.log("discountValue", detail?.discountValue);
        // console.log("xproducts", detail?.xproducts);
        // console.log("yproducts", detail?.yproducts);
      }

      // PRODUCT MIX MATCH
      if (bundle.type === "productMixMatch") {
      }

      // FBT (Frequently Bought Together)
      if (bundle.type === "fbt") {
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
}
