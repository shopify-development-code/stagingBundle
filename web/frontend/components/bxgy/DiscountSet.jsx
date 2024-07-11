import {useState} from 'react'
import { Select,InputNumber } from 'antd';
import { useAPI } from '../shop';
const DiscountSet = (props) => {
  const { shop, timeZone, currencyCode } = useAPI();
    function handleSelectDiscount(e){
      props.setData({
        ...props.data,
        bundleDetail: {
          ...props.data.bundleDetail,
          discountType: e,
        },
      });
    }

    function handleDiscountValue(e){
      props.setData({
        ...props.data,
        bundleDetail: {
          ...props.data.bundleDetail,
          discountValue: e,
        },
      });  
    }

    function handleValue(){
      props.setData({
        ...props.data,
        bundleDetail: {
          ...props.data.bundleDetail,
          discountValue: 100,
        },
      });
    }

  return (
    <div className="sd-bundle-bundleSection-common sd-bundle-productBundleSearchSection">
      <div className="sd-bundle-bundleSection-heading-common">
        Discount
      </div>
      <div className="sd-bundle-discount-value">
      <Select
        onChange={handleSelectDiscount}
        value={props.discountType}
        style={{
          width: 300,
        }}
        options={[
          {
            value: 'percent',
            label: 'Percentage discount',
          },
          {
            value: 'fixed',
            label: 'Fixed discount',
          },
          {
            value: 'free',
            label: 'Free gift',
          },
        
        ]}
      />
{
    props.discountType !== "free" ? <InputNumber min={1} max={props.discountType == "percent" && 100} onChange={handleDiscountValue} value={(props.discountType == "percent" && props.discountValue > 100)? handleValue() :props.discountValue} prefix={props.discountType == "fixed" ? currencyCode.replace(/{{.*?}}/g, "")  : null} suffix={ props.discountType == "percent" ? "%" : null}  />  : null 
}     
      </div>
    </div>
  )
}

export default DiscountSet