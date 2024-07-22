import { Container, Row , Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './JobCard.css'
import { useState } from 'react';
import PopUpAddReviews from '../PopUpAddReviews/PopUpAddReviews';
const JobCard = () => {
    const Job_Details = [
        {
            title : "Android and IOS developer",
            jobRole : "software development", 
            careerLevel : "senior", 
            experienceNeeded : "more 5 years", 
            jobType : "full time", 
            keySkills : "android, database, xml", 
            address : "Syria - latakia", 
            companyName : "Iram"
        } , 
        {
            title : "Android and IOS developer",
            jobRole : "software development", 
            careerLevel : "senior", 
            experienceNeeded : "more 5 years", 
            jobType : "full time", 
            keySkills : "android, database, xml", 
            address : "Syria - latakia", 
            companyName : "Iram"
        } , 
        {
            title : "Android and IOS developer",
            jobRole : "software development", 
            careerLevel : "senior", 
            experienceNeeded : "more 5 years", 
            jobType : "full time", 
            keySkills : "android, database, xml", 
            address : "Syria - latakia", 
            companyName : "Iram"
        }
    ]
    const [showPopup, setShowPopup] = useState(false);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const [reviewsList, setReviewsList] = useState([]);
    const handleAddReviewsClick = () => {
        setShowPopup(true);
        };
    const handleClosePopup = () => {
        setShowPopup(false);
        };
    const handleSendReview = () => {
        const newReview = { review, rating };
        setReviewsList([...reviewsList, newReview]);
        setReview('');
        setRating('');
        setShowPopup(false);
        };
    return (
        <section className='jobCard'>
            <Container>
                <div className='part1 pb-5'>
                    <h1 className="jobCard-title">All job opportunities</h1>
                    <p>Discover all the job opportunities provided by companies through our platform </p>
                </div>
                <Row className='jobRow'>
                    {Job_Details.map(index => {
                    return (
                            <Col className='jobCol' key={index} lg={4} md={6} sm={12} >
                                <Card className="job-card mb-4">
                                    {/* <FontAwesomeIcon className='EllipsisV' icon={faEllipsisV} /> */}
                                    <h3 className='title'> {index.title} </h3>
                                    <div className='body'>
                                        <p className='companyName'> <strong>Company Name </strong> {index.companyName}</p>
                                        <p className='jobRole'> <strong>Job Role </strong> {index.jobRole}</p>
                                        <p className='careerLevel'> <strong>Career Level </strong> {index.careerLevel}</p>
                                        <p className='experienceNeeded'> <strong>Experience Needed </strong> {index.experienceNeeded}</p>
                                        <p className='keySkills'> <strong>Key Skills </strong> {index.keySkills}</p>
                                        <p className='jobType'> <strong>Job Type </strong> {index.jobType}</p>
                                        {/* <p className='address'> <strong>Address:</strong> {index.address}</p> */}
                                    </div>
                                    <div className='part3'>
                                        <p className='address'>
                                            <FontAwesomeIcon className='LocationDot' icon={faLocationDot} />
                                            {index.address}
                                        </p>
                                        <button onClick={handleAddReviewsClick} className='Apply'>Apply Here</button>
                                    </div>
                                </Card>
                            </Col>
                            )
                        }
                    )}
                </Row>
                <PopUpAddReviews
                page={"jobCard"}
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

export default JobCard