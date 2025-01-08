import React ,{useState} from 'react';
import { Modal,TitleBar } from '@shopify/app-bridge-react';
import { useNavigate } from 'react-router-dom';
import { useAppBridge } from '@shopify/app-bridge-react';
import BundleCustomization from './bundleCustomization';
const CustomizationModal = () => {
  const navigate = useNavigate();
  const app=useAppBridge();
  const[isModalOpen,setisModalOpen]=useState(true);


const handlleCloseModal=()=>{
  setisModalOpen(false);
}

  return (
<>
      <Modal 
       variant='max'
       open={isModalOpen}
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
