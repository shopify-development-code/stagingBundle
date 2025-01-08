import { useAppBridge,  } from "@shopify/app-bridge-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
export default function ExitIframe() {
  const app = useAppBridge();
  const { search } = useLocation();
 
  useEffect(() => {
    if (!!app && !!search) {
      const params = new URLSearchParams(search);
      const redirectUri = params.get("redirectUri");
      const url = new URL(decodeURIComponent(redirectUri));
 
      if (url.hostname === location.hostname) {
        window.open(decodeURIComponent(redirectUri), "_top");
 
      }
    }
  }, [app, search]);
 
  return <></>;
}