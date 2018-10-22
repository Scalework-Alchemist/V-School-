import React from 'react'

//components
import './Togglebutton.css';
import Button from '@material-ui/core/Button';


const Togglebutton = props => (
  <Button className="Toggle--button" onClick={props.click} variant="contained" color="inherit">
    <div className="toggle--button--x">
      <h1>X</h1>
      </div>
  </Button>
  
);

export default Togglebutton;
