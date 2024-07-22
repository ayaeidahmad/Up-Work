import './Opinion.css'
import { Col, Container, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import img1 from './../../assets/Images/images (2).jpeg'
import img2 from './../../assets/Images/man.png'
import img3 from './../../assets/Images/woeman.png'
import img4 from './../../assets/Images/man2.png'
// import { faL } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PopUpAddReviews from '../PopUpAddReviews/PopUpAddReviews';
const Opinion = () => {
    const images = [ img1 , img2 , img3 , img4 ]
    const opinions = [
        {
            "opinion" : " We have a great relationship with Horizon Group. HiresGulf supports us to handle everything from recruiting, consulting, compliance, and much more which has saved our HR activities. " ,
            "image" : img1 ,
            "name" : "HR Department – FinTech Company"
        } ,
        {
            "opinion" : " Finding this portal under Horizon Group was a pleasant surprise, I was impressed by the technical support and assistance offered by HiresGulf throughout the registration process. " ,
            "image" : img2 ,
            "name" : "Procurement Head , CPECC"
        } ,
        {
            "opinion" : " HiresGulf knows the search business! They are highly responsive and get strong results in a timely manner. The candidates we landed had direct experience and are impact players on our team. " ,
            "image" : img3 ,
            "name" : "Engineering Services"
        } ,
        {
            "opinion" : " Finding qualified candidates and screening them via HiresGulf was a straightforward and quick process. They recommend only genuine job seekers for you. This is a highly recommended job portal for employers. " ,
            "image" : img4 ,
            "name" : "HR Director "
        } ,
    ]
    const [showPopup, setShowPopup] = useState(false);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const [reviewsList, setReviewsList] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handleAddReviewsClick = () => {
        setShowPopup(true);
        };
    const handleClosePopup = () => {
        setShowPopup(false);
        };
    const handleSendReview = () => {
        const newReview = { review, rating , image: images[reviewsList.length % images.length] };
        setReviewsList([...reviewsList, newReview]);
        setReview('');
        setRating('');
        setShowPopup(false);
        setCurrentImageIndex((currentImageIndex + 1) % images.length)
        };
    return (
        <section className='opinion'>
            <Container>
            <div className='part1 pb-5'>
                <div className='title'>
                    <h1 className="opinion-title ">Reviews</h1>
                    <p>What Our Employers Who Visited Our Website and Got a Job Say  </p>
                </div>
                <button onClick={handleAddReviewsClick} className='Add-reviews'>Add Reviews</button>
            </div>
            <Row>
            {opinions.map(index => {
                return(
                    <Col key={index.title} lg={6} md={6} sm={12} >
                        <Card style={{ width: '100%' }}className="opinion-card mb-4">
                            <Card.Body>
                                <Card.Title className='opinion-opinion'> {index.opinion} </Card.Title>
                                <Card.Img className='opinion-image' src={index.image} />
                                <Card.Text className='opinion-name'> {index.name}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
                
            })}
            
            {reviewsList.map((review, index) => (
                    <Col key={index} lg={6} md={6} sm={12} >
                    <Card style={{ width: '100%', height: '200px' }}className="opinion-card mb-4">
                        <Card.Body>
                            <Card.Title className='opinion-opinion'> {review.review} </Card.Title>
                            <Card.Img className='opinion-image' src={review.image} />
                            <Card.Text className='opinion-name'> {review.rating}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
            <PopUpAddReviews
                page={"opinion"}
                show={showPopup}
                closePopup={handleClosePopup}
                sendReview={handleSendReview}
                review={review}
                setReview={setReview}
                rating={rating}
                setRating={setRating}
            />
            </Container>
        </section>
    )
}

export default Opinion