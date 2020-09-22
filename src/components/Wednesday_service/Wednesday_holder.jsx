import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchWednesday } from '../../Context/GlobalState';
import Wednesday_recieved from './Wednesday_recieved';
import style from './Wednesday_holder.module.css';
import unavailable from '../../Images/unavailable.png';


const Wednesday_holder = () => {

    const [wednesdayService, setWednesdayService] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setWednesdayService(await fetchWednesday());
            console.log(wednesdayService)
        }
        fetchAPI();
    }, []);

    const toggleState=()=>{

    }

    if(!wednesdayService.length){
        return <div className={style.unavailable}><h2>No service available yet</h2><img src={unavailable} /></div>
    }

    return (
        <div className={style.container}>
            <ul className={style.parent_list}>
                {wednesdayService.map((service) => (
                    <a >
                        <li key={service.id} className={style.list} onClick={()=>toggleState()} >{service.name}
                        <p className={style.uploadDate}>-{service.uploadDate}</p>
                        </li>
                        <div style={{width:'100%'}}>
                            <Wednesday_recieved toggleState={toggleState} value={service} />
                        </div>
                    </a>
                ))}
            </ul>
        </div>
    )
}

export default Wednesday_holder;