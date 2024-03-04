import styles from '../MainPage/MainPage.module.css';
import hero from '../img/hero.png';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function MainPage(){
    return(
        <div className={styles.container}>
            <div className={styles.main_container}>
                <div className={styles.main_text}>
                    <div className={styles.main_pretitle}>
                        <h1>Hello I’m <span>Hanna Nesterova</span></h1>
                    </div>
                    <div className={styles.main_title}>
                        <h2>Frontend <span> Developer </span></h2>
                    </div>
                    <div className={styles.main_title}>
                        <p>I'm passionate to combine design and technical knowledge.</p>
                    </div>
                        <div className={styles.main_buttons}>
                            <a href='https://www.instagram.com/hanna_nesterova/?igshid=MmJiY2I4NDBkZg%3D%3D' target='_blank'><FaInstagram /></a>
                            <a href='https://github.com/HannaNesterova' target='_blank'><FaGithub /></a>
                            <a href='https://www.facebook.com/anytka.marchyk' target='_blank'><FaFacebook /></a>
                            <a href='https://www.linkedin.com/in/hanna-nesterova-7b02a5269/' target='_blank'><FaLinkedin /></a>
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