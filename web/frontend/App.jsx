import React,{Suspense} from "react";
import { BrowserRouter } from "react-router-dom";
const Routes = React.lazy(() => import('./Routes'));
import BoatLoader from "./components/BoatLoader";
// import Routes from "./Routes";
import "./components/responsive.css"
import "./components/style.css"

import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";

import ContextProvider from "./components/shop";

export default function App() {
  
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <Suspense fallback={<div className="sd-bundle-lazy-loading"><BoatLoader/></div>}>
      <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
          <ContextProvider>
            
            <Routes pages={pages} />
            </ContextProvider>
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
            </Suspense>

  );
}
