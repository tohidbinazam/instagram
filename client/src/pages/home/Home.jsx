import React from 'react'
import TopBar from '../../components/topBar/TopBar';
// import TempAuth from '../TempAuth/TempAuth';
import { BsDot, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import './Home.scss'
import { useContext } from 'react';
import Cookies from 'js-cookie'
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios'
import LoaderContext from '../../context/LoaderContext';

const Home = () => {

  // Auth context
  const { user, authDispatch } = useContext(AuthContext)

  // Top loader context
  const { loaderDispatch } = useContext(LoaderContext)

  const handleLogOut = (e) => {
    e.preventDefault()

    // Top bar loader
    loaderDispatch('START')

    axios.delete('http://localhost:5050/api/user/logout').then(() => {
      authDispatch({type: 'LOGGED_OUT'})
      Cookies.remove('token')
    })
  }

  return (
    <>
      <TopBar />
      {/* <TempAuth /> */}
      <div className="timeline-container">
        <div className="timeline-warper">
          <div className="post">
            <div className="post-header">
              <div className="user-info">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQHtR8m5I1IJwQ/profile-displayphoto-shrink_200_200/0/1607378729683?e=2147483647&v=beta&t=3N8Pi48XitcfAVZRoeCb5HG6pTefsFF2qPXSFi7uWd8" alt="" />
                <div className="user">
                  <a className='fw-bold' href="http://">leomessi</a>
                  <a href="http://">Bloomfield Stadium</a>
                </div>
              </div>
              <div className="options">
                <BsThreeDots />
              </div>
            </div>
            <img className='post-image' src="https://yt3.ggpht.com/ytc/AMLnZu8KJFJ3jMafPIqfjNbJGPsORFk4Np8rj9sysZU-=s900-c-k-c0x00ffffff-no-rj" alt="" />
            <div className="post-details">
              <div className="reaction-bookmark">
                <div className="reaction">
                  <a href="http://"><AiOutlineHeart /></a>
                  <a href="http://"><BiMessageRounded /></a>
                  <a href="http://"><AiOutlineHeart /></a>
                </div>
                <div className="img-counter">
                  <a href="http://"><BsDot /></a>
                </div>
                <div className="bookmark">
                  <a  href="http://"><FiBookmark /></a>
                </div>
              </div>
              <a className='fw-bold likes' href="http://"> 5,034,503 likes </a>
              <p><a className='fw-bold' href="http://"> leomessi </a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe deleniti recusandae ut, expedita eligendi distinctio molestiae dolor rem esse ipsum vitae nobis quia. Veritatis eum delectus saepe consequatur perspiciatis blanditiis expedita, magni, ipsam distinctio incidunt autem officia aliquid odio nisi! Optio earum illo, suscipit exercitationem vel sint reprehenderit veritatis eligendi?</p>
              <a href="http://" className="comments-count"> View all 34,024 comments </a>
              <div className="comments">
                <div className='comment'>
                  <span><a className='fw-bold' href="http://"> samir_chamkha </a> 👏👏👏👏❤️❤️❤️❤️ </span>
                  <a href="http://"><AiOutlineHeart /></a>
                </div>
                <div className='comment'>
                  <span><a className='fw-bold' href="http://"> pepmorata </a> Golaaaaazooo papá!!! </span>
                  <a href="http://"><AiOutlineHeart /></a>
                </div>
              </div>
              <a className='time' href="http://"> 4 DAYS AGO </a>
            </div>
            <div className="write-comment">
              <form>
                <BsEmojiSmile />
                <input type="text" name="" id="" placeholder='Add a comment…' />
                <button type="submit"> Post </button>
              </form>
            </div>
          </div>
          <div className="profile">
            <div className="profile-info d-flex justify-content-between align-items-center">
              <div className="info d-flex align-items-center">
                <div className="pro-img me-3">
                  <img src="https://media-exp1.licdn.com/dms/image/C5603AQHtR8m5I1IJwQ/profile-displayphoto-shrink_200_200/0/1607378729683?e=2147483647&v=beta&t=3N8Pi48XitcfAVZRoeCb5HG6pTefsFF2qPXSFi7uWd8" alt="" />
                </div>
                <div className="pro-info">
                  <b><Link to="/account-verify">{ user.username }</Link></b>
                  <p>{ user.name }</p>
                </div>
              </div>
              <div className="logout">
                <Link onClick={ handleLogOut } to="/login"> Log Out </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home