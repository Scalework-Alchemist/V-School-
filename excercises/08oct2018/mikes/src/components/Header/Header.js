import React from 'react'

import './Header.css'
import Togglebutton from '../Toggle/Togglebutton'

const Header = props => (
      <div className='header'>
            <nav className="navi">
            <Togglebutton className="navi--item--1" click={props.sidebarClickHandler}/>  
            <div className="navi--item--2"></div>
            <div className="navi--item--3"><div className="IMAGE"><img src="./delicious-burger.svg" alt=""/></div></div>
            </nav>
        </div>
)

export default Header;