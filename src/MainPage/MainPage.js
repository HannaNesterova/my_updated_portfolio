import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../MainPage/MainPage.module.css';
import hero from '../img/hero.png';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function MainPage(){
     const {i18n, t} = useTranslation();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className={styles.container}>
            <div className={styles.main_container}>
                <div className={styles.main_text}>
                    <div className={styles.main_pretitle}>
                        <h1>{t('hello')} <span>{t('my_name')}</span></h1>
                    </div>
                    <div className={styles.main_title}>
                        <h2>Frontend <span> Developer </span></h2>
                    </div>
                    <div className={styles.main_title}>
                        <p>{t('combine')}</p>
                    </div>
                        <div className={styles.main_buttons}>
                            <a href='https://www.instagram.com/hanna_nesterova/?igshid=MmJiY2I4NDBkZg%3D%3D' target='_blank' 
                                data-aos="fade-up"
                                data-aos-duration="3000"><FaInstagram /></a>
                            <a href='https://github.com/HannaNesterova' target='_blank'
                                data-aos="fade-up"
                                data-aos-duration="2500"><FaGithub /></a>
                            <a href='https://www.facebook.com/anytka.marchyk' target='_blank'
                                data-aos="fade-up"
                                data-aos-duration="2000"><FaFacebook /></a>
                            <a href='https://www.linkedin.com/in/hanna-nesterova-7b02a5269/' target='_blank'
                                data-aos="fade-up"
                                data-aos-duration="1500"><FaLinkedin /></a>
                        </div>
                    </div>


                <div className={styles.main_img}>
                    <img src={hero}alt='hero' className={styles.hero}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage;