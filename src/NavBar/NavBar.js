import { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './NavBar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.svg';

function NavBar(){
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded); 
  };

  const handleClose = () => {
    setExpanded(false); 
  };

  const handleLinkClick = () => {
    setExpanded(false); 
  };
  const handleLogoClick = (event) => {
    if (event.target.classList.contains(styles.logo)) {
      event.stopPropagation();
    } else {
      handleToggle();
    }
  };
    return(
      <div>
      <>
        <Navbar
          expand="sm"
          className={styles.container}
        >
          <Container fluid>
            <Navbar.Brand
              href="#"
              className={styles.logo}
              onClick={handleLogoClick}
            >
              <img src={logo} alt='logo'/>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={handleToggle}
            />
            <Navbar.Offcanvas
              show={expanded}
              onHide={handleClose}
              data-bs-theme="dark"
              id="offcanvasNavbar"
              placement="top"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    onClick={handleLinkClick}
                    className={styles.item}
                  >
                    Who am I?
                  </Link>
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    onClick={handleLinkClick}
                    className={styles.item}
                  >
                    Projects
                  </Link>
                  <Link
                    to="contacts"
                    smooth={true}
                    duration={500}
                    onClick={handleLinkClick}
                    className={styles.item}
                  >
                    Contacts
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
export default NavBar;