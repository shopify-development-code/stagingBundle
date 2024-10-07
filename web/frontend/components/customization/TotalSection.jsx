import React from "react";
import { Divider } from "antd";
import { Grid, RangeSlider, TextField } from "@shopify/polaris";
import {
  handleChangeCommon,
  handleChangeCommon2,
  handleChangeValueCommon,
  handleChangeValueCommon2,
} from "../helperFunctions";

const TotalSection = ({ bundleOption, displayOption, data, setData }) => {
  console.log("dgedydfeytyeyte");
  
  return (
    <div className="sd-bundle-boxCustom">
      {/* <div className="sd-bundle-custom-item-common">
        <p className="sd-bundle-custom-item-heading-common">Background</p>
        <div className="sd-bundle-custom-item-inputSection">
          <input
            type="color"
            value={data[bundleOption]["totalSection"]["background"]}
            onChange={(e) =>
              handleChangeCommon(
                e,
                "totalSection",
                "backgroundColor",
                data,
                setData,
                bundleOption
              )
            }
          />
          <div className="sd-bundle-custom-fieldColorCode-common">
            <p>Background Color </p>
            <p> {data[bundleOption]["totalSection"]["background"]}</p>
          </div>
        </div>
      </div> */}
      <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">Total Text</p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]["totalSection"]["color"]}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "totalSection",
                    "color",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Text Color </p>
                <p>{data[bundleOption]["totalSection"]["color"]} </p>
              </div>
            </div>

            <RangeSlider
              label="Font Size"
              onChange={(newvalue) =>
                handleChangeValueCommon(
                  newvalue,
                  "totalSection",
                  "fontSize",
                  data,
                  setData,
                  bundleOption
                )
              }
              suffix={data[bundleOption]["totalSection"]["fontSize"]}
              value={data[bundleOption]["totalSection"]["fontSize"]}
              min={10}
              max={30}
              output
            />
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">
              Discount Message
            </p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={
                  data[bundleOption]["totalSection"]["discountMessage"]["color"]
                }
                onChange={(e) =>
                  handleChangeCommon2(
                    e,
                    "totalSection",
                    "discountMessage",
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
                  {data[bundleOption]["totalSection"]["discountMessage"]["color"]}
                </p>
              </div>
            </div>

            <RangeSlider
              label="Font Size"
              onChange={(newvalue) =>
                handleChangeValueCommon2(
                  newvalue,
                  "totalSection",
                  "discountMessage",
                  "size",
                  data,
                  setData,
                  bundleOption
                )
              }
              suffix={
                data[bundleOption]["totalSection"]["discountMessage"]["size"]
              }
              value={
                data[bundleOption]["totalSection"]["discountMessage"]["size"]
              }
              min={10}
              max={30}
              output
            />
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">
              Original Price Style
            </p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={
                  data[bundleOption]["totalSection"]["originalPrice"]["color"]
                }
                onChange={(e) =>
                  handleChangeCommon2(
                    e,
                    "totalSection",
                    "originalPrice",
                    "color",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Price Color </p>
                <p>
                  {" "}
                  {
                    data[bundleOption]["totalSection"]["originalPrice"]["color"]
                  }{" "}
                </p>
              </div>
            </div>

            {/* <TextField
            type="number"
            label="Font Size"
            // placeholder="set minimum order  for item"
            onChange={(newvalue) =>
              handleChangeValueCommon2(
                newvalue,
                "totalSection",
                "originalPrice",
                "fontSize",
                data,
                setData,
                bundleOption
              )
            }
            value={
              data[bundleOption]["totalSection"]["originalPrice"]["fontSize"]
            }
            autoComplete="off"
            min={10}
            max={30}
          /> */}

            <RangeSlider
              label="Font Size"
              onChange={(newvalue) =>
                handleChangeValueCommon2(
                  newvalue,
                  "totalSection",
                  "originalPrice",
                  "fontSize",
                  data,
                  setData,
                  bundleOption
                )
              }
              suffix={
                data[bundleOption]["totalSection"]["originalPrice"]["fontSize"]
              }
              value={
                data[bundleOption]["totalSection"]["originalPrice"]["fontSize"]
              }
              min={10}
              max={30}
              output
            />
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
        <div className="sd-bundle-custom-item-common">
          <p className="sd-bundle-custom-item-heading-common">
            Final Price Style
          </p>
          <div className="sd-bundle-custom-item-inputSection">
            <input
              type="color"
              value={data[bundleOption]["totalSection"]["finalPrice"]["color"]}
              onChange={(e) =>
                handleChangeCommon2(
                  e,
                  "totalSection",
                  "finalPrice",
                  "color",
                  data,
                  setData,
                  bundleOption
                )
              }
            />
            <div className="sd-bundle-custom-fieldColorCode-common">
              <p>Price Color </p>
              <p>
                {" "}
                {data[bundleOption]["totalSection"]["finalPrice"]["color"]}{" "}
              </p>
            </div>
          </div>

          {/* <TextField
          type="number"
          label="Font Size"
          // placeholder="set minimum order  for item"
          onChange={(e) =>
            handleChangeValueCommon2(
              e,
              "totalSection",
              "finalPrice",
              "fontSize",
              data,
              setData,
              bundleOption
            )
          }
          value={data[bundleOption]["totalSection"]["finalPrice"]["fontSize"]}
          autoComplete="off"
          min={10}
          max={30}
        /> */}
          <RangeSlider
            label="Font Size"
            onChange={(e) =>
              handleChangeValueCommon2(
                e,
                "totalSection",
                "finalPrice",
                "fontSize",
                data,
                setData,
                bundleOption
              )
            }
            suffix={data[bundleOption]["totalSection"]["finalPrice"]["fontSize"]}
            value={data[bundleOption]["totalSection"]["finalPrice"]["fontSize"]}
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

export default TotalSection;
