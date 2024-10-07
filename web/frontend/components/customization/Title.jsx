import React from "react";
import { Divider } from "antd";
import {
  TextField,
  Select,
  RangeSlider,
  RadioButton,
  Grid,
  Icon,
} from "@shopify/polaris";
import {
  TextAlignmentCenterMajor,
  TextAlignmentLeftMajor,
  TextAlignmentRightMajor,
} from "@shopify/polaris-icons";
import {
  handleChangeCommon,
  handleChangeValueCommon,
} from "../helperFunctions";
const Title = ({ bundleOption, displayOption, data, setData }) => {
  console.log("................................",`sd-bundle-item-custom-radio-common ${data[bundleOption]["title"]["alignment"] === "left" ? "active" : "" } `);
  
  return (
    <div className="sd-bundle-titleCustom">
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">
              Title styling
            </p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                min={10}
                max={30}
                value={data[bundleOption]["title"]["color"]}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "title",
                    "color",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Title Color </p>
                <p> {data[bundleOption]["title"]["color"]} </p>
              </div>
            </div>

            <RangeSlider
              output
              label="Font Size"
              min={1}
              max={30}
              suffix ={data[bundleOption]["title"]["fontSize"]}
              value={data[bundleOption]["title"]["fontSize"]}
              onChange={(e) =>
                handleChangeValueCommon(
                  e,
                  "title",
                  "fontSize",
                  data,
                  setData,
                  bundleOption
                )
              }
            />
            <RangeSlider
              output
              label="Boldness"
              min={100}
              max={900}
              step={100}
              suffix = {data[bundleOption]["title"]["titleBold"]}
              value={data[bundleOption]["title"]["titleBold"]}
              onChange={(e) =>
                handleChangeValueCommon(
                  e,
                  "title",
                  "titleBold",
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
              Description styling
            </p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]["title"]["descriptionColor"]}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "title",
                    "descriptionColor",
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
              label="Font Size"
              min={1}
              max={30}
              suffix = {data[bundleOption]["title"]["descriptionFontSize"]}
              value={data[bundleOption]["title"]["descriptionFontSize"]}
              onChange={(e) =>
                handleChangeValueCommon(
                  e,
                  "title",
                  "descriptionFontSize",
                  data,
                  setData,
                  bundleOption
                )
              }
            />

            <RangeSlider
              output
              label="Boldness"
              min={100}
              max={900}
              step={100}
              suffix= {data[bundleOption]["title"]["descriptionBold"]}
              value={data[bundleOption]["title"]["descriptionBold"]}
              onChange={(e) =>
                handleChangeValueCommon(
                  e,
                  "title",
                  "descriptionBold",
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
            <div className="sd-bundle-item-custom-radio-main">
              <div
                className={`sd-bundle-item-custom-radio-common ${data[bundleOption]["title"]["alignment"] === "left" ? "active" : "" } `}
                onClick={() => {
                  handleChangeCommon(
                    "left",
                    "title",
                    "alignment",
                    data,
                    setData,
                    bundleOption,
                    "alignment"
                  );
                }}
              >
                <Icon
                  className="icon"
                  accessibilityLabel="left"
                  source={TextAlignmentLeftMajor}
                  tone="base"
                />
              </div>
              <div
                className={`sd-bundle-item-custom-radio-common ${data[bundleOption]["title"]["alignment"] === "center" ? "active" : "" } `}
                onClick={(e) =>
                  handleChangeCommon(
                    "center",
                    "title",
                    "alignment",
                    data,
                    setData,
                    bundleOption,
                    "alignment"
                  )
                }
              >
                <Icon
                  className="icon"
                  accessibilityLabel="center"
                  source={TextAlignmentCenterMajor}
                  tone="base"
                />
              </div>
              <div
                className={`sd-bundle-item-custom-radio-common ${data[bundleOption]["title"]["alignment"] === "right" ? "active" : "" } `}
                onClick={(e) =>
                  handleChangeCommon(
                    "right",
                    "title",
                    "alignment",
                    data,
                    setData,
                    bundleOption,
                    "alignment"
                  )
                }
              >
                <Icon
                  className="icon"
                  accessibilityLabel="right"
                  source={TextAlignmentRightMajor}
                  tone="base"
                />
              </div>
            </div>
          </div>
        </Grid.Cell>
      </Grid>
    </div>
  );
};

export default Title;
