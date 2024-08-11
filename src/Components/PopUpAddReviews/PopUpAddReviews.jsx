import './PopUpAddReviews.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useState } from 'react';
const PopUpAddReviews = ({ page , show, closePopup, sendReview, rating, setRating }) => {

    const [review, setReview] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/comment', {
                comment:review
                
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            });

            console.log('Data submitted successfully:', response.data);
            // setSuccess(true);
            // setError(null);
        } catch (error) {
            console.error('Error submitting data:', error);
            setError('Failed to submit data.');
            setSuccess(false);
        }
    };

    return (
        show && (
            <div className="popup">
                <div className={page==="opinion" ? "popup-inner" : "popup-inner-apply-job"}>
                    <button className="close-btn" onClick={closePopup}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                    <h2 style={{display : page==="opinion" ? "" : "none"}}>Add Reviews</h2>
                    <h2 style={{display : page==="opinion" ? "none" : ""}}>Apply Here</h2>
                    <form action="">
                        <div className='input2' style={{display : page==="opinion" ? "" : "none"}}>
                            <label className='lable-name' htmlFor="">Name</label>
                            <input style={{display : page==="opinion" ? "" : "none"}} className='text' type="text" placeholder="your name" value={rating} onChange={(e) => setRating(e.target.value)} />
                        </div>
                        <div className="name w-100">
                            <label className='lable-name' htmlFor="">{page==="opinion" ? "Review" :"Name"}</label>
                            <input className='text' type="text" placeholder={page==="opinion" ? "my review is ..." : " "} value={review} onChange={(e) => setReview(e.target.value)} required/>
                        </div>
                        <div className="input3"  style={{display : page==="opinion" ? "none" : ""}}>
                            <label className='lable-email' htmlFor="">Email </label>
                            <input style={{display : page==="opinion" ? "none" : ""}} className='text' type="email" placeholder="ayaahmad@gmail.com" value={rating} onChange={(e) => setRating(e.target.value)} />
                        </div>
                        <div className='input-file' style={{display : page==="opinion" ? "none" : ""}}>
                            <label htmlFor="file">Please enter your CV :</label>
                            <input id='file' className='file' type="file" />
                        </div>
                        <button className='send' onClick={handleSubmit}>Send</button>
                    </form>
                </div>
            </div>
            )
    )
}

export default PopUpAddReviews