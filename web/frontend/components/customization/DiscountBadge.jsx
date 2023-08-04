import React from "react" ;
import { Divider } from "antd";
import { TextField } from "@shopify/polaris";
import { handleChangeCommon,handleChangeValueCommon } from "../helperFunctions";
const DiscountBadge=({data,setData,bundleOption,displayOption})=>{
  
    const handleText=(newvalue)=>{
           setData({...data,
            [bundleOption]:{
                ...data[bundleOption],
            saveDiscount:{...data[bundleOption]["saveDiscount"],text:newvalue}
            }
        
        })
    }
return(


 <div className="sd-bundle-titleCustom">

<div className="sd-bundle-custom-item-common">
    <p className="sd-bundle-custom-item-heading-common">Discount Badge </p>
    <div className="sd-bundle-custom-item-inputSection">
<input type="color" value={data[bundleOption]["saveDiscount"]["color"]}  onChange={(e)=>handleChangeCommon(e,"saveDiscount","color",data,setData,bundleOption)}/>
<div className="sd-bundle-custom-fieldColorCode-common">
    <p>Text Color </p>
<p> {data[bundleOption]["saveDiscount"]["color"]} </p>

</div>
</div>


<div className="sd-bundle-custom-item-inputSection">
<input type="color" value={data[bundleOption]["saveDiscount"]["backgroundColor"]}  onChange={(e)=>handleChangeCommon(e,"saveDiscount","backgroundColor",data,setData,bundleOption)}/>
<div className="sd-bundle-custom-fieldColorCode-common">
    <p>Background Color </p>
<p> {data[bundleOption]["saveDiscount"]["backgroundColor"]} </p>

</div>
</div>

<TextField
            type="number"
            label="Size"
            // placeholder="set minimum order  for item"
            onChange={(e)=>handleChangeValueCommon(e,"saveDiscount","fontSize",data,setData,bundleOption)}
            value={data[bundleOption]["saveDiscount"]["fontSize"]}
            autoComplete="off"
            min="0"
          />

<TextField
            type="texts"
            label="Text"
            // placeholder="set minimum order  for item"
            onChange={handleText}
            value={data[bundleOption]["saveDiscount"]["text"]}
            autoComplete="off"
            min="0"
          />

</div>


</div> 

)

}

export default DiscountBadge;
