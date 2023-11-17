
import { BrowserRouter } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';
import './App.css'

import Relumehome from './Components/relumehome';
import ContactUs from './Components/ContactUs';
import Faq from './Components/FAQ';
import CollegeApplicationProcess from './Components/logindash';
import { Login } from './Components/login';
import { Signup } from './Components/signup';
import ProfilePage from './Components/profile';
import StudentCard from './Components/academic';
import Admission from './Components/application';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Relumehome/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/logindash' element={<CollegeApplicationProcess/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/academic' element={<StudentCard/>}></Route>
        <Route path='/application' element={<Admission/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
