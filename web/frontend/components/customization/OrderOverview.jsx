import React from "react";
import { Divider
 } from "antd";
import { TextField, Select, RangeSlider, RadioButton, Grid ,Icon} from "@shopify/polaris";
import {
  TextAlignmentCenterMajor,
  TextAlignmentLeftMajor,
  TextAlignmentRightMajor
} from '@shopify/polaris-icons';  
import {
  handleChangeCommon,
  handleChangeCommon2,
  handleChangeValueCommon,
  handleChangeValueCommon2,
} from "../helperFunctions";
const OrderOverview = ({ bundleOption, displayOption, data, setData }) => {
  return (
    <div className="sd-bundle-titleCustom">
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">
              Selected Item Text
            </p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                min={10}
                max={30}
                value={data[bundleOption]["orderOverview"]["selectedText"]["color"]}
                onChange={(e) =>
                  handleChangeCommon2(
                    e,
                    "orderOverview",
                    "selectedText",
                    "color",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Title Color </p>
                <p> {data[bundleOption]["orderOverview"]["selectedText"]["color"]} </p>
              </div>
            </div>

            <RangeSlider
              output
              label="Font Size"
              min={10}
              max={30}
              value={data[bundleOption]["orderOverview"]["selectedText"]["fontSize"]}
              onChange={(e) =>
                handleChangeValueCommon2(
                  e,
                  "orderOverview",
                  "selectedText",
                  "fontSize",
                  data,
                  setData,
                  bundleOption
                )
              }
            />
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">
              Discount Details Text
            </p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]["orderOverview"]["discountText"]["color"]}
                onChange={(e) =>
                  handleChangeCommon2(
                    e,
                    "orderOverview",
                    "discountText",
                    "color",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Description Color </p>
                <p>{data[bundleOption]["title"]["descriptionColor"]}</p>
              </div>
            </div>

            <RangeSlider
              output
              label="Size"
              min={10}
              max={30}
              value={data[bundleOption]["orderOverview"]["discountText"]["fontSize"]}
              onChange={(e) =>
                handleChangeValueCommon2(
                  e,
                  "orderOverview",
                  "discountText",
                  "fontSize",
                  data,
                  setData,
                  bundleOption
                )
              }
            />

          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">Alignment</p>
            <div className="sd-bundle-item-custom-radio-common">
              <input
                id="left"
                type="radio"
                name="position"
                checked={data[bundleOption]["orderOverview"]["alignment"] == "left"}
                value="left"
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "orderOverview",
                    "alignment",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <Icon source={TextAlignmentLeftMajor} tone="base" />
            </div>
            <div className="sd-bundle-item-custom-radio-common">
              <input
                id="center"
                type="radio"
                name="position"
                value="center"
                checked={data[bundleOption]["orderOverview"]["alignment"] == "center"}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "orderOverview",
                    "alignment",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <Icon source={TextAlignmentCenterMajor} tone="base" />
            </div>
            <div className="sd-bundle-item-custom-radio-common">
              <input
                id="right"
                type="radio"
                name="position"
                value="right"
                checked={data[bundleOption]["orderOverview"]["alignment"] == "right"}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "orderOverview",
                    "alignment",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <Icon source={TextAlignmentRightMajor} tone="base" />
            </div>
          </div>
        </Grid.Cell>
      </Grid>
    </div>
  );
};

export default OrderOverview;
