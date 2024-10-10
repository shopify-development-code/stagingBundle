import { RadioButton } from "@shopify/polaris";
import React, { useState } from "react";
const Design = (props) => {
  let designOption = props.data.frequentlyBoughtTogether.design;
  let [checkedOption, setChecked] = useState(designOption);
  const handleChange = (e, id) => {
    setChecked(id);
    props.setData({
      ...props.data,
      frequentlyBoughtTogether: {
        ...props.data.frequentlyBoughtTogether,
        design: id,
      },
    });
  };
  
  
  // console.log("fdehfh feydfye",props.data,checkedOption);
  
  return (
    <>
      <div className="sd-bundle-designCustom">
        <RadioButton
          id="classic"
          label="Classic"
          name="theme"
          value={"classic"}
          onChange={(e, id) => handleChange(e, id)}
          checked={checkedOption == "classic"}
        />
      </div>
      <div className="sd-bundle-designCustom">
        <RadioButton
          id="modern"
          label="Modern"
          name="theme"
          value={"modern"}
          onChange={(e, id) => handleChange(e, id)}
          checked={checkedOption == "modern"}
        />
      </div>
    </>
  );
};

export default Design;
