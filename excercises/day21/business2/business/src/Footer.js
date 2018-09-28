import React from 'react'

function Invoice({name,table,food,drinks,total}) {

    return (
        <div className="invoices">
            {name}<hr/>
            Table: {table} <hr/>
            Food:{food} <br/>
            Drinks:{drinks}
            <hr/>
            Total:{total}
            
        </div>
    )
}
function Footer(){

  
    const customers = [{
            name: "Dave",
            table: "6",
            food: ["fries", "pizza"].join(" "),
            drinks:['whisky',''].join(' '),
            total: "47.50"
        },
        {
            name: "james",
            table: "3",
            food: ["fries","pineapples", "pizza"].join(" "),
            drinks:['whisky',''].join(' '),
            total: "47.50"
        },
        {
            name: "kyle",
            table: "2",
            food: ["fries"].join(" "),
            drinks:['water'].join(' '),
            total: "47.50"
        },
        {
            name: "Mike",
            table: "9",
            food: ["fries", "pizza"].join(" "),
            drinks:['whisky',''].join(' '),
            total: "47.50"
        },
        {
            name: "kevin",
            table: "9",
            food: ["fries", "pizza"].join(" "),
            drinks:['whisky',''].join(' '),
            total: "47.50"
        }, 
        {
            name: "loren",
            table: "9",
            food: ["fries", "pizza"].join(" "),
            drinks:['whisky',''].join(' '),
            total: "47.50"
        }
    ]
    const customerComponents= customers.map(table => <Invoice {...table}/>)
    return(
        <footer className='footer'>
            {customerComponents}
        
        </footer>
    )
}

export default Footer;