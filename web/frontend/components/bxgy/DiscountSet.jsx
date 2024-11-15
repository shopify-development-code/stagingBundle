import { useAPI } from "../shop";
import { Card, Grid, Select, Text, TextField } from "@shopify/polaris";
const DiscountSet = (props) => {
  const { shop, timeZone, currencyCode } = useAPI();
  function handleSelectDiscount(e) {
    props.setData({
      ...props.data,
      bundleDetail: {
        ...props.data.bundleDetail,
        discountType: e,
      },
    });
  }
  function handleDiscountValue(e) {
    props.setData({
      ...props.data,
      bundleDetail: {
        ...props.data.bundleDetail,
        discountValue: e,
      },
    });
  }
  function handleValue() {
    props.setData({
      ...props.data,
      bundleDetail: {
        ...props.data.bundleDetail,
        discountValue: 100,
      },
    });
  }
  return (
    <Card>
      <Text variant="headingMd">Discount</Text>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 9, sm: 4, md: 4, lg: 9, xl: 9 }}>
          <Select
            onChange={handleSelectDiscount}
            value={props.discountType}
            style={{
              width: 300,
            }}
            options={[
              {
                value: "percent",
                label: "Percentage discount",
              },
              {
                value: "fixed",
                label: "Fixed discount",
              },
              {
                value: "free",
                label: "Free gift",
              },
            ]}
          />
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 3, sm: 2, md: 2, lg: 3, xl: 3 }}>
          {props.discountType !== "free" ? (
            <TextField
              min={1}
              type="number"
              max={props.discountType == "percent" && 100}
              onChange={handleDiscountValue}
              value={
                props.discountType == "percent" && props.discountValue > 100
                  ? handleValue()
                  : props.discountValue
              }
              prefix={
                props.discountType == "fixed"
                  ? currencyCode.replace(/{{.*?}}/g, "")
                  : null
              }
              suffix={props.discountType == "percent" ? "%" : null}
            />
          ) : null}
        </Grid.Cell>
      </Grid>
    </Card>
  );
};

export default DiscountSet;
