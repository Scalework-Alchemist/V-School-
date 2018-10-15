import React from 'react'

import './Header.css'
import Togglebutton from '../Toggle/Togglebutton'

const Header = props => (
      <div className='header'>
            <nav className="navi">
            <Togglebutton className="navi--item--1" click={props.sidebarClickHandler}/>  
            <div className="navi--item--2">logo</div>
            <div className="navi--item--3">Order</div>
            </nav>
        </div>
)

export default Header;