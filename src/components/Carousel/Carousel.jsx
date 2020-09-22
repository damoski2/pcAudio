import React from 'react';
import style from './Carousel.module.css';

const Carousel = () => {
    return (
        <section className={style.container}>
            <div className={style.carousel}>
                <div className={style.info}>
                    <h1>Potter's Court Audio</h1>
                    <p>"For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek."<span>-Romans 1:16</span></p>
                </div>
            </div>
        </section>
    )
}

export default Carousel
