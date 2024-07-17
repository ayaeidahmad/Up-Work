import Exciting from "../../Components/Exciting/Exciting"
import Footer from "../../Components/Footer/Footer"
import NavBar from "../../Components/NavBar/NavBar"
import WhoAreWe from "../../Components/WhoAreWe/WhoAreWe"
import image1 from './../../assets/Images/focalx.svg'
import img1 from './../../assets/Images/aws.png'
import img2 from './../../assets/Images/gisconsulting.jpg'
import img3 from './../../assets/Images/mony.jpg'
import img4 from './../../assets/Images/facebook.png'
import img5 from './../../assets/Images/google.png'
import b1 from "./../../assets/Images/branding.jpg"
import b2 from "./../../assets/Images/markiting.png"
import b3 from "./../../assets/Images/code.png"
import b4 from "./../../assets/Images/partener.png"
import b5 from "./../../assets/Images/motion.png"
import b6 from "./../../assets/Images/design.jpeg"
import ServicesCompany from "../../Components/ServicesCompany/ServicesCompany"
import Achievments from "../../Components/Achievments/Achievments"
import Parteners from "../../Components/Parteners/Parteners"
const FocalCompany = () => {
    return (
        <section className="company1">
        <NavBar/>
        <Exciting 
            title={'Focal X Agency'} 
            about={'At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in: Branding, Digital Marketing, Web/App Development, Ui/Ux Content creation, Graphic design, Social media and More........ So you can take a tour in our website, OR just Press Start :)'} 
            button={'Join Us'} 
            image1={image1}
        />
        <WhoAreWe 
            title={"Who Are We ?"} 
            about={"We are a family of worldwide 75 specialists of storytellers and marketers , brand builders , and designers, in addition to programmers and developers."} 
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

export default FocalCompany