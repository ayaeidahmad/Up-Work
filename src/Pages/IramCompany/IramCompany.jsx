import img1 from './../../assets/Images/aws.png'
import img2 from './../../assets/Images/gisconsulting.jpg'
import img3 from './../../assets/Images/mony.jpg'
import img4 from './../../assets/Images/facebook.png'
import img5 from './../../assets/Images/google.png'
import Achievments from "../../Components/Achievments/Achievments"
import Exciting from "../../Components/Exciting/Exciting"
import Footer from "../../Components/Footer/Footer"
import NavBar from "../../Components/NavBar/NavBar"
import Parteners from "../../Components/Parteners/Parteners"
import ServicesCompany from "../../Components/ServicesCompany/ServicesCompany"
import WhoAreWe from "../../Components/WhoAreWe/WhoAreWe"
import image1 from './../../assets/Images/IRAM Group.png'
import b1 from "./../../assets/Images/branding.jpg"
import b2 from "./../../assets/Images/markiting.png"
import b3 from "./../../assets/Images/code.png"
import b4 from "./../../assets/Images/partener.png"
import b5 from "./../../assets/Images/motion.png"
import b6 from "./../../assets/Images/design.jpeg"
const IramCompany = () => {
    return (
        <section className="company2">
        <NavBar/>
        <Exciting 
            title={'IRAM'} 
            about={'IRAM Company, a leading provider of Engineering and Trading solutions, was established in 2023. Committed to excellence, we leverage advanced technology and proven processes to deliver high-quality projects on time and within budget. Our diverse range of services encompasses engineering studies, commercial services, and cutting-edge technology.'}
            button={'Join Us'} image1={image1}/>
        <WhoAreWe 
            title={"Who Are We ?"} 
            about={"We are a leading company in the Middle East and international markets, dedicated to achieving excellence in quality engineering work. With an unwavering commitment to innovation and continuous development, we overcome challenges to deliver remarkable projects. Our values of professionalism, credibility, and efficiency drive us to create inspiring environments that empower our clients and communities."} 
        />
        <ServicesCompany 
            title={"Our Services"} 
            brand1={"Branding"}
            brand2={"Marketing"} 
            brand3={"Web Development"}
            brand4={"PartnerShips"} 
            brand5={"Motion Graphic"} 
            brand6={"Graphic Design"}
            b1={b1} 
            b2={b2} 
            b3={b3} 
            b4={b4} 
            b5={b5} 
            b6={b6}
            l1={"Your Brand and Visual identity represents an intrinsic Value to your company."} 
        />
        <Achievments 
            number1={"100+"} title1={"Our Products"} 
            number2={"78+"} title2={"Our Employees"}
            number3={"250+"} title3={"Our Clients"}
            number4={"13+"} title4={"Our Partners"}
        />
        <Parteners 
            img1={img1} img2={img2} 
            img3={img3} img4={img4} 
            img5={img5}
        />
        <Footer/>
        </section>
    )
}

export default IramCompany