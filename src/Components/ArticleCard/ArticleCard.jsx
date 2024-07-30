// import React from 'react'
import "./ArticleCard.css"
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ArticleCard = ({ articles , Stetus}) => {

    return (

        <section className='articles'>
            <Container>
                <Row>
                    {articles.map(index => {
                        return (
                            <Col className="colArticle" key={index} lg={4} md={6} sm={12} data-aos="zoom-in-down">
                                <Card className="ArticleCard" style={{ width: '20wh', height: '100%' }} >
                                    <Card.Img className="image" variant="top" src={index.photo} />
                                    <Card.Body>
                                        <Card.Title className="title">{index.title}</Card.Title>
                                        <Card.Text className="content">
                                            {index.body}
                                        </Card.Text>
                                        { Stetus &&
                                        <div >
                                            <Link to="/EditeArticle" className="update">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Link>
                                            <button className="trash" onClick={() => setIsPopupOpen(true)}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        </div>
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>)
}
export default ArticleCard



