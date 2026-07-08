import React, { useContext, useState,useEffect } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets.js'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { Link as ScrollLink } from 'react-scroll';



const Navbar = ({ setshowLogin }) => {

  const [username, setUsername] = useState('');
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount, token, settoken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");
    settoken("");
    navigate("/")

  }
  
useEffect(() => {
  const name = localStorage.getItem('userName');
  console.log("Loaded username from localStorage:", name);
  if (name) {
    setUsername(name);
  }
}, []);

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={assets.logo} alt="" className='logo' />
      </Link>
      <ul className='navbar-menu'>

        <Link to={'/'} onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>


        <ScrollLink to="explore-menu" smooth={true} duration={500} offset={-70} onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</ScrollLink>
        <ScrollLink to="app-download" smooth={true} duration={500} offset={-70} onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</ScrollLink>
        <ScrollLink to="footer" smooth={true} duration={500} offset={-70} onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</ScrollLink>


      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => setshowLogin(true)} className='btn btn-light'>Sign in</button>
         
         : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
             {username && <span className='navbar-username'>Hi, {username}</span>}
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>}


      </div>
    </div>
  )
}

export default Navbar
