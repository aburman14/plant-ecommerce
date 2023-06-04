import React from 'react'
import {Nav} from './Nav'
import Footer from './Footer'
import { Outlet,Link } from "react-router-dom";
import { useGlobalContext } from '../context'
import { FaLeaf,FaShoppingBag,FaWindowClose} from 'react-icons/fa';

export default function FixedNav() {
  const {sidebardisplay,setsidedisplay,totalamount}=useGlobalContext()

  if(!sidebardisplay){
  return (
    
    <div className='nav-main'>
        <Nav />
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
  }
  else{
    return(
      <section className='nav-main-alt'>
      <ul className='nav-bar-alt'>
          <li> 
            <div className='nav-alt-icon'><div><FaLeaf/> EcoWorld </div>
                <span className='close-icon' onClick={()=>setsidedisplay(false)}><FaWindowClose/></span>
              </div>
            </li>
          <li className='link'><Link to="/" onClick={()=>setsidedisplay(false)}>Home</Link></li>
          <li className='link'><Link to="/products" onClick={()=>setsidedisplay(false)}>Products</Link></li>
          <li>Contact Us</li>
          <li>
            <Link to='/cart' onClick={()=>setsidedisplay(false)}>
            <span className='color'><FaShoppingBag/></span></Link></li>
          <li className='count'>
          <span className='count-item'>{totalamount}</span> </li>             
      </ul>
      
           
  </section>
    
    )

  }
}
