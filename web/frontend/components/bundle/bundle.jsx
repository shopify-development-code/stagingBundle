import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppBridge, Modal, TitleBar } from "@shopify/app-bridge-react";
import { useAPI } from "../shop";
import postApi from "../postApi";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Grid,
  IndexTable,
  InlineStack,
  Page,
  Text,
  useIndexResourceState,
} from "@shopify/polaris";

import {
  ProductCostIcon,
  DiscountIcon,
  CollectionIcon,
  ProductAddIcon,
  CartDiscountIcon,
  CartSaleIcon,
  CheckCircleIcon,
  DeleteIcon,
} from "@shopify/polaris-icons";

let SelectBundleArr = [
  {
    title: "Product bundle",
    type: "productBundle",
    desc: "Highlight special product combinations with an exclusive discount.",
    icon: <ProductCostIcon width={30} height={30} />,
  },
  {
    title: "Volume discount",
    type: "volumeBundle",
    desc: "Offer a discount when purchasing multiple units of a product and a collection.",
    icon: <DiscountIcon width={30} height={30} />,
  },
  {
    title: "Collection mix & match",
    type: "collectionMixMatch",
    desc: "Let customers personalize bundles by mixing and matching items from various collections.",
    icon: <CollectionIcon width={30} height={30} />,
  },
  {
    title: "Product mix & match",
    type: "productMixMatch",
    desc: "Allow your customers to create their own bundle from a selection of products.",
    icon: <ProductAddIcon width={30} height={30} />,
  },
  {
    title: "Buy X & get Y",
    type: "bxgy",
    desc: "Provide complimentary gifts or discounted items with specific purchases.",
    icon: <CartDiscountIcon width={30} height={30} />,
  },
  {
    title: "Frequently bought together",
    type: "fbt",
    desc: "Encourage the purchase of frequently paired products with a special discount.",
    icon: <CartSaleIcon width={30} height={30} />,
  },
];
const CreateBundle = () => {
  const { shop } = useAPI();
  const app = useAppBridge();
  const [selectBundle, setSelectBundle] = useState("");
  const [dashboardData, setDashboardData] = useState([]);
  const [plan, setPlan] = useState("");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  async function getBundle() {
    setLoader(true);
    const response = await postApi("/api/admin/getBundle", { shop: shop }, app);
    if (response.data.status === 200) {
      setDashboardData(response.data.response);

      setLoader(false);
    } else if (response.data.status === 503) {
      setLoader(false);
    }

    setLoader(false);
  }

  const getBundleData = async () => {
    const response = await postApi("api/admin/getPlans", {}, app);
    if (response?.data?.status == 200) {
      setPlan(response?.data?.data?.plan);
    }
  };
  useEffect(() => {
    getBundle();
  }, []);
  useEffect(() => {
    getBundleData();
  }, [plan]);

  const resourceName = {
    singular: "bundle",
    plural: "bundles",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(dashboardData);

  const rowMarkup = dashboardData.map(
    ({ id, type, name, status, bundleDetail }, index) => (
      <IndexTable.Row
        onClick={() => handleEditBundle(id, type)}
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            <Avatar name={name} initials={name} />
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{name}</IndexTable.Cell>
        <IndexTable.Cell>
          {type == "productBundle"
            ? bundleDetail.discountType == "percent"
              ? bundleDetail.discountValue + "% off"
              : bundleDetail.discountType == "fixed"
                ? `Rs.${bundleDetail.discountValue} off`
                : bundleDetail.discountType == "price"
                  ? `Fixed Rs.${bundleDetail.discountValue} `
                  : bundleDetail.discountType == "freeShipping"
                    ? "Free Shipping"
                    : bundleDetail.discountType == "noDiscount"
                      ? "No Discount"
                      : null
            : type == "volumeBundle"
              ? `${bundleDetail.discountOptions.length} Options`
              : type == "productMixMatch"
                ? `${bundleDetail.discountOptions.length} Options`
                : type == "collectionMixMatch"
                  ? bundleDetail.discountType == "percent"
                    ? `${bundleDetail.discountValue}% off`
                    : bundleDetail.discountType == "fixed"
                      ? `Rs.${bundleDetail.discountValue} off`
                      : bundleDetail.discountType == "price"
                        ? `Fixed Rs.${bundleDetail.discountValue} `
                        : bundleDetail.discountType == "freeShipping"
                          ? "Free Shipping"
                          : bundleDetail.discountType == "noDiscount"
                            ? "No Discount"
                            : null
                  : type == "fbt"
                    ? bundleDetail.discountType == "percent"
                      ? `${bundleDetail.discountValue}% off`
                      : bundleDetail.discountType == "fixed"
                        ? `Rs.${bundleDetail.discountValue} off`
                        : bundleDetail.discountType == "price"
                          ? `Fixed Rs.${bundleDetail.discountValue} `
                          : bundleDetail.discountType == "freeShipping"
                            ? "Free Shipping"
                            : bundleDetail.discountType == "noDiscount"
                              ? "No Discount"
                              : null
                    : type == "bxgy"
                      ? bundleDetail.discountType == "percent"
                        ? `${bundleDetail.discountValue}% off`
                        : bundleDetail.discountType == "fixed"
                          ? `Rs.${bundleDetail.discountValue} off`
                          : bundleDetail.discountType == "free"
                            ? "Free Gift"
                            : null
                      : null}
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge
            tone={status == "active" ? "success-strong" : "critical-strong"}
            progress="complete"
          >
            {status}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>{type}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  const handleSetStatus = async (status) => {
    const data = {
      id: selectedResources,
      status: status,
    };
    const response = await postApi("/api/admin/actionStatus", data, app);
    console.log(response.data.status);
    if (response.data.status === 200) {
      await getBundle();
      app.toast.show("Status change successfully");
    }
  };

  const promotedBulkActions = [
    {
      content: "Set as Active",
      onAction: () => handleSetStatus("active"),
    },
    {
      content: "Set as Draft",
      onAction: () => handleSetStatus("draft"),
    },
  ];
  const bulkActions = [
    {
      icon: DeleteIcon,
      destructive: true,
      content: "Delete bundle",
      onAction: handleActionDelete,
    },
  ];

  const handleEditBundle = async (id, type) => {
    if (type == "productBundle") {
      navigate(`/ProductBundle/${id}`);
    } else if (type == "volumeBundle") {
      navigate(`/VolumeBundle/${id}`);
    } else if (type == "bxgy") {
      if (plan == "standard") {
        navigate(`/buyxgety/${id}`);
      } else {
        navigate("/plans");
      }
    } else if (type === "fbt") {
      if (plan == "standard") {
        navigate(`/FrequentlyBoughtTogether/${id}`);
      } else {
        navigate("/plans");
      }
    } else if (type == "productMixMatch") {
      if (plan != "free") {
        navigate(`/ProductMixMatch/${id}`);
      } else {
        navigate("/plans");
      }
    } else {
      navigate(`/CollectionMixMatch/${id}`);
    }
  };

  async function handleActionDelete() {
    let data = {
      id: selectedResources,
    };
    let response = await postApi("/api/admin/actionDelete", data, app);
    if (response.data.status == 200) {
      await getBundle();
      app.toast.show("Status change successfully");
    } else if (response.data.status == 503) {
      await getBundle();
      app.toast.show("Failed ! Please try again");
    }
  }

  const handleShowModal = () => {
    app.modal.show("my-modal");
  };

  const handleSelectBundle = () => {
    console.log(selectBundle)
    switch (selectBundle) {
      case "productBundle":
        navigate("/ProductBundle/create");
        break;
      case "volumeBundle":
        navigate("/VolumeBundle/create");
        break;
      case "collectionMixMatch":
        navigate("/collectionMixMatch/create");
        break;
      case "productMixMatch":
        navigate("/productMixMatch/create");
        break;
      case "bxgy":
        navigate("/buyXgetY/create");
        break;
      case "fbt":
        navigate("/FrequentlyBoughtTogether/create");
        break;

      default:
        break;
    }
  };

  return (
    <Page
      title="Create Bundle"
      primaryAction={
        <Button onClick={handleShowModal} tone="success" variant="primary">
          Create
        </Button>
      }
    >
      {/* <SimpleIndexTableExample mainData={mainData}  handleEditBundle={handleEditBundle} loader={loader}/> */}
      <Card>
        <IndexTable
          loading={loader}
          bulkActions={bulkActions}
          promotedBulkActions={promotedBulkActions}
          resourceName={resourceName}
          itemCount={dashboardData.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            { title: "Bundle" },
            { title: "Name" },
            { title: "Discount" },
            { title: "Status" },
            { title: "Type" },
          ]}
        >
          {rowMarkup}
        </IndexTable>
      </Card>

      <Modal variant="base" id="my-modal">
        <Page>
          <Grid>
            {SelectBundleArr.map((item, index) => (
              <Grid.Cell
              
                key={index}
                columnSpan={{ xs: 6, sm: 3, md: 2, lg: 4, xl: 4 }}
              >
                <div onClick={() => setSelectBundle(item.type)}>

                <Card
                  title={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>Buy X get Y </div>}
                  style={{
                    width: 300,
                  }}
                >
                  <InlineStack align="space-between">
                    {item.icon}
                    {selectBundle == item.type && (
                      <CheckCircleIcon width={30} height={30} />
                    )}
                  </InlineStack>
                  <Text as="h2" variant="headingMd">
                    {item.title}
                  </Text>
                  <p>{item.desc}</p>
                </Card>
                </div>
              </Grid.Cell>
            ))}
          </Grid>
        </Page>
        <TitleBar title="Choose bundle  ">
          <button onClick={handleSelectBundle} variant="primary">
            Next
          </button>
          <button onClick={() => shopify.modal.hide("my-modal")}>Cancel</button>
        </TitleBar>
      </Modal>
    </Page>
  );
};

export default CreateBundle;
