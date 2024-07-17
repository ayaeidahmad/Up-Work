import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import './Exciting.css'
import { Link } from 'react-router-dom';
const Exciting = ({title, about , button , image1 , page}) => {
    return (
        <section className='exciting'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} data-aos="fade-right">
                        <div className="exciting">
                            <h2 className="exciting-title">{title}</h2>
                            <p className='fs-4'>{about}</p>
                            <Button className={page==="exciting" ? "joinusButton" : "joinusCompany"} variant="outline-primary"><Link className="joinus" to="/signup">{button}</Link></Button>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} data-aos="fade-left">
                        <div className={page==="exciting" ? "exciting-image" : "company-image"}>
                            <img src={image1} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Exciting