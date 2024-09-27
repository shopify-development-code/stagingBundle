import React, { useEffect, useState } from "react";
import { Divider } from "antd";
import { TextField, Select, RangeSlider, Grid } from "@shopify/polaris";
import { Radio, Space, Avatar } from "antd";
import {
  handleChangeCommon,
  handleChangeValueCommon,
} from "../helperFunctions";
import RightBanner from "../../assets/Right_Banner.png";
import LeftBanner from "../../assets/Left_Banner.png";
const DiscountBadge = ({ data, setData, bundleOption, displayOption }) => {
  console.log(data);
  const [sizeValue, setSizeValue] = useState(15);
  // useEffect(()=>{
  //   if(data.buyXgetY.DiscountBadge.badgeType == "ribbon"){
  //     setSizeValue(10)
  //   }else{
  //     setSizeValue(15);
  //   }
  // },[data.buyXgetY.DiscountBadge.badgeType]);
  const handleText = (newvalue) => {
    setData({
      ...data,
      [bundleOption]: {
        ...data[bundleOption],
        DiscountBadge: {
          ...data[bundleOption]["DiscountBadge"],
          text: newvalue,
        },
      },
    });
  };

  return (
    <div className="sd-bundle-titleCustom">
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">
              Discount Badge{" "}
            </p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]["DiscountBadge"]["color"]}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "DiscountBadge",
                    "color",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />

              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Text Color </p>
                <p> {data[bundleOption]["DiscountBadge"]["color"]} </p>
              </div>
            </div>

            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]["DiscountBadge"]["backgroundColor"]}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "DiscountBadge",
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
                  {data[bundleOption]["DiscountBadge"]["backgroundColor"]}{" "}
                </p>
              </div>
            </div>

            {/* <TextField
            type="number"
            label="Size"
            inputMode="none"
            // placeholder="set minimum order  for item"
            onChange={(e) =>
              handleChangeValueCommon(
                e,
                "DiscountBadge",
                "fontSize",
                data,
                setData,
                bundleOption,
                sizeValue
              )
            }
            value={data[bundleOption]["DiscountBadge"]["fontSize"]}
            autoComplete="off"
            min={1}
            max={sizeValue}
          /> */}
            
          </div>
        </Grid.Cell>
        {bundleOption == "buyXgetY" && (
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div className="sd-bundle-custom-item-common">
              {" "}
              <div className="sd-bundle-custom-item-heading-common">
                Select Badges
              </div>
              <Radio.Group
                onChange={(e) =>
                  handleChangeValueCommon(
                    e.target.value,
                    "DiscountBadge",
                    "badgeType",
                    data,
                    setData,
                    bundleOption,
                    sizeValue
                  )
                }
                value={data[bundleOption]["DiscountBadge"]["badgeType"]}
              >
                <Space direction="vertical">
                  <Radio value="rightBanner">
                    <img src={RightBanner} />
                  </Radio>
                  <Radio value="leftBanner">
                    <img src={LeftBanner} className="BADGE" />
                  </Radio>
                </Space>
              </Radio.Group>
            </div>
          </Grid.Cell>
        )}
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <div className="sd-bundle-custom-item-heading-common">
              Edit Badge Text
            </div>
           <TextField
              type="text"
              // placeholder="set minimum order  for item"
              onChange={handleText}
              value={data[bundleOption]["DiscountBadge"]["text"]}
              autoComplete="off"
              maxLength={20}
            />
            <RangeSlider
              label="Font Size"
              onChange={(e) =>
                handleChangeValueCommon(
                  e,
                  "DiscountBadge",
                  "fontSize",
                  data,
                  setData,
                  bundleOption,
                  sizeValue
                )
              }
              value={data[bundleOption]["DiscountBadge"]["fontSize"]}
              min={10}
              max={15}
              output
            />
          </div>
        </Grid.Cell>
        
      </Grid>
    </div>
  );
};

export default DiscountBadge;
