import React, {useContext} from 'react';
import './Sidedrawer.css';
import { GlobalContext } from '../../../Context/GlobalState';


const DrawerToggleButton = props =>{

    const { NavdrawerState, WednesdayAudios, SundayAudios } = useContext(GlobalContext);
    console.log(NavdrawerState, WednesdayAudios, SundayAudios);

    return (
        <button onClick={props.click} className="togglebtn">
            <div className="togglebtn_line" />
            <div className="togglebtn_line" />
            <div className="togglebtn_line" />
        </button>
    );
}

export default DrawerToggleButton