

import { BrowserRouter } from "react-router-dom";
// import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import "./components/style.css"
import "./components/responsive.css"
import ContextProvider from "./components/shop"
import {
  QueryProvider,
  PolarisProvider,
} from "./components";
import { NavMenu } from "@shopify/app-bridge-react";
import { Frame, Loading } from "@shopify/polaris";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)",{eager:true});

  return (

    <PolarisProvider>
      <BrowserRouter>
          <QueryProvider>
          <ContextProvider>
        <NavMenu >
                   <a href="/bundle">Bundles</a>
                   <a href="/customization">Customization</a>
                   <a href="/analytics">Analytics</a>
                   <a href="/settings">Settings</a>
                   <a href="/plans">Plans</a>
                </NavMenu>
                <Routes pages={pages} />
          
            </ContextProvider>
              
          </QueryProvider>
     
      </BrowserRouter>
    </PolarisProvider>
  );
}
