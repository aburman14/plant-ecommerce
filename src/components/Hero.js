import React from 'react'
import home from '../assets/home.png'
import { FaTwitter,FaInstagram,FaFacebookF } from 'react-icons/fa';
import {Link,} from "react-router-dom";


export const Hero = () => {
  return (
    <section className='hero-content'>
        <div className='div-1'>
            <h1>Plants will make your life better</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the</p>
        <Link to="products"><button>Shop Now</button></Link>
        </div>
        <div className='div-2'>
        <img src={home}  className='home-img'/>
        </div>
        <div className='div-3'>
            <p>Follow us</p>
            <FaTwitter/>
            <FaInstagram/>
            <FaFacebookF />
            </div>
    </section>
  )
}
