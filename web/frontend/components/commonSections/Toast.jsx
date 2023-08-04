import { notification} from 'antd';
// let  type =  'success' | 'info' | 'warning' | 'error' ;
  
const toastNotification = (type,res,placement) => {
 return( 
  notification[type]({
    
    // message: `${type}`,
    description: `${res}`,
    placement:`${placement}`,
 
  })
  
 
 )

}
export default toastNotification;