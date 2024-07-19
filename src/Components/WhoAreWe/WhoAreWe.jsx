import { Container } from 'react-bootstrap'
import './WhoAreWe.css'

const WhoAreWe = ({title , about , page}) => {
    return (
        <section className={page === 'landingPage' ? "who" : "whoCompany"}>
            <Container className='text'>
                <h2 className='who-title fw-bold'>{title}</h2>
                <p className='who-para fs-5'>{about}</p>
            </Container>
        </section>
    )
}

export default WhoAreWe