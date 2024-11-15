import { Card, Select, Text } from "@shopify/polaris";
import React from "react";

const BundleStatus = (props) => {
  
  const handleChangeStatus = (e) => {
    props.setData({
      ...props.data,
      status: e,
    });
  };
  return (
    <Card title="Orders" sectioned>
      <Text as="h2" variant="headingSm">
        Set Bundle Status
        <Select
          options={[
            { label: "Active", value: "active" },
            { label: "Draft", value: "draft" },
          ]}
          onChange={handleChangeStatus}
          value={props.data.status}
        />
      </Text>
    </Card>
  );
};

export default BundleStatus;
