import { useEffect } from 'react';
import styles from './AboutMe.module.css';
import hero from '../img/hero2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';


function AboutMe(){
    const {i18n, t} = useTranslation();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div>
            <div className={styles.about_me_container}>
                <div className={styles.container} id="about">
                    <h2 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                        {t('about')} <span>{t('me')}</span></h2>
                    <div className={styles.main}>
                    <div className={styles.hero_main}>
                        <img src={hero} alt='hero'/>
                    </div>
                    <div className={styles.about_me_text}>
                        <p>{t('about_me')} </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;