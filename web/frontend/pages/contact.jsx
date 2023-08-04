import React,{useState  } from 'react'
import {Icon,} from "@shopify/polaris";
import { ArrowLeftOutlined} from "@ant-design/icons";
import { useNavigate } from "@shopify/app-bridge-react";
import { useAppBridge } from "@shopify/app-bridge-react";
import postApi from '../components/postApi';
import {Button,  Card, Form, Input, notification  } from "antd";
import toastNotification from '../components/commonSections/Toast';

const Contact = () => {
  const navigate = useNavigate()
  const app = useAppBridge();
  const [form] = Form.useForm();

  const [sendBtn, setSendBtn] = useState("Send Mail");
  const [sending, setSending] = useState(false);
 async function handleSubmit(value){

  setSending(true);
  setSendBtn("Sending");
  const data = {
    uname: value.user.name,
    umail: value.user.email,
    message: value.user.message,
    storePassword: value.user.storePassword,
  };
const response = await postApi("/api/admin/contactUs",data,app)
if(response.status == 201){
  setSending(false);
  setSendBtn("Send Mail");
  form.resetFields();
  // notification.success({
  //   message: res.data.msg,
  //   duration: 2,
  //   placement: "bottom",
  // });
  toastNotification("success","successfully sent","bottom")
}else{
  setSending(false);
  toastNotification("success","something went wrong ! Please try again","bottom")

  setSendBtn("Send Mail");
}
  }
  return (
    <div className='sd-bundle-setting-translation'>
    <div className='sd-bundle-MoveToHome-section'>
       {/* <div className='sd-bundle-MoveToHome-arrow'>
       <Button 
        onClick={() => navigate("/")}>
       <ArrowLeftOutlined />
     </Button>
       </div> */}
       <div className="sd-bundle-commonHeading">Contact Us</div>
      
    </div>
   
    <div className='sd-bundle-contact-main-container'>
    <Card
        className="sd-bundle-contact-box"
        title="For any query mail us"
        headStyle={{ textAlign: "center" }}
      >
        <Form
          name="nest-messages"
          onFinish={handleSubmit}
          
          // validateMessages={validateMessages}
          layout="vertical"
          form={form}
        >
          <div className='sd-bundle-name-email'>
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="text" placeholder="Enter Your Name Here" />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input type="email" placeholder="Enter Your Email Address" />
          </Form.Item>
          </div>
          {/* <Form.Item
            name={["user", "store"]}
            label="Store URL"
            // initialValue={shop}
          >
            <Input type="text" disabled />
          </Form.Item> */}
           <div className='sd-bundle-password-message'>
          <Form.Item
            name={["user", "storePassword"]}
            label="Store Password"
            extra="Please enter your store front password if your store is password protected"
            requiredMark="optional"
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name={["user", "message"]}
            label="Message"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea placeholder="Enter Your Message Here" />
          </Form.Item>
          </div>
          <Form.Item className="contact-btn-submit">
            <Button type="primary" htmlType="submit" 
            // loading={sending}
            >
              {sendBtn}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
   </div>
  )
}

export default Contact