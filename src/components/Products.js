import React, { useState,useEffect } from 'react'
import data from '../components/data'
import { FaDollarSign } from 'react-icons/fa';
import Cartbtn from './Cartbtn';
import Rating from './Rating';
import { useGlobalContext } from '../context'


export default function Products() {

const [masterdata,setmasterdata]=useState(data)
const [activebtn,setactivebtn]=useState({'all':true,'most_new':false})
const [activesidebtn,setactivesidebtn]=useState({'All':true,'Gardening':false,'Plants':false,'Seeds':false})
const [inpvalue,setinpvalue]=useState(0)
const [search,setsearch]=useState('')
const { star_count } = useGlobalContext()



const sort_handle=(e)=>{
    // console.log(e.target.id)
    if(e.target.id==='most_new')
    {
        let tempdata=masterdata.filter((item)=>item.new_arrival===true? item :null)
        setmasterdata(tempdata)
        setactivebtn({...activebtn,'all':false,'most_new':true})
    }
    else{
        setmasterdata(data)
        setactivebtn({...activebtn,'all':true,'most_new':false})
        setactivesidebtn({'All':true,'Gardening':false,'Plants':false,'Seeds':false})
    }

}

const side_filter=(e)=>{
    let val1=e.target.id
    // masterdata=data;
    //setmasterdata(data)
    let tempdata=data;
     tempdata=tempdata.filter((item)=>item.category===val1? item :null)
    // console.log(masterdata)
    setmasterdata(tempdata)


    if(e.target.id==='Gardening'){
        // console.log('hello 456')
        setactivesidebtn({'All':false,'Gardening':true,'Plants':false,'Seeds':false})
    }
    else if(e.target.id==='Plants'){
        setactivesidebtn({'All':false,'Gardening':false,'Plants':true,'Seeds':false}) 
    }
    else{
        setactivesidebtn({'All':false,'Gardening':false,'Plants':false,'Seeds':true}) 
    }
  
    //     
    //     setactivesidebtn({'All':true,'Gardening':false,'Plants':false,'Seeds':false})
    // }
    // console.log(tempdata)
}


const price_range=(val)=>{
    // console.log(val)
    setinpvalue(val)
    let tempdata=data;
    tempdata=tempdata.filter((item)=>item.price<=val ?item:null)
    // console.log(tempdata)
    setmasterdata(tempdata)
}


useEffect(() => {
    const new_data=data.filter((item)=>{          
        if(item.rating>=star_count){
            return item
        }
      })
      setmasterdata(new_data)
  

}, [star_count])




useEffect(() => {
  //console.log(search)
  const new_data=data.filter((item)=>{
    const pattern =  new RegExp(search,'gi'); // correct way   
    if(pattern.test(item.title)){
        return item
    }
  })
  setmasterdata(new_data)
  
//   console.log(new_data)
}, [search])


const  handler=async(e)=>{
    if(e.target.value==='lowest'){
        const new_data=masterdata;
        new_data.sort((itm1,itm2)=>{
            return itm1.price-itm2.price
        })
        console.log('lowest executed')
         setmasterdata([...new_data])
    }
    else{   
        const new_data=masterdata;     
        new_data.sort((itm1,itm2)=>{
            return itm1.price-itm2.price
        })
        let new_data1=new_data.reverse()
        // console.log(new_data1)
        // console.log('highest executed')
         setmasterdata([...new_data1])
    }
    
}


  return (
    <section className='products'>
        <div className='filter-parent'>
         <div  className='filter'>
            {/* <h2>Filter</h2> */}
            <div>
            <div className='search'>
                <input type='text' value={search} placeholder='Search your Item' onChange={(e)=>setsearch(e.target.value)} />
            </div>
            {/* <div className='btn-setprice'>
            <button>Clear Filter</button>
            </div> */}
            </div>
            <div className='categories'>
            <h3>Filter by Categories</h3>
                <ul className='side-filter'>
                    <li><button className={ activesidebtn.All  && `side-filter-active`} id='All' onClick={(e)=>sort_handle(e)}>All</button></li>
                    <li><button className={ activesidebtn.Gardening  && `side-filter-active`} id='Gardening' onClick={(e)=>side_filter(e)}>Gardening</button></li>
                    <li><button className={ activesidebtn.Plants && `side-filter-active`} id='Plants' onClick={(e)=>side_filter(e)}>Plants</button></li>
                    <li><button className={ activesidebtn.Seeds  && `side-filter-active`} id='Seeds' onClick={(e)=>side_filter(e)}>Seeds</button></li>
                    {/* <li>Bulbs</li>
                    <li>Planters</li> */}
                </ul>
            </div>
            <div className='price'>
                <h3>Set Price</h3>
                {/* <label name='range'>Min</label> */}
                <input name='range' type ='range' min='0' max='1000' step='100'  value={inpvalue}  onChange={(e)=>price_range(e.target.value)}/>
                <div className='inp-value'>${inpvalue}</div>
            </div>
            <div className='rating'>
            <h3>Rating</h3>
            <Rating />
            </div>
            {/* <div className='btn-setprice'>
            <button>Clear Filter</button>
            </div> */}
        </div>
        </div>
        <div className='product-list'>
            {/* <div className='search'>
                <input type='text' value={search} placeholder='Search your Item' onChange={(e)=>setsearch(e.target.value)} />
            </div> */}

                <ul className='sort'>
                <h3>View By</h3>

                    <li className={activebtn.all && `selected`}><button id='all' onClick={(e)=>sort_handle(e)}>All</button></li>
                    <li className={activebtn.most_new && `selected`}><button id='most_new' onClick={(e)=>sort_handle(e)}>Most New</button></li>
                    <li><button id='popular' onClick={(e)=>sort_handle(e)}>Popular</button></li>
                    <li>
                        <select name="price" id="price" onChange={(e)=>handler(e)}>
                            <option value="highest" >Price Highest</option>
                            <option value="lowest">Price Lowest</option>
                        </select>
                    </li>
                    
                </ul>
                <span>
                  {masterdata.length} Product(s) Found
                </span>
                
                <div className='product-grid'>
                    {
                        masterdata.map((item)=>{
                            return (
                                <div className='item'>
                                <img src={item.img} className='img' />
                                <h4>{item.title}</h4>
                                <p>Price</p>
                                <div className='item-dtls'>
                                <span><FaDollarSign/>{item.price}</span>
                                {/* <button className='add-btn'>Add to Cart</button> */}
                                <Cartbtn item={item}/>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    </section>
  )
}
