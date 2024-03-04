import styles from './Feedbacks.module.css';
import { dataFeedbacks } from '../data/dataFeedbacks';

function Feedbacks(){
    return(
        <div>
            <div className={styles.projects_main}>
                <div className={styles.container}>
                    <h2>Education & <span>Skills</span></h2>
                    <div className={styles.main}>
                        {dataFeedbacks.map((item, index) => (
                            <div key={index}className={styles.education_container}>
                                <h6>{item.name}</h6>
                                <p>{item.place}</p>
                                <h6>{item.text}</h6>
                                <p>{item.year}</p>
                                <div className={styles.certificate}>
                                    <a href={item.link} target='_blank'>
                                        <img src={item.img} alt='certificate' />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feedbacks;