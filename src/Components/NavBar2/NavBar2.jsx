import { Link } from 'react-router-dom'
import './NavBar2.css'
import LogoCompany from './../../assets/Images/logo.svg'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
const NavBar2 = () => {
    return (
        <section className="dash-navbar">
            <Container className='dash'>
                <img src={LogoCompany} alt="LogoCompany" className='logo'/>
                <Link to="/jobs"  className='jobs'>Jobs</Link>
                <Link to="/articles" className='article'>Article</Link>
                <Link to="/cvs"  className='cvs'>CVs</Link>
                <p className='company-name'>Focal X Agency</p>
            </Container>
        </section>
    )
}

export default NavBar2