import React from 'react'
function Nav(){
    return(
        <nav> 
            <div className="logoHolder">
                
            </div>
            <div className="searchHolder">
                <input type="text" name="seacrh" id="seek" placeholder= "Search"/>
            </div>
            <div className="three">
                <a href="./Drinks">Drinks</a>
                <br/>
                <a href="./Food">Food</a>
                <br/>
                <a href="./Customers">Customer</a>                
            </div>
        </nav>
    )
}
export default Nav;