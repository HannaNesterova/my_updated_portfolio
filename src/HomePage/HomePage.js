import MainPage from '../MainPage/MainPage';
import NavBar from '../NavBar/NavBar';
import Skills from '../Skills/Skills';
import styles from './HomePage.module.css'

function HomePage(){
    return(
        <div>
            <NavBar />
            <MainPage />
            <Skills />
        </div>
    )
}

export default HomePage;