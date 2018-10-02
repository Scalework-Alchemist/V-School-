import React from 'react'

import SideBar from './SideBar';
import Main from './Main';
function Section(props){
    return(
        <Section>
            <SideBar menuItems={props.sidebar.menuItems}/>
            <Main title= {props.main.title} blogPost={props.main.blogPost}/>
        </Section>
    )
}
export default Section;