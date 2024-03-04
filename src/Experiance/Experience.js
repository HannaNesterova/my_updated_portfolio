import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Experience.module.css';
import { dataExperience } from '../data/dataExperience';

function Experience(){
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return(
        <div className={styles.experience_container}>
            <div className={styles.container}>
                <h2>My <span>Experience</span></h2>
                    <Slider {...settings}>
                        {dataExperience.map((item, index) => (
                            <div key={index} className={styles.mockup}>
                                <img className={styles.img} src={item.img} alt='img' />
                                <p>I have used here : {item.title}</p>
                                <a href={item.link} target='_blank'>Look</a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
    )
}

export default Experience;
