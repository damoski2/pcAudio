import React from 'react';
import './Backdrop.css';

const Backdrop = props=>(
    <div className="backdrop" onClick={props.drawerToggleClose}></div>
)

export default Backdrop