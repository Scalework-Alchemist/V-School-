import React from 'react'
// import default from './RenderRappers';


// function RenderRappers(name){
//     return(
//         <p><h3>Name:</h3>{name}</p>
//     )
// }
// export default RenderRappers;

import NewRapper from './NewRapper';










export  default function RenderRappers({name, favFood, albums}) {
    return(
        <div className="rapperList">
        <p>Fire Rapper List</p>
        <ul>
                <li>
                    <p><h3>Name:</h3>{name}</p>
                    <p><h4>Fav Food:</h4>{favFood}</p>
                    <ul><h4>Albums:</h4><li>{albums}</li><hr/></ul>
                </li>

        </ul>
        </div>
    )
}



// placeRappers(Rapper){
//     this.setState(prevState => ({
//         RapperBank: [Rapper, ...prevState.RapperBank]
//     }))
// }
//}