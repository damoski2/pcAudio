import React, { Component } from 'react'
import carousel1 from '../../Images/carousel1.jpg';
import carousel2 from '../../Images/carousel2.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Carousel.module.css';

export default class Carousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        const photos = [
            {
                src: carousel1,
            },
            {
                src: carousel2,
            }
        ]

        return (
            <div className={style}>
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return (
                            <div className={style.carousel}>
                                <img src={photo.src} />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

