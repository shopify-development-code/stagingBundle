import React,{useEffect,useState} from 'react'
import { Space, Table, Tag } from 'antd';
import postApi from '../components/postApi';
import { useAppBridge } from '@shopify/app-bridge-react';

const Webhooks = () => {
const [webhookdata,setWebhookData] = useState([])
    const app = useAppBridge();
async function getAllData (){
 const resposne = await postApi("/api/admin/get-customer-data-for-webhooks",{},app)
console.log(resposne)
setWebhookData(resposne.data)
 
}
useEffect(()=>{
    getAllData() 
},[])



async function handleCreate(record){
const data = {
    shop:record.store,
    accessToken:record.accessToken
}
const resposne = await postApi("/api/admin/store-update-Webhooks",data,app)
console.log(resposne)

}
async function handleDelete(record){
    const data = {
        shop:record.store,
        accessToken:record.accessToken
    }
    const resposne = await postApi("/api/admin/store-delete-Webhooks",data,app)
    console.log(resposne)
    
}
async function handleGet(record){
        const data = {
            shop:record.store,
            accessToken:record.accessToken
        }
        const resposne = await postApi("/api/admin/store-get-Webhooks",data,app)
        console.log(resposne)
        
        } 
    const columns = [
        {
            title: 'No.',
            dataIndex: 'no',
            key: 'no',
        },
        {
          title: 'Store Name',
          dataIndex: 'store',
          key: 'storeName',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Access Token',
          dataIndex: 'accessToken',
          key: 'accessToken',
        },
        {
          title: 'status',
          dataIndex: 'status',
          key: 'status',
        },
        
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
             Testing
              {/* <button onClick={()=>handleCreate(record)}>Create </button>
              <button onClick={()=>handleDelete(record)}>delete </button>
              <button onClick={()=>handleGet(record)}>get </button> */}
            </Space>
          ),
        },
      ];
      let mainData = []
      if(webhookdata.length){

          webhookdata.map((ele,index)=>{
    
               mainData.push(
                {
                  no: index+1, 
                  key: index+1,
                  store: ele.shop,
                //   accessToken: ele.accessToken,
                  status:"draft"    
                },
                
              )
          })
      }else{
        mainData = [
            {
              key: '1',
              store: "no data",
              accessToken: "no data found",
              status:"draft"
            
            },
            
          ];    
      }
  return (
    <div>
       
        <div style={{width:"100%",textAlign:"center",padding:"15px"}}>
            <h1 style={{fontSize:'2rem',fontWeight:500}}>Webhooks Data</h1>
        </div>
         <Table  columns={columns} dataSource={mainData} />
      
    </div>
  )
}

export default Webhooks
