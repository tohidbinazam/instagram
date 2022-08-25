import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <li><a href="http://">Meta</a></li>
        <li><a href="http://">About</a></li>
        <li><a href="http://">Blog</a></li>
        <li><a href="http://">Jobs</a></li>
        <li><a href="http://">Help</a></li>
        <li><a href="http://">API</a></li>
        <li><a href="http://">Privacy</a></li>
        <li><a href="http://">Terms</a></li>
        <li><a href="http://">Top Accounts</a></li>
        <li><a href="http://">Hashtags</a></li>
        <li><a href="http://">Locations</a></li>
        <li><a href="http://">Instagram Lite</a></li>
        <li><a href="http://">Contact Uploading & Non-Users</a></li>
        <li><a href="http://">Dance</a></li>
        <li><a href="http://">Food & Drink</a></li>
        <li><a href="http://">Home & Garden</a></li>
        <li><a href="http://">Music</a></li>
        <li><a href="http://">Visual Arts</a></li>
      </ul>
      <div className="copyrights">
        <select name="" id="">
          <option value="">English</option>
          <option value="">Bangla</option>
          <option value="">Hindi</option>
          <option value="">Tamil</option>
          <option value="">Arabic</option>
          <option value="">spanish</option>
        </select>
        <span> © 2022 Instagram from Meta </span>
      </div>
    </div>
  )
}

export default Footer