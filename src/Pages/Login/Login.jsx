import { Col, Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye , faEyeSlash , faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import loginImage from './../../assets/Images/login.jpg'
import logo from './../../assets/Images/upwork1.png'
const Login = ( ) => {
const [password, setPassword] = useState('')
const [showPassword, setShowPassword] = useState(false)
const [icone, setIcone] = useState()

const changeIcone = () => {
setIcone(!icone)
}
const handlePasswordChange = (event) => {
setPassword(event.target.value)
}
const toogleShowPassword = () => {
setShowPassword(!showPassword)
}
return (
    <section className="login">
        <Container>
        <Row className="rowLogin">
            <Link to="/landingPage">
                <FontAwesomeIcon className="ArrowAltCircleLeft" icon={faArrowAltCircleLeft}/>
            </Link>
            <Col className="colLogin" lg={6} md={6} sm={12}>
            <div className="login-image">
                <img src={loginImage} alt="loginImage" />
            </div>
            </Col>
            <Col className="colForm" lg={6} md={6} sm={12}>
            <Form className="form">
                <Link to="/landingPage"><img className="logo" src={logo} alt="logo" /></Link>
                <h1>Welcome Back ...</h1>
                <p>Login to access your Up Work account</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className="login-input-email" type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className="conatainerPassword">
                    <Form.Control className="login-input-password" type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange}  minLength={8} placeholder="Password" required min={8}/>
                    <div className="icon-password" onClick={toogleShowPassword}>
                    <FontAwesomeIcon onClick={changeIcone} icon={icone ? faEye : faEyeSlash} />
                    </div>
                </div>
            </Form.Group>
            <div className="part">
                <Button className="" type="submit">Login</Button>
                <Link to="/forgotpassword" className="forgotpassword">Forgot Password</Link>
            </div>
            <Form.Text className="d-block">You don&apos;t have an acount ? <Link className="login-signup" to="/signup">SignUp Here</Link></Form.Text>
            </Form>
            </Col>
        </Row>
        </Container>
    </section>
)
}

export default Login