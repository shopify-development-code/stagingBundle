import React from "react";
import { Divider, Radio, Space } from "antd";
import { Grid, RangeSlider, TextField } from "@shopify/polaris";
import {
  handleChangeCommon,
  handleChangeCommon2,
  handleChangeValueCommon,
  handleChangeValueCommon2,
} from "../helperFunctions";
import RightBanner from "../../assets/Right_Banner.png";
import LeftBanner from "../../assets/Left_Banner.png";
import BadgeOption from "../../assets/BadgeOption.png";
const Options = ({ bundleOption, data, setData, displayOption }) => {

  const handleText = (newValue) => {
    setData((prevData) => {
      const currentBundle = prevData[bundleOption] || {};
      const currentOptions = currentBundle.options || {};
      const currentDiscountBadge = currentOptions.DiscountBadge || {};
  
      return {
        ...prevData,
        [bundleOption]: {
          ...currentBundle,
          options: {
            ...currentOptions,
            DiscountBadge: {
              ...currentDiscountBadge,
              text: newValue,
            },
          },
        },
      };
    });
  };
  

  return (
    <div className="sd-bundle-optionsCustom">
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">Options Text</p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]?.options?.color}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "options",
                    "color",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Title Text Color </p>
                <p>{data[bundleOption]?.options?.color}</p>
              </div>
            </div>
            
            <RangeSlider
              label="Font Size"
              onChange={(newvalue) =>
                handleChangeValueCommon(
                  newvalue,
                  "options",
                  "fontSize",
                  data,
                  setData,
                  bundleOption
                )
              }
              suffix={data[bundleOption]?.options?.fontSize}
              value={data[bundleOption]?.options?.fontSize}
              min={10}
              max={30}
              output
            />
          </div>
        </Grid.Cell>
        
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            {" "}
            <div className="sd-bundle-custom-item-heading-common">
              Select Badges
            </div>
            <Radio.Group
              onChange={(e) =>
                handleChangeValueCommon2(
                  e.target.value,
                  "options",
                  "DiscountBadge",
                  "badgeType",
                  data,
                  setData,
                  bundleOption
                )
              }
              value={data[bundleOption]?.options?.DiscountBadge?.badgeType}
            >
              <Space direction="vertical">
                <Radio value="rightBanner">
                  <img src={RightBanner} />
                </Radio>

                <Radio value="options">
                  <img src={BadgeOption} className="BADGE" />
                </Radio>
              </Space>
            </Radio.Group>
          </div>
        </Grid.Cell>
        
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">
              Discount Badge{" "}
            </p>

            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]?.options?.saveDiscount?.color}
                onChange={(e) =>
                  handleChangeCommon2(
                    e,
                    "options",
                    "saveDiscount",
                    "color",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Text Color </p>
                <p>
                  {" "}
                  {data[bundleOption]?.options?.saveDiscount?.color}{" "}
                </p>
              </div>
            </div>

            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={
                  data[bundleOption]?.options?.saveDiscount?.backgroundColor
                }                
                onChange={(e) =>
                  handleChangeCommon2(
                    e,
                    "options",
                    "saveDiscount",
                    "backgroundColor",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Background Color </p>
                <p>
                  {data[bundleOption]?.options?.saveDiscount?.backgroundColor}
                </p>
              </div>
            </div>
            
            {data[bundleOption]["options"]["DiscountBadge"]["badgeType"] ==
              "options" && (
              <RangeSlider
                label="Border Radius"
                onChange={(newvalue) =>
                  handleChangeValueCommon2(
                    newvalue,
                    "options",
                    "saveDiscount",
                    "borderRadius",
                    data,
                    setData,
                    bundleOption
                  )
                }
                suffix={
                  data[bundleOption]?.options?.saveDiscount?.borderRadius
                }
                value={
                  data[bundleOption]?.options?.saveDiscount?.borderRadius
                }                
                min={1}
                max={15}
                output
              />
            )}
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
          <div className="sd-bundle-custom-item-heading-common">
            Edit Badge Text
          </div>
            <TextField
              type="text"
              // placeholder="set minimum order  for item"
              onChange={(e)=>handleText(e)}
              value={data[bundleOption]?.options?.DiscountBadge?.text}
              // autoComplete="off"
              // min="0"
            />
            <RangeSlider
              label="Font Size"
              onChange={(newvalue) =>
                handleChangeValueCommon2(
                  newvalue,
                  "options",
                  "saveDiscount",
                  "fontSize",
                  data,
                  setData,
                  bundleOption
                )
              }
              suffix={data[bundleOption]?.options?.saveDiscount?.fontSize}
              value={data[bundleOption]?.options?.saveDiscount?.fontSize}
              min={10}
              max={16}
              output
            />
          </div>
        </Grid.Cell>
      </Grid>
    </div>
  );
};

export default Options;
