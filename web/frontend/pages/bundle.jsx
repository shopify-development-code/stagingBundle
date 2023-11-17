import React from 'react'
import CreateBundle from '../components/bundle/bundle'
import Watermark from '../components/watermark'
import ContactUs from '../components/contactUs'
import LogoHeader from '../components/logoHeader'
const Bundle = () => {
  return (
    <div>
      <LogoHeader/>
      <div className='sd-margin-top'>
      <CreateBundle/>
     <Watermark/>
     <ContactUs/>
      </div>
    </div>
  )
}

export default Bundle