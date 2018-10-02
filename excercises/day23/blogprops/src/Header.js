import React from 'react'

import Menu from './Menu';


function Header(props){
   console.log(props.title)
    return(
        <div>
            <h1  right= {props.title}/>
            <Menu items={props.menu}/>
        </div>
    )
}

export default Header;