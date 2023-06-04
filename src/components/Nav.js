import React from 'react'
import { FaLeaf,FaShoppingBag,FaWindowClose} from 'react-icons/fa';
import { GiHamburgerMenu} from "react-icons/gi";

import {
  Link,
} from "react-router-dom";
import { useGlobalContext } from '../context'



export const Nav = () => {
  const { totalamount,sidebardisplay,setsidedisplay } = useGlobalContext()

  const opensidebar=()=>{
    setsidedisplay(true)
  }

  return (
    <section className='nav'>
        <ul className='nav-bar'>
            <li> <FaLeaf/> EcoWorld</li>
            <li className='link'><Link to="/">Home</Link></li>
            <li className='link'><Link to="/products" >Products</Link></li>
            {/* <li>Products</li>
            <li>FAQs</li> */}
            <li className='link'><Link to="/about">About Us</Link></li>
            <li>
              <Link to='/cart'>
              <span className='color'><FaShoppingBag/></span></Link></li>
            <li className='count'>
            <span className='count-item'>{totalamount}</span> </li>             
              {/* <li className='flex'>
                <FaShoppingBag/>
                <p className='test'>
                  {totalamount}
                </p>
              </li> */}
        </ul>
        <ul className='nav-bar-toggle'>
          <li> <FaLeaf/> EcoWorld</li>
          <li><div onClick={opensidebar}><GiHamburgerMenu/></div></li>
          {/* <div className='nav-links-main'>

          </div> */}
        </ul>
             
    </section>
  )
}
