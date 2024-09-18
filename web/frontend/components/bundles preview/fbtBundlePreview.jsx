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

    setFinalPriceForAllProductsType(finalPrice);
    return finalPrice;
  }
  // console.log("hello check final price****", dummyPricesForAllProductsType);
  return (
    <>
      {designOption == "modern" ? (
        <div className="sd-bundle-bundleSection-common">
          <div className="sd-bundle-bundleSection-heading-common">
            Modern Preview
          </div>
          {allProducts.length > 0 &&
          data.bundleDetail.discountedProductType == "specific_product" ? (
            <div className="sd-bundle-main-column">
              <div className="sd-bundle-text-detail">
                <h4>{data?.title}</h4>
                <p>{data?.description}</p>
              </div>

              {allProducts.map((item, index) => (
                <Fragment key={index}>
                  <div className="sd-bundle-product-detail">
                    <div className="sd-bundle-product-inner">
                      <div className="checkbox-wrapper-18">
                        <div className="round">
                          <input type="checkbox" id="checkbox-18" checked />
                          <label for="checkbox-18"></label>
                        </div>
                      </div>
                      <div className="sd-bundle-product-img">
                        <img
                          src={
                            item?.images?.length > 0
                              ? item?.images[0]?.originalSrc
                              : pic
                          }
                          width="80"
                          height="80"
                        />
                      </div>
                      <div className="sd-bundle-product-name">
                        <h5>{item.title}</h5>
                        <h4>
                          {showAmountWithCurrency(
                            item.variants[0]?.price,
                            currency
                          )}
                        </h4>
                        <select disabled>
                          <option>Medium</option>
                          <option>Small</option>
                        </select>
                      </div>
                    </div>
                    <div className="sd-bundle-product-quantity">
                      <h6>
                        Qty: <span>1</span>
                      </h6>
                    </div>
                  </div>
                  {allProducts.indexOf(item) != allProducts.length - 1 ? (
                    <div className="sd-add-bundle">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
                          fill="#5F5F5F"
                        />
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </Fragment>
              ))}

              <div className="sd-product-bundle-total">
                <div className="sd-total-desc">
                  <h4>Total</h4>
                  <p>Discount will be applied at checkout</p>
                </div>
                <div className="sd-total-amount">
                  <h4>{showAmountWithCurrency(endPrice, currency)} </h4>
                  {(data.bundleDetail.discountType == "percent" ||
                    data.bundleDetail.discountType == "fixed") && (
                    <h6>{showAmountWithCurrency(mrp, currency)}</h6>
                  )}
                </div>
              </div>
              {data.bundleDetail.discountType == "freeShipping" ? (
                <div className="sd-bundle-freeShipping">
                  <div className="sd-bundle-freeShipping-icon">
                    <ShoppingCartOutlined />
                  </div>

                  <div className="sd-bundle-freeShipping-text">
                    Get Free Shipping
                  </div>
                </div>
              ) : (
                " "
              )}
              <div className="sd-bundle-addto-cart">
                <button>Add to Cart</button>
              </div>
            </div>
          ) : allProducts.length == 0 &&
            data.bundleDetail.discountedProductType == "specific_product" ? (
            <EmptyPreview type={""} />
          ) : (
            <div className="sd-bundle-main-column">
              <div className="sd-bundle-text-detail">
                <h4>{data?.title}</h4>
                <p>{data?.description}</p>
              </div>
              {dummyPricesForAllProductsType.map((element, index) => (
                <Fragment key={index}>
                  <div className="sd-bundle-product-detail">
                    <div className="sd-bundle-product-inner">
                      <div className="checkbox-wrapper-18">
                        <div className="round">
                          <input type="checkbox" id="checkbox-18" checked />
                          <label for="checkbox-18"></label>
                        </div>
                      </div>
                      <div className="sd-bundle-product-img">
                        <img src={pic} width="80" height="80" />
                      </div>
                      <div className="sd-bundle-product-name">
                        <h5>
                          {index == 0
                            ? "Main Product"
                            : `Offered Product ${index}`}
                        </h5>
                        <h4>
                          {showAmountWithCurrency(
                            dummyPricesForAllProductsType[index],
                            currency
                          )}
                        </h4>
                        <select disabled>
                          <option>Medium</option>
                          <option>Small</option>
                        </select>
                      </div>
                    </div>
                    <div className="sd-bundle-product-quantity">
                      <h6>
                        Qty: <span>1</span>
                      </h6>
                    </div>
                  </div>
                  {index != dummyPricesForAllProductsType.length - 1 ? (
                    <div className="sd-add-bundle">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
                          fill="#5F5F5F"
                        />
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </Fragment>
              ))}

              <div className="sd-product-bundle-total">
                <div className="sd-total-desc">
                  <h4>Total</h4>
                  <p>Discount will be applied at checkout</p>
                </div>
                <div className="sd-total-amount">
                  <h4>
                    {" "}
                    {showAmountWithCurrency(
                      finalPriceForAllProductsType,
                      currency
                    )}
                  </h4>
                  {(data.bundleDetail.discountType == "percent" ||
                    data.bundleDetail.discountType == "fixed") && (
                    <h6>
                      {showAmountWithCurrency(mrpForAllProductsType, currency)}
                    </h6>
                  )}
                </div>
              </div>
              {data.bundleDetail.discountType == "freeShipping" ? (
                <div className="sd-bundle-freeShipping">
                  <div className="sd-bundle-freeShipping-icon">
                    <ShoppingCartOutlined />
                  </div>

                  <div className="sd-bundle-freeShipping-text">
                    Get Free Shipping
                  </div>
                </div>
              ) : (
                " "
              )}
              <div className="sd-bundle-addto-cart">
                <button>Add to Cart</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="sd-bundle-bundleSection-common">
          <div className="sd-bundle-bundleSection-heading-common">
            Classic Preview
          </div>
          {allProducts.length > 0 &&
          data.bundleDetail.discountedProductType == "specific_product" ? (
            <div className="sd-bundle-main-column">
              <div className="sd-bundle-text-detail">
                <h4>{data?.title}</h4>
                <p>{data?.description}</p>
                <div className="sd-show-selected-product-item">
                  {allProducts?.length > 0 &&
                    allProducts?.map((item, index) => {
                      return (
                        <Fragment key={index}>
                          <div className="sd-selected-product-itemImg">
                            <img
                              src={
                                item?.images[0]?.originalSrc
                                  ? item?.images[0]?.originalSrc
                                  : pic
                              }
                              alt=""
                            />
                          </div>
                          {index !== allProducts?.length - 1 && (
                            <div className="plus-selectedIcon">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
                                  fill="#5F5F5F"
                                />
                              </svg>
                            </div>
                          )}
                        </Fragment>
                      );
                    })}
                </div>
              </div>

              {allProducts.map((item, index) => (
                <Fragment key={index}>
                  <div className="sd-bundle-product-detail">
                    <div className="sd-bundle-product-inner">
                      <div className="checkbox-wrapper-18">
                        <div className="round">
                          <input type="checkbox" id="checkbox-18" checked />
                          <label for="checkbox-18"></label>
                        </div>
                      </div>
                      <div className="sd-bundle-product-name">
                        <h5>{item.title}</h5>
                        <h4>
                          {showAmountWithCurrency(
                            item.variants[0]?.price,
                            currency
                          )}
                        </h4>
                        <select disabled>
                          <option>Medium</option>
                          <option>Small</option>
                        </select>
                      </div>
                    </div>
                    <div className="sd-bundle-product-quantity">
                      <h6>
                        Qty: <span>1</span>
                      </h6>
                    </div>
                  </div>
                  {allProducts.indexOf(item) != allProducts.length - 1 ? (
                    <div className="sd-add-bundle">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
                          fill="#5F5F5F"
                        />
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </Fragment>
              ))}

              <div className="sd-product-bundle-total">
                <div className="sd-total-desc">
                  <h4>Total</h4>
                  <p>Discount will be applied at checkout</p>
                </div>
                <div className="sd-total-amount">
                  <h4>{showAmountWithCurrency(endPrice, currency)} </h4>
                  {(data.bundleDetail.discountType == "percent" ||
                    data.bundleDetail.discountType == "fixed") && (
                    <h6>{showAmountWithCurrency(mrp, currency)}</h6>
                  )}
                </div>
              </div>
              {data.bundleDetail.discountType == "freeShipping" ? (
                <div className="sd-bundle-freeShipping">
                  <div className="sd-bundle-freeShipping-icon">
                    <ShoppingCartOutlined />
                  </div>

                  <div className="sd-bundle-freeShipping-text">
                    Get Free Shipping
                  </div>
                </div>
              ) : (
                " "
              )}
              <div className="sd-bundle-addto-cart">
                <button>Add to Cart</button>
              </div>
            </div>
          ) : allProducts.length == 0 &&
            data.bundleDetail.discountedProductType == "specific_product" ? (
            <EmptyPreview type={""} />
          ) : (
            <div className="sd-bundle-main-column">
              <div className="sd-bundle-text-detail">
                <h4>{data?.title}</h4>
                <p>{data?.description}</p>
                <div className="sd-show-selected-product-item">
                  {dummyPricesForAllProductsType?.length > 0 &&
                    dummyPricesForAllProductsType?.map((item, index) => {
                      return (
                        <Fragment key={index}>
                          <div className="sd-selected-product-itemImg">
                            <img src={pic} width="80" height="80" />
                          </div>
                          {index !== dummyPricesForAllProductsType?.length - 1 && (
                            <div className="plus-selectedIcon">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
                                  fill="#5F5F5F"
                                />
                              </svg>
                            </div>
                          )}
                        </Fragment>
                      );
                    })}
                </div>
              </div>

              {dummyPricesForAllProductsType.map((item, index) => (
                <Fragment key={index}>
                  <div className="sd-bundle-product-detail">
                    <div className="sd-bundle-product-inner">
                      <div className="checkbox-wrapper-18">
                        <div className="round">
                          <input type="checkbox" id="checkbox-18" checked />
                          <label for="checkbox-18"></label>
                        </div>
                      </div>
                      <div className="sd-bundle-product-name">
                        <h5>
                          {index == 0
                            ? "Main Product"
                            : `Offered Product ${index}`}
                        </h5>
                        <h4>
                          {showAmountWithCurrency(
                            dummyPricesForAllProductsType[index],
                            currency
                          )}
                        </h4>
                        <select disabled>
                          <option>Medium</option>
                          <option>Small</option>
                        </select>
                      </div>
                    </div>
                    <div className="sd-bundle-product-quantity">
                      <h6>
                        Qty: <span>1</span>
                      </h6>
                    </div>
                  </div>
                  {index != dummyPricesForAllProductsType.length - 1 ? (
                    <div className="sd-add-bundle">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.98047 17.3842V0.580255H10.3239V17.3842H6.98047ZM0.256392 10.6477V7.30433H17.0604V10.6477H0.256392Z"
                          fill="#5F5F5F"
                        />
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </Fragment>
              ))}

              <div className="sd-product-bundle-total">
                <div className="sd-total-desc">
                  <h4>Total</h4>
                  <p>Discount will be applied at checkout</p>
                </div>
                <div className="sd-total-amount">
                  <h4>
                    {" "}
                    {showAmountWithCurrency(
                      finalPriceForAllProductsType,
                      currency
                    )}
                  </h4>
                  {(data.bundleDetail.discountType == "percent" ||
                    data.bundleDetail.discountType == "fixed") && (
                    <h6>
                      {showAmountWithCurrency(mrpForAllProductsType, currency)}
                    </h6>
                  )}
                </div>
              </div>
              {data.bundleDetail.discountType == "freeShipping" ? (
                <div className="sd-bundle-freeShipping">
                  <div className="sd-bundle-freeShipping-icon">
                    <ShoppingCartOutlined />
                  </div>

                  <div className="sd-bundle-freeShipping-text">
                    Get Free Shipping
                  </div>
                </div>
              ) : (
                " "
              )}
              <div className="sd-bundle-addto-cart">
                <button>Add to Cart</button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FBTBundlePreview;
