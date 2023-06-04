import React, { useState, useContext, useEffect } from 'react'



const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [totalamount,totalsetamount]=useState(0)
    const [cartitems,setcartitems]=useState([])
    const [display,setdisplay]=useState(true)
    const [sidebardisplay,setsidedisplay]=useState(false)
    const [star_count,setstarcount]=useState(0)

  return (
    <AppContext.Provider value={{ totalamount,totalsetamount,cartitems,setcartitems,display,setdisplay,sidebardisplay,setsidedisplay,star_count,setstarcount}}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }