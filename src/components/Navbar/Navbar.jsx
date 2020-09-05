import React from 'react'
import style from './Navbar.module.css';
import pc_logo from '../../Images/pc_logo.jpg';

const Navbar = () => {
    return (
        <header className={style.container}>
            <nav className={style.nav}>
                <div>
                <img src={pc_logo} className={style.logo} />
                    <h1>PC audio</h1>
                </div>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Sunday services</a></li>
                    <li><a href="#">Wednesday services</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar