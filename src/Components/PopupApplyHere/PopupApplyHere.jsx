import './PopupApplyHere.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useState } from 'react';
const PopupApplyHere = ({ show, closePopup, sendReview, rating, setRating }) => {
    const [review, setReview] = useState('');

    const handleSubmit = () => {

    }
    return (
        show && (
        <div className="popup">
            <div className='popup-inner-apply-job'>
                <button className="close-btn" onClick={closePopup}>
                    <FontAwesomeIcon icon={faClose} />
                </button>
                <h2>Apply Here</h2>
                <form action="">
                        <div className='input2'>
                            <label className='lable-name' htmlFor="">Name</label>
                            <input className='text' type="text" placeholder="your name" value={rating} onChange={(e) => setRating(e.target.value)} />
                        </div>
                        <div className="input3">
                            <label className='lable-email' htmlFor="">Email </label>
                            <input className='text' type="email" placeholder="ayaahmad@gmail.com" value={rating} onChange={(e) => setRating(e.target.value)} />
                        </div>
                        <div className='input-file'>
                            <label htmlFor="file">Please enter your CV :</label>
                            <input id='file' className='file' type="file" />
                        </div>
                        <button className='send' onClick={handleSubmit}>Send</button>
                    </form>
            </div>
        </div>
    ) )
}

export default PopupApplyHere