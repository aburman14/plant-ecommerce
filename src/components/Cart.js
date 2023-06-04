import React, { useState } from "react";
import { FaTrash,FaHeart } from "react-icons/fa";
import Cartbtn from './Cartbtn';
import { useGlobalContext } from '../context'
import Qtymod from "./Qtymod";
import{ useEffect } from 'react'


const Cart = () => {
    const {totalsetamount,cartitems,setcartitems,display,setdisplay}=useGlobalContext()
    const [bill,setbill]=useState(0)

    const removeitm=(itm)=>{
      const index = cartitems.indexOf(itm);
      cartitems.splice(index, 1)
      console.log(cartitems)
      setcartitems([...cartitems])
      
    }
    useEffect(() => {

      let sum=0,price_sum=0       
      for (let index = 0; index < cartitems.length; index++) {
          sum=sum+cartitems[index].amount;
          price_sum=price_sum+(cartitems[index].amount*cartitems[index].price)
      }
      setbill(price_sum)
      totalsetamount(sum)
      if(cartitems.length===0){
        setdisplay(true)
      }
      else{
        setdisplay(false)
      }
     
  }, [cartitems])



  return (
    <section className="cart-display">
      <h1>My Cart</h1>
      {display ? <h2>Cart is Empty</h2>
      :<div className="cart">
              {/* <h1 className="cart-heading">My Cart</h1> */}

      <div className="cart-items">
      {        
        cartitems.map((item)=>{
            return (
                <div className="cart-item">
          <img src={item.img} className="img-cart" />
          <div className="item-details">
            <h4>{item.title}</h4>
            <p>Price:{item.price}</p>           
            <div className="bag-details">
              <p onClick={()=>removeitm(item)}><FaTrash/>  Remove </p>
              <p ><FaHeart/>WishList</p>
            </div>
          </div>
          <div className="cart-btn">
          {/* <Cartbtn /> */}
          <Qtymod item={item} />
          {/* <p>Quantity</p>{item.amount} */}
          </div>
        </div>
            )
        })
      }      
      </div>
      <div className="orders">
       <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="sub-total">
        <h4>Sub Total  : </h4>
        ${bill}        
        </div>
        <div className="sub-total">
        <p>Shipping Fee:      </p>
          $5 
   
        </div>
        <div className="sub-total">
        <h1 className="heading">Grand Total:
        </h1>
        ${bill+5}
        </div>
        <button className="btn">Proceed to Pay</button>

      </div>
      </div>
      </div>
}      
    </section>
  );
};

export default Cart;
