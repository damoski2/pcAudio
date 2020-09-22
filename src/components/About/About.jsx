import React from 'react';
import style from './About.module.css';
import ScrollArrow from '../ScrollToTop/ScrollArrow';

const About = () => {
    return (
        <section className={style.about}>
            <div className={style.container}>
                <h1 className={style.main_head}>This is about page</h1>
                <div className={style.about_body}>
                    <p>Potter's Court the new Global uprising Youth church for building excellent and brilliant minds Audio Webapp for missed out Service or service that needs to be reheard.</p>
                </div>
                <div className={style.extra}>
                    <div className={style.version}>
                        <h1>Version</h1>
                        <p>1.0.1</p>
                    </div>
                    <div className={style.creator}>
                        <h1>Released By:</h1>
                        <p>Potter's Court Media Team</p>
                    </div>
                </div>
                <ScrollArrow />
            </div>
        </section>
    )
}
export default About
