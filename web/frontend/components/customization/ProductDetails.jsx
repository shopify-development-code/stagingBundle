import React from "react";
import { Grid, RangeSlider, TextField } from "@shopify/polaris";
import {
  handleChangeCommon,
  handleChangeValueCommon,
  handleChangeCommon2,
  handleChangeValueCommon2,
} from "../helperFunctions";

const ProductDetails = ({ bundleOption, data, setData, displayOption }) => {
  return (
    <div className="sd-bundle-boxCustom">
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">
              Product Details Box
            </p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={
                  data[bundleOption]["productDetails"]["productDetailsBox"][
                    "backgroundColor"
                  ]
                }
                onChange={(e) =>
                  handleChangeCommon2(
                    e,
                    "productDetails",
                    "productDetailsBox",
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
                    data[bundleOption]["productDetails"]["productDetailsBox"][
                      "backgroundColor"
                    ]
                  }{" "}
                </p>
              </div>
            </div>

            {/* <RangeSlider
              label="Size"
              onChange={(newvalue) =>
                handleChangeValueCommon2(
                  newvalue,
                  "productDetails",
                  "price",
                  "fontSize",
                  data,
                  setData,
                  bundleOption
                )
              }
              value={data[bundleOption]["productDetails"]["price"]["fontSize"]}
              min={10}
              max={30}
              output
            /> */}
          </div>
        </Grid.Cell>
        {bundleOption != "volume" && (
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div className="sd-bundle-custom-item-common">
              <p className="sd-bundle-custom-item-heading-common">Plus Icon</p>

              <div className="sd-bundle-custom-item-inputSection">
                <input
                  type="color"
                  value={data[bundleOption]["productDetails"]["plusColor"]}
                  onChange={(e) =>
                    handleChangeCommon(
                      e,
                      "productDetails",
                      "plusColor",
                      data,
                      setData,
                      bundleOption
                    )
                  }
                />
                <div className="sd-bundle-custom-fieldColorCode-common">
                  <p>Color </p>
                  <p>{data[bundleOption]["productDetails"]["plusColor"]}</p>
                </div>
              </div>
              {/* <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={
                  data[bundleOption]["productDetails"]["plusBackgroundColor"]
                }
                onChange={(e) =>
                  handleChangeCommon(
                    e,
                    "productDetails",
                    "plusBackgroundColor",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />
              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Background Color </p>
                <p>
                  {data[bundleOption]["productDetails"]["plusBackgroundColor"]}
                </p>
              </div>
            </div> */}
            </div>
          </Grid.Cell>
        )}
        {bundleOption == "productMixMatch" && (
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div className="sd-bundle-custom-item-common">
              <p className="sd-bundle-custom-item-heading-common">
                All Product Text
              </p>
              <div className="sd-bundle-custom-item-inputSection">
                <input
                  type="color"
                  value={
                    data[bundleOption]["productDetails"]["productDetailsBox"][
                      "allProductColor"
                    ]
                  }
                  onChange={(e) =>
                    handleChangeCommon2(
                      e,
                      "productDetails",
                      "productDetailsBox",
                      "allProductColor",
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
                    {
                      data[bundleOption]["productDetails"]["productDetailsBox"][
                        "backgroundColor"
                      ]
                    }{" "}
                  </p>
                </div>
              </div>
            </div>
          </Grid.Cell>
        )}
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">Title</p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]["productDetails"]["title"]["color"]}
                onChange={(e) =>
                  handleChangeCommon2(
                    e,
                    "productDetails",
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
                <p>
                  {" "}
                  {data[bundleOption]["productDetails"]["title"]["color"]}{" "}
                </p>
              </div>
            </div>

            <RangeSlider
              label="Size"
              onChange={(e) =>
                handleChangeValueCommon2(
                  e,
                  "productDetails",
                  "title",
                  "fontSize",
                  data,
                  setData,
                  bundleOption
                )
              }
              value={data[bundleOption]["productDetails"]["title"]["fontSize"]}
              min={10}
              max={30}
              output
            />
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">Price</p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={data[bundleOption]["productDetails"]["price"]["color"]}
                onChange={(e) =>
                  handleChangeCommon2(
                    e,
                    "productDetails",
                    "price",
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
                  {data[bundleOption]["productDetails"]["price"]["color"]}{" "}
                </p>
              </div>
            </div>

            <RangeSlider
              label="Size"
              onChange={(newvalue) =>
                handleChangeValueCommon2(
                  newvalue,
                  "productDetails",
                  "price",
                  "fontSize",
                  data,
                  setData,
                  bundleOption
                )
              }
              value={data[bundleOption]["productDetails"]["price"]["fontSize"]}
              min={10}
              max={30}
              output
            />
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">Image</p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={
                  data[bundleOption]["productDetails"]["image"]["borderColor"]
                }
                onChange={(e) =>
                  handleChangeCommon2(
                    e,
                    "productDetails",
                    "image",
                    "borderColor",
                    data,
                    setData,
                    bundleOption
                  )
                }
              />

              <div className="sd-bundle-custom-fieldColorCode-common">
                <p>Border Color </p>
                <p>
                  {" "}
                  {
                    data[bundleOption]["productDetails"]["image"]["borderColor"]
                  }{" "}
                </p>
              </div>
            </div>

            <RangeSlider
              label="Border Radius"
              onChange={(newvalue) =>
                handleChangeValueCommon2(
                  newvalue,
                  "productDetails",
                  "image",
                  "borderRadius",
                  data,
                  setData,
                  bundleOption
                )
              }
              value={
                data[bundleOption]["productDetails"]["image"]["borderRadius"]
              }
              min={10}
              max={40}
              output
            />
          </div>
        </Grid.Cell>

        {bundleOption != "popUp" && (
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div className="sd-bundle-custom-item-common">
              <p className="sd-bundle-custom-item-heading-common">Quantities</p>
              <div className="sd-bundle-custom-item-inputSection">
                <input
                  type="color"
                  value={
                    data[bundleOption]["productDetails"]["quantities"]["color"]
                  }
                  onChange={(e) =>
                    handleChangeCommon2(
                      e,
                      "productDetails",
                      "quantities",
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
                    {
                      data[bundleOption]["productDetails"]["quantities"][
                        "color"
                      ]
                    }{" "}
                  </p>
                </div>
              </div>

              <RangeSlider
                label="Size"
                onChange={(e) =>
                  handleChangeValueCommon2(
                    e,
                    "productDetails",
                    "quantities",
                    "size",
                    data,
                    setData,
                    bundleOption
                  )
                }
                value={
                  data[bundleOption]["productDetails"]["quantities"]["size"]
                }
                min={10}
                max={30}
                output
              />
            </div>
          </Grid.Cell>
        )}

        {/* 
{ bundleOption == "volume" && <div className="sd-bundle-custom-item-common">
    <p className="sd-bundle-custom-item-heading-common">Quantities Selector</p>
    <div className="sd-bundle-custom-item-inputSection">
<input type="color" value={data[bundleOption]["productDetails"]["quantitiesSelector"]["color"]} onChange={(e)=>handleChangeCommon2(e,"productDetails","quantitiesSelector","color",data,setData,bundleOption)}/>

<div className="sd-bundle-custom-fieldColorCode-common">
    <p>Text Color </p>
<p> {data[bundleOption]["productDetails"]["quantitiesSelector"]["color"]} </p>

</div>
</div>


<div className="sd-bundle-custom-item-inputSection">
<input type="color" value={data[bundleOption]["productDetails"]["quantitiesSelector"]["backgroundColor"]}  onChange={(e)=>handleChangeCommon2(e,"productDetails","quantitiesSelector","backgroundColor",data,setData,bundleOption)}/>
<div className="sd-bundle-custom-fieldColorCode-common">
    <p>Background Color </p>
<p> {data[bundleOption]["productDetails"]["quantitiesSelector"]["backgroundColor"]} </p>

</div>
</div>


<div className="sd-bundle-custom-item-inputSection">
<input type="color" value={data[bundleOption]["productDetails"]["quantitiesSelector"]["plusMinusColor"]}  onChange={(e)=>handleChangeCommon2(e,"productDetails","quantitiesSelector","plusMinusColor",data,setData,bundleOption)}/>
<div className="sd-bundle-custom-fieldColorCode-common">
    <p>PlusMinus Color </p>
<p> {data[bundleOption]["productDetails"]["quantitiesSelector"]["plusMinusColor"]} </p>

</div>
</div>

</div> } */}
       
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="sd-bundle-custom-item-common">
            <p className="sd-bundle-custom-item-heading-common">
              Variant Selector Style
            </p>
            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={
                  data[bundleOption]["productDetails"]["variantSelector"][
                    "color"
                  ]
                }
                onChange={(e) =>
                  handleChangeCommon2(
                    e,
                    "productDetails",
                    "variantSelector",
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
                  {
                    data[bundleOption]["productDetails"]["variantSelector"][
                      "color"
                    ]
                  }{" "}
                </p>
              </div>
            </div>

            <div className="sd-bundle-custom-item-inputSection">
              <input
                type="color"
                value={
                  data[bundleOption]["productDetails"]["variantSelector"][
                    "backgroundColor"
                  ]
                }
                onChange={(e) =>
                  handleChangeCommon2(
                    e,
                    "productDetails",
                    "variantSelector",
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
                  {
                    data[bundleOption]["productDetails"]["variantSelector"][
                      "backgroundColor"
                    ]
                  }{" "}
                </p>
              </div>
            </div>
            <RangeSlider
              label="Width"
              onChange={(e) =>
                handleChangeValueCommon2(
                  e,
                  "productDetails",
                  "variantSelector",
                  "width",
                  data,
                  setData,
                  bundleOption
                )
              }
              value={
                data[bundleOption]["productDetails"]["variantSelector"]["width"]
              }
              min={100}
              max={200}
              output
            />
            {/* <RangeSlider
              label="Height"
              onChange={(e) =>
                handleChangeValueCommon2(
                  e,
                  "productDetails",
                  "variantSelector",
                  "height",
                  data,
                  setData,
                  bundleOption
                )
              }
              value={data[bundleOption]["productDetails"]["variantSelector"]["height"]}
              min={10}
              max={30}
              output
            />
            <RangeSlider
              label="Arrow Icon"
              onChange={(e) =>
                handleChangeValueCommon2(
                  e,
                  "productDetails",
                  "variantSelector",
                  "arrowIcon",
                  data,
                  setData,
                  bundleOption
                )
              }
              value={data[bundleOption]["productDetails"]["variantSelector"]["arrowIcon"]}
              min={10}
              max={30}
              output
            /> */}
          </div>
        </Grid.Cell>
      </Grid>
    </div>
  );
};

export default ProductDetails;
