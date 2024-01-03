import React,{useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 
import SearchIcon from '@mui/icons-material/Search';
 import FavoriteBorderOutlinedIcon from '@mui/icons-material/PersonOutline';
 import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutline';
 import ShoppingCartOutlinedIcon from '@mui/icons-material/PersonOutline';
 import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import { Card } from '@mui/material';
import Cart from '../Cart/Cart';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import  Hamburger from "./Hamburger";
import CancelIcon from '@mui/icons-material/Cancel';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
 const Navbar = () => {
    const[open, setOpen] = useState(false);
    const products = useSelector(state=> state.cart.products)
    const[hamburgerOpen, setHamburgerOpen] = useState(false);
    // console.log(products,"fakshbfasj")
    const toggleHamburger = ()=>{
        setHamburgerOpen(!hamburgerOpen)
       
    }
    // console.log(open)
    console.log(hamburgerOpen,"hamOPen")
  return (
    <div className='navbar'>
        <div className="wrapper">

            {/* {hamburgerOpen ? <></> : <></>} */}
            <div className='hamburgerDiv '>

                <div className='hamburger' onClick={toggleHamburger}>
                {  !hamburgerOpen && <Hamburger isOpen={hamburgerOpen} /> }      
              {/* {hamburgerOpen ?  <ClearOutlinedIcon /> : <Hamburger isOpen={hamburgerOpen} />} */}
                    {/* <CancelIcon /> */}
                    {/* <Hamburger isOpen={hamburgerOpen} /> */}
                </div>
                <div className={hamburgerOpen ? "enable" : "hamburgerMenu"}>
                    <div className='center'>
                    <Link className='link' to="/">My Store</Link>
                    </div>

                    <ClearOutlinedIcon  onClick={toggleHamburger}/> 
                        <div className='item'>
                                <Link className='link' to="/">HomePage</Link>
                        </div>
                        <div className='item'>
                                <Link className='link' to="/">About</Link>
                        </div>
                        <div className='item'>
                                <Link className='link' to="/">Contact</Link>
                        </div>
                        <div className='item'>
                                <Link className='link' to="/">Stores</Link>
                        </div>

                    </div>
              
            
                
            </div>
      

             <div className='left' >
            

                    <div className="item">
                        <img src="/img/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1" >Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2" >Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3" >Children</Link>
                    </div>


             </div>
       
            

            <div className='center'>
                <Link className='link' to="/">My Store</Link>
            </div>

            <div className=" smlScrIcon" onClick={()=>setOpen(!open)} >
                        {/* <ShoppingCartOutlinedIcon /> */}
                        <ShoppingBagOutlinedIcon />

                        <span style={{backgroundColor:"#2879fe",borderRadius:"25%",width:"6px",height:"6px" }}>{products.length}</span>
            </div>

            <div className='right'>
                <div className='item'>
                    <Link className='link' to="/">HomePage</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/">About</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/">Contact</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/">Stores</Link>
                </div>
                <div className='icons'>
                    <SearchIcon />
                    <PersonOutlineOutlinedIcon />
                    {/* <FavoriteBorderOutlinedIcon /> */}
                    {/* <AddShoppingCartIcon /> */}
                    
                    {/* <ShoppingCartOutlinedIcon /> */}

                    <div className="cartIcon smlScrIconCenter" onClick={()=>setOpen(!open)} >
                    <ShoppingBagOutlinedIcon  />
                        <span >{products.length}</span>
                    </div>
                    
                </div>

                
            </div>

        </div>

        {open && <Cart />   }
    </div>
  )
}


export default Navbar;