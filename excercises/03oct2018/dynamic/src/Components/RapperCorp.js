import React from 'react'

import RenderRappers from './RenderRappers';

function RapperCorp({ rapper }){
const rapperComponents = rapper.map(rapper=> <RenderRappers key={rapper.id}{...RenderRappers} />)
    return(
        <ul>
            {rapperComponents}
        </ul>
    )
}
export default RapperCorp;