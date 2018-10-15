import React from 'react'

//components
import './Togglebutton.css';
  


const Togglebutton = props => (
  <button className="Toggle--button" onClick={props.click}>
    <div className="toggle--button--x">
      <h1>X</h1>
      </div>
  </button>
  
);

export default Togglebutton;
