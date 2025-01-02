import { useEffect, useState } from "react";
import LogoHeader from "../components/logoHeader";
import Watermark from "../components/watermark";
import { Card, Row, Col, Button, Skeleton } from "antd";
import { Icon } from "@shopify/polaris";
import {  CheckCircleIcon } from "@shopify/polaris-icons";
import postApi from "../components/postApi";
import { useAppBridge } from "@shopify/app-bridge-react";
import { useSearchParams } from "react-router-dom";
import ContactUs from "../components/contactUs";

const PricingPlan = () => {
  const [searchParams] = useSearchParams();
  const app = useAppBridge();
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [loader, setLoader] = useState(false);
  async function getSelectedBilling(charge_id) {
    setLoader(true);
    const body = {
      charge_id: charge_id,
    };
    const response = await postApi("/api/admin/billingSelected", body, app);
    if (response.status == 202) {
      setLoader(false);
      setSelectedPlan(response.data.plan);
    } else {
      setLoader(false);
    }
  }
  async function getPlans() {
    setLoader(true);
    const response = await postApi("/api/admin/getPlans", {}, app);
    if (response.status == 200) {
      setLoader(false);
      setSelectedPlan(response.data.data.plan);
    } else {
      setLoader(false);
    }
  }
  useEffect(() => {
    const charge_id = searchParams.get("charge_id");
    if (charge_id) {
      getSelectedBilling(charge_id);
    } else {
      getPlans();
    }
  }, []);

  async function handleChoosePlan(e, key) {
    if (key == "basic") {
      setLoader(true);
      const body = {
        plan: "basic",
        interval: "monthly",
        price: "5.99",
      };
      const response = await postApi("/api/admin/getBilling", body, app);
      if (response.status == 200) {
        setLoader(false);
        let confirmationUrl =
          response.data.data.appSubscriptionCreate.confirmationUrl; // removed  .body
        window.top.location.href = confirmationUrl;
      }
    } else if (key == "standard") {
      setLoader(true);
      const body = {
        plan: "standard",
        interval: "monthly",
        price: "10.99",
      };
      const response = await postApi("/api/admin/getBilling", body, app);
      if (response.status == 200) {
        setLoader(false);
        let confirmationUrl =
          response.data.data.appSubscriptionCreate.confirmationUrl;  // removed  .body
        window.top.location.href = confirmationUrl;
      }
    } else {
      setLoader(true);
      const body = {
        plan: "free",
        interval: "monthly",
        price: "0",
      };

      const response = await postApi("/api/admin/freePlans", body, app);
      if (response.status == 200) {
        setLoader(false);
        setSelectedPlan(response.data.data.plan);
      }
    }
  }

  return (
    <div>
      <LogoHeader />
      <div className="sd-bundle-MoveToHome-section sd-margin-top">
        <div className="sd-bundle-MoveToHome-arrow"></div>
        <div className="sd-bundle-commonHeading">Plan details</div>
      </div>
      <Card className="sd-bundle-contact-box sd-plan-box">
        {/* <Card style={{width:'300px'}} title="Current Plan">
        Free

    </Card> */}

        <div className="sd-plan-card-box">
          <Row className="sd-plan-group" gutter={16}>
            <Col>
              <Card className="sd-plan" title="Free" bordered={false}>
                <Skeleton loading={loader} paragraph={{ rows: 7 }}>
                  <Card className="sd-plan-inner sd-plan-inner-box">
                    {selectedPlan == "free" ? (
                      <div className="sd-plan-active-plan">Active</div>
                    ) : (
                      ""
                    )}

                    <strong>Includes:</strong>
                    <p>
                      <Icon source={ CheckCircleIcon} tone="base" /> 3 types of
                      bundles
                    </p>
                    <ul className="sd-bundle-plans-list">
                      <li>Product Bundle</li>
                      <li>Volume Bundle</li>
                      <li>Collection Mix & Match Bundle</li>
                    </ul>
                    <p>
                      <Icon source={ CheckCircleIcon} tone="base" />
                      Design customizations
                    </p>
                    {/* <p>
                    <Icon source={ CheckCircleIcon} tone="base" />
                    24/7 support
                  </p> */}
                  </Card>
                  <Card className="sd-plan-second-inner sd-plan-inner-box">
                    <div className="sd-plan-pricing-text">
                      $0<span>/mo</span>
                    </div>
                    <div className="sd-plan-pricing-btn">
                      {/* <Button disabled={selectedPlan == "free" ? true : false} onClick={(e)=>handleChoosePlan(e,"free")}  className="sd-plan-btn">
                        {selectedPlan == "free" ? "Current Plan" : "Choose Plan"}
                     </Button> */}
                    </div>
                  </Card>
                </Skeleton>
              </Card>
            </Col>
            <Col>
              <Card className="sd-plan" title="Basic" bordered={false}>
                <Skeleton loading={loader} paragraph={{ rows: 7 }}>
                  <Card className="sd-plan-inner sd-plan-inner-box">
                    {selectedPlan == "basic" ? (
                      <div className="sd-plan-active-plan">Active</div>
                    ) : (
                      ""
                    )}
                    <strong>All Free features, plus:</strong>
                    <p>
                      <Icon source={ CheckCircleIcon} tone="base" />4 types of
                      bundles
                    </p>
                    <ul className="sd-bundle-plans-list">
                      <li>Product Bundle</li>
                      <li>Volume Bundle</li>
                      <li>Collection Mix & Match Bundle</li>
                      <li>Product Mix & Match Bundle</li>
                    </ul>
                    <p>
                      <Icon source={ CheckCircleIcon} tone="base" />
                      Design customizations
                    </p>
                    {/* <p>
                    <Icon source={ CheckCircleIcon} tone="base" />
                    24/7 support
                  </p> */}
                    <p>
                      <Icon source={ CheckCircleIcon} tone="base" />
                      Remove watermark
                    </p>
                  </Card>

                  <Card className="sd-plan-second-inner sd-plan-inner-box">
                    <div className="sd-plan-pricing-text">
                      $5.99<span>/mo</span>
                    </div>
                    <div className="sd-plan-pricing-btn">
                      <Button
                        disabled={selectedPlan == "basic" ? true : false}
                        onClick={(e) => handleChoosePlan(e, "basic")}
                        className="sd-plan-btn"
                      >
                        {" "}
                        {selectedPlan == "basic"
                          ? "Current Plan"
                          : "Choose Plan"}
                      </Button>
                    </div>
                  </Card>
                </Skeleton>
              </Card>
            </Col>
            <Col>
              <Card className="sd-plan" title="Standard" bordered={false}>
                <Skeleton loading={loader} paragraph={{ rows: 7 }}>
                  <Card className="sd-plan-inner sd-plan-inner-box">
                    {selectedPlan == "standard" ? (
                      <div className="sd-plan-active-plan">Active</div>
                    ) : (
                      ""
                    )}
                    <strong>All Free features, plus:</strong>
                    <p>
                      <Icon source={ CheckCircleIcon} tone="base" />
                      All 6 types of bundles
                    </p>
                    <ul className="sd-bundle-plans-list">
                      <li>Product Bundle</li>
                      <li>Volume Bundle</li>
                      <li>Collection Mix & Match Bundle</li>
                      <li>Product Mix & Match Bundle</li>
                      <li>Buy X Get Y Bundle</li>
                      <li>Frequently Bought Together Bundle</li>
                    </ul>
                    <p>
                      <Icon source={ CheckCircleIcon} tone="base" />
                      Design customizations
                    </p>
                    {/* <p>
                    <Icon source={ CheckCircleIcon} tone="base" />
                    24/7 support
                  </p> */}
                    <p>
                      <Icon source={ CheckCircleIcon} tone="base" />
                      Remove watermark
                    </p>
                  </Card>

                  <Card className="sd-plan-second-inner sd-plan-inner-box">
                    <div className="sd-plan-pricing-text">
                      $10.99<span>/mo</span>
                    </div>
                    <div className="sd-plan-pricing-btn">
                      <Button
                        disabled={selectedPlan == "standard" ? true : false}
                        onClick={(e) => handleChoosePlan(e, "standard")}
                        className="sd-plan-btn"
                      >
                        {" "}
                        {selectedPlan == "standard"
                          ? "Current Plan"
                          : "Choose Plan"}
                      </Button>
                    </div>
                  </Card>
                </Skeleton>
              </Card>
            </Col>
          </Row>
        </div>
      </Card>

      <Watermark />
      <ContactUs />
    </div>
  );
};

export default PricingPlan;
