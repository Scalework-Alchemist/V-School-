import React from 'react'
import {Link} from 'react-router-dom'

import './Sidebar.css'

const Sidebar = props => {
  let sidebarClasses = 'aside';
  if (props.show) {
    sidebarClasses ='aside open';
    
  }
  return(
  <nav className={sidebarClasses} >
        <h1>Menu</h1>
        <ul>
            <li><a href="">Profile</a></li>
            <Link to="/Small_Plates">Small Plates</Link>
            <li><a href="">Burgers and Sandwichs</a></li>
            <li><a href="">Sweets</a></li>
            <li><a href="">Drinks</a></li>
        </ul>
  </nav>  
  )
};

export default Sidebar;













// export default function Sidebar(){
//     return(
//         <div className='aside'>
//         <h1>Sidebar</h1>
//             <p>this is a closing drawer</p>
//             <div className="aside--background"></div>
//         </div>
//     )
// }