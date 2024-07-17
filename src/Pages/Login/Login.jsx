import { Col, Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye , faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
const Login = () => {
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
        <Row className="">
            <Col lg={6} md={6} sm={12}>
            <div className="login-text">
                <h1>Welcome Back...</h1>
            </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
            <Form className="form">
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
            <Button className="" type="submit">
                Login
            </Button>
            <Form.Text className="d-block">You don&apos;t have an acount ? <Link className="login-signup" to="/signup">SignUp Here</Link></Form.Text>
            </Form>
            </Col>
        </Row>
        </Container>
    </section>
)
}

export default Login