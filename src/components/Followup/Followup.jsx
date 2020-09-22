import React, { useEffect } from 'react';
import style from './Followup.module.css';
import connect_img from '../../Images/Connect.png';
import '../FontawesomeIcons/FontawesomeIcons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faGithub, faInstagram, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import "aos/dist/aos.css";

const Followup = () => {

    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    })

    return (
        <section className={style.container}>
            <div className={style.row}>
                <img className={style.image} src={connect_img} data-aos={'fade-right'} />
                <div className={style.connect_details} data-aos={'fade-left'}>
                    <h1>Connect With us</h1>
                    <p>Connect with us through our social media pages, Dont forget to follow us too</p>
                    <div className={style.social_links}>
                        <a href="https://www.facebook.com/rccgpotterscourt/" className={style.facebook}><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://twitter.com/dpotterscourt?lang=bg" className={style.twitter}><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.instagram.com/rccgpotterscourt/?hl=en" className={style.instagram}><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="potterscourtrccg@gmail.com" className={style.envelope}><FontAwesomeIcon icon={faEnvelope} /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Followup
