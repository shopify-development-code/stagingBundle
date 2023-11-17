import React from 'react'
import { useAppBridge } from "@shopify/app-bridge-react";
import postApi from "../components/postApi";

const CreatePlan = () => {
    const app = useAppBridge();
async function handleClick(){
    console.log("click")
    const response = await postApi("/api/admin/createPlans",{},app)
    console.log(response)
}
  return (
    <div>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default CreatePlan