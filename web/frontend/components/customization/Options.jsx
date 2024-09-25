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

  console.log("teste",data);
  
  return (
    <div className="sd-bundle-optionsCustom">
      {/* <div className="sd-bundle-custom-item-common">
    <p className="sd-bundle-custom-item-heading-common">Icon</p>
    <div className="sd-bundle-custom-item-inputSection">
<input type="color" value={data[bundleOption]["options"]["iconColor"]}  onChange={(e)=>handleChangeCommon(e,"options","iconColor",data,setData,bundleOption)}/>
<div className="sd-bundle-custom-fieldColorCode-common">
    <p>BackgroundColor </p>
<p> {data[bundleOption]["options"]["iconColor"]}</p>

</div>
</div>

</div> */}
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">Text</p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]["options"]["color"]}
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
                <p>{data[bundleOption]["options"]["color"]} </p>
              </div>
            </div>
            {/* 
        <TextField
          type="number"
          label="Font Size"
          // placeholder="set minimum order  for item"
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
          value={data[bundleOption]["options"]["fontSize"]}
          autoComplete="off"
          min="0"
        /> */}
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
              value={data[bundleOption]["options"]["fontSize"]}
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
                  bundleOption,
                )
              }
              value={
                data[bundleOption]["options"]["DiscountBadge"]["badgeType"]
              }
            >
              <Space direction="vertical">
                <Radio value="rightBanner">
                  <img src={RightBanner} />
                </Radio>
                {/* <Radio value="leftBanner">
                  <img src={LeftBanner} className="BADGE" />
                </Radio> */}
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
              Save Discount Badge{" "}
            </p>

            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]["options"]["saveDiscount"]["color"]}
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
                  {data[bundleOption]["options"]["saveDiscount"]["color"]}{" "}
                </p>
              </div>
            </div>

            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={
                  data[bundleOption]["options"]["saveDiscount"][
                    "backgroundColor"
                  ]
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
                  {" "}
                  {
                    data[bundleOption]["options"]["saveDiscount"][
                      "backgroundColor"
                    ]
                  }{" "}
                </p>
              </div>
            </div>
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
              value={data[bundleOption]["options"]["saveDiscount"]["fontSize"]}
              min={10}
              max={30}
              output
            />
            {/* {data[bundleOption]["options"]["DiscountBadge"]["badgeType"] == "options" && 
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
                value={
                  data[bundleOption]["options"]["saveDiscount"]["borderRadius"]
                }
                min={10}
                max={20}
                output
              />
            } */}
          </div>
        </Grid.Cell>
      </Grid>
    </div>
  );
};

export default Options;
