import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../Skills/Skills.module.css';
import { dataSkills } from '../data/dataSkills';

function Skills(){
        useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className={styles.container}>
            <h2  data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    >My <span>Skills</span></h2>
            <div className={styles.skills_container}>
                {dataSkills.map((item, index) => (
                    <div key={index} className={styles.skill}>
                       <div className={styles.icon}> {item.img} </div>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;