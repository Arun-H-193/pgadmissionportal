import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Assets/css/login.css'
import image from '../Assets/images/logo-white.png'
import Headers from './header';
import { login } from '../Redux/authSlice';
import { userLogin } from '../Services/api';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    // Check if all fields are filled
    const hasEmptyField = Object.values(formData).some((field) => field === '');

    if (hasEmptyField) {
      // Display a Toastify error message
      toast.error('Please fill in all the fields to continue.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeButton: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
      });
    } else {
      // Dispatch the login action with the form data
       // Get the username from the form
       dispatch(login(formData.email));
       const res = await userLogin(formData);
        
          console.log(res);
          if(res.data.token===null)
          {
            toast.error('Login failed', {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: true,
              closeButton: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: false,
            });
          }
          else{
            localStorage.setItem("Token", res.data.token);
            localStorage.setItem("userId", res.data.uid);
            navigate("/logindash")

          }
    }
  };
  return (
    <>
    <Headers/>
    <div className='mainlogin'>
        <div className='company_details'>
            <img src={image} className='logologin'></img>
        </div>
        <div className='logincontainer'>
        <form class="form">
    <p id="heading">Login</p>
    <div class="field">
    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
    </svg>
      <input autocomplete="off" placeholder="Email" name="email" class="input-field" type="email" onChange={handleInputChange}/>
    </div>
    <div class="field">
    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
    </svg>
      <input placeholder="Password" class="input-field" name="password" type="password" onChange={handleInputChange}/>
    </div>
    <div class="btn">
    <button class="button1" onClick={handleFormSubmit}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
    <Link to="/signup"><button class="button2">Sign Up</button></Link>
    </div>
    <button class="button3">Forgot Password</button>
</form>
</div>
    </div>
    </>
  )
}
