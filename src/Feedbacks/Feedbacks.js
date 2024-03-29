import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Feedbacks.module.css';
import { dataFeedbacks } from '../data/dataFeedbacks';
import { useTranslation } from 'react-i18next';

function Feedbacks(){
    const {i18n, t} = useTranslation();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    return(
        <div>
            <div className={styles.projects_main}>
                <div className={styles.container}>
                    <h2 data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                    {t('education')} & <span>{t('skills')}</span></h2>
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