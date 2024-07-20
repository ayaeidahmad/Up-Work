import { Container , Row , Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn , faTwitter  , faFacebookF , faBehance  } from '@fortawesome/free-brands-svg-icons'
import logo from './../../assets/Images/upwork1.png'
import './Footer.css'
import { useRef } from 'react'

const Footer = () => {
    const sectionRef = useRef(null)
    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({behavior:'smooth'})
    }
    return (
        <footer className="pt-3">
            <Container>
                <Row>
                    <Col lg={3} md={6} sm={12}> 
                        <img className='footerLogo' src={logo} alt="logo" />
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <ul className='list list1'>
                            <li className=' fs-3 fw-bold'>Further</li>
                            <li className='item'>Home</li>
                            <li className='item' onClick={scrollToSection}>About Company</li>
                            <li className='item'>Who Are We</li>
                            <li className='item'>Join Us</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <ul className='list list2'>
                            <li className=' fs-3 fw-bold'>Copanies</li>
                            <li className='item'>IRAM</li>
                            <li className='item'>Code95</li>
                            <li className='item'>Vica</li>
                            <li className='item'>Focal X Agency</li>
                            <li className='item'>INFO Strategic</li>
                            <li className='item'>Idea To Life</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <p className='fs-3 fw-bold para-social'>Social</p>
                        <div className="social">
                            <a className="facebook icon">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a className="linkedin icon">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a className="twitter icon">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="behance icon">
                                <FontAwesomeIcon icon={faBehance} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer