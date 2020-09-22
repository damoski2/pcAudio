import React, { useState, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import style from './Sunday_recieved.module.css';
import pastor_img from '../../Images/pastor_img.jpg';
import pc_choir from '../../Images/pc_choir.jpg';
import GuestPastor from '../../Images/GuestPastor.png';


const Sunday_recieved = ({ value }, toggleState) => {
    const player1 = useRef();
    const player2 = useRef();
    const player3 = useRef();

    const { name, lastUpdate, link, ministration, praise_and_worship, message, ministration_src, praise_and_worship_src, message_src, benediction } = value;

 

    //Set pastor image
    const pastorImage = message=="Pastor akinola"? pastor_img:GuestPastor


    //console.log(value)
    const handleToggle = (e) => {
        setDisplay(!display)
    }
    const [display, setDisplay] = useState(false);
    //console.log(name, lastUpdate, link, ministration, praise_and_worship, message, benediction, ministration_src, praise_and_worship_src, message_src);

    const playaudiofunction = (para) => {
        para.current.audio.current.play();
    };

    const pauseaudiofunction = (para) => {
        para.current.audio.current.pause();
    };

    //card_variables

    const store1 = (
        message ? (
            <div className={style.col_card}>
                <img src={pastorImage} />
                <h1>Message by {message}</h1>
                <p><span className={style.last_update}>last Updated: </span>{lastUpdate}</p>
                <AudioPlayer
                    src={message_src}
                    onPlay={e => console.log("onPlay")}
                    onPause={e => console.log("onPlay")}
                    ref={player1}
                />
                <button className={style.btn1} onClick={() => playaudiofunction(player1)}>play</button>
                <span className={style.aware}><small><em>Use these play/pause buttons</em></small></span>
                <button className={style.btn2} onClick={() => pauseaudiofunction(player1)}>pause </button>
            </div>
        ) : (
                <div className={style.card}>
                    <h1>No message for this service</h1>
                </div>
            )
    );

    const store2 = (
        ministration ? (
            <div className={style.col_card}>
                <img src={pc_choir} />
                <h1>Ministering - {ministration}</h1>
                <p><span className={style.last_update}>last Updated: </span>{lastUpdate}</p>
                <AudioPlayer
                    src={ministration_src}
                    onPlay={e => console.log("onPlay")}
                    onPause={e => console.log("onPlay")}
                    ref={player2}
                />
                <button className={style.btn1} onClick={() => playaudiofunction(player2)}>play</button>
                <span className={style.aware}><small><em>Use these play/pause buttons</em></small></span>
                <button className={style.btn2} onClick={() => pauseaudiofunction(player2)}>pause </button>
            </div>
        ) : (
                <div className={style.card}>
                    <h1>No ministration for this service</h1>
                </div>
            )
    )

    const store3 = (
        praise_and_worship ? (
            <div className={style.col_card}>
                <img src={pc_choir} />
                <h1>Praise and Worship - {praise_and_worship}</h1>
                <p><span className={style.last_update}>last Updated: </span>{lastUpdate}</p>
                <AudioPlayer
                    src={praise_and_worship_src}
                    onPlay={e => console.log("onPlay")}
                    onPause={e => console.log("onPlay")}
                    ref={player3}
                />
                <button className={style.btn1} onClick={() => playaudiofunction(player3)}>play</button>
                <span className={style.aware}><small><em>Use these play/pause buttons</em></small></span>
                <button className={style.btn2} onClick={() => pauseaudiofunction(player3)}>pause </button>
            </div>
        ) : (
                <div className={style.card}>
                    <h1>No Praise and worship for this service</h1>
                </div>
            )
    )

    const show = (
        display ? (
            <div className={style.container}>
                <div className={style.Row}>
                    {store1}
                    {store2}
                    {store3}
                </div>
                <button className={style.close} onClick={() => handleToggle()}>close</button>
            </div>
        ) : null
    );

    const hide = (
        !display ? (
            <button className={style.open} onClick={() => handleToggle()}>open</button>
        ) : null
    );

    return (
        <div className={style.container}>
            {show}
            {hide}
        </div>
    )

}

export default Sunday_recieved
