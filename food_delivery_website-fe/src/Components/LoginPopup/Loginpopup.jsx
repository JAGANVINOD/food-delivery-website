import React, { useContext, useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const Loginpopup = ({ setshowLogin }) => {

  const { url, settoken } = useContext(StoreContext)
  const [currentstate, setcurrentstate] = useState('Sign Up')
  const [data, setData] = useState({

    name: "",
    email: "",
    password: ""
  })
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }
  
  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if (currentstate === "Login") {
      newUrl += "/api/user/login"
    }
    else {
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      settoken(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userName", response.data.name); 
      setshowLogin(false);
    }
    else {
      alert(response.data.message);
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currentstate}</h2>
          <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className='login-popup-inputs'>

          {currentstate === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
        </div>


        <button type='submit'>{currentstate === "Signup" ? "Create account" : "Login"}</button>
        <div className='login-popup-condition'>
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentstate === "Login"
          ? <p>Create a new Account? <span onClick={() => setcurrentstate("Sign Up")}>Click Here</span></p>
          : <p>Already have an account? <span onClick={() => setcurrentstate("Login")}>Login Here</span></p>
        }


      </form>
    </div>
  )
}

export default Loginpopup
