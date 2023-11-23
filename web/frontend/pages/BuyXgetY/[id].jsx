import {useEffect,useState} from 'react'
import MoveToHomePage from '../../components/commonSections/MoveToHomePage';
import BuyY from '../../components/bxgy/buyY';
import BuyX from '../../components/bxgy/buyX';
import { useAPI } from '../../components/shop';
import defaultData from "../../components/customization/defaultData.json";
import DiscountSet from '../../components/bxgy/DiscountSet';
import General from '../../components/bxgy/General';
import DateTime from '../../components/commonSections/dateTime';
import BundleStatus from '../../components/commonSections/bundleStatus';
import DisplayOptions from '../../components/commonSections/displayOptions';
import DeleteSave from '../../components/commonSections/deleteSave';
import ProductBundlePreview from '../../components/preview/productBundlePreview';


const BuyXgetY = () => {
    let headerkey = "Create Buy X get Y"
  const { shop, timeZone, currencyCode } = useAPI();
  const [errorArray, setErrorArray] = useState([]);
  const [endPrice, setEndPrice] = useState(0);
  const [showPrice, setShowPrice] = useState({});
  const [mrp, setMrp] = useState(0);

    const [data,setData] = useState({
        shop: shop,
        type: "bxgy",
        name: "",
        title: "",
        status: "active",
        startdate: "",
        endDate: "",
        currencyCode: currencyCode,
        bundleDetail: {
          discountType: "percent",
          discountValue: 5,
          xproducts: [],
          yproducts: [],
          display: {
            productPages: true,
            popUp: false,
            bundle: false,
            productPagesList: [],
          },
        },
        customization: [defaultData] ,
        timeZone:timeZone
    })
    console.log("main",data)
  return (
    <div className="Polaris-Page Polaris-Page--fullWidth">
        <MoveToHomePage data={headerkey}/>
        <div className="sd-bundle-wrapper-common">
        <div className="sd-bundle-left-section-common">
            <BuyX data={data} setData={setData}/>
            <BuyY data={data} setData={setData}/>
            <DiscountSet data={data} setData={setData}/>
            <General data={data} setData={setData}/>
            <DateTime data={data} setData={setData} errorArray={errorArray} />
        </div>
        <div className="sd-bundle-productBundle-rightSection Polaris-Layout__Section Polaris-Layout__Section--secondary">
            <BundleStatus data={data} setData={setData} />
            <DisplayOptions
              bundleType="productBundle"
              display={data.bundleDetail.display}
              // handleDisplayOptions={handleDisplayOptions}
              displayPageOptions={data.bundleDetail.display.productPages}
              // handleDisplayPageOptions={handleDisplayPageOptions}
              products={data.bundleDetail.xproducts}
            />
             {/* <ProductBundlePreview
              data={data}
              currency={currencyCode}
              mrp={mrp}
              endPrice={endPrice}
              showPrice={showPrice}
              // handleVariantChoice={handleVariantChoice}
              bundleType={"productBundle"}
              errorArray={errorArray}
            /> */}
        </div>
        </div>
        <div className='sd-bundle-wrapper-common'>

        <DeleteSave 
        // handleSave={handleSave}
        />
        </div>
        </div>
  )
}

export default BuyXgetY ;