import './header.css'
import React from 'react';
import { FaSearch } from "react-icons/fa";
import { MdNotifications,MdSettings } from "react-icons/md";

const index = () => {
  const user =  true;

  return <div>
      <div className='container-fluid navbar-bg'>
      <div className=' container nav-items'>
            <div className='logo-div'>
              <h2>LOGO</h2>
            </div>
            {user ? (
            <div className='nav-right-items'>
              <ul className='nav-list'>
                <li><FaSearch/></li>
                <li><MdNotifications/></li>
                <li><MdSettings/></li>
              <img className="topImg" src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Profile" />
              </ul>
            </div> ): (
            <ul className="topList">
            <li className="topListItems">
                   LOGIN
            </li>
            </ul>

           )}
          
          </div>
      </div>
  </div>;
};

export default index;
