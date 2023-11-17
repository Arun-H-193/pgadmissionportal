import React from 'react'
import '../Assets/css/signup.css'
import image from '../Assets/images/logo-white.png'
import Headers from './header'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { userRegister } from '../Services/api';


export const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Check if all fields are filled
    const hasEmptyField = Object.values(formData).some((field) => field === '');

    // Check if the email is in a valid format using a regular expression
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      formData.email
    );

    // Check if the password contains at least one symbol and one number
    const isValidPassword = /^(?=.*[!@#$%^&*])(?=.*\d).+$/.test(formData.password);

    if (hasEmptyField) {
      // Display a creative alert message using Toastify
      toast.error(
        <div>
          <p>Please fill in all the fields to continue.</p>
          <div class="loader">
            <div class="circle">
              <div class="dot"></div>
              <div class="outline"></div>
            </div>
            <div class="circle">
              <div class="dot"></div>
              <div class="outline"></div>
            </div>
            <div class="circle">
              <div class="dot"></div>
              <div class="outline"></div>
            </div>
            <div class="circle">
              <div class="dot"></div>
              <div class="outline"></div>
            </div>
          </div>
        </div>,
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeButton: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
        }
      );
    } else if (!isValidEmail) {
      // Display an error message for an invalid email
      toast.error('Please enter a valid email address.');
    } else if (!isValidPassword) {
      
      toast.error(
        'Password must contain at least one symbol (!@#$%^&*) and at least one number.'
      );
    } else {
      try {
        const res = await userRegister(formData); // Use formData instead of signup
        if (res.data === "User registered successfully") {
          toast.success(` Signup Successful !`, {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate('/login');
          }, 1500);
        }
      } catch (error) {
        // Handle any potential errors here
        console.error("Error during registration:", error);
      }
    }
  };
  
  return (
    <>
    <Headers/>
    <div className='mainlogin'>
        <div className='company_details'>
            <img src={image} className='logosignup'></img>
        </div>
        <div className='logincontainer'>
        <form class="form">
    <p id="heading">Signup</p>
    <div class="field">
    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
    </svg>
      <input autocomplete="off" placeholder="Email" class="input-field" type="email" onChange={handleInputChange}/>
    </div>
    <div class="field">
    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
    </svg>
      <input autocomplete="off" placeholder="Name" class="input-field" type="text" onChange={handleInputChange}/>
    </div>
    <div class="field">
    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
    </svg>
      <input placeholder="Password" class="input-field" type="password" onChange={handleInputChange}/>
    </div>
    <div class="btn">
    <Link to="/login"><button class="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></Link>
    <button class="button2" onClick={handleFormSubmit}>Sign Up</button>
    </div>
    <button class="button3">Forgot Password</button>
</form>
</div>
    </div>
    </>
  )
}
