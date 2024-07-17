import { Container } from 'react-bootstrap'
import './WhoAreWe.css'

const WhoAreWe = ({title , about}) => {
    return (
        <section className='who'>
            <Container className='text-center w-75'>
                <h2 className='who-title text-center fw-bold'>{title}</h2>
                <p className='who-para fs-5'>{about}</p>
            </Container>
        </section>
    )
}

export default WhoAreWe