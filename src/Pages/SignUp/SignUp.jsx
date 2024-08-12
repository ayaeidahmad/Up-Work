import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignUp.css';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import axios from 'axios'; // استيراد مكتبة Axios
import SignUpImaage from './../../assets/Images/signup.jpg';
import logo from './../../assets/Images/upwork1.png';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const navigate = useNavigate(); // استخدام useNavigate للتوجيه

    const handleSubmit = async (event) => {
        event.preventDefault(); // منع إعادة تحميل الصفحة
        if (password !== password2) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name,
                email,
                password
            });
            console.log(response.data);
            localStorage.setItem('token',response.data.access_token)
            // توجيه المستخدم إلى صفحة أخرى بعد التسجيل الناجح
            navigate('/landingPage');
        } catch (error) {
            console.error("There was an error!", error);
            alert("Failed to register. Please try again.");
        }
    };

    return (
        <section className="signup">
            <Container>
                <Row className="rowSingnUp">
                    <Link to="/landingPage">
                        <FontAwesomeIcon className="ArrowAltCircleLeft" icon={faArrowAltCircleLeft} />
                    </Link>
                    <Col className="colImage" lg={6} md={6} sm={12}>
                        <div className="signUp-image">
                            <img src={SignUpImaage} alt="SignUpImaage" />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Form className="form" onSubmit={handleSubmit}>
                            <Link to="/landingPage"><img className="logo" src={logo} alt="logo" /></Link>
                            <h1>Create your account</h1>
                            <p>it&apos;s just a few minutes and free</p>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    className="signup-input"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    className="signup-input"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <div className="containerPassword">
                                    <Form.Control
                                        className="signup-input-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        minLength={8}
                                        placeholder="Enter password"
                                        required
                                    />
                                    <div className="icon-password" onClick={() => setShowPassword(!showPassword)}>
                                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                                    </div>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <div className="containerConfirmPassword">
                                    <Form.Control
                                        className="signup-input-confirm-password"
                                        type={showPassword2 ? 'text' : 'password'}
                                        value={password2}
                                        onChange={(e) => setPassword2(e.target.value)}
                                        placeholder="Confirm Password"
                                        required
                                    />
                                    <div className="icon-password2" onClick={() => setShowPassword2(!showPassword2)}>
                                        <FontAwesomeIcon icon={showPassword2 ? faEye : faEyeSlash} />
                                    </div>
                                </div>
                            </Form.Group>
                            <Button type="submit">Sign Up</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SignUp;