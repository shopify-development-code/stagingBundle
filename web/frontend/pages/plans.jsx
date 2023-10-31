import React,{useState,useEffect} from 'react'
import { Spin } from 'antd';
import BoatLoader from '../components/BoatLoader';



const Plans = () => {
  const [spinner,setSpinner] = useState(false) 


  const handleClickUpgrade = async (plan, interval, price) => {
    setSpinner(true);
    // setBtnClicked(plan);
  
    // const sessionToken = await getSessionToken(app);
    // const data = {
    //   shop: shop,
    //   plan: plan,
    //   interval: interval,
    //   price: price,
    // };
    
    // await axios
    //   .post("/api/getBilling", data, {
    //     headers: { Authorization: `Bearer ${sessionToken}` },
    //   })
    //   .then((res) => {
    //     window.top.location.href =
    //       res.data.body.data.appSubscriptionCreate.confirmationUrl;
    //   })
    //   .catch((err) => console.log(err + "Something went wrong!"));
  };
  return (
    <Spin spinning={spinner}
    indicator={<BoatLoader/>}
    size="large"> 
    <div>
     <div className="sd-bundle-MoveToHome-section">
     
        
     <div className="sd-bundle-MoveToHome-arrow">


 </div>
 <div className="sd-bundle-commonHeading">Plans</div>
</div>

      <section className="container">

<div className="pricecard">
  <div className="head">
    <h2>Basic</h2>
    <p className="sub">For the small companies</p>
    <p className="price">$490</p>
  </div>
  <div className="details">
    <div className="row">
      <svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
      <p>10 users</p>
    </div>
    <div className="row">
      <svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
      <p>50GB storage</p>
    </div>
  </div>
  <button onClick={()=>handleClickUpgrade("basic","monthly",10)} className='sd-bundle-pricing-btn'>Upgrade Now</button>
</div>

<div className="pricecard">
  <div className="head">
    <h2>Plus</h2>
    <p className="sub">For the medium companies</p>
    <p className="price">$790</p>
  </div>
  <div className="details">
    <div className="row">
      <svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
      <p>100 users</p>
    </div>
    <div className="row">
      <svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
      <p>200GB storage</p>
    </div>
    <div className="row">
      <svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
      <p>24/7 tech support</p>
    </div>
  </div>
  <button onClick={()=>handleClickUpgrade("plus","monthly",20)} className='sd-bundle-pricing-btn'>Upgrade Now</button>
</div>

<div className="pricecard">
  <div className="head">
    <h2>Premium</h2>
    <p className="sub">For the big companies</p>
    <p className="price">$1090</p>
  </div>
  <div className="details">
    <div className="row">
      <svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
      <p>400 users</p>
    </div>
    <div className="row">
      <svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
      <p>800GB storage</p>
    </div>
    <div className="row">
      <svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
      <p>24/7 tech support</p>
    </div>
    <div className="row">
      <svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
      <p>Automated workflows</p>
    </div>
  </div>
  <button onClick={()=>handleClickUpgrade("premium","monthly",30)} className='sd-bundle-pricing-btn'>Upgrade Now</button>
</div>

</section>
    </div>
    </Spin>
  )
}

export default Plans