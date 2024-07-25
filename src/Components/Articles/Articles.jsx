import React from 'react'
import "./Articles.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap"
import img from './../../assets/Images/photo.jpg'
const Articles = () => {
    const articles = [
        {
            "company-id": 1,
            "title": "You’re safe with us",
            "body": "Use it to securely send and receive files, give real-time feedback and make payments. And if you’re out and about a lot, you’ll want to download the app too.kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
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
    return (

        <section className='articles'>
            <div className=' pb-5'>
                <h1 className="article-title ">Articles</h1>
                <p className='article-para'> read some articles that may benefit or interest you.  </p>
            </div>
            <Row>
                {articles.map(index => {
                    return (
                        <Col lg={4} md={6} sm={12} >
                            <Card className='ArticleCard' style={{ width: '20wh', height: 'auto' }} >
                                <Card.Img variant="top" src={index.photo} />
                                <Card.Body>
                                    <Card.Title>{index.title}</Card.Title>
                                    <Card.Text>
                                        {index.body}
                                    </Card.Text>
                                    <div className='articleButons'>
                                        <Button className='ArticleBtnDelete' variant="primary">Delete</Button>
                                        <Button className='ArticleBtnUpdate' variant="primary">Update</Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>


        </section>)
}
export default Articles



