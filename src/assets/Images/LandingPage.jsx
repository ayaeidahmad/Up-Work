// import { Link } from 'react-router-dom'
// import Comment from '../../Components/Comment/Comment'
import Companies from '../../Components/Companies/Companies'
import Exciting from '../../Components/Exciting/Exciting'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import NavBar from '../../Components/NavBar/NavBar'
import Opinion from '../../Components/Opinion/Opinion'
import WhoAreWe from '../../Components/WhoAreWe/WhoAreWe'
import image1 from './../../assets/Images/exciting.svg'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import './LandingPage.css'
import JobCard from '../../Components/JobCard/JobCard'
import { Container } from 'react-bootstrap'
import ArticleCard from '../../Components/ArticleCard/ArticleCard'
const LandingPage = () => {
    useEffect (() => {
        Aos.init({duration : 2000})
    }, [])
    return (
        <>
        <NavBar/>
        <Hero/>
        <Companies/>
        <WhoAreWe 
        page={'landingPage'}
            title={"Who Are We ?"} 
            about={"We are a group of companies that have created a platform to provide multiple services, including job browsing by sector and job level, the ability to easily apply for jobs through the platform, and improving recruitment strategies. We aim to provide an integrated and effective hiring experience for all parties involved."}
        />
        <Container>
                <div className='part1 pb-5'>
                    <h1 className="jobCard-title">All job opportunities</h1>
                    <p>Discover all the job opportunities provided by companies through our platform </p>
                </div>
                <JobCard page={"landingPage"} />
            </Container>
        <Exciting 
            page={"landingPage"}
            title={'Book your opportunity now !'} 
            about={'If you are looking for new job opportunities,our platform is the perfect destination for you to achieve your employment goals. Join us today and benefit fromour outstanding and comprehensive services.'} 
            button={'Join Us'} 
            image1={image1}
        />
        <Opinion/>
        <section className='jobCard'>
            <ArticleCard/>
        </section>
        {/* <Comment/> */}
        <Footer/>
        </>
    )
}

export default LandingPage