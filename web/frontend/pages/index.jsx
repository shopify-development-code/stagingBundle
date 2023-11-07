import React from "react";
import Dashboard from "../components/dashboard";
import ContactUs from "../components/contactUs";
import LogoHeader from "../components/logoHeader";

export default function HomePage() {
 return (
<>
<LogoHeader/>
<div className="sd-margin-top">

<Dashboard/>
<ContactUs/>
</div>
 </>
  );
}
