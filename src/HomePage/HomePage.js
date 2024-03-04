import Experience from '../Experiance/Experience';
import MainPage from '../MainPage/MainPage';
import NavBar from '../NavBar/NavBar';
import Skills from '../Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';
import styles from './HomePage.module.css'

function HomePage(){
    return(
        <div>
            <NavBar />
            <MainPage />
            <Skills />
            <Experience />
            <AboutMe />
        </div>
    )
}

export default HomePage;