import React from 'react'

import {Link, Switch, Route} from 'react-router-dom'
import servicesList from "./servicesList.json"
import SideBar from './SideBar'


export default function Services(){
    return(
        <div>
            <p>Services</p>
            {servicesList.map(function(indService){
                return <li>{indService.name} - {indService.id}</li>
            })
            }
        </div>
    )
}