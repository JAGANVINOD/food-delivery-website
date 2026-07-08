import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>

        <div className='footer-content-left'>
           <img src={assets.logo} alt="" className='logo' />
           <p>"Food cravings don't wait, and neither should you. With just a few taps, you can explore a world of flavors from the comfort of your couch. From sizzling street food to gourmet dishes, we partner with your favorite restaurants to bring the best right to your door. Fast delivery, fresh ingredients, and reliable service—it’s all part of the experience. So why stress about cooking or going out? Let us take care of your hunger, one delicious delivery at a time."</p>
        
        <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>+1-212-456-7790</li>
                <li>contact@freshcrave.com</li>
               </ul>
        </div>
        
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 © Freshcrave.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
