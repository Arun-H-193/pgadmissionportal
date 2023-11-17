import React from "react";
import { useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { logout } from '../Redux/authSlice';
import '../Assets/css/navbar.css';
const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 767 });
  
    const toggleDropdown = () => {
      setIsDropdownOpen((prevState) => !prevState);
    };
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  
    return (
      <header>
        <div>
          <h2>Master UP</h2>
        </div>
        <div>
          {!isMobile && (
            <nav>
              <ul className="navbar-li">
                <Link to="/profile"><li>profile</li></Link>
                <Link to="/academic"><li>Academic details</li></Link>
                <Link to="/application"><li>Applications</li></Link>
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
        <option value="admissionportal">Profile</option> 
        <option value="studentlogin">Academic details</option> 
        <option value="collegelogin">Applications</option>  
      </select>
    </div>
  )}
        </div>
        <div className="names">
            <p className="email">{email}</p>
          {!isMobile && <button className='button' onClick={handleLogout}>Logout</button>}
        </div>
      </header>
    );
  };
  export default Navbar;