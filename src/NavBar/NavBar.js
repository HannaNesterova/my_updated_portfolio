import { useState } from 'react';
import styles from './NavBar.module.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.svg';

function NavBar(){
    const [isMenuOpen, setMenuOpen] = useState(false);


    return(
        <div>
    <>
    {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} className={styles.container}>
            <Container fluid>
              <Navbar.Brand href="#" className={styles.logo}>
                <img src={logo} alt='logo'/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
              <Navbar.Offcanvas
                data-bs-theme="dark"
                className={`${styles.offcanvas} ${isMenuOpen ? 'offcanvas-show' : ''}`}
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="top"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1" className={styles.item}>Who am I?</Nav.Link>
                    <Nav.Link href="#action1" className={styles.item}>Projects</Nav.Link>
                    <Nav.Link href="#action1" className={styles.item}>Contacts</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </div>
    )
}

export default NavBar;