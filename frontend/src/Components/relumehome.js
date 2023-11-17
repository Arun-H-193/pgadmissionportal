import {React,useState} from 'react';
import { useMediaQuery } from 'react-responsive';

import imag from "../Assets/images/img1.jpg"
import image from "../Assets/images/img.jpg"
import { Link } from 'react-router-dom';
import Footer from './footer';
import '../Assets/css/relumehome.css';

const Header = () => {
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
const Maincontent = () => {
  return (
    <section className="personalized-experience">
      <div className='maincontent'>
        <div className='maincontent-section'>
      <h1 className="maincontent-head">Find your Path to Post-Graduation Success</h1>
      <p>Discover the perfect post-graduation program for your future</p>
      <div className='maincontent-button'>
      <Link to='/login'><button className='button'>Apply</button></Link>
      <button className='button'>Learn more</button>
      </div>
      </div>
      <div className='maincontent-image'>
      <img src={imag} alt="Personalized Experience" className='imageinhome' />
      </div>
      </div>
    </section>
  );
};
const Hero = () => {
  return (
    <section className="herocontent">
      <div className='herocontent-head'>
      <h2>Simplified</h2>
      <h1>Streamline Your Application Process with</h1>
      <h3>Ease</h3>
      <p>Our post graduation admission portal provides a user-friendly platform for students to easily apply to multiple colleges. Say goodbye to complicated application processes and hello to simplicity and convenience.</p>
      <ul className='list'>
        <li className='list-li'>Effortlessly apply to multiple colleges</li>
        <li className='list-li'>Track your application status in real-time</li>
        <li className='list-li'>Connect with top colleges and universities</li>
      </ul>
      <Link to="/contact"><button className='button'>Learn More</button></Link>
      </div>
      <div>
      <img src={image} alt="Personalized Experience" className='imageinhome'/>
      </div>
    </section>
  );
};


const Relumehome = () => {
  return (
    <div className="app">
      <Header />
      <Maincontent/>
      <Hero/>
      <Footer/>
    </div>
  );
};

export default Relumehome;
