import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSunday } from '../../Context/GlobalState';
import Sunday_recieved from './Sunday_recieved';
import style from './Sunday_holder.module.css';


const Sunday_holder = () => {

    const [sundayService, setSundayService] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setSundayService(await fetchSunday());
            console.log(sundayService)
        }
        fetchAPI();
    },[]);

    if(!sundayService){
        return <div>Service not retrieved From server</div>
    } 

    return (
        <div className={style.container}>
            <ul className={style.parent_list}>
                {sundayService.map((service) => (
                    <a>
                        <li key={service.id} className={style.list}>{service.name}
                            <p className={style.uploadDate}>-{service.uploadDate}</p>
                        </li>
                        <div style={{width:'100%'}}>
                            <Sunday_recieved value={service} />
                        </div>
                    </a>
                ))}
            </ul>
        </div>
    )
}

export default Sunday_holder;