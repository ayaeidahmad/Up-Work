import { Col, Container, Row } from 'react-bootstrap'
import './Achievments.css'
const Achievments = ({number1 , title1 ,number2 , title2 ,number3 , title3 ,number4 , title4}) => {
    return (
    <section className='Achiev'>
        {/* <img className='Achiev-image' src="./../../../../public/achiv.png" alt="" /> */}
        <Container>
            <Row>
                <h2>Achievments</h2>
                <Col lg={3} data-aos="zoom-in-down">
                    <div className="app">
                        <div className="content1">
                            <div className="circle">
                                <p className='number1'>{number1}</p>
                            </div>
                        </div>
                        <div className="content2">
                            <p className='title1'>{title1}</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} data-aos="zoom-in-down">
                    <div className="app">
                        <div className="content1">
                            <div className="circle">
                                <p className='number1'>{number2}</p>
                            </div>
                        </div>
                        <div className="content2">
                            <p className='title1'>{title2}</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} data-aos="zoom-in-down">
                    <div className="app">
                        <div className="content1">
                            <div className="circle">
                                <p className='number1'>{number3}</p>
                            </div>
                        </div>
                        <div className="content2">
                            <p className='title1'>{title3}</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} data-aos="zoom-in-down">
                    <div className="app">
                        <div className="content1">
                            <div className="circle">
                                <p className='number1'>{number4}</p>
                            </div>
                        </div>
                        <div className="content2">
                            <p className='title1'>{title4}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Achievments