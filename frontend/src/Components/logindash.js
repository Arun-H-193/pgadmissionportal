import React from 'react';
import Header from './loginnav';
import '../Assets/css/logindash.css';
import im from '../Assets/images/8380015.jpg'
import logo from '../Assets/images/logo-black.png'
import PostGraduationApplicationComponent from './service';
import { Link } from 'react-router-dom';

const CollegeApplicationProcess = () => {
  
  return (
    <div>
      <Header/>
    <div className="college-application-process">
      <div className='applypart'>
        <div>
      <h1 className='maintext'>Simplify College Application Process</h1>
      <p className='maintext-p'>Access and review student applications easily with our user-friendly portal.</p>
      <div className="buttons">
        <Link to="/profile"><button>Apply Now</button></Link>
      </div>
      </div>
      </div>
      <div>
        <PostGraduationApplicationComponent/>
      </div>
      <div className='details'>
        <div className='imagepart'>
      <img src={logo} className="logofooter">
        </img>
        </div>
      <div className="author">
        <img src={im} alt="John Doe" />
        <div >
          <h3>Akhil k</h3>
          <p>CEO Company Master UP</p>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default CollegeApplicationProcess;
