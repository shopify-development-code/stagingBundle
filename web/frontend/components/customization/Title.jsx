import React from "react";
import { Divider
 } from "antd";
import { TextField, Select, RangeSlider, RadioButton, Grid } from "@shopify/polaris";
import {
  handleChangeCommon,
  handleChangeValueCommon,
} from "../helperFunctions";
const Title = ({ bundleOption, displayOption, data, setData }) => {
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
              label="Size"
              min={1}
              max={30}
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
              label="Size"
              min={1}
              max={30}
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
            <div className="sd-bundle-item-custom-radio-common">
              <input
                id="left"
                type="radio"
                name="position"
                checked={data[bundleOption]["title"]["alignment"] == "left"}
                value="left"
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "title",
                    "alignment",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <label htmlFor="left">Left</label>
              {/* <RadioButton
            label="Left"
            id="left"
            name="position"
            checked={data[bundleOption]["title"]["alignment"] == "left"}
            value="left"
            onChange={(e) =>
              handleChangeCommon(
                e,
                "title",
                "alignment",
                data,
                setData,
                bundleOption
              )
            }
          /> */}
            </div>
            <div className="sd-bundle-item-custom-radio-common">
              <input
                id="center"
                type="radio"
                name="position"
                value="center"
                checked={data[bundleOption]["title"]["alignment"] == "center"}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "title",
                    "alignment",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <label htmlFor="center">Center</label>
              {/* <RadioButton
            label="Center"
            id="center"
            name="position"
            value="center"
            checked={data[bundleOption]["title"]["alignment"] == "center"}
            onChange={(e) =>
              handleChangeCommon(
                e,
                "title",
                "alignment",
                data,
                setData,
                bundleOption
              )
            }
          /> */}
            </div>
            <div className="sd-bundle-item-custom-radio-common">
              <input
                id="right"
                type="radio"
                name="position"
                value="right"
                checked={data[bundleOption]["title"]["alignment"] == "right"}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "title",
                    "alignment",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <label htmlFor="right">Right</label>
              {/* <RadioButton
            label="Right"
            id="right"
            name="position"
            value="right"
            checked={data[bundleOption]["title"]["alignment"] == "right"}
            onChange={(e) =>
              handleChangeCommon(
                e,
                "title",
                "alignment",
                data,
                setData,
                bundleOption
              )
            }
          /> */}
            </div>
          </div>
        </Grid.Cell>
      </Grid>
    </div>
  );
};

export default Title;
