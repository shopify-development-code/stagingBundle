import React ,{useEffect,useState} from 'react';
import { Modal,TitleBar } from '@shopify/app-bridge-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppBridge } from '@shopify/app-bridge-react';
import BundleCustomization from './bundleCustomization';
const CustomizationModal = () => {
  const navigate = useNavigate();
  const app=useAppBridge();
    const params = useLocation();
  const[isModalOpen,setisModalOpen]=useState(true);
  useEffect(() => {
    if (params.pathname == "/customizationModal") {
      app.modal.hide("customization-modal");
      app.modal.show("customization-modal");
    }
  }, []);

const handlleCloseModal=()=>{
  setisModalOpen(false);
  app.modal.hide('customization-modal')
  // navigate('/customization')
 
}

  return (
<>
      <Modal 
      id="customization-modal"
       variant='max'
       open={isModalOpen}
        // src="/BundleCustomization"
        onHide={() => {
      navigate('/customization')
    }} 
    >
        <TitleBar title="LatestBundle">
        </TitleBar>
        <BundleCustomization  handlleCloseModal={handlleCloseModal}/>
      </Modal>
</>

  );
};

export default CustomizationModal;
