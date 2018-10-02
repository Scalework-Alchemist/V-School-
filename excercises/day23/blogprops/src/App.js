import React from 'react'

// components
import Header from './Header'


const data = {
    header:{
        title:"Start Bootstrap",
        menu:[
            'Home',
            "About",
            'Sample Post',
            'Contact'
        ]
    },
    splash:{
        title:'Clean Blog', Body:'A Blog Theme By Start Bootstrap'
    },
    main:{
        blogPost:[
            {title:'Man must explore, and this is exploration at its greatest', body:'Problems look mighty small from 150 miles up',author:'Start BootStrap'},
            {title:"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",body:'',author:'Start BootStrap'},
            {title:'Science has not yet mastered prophecy',body:"We predict too much for the next year and yet far too little for the next ten.",author:'Start BootStrap'},
            {title:'Failure is not an option',body:"Many say exploration is part of our destiny, but it’s actually our duty to future generations." ,author:'Start BootStrap'}
            // {title:'',body:  ,author:'Start BootStrap'}
        ]
    },
    footer:{

    }
}

function App(){
    console.log(data.header)
    return(
        <Header data={data.header} />
    )
}
export default App;