import { Container, Row } from 'react-bootstrap'
import './Parteners.css'
const Parteners = ({img1, img2 ,img3 ,img4 , img5 }) => {
    return (
    <section className='Parteners'>
        <Container>
            <Row>
                <h2>Sister Companies & Digital Partners</h2>
                <div className='tag-list'>
                    <div className="loop-slider">
                        <div className="inner">
                            <div className="tag">
                                <img src={img1} alt="" />
                            </div>
                            <div className="tag">
                                <img src={img2} alt="" />
                            </div>
                            <div className="tag">
                                <img src={img3} alt="" />
                            </div>
                            <div className="tag">
                                <img src={img4} alt="" />
                            </div>
                            <div className="tag">
                                <img src={img5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
    )
}

export default Parteners