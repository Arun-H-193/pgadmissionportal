import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import '../Assets/css/header.css'
import { Link } from "react-router-dom";
const Headers = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 767 });
  
    const toggleDropdown = () => {
      setIsDropdownOpen((prevState) => !prevState);
    };
  
    return (
      <header>
        <div>
          <h2>Master UP</h2>
        </div>
        <div>
          {!isMobile && (
            <nav>
              <ul className='relnav'>
              <Link to='/login'><li className='relnav-li'>Admission portal</li></Link>
                <Link to='/login'><li className='relnav-li'>Student Login</li></Link>
                <Link to='/login'><li className='relnav-li'>College Login</li></Link>
              </ul>
            </nav>
          )}
          {isMobile && (
            <button className='button' onClick={() => toggleDropdown()}>
              {isDropdownOpen ? 'Close Menu' : 'Menu'}
            </button>
          )}
          {isDropdownOpen && isMobile && (
    <div className={isDropdownOpen ? 'dropdown active' : 'dropdown'}>
      {/* Dropdown content */}
      <select> 
        <option value="admissionportal">Admission portal</option> 
        <option value="studentlogin">Student Login</option> 
        <option value="collegelogin">College Login</option>  
      </select>
    </div>
  )}
        </div>
        <div>
          {!isMobile && <Link to='/signup'><button className='button'>Sign Up</button></Link>}
        </div>
      </header>
    );
  };
  export default Headers;