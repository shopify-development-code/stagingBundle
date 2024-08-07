import { Button, Checkbox } from "antd";
import pic from "../../assets/image2.png";
import { PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { Fragment, useEffect, useState } from "react";
import { showAmountWithCurrency } from "../showCurrencyFormat";
import EmptyPreview from "../commonSections/emptyPreview";
const FBTBundlePreview = ({ data, customizeData, mrp, endPrice, currency }) => {
  let [allProducts, setAllProducts] = useState([]);
  let [mrpForAllProductsType, setMrpForAllProductsType] = useState(0);
  let [finalPriceForAllProductsType, setFinalPriceForAllProductsType] =
    useState(0);

  let dummyPricesForAllProductsType = [500, 100, 100, 100];
  let designOption = customizeData.design;

  useEffect(() => {
    setAllProducts([
      ...data.bundleDetail.mainProducts,
      ...data.bundleDetail.offeredProducts,
    ]);
    if (data.bundleDetail.discountedProductType == "all_products") {
      let mrp = calculateMrpForAllProductsType();
      calculateFinalPriceForAllProductsType(mrp);
    }
  }, [data]);
  
  const calculateMrpForAllProductsType = () => {
    let sum = 0;
    dummyPricesForAllProductsType.forEach((item) => {
      sum += item;
    });
    setMrpForAllProductsType(sum);
    return sum;
  };

  function calculateFinalPriceForAllProductsType(mrp) {
    let finalPrice = 0;

    if (data.bundleDetail.discountType == "percent") {
      if (data.bundleDetail.discountValue > 100) {
        finalPrice = 0;
      } else {
        finalPrice = mrp - mrp * (data.bundleDetail.discountValue / 100);
      }
    } else if (data.bundleDetail.discountType == "fixed") {
      if (parseFloat(data.bundleDetail.discountValue) > mrp) {
        finalPrice = 0;
      } else {
        finalPrice = mrp - data.bundleDetail.discountValue;
      }
    } else if (data.bundleDetail.discountType == "price") {
      if (data.bundleDetail.discountValue > mrp) {
        finalPrice = mrp;
      } else {
        finalPrice = data.bundleDetail.discountValue;
      }
    } else if (
      data.bundleDetail.discountType == "freeShipping" ||
      data.bundleDetail.discountType == "noDiscount"
    ) {
      finalPrice = mrp;
    }

    // console.log('hello check final price****',finalPrice);
    setFinalPriceForAllProductsType(finalPrice);
    return finalPrice;
  }

  return (
    <>
      {designOption == "modern" ? (
        <div className="sd-bundle-bundleSection-common">
          <div className="sd-bundle-bundleSection-heading-common">
            Preview Modern
          </div>
          {allProducts.length > 0 &&
          data.bundleDetail.discountedProductType == "specific_product" ? (
            <div className="sd-preview-wrapper-common sd-productCustom-preview fbt-customization-specific">
              <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                {data?.title}
              </p>
              <div>
                <div className="fbt-customization-modern-items-container">
                  {allProducts.map((item, index) => (
                    <Fragment key={index}>
                      <div className="design designChildDiv sd-productCustom-previewBottom" >
                        <div className="designChildDiv">
                          <input type="checkbox" checked readOnly />
                        </div>
                        <div className="designChildDiv sd_bundle_thumbnailImg">
                          <img
                            src={
                              item?.images?.length > 0
                                ? item?.images[0]?.originalSrc
                                : pic
                            }
                            width={50}
                          />
                        </div>
                        <div>
                          <p>{item.title}</p>
                          <p>
                            {showAmountWithCurrency(
                              item.variants[0]?.price,
                              currency
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="sd_selectd_vertical">
                        <select disabled>
                          <option>Select Variant</option>
                        </select>
                      </div>
                    </Fragment>
                  ))}
                </div>
                {data.bundleDetail.discountType === "freeShipping" ||
                data.bundleDetail.discountType === "noDiscount" ? (
                  <div className="designChildDiv">
                    <div className="fbt-bundle-total-common">
                      <div>Total</div>
                      <div className="fbt-bundle-customization-total-common">
                        {" "}
                        <span>
                          {showAmountWithCurrency(endPrice, currency)}{" "}
                        </span>{" "}
                      </div>
                    </div>
                    <Button className="sd_inputButton fbt-addto-cart-button">
                      Add selected to cart
                    </Button>
                  </div>
                ) : (
                  <div className="designChildDiv">
                    <div className="fbt-bundle-total-common">
                      <div>Total</div>
                      <div className="fbt-bundle-customization-total-common">
                        {" "}
                        <del>{showAmountWithCurrency(mrp, currency)}</del>{" "}
                        <span>
                          {showAmountWithCurrency(endPrice, currency)}{" "}
                        </span>{" "}
                      </div>
                    </div>
                    <Button className="sd_inputButton fbt-addto-cart-button">
                      Add selected to cart
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ) : // <div>
          //   <h4>Please select product</h4>
          // </div>
          allProducts.length == 0 &&
            data.bundleDetail.discountedProductType == "specific_product" ? (
            <EmptyPreview type={""} />
          ) : data.bundleDetail.discountedProductType == "all_products" ? (
            <div>
              <div className="sd-preview-wrapper-common sd-productCustom-preview fbt-customization-specific">
                <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                  {data?.title}
                </p>
                <div>
                  <div className="fbt-customization-modern-items-container">
                    {dummyPricesForAllProductsType.map((element, index) => (
                      <Fragment key={index}>
                        <div className="design designChildDiv sd-productCustom-previewBottom">
                          <div className="designChildDiv">
                            <input type="checkbox" checked readOnly />
                          </div>
                          <div className="designChildDiv sd_bundle_thumbnailImg">
                            <img src={pic} width={95} />
                          </div>
                          <div>
                            {index == 0 ? (
                              <p>Main Product</p>
                            ) : (
                              <p>Offered Product {index}</p>
                            )}
                            <p>
                              {showAmountWithCurrency(
                                dummyPricesForAllProductsType[index],
                                currency
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="sd_selectd_vertical">
                          <select disabled>
                            <option>Select Variant</option>
                          </select>
                        </div>
                      </Fragment>
                    ))}

            
                  </div>
                  {data.bundleDetail.discountType === "freeShipping" ||
                  data.bundleDetail.discountType === "noDiscount" ? (
                    <div className="designChildDiv">
                      <div className="fbt-bundle-total-common">
                        <div>Total</div>
                        <div className="fbt-bundle-customization-total-common">
                          <span>
                            {showAmountWithCurrency(
                              mrpForAllProductsType,
                              currency
                            )}
                          </span>{" "}
                        </div>
                      </div>
                      <Button className="sd_inputButton fbt-addto-cart-button">
                        Add selected to cart
                      </Button>
                    </div>
                  ) : (
                    <div className="designChildDiv">
                      <div className="fbt-bundle-total-common">
                        <div>Total</div>
                        <div className="fbt-bundle-customization-total-common">
                          {" "}
                          <del>
                            {showAmountWithCurrency(
                              mrpForAllProductsType,
                              currency
                            )}
                          </del>{" "}
                          <span>
                            {showAmountWithCurrency(
                              finalPriceForAllProductsType,
                              currency
                            )}
                          </span>{" "}
                        </div>
                      </div>
                      <Button className="sd_inputButton fbt-addto-cart-button">
                        Add selected to cart
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="sd-bundle-bundleSection-common">
          <div className="sd-bundle-bundleSection-heading-common">
            Preview classic
          </div>
          {allProducts.length > 0 &&
          data.bundleDetail.discountedProductType == "specific_product" ? (
            <div className="sd-preview-wrapper-common sd-productCustom-preview fbt-customization-specific">
              <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                {data.title}
              </p>
              <div className="designClassic">
                {allProducts.map((item, index) => (
                  <Fragment key={index}>
                    <div className="designChildDiv sd_bundle_thumbnailImg">
                      <img
                        src={
                          item?.images?.length > 0
                            ? item?.images[0]?.originalSrc
                            : pic
                        }
                        width={50}
                        height={50}
                      />
                    </div>
                    {index !== allProducts.length - 1 ? (
                      <div className="iconDesign">
                        <PlusOutlined />
                      </div>
                    ) : null}
                  </Fragment>
                ))}
              </div>

              <div className="sd-preview-wrapper-common sd-productBundle-preview-specific">
                {allProducts.map((item, index) => (
                  <div className="customization-fbt-classic-item-container" key={index}>
                    <div className="customization-fbt-classic-item">
                      <div>
                        <input type="checkbox" checked readOnly />
                      </div>
                      <div className="customization-fbt-classic-item-titlePrice">
                        <p>{item.title}</p>
                        <p>
                          {showAmountWithCurrency(
                            item.variants[0]?.price,
                            currency
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="sd_selectd_vertical">
                      <select disabled>
                        <option>Select Variant</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              {data.bundleDetail.discountType === "freeShipping" ||
              data.bundleDetail.discountType === "noDiscount" ? (
                <div className="designChildDiv">
                  <div className="fbt-bundle-total-common">
                    <div>Total</div>
                    <div className="fbt-bundle-customization-total-common">
                      {" "}
                      <span>
                        {showAmountWithCurrency(endPrice, currency)}{" "}
                      </span>{" "}
                    </div>
                  </div>
                  <Button className="sd_inputButton fbt-addto-cart-button">
                    Add selected to cart
                  </Button>
                </div>
              ) : (
                <div className="designChildDiv">
                  <div className="fbt-bundle-total-common">
                    <div>Total</div>
                    <div className="fbt-bundle-customization-total-common">
                      {" "}
                      <del>{showAmountWithCurrency(mrp, currency)}</del>{" "}
                      <span>{showAmountWithCurrency(endPrice, currency)} </span>{" "}
                    </div>
                  </div>
                  <Button className="sd_inputButton fbt-addto-cart-button">
                    Add selected to cart
                  </Button>
                </div>
              )}
            </div>
          ) : allProducts.length == 0 &&
            data.bundleDetail.discountedProductType == "specific_product" ? (
            <EmptyPreview type={""} />
          ) : data.bundleDetail.discountedProductType == "all_products" ? (
            <div className="sd-preview-wrapper-common sd-productCustom-preview fbt-customization-specific">
              <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                {data?.title}
              </p>
              <div className="design">
                {dummyPricesForAllProductsType.map((element, index) => (
                  <Fragment key={index}>
                    <div className="designChildDiv sd_bundle_thumbnailImg">
                      <img src={pic} />
                    </div>
                    {index != dummyPricesForAllProductsType.length - 1 && (
                      <div className="iconDesign">
                        <PlusOutlined />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>

              <div className="sd-preview-wrapper-common sd-productBundle-preview-specific">
                {dummyPricesForAllProductsType.map((element, index) => (
                  <div className="customization-fbt-classic-item-container" key={index}>
                    <div className="customization-fbt-classic-item">
                      <div>
                        <input type="checkbox" checked readOnly />
                      </div>
                      <div className="customization-fbt-classic-item-titlePrice">
                        {index == 0 ? (
                          <p>Main Product</p>
                        ) : (
                          <p>Offered Product {index}</p>
                        )}
                        <p>
                          {showAmountWithCurrency(
                            dummyPricesForAllProductsType[index],
                            currency
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="sd_selectd_vertical">
                      <select disabled>
                        <option>Select Variant</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>

              {data.bundleDetail.discountType === "freeShipping" ||
              data.bundleDetail.discountType === "noDiscount" ? (
                <div className="designChildDiv">
                  <div className="fbt-bundle-total-common">
                    <div>Total</div>
                    <div className="fbt-bundle-customization-total-common">
                      <span>
                        {showAmountWithCurrency(
                          mrpForAllProductsType,
                          currency
                        )}
                      </span>{" "}
                    </div>
                  </div>
                  <Button className="sd_inputButton fbt-addto-cart-button">
                    Add selected to cart
                  </Button>
                </div>
              ) : (
                <div className="designChildDiv">
                  <div className="fbt-bundle-total-common">
                    <div>Total</div>
                    <div className="fbt-bundle-customization-total-common">
                      {" "}
                      <del>
                        {showAmountWithCurrency(
                          mrpForAllProductsType,
                          currency
                        )}
                      </del>{" "}
                      <span>
                        {showAmountWithCurrency(
                          finalPriceForAllProductsType,
                          currency
                        )}
                      </span>{" "}
                    </div>
                  </div>
                  <Button className="sd_inputButton fbt-addto-cart-button">
                    Add selected to cart
                  </Button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default FBTBundlePreview;
