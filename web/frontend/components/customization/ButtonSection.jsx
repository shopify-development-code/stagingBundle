import React from "react";
import { Grid, RangeSlider, TextField } from "@shopify/polaris";
import {
  handleChangeCommon,
  handleChangeValueCommon,
} from "../helperFunctions";
const ButtonSection = ({ bundleOption, data, setData }) => {
  const handleNoDiscountText = (newvalue) => {
    setData({
      ...data,
      [bundleOption]: {
        ...data[bundleOption],
        button: { ...data[bundleOption]["button"], text_noDiscount: newvalue },
      },
    });
  };

  console.log("jfkeje kekekrke", data[bundleOption]["button"]["borderColor"]);

  const handleText = (newvalue) => {
    setData({
      ...data,
      [bundleOption]: {
        ...data[bundleOption],
        button: { ...data[bundleOption]["button"], text_others: newvalue },
      },
    });
  };

  return (
    <div className="sd-bundle-buttonCustom">
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">Border</p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]["button"]["borderColor"]}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "button",
                    "borderColor",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Border Color </p>
                <p>{data[bundleOption]["button"]["borderColor"]}</p>
              </div>
            </div>
            <RangeSlider
              output
              label="Border Radius"
              min={1}
              max={30}
              suffix={data[bundleOption]["button"]["borderRadius"]}
              value={data[bundleOption]["button"]["borderRadius"]}
              onChange={(newvalue) =>
                handleChangeValueCommon(
                  newvalue,
                  "button",
                  "borderRadius",
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
            <p className="sd-bundle-custom-item-heading-common">Background</p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]["button"]["backgroundColor"]}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "button",
                    "backgroundColor",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Background Color</p>
                <p> {data[bundleOption]["button"]["backgroundColor"]} </p>
              </div>
            </div>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">Button Text</p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]["button"]["color"]}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "button",
                    "color",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Text Color</p>
                <p> {data[bundleOption]["button"]["color"]} </p>
              </div>
            </div>

            <RangeSlider
              label="Font Size"
              onChange={(e) =>
                handleChangeValueCommon(
                  e,
                  "button",
                  "fontSize",
                  data,
                  setData,
                  bundleOption
                )
              }
              suffix={data[bundleOption]["button"]["fontSize"]}
              value={data[bundleOption]["button"]["fontSize"]}
              min={10}
              max={30}
              output
            />
          </div>
        </Grid.Cell>
      </Grid>
    </div>
  );
};

export default ButtonSection;
