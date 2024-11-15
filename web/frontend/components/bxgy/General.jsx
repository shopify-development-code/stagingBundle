import { BlockStack, Card, Text, TextField } from "@shopify/polaris";
import React from "react";

const General = (props) => {
  const handleInputChange = (e, element) => {
    if (e[0] == " " || (e.length > 1 && e.at(-2) == " " && e.at(-1) == " ")) {
      return;
    }

    props.setData({
      ...props.data,
      [element]: e,
    });
  };
  return (
    <>
      <Card sectioned>
        <Text as="h2" variant="headingSm">
          General
        </Text>
        <BlockStack gap="400">
          <TextField
            label={"Name"}
            inputMode="text"
            size="slim"
            helpText={
              <Text as="p" variant="bodyXs">
                *This name is used for you to identify this bundle.Your
                customers won’t see this name.
              </Text>
            }
            placeholder="Enter your bundle name..."
            value={props.data.name}
            onChange={(e) => handleInputChange(e, "name")}
          />

          <TextField
            label={"Title"}
            inputMode="text"
            size="slim"
            helpText={
              <Text as="p" variant="bodyXs">
                *Customers will see this as the name of the bundle displayed.
              </Text>
            }
            placeholder="Title of your bundle..."
            value={props.data.title}
            onChange={(e) => handleInputChange(e, "title")}
          />

          <TextField
            label={"Bundle description"}
            inputMode="text"
            size="slim"
            helpText={
              <Text as="p" variant="bodyXs">
                *Provide an explanation of the selection limit within this
                bundle to ensure user awareness.
              </Text>
            }
            placeholder="What’s included in your bundle?"
            value={props.data.description}
            onChange={(e) => handleInputChange(e, "description")}
          />
          {props.data.type !== "productMixMatch" &&
            props.data.type !== "bxgy" &&
            props.data.type !== "volumeBundle" && (
              <TextField
                label={"Bagde"}
                inputMode="text"
                size="slim"
                helpText={
                  <Text as="p" variant="bodyXs">
                    Use badge to make your bundle attractive.
                  </Text>
                }
                placeholder="Type the badge message..."
                value={props.data.badgeText}
                onChange={(e) => handleInputChange(e, "badgeText")}
              />
            )}
        </BlockStack>
      </Card>
      {/* <div className="sd-bundle-bundleSection-common sd-bundle-createBundleNamingSection">
        <div className="sd-bundle-bundleSection-heading-common">General</div>
        <div className="sd-bundle-nameBlock">
          <label className="sd-bundle-plainText-common">Name</label>
          <input
            type="text"
            className="sd-bundle-name"
            placeholder="Enter your bundle name..."
            value={props.data.name}
            onChange={(e) => handleInputChange(e, "name")}
          />
          <p className="sd-bundle-createBundleSectionDisclaimer">
            *This name is used for you to identify this bundle.Your customers
            won’t see this name.
          </p>
        </div>
        <div className="sd-bundle-nameBlock">
          <label className="sd-bundle-plainText-common">Title</label>
          <input
            type="text"
            className="sd-bundle-name"
            placeholder="Title of your bundle..."
            value={props.data.title}
            onChange={(e) => handleInputChange(e, "title")}
          />
          <p className="sd-bundle-createBundleSectionDisclaimer">
            *Customers will see this as the name of the bundle displayed .
          </p>
        </div>
        <div className="sd-bundle-nameBlock">
          <label className="sd-bundle-plainText-common">
            Bundle description
          </label>
          <input
            type="text"
            className="sd-bundle-name"
            placeholder="What’s included in your bundle?"
            value={props.data.description}
            onChange={(e) => handleInputChange(e, "description")}
          />
          <p className="sd-bundle-createBundleSectionDisclaimer">
            *Provide an explanation of the selection limit within this bundle to
            ensure user awareness..
          </p>
        </div>
        {props.data.type !== "productMixMatch" &&
          props.data.type !== "bxgy" &&
          props.data.type !== "volumeBundle" && (
            <div className="sd-bundle-nameBlock">
              <label className="sd-bundle-plainText-common">Badge</label>
              <input
                type="text"
                className="sd-bundle-name"
                placeholder="Type the badge message..."
                value={props.data.badgeText}
                onChange={(e) => handleInputChange(e, "badgeText")}
              />
            </div>
          )}
      </div> */}
    </>
  );
};

export default General;
