import React, { useEffect, useState } from "react";
import {
  SaveBar,
  TitleBar,
  useAppBridge,
  Modal,
} from "@shopify/app-bridge-react";
import {
  BlockStack,
  Button,
  Card,
  Checkbox,
  Grid,
  InlineStack,
  Page,
  RadioButton,
  ResourceList,
  Select,
  Text,
  TextField,
  Thumbnail,
} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import defaultData from "../../components/customization/defaultData.json";
import { useAPI } from "../../components/shop";
import { DeleteIcon, SearchIcon } from "@shopify/polaris-icons";

const CreateBundle = () => {
  const { shop, timeZone, currencyCode } = useAPI();
  const navigate = useNavigate();
  const app = useAppBridge();
  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState({
    shop: shop,
    type: "productBundle",
    name: "",
    title: "",
    description: "",
    badgeText: "",  
    status: "active",
    startdate: "",
    endDate: "",
    currencyCode: currencyCode,
    bundleDetail: {
      discountType: "percent",
      discountValue: 5,
      products: [],
      display: {
        productPages: true,
        popUp: false,
        bundle: false,
        productPagesList: [],
      },
    },
    customization: [defaultData],
    timeZone: timeZone,
  });
  const ResourcePicker = () => {
    let selectedIds = data?.bundleDetail?.products?.filter((el) => el.id);
    shopify
      .resourcePicker({
        type: "product",
        multiple: true,
        action: "select",
        filter: {
          archived: false,
          draft: false,
        },
        query:searchText,
        selectionIds: selectedIds,
      })
      .then((product) => {
        if (product) {
          const updatedArray = product?.map((obj) => {
            return { ...obj, minimumOrder: 1 }; // Add a new key 'age' with the value of 30
          });
          let obj = { ...data };
          obj.bundleDetail.products = updatedArray ?? [];
          setData(obj);
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(data);
  return (
    <>
      <Page
        title="Create Product Bundle"
        backAction={{ onAction: () => shopify.modal.show("my-modal") }}
      >
        <Grid>
          {/* First Column  */}
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <BlockStack gap="400">
              {/* Add product Card  */}
              <Card sectioned>
                <Text as="h2" variant="headingSm">
                  Add product you want to sell
                </Text>
              
               
                  <TextField
                  
                    inputMode="search"
                    size="slim"
                    placeholder="Search Products"
                    value={searchText}
                    onChange={(e)=>{
                      setSearchText(e)
                      ResourcePicker()
                    }}
                    autoComplete="off"
                    suffix={<Button onClick={ResourcePicker} variant="monochromePlain">
                     
                    Browse
                  </Button>}
                  />
                
             
                <ResourceList
                  resourceName={{
                    singular: "product",
                    plural: "products",
                  }}
                  items={data?.bundleDetail?.products}
                  renderItem={(item) => (
                    <ResourceList.Item
                      id={item.id}
                      media={
                        <Thumbnail
                          source={
                            item?.images?.length
                              ? item?.images[0].originalSrc
                              : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-2_large.png?v=1530129132"
                          }
                          alt={
                            item?.images?.length ? item?.images[0].altText : ""
                          }
                        />
                      }
                    >
                      <InlineStack align="space-between">
                        <div>
                          <Text variant="bodyMd" fontWeight="bold" as="h3">
                            {item?.title}
                          </Text>
                          <TextField
                            size="slim"
                            label="Minimum orders"
                            type="number"
                            value={1}
                            // onChange={handleChange}
                            autoComplete="off"
                          />
                        </div>
                        <div>
                          <Button variant="plain">Edit variants</Button>
                          <DeleteIcon width={20} height={20} />
                        </div>
                      </InlineStack>
                      {/* <div>SKU: {sku}</div>
                      <div>{quantity} available</div> */}
                    </ResourceList.Item>
                  )}
                />
              </Card>
              {/* General Card  */}
              <Card sectioned>
                <Text as="h2" variant="headingSm">
                  General
                </Text>
                <BlockStack gap="400">
                  <TextField
                    label={"Name"}
                    inputMode="text"
                    size="slim"
                    helpText={
                      <Text as="p" variant="bodyXs">
                        *This name is used for you to identify this bundle.Your
                        customers won’t see this name.
                      </Text>
                    }
                    // value={value}
                    // value={value}
                    // onChange={handleChange}
                  />

                  <TextField
                    label={"Title"}
                    inputMode="text"
                    size="slim"
                    helpText={
                      <Text as="p" variant="bodyXs">
                        *Customers will see this as the name of the bundle
                        displayed.
                      </Text>
                    }
                    // value={value}
                    // onChange={handleChange}
                  />

                  <TextField
                    label={"Bundle description"}
                    inputMode="text"
                    size="slim"
                    helpText={
                      <Text as="p" variant="bodyXs">
                        *Provide an explanation of the selection limit within
                        this bundle to ensure user awareness.
                      </Text>
                    }
                    // value={value}
                    // onChange={handleChange}
                  />
                </BlockStack>
              </Card>
              {/* Discount Card  */}
              <Card sectioned>
                <Text as="h2" variant="headingSm">
                  Discount
                </Text>
                <Text as="p" variant="bodyXs">
                  Choose type of discount and discount value for each product.
                </Text>
                {/* <Checkbox
          label="Percentage Discount"
          // checked={checked}
          // onChange={handleChange}
        /> */}
                <BlockStack vertical>
                  <RadioButton
                    label="Percentage Discount"
                    // helpText="Customers will only be able to check out as guests."
                    // checked={value === 'disabled'}
                    // id="disabled"
                    name="discount"
                    // onChange={handleChange}
                  />
                  <TextField
                    label="set value for discount"
                    type="number"
                    // value={value}
                    // onChange={handleChange}
                    autoComplete="off"
                    suffix={"%"}
                  />
                  <RadioButton
                    label="Fixed Discount"
                    // helpText="Customers will only be able to check out as guests."
                    // checked={value === 'disabled'}
                    // id="disabled"
                    name="discount"
                    // onChange={handleChange}
                  />
                  <TextField
                    label="set value for discount"
                    type="number"
                    // value={value}
                    // onChange={handleChange}
                    autoComplete="off"
                    suffix={"%"}
                  />
                  <RadioButton
                    label="Free Shipping"
                    // helpText="Customers will only be able to check out as guests."
                    // checked={value === 'disabled'}
                    // id="disabled"
                    name="discount"
                    // onChange={handleChange}
                  />
                  <RadioButton
                    label="No Discount"
                    // helpText="Customers will only be able to check out as guests."
                    // checked={value === 'disabled'}
                    // id="disabled"
                    name="discount"
                    // onChange={handleChange}
                  />
                </BlockStack>
              </Card>
            </BlockStack>
          </Grid.Cell>
          {/* Second Column  */}
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <BlockStack gap="400">
              {/* Bundle Status Card  */}
              <Card title="Orders" sectioned>
                <Text as="h2" variant="headingSm">
                  Set Bundle Status
                  <Select
                    options={[
                      { label: "Active", value: "active" },
                      { label: "Draft", value: "draft" },
                    ]}
                    // onChange={handleSelectChange}
                    // value={selected}
                  />
                </Text>
              </Card>

              {/* Display Option Card  */}
              <Card sectioned>
                <Text as="h2" variant="headingSm">
                  Display Options
                </Text>
                <Text as="p" variant="bodyXs">
                  check page options where you want to display bundle
                </Text>
                <Checkbox
                  label="Product pages"
                  // checked={checked}
                  // onChange={handleChange}
                />
              </Card>

              {/* Preview Bundle Card  */}
              <Card sectioned>
                <Text as="h2" variant="headingSm">
                  Preview
                </Text>
                <Text as="p" variant="bodyXs">
                  Firstly,Add products in bundle to preview
                </Text>
              </Card>
            </BlockStack>
          </Grid.Cell>
        </Grid>
      </Page>

      <Modal variant="base" id="my-modal">
        <Page>
          <Text as="p">Are you sure you want to exit ?</Text>
        </Page>
        <TitleBar title="Exit confirmation">
          <button onClick={() => navigate("/bundle")} variant="primary">
            Confirm
          </button>
          <button onClick={() => shopify.modal.hide("my-modal")}>Cancel</button>
        </TitleBar>
      </Modal>
    </>
  );
};

export default CreateBundle;
