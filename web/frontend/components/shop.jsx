import React, { useContext, useState, createContext,useEffect } from "react";
import postApi from "./postApi";
import { useAppBridge } from "@shopify/app-bridge-react";
const APIContext = createContext();

 function ContextProvider({ children }) {
   const [currency,setCurrency]=useState("") ;
   const [currencyCode,setCurrencyCode]=useState("") ;
   const [timeZone,setTimeZone] = useState("")
   const app=useAppBridge();
  const [getShop, setGetShop] = useState(new URL(location.href).searchParams.get("shop"));

  async function getCurrencyCode(){
                 
  let data= await postApi("api/admin/getCurrencyCode",{},app)
    let codeCurrency=data?.data?.data?.currencyFormats.moneyFormat;
    let shopTimeZone = data?.data?.data?.ianaTimezone;
    let moneyFormat = codeCurrency.replace(/\{\{amount\}\}/g, '');

    setCurrencyCode(moneyFormat)
    setTimeZone(shopTimeZone)
  }
  
  getCurrencyCode(currencyCode)

  return (

    <APIContext.Provider value={{ shop: getShop,timeZone:timeZone,app:app,currencyCode:currencyCode}}>

      {children}

    </APIContext.Provider>

 );

}


export default ContextProvider;


export function useAPI() {

  const context = useContext(APIContext);

  if (context === undefined) {

    throw new Error("Context must be used within a Provider");

  }

  return context;
}