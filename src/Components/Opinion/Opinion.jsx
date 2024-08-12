import './Opinion.css';
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import img1 from './../../assets/Images/images (2).jpeg';
import img2 from './../../assets/Images/man.png';
import img3 from './../../assets/Images/woeman.png';
import img4 from './../../assets/Images/man2.png';
import { useEffect, useState } from 'react';
import PopUpAddReviews from '../PopUpAddReviews/PopUpAddReviews';
import axios from 'axios';

const Opinion = () => {
    const images = [img1, img2, img3, img4];
    const [showPopup, setShowPopup] = useState(false);
    const [rating, setRating] = useState('');
    const [reviewsList, setReviewsList] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleAddReviewsClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleSendReview = () => {
        const newReview = { rating, image: images[reviewsList.length % images.length] };
        setReviewsList([...reviewsList, newReview]);
        console.log(newReview);
        setRating('');
        setShowPopup(false);
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const handleDeleteComment = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/comment/${id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            // تحديث قائمة التعليقات بعد الحذف
            setData(data.filter(comment => comment.id !== id));
        } catch (error) {
            console.error("Failed to delete comment:", error);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/comments', {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setData(response.data.data);
                console.log(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [handleAddReviewsClick]);

    // دالة لحذف التعليق
    


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
            {data.map(index => {
                return(
                    <Col key={index.title} lg={6} md={6} sm={12} data-aos="zoom-in-down">
                        <Card style={{ width: '100%' }}className="opinion-card mb-4">
                            <Card.Body>
                                <Card.Title className='opinion-opinion'> {index.comment} </Card.Title>
                                <Card.Img className='opinion-image' src={img1} />
                                <Card.Text className='opinion-name'>user</Card.Text>
                                <Card.Text onClick={() => handleDeleteComment(index.id)}  className='opinion-name'>delete</Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                )
                
            })}
            </Row>
            <PopUpAddReviews
                page={"opinion"}
                show={showPopup}
                closePopup={handleClosePopup}
                sendReview={handleSendReview}
                rating={rating}
                setRating={setRating}
            />
            </Container>
        </section>
    )
}

export default Opinion