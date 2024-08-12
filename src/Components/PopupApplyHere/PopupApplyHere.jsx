import './PopupApplyHere.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState } from 'react';

const PopupApplyHere = ({ show, closePopup }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cvFile, setCvFile] = useState(null);

    const handleFileChange = (e) => {
        setCvFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('file_path', cvFile);
        formData.append('company_id', localStorage.getItem('cvid'));

        try {
            await axios.post('http://127.0.0.1:8000/api/cvs', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            // يمكنك إضافة رسالة نجاح هنا
            console.log('CV sent successfully');
            closePopup(); // أغلق النافذة المنبثقة بعد الإرسال
        } catch (error) {
            console.error("Failed to send CV:", error);
            // يمكنك إضافة رسالة خطأ هنا
        }
    };

    return (
        show && (
            <div className="popup">
                <div className='popup-inner-apply-job'>
                    <button className="close-btn" onClick={closePopup}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                    <h2>Apply Here</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='input2'>
                            <label className='lable-name' htmlFor="">Name</label>
                            <input 
                                className='text' 
                                type="text" 
                                placeholder="your name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="input3">
                            <label className='lable-email' htmlFor="">Email</label>
                            <input 
                                className='text' 
                                type="email" 
                                placeholder="ayaahmad@gmail.com" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className='input-file'>
                            <label htmlFor="file">Please enter your CV:</label>
                            <input 
                                id='file' 
                                className='file' 
                                type="file" 
                                onChange={handleFileChange} 
                                required 
                            />
                        </div>
                        <button className='send' type="submit">Send</button>
                    </form>
                </div>
            </div>
        )
    );
}

export default PopupApplyHere;
