import React, { useState } from "react";
import { Grid, RangeSlider, Select, TextField } from "@shopify/polaris";

const Box = (props) => {
  let dataToChange = props["data"][props.bundleOption];
  const handleChangeCommon = (e, key1, key2, bundleOption) => {
    const newValue = e.target.value;
  
    props.setData((prevData) => ({
      ...prevData,
      [bundleOption]: {
        ...prevData[bundleOption],
        [key1]: {
          ...prevData[bundleOption]?.[key1],
          [key2]: newValue,
        },
      },
    }));
  };
  
  const handleChangeValueCommon = (newvalue, key1, key2, bundleOption) => {
    let valueToSet = 0;
  
    if (newvalue === "" || newvalue < 0) {
      valueToSet = 0;
    } else if (newvalue > 30) {
      valueToSet = 30;
    } else {
      valueToSet = String(newvalue).replace(/^0/, "");
    }
  
    props.setData((prevData) => ({
      ...prevData,
      [bundleOption]: {
        ...prevData[bundleOption],
        [key1]: {
          ...prevData[bundleOption]?.[key1],
          [key2]: valueToSet,
        },
      },
    }));
  };
  
  const options = [
    { label: "Current Theme Font", value: "inherit" },
    { label: "Cursive", value: "cursive" },
    { label: "Fantasy", value: "fantasy" },
    { label: "Serif", value: "serif" },
    { label: "Sans-serif", value: "sans-serif" },
    { label: "Monospace", value: "monospace" },
    { label: "Arial", value: "Arial" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Georgia", value: "Georgia" },
    { label: "Verdana", value: "Verdana" },
    { label: "Courier New", value: "Courier New" },
    { label: "Comic Sans MS", value: "Comic Sans MS" },
    { label: "Open Sans", value: "Open Sans" },
    { label: "Poppins", value: "Poppins" },
    { label: "Calibri", value: "Calibri" },
    { label: "Cambria", value: "Cambria" },
    { label: "Candara", value: "Candara" },
    { label: "Dejavu Sans", value: "Dejavu Sans" },
    { label: "Franklin Gothic", value: "Franklin Gothic" },
    { label: "Helvetica", value: "Helvetica" },
    {label: "Tahoma", value: "Tahoma"},
    {label: "Work Sans", value: "Work Sans"},
  ];

  return (
    <>
      {props.displayOption == "productPages" ? (
        <div className="sd-bundle-boxCustom">
          <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <div className="sd-bundle-custom-item-common">
                <p className="sd-bundle-custom-item-heading-common">
                  Background
                </p>
                <div className="sd-bundle-custom-item-inputSection">
                  <input
                    type="color"
                    value={dataToChange?.box?.backgroundColor}
                    onChange={(e) =>
                      handleChangeCommon(
                        e,
                        "box",
                        "backgroundColor",
                        props.bundleOption
                      )
                    }
                  />
                  <div className="sd-bundle-custom-fieldColorCode-common">
                    <p>Background Color </p>
                    <p> {dataToChange?.box?.backgroundColor} </p>
                  </div>
                </div>
              </div>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <div className="sd-bundle-custom-item-common">
                <div className="sd-bundle-custom-item-heading-common">
                  Select Font Family
                </div>
                <Select
                  options={options}
                  onChange={(newvalue) =>
                    handleChangeValueCommon(
                      newvalue,
                      "box",
                      "fontFamily",
                      props.bundleOption
                    )
                  }
                  value={props.data[props.bundleOption]?.box?.fontFamily}
                />
              </div>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <div className="sd-bundle-custom-item-common">
                <p className="sd-bundle-custom-item-heading-common">Border</p>
                <div className="sd-bundle-custom-item-inputSection">
                  <input
                    type="color"
                    value={dataToChange?.box?.borderColor}
                    onChange={(e) =>
                      handleChangeCommon(
                        e,
                        "box",
                        "borderColor",
                        props.bundleOption
                      )
                    }
                  />
                  <div className="sd-bundle-custom-fieldColorCode-common">
                    <p>Border Color </p>
                    <p> {dataToChange?.box?.borderColor} </p>
                  </div>
                </div>
                <RangeSlider
                  output
                  label="Border Radius"
                  min={1}
                  max={30}
                  suffix= {dataToChange?.box?.borderRadius}
                  value={dataToChange?.box?.borderRadius}
                  onChange={(newvalue) =>
                    handleChangeValueCommon(
                      newvalue,
                      "box",
                      "borderRadius",
                      props.bundleOption
                    )
                  }
                />
              </div>
            </Grid.Cell>
          </Grid>
        </div>
      ) : props.displayOption == "popUp" ? (
        <div className="sd-bundle-boxCustom">
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">Background</p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={dataToChange.box.backgroundColor}
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "box",
                    "backgroundColor",
                    props.bundleOption
                  )
                }
              />
              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Background Color </p>
                <p> {dataToChange.box.backgroundColor} </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Box;
