import React from 'react';
import style from './WelcomeHead.module.css';

 const WelcomeHead = ({acctName}) => {
    return (
        <>
            <h1 className={style.heading}>Welcome <span>{acctName}</span></h1> 
        </>
    )
}

export default WelcomeHead
