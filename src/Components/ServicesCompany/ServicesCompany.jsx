import { Col, Container , Row } from 'react-bootstrap'
import './ServicesCompany.css'

// let row1= {
//             {
//                 id:1 ,
//                 title: "Branding" ,
//                 about: "The brand is hope,it is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing"
//             } , 
//             {
//                 id:2 ,
//                 title: "Marketing" ,
//                 about: "Talk to your customers and tell them about you and your company’s story through us the way you want"
//             } ,
//             {
//                 id:3 ,
//                 title: "Web Development" ,
//             }
//         }  
//         row2: [
//                 {
//                 id:4 ,
//                 title: "Branding" ,
//                 about: "The brand is hope,it is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing"
//                 } , 
//                 {
//                     id:5 ,
//                     title: "Marketing" ,
//                     about: "Talk to your customers and tell them about you and your company’s story through us the way you want"
//                 } ,
//                 {
//                     id:6 ,
//                     title: "Web Development" ,
//                 }
//             ]
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const ServicesCompany = ({title , brand1 , brand2 ,brand3 ,brand4 ,brand5 ,brand6 ,b1 , b2 , b3 , b4 ,b5 ,b6 , l1 , l2 , l3 , l4 , l5 ,l6}) => {
    useEffect (() => {
        Aos.init({duration : 2000 })
    }, [])
    return (
    <section className='srvices-company'>
    <h2 className='title-Section'>{title}</h2>
    <Container>
        <Row className='mb-5 mt-5'>
            <Col className='col1 column' lg={4} md={4} sm={12} data-aos="fade-down">
                <div className="card1">
                    <div className="card-inner">
                        <div className="card-front">
                            <img style={{ width: "150px"}} src={b1} alt="" />
                            <p>{brand1}</p>
                        </div>
                        <div className="card-back d-flex justify-content-center align-items-center">
                            <p style={{fontSize: "16px", color:"white"}}>{l1}</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col className='col2 column' lg={4} md={4} sm={12} data-aos="fade-down">
                <div className="card2">
                    <div className="card-inner">
                            <div className="card-front">
                                <img style={{ width: "150px"}} src={b2} alt="" />
                                <p>{brand2}</p>
                            </div>
                            <div className="card-back d-flex justify-content-center align-items-center">
                                <p style={{fontSize: "16px", color:"white"}}>{l1}</p>
                            </div>
                        </div>
                </div>
            </Col>
            <Col className='col3 column' lg={4} md={4} sm={12} data-aos="fade-down">
                <div className="card3">
                    <div className="card-inner">
                            <div className="card-front">
                                <img style={{ width: "100px"}} src={b3} alt="" />
                                <p>{brand3}</p>
                            </div>
                            <div className="card-back d-flex justify-content-center align-items-center">
                                <p style={{fontSize: "16px", color:"white"}}>{l1}</p>
                            </div>
                        </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className='col4 column' lg={4} md={4} sm={12} data-aos="fade-down">
                <div className="card4">
                    <div className="card-inner">
                            <div className="card-front">
                                <img style={{ width: "150px"}} src={b4} alt="" />
                                <p>{brand4}</p>
                            </div>
                            <div className="card-back d-flex justify-content-center align-items-center">
                                <p style={{fontSize: "16px", color:"white"}}>{l1}</p>
                            </div>
                        </div>
                </div>
            </Col>
            <Col className='col2 column' lg={4} md={4} sm={12} data-aos="fade-down">
                <div className="card5 ">
                    <div className="card-inner">
                            <div className="card-front">
                                <img style={{ width: "150px"}} src={b5} alt="" />
                                <p>{brand5}</p>
                            </div>
                            <div className="card-back d-flex justify-content-center align-items-center">
                                <p style={{fontSize: "16px", color:"white"}}>{l1}</p>
                            </div>
                        </div>
                </div>
            </Col>
            <Col className='col3 column' lg={4} md={4} sm={12} data-aos="fade-down">
                <div className="card6">
                    <div className="card-inner">
                            <div className="card-front">
                                <img style={{ width: "150px"}} src={b6} alt="" />
                                <p>{brand6}</p>
                            </div>
                            <div className="card-back d-flex justify-content-center align-items-center">
                                <p style={{fontSize: "16px", color:"white"}}>{l1}</p>
                            </div>
                        </div>
                </div>
            </Col>
        </Row>
    </Container>
    </section>
    )
}

export default ServicesCompany