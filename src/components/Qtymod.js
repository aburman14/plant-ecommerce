import React from 'react'
import{ useState,useEffect } from 'react'
import { useGlobalContext } from '../context'
import { IconContext } from "react-icons";
import { FaPlus,FaMinus } from "react-icons/fa";

export default function Qtymod({item}) {

const [show,setshow]=useState(true)
// const [amount,setamount]=useState(0)
const {totalamount,totalsetamount,cartitems,setcartitems}=useGlobalContext()

    const add_btn=()=>{
        // setcartitems([...cartitems,{...item}])
        if(cartitems.find((itm)=>item.id===itm.id?true:false)){
            setcartitems((cartitem)=>{
                const new_arr=cartitem.map((itm,id)=>{
                    if(item.id===itm.id)
                    {
                        //console.log(itm.amount)
                        let itm1={...itm,amount:itm.amount+1}
                        return itm1
                    }
                    else return itm
                })
                return new_arr
            })
        }
        setshow(false)
    }

    const decrease_btn=()=>{
        if(cartitems.find((itm)=>item.id===itm.id?true:false)){
            setcartitems((cartitem)=>{
                const new_arr=cartitem.map((itm,id)=>{
                    if(item.id===itm.id)
                    {
                        //console.log(itm.amount)
                        if(itm.amount>1){
                        let itm1={...itm,amount:itm.amount-1}
                        return itm1
                        }
                        else{
                            return itm
                        }
                    }
                    else return itm
                })
                return new_arr
            })
        }
        // compute_amount()   
    }


    // const compute_amount=()=>{
    //     let sum=0;
    //     for (let index = 0; index < cartitems.length; index++) {
    //         sum=sum+cartitems[index].amount
    //         console.log('hello')           
    //     }
    //     totalsetamount(sum)
    // }

    // useEffect(() => {
    //     console.log('hello123')
    //     let sum=0;           
    //     for (let index = 0; index < cartitems.length; index++) {
    //         sum=sum+cartitems[index].amount
    //         // console.log('hello')           
    //     }
    //     totalsetamount(sum)
       
    // }, [cartitems])


  return (
    <section className='display'>
    {/* { show && <button className='add-btn' onClick={add_btn}>Add to Cart</button>} */}
    { <><button className='add-btn color' onClick={add_btn} ><IconContext.Provider value={{className: "color" }}><span><FaPlus/></span></IconContext.Provider></button>{item.amount}<button className='add-btn color' onClick={decrease_btn}><IconContext.Provider value={{className: "color" }}><span><FaMinus/></span></IconContext.Provider></button></>}
    {/* {!show && <><Link to='/cart'>Go to Bag</Link></>} */}
    </section>
  )
}
