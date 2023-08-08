import React, { useState } from "react";
import { ResourcePicker } from "@shopify/app-bridge-react";

const Dummy =()=>{
    
const [type,setType]=useState("Product")
const [pmodal,setPModal]=useState(false)
const [cmodal,setCModal]=useState(false)

   const  handleType=(e)=>{
setType(e.target.value)

   }
   const handleProducts=(e)=>{

   }

  const  handleButton=()=>{
    if(type=="Product"){
      setPModal(true) 
    }
    
    if(type=="Collection"){
      setCModal(true) 
    }
    
  }
  const  handleCancel=()=>{
    setCModal(false)
    setPModal(false)
    }
  
return(
<>



 <div>

<div className="sd-bundle-browseItem">
              <input
                type="radio"
                id="all"
                name="discountProductType"
                value="Product"
                checked={
                  type == "Product"
                }
                onChange={handleType}
              />
              <label htmlFor="all">specific Products</label>
            </div>
            <div className="sd-bundle-browseItem">
              <input
                type="radio"
                id="collection"
                name="discountProductType"
                value="Collection"
                checked={
                  type == "Collection"
                }
                onChange={handleType}
              />
              <label htmlFor="collection">A Collection</label>
            </div>

<button onClick={handleButton}>browse</button>
    </div> 
{type=="Product" ?
 pmodal && <ResourcePicker
resourceType="Product"
open={pmodal}
selectMultiple={false}
onSelection={(e) => { e.selection.map((e) => { 
 }); setPModal(false); }}
onCancel={handleCancel}
/> :
type=="Collection" ?
cmodal && <ResourcePicker
resourceType="Collection"
open={cmodal}
selectMultiple={false}
onSelection={(e) => { e.selection.map((e) => { 
 }); setCModal(false); }}
onCancel={handleCancel}
/>
: ""

 }
</>
)

}


export default Dummy;