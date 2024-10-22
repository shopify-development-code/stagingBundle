import { useState, useEffect } from "react";
import { Button, Icon } from "@shopify/polaris";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Modal, Popconfirm } from "antd";
import { Fullscreen } from "@shopify/app-bridge/actions";
import { useAppBridge } from "@shopify/app-bridge-react";

const MoveToHomePage = (props) => {
  const [isModalOpen,setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const openModalFun = () =>{
    setIsModalOpen(true);
  }
  return (
    <div className="sd-bundle-MoveToHome-section">
      <div className="sd-bundle-MoveToHome-arrow">
        {/* <Popconfirm
    title="Discard Bundle"
    onConfirm={() => navigate("/")}
    description="Are you sure to discard this bundle?"
    okText="Yes"
    cancelText="No"
  > */}
        <Button onClick={openModalFun}>
          <ArrowLeftOutlined />
        </Button>
        {/* </Popconfirm> */}
      </div>
      <div className="sd-bundle-commonHeading">{props.data}</div>
      <Modal
        title="Going Back?"
        open={isModalOpen}
        onOk={() => navigate(`/bundle`)}
        onCancel={() => setIsModalOpen(false)}
      >
        <h1>
          Are you sure you want to go back? All unsaved changes will be lost.
        </h1>
      </Modal>
    </div>
  );
};

export default MoveToHomePage;
