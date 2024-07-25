// // import JobCard from "../../Components/JobCard/JobCard"
// // import { Outlet, Route, Router, Routes } from "react-router-dom"
// import NavBar2 from "../../Components/NavBar2/NavBar2"
// import './DashBordManager.css'
// import JobCard from "../../Components/JobCard/JobCard"
// import { useState } from "react"
// import ArticleDash from "../ArticleDash/ArticleDash"
// import CvsDash from "../CvsDash/CvsDash"
// import { JobsDash } from "../JobsDash/JobsDash"
// import { Container } from "react-bootstrap"
// import PopUpAddReviews from "../../Components/PopUpAddReviews/PopUpAddReviews"
// import PopupAddJobs from "../../Components/PopupAddJobs/PopupAddJobs"
// const DashBordManager = () => {
//     const [content, setContent] = useState(<JobsDash/>); 
//     const handleNavClick = (type) => {
//         switch (type) {
//         case 'jobs':
//             setContent(<JobsDash />);
//             break;
//         case 'articles':
//             setContent(<ArticleDash />);
//             break;
//         case 'cvs':
//             setContent(<CvsDash />);
//             break;
//         default:
//             setContent(<JobsDash />);
//         }
//     };
//     //add
//     // const [showPopup, setShowPopup] = useState(false);
//     // const [review, setReview] = useState('');
//     // const [rating, setRating] = useState('');
//     // const [reviewsList, setReviewsList] = useState([]);
//     // const handleAddReviewsClick = () => {
//     //     setShowPopup(true);
//     //     };
//     // const handleClosePopup = () => {
//     //     setShowPopup(false);
//     //     };
//     // const handleSendReview = () => {
//     //     const newReview = { review, rating };
//     //     setReviewsList([...reviewsList, newReview]);
//     //     setReview('');
//     //     setRating('');
//     //     setShowPopup(false);
//     //     };
//     return (
//             <section className="dashbord">
//             {/* <NavBar2/> */}
//             {/* <Container>
//                     <div className="buttonAdd">
//                         <button onClick={handleAddReviewsClick} className="add">Add</button>
//                     </div>
//                 </Container> */}
//             <section>
//                 {/* <Container>
//                     <div className="buttonAdd">
//                         <button onClick={handleAddReviewsClick} className="add">Add</button>
//                     </div>
//                 </Container> */}
//                 {content}
//                 {/* {reviewsList.map((review, index) => (
//                     {content}
//                  ))} */}
//             </section>
//             {/* <PopupAddJobs
//                 // page={"opinion"}
//                 show={showPopup}
//                 closePopup={handleClosePopup}
//                 sendReview={handleSendReview}
//                 review={review}
//                 setReview={setReview}
//                 rating={rating}
//                 setRating={setRating}
//             /> */}
//         </section>
//     )
// }
// export default DashBordManager


import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import JobCard from "../../Components/JobCard/JobCard";
import './DashBordManager.css'
import LogoCompany from './../../assets/Images/logo.svg'
import PopupAddJobs from "../../Components/PopupAddJobs/PopupAddJobs";
const DashBordManager = () => {
    const [activeTab, setActiveTab] = useState('job');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
/////addd////////////
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
        <section className="">
            <div className="dash-navbar">
                <Container className='dash'>
                    <img src={LogoCompany} alt="LogoCompany" className='logo'/>
                    <button  onClick={() => handleTabClick('job')} id="jobs" className={activeTab === 'job' ? 'active' : ''}>Jobs</button>
                    <button  onClick={() => handleTabClick('article')} id="article" className={activeTab === 'article' ? 'active' : ''}>Article</button>
                    <button  onClick={() => handleTabClick('cvs')} id="cvs" className={activeTab === 'cvs' ? 'active' : ''}>CVs</button>
                    <p className='company-name'>Focal X Agency</p>
                </Container>
            </div>
            <Container>
                <div className="buttonAdd">
                    <button onClick={handleAddReviewsClick} className="add">Add</button>
                </div>
            </Container>
            <div className="dashboard-content">
                {activeTab === 'job' && <JobCard/>}
                {activeTab === 'article' && <h3>Article Content</h3>}
                {activeTab === 'cvs' && <h3>cvs Content</h3>}
            </div>
            <PopupAddJobs
                // page={"opinion"}
                show={showPopup}
                closePopup={handleClosePopup}
                sendReview={handleSendReview}
                review={review}
                setReview={setReview}
                rating={rating}
                setRating={setRating}
            />
        </section>

        // <div className="dashboard">
        //     <nav className="dashboard-nav">
        //         <ul>
        //             <li>
        //                 <button onClick={() => handleTabClick('job')} className={activeTab === 'job' ? 'active' : ''}>Job</button>
        //             </li>
        //             <li>
        //                 <button onClick={() => handleTabClick('article')} className={activeTab === 'article' ? 'active' : ''}>Article</button>
        //             </li>
        //         </ul>
        //     </nav>

            // <div className="dashboard-content">
            //     {activeTab === 'job' && <h3>Job Content</h3>}
            //     {activeTab === 'article' && <h3>Article Content</h3>}
            // </div>
        // </div>
)
}

export default DashBordManager