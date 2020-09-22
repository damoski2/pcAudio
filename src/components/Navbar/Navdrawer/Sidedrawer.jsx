import React, {useContext} from 'react';
import './actualsidedrawer.css';
import pc_logo from '../../../Images/pc_logo.jpg';
import { GlobalContext } from '../../../Context/GlobalState';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCross, faInfo } from '@fortawesome/free-solid-svg-icons';


const sideDrawer = (props) => {

    //Context api doesn't want to render the global state because of React hooks law(get it lol)..will fix bug later

    let drawerclass = 'sidedrawer'
    if (props.show) {
        drawerclass = 'sidedrawer open';
    }

    return (
        <nav className={drawerclass}>
            <ul>
                <li><a href="#about">{' '}<FontAwesomeIcon style={{color:'#1ddaef'}} icon={faInfo} /> About </a></li>
                <li><a href="#sunday_S">{' '} <FontAwesomeIcon style={{color:'#d6ca4a'}} icon={faCross} /> Sunday services </a></li>
                <li><a href="#wednesday_S">{' '} <FontAwesomeIcon style={{color:'#d6ca4a'}} icon={faCross} /> Wednesday services </a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer



 