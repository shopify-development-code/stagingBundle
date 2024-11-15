import postApi from "./postApi";
import toastNotification from "./commonSections/Toast";
import { Banner, List } from "@shopify/polaris";

export async function handleEditFurther(
  id,
  setPid,
  setAntModal,
  setLoader,
  products,
  setCheckedIds,
  setVariantData,
  app,
  modalId,
  Shopify
) {
  // let EditVariant = document.getElementById(`${modalId}`).show();
  // console.log("Show Edit Variant");
  shopify.modal.show(`${modalId}`);
  
  setPid(id);
  // setAntModal(true);
  setLoader(true);

  let update = products
    ?.find((ele) => ele.id == id)
    ?.variants.map((e) => {
      return e.id;
    });

  setCheckedIds(update);

  let finalData = await getVariants(id, app);

  if (finalData?.data?.status == 200) {
    setVariantData(finalData.data.data);
    setLoader(false);
  } else if (
    finalData.message == "fail" ||
    finalData?.data?.data?.status == 502
  ) {
    setPid("");
    setLoader(false);
    setAntModal(false);

    toastNotification(
      "info",
      "Something Went Wrong , Please Try Again !!",
      "bottom"
    );
  }
};
export const AlertBanner = ({ showBanner, alertText ,setShowBanner}) => {
  return (
    <div>
      {showBanner == true && (
        <Banner title="Something is missing." tone="warning" onDismiss={() => setShowBanner(false)}>
        <List>
          {alertText.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </Banner>      
      )}
    </div>
  );
};
async function getVariants(id, app) {
  try {
    const data = await postApi("/api/admin/fetchVariants", { p_id: id }, app);
    // console.log("We get data from fetch variant",data);
    return { message: "success", data: data };
  } catch (err) {
    return { message: "fail", data: "" };
  }
};
export function alertCommon(setAlert, message, status, returnBool) {
  setAlert({ state: true, message: message, status: status });
  window.scrollTo(0, 0);
  return returnBool;
};
export const handleChangeCommon = (
  e,
  key1,
  key2,
  data,
  setData,
  bundleOption,
  type
) => {
  // console.log("datatatatatatata", e, bundleOption, type);

  const valueToSet = type !== "alignment" ? e.target.value : e;

  setData((prevData) => ({
    ...prevData,
    [bundleOption]: {
      ...prevData[bundleOption],
      [key1]: {
        ...prevData[bundleOption]?.[key1],
        [key2]: valueToSet,
      },
    },
  }));
};
export const handleChangeValueCommon = (
  newvalue,
  key1,
  key2,
  data,
  setData,
  bundleOption
) => {
  const valueToSet =
    newvalue === "" || newvalue < 0 ? 1 : String(newvalue).replace(/^0/, "1");

  setData((prevData) => ({
    ...prevData,
    [bundleOption]: {
      ...prevData[bundleOption],
      [key1]: {
        ...prevData[bundleOption]?.[key1],
        [key2]: valueToSet,
      },
    },
  }));
};
export const handleChangeCommon2 = (
  e,
  key1,
  key2,
  key3,
  data,
  setData,
  bundleOption
) => {
  // console.log("f ewew f", e);

  const newValue = e.target.value;

  setData((prevData) => ({
    ...prevData,
    [bundleOption]: {
      ...prevData[bundleOption],
      [key1]: {
        ...prevData[bundleOption]?.[key1],
        [key2]: {
          ...prevData[bundleOption]?.[key1]?.[key2],
          [key3]: newValue,
        },
      },
    },
  }));
};
export const handleChangeValueCommon2 = (
  newvalue,
  key1,
  key2,
  key3,
  data,
  setData,
  bundleOption
) => {
  if (newvalue === "" || newvalue < 0) {
    setData((prevData) => ({
      ...prevData,
      [bundleOption]: {
        ...prevData[bundleOption],
        [key1]: {
          ...prevData[bundleOption]?.[key1],
          [key2]: {
            ...prevData[bundleOption]?.[key1]?.[key2],
            [key3]: 0,
          },
        },
      },
    }));
  } else {
    // console.log("testestestest.....................", key1, key2, key3, data);
    newvalue = String(newvalue).replace(/^0/, "");
    setData((prevData) => ({
      ...prevData,
      [bundleOption]: {
        ...prevData[bundleOption],
        [key1]: {
          ...prevData[bundleOption]?.[key1],
          [key2]: {
            ...prevData[bundleOption]?.[key1]?.[key2],
            [key3]: newvalue,
          },
        },
      },
    }));
  }
};
