import React from 'react'
import { AiFillHome, AiOutlineCompass, AiOutlineHeart, AiOutlinePlusSquare, AiOutlineSearch } from 'react-icons/ai';
import { RiMessengerLine } from "react-icons/ri";
import './TopBar.scss'

const TopBar = () => {
  return (
    <div className='top-bar-container'>
        <div className='top-bar-warper'>
            <a href="https"><img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" /></a>
            <div className="search-bar">
                <AiOutlineSearch />
                <input type="text" placeholder='Search'/>
            </div>
            <div className="navigation-icons">
                <a href="http://"><AiFillHome /></a>
                <a href="http://"><RiMessengerLine /></a>
                <a href="http://"><AiOutlinePlusSquare /></a>
                <a href="http://"><AiOutlineCompass /></a>
                <a href="http://"><AiOutlineHeart /></a>
                <a href="https://"><img src="https://media-exp1.licdn.com/dms/image/C5603AQHtR8m5I1IJwQ/profile-displayphoto-shrink_200_200/0/1607378729683?e=2147483647&v=beta&t=3N8Pi48XitcfAVZRoeCb5HG6pTefsFF2qPXSFi7uWd8" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default TopBar