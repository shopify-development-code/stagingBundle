import React from "react";
import { TextField, RangeSlider, Grid } from "@shopify/polaris";
import { Switch } from "antd";
import {
  handleChangeCommon,
  handleChangeValueCommon,
} from "../helperFunctions";

const OptionalBadges = ({ data, setData, bundleOption, displayOption }) => {

  const handleText = (newvalue) => {
    setData({
      ...data,
      [bundleOption]: {
        ...data[bundleOption],
        optionalBadge: {
          ...data[bundleOption]["optionalBadge"],
          text: newvalue,
        },
      },
    });
  };

  const badgeEnableHandler = (e) => {
    console.log("  hgwjfdnfew jfj kej", e);
    setData({
      ...data,
      [bundleOption]: {
        ...data[bundleOption],
        optionalBadge: {
          ...data[bundleOption]["optionalBadge"],
          enable: e,
        },
      },
    });
  };

  return (
    <div className="sd-bundle-titleCustom">
      <p className="sd-bundle-custom-item-heading-common optionalBadge">
        Enable Badge{" "}
        <Switch
          onChange={(e) => badgeEnableHandler(e)}
          checked={data[bundleOption]?.optionalBadge?.enable}
        />
      </p>
      {data[bundleOption]?.optionalBadge?.enable == true && (
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div className="sd-bundle-custom-item-common">
              <p className="sd-bundle-custom-item-heading-common">
                Discount Badge{" "}
              </p>
              <div className="sd-bundle-custom-item-inputSection">
                <input
                  type="color"
                  value={data[bundleOption]?.optionalBadge?.color}
                  onChange={(e) =>
                    handleChangeCommon(
                      e,
                      "optionalBadge",
                      "color",
                      data,
                      setData,
                      bundleOption
                    )
                  }
                />

                <div className="sd-bundle-custom-fieldColorCode-common">
                  <p>Text Color </p>
                  <p> {data[bundleOption]?.optionalBadge?.color}</p>
                </div>
              </div>

              <div className="sd-bundle-custom-item-inputSection">
                <input
                  type="color"
                  value={data[bundleOption]?.optionalBadge?.background}
                  onChange={(e) =>
                    handleChangeCommon(
                      e,
                      "optionalBadge",
                      "background",
                      data,
                      setData,
                      bundleOption
                    )
                  }
                />

                <div className="sd-bundle-custom-fieldColorCode-common">
                  <p>Background Color </p>
                  <p> {data[bundleOption]?.optionalBadge?.background} </p>
                </div>
              </div>
            </div>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div className="sd-bundle-custom-item-common">
              <div className="sd-bundle-custom-item-heading-common">
                Edit Badge Text
              </div>
              <TextField
                type="text"
                onChange={handleText}
                value={data[bundleOption]?.optionalBadge?.text}
                maxLength={20}
              />
              <RangeSlider
                label="Font Size"
                onChange={(e) =>
                  handleChangeValueCommon(
                    e,
                    "optionalBadge",
                    "fontSize",
                    data,
                    setData,
                    bundleOption
                  )
                }
                suffix={data[bundleOption]?.optionalBadge?.fontSize}
                value={data[bundleOption]?.optionalBadge?.fontSize}
                min={10}
                max={15}
                output
              />
            </div>
          </Grid.Cell>
        </Grid>
      )}
    </div>
  );
};
export default OptionalBadges;
