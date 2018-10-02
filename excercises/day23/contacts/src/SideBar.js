import React from 'react'

function SideBar(props){
    return(
        <nav>
            <menuItems links={props.menuItems}/>
        </nav>
    )
}

export default SideBar;