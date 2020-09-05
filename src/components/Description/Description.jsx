import React from 'react';
import style from './Description.module.css';
import img1 from '../../Images/body1.jpg';
import img2 from '../../Images/body2.jpg';

const Description = () => {
    return (
        <section className={style.container}>
            <div className={style.row}>
                <div className={style.colimg}>
                    <img src={img1} />
                </div>
                <div className={style.colhead}>
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt fugiat culpa animi ex impedit facilis possimus sapiente id esse? Necessitatibus.</h1>
                </div>
            </div>
        </section>
    )
}

export default Description