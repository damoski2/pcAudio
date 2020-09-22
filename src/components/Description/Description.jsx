import React, { useEffect } from 'react';
import style from './Description.module.css';
import img1 from '../../Images/body1.png';
import img2 from '../../Images/body2.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";


const Description = ({acctName}) => {

    console.log(acctName);

    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    })

    
    return (
        <section className={style.container}>
            <div className={style.row}>
                <div className={style.colimg} data-aos={'fade-right'}>
                    <img src={img1} />
                </div>
                <div className={style.colhead} data-aos={'fade-left'}>
                    <h1>Missed Out, listen audio</h1>
                    <p>Missed out on Any of our services be it sunday or weekly service?..Dont worry We got you covered. Welcome to Potter's Court audio webpage where you can listen to missed services</p>
                </div>
            </div>
        </section>
    )
}

export default Description