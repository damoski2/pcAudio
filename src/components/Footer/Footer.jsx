import React from 'react';
import '../FontawesomeIcons/FontawesomeIcons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTwitter,faFacebook,faGithub,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';
import style from './Footer.module.css';

const Footer=()=>{
    return(
        <div className={style.container}>
            <div className={style.detail}>
                <p>Created @2020-Potter's Court Media</p>
            </div>
            <div className={style.social_links}>
                <a href="https://web.facebook.com/oyindamola.akogun" className={style.facebook}><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://twitter.com/AkogunOyindamo3"  className={style.twitter}><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.instagram.com/oyindamolaakogun/"  className={style.instagram}><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://github.com/damoski2"  className={style.github}><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.youtube.com/channel/UCkAf-zecPdNHZE3o3faf4Tg?view_as=subscriber"  className={style.youtube}><FontAwesomeIcon icon={faYoutube} /></a>
                
            </div>
        </div>
    )
}

export default Footer