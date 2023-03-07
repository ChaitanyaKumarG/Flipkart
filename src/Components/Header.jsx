import { Modal } from '@mui/material';
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import mylogo from '../Images/flipkart.png'
import SearchBar from './SearchBar';
import CartIcon from '@mui/icons-material/ShoppingCart';

function Header(){

const [smodal,setsmodal]=useState(false)
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

  return(

    

<div className="header d-flex navbar" style={{backgroundColor: '#2874f0', height:"55px", justifyContent:"space-evenly"}}>
<Modal open={smodal} onClose={()=>{setsmodal(false)}}>
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
     
          <img className='ms-5' src={mylogo} alt="Flipkart"  style={{height:"50%"}}/> 
          <SearchBar className='shadow'/>
          <button className='btn bg-white text-primary rounded-0'  onClick={()=>{setsmodal(true)}} > Login </button>
         
         <a href='#' className='text-white' style={{textDecoration:"none",fontWeight:"600"}}>Become a Seller</a>
         
         <Dropdown >
          <Dropdown.Toggle varient="transparent" style={{fontWeight:"600"}}>
            More
          </Dropdown.Toggle>
          <DropdownMenu>
          <DropdownItem>Chaitu</DropdownItem>
          <DropdownItem>Chaitu</DropdownItem>
          <DropdownItem>Chaitu</DropdownItem>
          <DropdownItem>Chaitu</DropdownItem>
          </DropdownMenu>
         </Dropdown>
         
         <a href='#' className='text-white me-5' style={{textDecoration:"none",fontWeight:"600"}}> <CartIcon/> Cart</a>
         
         
         
          </div>
        
  );
}
export default Header