import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './PopupAddJobs.css'
import { faClose } from '@fortawesome/free-solid-svg-icons'
const PopupAddJobs = ({   show, closePopup, sendReview, review, setReview, rating, setRating }) => {
    return (
        show && (
            <div className="popupAdd">
                <div className="popupBody">
                    <button className="close-btn" onClick={closePopup}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                    <h2 className="AddJobs">Add Jobs</h2>
                    <form action="">
                        <div className="name w-100">
                            <label className='lable' htmlFor="">Company-Name</label>
                            <input className='text' type="text" placeholder="Focal X Agency" value={review} onChange={(e) => setReview(e.target.value)} required/>
                        </div>
                        <div className='input2'>
                            <label className='lable1' htmlFor="">Job-Title</label>
                            <input  className='text' type="text" placeholder="Web Developer" value={rating} onChange={(e) => setRating(e.target.value)} />
                            <label className='lable2' htmlFor="">Level</label>
                            <input  className='text' type="text" placeholder="Senior" value={rating} onChange={(e) => setRating(e.target.value)} />
                        </div>
                        <div className="input3" >
                            <label className='lable1' htmlFor="">Experiance </label>
                            <input className='text' type="email" placeholder="5 years" value={rating} onChange={(e) => setRating(e.target.value)} />
                            <label className='lable2' htmlFor="">Time </label>
                            <input className='text' type="email" placeholder="Full Time" value={rating} onChange={(e) => setRating(e.target.value)} />
                        </div>
                        <div className="input4">
                            <label className='lable' htmlFor="">Skills </label>
                            <input className='text' type="email" placeholder="React,php ...." value={rating} onChange={(e) => setRating(e.target.value)} />
                        </div>
                        <div className="input5">
                            <label className='lable' htmlFor="">Address </label>
                            <input className='text' type="email" placeholder="Syria-Latakia" value={rating} onChange={(e) => setRating(e.target.value)} />
                        </div>
                        <button className='add' onClick={sendReview}>Add</button>
                    </form>
                </div>
            </div>
        )
    )
}

export default PopupAddJobs