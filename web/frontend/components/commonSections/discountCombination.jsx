import { Checkbox } from "antd";

const DiscountCombination = ({discountCombination,handleDiscountCombination}) => {
  const options = [
    { value: "productDiscounts", label: "Product Discounts" },
    { value: "orderDiscounts", label: "Order Discounts" },
    { value: "shippingDiscounts", label: "Shipping Discounts" },
  ];

  const handleChange = (value, checked) => {
    if (checked) {
      handleDiscountCombination([...discountCombination, value]);
    } else {
      handleDiscountCombination(
        discountCombination.filter((item) => item !== value)
      );
    }
  };

  return (
    <div className="sd-bundle-bundleSection-common sd-bundle-discounCombinationtSection">
      <div className="sd-bundle-bundleSection-heading-common">
        Discount Combination
      </div>

      <p className="sd-bundle-plainText-common">
        Select the discount categories that can be combined with this bundle discount.
      </p>

      <div className="sd-bundle-discountcombination-selection">
        <Checkbox.Group value={discountCombination}   >
          {options.map(({ value, label },index) => (
            <div key={index}>
            <Checkbox
              key={value}
              value={value}
              onChange={(e) => handleChange(value, e.target.checked)}
            >
              {label}
            </Checkbox></div>
          ))}
        </Checkbox.Group>
      </div>
    </div>
  );
};

export default DiscountCombination;
