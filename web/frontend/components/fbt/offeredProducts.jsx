import {useState,useEffect} from 'react'
import { Modal } from "antd";
import FBTResourcePicker from './FBTResourcePicker';
import FBTProductVariantData from './FBTproductVariantData';
import FBTOfferedProductPickerData from './offeredProductPickerData';

const OfferedProducts = (props) => {
    const [myModal, setMyModal] = useState(false);
    const [searchValue, setSearchValue] = useState("");
  const [pid, setPid] = useState("");
  const [antModal, setAntModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]);
  const [variantData, setVariantData] = useState([]);
  const [xPickerError, setXpickerError] = useState([]);
  const [errorArray, setErrorArray] = useState([]);
  const [disable,setDisable] = useState(true);

  useEffect(()=>{
    handleDisable();
  },[props.mainProductsLength]);
  
  useEffect(()=>{
    if(props.data.bundleDetail.offeredProducts.length >=3){
     
     setDisable(true)

    }
    
 
  },[props.data.bundleDetail.offeredProducts]);
  
    
    const handleSearchInput = (e) => {
        const { value } = e.target;
        if (value) {
          setMyModal(true);
          setSearchValue(value);
        } else {
          setSearchValue("");
        }
      };
      const handleBrowseProducts = async () => {
        setMyModal(true);
      };
      const temp = {
        setPid,
        setAntModal,
        setLoader,
        setCheckedIds,
        setVariantData,
      };
      const removeProductFromList = (item, index) => {
      
        let update = [...props.data.bundleDetail.offeredProducts];
        update.splice(update.indexOf(item), 1);  
            props.setData({
            ...props.data,
            bundleDetail: {
              ...props.data.bundleDetail,
              offeredProducts: update,             
            },
          });    
          
          // handling browse button
 
  if(update.length < 3){
setDisable(false)
  }
      };
      
      const setOk = () => {
        let getData = variantData.data.filter(
          (item) => checkedIds.indexOf(item.id) != -1
        );
        if (checkedIds.length > 0) {
          let update = [...props.data.bundleDetail.offeredProducts];
          let update2 = update.map((item) => {
            if (item.id == pid) {
              item.variants = getData;
            }
            return item;
          });
          props.setData({
            ...props.data,
            bundleDetail: {
              ...props.data.bundleDetail,
              offeredProducts: update2,
            },
          });
          setCheckedIds([]);
          setVariantData([]);
          setPid("");
          let copy = [...errorArray];
          copy.splice(copy.indexOf("uncheckedVariantModal"), 1);
          setErrorArray(copy);
    
          setAntModal(false);
        } else if (checkedIds.length == 0) {
          setErrorArray([...errorArray, "uncheckedVariantModal"]);    
          return false;
        }
      };

      const handleDisable = () =>{
        if(props.mainProductsLength>0){
            setDisable(false);
        }else{
          setDisable(true);
        }
      }
    

      const setCancel = () => {
        setVariantData([]);
        setCheckedIds([]);
        setPid("");
        let copy = [...errorArray];
        copy.splice(copy.indexOf("uncheckedVariantModal"), 1);
        setErrorArray(copy);
        setAntModal(false);
      };
  return (
    <div className="sd-bundle-bundleSection-common sd-bundle-productBundleSearchSection">
        <div className="sd-bundle-bundleSection-heading-common">
        Offered Products
              </div>
              <div className="sd-bundle-plainText-common">
              Select the products that are frequently bought with the main product. (You can choose up to 3 products.)
              </div>
              <div className="sd-bundle-search">
                <input
                  type="text"
                  placeholder="search products"
                  onChange={handleSearchInput}
                  className="sd-bundle-search-box-common"
                  value={searchValue}
                  disabled={disable}
                />
                <button
                  type="button"
                  onClick={handleBrowseProducts}
                  className="sd-bundle-search-button-common"
                  disabled={disable}
                >
                  Browse
                </button>
              </div>

              <FBTOfferedProductPickerData
                page="fbtOfferedProducts"
                modalType=""
                data={props.data}
                setData={props.setData}
                temp={temp}
                errorArray={xPickerError}
                removeProductFromList={removeProductFromList}
              />
            
            {antModal && (
          <Modal
            title="Select Variant Options  for Bundle Modal"
            open={antModal}
            onOk={setOk}
            onCancel={setCancel}
            className="sd-bundle-modal sd-bundle-modal-variant"
            // width={1000}
          >
            <FBTProductVariantData
              checkedIds={checkedIds}
              setCheckedIds={setCheckedIds}
              variantData={variantData}
              loader={loader}
              errorArray={errorArray}         
            />
          </Modal>
        )}

            {myModal && (
              <FBTResourcePicker
                open={myModal}
                setOpen={setMyModal}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                page={"fbtOfferedProducts"}
                modalType="Product"
                setData={props.setData}
                data={props.data}       
                   
              />
            )}
           
    </div>
  )
}

export default OfferedProducts