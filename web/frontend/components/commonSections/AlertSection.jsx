import React from "react"; 
import {Banner} from "@shopify/polaris";

const AlertSection=(props)=>{
    return(
       
       <div style={{ margin :"15px 11rem",maxWidth:"100%"}}>
        <Banner
          title="Alert !!"
          status={props.status}
          onDismiss={() => props.setAlert({ state: false, message:[],status:""})}
          tone={props.status}
          
          
          // onDismiss={() => props.setAlert({ state: false, message:"",status:""})}
        >
          {
          props.message.map((item,index)=>
          <p key={index}> * {item}</p>
)}

        </Banner></div>

    )
}

export default AlertSection;