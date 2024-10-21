import {
  IndexTable,
  useIndexResourceState,
  Text,
  Badge,
  Card,
  Avatar,
} from "@shopify/polaris";
import React from "react";
import {DeleteIcon } from "@shopify/polaris-icons";
import postApi from "../postApi";
import { useAppBridge } from "@shopify/app-bridge-react";


export default function SimpleIndexTableExample({
  mainData,
  handleEditBundle,loader,

}) {
    const app = useAppBridge();
 
  const resourceName = {
    singular: "bundle",
    plural: "bundles",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(mainData);

  const rowMarkup = mainData.map(
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
          <Badge tone={status == "active" ? "success-strong" : "critical-strong"} progress="complete">
            {status}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>{type}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  const handleSetStatus = async(status) =>{
    const data = {
        id: selectedResources,
        status: status,
      };
      const response = await postApi("/api/admin/actionStatus", data, app);
      console.log(response.data.status)
      if (response.data.status === 200) {
        app.toast.show('Status change successfully');
      }
  }
 
const promotedBulkActions = [
    {
      content: "Set as Active",
      onAction: ()=>handleSetStatus("active"),
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
      onAction: () => console.log("Todo: implement bulk delete"),
    },
  ];

  return (
    <Card>
      <IndexTable
      loading={loader}
        bulkActions={bulkActions}
        promotedBulkActions={promotedBulkActions}
        resourceName={resourceName}
        itemCount={mainData.length}
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
  );
}
