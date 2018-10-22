import React from 'react'
import {Link} from 'react-router-dom'

import './Sidebar.css'
import Loader from '../Loader/Loader';


const Sidebar = props => {
 
  const handleSelect = (e)=>{
    // console.log(e.target.value.toString())
    props.getFlavor(e.target.value)
  }

  let sidebarClasses = 'aside';
  if (props.show) {
      sidebarClasses ='aside open';
    
  }

  return(
  <nav className={sidebarClasses} >
        <h1>Menu</h1>
        <form className="dropdown_menu">
        <label >
          Flavor:
          <select name="flavorSelect" onChange={handleSelect}>
            <Loader/>
          </select>
        </label>
        </form>
        
  </nav>  
  )
};

export default Sidebar;