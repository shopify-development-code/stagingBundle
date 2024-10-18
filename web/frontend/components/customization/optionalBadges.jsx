import React from "react";
import { TextField, RangeSlider, Grid } from "@shopify/polaris";
import { Switch } from "antd";
import {
  handleChangeCommon,
  handleChangeValueCommon,
} from "../helperFunctions";

const OptionalBadges = ({ data, setData, bundleOption, displayOption }) => {

  const handleText = (newvalue) => {
    setData((prevData) => ({
      ...prevData,
      [bundleOption]: {
        ...prevData[bundleOption],
        optionalBadge: {
          ...prevData[bundleOption]?.optionalBadge,
          text: newvalue,
        },
      },
    }));
  };  

  const badgeEnableHandler = (e) => {
    setData((prevData) => ({
      ...prevData,
      [bundleOption]: {
        ...prevData[bundleOption],
        optionalBadge: {
          ...prevData[bundleOption]?.optionalBadge,
          enable: e,
        },
      },
    }));
  };
  

  return (
    <div className="sd-bundle-titleCustom">
      {/* <p className="sd-bundle-custom-item-heading-common optionalBadge">
        Enable Badge{" "}
        <Switch
          onChange={(e) => badgeEnableHandler(e)}
          checked={data[bundleOption]?.optionalBadge?.enable}
        />
      </p> */}
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
        </Grid>
    </div>
  );
};
export default OptionalBadges;
