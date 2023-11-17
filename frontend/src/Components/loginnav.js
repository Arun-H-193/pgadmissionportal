import React from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import '../Assets/css/loginnav.css';
import { useSelector } from 'react-redux';

const Header = () => {
  
  const email = useSelector((state) => state.auth.email);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 767 });
  
    const toggleDropdown = () => {
      setIsDropdownOpen((prevState) => !prevState);
    };
  
    return (
      <header className="app">
        <div>
          <h2>Master UP</h2>
        </div>
        
        <div className='accountside'>
            <p>{email}</p>
          {!isMobile && <button className='button-nav'>Logout</button>}
        </div>
      </header>
    );
  };

export default Header;