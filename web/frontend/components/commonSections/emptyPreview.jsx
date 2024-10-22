import React from "react" ;
import {Icon} from "@shopify/polaris";
import { ProductAddIcon  } from "@shopify/polaris-icons";
// import { AddProductMajor } from "@shopify/polaris-icons";

const EmptyPreview=(props)=>{

return(
<div className="sd-bundle-message">
    <Icon source={ProductAddIcon } color="base" />
    {/* <Icon source={AddProductMajor} color="base" /> */}
    {
        props?.type=="collection" ? <> Firstly,Add collections in bundle to preview</>
    
   :<> Firstly,Add products in bundle to preview</>
} 
  
  </div>
)


}


export default EmptyPreview;