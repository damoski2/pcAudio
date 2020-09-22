import React, {useContext,useState} from 'react'
import style from './Navbar.module.css';
import pc_logo from '../../Images/pc_logo.jpg';
import DrawerToggleButton from './Navdrawer/DrawerToggleButton';
import { GlobalContext } from '../../Context/GlobalState';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCross, faInfo } from '@fortawesome/free-solid-svg-icons';


const Navbar = (props) => {

    const [bg,setbg] = useState(false);

    const background=()=>{
        window.pageYOffset > 400? setbg(true):setbg(false);
    }
    window.addEventListener('scroll',background);

    return (
        <header className={style.container}>
            <nav style={{backgroundColor: bg? 'rgba(22,52,255,0.7)':'transparent' }} className={style.nav}>
                <div className={style.outerdiv}>
                    <div className={style.toggle}>
                        <DrawerToggleButton click={props.drawerToggleOpen} />
                    </div>
                    <a href="/">
                    <img src={pc_logo} className={style.logo} />
                    <h1>PC audio</h1>
                    </a>   
                </div>
                <ul>
                    <li><a href="#about">About{' '}<FontAwesomeIcon style={{color:'#1ddaef'}} icon={faInfo} /></a></li>
                    <li><a href="#sunday_S">Sunday services{' '} <FontAwesomeIcon style={{color:'#d6ca4a'}} icon={faCross} /></a></li>
                    <li><a href="#wednesday_S">Wednesday services{' '} <FontAwesomeIcon style={{color:'#d6ca4a'}} icon={faCross} /></a></li>
                </ul>
                <input type="submit" value="Log Out" onClick={()=>props.handleLogout()} className={style.log_out} />
            </nav>
        </header>
    )
}



export default Navbar