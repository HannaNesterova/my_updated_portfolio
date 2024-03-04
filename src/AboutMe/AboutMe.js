import { useEffect } from 'react';
import styles from './AboutMe.module.css';
import hero from '../img/hero2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe(){
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
                        About <span>Me</span></h2>
                    <div className={styles.main}>
                    <div className={styles.hero_main}>
                        <img src={hero} alt='hero'/>
                    </div>
                    <div className={styles.about_me_text}>
                        <p>I was born in Ukraine and lived there until a spring 2022. 
                            Then I moved to Poland. 
                            I started studying front-end development in the most difficult period of my life,
                             when I lost my country and my home, and this study not only saved me, 
                             but absorbed me completely, while studying, I seemed to close myself off from the 
                             outside world and get into a wonderful world, like 'Alice in Wonderland', 
                             who could create something unsurpassed from unknown codes and hashes and immediately see it 
                             on her screen. </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;