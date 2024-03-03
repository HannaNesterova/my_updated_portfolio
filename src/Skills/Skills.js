import styles from '../Skills/Skills.module.css';
import { dataSkills } from '../data/dataSkills';

function Skills(){
    return(
        <div className={styles.container}>
            <h2>My <span>Skills</span></h2>
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