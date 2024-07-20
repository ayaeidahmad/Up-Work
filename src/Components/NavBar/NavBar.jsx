import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun , faMoon } from '@fortawesome/free-solid-svg-icons'
// import { useEffect, useState } from 'react';
import './NavBar.css'
import { NavLink, Row } from 'react-bootstrap';
import logo from './../../assets/Images/upwork1.png'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const NavBar = () => {
    // const [lightMode, setLightModed] = useState(false)
    // useEffect(() => {
    //     if (lightMode) {
    //         document.body.classList.add('light-mode')
    //         document.body.classList.remove('dark-mode')
    //     }
    //     else {
    //         document.body.classList.add('light-mode')
    //         document.body.classList.remove('dark-mode')
    //     }
    // } , [lightMode])
    // const toggleMode = () => {
    //     setLightModed(!lightMode)
    // }
    return (
            <Row className='navRow'> 
            <Navbar expand="lg" className='navbar' >
            <Container>
                <Link to="/landingPage"><img className='navLogo' src={logo} alt="" /></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto  my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                </Nav>
                <Form className="d-flex">
                    <Button className='nav-btn navlogin me-2'><NavLink className='navlink' href="/Login">Login</NavLink></Button>
                    <Button className='nav-btn navsignup me-2'><NavLink className='navlink' href="/signup">Sign up</NavLink></Button>
                    {/* <Link className='sun-moon pt-1' onClick={toggleMode}> <FontAwesomeIcon icon={lightMode ? faMoon : faSun } className='nav-icon fs-2' /> </Link> */}
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </Row>
        );
}

export default NavBar