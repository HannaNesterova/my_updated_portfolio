import Experience from '../Experiance/Experience';
import MainPage from '../MainPage/MainPage';
import NavBar from '../NavBar/NavBar';
import Skills from '../Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Feedbacks from '../Feedbacks/Feedbacks';
import Contact from '../Contact/Contact';
import LanButton from '../LanButton/LanButton';

function HomePage(){
    return(
        <div>
            <LanButton />
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