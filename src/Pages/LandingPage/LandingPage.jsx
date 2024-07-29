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
import img from './../../assets/Images/rejected.png'

const LandingPage = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const articles = [
        {
            "company-id": 1,
            "title": "You’re safe with us",
            "body": "Use it to securely send and receive files, give real-time feedback and make payments. And if you’re out and about a lot, you’ll want to download the app too.",
            "photo": img

        },
        {
            "company-id": 2,
            "title": "Post a job and hire a pro",
            "body": "Post your job on the world’s work marketplace and wait for the proposals to flood in from talented people around the world.",
            "photo": img
        },
        {
            "company-id": 3,
            "title": "Post a job and hire a pro",
            "body": "Post your job on the world’s work marketplace and wait for the proposals to flood in from talented people around the world.",
            "photo": img

        },
    ]

    const Job_Details = [
        {
            company_name: "Focal X Agency",
            job_title: "software development",
            career_Level: "senior",
            experience_Needed: "more 5 years",
            Time: "full time",
            key_Skills: "android, database, xml",
            address: "Syria - latakia",
            id: 1
        },
        {
            company_name: "Focal X Agency",
            job_title: "software development",
            career_Level: "senior",
            experience_Needed: "more 5 years",
            Time: "full time",
            key_Skills: "android, database, xml",
            address: "Syria - latakia",
            id: 1
        },
        {
            company_name: "Focal X Agency",
            job_title: "software development",
            career_Level: "senior",
            experience_Needed: "more 5 years",
            Time: "full time",
            key_Skills: "android, database, xml",
            address: "Syria - latakia",
            id: 1
        }
    ]
    return (
        <>
            <NavBar />
            <Hero />
            <Companies />
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
                <JobCard Stetus={false} articles={Job_Details} />
            </Container>
            <Exciting
                page={"landingPage"}
                title={'Book your opportunity now !'}
                about={'If you are looking for new job opportunities,our platform is the perfect destination for you to achieve your employment goals. Join us today and benefit fromour outstanding and comprehensive services.'}
                button={'Join Us'}
                image1={image1}
            />
            <Container>
                <div className='part1 pb-5'>
                    <h1 className="jobCard-title">All Articles opportunities</h1>
                    <p>Discover all the Articles opportunities provided by companies through our platform </p>
                </div>
                <ArticleCard Stetus={false} articles={articles} />
            </Container>
            <Opinion />
            <Footer />
        </>
    )
}

export default LandingPage