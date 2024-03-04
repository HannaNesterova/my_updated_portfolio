import Experience from '../Experiance/Experience';
import MainPage from '../MainPage/MainPage';
import NavBar from '../NavBar/NavBar';
import Skills from '../Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';
import styles from './HomePage.module.css'
import Projects from '../Projects/Projects';
import Feedbacks from '../Feedbacks/Feedbacks';
import Contact from '../Contact/Contact';

function HomePage(){
    return(
        <div>
            <NavBar />
            <MainPage />
            <Skills />
            <Experience />
            <AboutMe />
            <Projects />
            <Feedbacks />
            <Contact />
        </div>
    )
}

export default HomePage;