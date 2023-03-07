
import { StoreMallDirectory } from '@mui/icons-material';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SecondNavbar from './Components/SecondNav';
import AboutMePage from './Pages/AboutPage';
import Accounts from './Pages/AccountsPage';
import Apitest from './Pages/Apitest';
import Apitrail from './Pages/Apitrail';
import ContactMe from './Pages/ContactMe';
import Frsapp from './Pages/Frsapp';
import HomePage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';



function App() {
const [Login,setLogin] = useState(false)
const [smodal,setsmodal]=useState(true)
var sstyle ={
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  backgroundColor: '#2874f0',
  height:500,
  border:"none",
};

  return (


    <div className="App">

      <Modal open={smodal} onClose={()=>{setsmodal(false)}}   >
        <div style={sstyle} className='d-flex border-0'>

<div className='left w-50 p-4' style={{width:"25%"}}>
<h3 className='text-white'>Login</h3>
<h6 className='text-white mt-4 mb-5'>
Get access to your Orders, Wishlist and Recommendations
</h6>
<div className='img mt-5'>
  <img src='https://cdn.glitch.global/a074a013-298d-4329-83f1-761cd035e463/2023-02-02.png?v=1675326306074' alt='logo' className='w-100 mt-5'/>
</div>
</div>

<div className='right bg-white p-4' style={{alignItems:"center",width:"75%"}}>
<p className='mb-0' style={{fontSize:"smaller"}}>Enter Email/Mobile Number</p>
<input className='form-control mb-3'/>
<p style={{fontSize:"smaller"}}>By continuing, you agree to Flipkart's <a href='#' style={{textDecoration:"none"}}>Terms of Use</a>  and <a href='#' style={{textDecoration:"none"}}> Privacy Policy</a>.</p>
<button className='btn w-100 mb-5 text-white' style={{backgroundColor:"#fb641b"}}>Request OTP</button>
<div className='space h-25 mt-5 mb-5'>
</div>
<a href='#'className='mt-5'  style={{textDecoration:"none",fontSize:"smaller",fontWeight:"600",alignItems:"center" , textAlign:"center"}}> New to Flipkart? Create an account.</a>
</div>



        </div>
      
      </Modal>


<BrowserRouter>


<Header></Header>
<SecondNavbar/>
<HomePage/>



<Routes>


<Route path='/AboutMePage' element={<AboutMePage/>} exact/>
<Route path='/ContactMe' element={<ContactMe/>} exact/>

<Route path='/LoginPage' element={Login?(<Navigate to='/AccountsPage'/>):(<LoginPage/>)}exact />

<Route path='/AccountsPage'element={<Accounts/>} exact/>
<Route path='/Apitrail' element={<Apitrail/>} exact/>
<Route path='/APitest' element={<Apitest/>} exact/>
<Route path='/Frsapp' element={<Frsapp/>} exact></Route>
</Routes>


</BrowserRouter>

    </div>
  );
}

export default App;
