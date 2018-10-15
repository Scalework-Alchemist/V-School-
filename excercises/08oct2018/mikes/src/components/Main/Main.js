import React from 'react'

import './Main.css'


const Main = props => (
     <div className='main'>
            <div>
              
                <h1>Hello Friend,</h1>
                <p> 
                    with this app i want to supply a bar pos for a fictional bar, which will be referred to as Cy-Bar.
                    Cy-Bar is an entertainment and social venue. Providing the envisioned future of san-toky-frisco,
                    what the future of food and entertainment. serverless but full of entertainers.

                    there is a basic layout of what the proposed project will look like just run npm start
                    obviously it is only dumb components in place at the momement. </p>
                <h4>//*mvp goal--- provide the interactive menu/POS with client and Admin authoriztaion.*//</h4>

                <p>there are several API's that i am interested in using, but for sake of simplicity and due to the nature of 
                of our time constrains i will only use one of three API's i need for the full product.
                //*list of API's*// //*if stared then it is NOT required for for MVP*//</p>
<ul>
    <li>*Square Connect         https://squareup.com/us/en/developers</li>
    <li>Nutrionix               https://developer.nutritionix.com/</li>
    <li>*Qr quagga              npm install quagga</li>
</ul>
            </div>
        </div>
)
export default Main;
