import React from "react";
import { ButtonGroup, Button, Page, Collapsible } from "@shopify/polaris";
import { useParams, useNavigate } from "react-router-dom";
import postApi from "../postApi";
import { useAppBridge } from "@shopify/app-bridge-react";
import toastNotification from "./Toast";
import { Popconfirm } from "antd";
const DeleteSave = (props) => {
  const app = useAppBridge();
  const param = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    let body = {
      id: param.id,
    };
    const response = await postApi("/api/admin/deleteBundle", body, app);
    if (response.data.status == 200) {
      navigate("/bundle");
      toastNotification("success", "Deleted", "bottom");
    } else {
      toastNotification(
        "error ",
        "something went wrong! please try again",
        "bottom"
      );
    }
  };
  return (
    // <Page
    //     title={props.headre}
    //     primaryAction={
    //       <Button onClick={handleSave} variant="primary">
    //         Save
    //       </Button>
    //     }
    //     secondaryActions={
    //       param.id !== "create" && (
    //         <>
    //           <Button
    //             onClick={() => {
    //               setToggle(!toggle);
    //             }}
    //             variant="primary"
    //             tone="critical"
    //           >
    //             Delete
    //           </Button>
    //           {/* <Popover autofocusTarget="first-node" active={toggle} activator={toggle}><Button>No</Button><Button>Yes</Button></Popover> */}
    //           {/* <Collapsible open={toggle} transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
    //         expandOnPrint>Test</Collapsible> */}
    //         </>
    //       )
    //     }
    //     backAction={{ onAction: () => shopify.modal.show("my-modal") }}
    //   >
      <div className="sd-bundle-createBundle-delete-save">
        <ButtonGroup>
          {param.id !== "create" ? (
            <Popconfirm
              title="Delete the bundle"
              description="Are you sure to delete this bundle?"
              onConfirm={handleDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button destructive onC>
                Delete
              </Button>
            </Popconfirm>
          ) : (
            ""
          )}
          <Button primary onClick={props.handleSave}>
            Save
          </Button>
        </ButtonGroup>
      </div>
    // </Page>
  );
};

export default DeleteSave;
