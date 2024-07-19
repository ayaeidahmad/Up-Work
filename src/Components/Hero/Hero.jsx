import './Hero.css'
import image1 from './../../assets/Images/pexels-fauxels-3182773.jpg'
import image2 from './../../assets/Images/pexels-kampus-8636603.jpg'
import image3 from './../../assets/Images/pexels-mikhail-nilov-7988237.jpg'
const Hero = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide hero ">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={image1} className="d-block w-100" alt="..."  />
            <div className=" caption  d-none d-md-block">
                <h1>Career Opportunities Await You</h1>
            </div>
            </div>
            <div className="carousel-item">
                <img src={image2} className="d-block w-100" alt="..."/>
            <div className="caption d-none d-md-block">
                <h1>Shape Your Future with Us</h1>
            </div>
            </div>
            <div className="carousel-item">
                <img src={image3} className="d-block w-100" alt="..." />
            <div className="caption d-none d-md-block">
                <h1>Start Your Success Story Here</h1>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    )
}

export default Hero