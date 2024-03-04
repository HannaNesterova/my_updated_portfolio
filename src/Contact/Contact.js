import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from './Contact.module.css';

function Contact(){

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className={styles.projects_main}>
        <div className={styles.container} id="contacts">
            <h2 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                    My <span>Contacts</span></h2>
            <div className={styles.main}>
            <div className={styles.main_buttons}>
                <a href='https://www.instagram.com/hanna_nesterova/?igshid=MmJiY2I4NDBkZg%3D%3D' target='_blank'><FaInstagram /></a>
                <a href='https://github.com/HannaNesterova' target='_blank'><FaGithub /></a>
                <a href='https://www.facebook.com/anytka.marchyk' target='_blank'><FaFacebook /></a>
                <a href='https://www.linkedin.com/in/hanna-nesterova-7b02a5269/' target='_blank'><FaLinkedin /></a>
            </div>
                <div>
                    <h3>Let’s <span>talk</span> for Something special.</h3>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Contact;