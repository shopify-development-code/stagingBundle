
import { BrowserRouter,Link } from "react-router-dom";
import { NavMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import "./components/style.css"
import "./components/responsive.css"
import ContextProvider from "./components/shop"
import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)",{eager:true});

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
          <ContextProvider>
         
          <NavMenu
            ><Link to="/bundle">Bundles</Link>
            <Link to="/customization">Customization</Link>
            <Link to="/analytics">Analytics</Link>
            <Link to="/settings">Settings</Link>
           <Link to="/plans">Plans</Link></NavMenu>
            <Routes pages={pages} />
            </ContextProvider>
              
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}

