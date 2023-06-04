import React from 'react'
import{ useState,useEffect } from 'react'
import { useGlobalContext } from '../context'
import { IconContext } from "react-icons";
import { FaPlus,FaMinus } from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Cartbtn({item}) {

const [show,setshow]=useState(true)
const [amount,setamount]=useState(0)
// const { amount, setamount } = useGlobalContext()
const {totalamount,totalsetamount,cartitems,setcartitems}=useGlobalContext()

    const add_btn=()=>{
        // setcartitems([...cartitems,{...item}])
        if(cartitems.find((itm)=>item.id===itm.id?true:false)){
            console.log('hello1')
            setcartitems((cartitem)=>{
                const new_arr=cartitem.map((itm,id)=>{
                    if(item.id===itm.id)
                    {
                        itm.amount=itm.amount+1
                        return itm
                    }
                    else return itm
                })
                return new_arr
            })
        }
        else{
            setcartitems([...cartitems,{...item}])
        }


        setamount((prev)=>{
            let curr=prev+1;
            return curr     
        })
        setshow(false)

        totalsetamount((prev)=>{
            let curr=prev+1;
            return curr 
        })
        setshow(false)
    }

    const decrease_btn=()=>{
        setamount((prev)=>{
            let curr=prev-1;
            return curr     
        })
        totalsetamount((prev)=>{
            let curr=prev-1;
            return curr 
        })     
    }


    useEffect(() => {
        if(amount===0){    
            setshow(true)
            }
    }, [amount])
    

  return (
    <section className='display'>
    { show && <button className='add-btn' onClick={add_btn}>Add to Cart</button>}
    {/* {!show && <><button className='add-btn color' onClick={add_btn} ><IconContext.Provider value={{className: "color" }}><span><FaPlus/></span></IconContext.Provider></button>{amount}<button className='add-btn color' onClick={decrease_btn}><IconContext.Provider value={{className: "color" }}><span><FaMinus/></span></IconContext.Provider></button></>} */}
    {!show && <><Link to='/cart'>Go to Bag</Link></>}
    </section>
  )
}
