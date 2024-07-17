import { Col, Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignUp.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye , faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const SignUp = () => {
const [password, setPassword] = useState('')
const [showPassword, setShowPassword] = useState(false)
const [icone, setIcone] = useState()

const [password2, setPassword2] = useState('')
const [showPassword2, setShowPassword2] = useState(false)
const [icone2, setIcone2] = useState()

const changeIcone = () => {
setIcone(!icone)
}
const handlePasswordChange = (event) => {
setPassword(event.target.value)
}
const toogleShowPassword = () => {
setShowPassword(!showPassword)
}

const changeIcone2 = () => {
setIcone2(!icone2)
}
const handlePasswordChange2 = (event) => {
setPassword2(event.target.value)
}
const toogleShowPassword2 = () => {
setShowPassword2(!showPassword2)
}
return (
    <section className="signup">
        <Container>
        <Row className="">
            <Col lg={6} md={6} sm={12}>
            <div className="signup-text">
                <h1>Create your acount</h1>
                <p>it&apos;s just a few minutes and free</p>
            </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
            <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control className="signup-input" type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className="signup-input" type="email" placeholder="Enter your email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className="containerPassword">
                <Form.Control className="signup-input-password" type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} minLength={8} placeholder="Enter password" required min={8}/>
                <div className="icon-password" onClick={toogleShowPassword}>
                <FontAwesomeIcon onClick={changeIcone} icon={icone ? faEye : faEyeSlash} />
                </div>
                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <div className="containerConfirmPassword">
                <Form.Control className="signup-input-confirm-password" type={showPassword2 ? 'text' : 'password'} value={password2} onChange={handlePasswordChange2} placeholder="Confirm Password" required/>
                <div className="icon-password2" onClick={toogleShowPassword2}>
                <FontAwesomeIcon onClick={changeIcone2} icon={icone2 ? faEye : faEyeSlash} />
                </div>
                </div>
            </Form.Group>
            <Button className="" type="submit">
                Sign Up
            </Button>
            <Form.Text className="d-block">You have already an acount ? <Link to="/login" className="signup-login">Login Here</Link></Form.Text>
            </Form>
            </Col>
        </Row>
        </Container>
    </section>
)
}

export default SignUp