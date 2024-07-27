import './Companies.css'
import { Col, Container, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import focal from './../../assets/Images/focal.jpeg'
import iram from  "./../../assets/Images/iram.jpeg"
import code95 from "./../../assets/Images/code95.png"
import vica from "./../../assets/Images/vica.jpeg"
import infoStrategic from  "./../../assets/Images/infostrategic.jpeg" 
import ideaToLife from "./../../assets/Images/ideatolife.jpeg"
const Companies = () => {
    const all_companies = [
        {
            "id" : "1" ,
            "image" : focal ,
            "title" : "Focal X Agency" ,
            "discription" : "Branding, Marketing, Web/App Development, Ux Research's, Business solutions." ,
            "location" : "Syria-Lattakia"
        } ,
        {
            "id" : "2" ,
            "image" : iram ,
            "title" : "IRAM" ,
            "discription" : "Engineering, Trading, Technology, marketing and Diverse Architectural Services" ,
            "location" : "Syria-Lattakia"
        } ,
        {
            "id" : "3" ,
            "image" : code95 ,
            "title" : "Code95" ,
            "discription" : "web technology services, design, development and marketing company." ,
            "location" : "Syria-Dasmacus"
        } ,
        {
            "id" : "4" ,
            "image" : vica ,
            "title" : "Vica" ,
            "discription" : "web development services and to equip individuals with  skils and knowledge." ,
            "location" : "Syria-Damascus"
        } ,
        {
            "id" : "5" ,
            "image" :infoStrategic,
            "title" : "INFO Strategic" ,
            "discription" : "Technology Solutions and Consulting Company, business and system analytics  " ,
            "location" : "Syria-Tartous"
        } ,
        {
            "id" : "6" ,
            "image" : ideaToLife ,
            "title" : "Idea To Life" ,
            "discription" : "offer unique one-stop technical  solutions to all start up and entrepreneurs. " ,
            "location" : "Syria-Damascus"
        } ,
    ]
    return (
        <section className="company">
        <Container>
        <div className="company-div-title">
            <h1 className="company-title">Companies</h1>
            <p>Explore Employment Opportunities With Top company .</p>
        </div>
        <Row>
        {all_companies.map((content , index ) => {
            return(
                <Col className={`col${index+1} `} key={index} lg={4} md={6} sm={12}>
                    <Card className={`card${index+1} mb-4`} style={{ width: '22rem' }} data-aos="zoom-in-down">
                        <div className="company-img">
                        <Card.Img className="company-image mx-auto" variant="top" src={content.image}/>
                        </div>
                        <Card.Body className="body">
                            <Card.Title className="company-name fs-3">{content.title}</Card.Title>
                            {/* <Card.Text> {index.discription}</Card.Text> */}
                            {/* <Card.Text className="company-location"> <FontAwesomeIcon icon={faLocationDot} /> {content.location}</Card.Text> */}
                            <Link to={`/Company${content.id}`} className={`showMore${content.id}`} >Show More </Link>
                        </Card.Body>
                    </Card>
                </Col>
            )
            
        })}
        </Row>
        </Container>
    </section>
    )
}

export default Companies