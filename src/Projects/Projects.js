import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import styles from './Projects.module.css';
import firstTab from '../img/experience/08.jpeg';
import secondTab from '../img/experience/09.jpeg';
import thirdTab from '../img/experience/10.jpeg';

function Projects(){

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className={styles.projects_main}>
        <div className={styles.container} id="projects">
            <h2 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                    >The most interesting <span>Projects</span></h2>
            <div className={styles.main}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="first" className={styles.tab}>Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second" className={styles.tab}>Tab 2</Nav.Link>
                    <Nav.Item>
                    <Nav.Link eventKey="third" className={styles.tab}>Tab 3</Nav.Link>
                    </Nav.Item>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={10}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <div className={styles.tab_container}>
                            <p>"Shoes Shop" - project,<br /> Poland, Wroclaw,Jan 2024</p>
                                <div className={styles.tab_box}>  
                                    <img src={firstTab} alt='site'/>
                                    <ul>
                                        <li>Was created during the studying in a "Can She Code" school.</li>
                                        <li>I've used here HTML/ CSS/ Rect/Redux Toolkit</li>
                                        <li>The app allows to choose any pair of shoes, add it in a cart, delete, filter items etc.</li>
                                    </ul>
                                    </div>
                                    <a href='https://statuesque-gnome-89f9c3.netlify.app/' target='_blank'> LOOK </a>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className={styles.tab_container}>
                            <p>"Bakery-shop" - project<br /> Poland, Wroclaw,Jan 2024</p>
                                <div className={styles.tab_box}>  
                                    <img src={secondTab} alt='site'/>
                                    <ul>
                                        <li>Was created during the studying in a "Can She Code" school.</li>
                                        <li>I've used here HTML/ CSS/ Rect/Redux Toolkit</li>
                                        <li> The app allows to choose any item from bakery, add it in a cart, delete, filter items etc.</li>
                                    </ul>
                                    </div>
                                    <a href='https://backery-uk.netlify.app/' target='_blank'> LOOK </a>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div className={styles.tab_container}>
                            <p>"Recipe Search" - project<br /> Poland, Wroclaw,Fab 2024</p>
                                <div className={styles.tab_box}>  
                                    <img src={thirdTab} alt='site'/>
                                    <ul>
                                        <li>Was created during the studying in a "Can She Code" school.</li>
                                        <li>I've used here HTML/ CSS/ Rect/Redux Toolkit</li>
                                        <li> The app allows to find any product from database,using API.</li>
                                    </ul>
                                    </div>
                                    <a href='https://deft-daifuku-695002.netlify.app/' target='_blank'>LOOK</a>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
            </div>
        </div>
        </div>
    )
}

export default Projects;