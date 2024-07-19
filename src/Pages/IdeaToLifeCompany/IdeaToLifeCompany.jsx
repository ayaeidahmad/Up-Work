import Achievments from "../../Components/Achievments/Achievments"
import Exciting from "../../Components/Exciting/Exciting"
import Footer from "../../Components/Footer/Footer"
import NavBar from "../../Components/NavBar/NavBar"
import Parteners from "../../Components/Parteners/Parteners"
import ServicesCompany from "../../Components/ServicesCompany/ServicesCompany"
import WhoAreWe from "../../Components/WhoAreWe/WhoAreWe"
import img1 from './../../assets/Images/aws.png'
import img2 from './../../assets/Images/gisconsulting.jpg'
import img3 from './../../assets/Images/mony.jpg'
import img4 from './../../assets/Images/facebook.png'
import img5 from './../../assets/Images/google.png'
import image1 from './../../assets/Images/ideatolife.jpeg'
import b1 from "./../../assets/Images/branding.jpg"
import b2 from "./../../assets/Images/markiting.png"
import b3 from "./../../assets/Images/code.png"
import b4 from "./../../assets/Images/partener.png"
import b5 from "./../../assets/Images/motion.png"
import b6 from "./../../assets/Images/design.jpeg"
const IdeaToLifeCompany = () => {
    return (
        <section className="company2">
    <NavBar/>
    <Exciting 
        title={'Idea To Life'} 
        about={'Unlocking Your Business Growth With AI The Premier DeepTech Firm! Venture with us to unleash the boundless potential of AI to transform your business, revolutionize your industry, and change the world as we know it.'}
        button={'Join Us'} 
        image1={image1}
    />
    <WhoAreWe 
        page={"IdeaToLifeCompany"}
        title={"Who Are We ?"} 
        about={"We strive to define industry benchmarks for quality and innovation, becoming the preferred choice for businesses in need of disruptive, state-of-the-art software solutions. Our intimate aim is to nurture enduring partnerships built on trust, collaboration, and shared success."} 
    />
    <ServicesCompany 
        title={"Our Services"} 
        brand1={"Design Thinking"} 
        brand2={"Innovation"} 
        brand3={"Prototyping"}
        brand4={"OneX"} 
        brand5={"Go Trackr"} 
        brand6={"Fleetak"}
        b1={b1} 
        b2={b2} 
        b3={b3} 
        b4={b4} 
        b5={b5} 
        b6={b6}
        l1={"AIoT platform transforming municipalities and enabling better quality of life for everyday people."} 
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

export default IdeaToLifeCompany