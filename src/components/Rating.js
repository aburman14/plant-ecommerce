import React from 'react'
import { useEffect,useState } from "react";
import { FaStar,FaRegStar } from "react-icons/fa";
import { useGlobalContext } from '../context'


const Rating = () => {        
      // const [count,setcount]=useState(0)
      const [show,setshow]=useState(true)
      const arr=[1,2,3,4,5]
      const { star_count,setstarcount } = useGlobalContext()

    
     const handlesubmit=(id)=>{
      console.log(id)
      setstarcount(id+1)    
     }
    
      return (
        <div className="container">          
          { show ===true ?<div class="star-container">               
                    {
                        arr.map((elem,id)=>{
                          return (
                            <button class="star-btn"  onClick={()=>handlesubmit(id)}>
                            {elem<=star_count? <span className='color'><FaStar/></span> :<FaRegStar/>}
                        </button>
                          )
                        })
                    }
          </div>:<span class="feedback">Thank you For Feedback !!</span>}
        </div>
      );   
}

export default Rating